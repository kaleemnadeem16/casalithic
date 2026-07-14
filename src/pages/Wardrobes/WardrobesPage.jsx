import { useEffect } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import gallery01 from "../../assets/wardrobes/gallery/wardrobe-gallery-01.webp";
import gallery02 from "../../assets/wardrobes/gallery/wardrobe-gallery-02.webp";
import gallery03 from "../../assets/wardrobes/gallery/wardrobe-gallery-03.webp";
import gallery04 from "../../assets/wardrobes/gallery/wardrobe-gallery-04.webp";
import gallery05 from "../../assets/wardrobes/gallery/wardrobe-gallery-05.webp";
import gallery06 from "../../assets/wardrobes/gallery/wardrobe-gallery-06.webp";
import gallery07 from "../../assets/wardrobes/gallery/wardrobe-gallery-07.webp";
import gallery08 from "../../assets/wardrobes/gallery/wardrobe-gallery-08.webp";
import "./WardrobesPage.css";

const wardrobeFeatures = [
  {
    number: "01",
    title: "A commanding presence",
    text: "Full-height timber compositions become part of the architecture, giving the room a quiet authority and an unmistakable sense of arrival.",
  },
  {
    number: "02",
    title: "Exclusively yours",
    text: "Hanging, drawers, shoe storage and private compartments are planned around your wardrobe, so every daily ritual feels naturally considered.",
  },
  {
    number: "03",
    title: "Timber, brought to life",
    text: "Precisely placed illumination draws out the depth, grain and warmth of the wood while remaining discreet within shelves and rails.",
  },
];

const finishNotes = ["Selected natural timbers", "Hand-matched grain", "Deep stained finishes", "Satin & open-pore textures"];

