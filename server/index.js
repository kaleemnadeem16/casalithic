import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { handleContactRequest } from "./contactApi.js";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = resolve(root, "dist");
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

async function serveFile(response, filePath) {
  const fileStat = await stat(filePath);
  if (!fileStat.isFile()) throw new Error("Not a file");
  response.statusCode = 200;
  response.setHeader("Content-Type", mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream");
  response.setHeader("Cache-Control", extname(filePath) === ".html" ? "no-cache" : "public, max-age=31536000, immutable");
  createReadStream(filePath).pipe(response);
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);

  if (url.pathname === "/api/contact") {
    await handleContactRequest(request, response);
    return;
  }

  try {
    const requestedPath = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1));
    const filePath = resolve(dist, requestedPath);
    if (filePath !== dist && !filePath.startsWith(`${dist}${sep}`)) {
      response.statusCode = 403;
      response.end("Forbidden");
      return;
    }
    await serveFile(response, filePath);
  } catch {
    try {
      await serveFile(response, resolve(dist, "index.html"));
    } catch {
      response.statusCode = 404;
      response.end("Not found. Run npm run build before starting the production server.");
    }
  }
});

server.listen(port, () => {
  console.log(`Casa Lithic server listening on http://localhost:${port}`);
});
