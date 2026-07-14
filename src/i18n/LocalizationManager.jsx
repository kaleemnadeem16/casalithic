import { useLayoutEffect } from "react";
import { italianPhraseTranslations, italianTranslations } from "./italianTranslations";
import { getLanguageFromPath } from "./language";
import { getSeoPage } from "./seoData";

const TRANSLATED_ATTRIBUTES = ["aria-label", "placeholder", "title"];
const SKIPPED_PARENTS = new Set(["SCRIPT", "STYLE", "NOSCRIPT"]);
const TRANSLATED_TEXT_VALUES = new WeakMap();
const SORTED_PHRASE_TRANSLATIONS = [...italianPhraseTranslations].sort(
  ([first], [second]) => second.length - first.length
);
const ITALIAN_VALUES = new Set([
  ...Object.values(italianTranslations),
  ...italianPhraseTranslations.map(([, italian]) => italian),
]);

function replaceWholePhrase(value, english, italian) {
  const escaped = english.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const startsWithWord = /^[A-Za-z0-9_]/.test(english);
  const endsWithWord = /[A-Za-z0-9_]$/.test(english);
  const expression = `${startsWithWord ? "\\b" : ""}${escaped}${endsWithWord ? "\\b" : ""}`;
  return value.replace(new RegExp(expression, "g"), italian);
}

function translateValue(value) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (italianTranslations[normalized]) return italianTranslations[normalized];
  if (ITALIAN_VALUES.has(normalized)) return value;

  const exploreCollection = normalized.match(/^Explore the (.+) collection$/);
  if (exploreCollection) {
    const collection = italianTranslations[exploreCollection[1]] || exploreCollection[1];
    return `Esplora la collezione ${collection}`;
  }

  const collectionAlt = normalized.match(/^(.+) collection$/);
  if (collectionAlt) {
    const collection = italianTranslations[collectionAlt[1]] || collectionAlt[1];
    return `Collezione ${collection}`;
  }

  const showSlide = normalized.match(/^Show slide (\d+)$/);
  if (showSlide) return `Mostra diapositiva ${showSlide[1]}`;

  const openInGallery = normalized.match(/^Open (.+) in gallery$/);
  if (openInGallery) {
    const title = italianTranslations[openInGallery[1]] || openInGallery[1];
    return `Apri ${title} nella galleria`;
  }

  const showGallerySet = normalized.match(/^Show gallery set (\d+)$/);
  if (showGallerySet) return `Mostra serie della galleria ${showGallerySet[1]}`;

  if (normalized.length > 90) return value;

  const translated = SORTED_PHRASE_TRANSLATIONS.reduce(
    (result, [english, italian]) => replaceWholePhrase(result, english, italian),
    normalized
  );
  return translated === normalized ? value : translated;
}

function translateTextNode(node) {
  const current = node.nodeValue;
  if (!current?.trim() || SKIPPED_PARENTS.has(node.parentElement?.tagName)) return;
  if (TRANSLATED_TEXT_VALUES.get(node) === current) return;

  const leading = current.match(/^\s*/)?.[0] || "";
  const trailing = current.match(/\s*$/)?.[0] || "";
  const translated = translateValue(current);
  const next = translated !== current ? `${leading}${translated.trim()}${trailing}` : current;
  TRANSLATED_TEXT_VALUES.set(node, next);
  if (next !== current) node.nodeValue = next;
}

function translateElement(element) {
  TRANSLATED_ATTRIBUTES.forEach((attribute) => {
    if (!element.hasAttribute?.(attribute)) return;
    const current = element.getAttribute(attribute);
    const translated = translateValue(current);
    if (translated !== current) element.setAttribute(attribute, translated);
  });
}

