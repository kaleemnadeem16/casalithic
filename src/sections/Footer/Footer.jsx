import "./Footer.css";

function Footer() {
  const isHomePage = window.location.pathname === "/";

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="footer-brand" href="/">CASA LITHIC<sup>®</sup></a>
        <p>
          Complete luxury interiors designed to make home feel more personal,
          more effortless, and entirely exceptional.
        </p>
        <nav className="footer-nav">
          <a href="/about">About</a>
          <a href="/#collections">Collections</a>
          <a href="/#direction">Approach</a>
          <a href="/gallery">Gallery</a>
          <a href="#contact-modal" data-contact-modal>Contact</a>
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
