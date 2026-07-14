import { useLayoutEffect } from "react";
import { italianPhraseTranslations, italianTranslations } from "./italianTranslations";
import { getLanguageFromPath } from "./language";

const TRANSLATED_ATTRIBUTES = ["aria-label", "placeholder", "title"];
const SKIPPED_PARENTS = new Set(["SCRIPT", "STYLE", "NOSCRIPT"]);
const SORTED_PHRASE_TRANSLATIONS = [...italianPhraseTranslations].sort(
  ([first], [second]) => second.length - first.length
);

function translateValue(value) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (italianTranslations[normalized]) return italianTranslations[normalized];

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
    (result, [english, italian]) => result.replaceAll(english, italian),
    normalized
  );
  return translated === normalized ? value : translated;
}

function translateTextNode(node) {
  if (!node.nodeValue?.trim() || SKIPPED_PARENTS.has(node.parentElement?.tagName)) return;
  const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
  const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
  const translated = translateValue(node.nodeValue);
  if (translated !== node.nodeValue) node.nodeValue = `${leading}${translated.trim()}${trailing}`;
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

function setSearchMetadata(language) {
  const cleanPath = window.location.pathname === "/en"
    ? "/"
    : window.location.pathname.replace(/^\/en(?=\/)/, "");
  const italianUrl = `https://casalithic.com${cleanPath}`;
  const englishUrl = `https://casalithic.com${cleanPath === "/" ? "/en" : `/en${cleanPath}`}`;

  document.documentElement.lang = language;
  document.title = language === "it"
    ? "Casa Lithic® | L'arte dell'abitare di lusso"
    : "Casa Lithic® | The Art of Luxury Living";

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = language === "it"
      ? "Casa Lithic® crea interni completi di lusso, arredi d'eccellenza e spazi privati pensati per rendere straordinaria la vita di ogni giorno."
      : "Casa Lithic® creates complete luxury interiors, premium furniture, and personal spaces designed to make every day feel exceptional.";
  }

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
