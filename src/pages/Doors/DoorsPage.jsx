import { useEffect } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import gallery01 from "../../assets/doors/gallery/doors-gallery-01.jpg";
import gallery02 from "../../assets/doors/gallery/doors-gallery-02.jpg";
import gallery03 from "../../assets/doors/gallery/doors-gallery-03.jpg";
import gallery04 from "../../assets/doors/gallery/doors-gallery-04.jpg";
import gallery05 from "../../assets/doors/gallery/doors-gallery-05.jpg";
import gallery06 from "../../assets/doors/gallery/doors-gallery-06.jpg";
import gallery07 from "../../assets/doors/gallery/doors-gallery-07.jpg";
import gallery09 from "../../assets/doors/gallery/doors-gallery-09.jpg";
import "../Wardrobes/WardrobesPage.css";
import "./DoorsPage.css";

const doorFeatures = [
  {
    number: "01",
    title: "Architectural proportion",
    text: "From an intimate interior threshold to a monumental entrance, every door is scaled to give the architecture balance, rhythm and unmistakable presence.",
  },
  {
    number: "02",
    title: "Timber with expression",
    text: "Grain, tone and surface detail are carefully composed, allowing the natural character of each selected timber to become part of the design.",
  },
  {
    number: "03",
    title: "Precision in movement",
    text: "Pivot systems, concealed frames and finely resolved hardware give substantial doors a calm, assured movement and a beautifully clean architectural line.",
  },
];

const finishNotes = ["Selected solid timbers", "Hand-matched grain", "Sculpted surface details", "Bespoke metalwork"];

const doorGallery = [
  { image: gallery03, title: "Monumental double entrance", material: "Smoked oak · Bronze details" },
  { image: gallery04, title: "Flush interior passage", material: "Pale oak · Concealed frames" },
  { image: gallery05, title: "Fluted reception doors", material: "Dark walnut · Hand-finished relief" },
  { image: gallery06, title: "Sculptural pivot door", material: "European oak · Carved surface" },
  { image: gallery07, title: "Arched library entrance", material: "Fumed oak · Raised panels" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function DoorsPage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  return (
    <div className="page wardrobe-page doors-page" id="page-top">
      <Header />

      <main>
        <section className="wardrobe-hero" aria-labelledby="doors-title">
          <img src={gallery01} alt="Monumental walnut pivot door at the entrance of a contemporary residence" />
          <div className="wardrobe-hero-shade" />
          <div className="wardrobe-hero-content" data-reveal-block>
            <span className="eyebrow">Doors</span>
            <h1 id="doors-title">Every arrival, beautifully announced.</h1>
            <p>
              Bespoke timber doors that bring weight, warmth and architectural
              distinction to the moments that lead into every room.
            </p>
            <a className="button button-solid" href="#doors-inquiry">Create your doors</a>
          </div>
          <div className="wardrobe-hero-meta" data-reveal-block>
            <span>Made to measure</span>
            <span>Selected architectural timbers</span>
            <span>Designed for every threshold</span>
          </div>
          <a className="wardrobe-scroll" href="#doors-introduction" aria-label="Scroll to the doors collection story">
            <span /> Explore
          </a>
        </section>

        <section className="wardrobe-intro" id="doors-introduction" data-reveal-block>
          <div className="wardrobe-intro-signature">
            <div className="wardrobe-section-index">
              <span>04 / The collection</span>
              <p>A defining gesture between one experience and the next.</p>
            </div>
            <div className="wardrobe-intro-copy">
              <span className="eyebrow dark">The architecture of arrival</span>
              <h2>A threshold with lasting presence.</h2>
              <p>
                A Casa Lithic® door is considered as part of the architecture.
                Proportion, grain and movement are resolved together, creating an
                entrance that feels substantial, effortless and entirely of its place.
              </p>
            </div>
            <div className="wardrobe-finish-list" aria-label="Door material and detail families">
              {finishNotes.map((note, index) => (
                <div key={note}><span>0{index + 1}</span><p>{note}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wardrobe-craft" data-reveal-block>
          <div className="wardrobe-craft-image">
            <img src={gallery02} alt="Close detail of walnut door grain, concealed pivot and inset bronze pull" />
            <span>Crafted to the finest line</span>
          </div>
          <div className="wardrobe-craft-copy">
            <span className="eyebrow light">The distinction is in the detail</span>
            <h2>Substantial in form. Effortless in movement.</h2>
            <p>
              Selected timber is matched for continuity and expression before
              every edge, frame and fitting is refined to a precise architectural line.
            </p>
            <p>
              Concealed pivots and considered hardware allow the door to move with
              quiet assurance, making the simple act of entering feel exceptional.
            </p>
            <a className="wardrobe-line-link" href="#doors-details">Discover the details <Arrow /></a>
          </div>
        </section>

        <section className="wardrobe-details" id="doors-details">
          <div className="wardrobe-details-head" data-reveal-block>
            <span className="eyebrow dark">Made for a life of distinction</span>
            <h2>One natural material. An unforgettable first impression.</h2>
          </div>
          <div className="wardrobe-feature-grid">
            {doorFeatures.map((feature) => (
              <article key={feature.number} data-reveal-block>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wardrobe-gallery" aria-labelledby="doors-gallery-title">
          <div className="wardrobe-gallery-head" data-reveal-block>
            <div>
              <span className="eyebrow dark">The doors gallery</span>
              <h2 id="doors-gallery-title">A distinct character for every passage.</h2>
            </div>
            <p>
              Monumental entrances, quiet interior doors and sculpted statement
              pieces—each design gives its setting a unique sense of ceremony.
            </p>
          </div>
          <div className="wardrobe-gallery-grid">
            {doorGallery.map((item, index) => (
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
            <span className="eyebrow dark">A moment of transition</span>
            <h2>Enter. Pause. Belong.</h2>
            <p>
              The finest door does more than divide space. It creates anticipation,
              frames what lies beyond and gives every arrival a composed sense of
              occasion—before welcoming you effortlessly inside.
            </p>
          </div>
          <div className="wardrobe-balance-image">
            <img src={gallery09} alt="Tall fluted oak pivot door opening onto a warmly lit private residence" />
            <div><span>Fluted timber entrance</span><strong>Made for arrival</strong></div>
          </div>
        </section>

        <section className="wardrobe-process">
          <div className="wardrobe-process-head" data-reveal-block>
            <span className="eyebrow light">Your doors, from first thought to final detail</span>
            <h2>An exceptional experience at every step.</h2>
          </div>
          <ol className="wardrobe-process-list" data-reveal-block>
            <li><span>01</span><strong>Discover</strong><p>We study the architecture, proportions and character of every threshold.</p></li>
            <li><span>02</span><strong>Define</strong><p>Timber, surface language and hardware become one resolved design.</p></li>
            <li><span>03</span><strong>Craft</strong><p>Every door, frame and detail is made with exacting precision.</p></li>
            <li><span>04</span><strong>Install</strong><p>Each element is aligned and refined for a beautifully assured movement.</p></li>
          </ol>
        </section>

        <section className="wardrobe-inquiry" id="doors-inquiry">
          <div className="wardrobe-inquiry-shade" />
          <div className="wardrobe-inquiry-copy" data-reveal-block>
            <span className="eyebrow">Begin your private consultation</span>
            <h2>Let us create an entrance worthy of everything that lies beyond.</h2>
            <p>Share your residence and discover how crafted timber can transform every arrival.</p>
            <a className="button button-solid" href="mailto:inquiries@casalithic.com?subject=Doors collection inquiry">
              Discuss your doors <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default DoorsPage;
