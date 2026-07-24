import { useEffect, useMemo, useState } from "react";
import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import indoor01 from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-01.webp";
import indoor03 from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-03.webp";
import outdoor09 from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-09.webp";
import outdoor03 from "../../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-03.webp";
import kitchen02 from "../../assets/kitchen/gallery/kitchen-gallery-02.webp";
import kitchen05 from "../../assets/kitchen/gallery/kitchen-gallery-05.webp";
import wardrobe01 from "../../assets/wardrobes/gallery/wardrobe-gallery-01.webp";
import wardrobe04 from "../../assets/wardrobes/gallery/wardrobe-gallery-04.webp";
import vanity01 from "../../assets/vanities-wall-units/gallery/vanities-wall-units-gallery-01.webp";
import doors01 from "../../assets/doors/gallery/doors-gallery-01.webp";
import flooring01 from "../../assets/flooring/gallery/flooring-gallery-01.webp";
import wellness09 from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-09.webp";
import wellness01 from "../../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-01.webp";
import salon09 from "../../assets/salon-furniture/gallery/salon-furniture-gallery-09.webp";
import office01 from "../../assets/office-furniture/gallery/office-furniture-gallery-01.webp";
import cinema09 from "../../assets/cinema-furniture/gallery/cinema-furniture-gallery-09.webp";
import "../EditorialPages.css";

const filters = ["All", "Living", "Private Spaces", "Wellness", "Professional"];

const portfolioItems = [
  { image: indoor01, title: "The sculptural living room", category: "Living", detail: "Indoor Furniture" },
  { image: kitchen02, title: "The illuminated walnut kitchen", category: "Living", detail: "Kitchen" },
  { image: wardrobe01, title: "The private dressing suite", category: "Private Spaces", detail: "Wardrobes" },
  { image: outdoor09, title: "The mountain terrace", category: "Living", detail: "Outdoor Furniture" },
  { image: wellness09, title: "The garden wellness retreat", category: "Wellness", detail: "Sauna & Cold Plunge" },
  { image: office01, title: "The executive study", category: "Professional", detail: "Office Solution" },
  { image: indoor03, title: "The evening lounge", category: "Living", detail: "Indoor Furniture" },
  { image: vanity01, title: "The principal vanity", category: "Private Spaces", detail: "Vanities & Wall Units" },
  { image: cinema09, title: "The private screening room", category: "Private Spaces", detail: "Cinema Solution" },
  { image: kitchen05, title: "The social kitchen", category: "Living", detail: "Kitchen" },
  { image: doors01, title: "The monumental entrance", category: "Private Spaces", detail: "Doors" },
  { image: salon09, title: "The private beauty salon", category: "Professional", detail: "Salon Solution" },
  { image: flooring01, title: "The herringbone residence", category: "Private Spaces", detail: "Flooring" },
  { image: wellness01, title: "The timber sanctuary", category: "Wellness", detail: "Sauna" },
  { image: outdoor03, title: "The poolside collection", category: "Living", detail: "Outdoor Furniture" },
  { image: wardrobe04, title: "The illuminated wardrobe", category: "Private Spaces", detail: "Wardrobes" },
];

function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const visibleItems = useMemo(
    () => activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  useEffect(() => {
    if (activeImage === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowRight") {
        setActiveImage((current) => (current + 1) % visibleItems.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage((current) => (current - 1 + visibleItems.length) % visibleItems.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage, visibleItems.length]);

  const selectFilter = (filter) => {
    setActiveImage(null);
    setActiveFilter(filter);
  };

  const moveModal = (direction) => {
    setActiveImage((current) => (current + direction + visibleItems.length) % visibleItems.length);
  };

  return (
    <div className="page editorial-page gallery-page" id="page-top">
      <Header />

      <main>
        <section className="editorial-hero" aria-labelledby="gallery-page-title">
          <img src={outdoor09} alt="Casa Lithic outdoor living collection overlooking a mountain lake" />
          <div className="editorial-hero-shade" />
          <div className="editorial-hero-content" data-reveal-block>
            <span className="eyebrow">The Casa Lithic® Gallery</span>
            <h1 id="gallery-page-title">A world of rooms, composed as one.</h1>
            <p>
              Explore private interiors, furniture and restorative spaces united by
              considered proportions, beautiful materials and an unmistakable sense of home.
            </p>
            <a className="button button-solid" href="#portfolio">Explore the gallery</a>
          </div>
          <a className="editorial-hero-foot" href="#portfolio">View portfolio</a>
        </section>

        <section className="portfolio-intro" id="portfolio">
          <div className="editorial-shell">
            <div className="portfolio-intro-grid" data-reveal-block>
              <div>
                <span className="eyebrow dark">Selected spaces and collections</span>
                <h2 className="editorial-heading">Every image, a different expression of refined living.</h2>
              </div>
              <p className="editorial-body">
                Browse the complete selection or focus on the spaces closest to your
                vision. Select any image to experience it at full scale.
              </p>
            </div>
            <div className="portfolio-filters" aria-label="Filter gallery" data-reveal-block>
              {filters.map((filter) => (
                <button
                  className={activeFilter === filter ? "is-active" : ""}
                  type="button"
                  key={filter}
                  aria-pressed={activeFilter === filter}
                  onClick={() => selectFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section" aria-live="polite">
          <div className="editorial-shell portfolio-grid">
            {visibleItems.map((item, index) => (
              <button
                className="portfolio-card"
                type="button"
                key={`${item.title}-${activeFilter}`}
                onClick={() => setActiveImage(index)}
                aria-label={`Open ${item.title}`}
              >
                <div className="portfolio-card-media">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="portfolio-card-copy">
                  <span>{String(index + 1).padStart(2, "0")} / {item.detail}</span>
                  <strong>{item.title}</strong>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="editorial-cta">
          <img src={cinema09} alt="Atmospheric Casa Lithic private cinema with tailored seating" />
          <div className="editorial-cta-shade" />
          <div className="editorial-cta-copy" data-reveal-block>
            <span className="eyebrow">Imagine your residence</span>
            <h2>Which moments should your home make exceptional?</h2>
            <p>Tell us how you want to live, and we will compose the spaces, furniture and details around you.</p>
            <a className="button button-solid" href="#contact-modal" data-contact-modal>Begin a private consultation</a>
          </div>
        </section>
      </main>

      {activeImage !== null && (
        <div
          className="portfolio-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Casa Lithic portfolio image"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveImage(null);
          }}
        >
          <button className="portfolio-modal-close" type="button" onClick={() => setActiveImage(null)}>Close</button>
          <button className="portfolio-modal-arrow" type="button" onClick={() => moveModal(-1)} aria-label="Previous image">←</button>
          <figure>
            <img src={visibleItems[activeImage].image} alt={visibleItems[activeImage].title} />
            <figcaption>
              <span>{String(activeImage + 1).padStart(2, "0")} / {visibleItems.length} · {visibleItems[activeImage].detail}</span>
              <strong>{visibleItems[activeImage].title}</strong>
            </figcaption>
          </figure>
          <button className="portfolio-modal-arrow" type="button" onClick={() => moveModal(1)} aria-label="Next image">→</button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default GalleryPage;
