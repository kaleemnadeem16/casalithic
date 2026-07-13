import { useEffect } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import gallery01 from "../../assets/cinema-furniture/gallery/cinema-furniture-gallery-01.jpg";
import gallery02 from "../../assets/cinema-furniture/gallery/cinema-furniture-gallery-02.jpg";
import gallery03 from "../../assets/cinema-furniture/gallery/cinema-furniture-gallery-03.jpg";
import gallery04 from "../../assets/cinema-furniture/gallery/cinema-furniture-gallery-04.jpg";
import gallery05 from "../../assets/cinema-furniture/gallery/cinema-furniture-gallery-05.jpg";
import gallery06 from "../../assets/cinema-furniture/gallery/cinema-furniture-gallery-06.jpg";
import gallery07 from "../../assets/cinema-furniture/gallery/cinema-furniture-gallery-07.jpg";
import gallery08 from "../../assets/cinema-furniture/gallery/cinema-furniture-gallery-08.jpg";
import gallery09 from "../../assets/cinema-furniture/gallery/cinema-furniture-gallery-09.jpg";
import "../Wardrobes/WardrobesPage.css";
import "./CinemaFurniturePage.css";

const cinemaFeatures = [
  {
    number: "01",
    title: "Comfort without distraction",
    text: "Supportive profiles, generous cushioning and quiet powered movement let the body settle completely while the furniture retains its tailored form.",
  },
  {
    number: "02",
    title: "Sightlines, precisely resolved",
    text: "Seat height, recline angle and tier depth are considered together, giving every guest an effortless view without compromising the intimacy of the room.",
  },
  {
    number: "03",
    title: "Everything within reach",
    text: "Walnut consoles discreetly hold controls, drinks, lighting and personal devices, keeping every convenience close and every surface beautifully composed.",
  },
];

const finishNotes = ["Selected dark walnut", "Tailored aniline leather", "Acoustic wool textiles", "Brushed bronze details"];

