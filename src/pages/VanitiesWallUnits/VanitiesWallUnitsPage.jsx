import { useEffect } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import gallery01 from "../../assets/vanities-wall-units/gallery/vanities-wall-units-gallery-01.webp";
import gallery02 from "../../assets/vanities-wall-units/gallery/vanities-wall-units-gallery-02.webp";
import gallery03 from "../../assets/vanities-wall-units/gallery/vanities-wall-units-gallery-03.webp";
import gallery04 from "../../assets/vanities-wall-units/gallery/vanities-wall-units-gallery-04.webp";
import gallery05 from "../../assets/vanities-wall-units/gallery/vanities-wall-units-gallery-05.webp";
import gallery06 from "../../assets/vanities-wall-units/gallery/vanities-wall-units-gallery-06.webp";
import gallery07 from "../../assets/vanities-wall-units/gallery/vanities-wall-units-gallery-07.webp";
import gallery08 from "../../assets/vanities-wall-units/gallery/vanities-wall-units-gallery-08.webp";
import "../Wardrobes/WardrobesPage.css";
import "./VanitiesWallUnitsPage.css";

const compositionFeatures = [
  {
    number: "01",
    title: "Architectural fit",
    text: "Wall-to-wall, full-height or floating, every composition is proportioned to the room so cabinetry and architecture read as one considered whole.",
  },
  {
    number: "02",
    title: "Personal order",
    text: "Drawers, concealed storage and display spaces are configured around your rituals and possessions, keeping everything beautifully and intuitively placed.",
  },
  {
    number: "03",
    title: "Materials in harmony",
    text: "Fine timber, natural stone, restrained metalwork and soft illumination are balanced to give each piece warmth, depth and a distinctive presence.",
  },
];

const finishNotes = ["Selected timber finishes", "Honed natural stone", "Precision metal details", "Integrated illumination"];

