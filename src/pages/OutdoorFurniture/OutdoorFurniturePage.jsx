import { useEffect } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import gallery02 from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-02.jpg";
import gallery03 from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-03.jpg";
import gallery04 from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-04.jpg";
import gallery05 from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-05.jpg";
import gallery06 from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-06.jpg";
import gallery07 from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-07.jpg";
import gallery08 from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-08.jpg";
import gallery09 from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-09.jpg";
import "../Wardrobes/WardrobesPage.css";
import "./OutdoorFurniturePage.css";

const outdoorFeatures = [
  {
    number: "01",
    title: "Comfort without compromise",
    text: "Deep cushions, generous proportions and supportive profiles bring the ease of a beautifully furnished interior into terraces, gardens and poolside settings.",
  },
  {
    number: "02",
    title: "Materials made for the elements",
    text: "Selected timber, woven outdoor fibers, refined metalwork and performance textiles are chosen to weather gracefully while retaining their tactile appeal.",
  },
  {
    number: "03",
    title: "Composed for the landscape",
    text: "Every seating group, lounger and dining piece is considered in relation to architecture, sunlight and view, creating an outdoor room with effortless presence.",
  },
];

const finishNotes = ["Selected outdoor timber", "Hand-finished woven fiber", "Performance upholstery", "Weather-ready metalwork"];

