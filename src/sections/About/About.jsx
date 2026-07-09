import "./About.css";

const principles = [
  ["01", "Presence", "Interiors with a quiet confidence that is felt before it is explained."],
  ["02", "Comfort", "Beautiful forms made for real pleasure, ease, and everyday indulgence."],
  ["03", "Identity", "A complete home shaped around your taste, your rituals, and your story."],
];

function About() {
  return (
    <section id="about" className="section about-section" data-reveal-block>
      <div className="about-shell">
        <div className="about-brand-column" aria-label="Casa Lithic">
          <small className="about-index">01 / About</small>
          <div className="about-wordmark">
            <span>CASA <strong>LITHIC</strong><sup>®</sup></span>
            <small>Luxury, made personal</small>
          </div>
        </div>

        <div className="about-main">
          <span className="eyebrow dark">The Casa Lithic® way of living</span>
          <blockquote>
            True luxury is coming home to a world that feels made for you.
          </blockquote>
          <div className="about-main-footer">
            <p>
              Casa Lithic® brings every part of refined living into one
              beautifully resolved vision. From the first step inside to the
              quietest private ritual, each room is designed to feel generous,
              effortless, and deeply personal—the kind of luxury that does not
              simply impress, but changes how home makes you feel.
            </p>
            <a className="text-link" href="#contact">
              Imagine your residence <span>↗</span>
            </a>
          </div>
        </div>

        <div className="about-principles">
          {principles.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