const compositionGallery = [
  { image: gallery03, title: "Living room media wall", material: "Dark walnut · Honed limestone" },
  { image: gallery04, title: "Private dressing vanity", material: "Pale oak · Soft illumination" },
  { image: gallery05, title: "Dining display composition", material: "Smoked oak · Fluted display" },
  { image: gallery06, title: "Sculptural powder vanity", material: "Fluted walnut · Dark stone" },
  { image: gallery07, title: "Library wall and writing niche", material: "Natural walnut · Stone" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function VanitiesWallUnitsPage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  return (
    <div className="page wardrobe-page vanities-wall-units-page" id="page-top">
      <Header />

      <main>
        <section className="wardrobe-hero" aria-labelledby="vanities-wall-units-title">
          <img src={gallery01} alt="Bespoke walnut vanity suite with illuminated mirrors and architectural wall storage" />
          <div className="wardrobe-hero-shade" />
          <div className="wardrobe-hero-content" data-reveal-block>
            <span className="eyebrow">Vanities and Wall Units</span>
            <h1 id="vanities-wall-units-title">Private rituals. Beautifully composed.</h1>
            <p>
              Bespoke vanities and architectural wall units that bring effortless
              order, refined materials and a distinctive sense of presence to every room.
            </p>
            <a className="button button-solid" href="#vanities-wall-units-inquiry">Create your composition</a>
          </div>
          <div className="wardrobe-hero-meta" data-reveal-block>
            <span>Made to measure</span>
            <span>Fine wood · Stone · Metal</span>
            <span>Designed around your space</span>
          </div>
          <a className="wardrobe-scroll" href="#vanities-wall-units-introduction" aria-label="Scroll to the vanities and wall units collection story">
            <span /> Explore
          </a>
        </section>

        <section className="wardrobe-intro" id="vanities-wall-units-introduction" data-reveal-block>
          <div className="wardrobe-intro-signature">
            <div className="wardrobe-section-index">
              <span>03 / The collection</span>
              <p>Cabinetry that gives every room a more considered rhythm.</p>
            </div>
            <div className="wardrobe-intro-copy">
              <span className="eyebrow dark">Designed as part of the architecture</span>
              <h2>Storage, elevated into a statement.</h2>
              <p>
                Every Casa Lithic® vanity and wall unit is shaped for its room and
                the rituals it supports. Form, function and fine materials come
                together in cabinetry that feels calm, assured and entirely at home.
              </p>
            </div>
            <div className="wardrobe-finish-list" aria-label="Vanity and wall unit material families">
              {finishNotes.map((note, index) => (
                <div key={note}><span>0{index + 1}</span><p>{note}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wardrobe-craft" data-reveal-block>
          <div className="wardrobe-craft-image">
            <img src={gallery02} alt="Floating walnut vanity with integrated stone basin and precisely organised drawer" />
            <span>Precision you can feel</span>
          </div>
          <div className="wardrobe-craft-copy">
            <span className="eyebrow light">The distinction is in the detail</span>
            <h2>Beautifully resolved. Inside and out.</h2>
            <p>
              Within every vanity and wall unit is a precisely composed interior:
              silent drawers, concealed storage, integrated lighting and proportions
              created around what the room needs most.
            </p>
            <p>
              The result is an effortless sense of order, expressed through
              cabinetry that feels as exceptional to use as it is to behold.
            </p>
            <a className="wardrobe-line-link" href="#vanities-wall-units-details">Discover the details <Arrow /></a>
          </div>
        </section>

        <section className="wardrobe-details" id="vanities-wall-units-details">
          <div className="wardrobe-details-head" data-reveal-block>
            <span className="eyebrow dark">Made for a life of distinction</span>
            <h2>One architectural language. Endless expressions.</h2>
          </div>
          <div className="wardrobe-feature-grid">
            {compositionFeatures.map((feature) => (
              <article key={feature.number} data-reveal-block>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wardrobe-gallery" aria-labelledby="vanities-wall-units-gallery-title">
          <div className="wardrobe-gallery-head" data-reveal-block>
            <div>
              <span className="eyebrow dark">The composition gallery</span>
              <h2 id="vanities-wall-units-gallery-title">Cabinetry, composed for every room.</h2>
            </div>
            <p>
              From intimate vanities to complete architectural walls, every piece
              brings storage, display and atmosphere into a single refined expression.
            </p>
          </div>
          <div className="wardrobe-gallery-grid">
            {compositionGallery.map((item, index) => (
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
            <span className="eyebrow dark">A complete composition</span>
            <h2>Conceal. Display. Define.</h2>
            <p>
              Closed storage creates calm. Illuminated niches reveal the pieces you
              choose to live with. A vanity supports a private ritual. Each element
              has purpose, and together they give the room its quiet confidence.
            </p>
          </div>
          <div className="wardrobe-balance-image">
            <img src={gallery08} alt="Light oak architectural wall unit with limestone media niche and illuminated display shelves" />
            <div><span>Architectural wall unit</span><strong>Made for the room</strong></div>
          </div>
        </section>

        <section className="wardrobe-process">
          <div className="wardrobe-process-head" data-reveal-block>
            <span className="eyebrow light">Your composition, from first thought to final detail</span>
            <h2>An exceptional experience at every step.</h2>
          </div>
          <ol className="wardrobe-process-list" data-reveal-block>
            <li><span>01</span><strong>Discover</strong><p>We learn the room, your rituals and everything the composition should hold.</p></li>
            <li><span>02</span><strong>Compose</strong><p>Proportion, function and material become one confident architectural vision.</p></li>
            <li><span>03</span><strong>Craft</strong><p>Every surface, drawer and detail is made with exacting care.</p></li>
            <li><span>04</span><strong>Install</strong><p>Your cabinetry is fitted, aligned and refined as part of the room.</p></li>
          </ol>
        </section>

        <section className="wardrobe-inquiry" id="vanities-wall-units-inquiry">
          <div className="wardrobe-inquiry-shade" />
          <div className="wardrobe-inquiry-copy" data-reveal-block>
            <span className="eyebrow">Begin your private consultation</span>
            <h2>Let us create a composition that belongs entirely to your home.</h2>
            <p>Share your residence and discover how beautifully order can become part of the architecture.</p>
            <a className="button button-solid" href="mailto:sales@casalithic.com?subject=Vanities and wall units collection inquiry">
              Discuss your project <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default VanitiesWallUnitsPage;
