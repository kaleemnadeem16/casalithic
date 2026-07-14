import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import heroImage from "../../assets/doors/gallery/doors-gallery-01.webp";
import kitchenImage from "../../assets/kitchen/gallery/kitchen-gallery-02.webp";
import wellnessImage from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-09.webp";
import outdoorImage from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-09.webp";
import "../EditorialPages.css";

const expectations = [
  {
    number: "01",
    title: "A personal conversation",
    text: "We begin with your home, your priorities and the moments you want the finished spaces to elevate.",
  },
  {
    number: "02",
    title: "A considered direction",
    text: "Your preferred collections, materials and atmosphere are brought into a clear initial design direction.",
  },
  {
    number: "03",
    title: "A complete perspective",
    text: "We consider how individual rooms and pieces can belong to one coherent and deeply personal residence.",
  },
];

function ContactPage() {
  return (
    <div className="page editorial-page contact-page" id="page-top">
      <Header />

      <main>
        <section className="editorial-hero" aria-labelledby="contact-page-title">
          <img src={heroImage} alt="Warm Casa Lithic timber entrance welcoming guests into a private residence" />
          <div className="editorial-hero-shade" />
          <div className="editorial-hero-content" data-reveal-block>
            <span className="eyebrow">Private Consultation</span>
            <h1 id="contact-page-title">Begin with the way you want to live.</h1>
            <p>
              Tell us about your residence, the collections you are considering and
              the atmosphere you want to create. Every exceptional interior begins with listening.
            </p>
            <a className="button button-solid" href="#project-enquiry">Share your vision</a>
          </div>
          <a className="editorial-hero-foot" href="#project-enquiry">Contact us</a>
        </section>

        <section className="contact-consultation" id="project-enquiry">
          <div className="editorial-shell contact-consultation-grid">
            <div className="contact-details" data-reveal-block>
              <span className="eyebrow dark">Speak with Casa Lithic®</span>
              <h2>Your private consultation starts here.</h2>
              <p className="editorial-body">
                Whether you are considering a single collection or a complete interior,
                share as much as you know today. We will help bring clarity to what comes next.
              </p>
              <div className="contact-detail-list">
                <div>
                  <span>Email</span>
                  <span className="contact-email-links">
                    <a data-contact-direct href="mailto:sales@casalithic.com">sales@casalithic.com</a>
                    <a data-contact-direct href="mailto:info@casalithic.com">info@casalithic.com</a>
                  </span>
                </div>
                <div>
                  <span>Projects</span>
                  <strong>Individual collections · Complete residences</strong>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap" data-reveal-block>
              <span>Project enquiry</span>
              <h3>Tell us what exceptional living means to you.</h3>
              <ContactForm idPrefix="contact-page" />
            </div>
          </div>
        </section>

        <section className="contact-expect editorial-dark">
          <div className="editorial-shell">
            <div className="contact-expect-head" data-reveal-block>
              <div>
                <span className="eyebrow light">What happens next</span>
                <h2 className="editorial-heading">An attentive beginning to an exceptional result.</h2>
              </div>
              <p className="editorial-body">
                Our first exchange is designed to understand your ambitions and identify
                the most thoughtful path from an initial idea to a beautifully resolved home.
              </p>
            </div>
            <div className="contact-expect-grid">
              {expectations.map((item) => (
                <article key={item.number} data-reveal-block>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-image-band" aria-label="Casa Lithic living environments">
          <div><img src={wellnessImage} alt="Private garden wellness suite" /></div>
          <div><img src={kitchenImage} alt="Walnut statement kitchen overlooking a city" /></div>
          <div><img src={outdoorImage} alt="Outdoor lounge overlooking a mountain lake" /></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;
