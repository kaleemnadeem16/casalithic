import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const origin = "https://casalithic.com";
const lastModified = new Date().toISOString().slice(0, 10);
const routes = [
  "/",
  "/about",
  "/collections",
  "/gallery",
  "/contact",
  "/worldwide-presence",
  "/collections/wardrobes",
  "/collections/kitchen",
  "/collections/vanities-wall-units",
  "/collections/doors",
  "/collections/flooring",
  "/collections/sauna-cold-plunge",
  "/collections/indoor-furniture",
  "/collections/outdoor-furniture",
  "/collections/salon-solution",
  "/collections/office-solution",
  "/collections/cinema-solution",
];

const absoluteUrl = (route, language) => {
  if (language === "it") return `${origin}${route}`;
  return route === "/" ? `${origin}/en` : `${origin}/en${route}`;
};

const urlEntry = (route, language) => {
  const priority = route === "/" ? "1.0" : route === "/collections" ? "0.9" : "0.8";
  return [
    "  <url>",
    `    <loc>${absoluteUrl(route, language)}</loc>`,
    `    <lastmod>${lastModified}</lastmod>`,
    "    <changefreq>monthly</changefreq>",
    `    <priority>${priority}</priority>`,
    `    <xhtml:link rel="alternate" hreflang="it" href="${absoluteUrl(route, "it")}" />`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${absoluteUrl(route, "en")}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(route, "it")}" />`,
    "  </url>",
  ].join("\n");
};

const entries = routes.flatMap((route) => [urlEntry(route, "it"), urlEntry(route, "en")]);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...entries,
  "</urlset>",
  "",
].join("\n");

await writeFile(path.join(projectRoot, "public", "sitemap.xml"), sitemap, "utf8");
console.log(`Generated sitemap.xml with ${entries.length} localized URLs.`);