const wardrobeGallery = [
  {
    image: gallery04,
    title: "Integrated wardrobe wall",
    material: "Natural walnut · Illuminated grain",
  },
  {
    image: gallery05,
    title: "Light dressing suite",
    material: "Painted timber · Warm oak flooring",
  },
  {
    image: gallery06,
    title: "Pure panel composition",
    material: "Painted timber · Quiet geometry",
  },
  {
    image: gallery07,
    title: "Bedroom wardrobe wall",
    material: "Dark timber · Open-pore finish",
  },
  {
    image: gallery08,
    title: "Private storage composition",
    material: "Dark timber · Painted cabinetry",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function WardrobesPage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  return (
    <div className="page wardrobe-page" id="page-top">
      <Header />

      <main>
        <section className="wardrobe-hero" aria-labelledby="wardrobe-title">
          <img src={gallery01} alt="Bespoke walnut walk-in wardrobe overlooking the city" />
          <div className="wardrobe-hero-shade" />
          <div className="wardrobe-hero-content" data-reveal-block>
            <span className="eyebrow">Wardrobes</span>
            <h1 id="wardrobe-title">A private world, shaped around you.</h1>
            <p>
              Bespoke timber wardrobes that surround every ritual with rare
              comfort, quiet confidence and a sense of true distinction.
            </p>
            <a className="button button-solid" href="#wardrobe-inquiry">Create your wardrobe</a>
          </div>
          <div className="wardrobe-hero-meta" data-reveal-block>
            <span>Made to measure</span>
            <span>Crafted in fine woods</span>
            <span>Designed for private living</span>
          </div>
          <a className="wardrobe-scroll" href="#wardrobe-introduction" aria-label="Scroll to the collection story">
            <span /> Explore
          </a>
        </section>

        <section className="wardrobe-intro" id="wardrobe-introduction" data-reveal-block>
          <div className="wardrobe-intro-signature">
            <div className="wardrobe-section-index">
              <span>01 / The collection</span>
              <p>A room that carries your presence in every line.</p>
            </div>
            <div className="wardrobe-intro-copy">
              <span className="eyebrow dark">Designed around you</span>
              <h2>Order, elevated into an art.</h2>
              <p>
                A Casa Lithic® wardrobe begins with exceptional wood and a
                deep understanding of how you live. Every proportion and
                surface is composed to create a private atmosphere that
                feels calm, assured and entirely your own.
              </p>
            </div>
            <div className="wardrobe-finish-list" aria-label="Available timber finish families">
              {finishNotes.map((note, index) => (
                <div key={note}><span>0{index + 1}</span><p>{note}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wardrobe-craft" data-reveal-block>
          <div className="wardrobe-craft-image">
            <img src={gallery02} alt="Floor-to-ceiling walnut wardrobe with central timber island" />
            <span>Exceptional wood, impeccably finished</span>
          </div>
          <div className="wardrobe-craft-copy">
            <span className="eyebrow light">The privilege is in the detail</span>
            <h2>Made to feel as exceptional as it looks.</h2>
            <p>
              Within every wardrobe is a precisely composed timber interior:
              softly lit shelves, silent drawers and carefully placed rails,
              all arranged around the pieces you value most.
            </p>
            <p>
              The result is not simply storage. It is a private environment
              with a sense of calm, confidence and belonging in every detail.
            </p>
            <a className="wardrobe-line-link" href="#wardrobe-details">Discover the details <Arrow /></a>
          </div>
        </section>

        <section className="wardrobe-details" id="wardrobe-details">
          <div className="wardrobe-details-head" data-reveal-block>
            <span className="eyebrow dark">Made for a life of distinction</span>
            <h2>One noble material. Endless possibilities.</h2>
          </div>
          <div className="wardrobe-feature-grid">
            {wardrobeFeatures.map((feature) => (
              <article key={feature.number} data-reveal-block>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wardrobe-gallery" aria-labelledby="wardrobe-gallery-title">
          <div className="wardrobe-gallery-head" data-reveal-block>
            <div>
              <span className="eyebrow dark">The wardrobe gallery</span>
              <h2 id="wardrobe-gallery-title">Wood, composed in many forms.</h2>
            </div>
            <p>
              From complete dressing rooms to quiet built-in compositions,
              each wardrobe is shaped by its architecture and the life within it.
            </p>
          </div>
          <div className="wardrobe-gallery-grid">
            {wardrobeGallery.map((item, index) => (
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
            <h2>Presence. Order. Ease.</h2>
            <p>
              Full-height timber doors create a composed architectural rhythm.
              Open display bays, a central island and a private dressing table
              turn the wardrobe into a room to inhabit—not simply pass through.
            </p>
          </div>
          <div className="wardrobe-balance-image">
            <img src={gallery03} alt="Dark timber dressing room with central storage island" />
            <div><span>Walk-in composition</span><strong>Private by design</strong></div>
          </div>
        </section>

        <section className="wardrobe-process">
          <div className="wardrobe-process-head" data-reveal-block>
            <span className="eyebrow light">Your wardrobe, from first thought to final detail</span>
            <h2>An exceptional experience at every step.</h2>
          </div>
          <ol className="wardrobe-process-list" data-reveal-block>
            <li><span>01</span><strong>Discover</strong><p>We learn your space, collection and daily rituals.</p></li>
            <li><span>02</span><strong>Compose</strong><p>Proportion, grain and finish become one resolved vision.</p></li>
            <li><span>03</span><strong>Craft</strong><p>Every timber surface is made with exacting care.</p></li>
            <li><span>04</span><strong>Install</strong><p>Your private room is fitted, refined and made ready for you.</p></li>
          </ol>
        </section>

        <section className="wardrobe-inquiry" id="wardrobe-inquiry">
          <div className="wardrobe-inquiry-shade" />
          <div className="wardrobe-inquiry-copy" data-reveal-block>
            <span className="eyebrow">Begin your private consultation</span>
            <h2>Let us create a private world that could only be yours.</h2>
            <p>Share your residence and discover what it feels like when every detail is composed around you.</p>
            <a className="button button-solid" href="mailto:sales@casalithic.com?subject=Wardrobe collection inquiry">
              Discuss your wardrobe <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default WardrobesPage;
