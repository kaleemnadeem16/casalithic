import Header from "../../sections/Header/Header";
import Footer from "../../sections/Footer/Footer";
import { getLanguageFromPath } from "../../i18n/language";
import heroImage from "../../assets/indoor-furniture/gallery/indoor-furniture-gallery-07.webp";
import ctaImage from "../../assets/doors/gallery/doors-gallery-01.webp";
import "./WorldwidePresencePage.css";

const content = {
  en: {
    heroEyebrow: "Worldwide presence",
    title: "Italian design, considered for the world.",
    intro: "From private residences to complete hospitality and commercial environments, Casa Lithic® brings one exacting design standard to projects across six regions.",
    explore: "Explore our regions",
    heroFoot: "Our presence",
    sectionEyebrow: "A global perspective",
    sectionTitle: "One vision. Twenty-three markets.",
    sectionBody: "Our international presence connects Italian design sensibility with the realities of each destination. We collaborate closely with clients, architects and project teams to preserve the integrity of every detail—from the first conversation to final installation.",
    marketsLabel: "markets",
    regionsLabel: "regions",
    standardLabel: "shared standard",
    regions: [
      { name: "Europe", countries: ["Italy", "Germany", "Spain", "Switzerland", "Denmark", "Finland", "Norway", "Sweden"] },
      { name: "Asia", countries: ["Japan", "Malaysia", "Pakistan"] },
      { name: "Middle East", countries: ["United Arab Emirates (UAE)", "Saudi Arabia", "Qatar", "Kuwait"] },
      { name: "Oceania", countries: ["Australia", "New Zealand"] },
      { name: "North America", countries: ["United States (USA)", "Canada", "Mexico"] },
      { name: "South America", countries: ["Brazil", "Argentina", "Chile"] },
    ],
    approachEyebrow: "Internationally coordinated",
    approachTitle: "Designed in Italy. Delivered with care.",
    approachBody: "Distance should never dilute a design idea. Our approach creates clarity across people, materials and timelines, helping every Casa Lithic® environment arrive with its original character intact.",
    approachItems: [
      { number: "01", title: "Local understanding", text: "Every project begins with its architecture, climate, culture and the way our client intends to live." },
      { number: "02", title: "One point of coordination", text: "We align clients, architects and project partners around a clear design and delivery process." },
      { number: "03", title: "Consistent execution", text: "Materials, finishes and installation details are reviewed to protect the same standard in every market." },
    ],
    ctaEyebrow: "Your project, wherever it begins",
    ctaTitle: "Bring the Casa Lithic® world to your destination.",
    ctaBody: "Tell us where you are creating and what you imagine. We will shape a considered path from first conversation to a fully realised interior.",
    ctaButton: "Begin a private consultation",
    heroAlt: "Casa Lithic living room opening onto a Mediterranean coastal landscape",
    ctaAlt: "Casa Lithic architectural timber entrance prepared for a luxury residence",
  },
  it: {
    heroEyebrow: "Presenza nel mondo",
    title: "Design italiano, pensato per il mondo.",
    intro: "Dalle residenze private agli ambienti completi per l'ospitalità e il settore commerciale, Casa Lithic® porta lo stesso rigoroso standard progettuale in sei regioni.",
    explore: "Esplora le nostre regioni",
    heroFoot: "La nostra presenza",
    sectionEyebrow: "Una prospettiva globale",
    sectionTitle: "Una visione. Ventitré mercati.",
    sectionBody: "La nostra presenza internazionale unisce la sensibilità del design italiano alle esigenze di ogni destinazione. Collaboriamo a stretto contatto con clienti, architetti e team di progetto per preservare l'integrità di ogni dettaglio, dal primo incontro all'installazione finale.",
    marketsLabel: "mercati",
    regionsLabel: "regioni",
    standardLabel: "standard condiviso",
    regions: [
      { name: "Europa", countries: ["Italia", "Germania", "Spagna", "Svizzera", "Danimarca", "Finlandia", "Norvegia", "Svezia"] },
      { name: "Asia", countries: ["Giappone", "Malesia", "Pakistan"] },
      { name: "Medio Oriente", countries: ["Emirati Arabi Uniti (EAU)", "Arabia Saudita", "Qatar", "Kuwait"] },
      { name: "Oceania", countries: ["Australia", "Nuova Zelanda"] },
      { name: "Nord America", countries: ["Stati Uniti d'America (USA)", "Canada", "Messico"] },
      { name: "Sud America", countries: ["Brasile", "Argentina", "Cile"] },
    ],
    approachEyebrow: "Coordinamento internazionale",
    approachTitle: "Progettato in Italia. Consegnato con cura.",
    approachBody: "La distanza non deve mai indebolire un'idea progettuale. Il nostro approccio crea chiarezza tra persone, materiali e tempistiche, affinché ogni ambiente Casa Lithic® conservi intatto il proprio carattere originario.",
    approachItems: [
      { number: "01", title: "Comprensione del luogo", text: "Ogni progetto nasce dall'architettura, dal clima, dalla cultura e dal modo in cui il cliente desidera vivere." },
      { number: "02", title: "Un unico coordinamento", text: "Allineiamo clienti, architetti e partner di progetto attraverso un processo chiaro, dalla progettazione alla consegna." },
      { number: "03", title: "Esecuzione coerente", text: "Materiali, finiture e dettagli di installazione sono verificati per garantire lo stesso standard in ogni mercato." },
    ],
    ctaEyebrow: "Il tuo progetto, ovunque inizi",
    ctaTitle: "Porta il mondo Casa Lithic® nella tua destinazione.",
    ctaBody: "Raccontaci dove stai creando e cosa immagini. Definiremo un percorso consapevole, dal primo incontro a un interno pienamente realizzato.",
    ctaButton: "Inizia una consulenza privata",
    heroAlt: "Living Casa Lithic affacciato su un paesaggio costiero mediterraneo",
    ctaAlt: "Ingresso architettonico in legno Casa Lithic per una residenza di lusso",
  },
};

