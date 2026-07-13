import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import heroImage from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-01.jpg";
import philosophyImage from "../../assets/doors/gallery/doors-gallery-01.jpg";
import kitchenImage from "../../assets/kitchen/gallery/kitchen-gallery-02.jpg";
import wellnessImage from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-09.jpg";
import outdoorImage from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-09.jpg";
import ctaImage from "../../assets/wardrobes/gallery/wardrobe-gallery-01.jpg";
import "../EditorialPages.css";

const values = [
  {
    number: "01",
    title: "Personal by nature",
    text: "Every decision begins with how you want to live, so the finished home carries your character rather than a prescribed style.",
  },
  {
    number: "02",
    title: "Quietly exceptional",
    text: "Proportion, material and detail create an atmosphere of distinction that is deeply felt without ever needing to announce itself.",
  },
  {
    number: "03",
    title: "Complete in vision",
    text: "Furniture, cabinetry, surfaces and private amenities are considered together, giving the entire residence one effortless language.",
  },
  {
    number: "04",
    title: "Made to endure",
    text: "Selected materials and exacting craftsmanship give every piece a lasting presence that grows richer through years of daily life.",
  },
];

function AboutPage() {
  return (
    <div className="page editorial-page about-page" id="page-top">
      <Header />

      <main>
        <section className="editorial-hero" aria-labelledby="about-page-title">
          <img src={heroImage} alt="Serene Casa Lithic living room with sculptural furniture and warm natural timber" />
          <div className="editorial-hero-shade" />
          <div className="editorial-hero-content" data-reveal-block>
            <span className="eyebrow">About Casa Lithic®</span>
            <h1 id="about-page-title">A home should feel unmistakably yours.</h1>
            <p>
              Casa Lithic® creates complete luxury interiors in which architecture,
              furniture and private rituals come together as one deeply personal world.
            </p>
            <a className="button button-solid" href="#our-story">Discover our philosophy</a>
          </div>
          <a className="editorial-hero-foot" href="#our-story">Our story</a>
        </section>

        <section className="about-manifesto" id="our-story">
          <div className="editorial-shell about-manifesto-grid" data-reveal-block>
            <span className="about-manifesto-index">01 / Our story</span>
            <div className="about-manifesto-copy">
              <span className="eyebrow dark">Luxury, made personal</span>
              <h2>We create the feeling of being entirely at home.</h2>
              <p className="editorial-body">
                The most memorable residences are not assembled room by room. They are
                composed as a complete experience—one in which every finish, proportion
                and piece of furniture belongs to the same idea. Casa Lithic® brings that
                idea to life with rare materials, thoughtful design and an intimate
                understanding of the people who will live there.
              </p>
            </div>
            <aside className="about-manifesto-aside">
              <span>Our belief</span>
              <blockquote>True luxury is not simply seen. It is the privilege of feeling that everything belongs to you.</blockquote>
            </aside>
          </div>
        </section>

        <section className="about-philosophy editorial-dark" data-reveal-block>
          <div className="about-philosophy-image">
            <img src={philosophyImage} alt="Monumental timber entrance opening into a warmly illuminated private residence" />
          </div>
          <div className="about-philosophy-copy">
            <span className="eyebrow light">From first impression to private ritual</span>
            <h2>One vision, carried through every room.</h2>
            <p className="editorial-body">
              A front door sets the tone. A kitchen shapes the rhythm of the day.
              A wardrobe brings calm to the morning, while a cinema or wellness suite
              turns time at home into something exceptional. We consider these moments
              together, creating continuity without repetition and distinction without excess.
            </p>
            <p className="editorial-body">
              The result is a residence that feels generous, intuitive and quietly
              assured—designed not around an image of luxury, but around your life.
            </p>
          </div>
        </section>

        <section className="about-values">
          <div className="editorial-shell">
            <div className="about-values-head" data-reveal-block>
              <div>
                <span className="eyebrow dark">What defines Casa Lithic®</span>
                <h2 className="editorial-heading">Four principles. One enduring standard.</h2>
              </div>
              <p className="editorial-body">
                Our work is guided by the same values at every scale, from the atmosphere
                of a complete residence to the precise touch of a drawer or chair.
              </p>
            </div>
            <div className="about-values-grid">
              {values.map((value) => (
                <article key={value.number} data-reveal-block>
                  <span>{value.number}</span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-world editorial-dark">
          <div className="editorial-shell">
            <div className="about-world-head" data-reveal-block>
              <div>
                <span className="eyebrow light">The complete Casa Lithic® world</span>
                <h2 className="editorial-heading">Designed as a way of living.</h2>
              </div>
              <p className="editorial-body">
                From the social heart of the home to its most private spaces, every
                collection is created to belong to a larger, beautifully resolved whole.
              </p>
            </div>
            <div className="about-world-grid">
              <figure data-reveal-block>
                <img src={kitchenImage} alt="Warm walnut statement kitchen overlooking the city" />
                <figcaption><span>Living</span><strong>Spaces for gathering</strong></figcaption>
              </figure>
              <figure data-reveal-block>
                <img src={wellnessImage} alt="Private timber sauna and cold plunge opening onto a garden" />
                <figcaption><span>Wellness</span><strong>Spaces for restoration</strong></figcaption>
              </figure>
              <figure data-reveal-block>
                <img src={outdoorImage} alt="Luxury outdoor furniture overlooking a mountain lake" />
                <figcaption><span>Outdoors</span><strong>Spaces for escape</strong></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="editorial-cta">
          <img src={ctaImage} alt="Tailored walnut wardrobe interior in a refined private dressing room" />
          <div className="editorial-cta-shade" />
          <div className="editorial-cta-copy" data-reveal-block>
            <span className="eyebrow">Begin your Casa Lithic® story</span>
            <h2>Let us create a world that feels made for you.</h2>
            <p>Share your vision and discover how every room can become part of one exceptional way of living.</p>
            <a className="button button-solid" href="#contact-modal" data-contact-modal>Begin a private consultation</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutPage;
