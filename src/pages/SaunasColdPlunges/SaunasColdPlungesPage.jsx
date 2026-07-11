import { useEffect } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import gallery01 from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-01.jpg";
import gallery02 from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-02.jpg";
import gallery03 from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-03.jpg";
import gallery04 from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-04.jpg";
import gallery06 from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-06.jpg";
import gallery07 from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-07.jpg";
import gallery08 from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-08.jpg";
import gallery09 from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-09.jpg";
import "../Wardrobes/WardrobesPage.css";
import "./SaunasColdPlungesPage.css";

const wellnessFeatures = [
  {
    number: "01",
    title: "Restorative warmth",
    text: "Selected timber, generous benches and softly integrated illumination create a sauna experience that feels enveloping, private and beautifully calm.",
  },
  {
    number: "02",
    title: "Invigorating contrast",
    text: "A precisely formed stainless plunge, wrapped in warm timber, introduces a clear counterpoint of temperature, material and sensation.",
  },
  {
    number: "03",
    title: "Architectural serenity",
    text: "Sauna, plunge, lighting and surrounding finishes are composed as one complete environment, giving a personal ritual its own refined sense of place.",
  },
];

const finishNotes = ["Selected sauna timbers", "Brushed stainless steel", "Integrated warm illumination", "Tailored spatial planning"];

