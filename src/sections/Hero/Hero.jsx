import { useCallback, useEffect, useRef, useState } from "react";
import { heroContent, heroSlides } from "../../data/siteData";
import "./Hero.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readySlides, setReadySlides] = useState(() => new Set([0]));
  const [pendingSlide, setPendingSlide] = useState(null);
  const readySlidesRef = useRef(new Set([0]));
  const preloadPromisesRef = useRef(new Map());
  const selectionRequestRef = useRef(0);

  const preloadSlide = useCallback((index) => {
    if (readySlidesRef.current.has(index)) return Promise.resolve(true);
    if (preloadPromisesRef.current.has(index)) {
      return preloadPromisesRef.current.get(index);
    }

    const promise = new Promise((resolve) => {
      const image = new Image();
      let settled = false;
      const finish = (isReady) => {
        if (settled) return;
        settled = true;
        preloadPromisesRef.current.delete(index);
        if (isReady) {
          readySlidesRef.current.add(index);
          setReadySlides(new Set(readySlidesRef.current));
        }
        resolve(isReady);
      };

      image.decoding = "async";
      image.fetchPriority = "low";
      image.onload = () => {
        if (typeof image.decode !== "function") {
          finish(true);
          return;
        }
        image.decode().catch(() => undefined).then(() => finish(true));
      };
      image.onerror = () => finish(false);
      image.src = heroSlides[index];
      if (image.complete && image.naturalWidth > 0) image.onload();
    });

    preloadPromisesRef.current.set(index, promise);
    return promise;
  }, []);

  useEffect(() => {
    if (pendingSlide !== null) return undefined;

    let cancelled = false;
    let timer;
    const nextSlide = (currentSlide + 1) % heroSlides.length;

    preloadSlide(nextSlide).then((isReady) => {
      if (cancelled || !isReady) return;
      timer = window.setTimeout(() => setCurrentSlide(nextSlide), 4200);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [currentSlide, pendingSlide, preloadSlide]);

  const selectSlide = (index) => {
    const request = selectionRequestRef.current + 1;
    selectionRequestRef.current = request;
    setPendingSlide(index);
    preloadSlide(index).then((isReady) => {
      if (selectionRequestRef.current !== request) return;
      if (isReady) setCurrentSlide(index);
      setPendingSlide(null);
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide}
            className={`hero-slide ${index === currentSlide ? "is-active" : ""}`}
            style={readySlides.has(index) ? { backgroundImage: `url(${slide})` } : undefined}
          />
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="hero-shell">
        <div className="hero-dots" aria-label="Hero slide navigation" data-reveal-block>
          {heroSlides.map((slide, index) => (
            <button
              key={slide}
              className={index === currentSlide ? "is-active" : ""}
              onClick={() => selectSlide(index)}
              type="button"
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hero-copy" data-reveal-block>
          <span className="eyebrow">{heroContent.kicker}</span>
          <h1>{heroContent.title}</h1>
          <p>{heroContent.body}</p>
          <div className="hero-actions">
            <a href="#collections" className="button button-solid">Discover the Collections</a>
            <a href="#contact" className="button button-outline">Create Your Residence</a>
          </div>
        </div>

        <div className="hero-bottom-meta" data-reveal-block>
          <div>
            <span>The Experience</span>
            <strong>Complete luxury for living, entertaining, working, and unwinding</strong>
          </div>
          <div>
            <span>The Feeling</span>
            <strong>Understated confidence, exceptional comfort, and beauty you can feel</strong>
          </div>
          <div>
            <span>The Service</span>
            <strong>A personal journey from first idea to a fully realised interior</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
