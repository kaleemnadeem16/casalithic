import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  getLanguageFromPath,
  getLanguageSwitchPath,
  localizePath,
} from "../../i18n/language";
import "./Header.css";

const collectionLinks = [
  ["Wardrobes", "/collections/wardrobes"],
  ["Kitchen", "/collections/kitchen"],
  ["Vanities & Wall Units", "/collections/vanities-wall-units"],
  ["Doors", "/collections/doors"],
  ["Flooring", "/collections/flooring"],
  ["Saunas & Cold Plunges", "/collections/saunas-cold-plunges"],
  ["Indoor Furniture", "/collections/indoor-furniture"],
  ["Outdoor Furniture", "/collections/outdoor-furniture"],
  ["Saloon Furniture", "/collections/saloon-furniture"],
  ["Office Furniture", "/collections/office-furniture"],
  ["Cinema Furniture", "/collections/cinema-furniture"],
];

function Header() {
  const headerRef = useRef(null);
  const lastScrollRef = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const language = getLanguageFromPath();
  const collectionsLink = localizePath("/collections", language);

  const renderLanguageSwitcher = (mobile = false) => (
    <nav className={`language-switcher ${mobile ? "is-mobile" : ""}`} aria-label="Language selection">
      <a
        className={language === "it" ? "is-active" : ""}
        href={getLanguageSwitchPath("it")}
        hrefLang="it"
        lang="it"
        aria-current={language === "it" ? "true" : undefined}
      >
        IT
      </a>
      <span aria-hidden="true" />
      <a
        className={language === "en" ? "is-active" : ""}
        href={getLanguageSwitchPath("en")}
        hrefLang="en"
        lang="en"
        aria-current={language === "en" ? "true" : undefined}
      >
        EN
      </a>
    </nav>
  );

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMenuOpen);
    document.documentElement.classList.toggle("mobile-menu-open", isMenuOpen);
    if (!isMenuOpen) setIsCollectionsOpen(false);

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("mobile-menu-open");
      document.documentElement.classList.remove("mobile-menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return undefined;

    gsap.set(header, {
      y: 0,
      backgroundColor: "rgba(10, 10, 10, 0)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    });

    const onScroll = () => {
      const current = window.scrollY;
      const scrollingDown = current > lastScrollRef.current && current > 160;

      gsap.to(header, {
        y: scrollingDown ? -8 : 0,
        backgroundColor:
          current > 30 ? "rgba(12, 12, 12, 0.78)" : "rgba(10, 10, 10, 0)",
        backdropFilter: current > 30 ? "blur(14px)" : "blur(0px)",
        boxShadow:
          current > 30 ? "0 18px 50px rgba(0,0,0,0.18)" : "0 0 0 rgba(0,0,0,0)",
        duration: 0.35,
        ease: "power2.out",
      });

      lastScrollRef.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderNavLinks = (mobile = false) => (
    <>
      <a href={localizePath("/", language)} onClick={() => setIsMenuOpen(false)}>Home</a>
      <a href={localizePath("/about", language)} onClick={() => setIsMenuOpen(false)}>About</a>
      <div className={mobile ? "mobile-menu-group" : "header-nav-group"}>
        {mobile ? (
          <>
            <div className="mobile-menu-parent">
              <a href={collectionsLink} onClick={() => setIsMenuOpen(false)}>Collections</a>
              <button
                className={`mobile-submenu-toggle ${isCollectionsOpen ? "is-open" : ""}`}
                type="button"
                aria-label={isCollectionsOpen ? "Close collection pages" : "Open collection pages"}
                aria-expanded={isCollectionsOpen}
                aria-controls="mobile-collection-pages"
                onClick={() => setIsCollectionsOpen((open) => !open)}
              >
                <span />
                <span />
              </button>
            </div>
            <div
              className={`mobile-menu-subgroup ${isCollectionsOpen ? "is-open" : ""}`}
              id="mobile-collection-pages"
              aria-hidden={!isCollectionsOpen}
            >
              {collectionLinks.map(([label, href]) => (
                <a className="mobile-menu-sub" href={localizePath(href, language)} onClick={() => setIsMenuOpen(false)} key={href}>
                  {label}
                </a>
              ))}
            </div>
          </>
        ) : (
          <>
            <a href={collectionsLink} onClick={() => setIsMenuOpen(false)}>Collections</a>
            <div className="header-submenu">
              {collectionLinks.map(([label, href]) => (
                <a href={localizePath(href, language)} key={href}>{label}</a>
              ))}
            </div>
          </>
        )}
      </div>
      <a href={localizePath("/gallery", language)} onClick={() => setIsMenuOpen(false)}>Gallery</a>
      <a href={localizePath("/contact", language)} onClick={() => setIsMenuOpen(false)}>Contact</a>
    </>
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header ${isMenuOpen ? "menu-is-open" : ""}`}
      >
        <div className="site-header-inner">
          <a href={localizePath("/", language)} className="brand" onClick={() => setIsMenuOpen(false)}>
            CASA LITHIC<sup>®</sup>
          </a>
          <nav className="header-nav desktop-nav" aria-label="Primary navigation">
            {renderNavLinks(false)}
          </nav>
          <div className="header-actions desktop-cta">
            {renderLanguageSwitcher(false)}
            <a
              className="header-cta"
              href="#contact-modal"
              data-contact-modal
              onClick={() => setIsMenuOpen(false)}
            >
              Enter the World
            </a>
          </div>
          <div className="mobile-header-controls">
            {renderLanguageSwitcher(false)}
            <button
              className="menu-toggle"
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="site-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu-panel ${isMenuOpen ? "is-open" : ""}`}
        id="site-menu"
        aria-hidden={!isMenuOpen}
      >
        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          {renderNavLinks(true)}
        </nav>
        <a
          className="mobile-menu-cta"
          href="#contact-modal"
          data-contact-modal
          onClick={() => setIsMenuOpen(false)}
        >
          Enter the World
        </a>
      </div>
    </>
  );
}

export default Header;
