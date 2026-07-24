import { useEffect } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import gallery01 from "../../assets/kitchen/gallery/kitchen-gallery-01.webp";
import gallery02 from "../../assets/kitchen/gallery/kitchen-gallery-02.webp";
import gallery03 from "../../assets/kitchen/gallery/kitchen-gallery-03.webp";
import gallery04 from "../../assets/kitchen/gallery/kitchen-gallery-04.webp";
import gallery05 from "../../assets/kitchen/gallery/kitchen-gallery-05.webp";
import gallery06 from "../../assets/kitchen/gallery/kitchen-gallery-06.webp";
import gallery07 from "../../assets/kitchen/gallery/kitchen-gallery-07.webp";
import gallery08 from "../../assets/kitchen/gallery/kitchen-gallery-08.webp";
import "../Wardrobes/WardrobesPage.css";
import "./KitchenPage.css";

const kitchenFeatures = [
  {
    title: "Architectural presence",
    text: "Cabinetry, islands and full-height walls are composed as part of the architecture, giving the kitchen a confident and beautifully resolved identity.",
  },
  {
    title: "Crafted for every way you use your kitchen",
    text: "Preparation, storage, serving and gathering are planned around your rituals, creating a natural flow from the calmest morning to the grandest evening.",
  },
  {
    title: "Technology, made discreet",
    text: "Appliances, lighting and intelligent storage are integrated with precision, placing exceptional performance exactly where it belongs and out of sight where it does not.",
  },
];

const finishNotes = ["Selected Wood Finishes", "Smooth natural stone", "Precision metal details", "Integrated illumination"];