function WorldwidePresencePage() {
  const language = getLanguageFromPath();
  const copy = content[language];

  return (
    <div className="page presence-page" id="page-top">
      <Header />

      <main>
        <section className="presence-hero" aria-labelledby="presence-page-title">
          <img src={heroImage} alt={copy.heroAlt} />
          <div className="presence-hero-shade" />
          <div className="presence-hero-orbit" aria-hidden="true"><span /><span /></div>
          <div className="presence-hero-content" data-reveal-block>
            <span className="eyebrow">{copy.heroEyebrow}</span>
            <h1 id="presence-page-title">{copy.title}</h1>
            <p>{copy.intro}</p>
            <a className="button button-solid" href="#global-markets">{copy.explore}</a>
          </div>
          <a className="presence-hero-foot" href="#global-markets">{copy.heroFoot}</a>
        </section>

        <section className="presence-intro" id="global-markets">
          <div className="presence-shell presence-intro-grid">
            <div className="presence-intro-heading" data-reveal-block>
              <span className="eyebrow dark">{copy.sectionEyebrow}</span>
              <h2>{copy.sectionTitle}</h2>
            </div>
            <div className="presence-intro-copy" data-reveal-block>
              <p>{copy.sectionBody}</p>
              <div className="presence-stats" aria-label={`${copy.marketsLabel} and ${copy.regionsLabel}`}>
                <div><strong>23</strong><span>{copy.marketsLabel}</span></div>
                <div><strong>06</strong><span>{copy.regionsLabel}</span></div>
                <div><strong>01</strong><span>{copy.standardLabel}</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="presence-regions" aria-label={copy.heroEyebrow}>
          <div className="presence-shell presence-region-grid">
            {copy.regions.map((region, index) => (
              <article className="presence-region" key={region.name} data-reveal-block>
                <div className="presence-region-head">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{region.name}</h2>
                  <span>{String(region.countries.length).padStart(2, "0")}</span>
                </div>
                <ul>
                  {region.countries.map((country) => <li key={country}>{country}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="presence-approach">
          <div className="presence-shell presence-approach-head" data-reveal-block>
            <div>
              <span className="eyebrow light">{copy.approachEyebrow}</span>
              <h2>{copy.approachTitle}</h2>
            </div>
            <p>{copy.approachBody}</p>
          </div>
          <div className="presence-shell presence-approach-grid">
            {copy.approachItems.map((item) => (
              <article key={item.number} data-reveal-block>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="presence-cta">
          <img src={ctaImage} alt={copy.ctaAlt} />
          <div className="presence-cta-shade" />
          <div className="presence-cta-copy" data-reveal-block>
            <span className="eyebrow">{copy.ctaEyebrow}</span>
            <h2>{copy.ctaTitle}</h2>
            <p>{copy.ctaBody}</p>
            <a className="button button-solid" href="#contact-modal" data-contact-modal>{copy.ctaButton}</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default WorldwidePresencePage;