const outdoorGallery = [
  { image: gallery02, title: "Mediterranean terrace salon", material: "Timber · Woven fiber · Textile" },
  { image: gallery04, title: "Sculptural desert seating", material: "Braided weave · Upholstery" },
  { image: gallery05, title: "Curved garden composition", material: "Woven frame · Performance textile" },
  { image: gallery06, title: "Colour beneath the loggia", material: "Woven fiber · Honed stone" },
  { image: gallery07, title: "Poolside dining at leisure", material: "Metal · Cord · Upholstery" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function OutdoorFurniturePage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  return (
    <div className="page wardrobe-page outdoor-furniture-page" id="page-top">
      <Header />

      <main>
        <section className="wardrobe-hero" aria-labelledby="outdoor-furniture-title">
          <img src={gallery09} alt="Generous outdoor sectional on a mountain terrace overlooking an infinity pool and lake" />
          <div className="wardrobe-hero-shade" />
          <div className="wardrobe-hero-content" data-reveal-block>
            <span className="eyebrow">Outdoor Furniture</span>
            <h1 id="outdoor-furniture-title">Open air, elevated to an art.</h1>
            <p>
              Refined furniture for terraces, gardens and poolside living—created
              to make every hour outdoors feel beautifully unhurried.
            </p>
            <a className="button button-solid" href="#outdoor-furniture-inquiry">Compose your outdoors</a>
          </div>
          <div className="wardrobe-hero-meta" data-reveal-block>
            <span>Terrace · Garden · Poolside</span>
            <span>Timber · Textile · Woven fiber</span>
            <span>Designed for life outside</span>
          </div>
          <a className="wardrobe-scroll" href="#outdoor-furniture-introduction" aria-label="Scroll to the outdoor furniture collection story">
            <span /> Explore
          </a>
        </section>

        <section className="wardrobe-intro" id="outdoor-furniture-introduction" data-reveal-block>
          <div className="wardrobe-intro-signature">
            <div className="wardrobe-section-index">
              <span>08 / The collection</span>
              <p>Outdoor rooms shaped for long afternoons and evenings without end.</p>
            </div>
            <div className="wardrobe-intro-copy">
              <span className="eyebrow dark">Private living beneath open skies</span>
              <h2>Where the landscape becomes part of the room.</h2>
              <p>
                A Casa Lithic® outdoor composition brings the comfort and assurance
                of a considered interior into the open air. Scale, material, shade
                and outlook are balanced so each setting feels generous, composed
                and entirely at home in its surroundings.
              </p>
            </div>
            <div className="wardrobe-finish-list" aria-label="Outdoor furniture material families">
              {finishNotes.map((note, index) => (
                <div key={note}><span>0{index + 1}</span><p>{note}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wardrobe-craft" data-reveal-block>
          <div className="wardrobe-craft-image">
            <img src={gallery03} alt="Finely crafted timber sun lounger with tailored ivory upholstery on a coastal terrace" />
            <span>Crafted for the open air</span>
          </div>
          <div className="wardrobe-craft-copy">
            <span className="eyebrow light">The distinction is in the material</span>
            <h2>Natural character. Enduring ease.</h2>
            <p>
              Carefully selected timber brings warmth and structure, while tailored
              outdoor upholstery offers the softness expected of the finest interior furniture.
            </p>
            <p>
              Every joint, weave and seam is resolved for life outside, allowing
              each piece to meet the elements with grace and retain its quiet refinement.
            </p>
            <a className="wardrobe-line-link" href="#outdoor-furniture-details">Discover the details <Arrow /></a>
          </div>
        </section>

        <section className="wardrobe-details" id="outdoor-furniture-details">
          <div className="wardrobe-details-head" data-reveal-block>
            <span className="eyebrow dark">Made for a life of distinction</span>
            <h2>Exceptional comfort, wherever the day unfolds.</h2>
          </div>
          <div className="wardrobe-feature-grid">
            {outdoorFeatures.map((feature) => (
              <article key={feature.number} data-reveal-block>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wardrobe-gallery" aria-labelledby="outdoor-furniture-gallery-title">
          <div className="wardrobe-gallery-head" data-reveal-block>
            <div>
              <span className="eyebrow dark">The outdoor furniture gallery</span>
              <h2 id="outdoor-furniture-gallery-title">A new atmosphere for every setting.</h2>
            </div>
            <p>
              From secluded garden salons to coastal terraces and poolside dining,
              every composition brings comfort, material richness and a distinct sense of place.
            </p>
          </div>
          <div className="wardrobe-gallery-grid">
            {outdoorGallery.map((item, index) => (
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
            <span className="eyebrow dark">An invitation to linger</span>
            <h2>Pause. Recline. Stay awhile.</h2>
            <p>
              Beside the water, a pair of generous loungers turns a quiet view into
              a private destination. Comfort, shade and the landscape come together,
              making the passage of time feel almost incidental.
            </p>
          </div>
          <div className="wardrobe-balance-image">
            <img src={gallery08} alt="Pair of graphite upholstered loungers beside an infinity pool and coastal garden" />
            <div><span>Poolside lounge composition</span><strong>Made for unhurried days</strong></div>
          </div>
        </section>

        <section className="wardrobe-process">
          <div className="wardrobe-process-head" data-reveal-block>
            <span className="eyebrow light">Your outdoors, from first thought to final placement</span>
            <h2>An exceptional experience at every step.</h2>
          </div>
          <ol className="wardrobe-process-list" data-reveal-block>
            <li><span>01</span><strong>Discover</strong><p>We study the architecture, landscape, outlook and rhythm of life beyond the walls.</p></li>
            <li><span>02</span><strong>Compose</strong><p>Seating, dining, shade and circulation become one effortless outdoor arrangement.</p></li>
            <li><span>03</span><strong>Curate</strong><p>Materials, finishes and textiles are refined for comfort, character and lasting performance.</p></li>
            <li><span>04</span><strong>Place</strong><p>Every piece is positioned and detailed until the setting feels naturally complete.</p></li>
          </ol>
        </section>

        <section className="wardrobe-inquiry" id="outdoor-furniture-inquiry">
          <div className="wardrobe-inquiry-shade" />
          <div className="wardrobe-inquiry-copy" data-reveal-block>
            <span className="eyebrow">Begin your private consultation</span>
            <h2>Let us create an outdoor world worthy of the view.</h2>
            <p>Share your residence and discover furniture composed around the way you live outside.</p>
            <a className="button button-solid" href="mailto:sales@casalithic.com?subject=Outdoor furniture collection inquiry">
              Discuss your outdoors <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default OutdoorFurniturePage;
