import { useEffect } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import gallery01 from "../../assets/flooring/gallery/flooring-gallery-01.jpg";
import gallery02 from "../../assets/flooring/gallery/flooring-gallery-02.jpg";
import gallery03 from "../../assets/flooring/gallery/flooring-gallery-03.jpg";
import gallery04 from "../../assets/flooring/gallery/flooring-gallery-04.jpg";
import gallery05 from "../../assets/flooring/gallery/flooring-gallery-05.jpg";
import gallery06 from "../../assets/flooring/gallery/flooring-gallery-06.jpg";
import gallery07 from "../../assets/flooring/gallery/flooring-gallery-07.jpg";
import gallery09 from "../../assets/flooring/gallery/flooring-gallery-09.jpg";
import "../Wardrobes/WardrobesPage.css";
import "./FlooringPage.css";

const flooringFeatures = [
  {
    number: "01",
    title: "Timber with character",
    text: "Tone, grain and natural variation are carefully considered, creating a floor with depth, warmth and an expression entirely suited to the residence.",
  },
  {
    number: "02",
    title: "Patterns with purpose",
    text: "Wide planks bring calm continuity, while herringbone, chevron and panelled parquet introduce rhythm and architectural distinction.",
  },
  {
    number: "03",
    title: "A considered finish",
    text: "Brushed textures and restrained matte tones allow the natural beauty of the timber to be felt while sitting effortlessly within the wider interior palette.",
  },
];

const finishNotes = ["Selected European oak", "Hand-matched natural grain", "Wide plank and parquet", "Brushed matte finishes"];

