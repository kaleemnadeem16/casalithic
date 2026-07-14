import { useEffect } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import gallery01 from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-01.webp";
import gallery02 from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-02.webp";
import gallery03 from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-03.webp";
import gallery04 from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-04.webp";
import gallery05 from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-05.webp";
import gallery07 from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-07.webp";
import gallery08 from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-08.webp";
import gallery09 from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-09.webp";
import "../Wardrobes/WardrobesPage.css";
import "./IndoorFurniturePage.css";

const furnitureFeatures = [
  {
    number: "01",
    title: "Comfort with presence",
    text: "Generous proportions, supportive forms and tactile upholstery create furniture that feels immediately inviting while holding a confident place within the room.",
  },
  {
    number: "02",
    title: "Materials in conversation",
    text: "Fine timber, natural stone, woven textiles and restrained metal details are balanced so every piece contributes to one harmonious interior language.",
  },
  {
    number: "03",
    title: "Composed for the room",
    text: "Seating, tables, storage and bedroom pieces are considered together, giving each space an effortless flow and a character that feels entirely personal.",
  },
];

const finishNotes = ["Tactile woven upholstery", "Selected natural timber", "Honed stone surfaces", "Refined metal details"];

const furnitureGallery = [
  { image: gallery02, title: "Dining, beautifully gathered", material: "Stone · Timber · Upholstery" },
  { image: gallery03, title: "Expressive modular salon", material: "Textured fabric · Walnut" },
  { image: gallery04, title: "Sculptural fireside seating", material: "Bouclé · Bronze · Stone" },
  { image: gallery07, title: "Coastal living composition", material: "Modular seating · Honed stone" },
  { image: gallery08, title: "Tailored bedroom collection", material: "Upholstery · Timber · Metal" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function IndoorFurniturePage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  return (
    <div className="page wardrobe-page indoor-furniture-page" id="page-top">
      <Header />

      <main>
        <section className="wardrobe-hero" aria-labelledby="indoor-furniture-title">
          <img src={gallery01} alt="Curved cream sectional and sculptural timber table in a refined contemporary living room" />
          <div className="wardrobe-hero-shade" />
          <div className="wardrobe-hero-content" data-reveal-block>
            <span className="eyebrow">Indoor Furniture</span>
            <h1 id="indoor-furniture-title">Comfort, composed with character.</h1>
            <p>
              Distinctive furniture for living, dining and private spaces—created
              to surround everyday life with beauty, ease and quiet confidence.
            </p>
            <a className="button button-solid" href="#indoor-furniture-inquiry">Compose your interior</a>
          </div>
          <div className="wardrobe-hero-meta" data-reveal-block>
            <span>Living · Dining · Bedroom</span>
            <span>Timber · Textile · Stone</span>
            <span>Designed for private living</span>
          </div>
          <a className="wardrobe-scroll" href="#indoor-furniture-introduction" aria-label="Scroll to the indoor furniture collection story">
            <span /> Explore
          </a>
        </section>

        <section className="wardrobe-intro" id="indoor-furniture-introduction" data-reveal-block>
          <div className="wardrobe-intro-signature">
            <div className="wardrobe-section-index">
              <span>07 / The collection</span>
              <p>Furniture that gives architecture its most personal expression.</p>
            </div>
            <div className="wardrobe-intro-copy">
              <span className="eyebrow dark">Designed around the way you live</span>
              <h2>Made to be lived with. Designed to be remembered.</h2>
              <p>
                A Casa Lithic® furniture composition begins with the atmosphere
                of the room and the life that will unfold within it. Form, comfort,
                material and scale are balanced to create spaces that feel generous,
                assured and unmistakably yours.
              </p>
            </div>
            <div className="wardrobe-finish-list" aria-label="Indoor furniture material families">
              {finishNotes.map((note, index) => (
                <div key={note}><span>0{index + 1}</span><p>{note}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wardrobe-craft" data-reveal-block>
          <div className="wardrobe-craft-image">
            <img src={gallery05} alt="Sculptural stacked walnut chest with curved drawers and brass pulls" />
            <span>Form, material and precision</span>
          </div>
          <div className="wardrobe-craft-copy">
            <span className="eyebrow light">The distinction is in the making</span>
            <h2>Sculpted to be noticed. Crafted to endure.</h2>
            <p>
              From a precisely curved timber drawer to the tailored seam of an
              upholstered seat, every detail is considered as part of the whole form.
            </p>
            <p>
              Natural grain, tactile textiles and refined metalwork bring depth to
              each piece, creating furniture with a presence that rewards closer attention.
            </p>
            <a className="wardrobe-line-link" href="#indoor-furniture-details">Discover the details <Arrow /></a>
          </div>
        </section>

        <section className="wardrobe-details" id="indoor-furniture-details">
          <div className="wardrobe-details-head" data-reveal-block>
            <span className="eyebrow dark">Made for a life of distinction</span>
            <h2>Every piece considered. Every room transformed.</h2>
          </div>
          <div className="wardrobe-feature-grid">
            {furnitureFeatures.map((feature) => (
              <article key={feature.number} data-reveal-block>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wardrobe-gallery" aria-labelledby="indoor-furniture-gallery-title">
          <div className="wardrobe-gallery-head" data-reveal-block>
            <div>
              <span className="eyebrow dark">The indoor furniture gallery</span>
              <h2 id="indoor-furniture-gallery-title">A distinct expression for every room.</h2>
            </div>
            <p>
              From generous modular seating to sculptural dining and tailored
              bedroom pieces, every composition balances comfort with individual character.
            </p>
          </div>
          <div className="wardrobe-gallery-grid">
            {furnitureGallery.map((item, index) => (
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
            <span className="eyebrow dark">A room made complete</span>
            <h2>Sit. Gather. Belong.</h2>
            <p>
              A beautifully proportioned sofa invites the room to slow down. An
              occasional table places every gesture within reach. Layer by layer,
              individual pieces become an interior that feels effortless and complete.
            </p>
          </div>
          <div className="wardrobe-balance-image">
            <img src={gallery09} alt="Tailored ivory sofa and chaise with dark accents in a sunlit salon" />
            <div><span>Tailored living composition</span><strong>Made for belonging</strong></div>
          </div>
        </section>

        <section className="wardrobe-process">
          <div className="wardrobe-process-head" data-reveal-block>
            <span className="eyebrow light">Your interior, from first thought to final piece</span>
            <h2>An exceptional experience at every step.</h2>
          </div>
          <ol className="wardrobe-process-list" data-reveal-block>
            <li><span>01</span><strong>Discover</strong><p>We learn how each room should feel, function and welcome the people within it.</p></li>
            <li><span>02</span><strong>Compose</strong><p>Forms, proportions, colors and materials become one considered interior vision.</p></li>
            <li><span>03</span><strong>Curate</strong><p>Every furniture piece is selected and refined for harmony, comfort and character.</p></li>
            <li><span>04</span><strong>Place</strong><p>Your collection is arranged and detailed until every room feels complete.</p></li>
          </ol>
        </section>

        <section className="wardrobe-inquiry" id="indoor-furniture-inquiry">
          <div className="wardrobe-inquiry-shade" />
          <div className="wardrobe-inquiry-copy" data-reveal-block>
            <span className="eyebrow">Begin your private consultation</span>
            <h2>Let us compose rooms that could belong to no one else.</h2>
            <p>Share your residence and discover furniture selected around the way you live.</p>
            <a className="button button-solid" href="mailto:sales@casalithic.com?subject=Indoor furniture collection inquiry">
              Discuss your interior <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default IndoorFurniturePage;
