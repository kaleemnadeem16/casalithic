import "./Footer.css";
import {
  getLanguageFromPath,
  getLanguageSwitchPath,
  isLocalizedHome,
  localizePath,
} from "../../i18n/language";

function Footer() {
  const language = getLanguageFromPath();
  const isHomePage = isLocalizedHome();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="footer-brand" href={localizePath("/", language)}>CASA LITHIC<sup>®</sup></a>
        <p>
          Complete luxury interiors designed to make home feel more personal,
          more effortless, and entirely exceptional.
        </p>
        <nav className="footer-nav">
          <a href={localizePath("/", language)}>Home</a>
          <a href={localizePath("/about", language)}>About</a>
          <a href={localizePath("/collections", language)}>Collections</a>
          <a href={localizePath("/contact", language)}>Contact</a>
          <a href={localizePath("/gallery", language)}>Gallery</a>
          <a href={localizePath("/worldwide-presence", language)}>Worldwide Presence</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Casa Lithic®</span>
        <nav className="footer-languages" aria-label="Language selection">
          <a className={language === "it" ? "is-active" : ""} href={getLanguageSwitchPath("it")} lang="it" hrefLang="it">Italiano</a>
          <span aria-hidden="true">·</span>
          <a className={language === "en" ? "is-active" : ""} href={getLanguageSwitchPath("en")} lang="en" hrefLang="en">English</a>
        </nav>
        <a href={isHomePage ? "#home" : "#page-top"}>Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