const kitchenGallery = [
  { image: gallery01, title: "The refined classic", material: "Painted timber · Pale stone" },
  { image: gallery03, title: "Indoor-outdoor kitchen", material: "Dark timber · Matte surfaces" },
  { image: gallery05, title: "Sculpted black kitchen", material: "Walnut · Charcoal cabinetry" },
  { image: gallery07, title: "Contemporary heritage", material: "Painted timber · Dark stone" },
  { image: gallery08, title: "Colour, precisely composed", material: "Terracotta finish · Fluted display" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function KitchenPage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  return (
    <div className="page wardrobe-page kitchen-page" id="page-top">
      <Header />

      <main>
        <section className="wardrobe-hero" aria-labelledby="kitchen-title">
          <img src={gallery02} alt="Walnut penthouse kitchen with illuminated island and city view" />
          <div className="wardrobe-hero-shade" />
          <div className="wardrobe-hero-content" data-reveal-block>
            <span className="eyebrow">Kitchen</span>
            <h1 id="kitchen-title">Where every day becomes an occasion.</h1>
            <p>
              Tailored kitchens that bring exceptional performance, generous
              beauty and a sense of ceremony to the heart of your home.
            </p>
            <a className="button button-solid" href="#kitchen-inquiry">Create your kitchen</a>
          </div>
          <div className="wardrobe-hero-meta" data-reveal-block>
            <span>Made to measure</span>
            <span>Fine woods · Stone · Metal</span>
            <span>Designed for gathering</span>
          </div>
          <a className="wardrobe-scroll" href="#kitchen-introduction" aria-label="Scroll to the kitchen collection story">
            <span /> Explore
          </a>
        </section>

        <section className="wardrobe-intro" id="kitchen-introduction" data-reveal-block>
          <div className="wardrobe-intro-signature">
            <div className="wardrobe-section-index">
              <span>02 / The collection</span>
              <p>A room that gives daily life its finest setting.</p>
            </div>
            <div className="wardrobe-intro-copy">
              <span className="eyebrow dark">Designed around the way you live</span>
              <h2>Performance, elevated into pleasure.</h2>
              <p>
                A Casa Lithic® kitchen begins with how you cook, gather and
                entertain. Every working zone, proportion and finish is composed
                to make the room feel intuitive, assured and unmistakably yours.
              </p>
            </div>
            <div className="wardrobe-finish-list" aria-label="Kitchen material families">
              {finishNotes.map((note) => (
                <div key={note}><span className="wardrobe-finish-bullet" aria-hidden="true" /><p>{note}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wardrobe-craft" data-reveal-block>
          <div className="wardrobe-craft-image">
            <img src={gallery04} alt="Precisely detailed kitchen cabinetry and coffee preparation area" />
            <span>Details, made effortless</span>
          </div>
          <div className="wardrobe-craft-copy">
            <span className="eyebrow light">The luxury is in the experience</span>
            <h2>Beautiful to live with. Effortless to use.</h2>
            <p>
              Within every kitchen is a precisely planned working landscape:
              generous preparation surfaces, silent storage, integrated
              appliances and lighting placed exactly where it is needed.
            </p>
            <p>
              The result is a kitchen that performs with assured ease and
              welcomes every occasion—from a solitary coffee to a full house.
            </p>
            <a className="wardrobe-line-link" href="#kitchen-details">Discover the details <Arrow /></a>
          </div>
        </section>

        <section className="wardrobe-details" id="kitchen-details">
          <div className="wardrobe-details-head" data-reveal-block>
            <span className="eyebrow dark">Made for exceptional living</span>
            <h2>One considered composition. Every function resolved.</h2>
          </div>
          <div className="wardrobe-feature-grid">
            {kitchenFeatures.map((feature) => (
              <article key={feature.title} data-reveal-block>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wardrobe-gallery" aria-labelledby="kitchen-gallery-title">
          <div className="wardrobe-gallery-head" data-reveal-block>
            <div>
              <span className="eyebrow dark">The kitchen gallery</span>
              <h2 id="kitchen-gallery-title">A distinct expression for every home.</h2>
            </div>
            <p>
              From warm contemporary rooms to refined classics, every kitchen
              balances architectural character with an effortless way of living.
            </p>
          </div>
          <div className="wardrobe-gallery-grid">
            {kitchenGallery.map((item, index) => (
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
            <span className="eyebrow dark">A complete living space</span>
            <h2>Cook. Gather. Belong.</h2>
            <p>
              A generous island becomes the centre of the room. Storage recedes
              into the architecture. Beautiful materials bring warmth and
              presence, creating a kitchen made equally for preparation,
              conversation and celebration.
            </p>
          </div>
          <div className="wardrobe-balance-image">
            <img src={gallery06} alt="Warm walnut kitchen with a marble island and open living area" />
            <div><span>Open-plan composition</span><strong>Made for gathering</strong></div>
          </div>
        </section>

        <section className="wardrobe-process">
          <div className="wardrobe-process-head" data-reveal-block>
            <span className="eyebrow light">Your kitchen, from first thought to final detail</span>
            <h2>An exceptional experience at every step.</h2>
          </div>
          <ol className="wardrobe-process-list" data-reveal-block>
            <li><span>01</span><strong>Discover</strong><p>We learn how you cook, host and move through the room.</p></li>
            <li><span>02</span><strong>Compose</strong><p>Layout, function and materials become one resolved vision.</p></li>
            <li><span>03</span><strong>Craft</strong><p>Every cabinet, surface and fitting is made with exacting care.</p></li>
            <li><span>04</span><strong>Install</strong><p>Your kitchen is fitted, refined and prepared for daily life.</p></li>
          </ol>
        </section>

        <section className="wardrobe-inquiry" id="kitchen-inquiry">
          <div className="wardrobe-inquiry-shade" />
          <div className="wardrobe-inquiry-copy" data-reveal-block>
            <span className="eyebrow">Begin your private consultation</span>
            <h2>Let us create the heart of a home that could only be yours.</h2>
            <p>Share your residence and discover how exceptional the everyday can feel.</p>
            <a className="button button-solid" href="mailto:sales@casalithic.com?subject=Kitchen collection inquiry">
              Discuss your kitchen <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default KitchenPage;
