import { useEffect, useState } from "react";
import { heroContent, heroSlides } from "../../data/siteData";
import "./Hero.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide}
            className={`hero-slide ${index === currentSlide ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${slide})` }}
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
              onClick={() => setCurrentSlide(index)}
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
            <strong>Quiet confidence, exceptional comfort, and beauty you can feel</strong>
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