function translateTree(root) {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;

  if (root.nodeType === Node.ELEMENT_NODE) translateElement(root);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
    else translateElement(node);
    node = walker.nextNode();
  }
}

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setSearchMetadata(language) {
  const page = getSeoPage(window.location.pathname, language);
  const italianUrl = `https://casalithic.com${page.route === "/" ? "/" : page.route}`;
  const englishUrl = `https://casalithic.com${page.route === "/" ? "/en" : `/en${page.route}`}`;
  const currentUrl = language === "it" ? italianUrl : englishUrl;
  const imageUrl = new URL(page.image, "https://casalithic.com").href;

  document.documentElement.lang = language;
  document.title = page.title;
  setMeta("name", "description", page.description);
  setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  setMeta("property", "og:type", "website");
  setMeta("property", "og:site_name", "Casa Lithic®");
  setMeta("property", "og:title", page.title);
  setMeta("property", "og:description", page.description);
  setMeta("property", "og:url", currentUrl);
  setMeta("property", "og:image", imageUrl);
  setMeta("property", "og:image:type", "image/webp");
  setMeta("property", "og:image:alt", page.name);
  setMeta("property", "og:locale", language === "it" ? "it_IT" : "en_US");
  setMeta("property", "og:locale:alternate", language === "it" ? "en_US" : "it_IT");
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", page.title);
  setMeta("name", "twitter:description", page.description);
  setMeta("name", "twitter:image", imageUrl);
  setMeta("name", "twitter:image:alt", page.name);

  const links = [
    ["canonical", language === "it" ? italianUrl : englishUrl],
    ["alternate-it", italianUrl],
    ["alternate-en", englishUrl],
    ["alternate-default", italianUrl],
  ];

  links.forEach(([key, href]) => {
    let link = document.head.querySelector(`link[data-locale-link="${key}"]`);
    if (!link) {
      link = document.createElement("link");
      link.dataset.localeLink = key;
      document.head.appendChild(link);
    }
    link.rel = key === "canonical" ? "canonical" : "alternate";
    if (key !== "canonical") link.hreflang = key.replace("alternate-", "").replace("default", "x-default");
    link.href = href;
  });

  const homeName = language === "it" ? "Home" : "Home";
  const collectionsName = language === "it" ? "Collezioni" : "Collections";
  const breadcrumbItems = [{ name: homeName, url: language === "it" ? "https://casalithic.com/" : "https://casalithic.com/en" }];
  if (page.route.startsWith("/collections/")) {
    breadcrumbItems.push({
      name: collectionsName,
      url: language === "it" ? "https://casalithic.com/collections" : "https://casalithic.com/en/collections",
    });
  }
  if (page.route !== "/") breadcrumbItems.push({ name: page.name, url: currentUrl });

  const graph = [
    {
      "@type": "Organization",
      "@id": "https://casalithic.com/#organization",
      name: "Casa Lithic®",
      url: "https://casalithic.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://casalithic.com/favicon.png",
      },
      email: ["sales@casalithic.com", "info@casalithic.com"],
    },
    {
      "@type": "WebSite",
      "@id": "https://casalithic.com/#website",
      url: "https://casalithic.com/",
      name: "Casa Lithic®",
      publisher: { "@id": "https://casalithic.com/#organization" },
      inLanguage: ["it", "en"],
    },
    {
      "@type": page.type,
      "@id": `${currentUrl}#webpage`,
      url: currentUrl,
      name: page.title,
      description: page.description,
      inLanguage: language,
      isPartOf: { "@id": "https://casalithic.com/#website" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
      },
      breadcrumb: { "@id": `${currentUrl}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    },
  ];

  let structuredData = document.head.querySelector("#casalithic-structured-data");
  if (!structuredData) {
    structuredData = document.createElement("script");
    structuredData.id = "casalithic-structured-data";
    structuredData.type = "application/ld+json";
    document.head.appendChild(structuredData);
  }
  structuredData.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

function LocalizationManager() {
  const language = getLanguageFromPath();

  useLayoutEffect(() => {
    setSearchMetadata(language);
    if (language !== "it") return undefined;

    translateTree(document.body);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") {
          translateTextNode(mutation.target);
          return;
        }
        mutation.addedNodes.forEach(translateTree);
      });
    });
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  return null;
}

export default LocalizationManager;
