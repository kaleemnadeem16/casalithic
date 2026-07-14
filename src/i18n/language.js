export const LANGUAGE_ENGLISH = "en";
export const LANGUAGE_ITALIAN = "it";

export function getLanguageFromPath(pathname = window.location.pathname) {
  return pathname === "/en" || pathname.startsWith("/en/")
    ? LANGUAGE_ENGLISH
    : LANGUAGE_ITALIAN;
}

export function stripLanguagePrefix(pathname = window.location.pathname) {
  if (pathname === "/en" || pathname === "/en/") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname || "/";
}

export function localizePath(path, language = getLanguageFromPath()) {
  if (!path || path.startsWith("#") || /^(mailto:|tel:|https?:)/i.test(path)) {
    return path;
  }

  const [pathAndSearch, hash = ""] = path.split("#");
  const cleanPath = stripLanguagePrefix(pathAndSearch || "/");
  const localized = language === LANGUAGE_ENGLISH
    ? cleanPath === "/" ? "/en" : `/en${cleanPath}`
    : cleanPath;

  return `${localized}${hash ? `#${hash}` : ""}`;
}

export function getLanguageSwitchPath(targetLanguage) {
  const localized = localizePath(
    `${stripLanguagePrefix(window.location.pathname)}${window.location.search}`,
    targetLanguage
  );
  return `${localized}${window.location.hash}`;
}

export function isLocalizedHome(pathname = window.location.pathname) {
  return stripLanguagePrefix(pathname).replace(/\/$/, "") === "";
}
