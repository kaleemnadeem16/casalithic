import FreeSlider from "./FreeSlider";
import "./Collections.css";

function Collections() {
  return (
    <section
      id="collections"
      className="section collections-section"
      data-reveal-block
    >
      <div className="collections-shell">
        <div className="collections-contained">
          <div className="collections-intro">
            <div>
              <span className="eyebrow dark">The luxury living collections</span>
              <h2>Elevate every way you live.</h2>
            </div>
            <p>
              Eleven distinctive collections created to bring premium comfort,
              beauty, and character into every moment at home.
            </p>
          </div>
        </div>

        <FreeSlider />
      </div>
    </section>
  );
}

export default Collections;
