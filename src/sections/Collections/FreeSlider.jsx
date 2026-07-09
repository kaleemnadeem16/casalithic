import { useEffect, useRef, useState } from "react";
import { collectionItems } from "../../data/siteData";
import CollectionCard from "./CollectionCard";

function FreeSlider() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const track = trackRef.current;
    if (!track) return;
    const available = track.scrollWidth - track.clientWidth;
    setProgress(available > 0 ? track.scrollLeft / available : 0);
  };

  const move = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.72, 620),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateProgress();
    window.addEventListener("resize", updateProgress);
    return () => window.removeEventListener("resize", updateProgress);
  }, []);

  return (
    <div className="free-slider">
      <div
        ref={trackRef}
        className="collection-card-track"
        onScroll={updateProgress}
      >
        {collectionItems.map((item, index) => (
          <CollectionCard item={item} index={index} key={item.title} />
        ))}
      </div>

      <div className="slider-controls">
        <div className="slider-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(0.08, progress)})` }} />
        </div>
        <div>
          <button type="button" onClick={() => move(-1)} aria-label="Previous collections">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Next collections">→</button>
        </div>
      </div>
    </div>
  );
}

export default FreeSlider;
