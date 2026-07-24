import { useEffect } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import gallery01 from "../../assets/salon-furniture/gallery/salon-furniture-gallery-01.webp";
import gallery02 from "../../assets/salon-furniture/gallery/salon-furniture-gallery-02.webp";
import gallery03 from "../../assets/salon-furniture/gallery/salon-furniture-gallery-03.webp";
import gallery04 from "../../assets/salon-furniture/gallery/salon-furniture-gallery-04.webp";
import gallery05 from "../../assets/salon-furniture/gallery/salon-furniture-gallery-05.webp";
import gallery06 from "../../assets/salon-furniture/gallery/salon-furniture-gallery-06.webp";
import gallery07 from "../../assets/salon-furniture/gallery/salon-furniture-gallery-07.webp";
import gallery08 from "../../assets/salon-furniture/gallery/salon-furniture-gallery-08.webp";
import gallery09 from "../../assets/salon-furniture/gallery/salon-furniture-gallery-09.webp";
import "../Wardrobes/WardrobesPage.css";
import "./SalonFurniturePage.css";

const salonFeatures = [
  {
    title: "Comfort, Carefully Considered",
    text: "Supportive seating, refined proportions, and beautifully tailored details create a salon experience defined by comfort, elegance, and effortless relaxation.",
  },
  {
    title: "Performance, discreetly resolved",
    text: "Hydraulic bases, integrated basins, task surfaces and discreet storage are composed into furniture that works intuitively without compromising its refinement.",
  },
  {
    title: "A complete professional language",
    text: "Reception, waiting, styling and treatment pieces share one material vocabulary, giving the entire salon a confident and unmistakable identity.",
  },
];

const finishNotes = ["Selected Wood Finishes", "Tailored performance leather", "Smooth stone surfaces", "Brushed bronze details"];

