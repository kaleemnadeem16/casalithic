import { directionItems } from "../../data/siteData";
import "./Direction.css";

function Direction() {
  return (
    <section id="direction" className="section direction">
      <div className="direction-layout">
        <div className="direction-sticky" data-reveal-block>
          <span className="eyebrow light">The Feeling of Home</span>
          <h2>Luxury that is lived, not simply seen.</h2>
          <p>
            Casa Lithic® creates more than beautiful rooms. We shape an
            atmosphere of ease, pleasure, and belonging—where every detail
            quietly reminds you that you are somewhere exceptional.
          </p>
          <a className="direction-link" href="#contact">
            Shape your world <span>↗</span>
          </a>
        </div>

        <div className="direction-cards">
          {directionItems.map((item) => (
            <article className="direction-card" data-reveal-block key={item.title}>
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
              <div className="direction-card-copy">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Direction;