const flooringGallery = [
  { image: gallery03, title: "Smoked chevron salon", material: "Smoked oak · Chevron pattern" },
  { image: gallery04, title: "Light herringbone dining room", material: "Natural oak · Herringbone" },
  { image: gallery05, title: "Charcoal library floor", material: "Dark oak · Wide plank" },
  { image: gallery06, title: "Panelled parquet interior", material: "European oak · Parquet panels" },
  { image: gallery07, title: "Character oak retreat", material: "Aged oak · Extra-wide plank" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function FlooringPage() {
  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView());
  }, []);

  return (
    <div className="page wardrobe-page flooring-page" id="page-top">
      <Header />

      <main>
        <section className="wardrobe-hero" aria-labelledby="flooring-title">
          <img src={gallery01} alt="Expansive natural oak flooring in a refined contemporary living room" />
          <div className="wardrobe-hero-shade" />
          <div className="wardrobe-hero-content" data-reveal-block>
            <span className="eyebrow">Flooring</span>
            <h1 id="flooring-title">Beauty, grounded in nature.</h1>
            <p>
              Exceptional timber floors that bring warmth, continuity and a
              quietly assured foundation to every part of your home.
            </p>
            <a className="button button-solid" href="#flooring-inquiry">Create your foundation</a>
          </div>
          <div className="wardrobe-hero-meta" data-reveal-block>
            <span>Selected natural timber</span>
            <span>Plank · Herringbone · Parquet</span>
            <span>Composed for your residence</span>
          </div>
          <a className="wardrobe-scroll" href="#flooring-introduction" aria-label="Scroll to the flooring collection story">
            <span /> Explore
          </a>
        </section>

        <section className="wardrobe-intro" id="flooring-introduction" data-reveal-block>
          <div className="wardrobe-intro-signature">
            <div className="wardrobe-section-index">
              <span>05 / The collection</span>
              <p>The material that gives every room its first sense of belonging.</p>
            </div>
            <div className="wardrobe-intro-copy">
              <span className="eyebrow dark">The room begins beneath your feet</span>
              <h2>A foundation of quiet distinction.</h2>
              <p>
                A Casa Lithic® floor is selected as part of the complete interior.
                Timber, proportion, laying pattern and finish are composed to move
                naturally through the architecture and give the home a lasting warmth.
              </p>
            </div>
            <div className="wardrobe-finish-list" aria-label="Flooring material and finish families">
              {finishNotes.map((note, index) => (
                <div key={note}><span>0{index + 1}</span><p>{note}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wardrobe-craft" data-reveal-block>
          <div className="wardrobe-craft-image">
            <img src={gallery02} alt="Close detail of precisely joined brushed oak floorboards beside a limestone threshold" />
            <span>Natural character, precisely resolved</span>
          </div>
          <div className="wardrobe-craft-copy">
            <span className="eyebrow light">The distinction is in the detail</span>
            <h2>Every board, selected with purpose.</h2>
            <p>
              Grain, tone and texture are considered across the whole room, creating
              a balanced natural composition rather than a sequence of individual boards.
            </p>
            <p>
              Precise joints, refined edges and a beautifully restrained finish allow
              the timber to feel generous underfoot and effortless within the architecture.
            </p>
            <a className="wardrobe-line-link" href="#flooring-details">Discover the details <Arrow /></a>
          </div>
        </section>

        <section className="wardrobe-details" id="flooring-details">
          <div className="wardrobe-details-head" data-reveal-block>
            <span className="eyebrow dark">Made for a life of distinction</span>
            <h2>One noble material. A world of atmosphere.</h2>
          </div>
          <div className="wardrobe-feature-grid">
            {flooringFeatures.map((feature) => (
              <article key={feature.number} data-reveal-block>
                <span>{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wardrobe-gallery" aria-labelledby="flooring-gallery-title">
          <div className="wardrobe-gallery-head" data-reveal-block>
            <div>
              <span className="eyebrow dark">The flooring gallery</span>
              <h2 id="flooring-gallery-title">A distinct rhythm for every interior.</h2>
            </div>
            <p>
              From serene wide planks to richly patterned parquet, each floor is
              composed to enhance the scale, light and character of its setting.
            </p>
          </div>
          <div className="wardrobe-gallery-grid">
            {flooringGallery.map((item, index) => (
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
            <span className="eyebrow dark">A continuous interior</span>
            <h2>Flow. Warmth. Belonging.</h2>
            <p>
              A beautifully composed floor draws separate spaces into one experience.
              Long lines bring calm, natural grain adds life, and a considered tone
              carries warmth through the residence from one room to the next.
            </p>
          </div>
          <div className="wardrobe-balance-image">
            <img src={gallery09} alt="Honey-toned wide-plank oak flowing through connected living spaces" />
            <div><span>Continuous wide-plank oak</span><strong>Made for the whole home</strong></div>
          </div>
        </section>

        <section className="wardrobe-process">
          <div className="wardrobe-process-head" data-reveal-block>
            <span className="eyebrow light">Your floor, from first thought to final board</span>
            <h2>An exceptional experience at every step.</h2>
          </div>
          <ol className="wardrobe-process-list" data-reveal-block>
            <li><span>01</span><strong>Discover</strong><p>We study the architecture, natural light and atmosphere you wish to create.</p></li>
            <li><span>02</span><strong>Select</strong><p>Timber character, tone, board scale and pattern are considered together.</p></li>
            <li><span>03</span><strong>Compose</strong><p>Board direction and transitions are resolved across the complete residence.</p></li>
            <li><span>04</span><strong>Install</strong><p>Your floor is laid and refined with exacting care for a seamless result.</p></li>
          </ol>
        </section>

        <section className="wardrobe-inquiry" id="flooring-inquiry">
          <div className="wardrobe-inquiry-shade" />
          <div className="wardrobe-inquiry-copy" data-reveal-block>
            <span className="eyebrow">Begin your private consultation</span>
            <h2>Let us create the foundation for a home of lasting distinction.</h2>
            <p>Share your residence and discover the timber, tone and pattern that belong within it.</p>
            <a className="button button-solid" href="mailto:inquiries@casalithic.com?subject=Flooring collection inquiry">
              Discuss your flooring <Arrow />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default FlooringPage;
