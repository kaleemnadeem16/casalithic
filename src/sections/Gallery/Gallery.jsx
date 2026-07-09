import { useEffect, useState } from "react";
import { galleryImages, gallerySets } from "../../data/siteData";
import "./Gallery.css";

const GALLERY_SLICES = Array.from({ length: 8 });

function Gallery() {
  const [setIndex, setSetIndex] = useState(0);
  const [displayedSetIndex, setDisplayedSetIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(null);
  const visibleImages = gallerySets[setIndex];
  const displayedImages = gallerySets[displayedSetIndex];
  const isChangingSet = setIndex !== displayedSetIndex;

  useEffect(() => {
    if (activeImage !== null) return undefined;

    const timer = window.setInterval(() => {
      setSetIndex((current) => (current + 1) % gallerySets.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [activeImage]);

  useEffect(() => {
    if (!isChangingSet) return undefined;

    const timer = window.setTimeout(() => {
      setDisplayedSetIndex(setIndex);
    }, 1250);

    return () => window.clearTimeout(timer);
  }, [isChangingSet, setIndex]);

  useEffect(() => {
    if (activeImage === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowRight") {
        setActiveImage((current) => (current + 1) % galleryImages.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveImage(
          (current) => (current - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage]);

  const openImage = (image) => {
    setActiveImage(galleryImages.findIndex((item) => item.image === image.image));
  };

  const moveModal = (direction) => {
    setActiveImage(
      (current) =>
        (current + direction + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section id="gallery" className="section gallery">
      <div className="section-head" data-reveal-block>
        <span className="eyebrow dark">The Casa Lithic® lifestyle</span>
        <h2>Spaces that make every day feel extraordinary.</h2>
        <p>
          From sunlit mornings to private screenings after dark, discover a
          complete vision of luxury living shaped around comfort, beauty, and
          the pleasure of feeling truly at home.
        </p>
      </div>

      <div className="gallery-mosaic">
        {visibleImages.map((item, index) => (
          <button
            className={`${index === 0 ? "gallery-large" : "gallery-small"} gallery-tile`}
            key={item.title}
            onClick={() => openImage(item)}
            type="button"
            aria-label={`Open ${item.title} in gallery`}
          >
            <img
              className="gallery-tile-image"
              src={displayedImages[index].image}
              alt={isChangingSet ? "" : item.title}
            />
            {isChangingSet && (
              <span
                className="gallery-slices"
                key={`${setIndex}-${item.title}`}
                aria-hidden="true"
              >
                {GALLERY_SLICES.map((_, sliceIndex) => (
                  <span
                    className="gallery-slice"
                    key={sliceIndex}
                    style={{ "--slice-index": sliceIndex }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      style={{ left: `${sliceIndex * -100}%` }}
                    />
                  </span>
                ))}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="gallery-navigation">
        <div aria-label="Gallery sets">
          {gallerySets.map((set, index) => (
            <button
              className={setIndex === index ? "is-active" : ""}
              key={set[0].title}
              onClick={() => setSetIndex(index)}
              type="button"
              aria-label={`Show gallery set ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {activeImage !== null && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Casa Lithic luxury living gallery"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveImage(null);
          }}
        >
          <button
            className="gallery-modal-close"
            onClick={() => setActiveImage(null)}
            type="button"
            aria-label="Close gallery"
          >
            Close
          </button>
          <button
            className="gallery-modal-arrow is-previous"
            onClick={() => moveModal(-1)}
            type="button"
            aria-label="Previous image"
          >
            ←
          </button>
          <figure className="gallery-modal-figure">
            <img
              src={galleryImages[activeImage].image}
              alt={galleryImages[activeImage].title}
            />
            <figcaption>
              <span>{String(activeImage + 1).padStart(2, "0")} / {galleryImages.length}</span>
              <strong>{galleryImages[activeImage].title}</strong>
            </figcaption>
          </figure>
          <button
            className="gallery-modal-arrow is-next"
            onClick={() => moveModal(1)}
            type="button"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
