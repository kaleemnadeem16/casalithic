import { access, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetRoot = path.join(projectRoot, "src", "assets");
const sourceRoot = path.join(projectRoot, "src");
const rasterExtensions = new Set([".jpg", ".jpeg", ".png"]);
const codeExtensions = new Set([".js", ".jsx", ".css", ".html"]);

const deleteOriginals = process.argv.includes("--delete-originals");
const force = process.argv.includes("--force");
const qualityArgument = process.argv.find((argument) => argument.startsWith("--quality="));
const quality = Number(qualityArgument?.split("=")[1] || 82);

if (!Number.isInteger(quality) || quality < 1 || quality > 100) {
  throw new Error("WebP quality must be an integer between 1 and 100.");
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const resolved = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(resolved) : resolved;
    })
  );
  return files.flat();
}

function webpPathFor(sourcePath) {
  return sourcePath.replace(/\.(?:jpe?g|png)$/i, ".webp");
}

function normalizedRelative(fromDirectory, target) {
  return path.relative(fromDirectory, target).replaceAll(path.sep, "/");
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function updateSourceReferences(conversions) {
  const codeFiles = (await walk(sourceRoot)).filter((file) =>
    codeExtensions.has(path.extname(file).toLowerCase())
  );
  let updatedFiles = 0;

  for (const codeFile of codeFiles) {
    const directory = path.dirname(codeFile);
    let content = await readFile(codeFile, "utf8");
    const original = content;

    for (const { source, output } of conversions) {
      const oldReference = normalizedRelative(directory, source);
      const newReference = normalizedRelative(directory, output);
      content = content.replaceAll(oldReference, newReference);
    }

    if (content !== original) {
      await writeFile(codeFile, content, "utf8");
      updatedFiles += 1;
    }
  }

  return updatedFiles;
}

const rasterFiles = (await walk(assetRoot)).filter((file) =>
  rasterExtensions.has(path.extname(file).toLowerCase())
);

const outputs = new Map();
const conversions = rasterFiles.map((source) => {
  const output = webpPathFor(source);
  const previousSource = outputs.get(output.toLowerCase());
  if (previousSource && previousSource !== source) {
    throw new Error(`Output collision: ${previousSource} and ${source} both map to ${output}`);
  }
  outputs.set(output.toLowerCase(), source);
  return { source, output };
});

let converted = 0;
let skipped = 0;
let sourceBytes = 0;

for (const conversion of conversions) {
  const sourceStats = await stat(conversion.source);
  sourceBytes += sourceStats.size;
  const outputExists = await exists(conversion.output);
  const outputStats = outputExists ? await stat(conversion.output) : null;
  const isCurrent = outputStats && outputStats.mtimeMs >= sourceStats.mtimeMs;

  if (!force && isCurrent) {
    skipped += 1;
    continue;
  }

  await sharp(conversion.source)
    .rotate()
    .webp({
      quality,
      alphaQuality: 90,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(conversion.output);
  converted += 1;
}

const updatedFiles = await updateSourceReferences(conversions);
let outputBytes = 0;
for (const { output } of conversions) outputBytes += (await stat(output)).size;

if (deleteOriginals) {
  for (const { source } of conversions) await rm(source);
}

const saving = sourceBytes > 0 ? (1 - outputBytes / sourceBytes) * 100 : 0;
const mb = (bytes) => (bytes / 1024 / 1024).toFixed(2);

console.log(`WebP conversion complete at quality ${quality}.`);
console.log(`Converted: ${converted}; current: ${skipped}; references updated: ${updatedFiles}.`);
console.log(`Content images: ${mb(sourceBytes)} MB -> ${mb(outputBytes)} MB (${saving.toFixed(1)}% smaller).`);
console.log(deleteOriginals ? "Original JPG/PNG content images removed." : "Original images retained. Use --delete-originals after review.");
