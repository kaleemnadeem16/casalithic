import { useEffect } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import gallery01 from "../../assets/office-furniture/gallery/office-furniture-gallery-01.webp";
import gallery02 from "../../assets/office-furniture/gallery/office-furniture-gallery-02.webp";
import gallery03 from "../../assets/office-furniture/gallery/office-furniture-gallery-03.webp";
import gallery04 from "../../assets/office-furniture/gallery/office-furniture-gallery-04.webp";
import gallery05 from "../../assets/office-furniture/gallery/office-furniture-gallery-05.webp";
import gallery06 from "../../assets/office-furniture/gallery/office-furniture-gallery-06.webp";
import gallery07 from "../../assets/office-furniture/gallery/office-furniture-gallery-07.webp";
import gallery08 from "../../assets/office-furniture/gallery/office-furniture-gallery-08.webp";
import gallery09 from "../../assets/office-furniture/gallery/office-furniture-gallery-09.webp";
import "../Wardrobes/WardrobesPage.css";
import "./OfficeFurniturePage.css";

const officeFeatures = [
  {
    title: "Presence with purpose",
    text: "Sculptural desks, confident proportions and refined material transitions give leadership spaces an unmistakable sense of composure without excess.",
  },
  {
    title: "Comfort through the day",
    text: "Ergonomic support, tactile upholstery and precise adjustment are integrated discreetly, sustaining focus through every conversation and decision.",
  },
  {
    title: "Order built into every piece",
    text: "Storage, power and cable management disappear within beautifully resolved furniture, allowing the working environment to remain calm and effortless.",
  },
];

const finishNotes = ["Selected Wood Finishes", "Hand-finished saddle leather", "Smooth stone surfaces", "Brushed bronze structures"];