const salonGallery = [
  { image: gallery02, title: "The styling gallery", material: "Walnut · Leather · Bronze" },
  { image: gallery03, title: "The wash lounge", material: "Upholstery · Ceramic · Stone" },
  { image: gallery04, title: "Sculptural reception", material: "Ribbed walnut · Smooth stone" },
  { image: gallery05, title: "The manicure atelier", material: "Stone · Timber · Task lighting" },
  { image: gallery08, title: "Private pedicure suite", material: "Leather · Bronze · Limestone" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SalonFurniturePage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  return (
    <div className="page wardrobe-page salon-furniture-page" id="page-top">
      <Header />

      <main>
        <section className="wardrobe-hero" aria-labelledby="salon-furniture-title">
          <img src={gallery01} alt="Bespoke leather styling chairs and bronze-framed mirrors in a refined contemporary beauty salon" />
          <div className="wardrobe-hero-shade" />
          <div className="wardrobe-hero-content" data-reveal-block>
            <span className="eyebrow">Salon Solution</span>
            <h1 id="salon-furniture-title">Beauty, received beautifully.</h1>
            <p>
              Exceptional professional furniture that surrounds every appointment
              with comfort, composure and an unmistakable sense of occasion.
            </p>
            <a className="button button-solid" href="#salon-furniture-inquiry">Create your salon</a>
          </div>
          <div className="wardrobe-hero-meta" data-reveal-block>
            <span>Reception · Styling · Treatment</span>
            <span>Timber · Leather · Stone</span>
            <span>Created for professionals</span>
          </div>
          <a className="wardrobe-scroll" href="#salon-furniture-introduction" aria-label="Scroll to the salon solution collection story">
            <span /> Explore
          </a>
        </section>

        <section className="wardrobe-intro" id="salon-furniture-introduction" data-reveal-block>
          <div className="wardrobe-intro-signature">
            <div className="wardrobe-section-index">
              <span>09 / The collection</span>
              <p>Professional furniture that turns every visit into a beautifully considered experience.</p>
            </div>
            <div className="wardrobe-intro-copy">
              <span className="eyebrow dark">Designed around service and ceremony</span>
              <h2>A setting that elevates every transformation.</h2>
              <p>
                A Casa Lithic® salon begins with the way a client should feel from
                the moment they arrive. Furniture, function and atmosphere are
                resolved together, creating a professional interior that feels calm,
                assured and entirely distinctive.
              </p>
            </div>
            <div className="wardrobe-finish-list" aria-label="Salon solution material families">
              {finishNotes.map((note) => (
                <div key={note}><span className="wardrobe-finish-bullet" aria-hidden="true" /><p>{note}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wardrobe-craft" data-reveal-block>
          <div className="wardrobe-craft-image">
            <img src={gallery07} alt="Close view of a hand-tailored leather hydraulic styling chair with bronze base and footrest" />
            <span>Crafted for comfort and precision</span>
          </div>
          <div className="wardrobe-craft-copy">
            <span className="eyebrow light">The distinction is in the engineering</span>
            <h2>Professional performance, impeccably tailored.</h2>
            <p>
              Beneath the hand-finished leather and sculpted upholstery, every
              proportion is designed to support both client comfort and effortless professional movement.
            </p>
            <p>
              Hydraulic mechanisms, precise metalwork and carefully placed footrests
              are integrated with restraint, allowing function to feel beautifully natural.
            </p>
            <a className="wardrobe-line-link" href="#salon-furniture-details">Discover the details <Arrow /></a>
          </div>
        </section>

        <section className="wardrobe-details" id="salon-furniture-details">
          <div className="wardrobe-details-head" data-reveal-block>
            <span className="eyebrow dark">Made for a life of distinction</span>
            <h2>Every service considered. Every impression elevated.</h2>
          </div>
          <div className="wardrobe-feature-grid">
            {salonFeatures.map((feature) => (
              <article key={feature.title} data-reveal-block>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wardrobe-gallery" aria-labelledby="salon-furniture-gallery-title">
          <div className="wardrobe-gallery-head" data-reveal-block>
            <div>
              <span className="eyebrow dark">The salon solution gallery</span>
              <h2 id="salon-furniture-gallery-title">A refined expression for every ritual.</h2>
            </div>
            <p>
              From the first welcome to styling, washing and finishing, every
              furniture family balances professional precision with exceptional client comfort.
            </p>
          </div>
          <div className="wardrobe-gallery-grid">
            {salonGallery.map((item, index) => (
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
            <span className="eyebrow dark">A private standard of service</span>
            <h2>Arrive. Settle. Be transformed.</h2>
            <p>
              Within a private styling suite, every element is placed within easy
              reach while the atmosphere remains serene. The chair, mirror, console
              and trolley become one beautifully ordered professional setting.
            </p>
          </div>
          <div className="wardrobe-balance-image">
            <img src={gallery06} alt="Private salon suite with saddle leather styling chair, walnut console and bronze trolley" />
            <div><span>Private styling suite</span><strong>Made for personal attention</strong></div>
          </div>
        </section>

        <section className="wardrobe-process">
          <div className="wardrobe-process-head" data-reveal-block>
            <span className="eyebrow light">Your salon, from first thought to final station</span>
            <h2>An exceptional experience at every step.</h2>
          </div>
          <ol className="wardrobe-process-list" data-reveal-block>
            <li><span>01</span><strong>Discover</strong><p>We learn your services, clientele, working rhythm and ambitions for the space.</p></li>
            <li><span>02</span><strong>Plan</strong><p>Reception, waiting, styling and treatment zones become one intuitive professional journey.</p></li>
            <li><span>03</span><strong>Tailor</strong><p>Furniture proportions, finishes and specialist details are refined around your identity.</p></li>
            <li><span>04</span><strong>Install</strong><p>Every station is positioned, connected and finished for a seamless opening day.</p></li>
          </ol>
        </section>

        <section className="wardrobe-inquiry" id="salon-furniture-inquiry">
          <div className="wardrobe-inquiry-shade" />
          <div className="wardrobe-inquiry-copy" data-reveal-block>
            <span className="eyebrow">Begin your private consultation</span>
            <h2>Let us create a salon clients remember before they leave.</h2>
            <p>Share your vision and discover professional furniture composed around your service and identity.</p>
            <a className="button button-solid" href="mailto:sales@casalithic.com?subject=Salon solution collection inquiry">
              Discuss your salon <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SalonFurniturePage;
