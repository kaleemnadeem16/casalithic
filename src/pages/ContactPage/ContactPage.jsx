import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import heroImage from "../../assets/doors/gallery/doors-gallery-01.jpg";
import kitchenImage from "../../assets/kitchen/gallery/kitchen-gallery-02.jpg";
import wellnessImage from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-09.jpg";
import outdoorImage from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-09.jpg";
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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Casa Lithic project enquiry — ${data.get("projectType")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Location: ${data.get("location") || "Not specified"}`,
      `Project type: ${data.get("projectType")}`,
      `Preferred collection: ${data.get("collection") || "Not specified"}`,
      "",
      "Project vision:",
      data.get("message"),
    ].join("\n");

    window.location.href = `mailto:inquiries@casalithic.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
                  <a href="mailto:inquiries@casalithic.com">inquiries@casalithic.com</a>
                </div>
                <div>
                  <span>Consultations</span>
                  <strong>By private appointment</strong>
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
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field">
                  <label htmlFor="contact-name">Name *</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" required placeholder="Your name" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Email *</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-location">Project location</label>
                  <input id="contact-location" name="location" type="text" autoComplete="country-name" placeholder="City, country" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-project">Project type *</label>
                  <select id="contact-project" name="projectType" required defaultValue="">
                    <option value="" disabled>Select project type</option>
                    <option>Complete residence</option>
                    <option>Multiple rooms</option>
                    <option>Single collection</option>
                    <option>Professional space</option>
                  </select>
                </div>
                <div className="contact-field is-wide">
                  <label htmlFor="contact-collection">Collection of interest</label>
                  <select id="contact-collection" name="collection" defaultValue="">
                    <option value="">Select a collection</option>
                    <option>Wardrobes</option>
                    <option>Kitchen</option>
                    <option>Vanities & Wall Units</option>
                    <option>Doors</option>
                    <option>Flooring</option>
                    <option>Saunas & Cold Plunges</option>
                    <option>Indoor Furniture</option>
                    <option>Outdoor Furniture</option>
                    <option>Saloon Furniture</option>
                    <option>Office Furniture</option>
                    <option>Cinema Furniture</option>
                    <option>Several collections</option>
                  </select>
                </div>
                <div className="contact-field is-wide">
                  <label htmlFor="contact-message">Your vision *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Tell us about the spaces, atmosphere and experience you would like to create."
                  />
                </div>
                <div className="contact-form-footer">
                  <p>Submitting will open your email application with the enquiry prepared for your review.</p>
                  <button className="contact-submit" type="submit">Prepare enquiry ↗</button>
                </div>
              </form>
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
