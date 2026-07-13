import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Header.css";

function Header() {
  const headerRef = useRef(null);
  const lastScrollRef = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = window.location.pathname === "/";
  const sectionLink = (section) => `${isHomePage ? "" : "/"}#${section}`;

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMenuOpen);

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("mobile-menu-open");
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
      <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
      <a href="/about" onClick={() => setIsMenuOpen(false)}>About</a>
      <div className={mobile ? "mobile-menu-group" : "header-nav-group"}>
        <a href={sectionLink("collections")} onClick={() => setIsMenuOpen(false)}>Collections</a>
        {mobile ? (
          <div className="mobile-menu-subgroup">
            <a className="mobile-menu-sub" href="/collections/wardrobes" onClick={() => setIsMenuOpen(false)}>
              Wardrobes
            </a>
            <a className="mobile-menu-sub" href="/collections/kitchen" onClick={() => setIsMenuOpen(false)}>
              Kitchen
            </a>
            <a className="mobile-menu-sub" href="/collections/vanities-wall-units" onClick={() => setIsMenuOpen(false)}>
              Vanities &amp; Wall Units
            </a>
            <a className="mobile-menu-sub" href="/collections/doors" onClick={() => setIsMenuOpen(false)}>
              Doors
            </a>
            <a className="mobile-menu-sub" href="/collections/flooring" onClick={() => setIsMenuOpen(false)}>
              Flooring
            </a>
            <a className="mobile-menu-sub" href="/collections/saunas-cold-plunges" onClick={() => setIsMenuOpen(false)}>
              Saunas &amp; Cold Plunges
            </a>
            <a className="mobile-menu-sub" href="/collections/indoor-furniture" onClick={() => setIsMenuOpen(false)}>
              Indoor Furniture
            </a>
            <a className="mobile-menu-sub" href="/collections/outdoor-furniture" onClick={() => setIsMenuOpen(false)}>
              Outdoor Furniture
            </a>
            <a className="mobile-menu-sub" href="/collections/saloon-furniture" onClick={() => setIsMenuOpen(false)}>
              Saloon Furniture
            </a>
            <a className="mobile-menu-sub" href="/collections/office-furniture" onClick={() => setIsMenuOpen(false)}>
              Office Furniture
            </a>
            <a className="mobile-menu-sub" href="/collections/cinema-furniture" onClick={() => setIsMenuOpen(false)}>
              Cinema Furniture
            </a>
          </div>
        ) : (
          <div className="header-submenu">
            <a href="/collections/wardrobes">Wardrobes</a>
            <a href="/collections/kitchen">Kitchen</a>
            <a href="/collections/vanities-wall-units">Vanities &amp; Wall Units</a>
            <a href="/collections/doors">Doors</a>
            <a href="/collections/flooring">Flooring</a>
            <a href="/collections/saunas-cold-plunges">Saunas &amp; Cold Plunges</a>
            <a href="/collections/indoor-furniture">Indoor Furniture</a>
            <a href="/collections/outdoor-furniture">Outdoor Furniture</a>
            <a href="/collections/saloon-furniture">Saloon Furniture</a>
            <a href="/collections/office-furniture">Office Furniture</a>
            <a href="/collections/cinema-furniture">Cinema Furniture</a>
          </div>
        )}
      </div>
      <a href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
      <a href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
    </>
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header ${isMenuOpen ? "menu-is-open" : ""}`}
      >
        <div className="site-header-inner">
          <a href="/" className="brand" onClick={() => setIsMenuOpen(false)}>
            CASA LITHIC<sup>®</sup>
          </a>
          <nav className="header-nav desktop-nav" aria-label="Primary navigation">
            {renderNavLinks(false)}
          </nav>
          <a
            className="header-cta desktop-cta"
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Enter the World
          </a>
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
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Enter the World
        </a>
      </div>
    </>
  );
}

export default Header;
