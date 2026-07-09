import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="footer-brand" href="#home">CASA LITHIC<sup>®</sup></a>
        <p>
          Complete luxury interiors designed to make home feel more personal,
          more effortless, and entirely exceptional.
        </p>
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#collections">Collections</a>
          <a href="#direction">Approach</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Casa Lithic®</span>
        <span>English · Italiano</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