const cinemaGallery = [
  { image: gallery02, title: "The tiered recliner collection", material: "Leather · Walnut · Bronze" },
  { image: gallery03, title: "The cinema lounge", material: "Textile · Timber · Honed stone" },
  { image: gallery05, title: "The private loveseat", material: "Leather · Walnut · Integrated console" },
  { image: gallery06, title: "The rear viewing counter", material: "Walnut · Stone · Saddle leather" },
  { image: gallery08, title: "The intimate screening room", material: "Wool · Velvet · Walnut" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function CinemaFurniturePage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  return (
    <div className="page wardrobe-page cinema-furniture-page" id="page-top">
      <Header />

      <main>
        <section className="wardrobe-hero" aria-labelledby="cinema-furniture-title">
          <img src={gallery01} alt="Bespoke leather cinema recliners in a dark walnut private screening room" />
          <div className="wardrobe-hero-shade" />
          <div className="wardrobe-hero-content" data-reveal-block>
            <span className="eyebrow">Cinema Furniture</span>
            <h1 id="cinema-furniture-title">Every screening, a private occasion.</h1>
            <p>
              Bespoke seating and cinema lounges shaped around deep comfort,
              uninterrupted viewing and the quiet pleasure of having the finest seat at home.
            </p>
            <a className="button button-solid" href="#cinema-furniture-inquiry">Compose your cinema</a>
          </div>
          <div className="wardrobe-hero-meta" data-reveal-block>
            <span>Recliner · Lounge · Tiered seating</span>
            <span>Leather · Timber · Textile</span>
            <span>Designed for private viewing</span>
          </div>
          <a className="wardrobe-scroll" href="#cinema-furniture-introduction" aria-label="Scroll to the cinema furniture collection story">
            <span /> Explore
          </a>
        </section>

        <section className="wardrobe-intro" id="cinema-furniture-introduction" data-reveal-block>
          <div className="wardrobe-intro-signature">
            <div className="wardrobe-section-index">
              <span>11 / The collection</span>
              <p>Furniture that turns the ritual of watching into an experience of complete ease.</p>
            </div>
            <div className="wardrobe-intro-copy">
              <span className="eyebrow dark">Designed around the way you watch</span>
              <h2>Comfort so complete, the world beyond the screen disappears.</h2>
              <p>
                A Casa Lithic® cinema begins with the people who will enjoy it.
                Every seat, tier and table is composed around natural sightlines,
                generous support and the atmosphere of your room, creating a setting
                that feels intimate, effortless and entirely your own.
              </p>
            </div>
            <div className="wardrobe-finish-list" aria-label="Cinema furniture material families">
              {finishNotes.map((note, index) => (
                <div key={note}><span>0{index + 1}</span><p>{note}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wardrobe-craft" data-reveal-block>
          <div className="wardrobe-craft-image">
            <img src={gallery04} alt="Tailored cognac leather cinema recliner with a quietly extending footrest" />
            <span>Support, tailored to your preferred position</span>
          </div>
          <div className="wardrobe-craft-copy">
            <span className="eyebrow light">The distinction is in the comfort</span>
            <h2>Tailored to support every scene.</h2>
            <p>
              Headrest, lumbar profile, seat depth and footrest move in harmony,
              allowing each guest to find a position that feels naturally their own.
            </p>
            <p>
              Whisper-quiet mechanisms remain concealed beneath hand-finished leather,
              exact stitching and deeply considered cushioning—performance felt, never seen.
            </p>
            <a className="wardrobe-line-link" href="#cinema-furniture-details">Discover the details <Arrow /></a>
          </div>
        </section>

        <section className="wardrobe-details" id="cinema-furniture-details">
          <div className="wardrobe-details-head" data-reveal-block>
            <span className="eyebrow dark">Made for uninterrupted enjoyment</span>
            <h2>Every position considered. Every moment entirely yours.</h2>
          </div>
          <div className="wardrobe-feature-grid">
            {cinemaFeatures.map((feature) => (
              <article key={feature.number} data-reveal-block>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wardrobe-gallery" aria-labelledby="cinema-furniture-gallery-title">
          <div className="wardrobe-gallery-head" data-reveal-block>
            <div>
              <span className="eyebrow dark">The cinema furniture gallery</span>
              <h2 id="cinema-furniture-gallery-title">A beautiful way to lose yourself in the story.</h2>
            </div>
            <p>
              From individual power recliners and intimate loveseats to generous lounge
              seating and rear viewing counters, every piece belongs to one calm, considered room.
            </p>
          </div>
          <div className="wardrobe-gallery-grid">
            {cinemaGallery.map((item, index) => (
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
            <span className="eyebrow dark">Convenience, beautifully integrated</span>
            <h2>Settle. Recline. Stay.</h2>
            <p>
              Personal tables, warm reading light, discreet controls and beautifully
              finished consoles keep everything close without disturbing the room.
              Once seated, there is no reason to leave the moment behind.
            </p>
          </div>
          <div className="wardrobe-balance-image">
            <img src={gallery07} alt="Three leather cinema recliners with integrated walnut consoles and bronze details" />
            <div><span>Integrated cinema collection</span><strong>Every comfort within reach</strong></div>
          </div>
        </section>

        <section className="wardrobe-process">
          <div className="wardrobe-process-head" data-reveal-block>
            <span className="eyebrow light">Your cinema, from first thought to final detail</span>
            <h2>An exceptional experience at every step.</h2>
          </div>
          <ol className="wardrobe-process-list" data-reveal-block>
            <li><span>01</span><strong>Discover</strong><p>We learn how you watch, entertain and unwind, and who will share the room with you.</p></li>
            <li><span>02</span><strong>Plan</strong><p>Seating, tiers, circulation and sightlines are composed into one intuitive cinema setting.</p></li>
            <li><span>03</span><strong>Tailor</strong><p>Upholstery, support, finishes, controls and personal amenities are refined around your preferences.</p></li>
            <li><span>04</span><strong>Install</strong><p>Every piece is positioned, connected and tested until each seat feels perfectly resolved.</p></li>
          </ol>
        </section>

        <section className="wardrobe-inquiry" id="cinema-furniture-inquiry">
          <div className="wardrobe-inquiry-shade" />
          <div className="wardrobe-inquiry-copy" data-reveal-block>
            <span className="eyebrow">Begin your private consultation</span>
            <h2>Let us create a cinema where every seat feels like the best one.</h2>
            <p>Share your vision and discover furniture composed for the way you watch, gather and escape.</p>
            <a className="button button-solid" href="mailto:inquiries@casalithic.com?subject=Cinema furniture collection inquiry">
              Discuss your cinema <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CinemaFurniturePage;
