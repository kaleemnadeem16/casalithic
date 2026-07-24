import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import FreeSlider from "../../sections/Collections/FreeSlider";
import heroImage from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-01.webp";
import philosophyImage from "../../assets/kitchen/gallery/kitchen-gallery-02.webp";
import closingImage from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-09.webp";
import "../../sections/Collections/Collections.css";
import "./CollectionsPage.css";

const principles = [
  {
    title: "Complete by design",
    text: "Every collection is conceived to belong to a larger interior, creating continuity from the first entrance to the most private room.",
  },
  {
    title: "Personal in every detail",
    text: "Proportion, material, finish and function are refined around the residence and the way you want to live within it.",
  },
  {
    title: "Made for lasting presence",
    text: "Exceptional materials and exacting craftsmanship give each piece a character that becomes richer through daily life.",
  },
];

function CollectionsPage() {
  return (
    <div className="page collections-page" id="page-top">
      <Header />
      <main>
        <section className="collections-page-hero" aria-labelledby="collections-page-title">
          <img
            src={heroImage}
            alt="Casa Lithic sculptural living collection in a refined private residence"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="collections-page-hero-shade" />
          <div className="collections-page-hero-copy" data-reveal-block>
            <span className="eyebrow">The Casa Lithic® collections</span>
            <h1 id="collections-page-title">A complete world for exceptional living.</h1>
            <p>
              Eleven collections bring architecture, furniture and private rituals
              into one considered vision—created to make every part of home feel
              unmistakably yours.
            </p>
            <a className="button button-solid" href="#collection-index">Explore every collection</a>
          </div>
          <a className="collections-page-scroll" href="#collection-index" aria-label="Scroll to all collections">
            <span /> Discover
          </a>
        </section>

        <section id="collection-index" className="section collections-section collection-page-slider" data-reveal-block>
          <div className="collections-shell">
            <div className="collections-contained">
              <div className="collections-intro">
                <div>
                  <span className="eyebrow dark">Eleven expressions of one vision</span>
                  <h2>Designed for every way you live.</h2>
                </div>
                <p>
                  Explore the complete collection—from architectural timber and
                  tailored furniture to private wellness, work and entertainment.
                </p>
              </div>
            </div>
            <FreeSlider />
          </div>
        </section>

        <section className="collections-page-philosophy">
          <div className="collections-page-philosophy-image" data-reveal-block>
            <img src={philosophyImage} alt="Warm walnut Casa Lithic kitchen composed as part of the architecture" loading="lazy" decoding="async" />
          </div>
          <div className="collections-page-philosophy-copy" data-reveal-block>
            <span className="eyebrow dark">One residence. One language.</span>
            <h2>Individual collections, composed as a complete home.</h2>
            <p className="collections-page-lead">
              A kitchen should belong with the floor beneath it, the doors that
              frame it and the furniture beyond. Casa Lithic® considers every
              collection as part of one atmosphere, giving the entire residence
              a subtle and deeply personal harmony.
            </p>
            <div className="collections-page-principles">
              {principles.map((principle) => (
                <article key={principle.title}>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="collections-page-closing">
          <img src={closingImage} alt="Private Casa Lithic wellness pavilion opening onto a tranquil garden" loading="lazy" decoding="async" />
          <div className="collections-page-closing-shade" />
          <div className="collections-page-closing-copy" data-reveal-block>
            <span className="eyebrow">Created around your life</span>
            <h2>Begin with one room. Imagine the entire world.</h2>
            <p>
              Share your residence with us and discover how the collections can
              come together in a home of rare comfort, distinction and belonging.
            </p>
            <a className="button button-solid" href="#contact-modal" data-contact-modal>
              Begin your private consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CollectionsPage;
