import "./Footer.css";

function Footer() {
  const isHomePage = window.location.pathname === "/";
  const sectionLink = (section) => `${isHomePage ? "" : "/"}#${section}`;

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="footer-brand" href="/">CASA LITHIC<sup>®</sup></a>
        <p>
          Complete luxury interiors designed to make home feel more personal,
          more effortless, and entirely exceptional.
        </p>
        <nav className="footer-nav">
          <a href={sectionLink("about")}>About</a>
          <a href={sectionLink("collections")}>Collections</a>
          <a href={sectionLink("direction")}>Approach</a>
          <a href={sectionLink("gallery")}>Gallery</a>
          <a href={sectionLink("contact")}>Contact</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Casa Lithic®</span>
        <span>English · Italiano</span>
        <a href={isHomePage ? "#home" : "#page-top"}>Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