const wellnessGallery = [
  { image: gallery02, title: "Private timber sauna", material: "Light timber · Warm illumination" },
  { image: gallery03, title: "Tiered sauna interior", material: "Clear glass · Sculpted benches" },
  { image: gallery06, title: "Timber-clad cold plunge", material: "Stainless steel · Natural timber" },
  { image: gallery07, title: "Complete contrast suite", material: "Cold plunge · Sauna · Water" },
  { image: gallery08, title: "Integrated wellness room", material: "Sauna and plunge · Honed stone" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SaunasColdPlungesPage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  return (
    <div className="page wardrobe-page wellness-page" id="page-top">
      <Header />

      <main>
        <section className="wardrobe-hero" aria-labelledby="wellness-title">
          <img src={gallery01} alt="Light timber sauna in a refined private wellness room" />
          <div className="wardrobe-hero-shade" />
          <div className="wardrobe-hero-content" data-reveal-block>
            <span className="eyebrow">Saunas &amp; Cold Plunges</span>
            <h1 id="wellness-title">Warmth. Cold. A ritual entirely your own.</h1>
            <p>
              Private wellness environments that bring enveloping timber warmth
              and invigorating contrast into one beautifully composed experience.
            </p>
            <a className="button button-solid" href="#wellness-inquiry">Create your sanctuary</a>
          </div>
          <div className="wardrobe-hero-meta" data-reveal-block>
            <span>Composed for your space</span>
            <span>Timber · Steel · Stone</span>
            <span>Designed for private ritual</span>
          </div>
          <a className="wardrobe-scroll" href="#wellness-introduction" aria-label="Scroll to the saunas and cold plunges collection story">
            <span /> Explore
          </a>
        </section>

        <section className="wardrobe-intro" id="wellness-introduction" data-reveal-block>
          <div className="wardrobe-intro-signature">
            <div className="wardrobe-section-index">
              <span>06 / The collection</span>
              <p>A private setting where contrast becomes a considered daily ritual.</p>
            </div>
            <div className="wardrobe-intro-copy">
              <span className="eyebrow dark">Wellness, composed as architecture</span>
              <h2>A sanctuary of warmth and stillness.</h2>
              <p>
                A Casa Lithic® wellness suite brings sauna and cold plunge into a
                single architectural language. Timber, steel, stone and light are
                balanced to create an atmosphere that feels secluded, restorative
                and unmistakably personal.
              </p>
            </div>
            <div className="wardrobe-finish-list" aria-label="Sauna and cold plunge material families">
              {finishNotes.map((note, index) => (
                <div key={note}><span>0{index + 1}</span><p>{note}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wardrobe-craft" data-reveal-block>
          <div className="wardrobe-craft-image">
            <img src={gallery04} alt="Three-quarter view of a finely crafted light timber sauna" />
            <span>Warmth, resolved in every detail</span>
          </div>
          <div className="wardrobe-craft-copy">
            <span className="eyebrow light">The distinction is in the atmosphere</span>
            <h2>Natural timber. Gentle light. Complete calm.</h2>
            <p>
              Within the sauna, clean timber lines, generous benching and carefully
              concealed illumination create a warm and beautifully ordered interior.
            </p>
            <p>
              Every proportion is considered for comfort and privacy, allowing the
              architecture to recede and the experience itself to take precedence.
            </p>
            <a className="wardrobe-line-link" href="#wellness-details">Discover the details <Arrow /></a>
          </div>
        </section>

        <section className="wardrobe-details" id="wellness-details">
          <div className="wardrobe-details-head" data-reveal-block>
            <span className="eyebrow dark">Made for a life of distinction</span>
            <h2>Two temperatures. One exceptional ritual.</h2>
          </div>
          <div className="wardrobe-feature-grid">
            {wellnessFeatures.map((feature) => (
              <article key={feature.number} data-reveal-block>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wardrobe-gallery" aria-labelledby="wellness-gallery-title">
          <div className="wardrobe-gallery-head" data-reveal-block>
            <div>
              <span className="eyebrow dark">The wellness gallery</span>
              <h2 id="wellness-gallery-title">A private retreat, shaped around you.</h2>
            </div>
            <p>
              From a compact timber sauna to a complete contrast suite, every
              environment balances sensory experience with quiet architectural beauty.
            </p>
          </div>
          <div className="wardrobe-gallery-grid">
            {wellnessGallery.map((item, index) => (
              <figure className={`wardrobe-gallery-item wardrobe-gallery-item--${index + 1}`} key={item.title} data-reveal-block>
                <div><img src={item.image} alt={item.title} /></div>
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")} / {item.material}</span>
                  <strong>{item.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="wardrobe-balance" data-reveal-block>
          <div className="wardrobe-balance-copy">
            <span className="eyebrow dark">A ritual connected to nature</span>
            <h2>Warm. Immerse. Renew.</h2>
            <p>
              The glow of timber gives way to the clarity of cold water. Beyond,
              a private garden settles the senses. Together, these moments create
              a wellness experience with its own unhurried rhythm.
            </p>
          </div>
          <div className="wardrobe-balance-image">
            <img src={gallery09} alt="Timber-clad cold plunge and glowing sauna opening onto a private garden" />
            <div><span>Garden wellness pavilion</span><strong>Made for daily ritual</strong></div>
          </div>
        </section>

        <section className="wardrobe-process">
          <div className="wardrobe-process-head" data-reveal-block>
            <span className="eyebrow light">Your sanctuary, from first thought to final detail</span>
            <h2>An exceptional experience at every step.</h2>
          </div>
          <ol className="wardrobe-process-list" data-reveal-block>
            <li><span>01</span><strong>Discover</strong><p>We learn the space, setting and rhythm you want your wellness ritual to follow.</p></li>
            <li><span>02</span><strong>Compose</strong><p>Sauna, plunge, circulation, materials and light become one resolved environment.</p></li>
            <li><span>03</span><strong>Craft</strong><p>Timber interiors and plunge details are created with exacting precision.</p></li>
            <li><span>04</span><strong>Install</strong><p>Every element is integrated, refined and prepared for private daily use.</p></li>
          </ol>
        </section>

        <section className="wardrobe-inquiry" id="wellness-inquiry">
          <div className="wardrobe-inquiry-shade" />
          <div className="wardrobe-inquiry-copy" data-reveal-block>
            <span className="eyebrow">Begin your private consultation</span>
            <h2>Let us create a wellness ritual that belongs entirely to your home.</h2>
            <p>Share your residence and discover how warmth, cold and calm can become one private sanctuary.</p>
            <a className="button button-solid" href="mailto:inquiries@casalithic.com?subject=Saunas and cold plunges collection inquiry">
              Discuss your sanctuary <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SaunasColdPlungesPage;
