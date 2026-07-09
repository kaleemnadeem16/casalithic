import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-cta" data-reveal-block>
        <div className="contact-copy">
          <h2>Your most exceptional way of living begins here.</h2>
          <p>
            Share your vision with Casa Lithic® and discover how a residence
            can feel when every room is created around you.
          </p>
          <div className="contact-actions">
            <a className="contact-primary" href="mailto:inquiries@casalithic.com?subject=Project inquiry">
              Begin your private consultation <span>↗</span>
            </a>
            <a className="contact-secondary" href="mailto:inquiries@casalithic.com?subject=Catalog request">
              Explore the collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
