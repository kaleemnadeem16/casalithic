import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Header.css";

function Header() {
  const headerRef = useRef(null);
  const lastScrollRef = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const renderNavLinks = () => (
    <>
      <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
      <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
      <a href="#collections" onClick={() => setIsMenuOpen(false)}>Collections</a>
      <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
      <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
    </>
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header ${isMenuOpen ? "menu-is-open" : ""}`}
      >
        <div className="site-header-inner">
          <a href="#home" className="brand" onClick={() => setIsMenuOpen(false)}>
            CASA LITHIC<sup>®</sup>
          </a>
          <nav className="header-nav desktop-nav" aria-label="Primary navigation">
            {renderNavLinks()}
          </nav>
          <a
            className="header-cta desktop-cta"
            href="#contact"
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
          {renderNavLinks()}
        </nav>
        <a
          className="mobile-menu-cta"
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Enter the World
        </a>
      </div>
    </>
  );
}

export default Header;