const officeGallery = [
  { image: gallery02, title: "The executive desk", material: "Walnut · Leather · Bronze" },
  { image: gallery03, title: "The boardroom collection", material: "Timber · Leather · Integrated power" },
  { image: gallery04, title: "Architectural office storage", material: "Walnut · Stone · Warm illumination" },
  { image: gallery05, title: "The collaborative lounge", material: "Wool · Leather · Smoked glass" },
  { image: gallery08, title: "The executive workstation", material: "Walnut · Textile · Cable management" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function OfficeFurniturePage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  return (
    <div className="page wardrobe-page office-furniture-page" id="page-top">
      <Header />

      <main>
        <section className="wardrobe-hero" aria-labelledby="office-furniture-title">
          <img src={gallery01} alt="Sculptural walnut executive desk and tailored seating in a refined private office above the city" />
          <div className="wardrobe-hero-shade" />
          <div className="wardrobe-hero-content" data-reveal-block>
            <span className="eyebrow">Office Solution</span>
            <h1 id="office-furniture-title">Authority, expressed with restraint.</h1>
            <p>
              Distinguished furniture for private offices, boardrooms and executive
              workplaces—created to bring clarity, comfort and presence to every working day.
            </p>
            <a className="button button-solid" href="#office-furniture-inquiry">Compose your workplace</a>
          </div>
          <div className="wardrobe-hero-meta" data-reveal-block>
            <span>Executive · Meeting · Workplace</span>
            <span>Timber · Leather · Stone</span>
            <span>Designed for purposeful work</span>
          </div>
          <a className="wardrobe-scroll" href="#office-furniture-introduction" aria-label="Scroll to the office solution collection story">
            <span /> Explore
          </a>
        </section>

        <section className="wardrobe-intro" id="office-furniture-introduction" data-reveal-block>
          <div className="wardrobe-intro-signature">
            <div className="wardrobe-section-index">
              <span>10 / The collection</span>
              <p>Furniture that gives clear thought, decisive work and meaningful conversation their place.</p>
            </div>
            <div className="wardrobe-intro-copy">
              <span className="eyebrow dark">Designed around the way you lead</span>
              <h2>A workplace that carries your standard into every detail.</h2>
              <p>
                A Casa Lithic® office begins with the atmosphere required to think,
                meet and lead with confidence. Furniture, technology and circulation
                are composed into an environment that feels ordered, assured and
                unmistakably personal.
              </p>
            </div>
            <div className="wardrobe-finish-list" aria-label="Office solution material families">
              {finishNotes.map((note) => (
                <div key={note}><span className="wardrobe-finish-bullet" aria-hidden="true" /><p>{note}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wardrobe-craft" data-reveal-block>
          <div className="wardrobe-craft-image">
            <img src={gallery07} alt="Hand-tailored saddle leather executive task chair with refined ergonomic mechanisms" />
            <span>Support, engineered with discretion</span>
          </div>
          <div className="wardrobe-craft-copy">
            <span className="eyebrow light">The distinction is in the precision</span>
            <h2>Ergonomics, elevated to an art.</h2>
            <p>
              A precisely shaped back, supportive seat and intuitive adjustments
              create comfort that remains naturally present through the longest working day.
            </p>
            <p>
              Hand-finished leather, exact stitching and a refined metal structure
              transform technical performance into a chair of lasting character.
            </p>
            <a className="wardrobe-line-link" href="#office-furniture-details">Discover the details <Arrow /></a>
          </div>
        </section>

        <section className="wardrobe-details" id="office-furniture-details">
          <div className="wardrobe-details-head" data-reveal-block>
            <span className="eyebrow dark">Made for a life of distinction</span>
            <h2>One clear language. Every way of working.</h2>
          </div>
          <div className="wardrobe-feature-grid">
            {officeFeatures.map((feature) => (
              <article key={feature.title} data-reveal-block>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wardrobe-gallery" aria-labelledby="office-furniture-gallery-title">
          <div className="wardrobe-gallery-head" data-reveal-block>
            <div>
              <span className="eyebrow dark">The office solution gallery</span>
              <h2 id="office-furniture-gallery-title">Composed for focus, exchange and command.</h2>
            </div>
            <p>
              From a singular executive desk to boardroom, storage, lounge and
              workstation systems, every family balances presence with practical intelligence.
            </p>
          </div>
          <div className="wardrobe-gallery-grid">
            {officeGallery.map((item, index) => (
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
            <span className="eyebrow dark">A setting for considered exchange</span>
            <h2>Meet. Consider. Decide.</h2>
            <p>
              Around a perfectly proportioned table, hierarchy gives way to clear
              conversation. Supportive seating, generous personal space and discreet
              technology create a room where attention remains on the ideas that matter.
            </p>
          </div>
          <div className="wardrobe-balance-image">
            <img src={gallery06} alt="Round smoked-oak meeting table with six saddle leather chairs in a private office" />
            <div><span>Private meeting collection</span><strong>Made for considered decisions</strong></div>
          </div>
        </section>

        <section className="wardrobe-process">
          <div className="wardrobe-process-head" data-reveal-block>
            <span className="eyebrow light">Your workplace, from first thought to final detail</span>
            <h2>An exceptional experience at every step.</h2>
          </div>
          <ol className="wardrobe-process-list" data-reveal-block>
            <li><span>01</span><strong>Discover</strong><p>We learn how you lead, collaborate, concentrate and receive within the workplace.</p></li>
            <li><span>02</span><strong>Plan</strong><p>Executive, meeting, storage and team settings become one intuitive working environment.</p></li>
            <li><span>03</span><strong>Tailor</strong><p>Furniture proportions, finishes, technology and comfort are refined around your standard.</p></li>
            <li><span>04</span><strong>Install</strong><p>Every piece is placed, connected and detailed until the workplace feels complete.</p></li>
          </ol>
        </section>

        <section className="wardrobe-inquiry" id="office-furniture-inquiry">
          <div className="wardrobe-inquiry-shade" />
          <div className="wardrobe-inquiry-copy" data-reveal-block>
            <span className="eyebrow">Begin your private consultation</span>
            <h2>Let us create a workplace equal to your ambition.</h2>
            <p>Share your vision and discover furniture composed around the way you think, meet and lead.</p>
            <a className="button button-solid" href="mailto:sales@casalithic.com?subject=Office furniture collection inquiry">
              Discuss your workplace <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default OfficeFurniturePage;
