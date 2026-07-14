import { localizePath } from "../../i18n/language";

function CollectionCard({ item, index }) {
  return (
    <article className="collection-card">
      <div className="collection-card-image">
        <img src={item.image} alt={`${item.title} collection`} loading="lazy" decoding="async" />
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="collection-card-copy">
        <p>{item.label}</p>
        <h3>{item.title}</h3>
        <div>
          <span>{item.text}</span>
          <a href={localizePath(item.href || "#contact")} aria-label={`Explore the ${item.title} collection`}>↗</a>
        </div>
      </div>
    </article>
  );
}

export default CollectionCard;
