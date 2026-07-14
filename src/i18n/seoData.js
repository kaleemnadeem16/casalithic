import homeImage from "../assets/casalithic-villa/web/indoor-furniture-enhanced.webp";
import wardrobeImage from "../assets/wardrobes/gallery/wardrobe-gallery-01.webp";
import kitchenImage from "../assets/kitchen/gallery/kitchen-gallery-02.webp";
import vanityImage from "../assets/vanities-wall-units/gallery/vanities-wall-units-gallery-01.webp";
import doorsImage from "../assets/doors/gallery/doors-gallery-01.webp";
import flooringImage from "../assets/flooring/gallery/flooring-gallery-09.webp";
import wellnessImage from "../assets/saunas-cold-plunges/gallery/saunas-cold-plunges-gallery-09.webp";
import indoorImage from "../assets/indoor-furniture/gallery/indoor-furniture-gallery-01.webp";
import outdoorImage from "../assets/outdoor-furniture/gallery/outdoor-furniture-gallery-09.webp";
import saloonImage from "../assets/saloon-furniture/gallery/saloon-furniture-gallery-09.webp";
import officeImage from "../assets/office-furniture/gallery/office-furniture-gallery-09.webp";
import cinemaImage from "../assets/cinema-furniture/gallery/cinema-furniture-gallery-09.webp";

const pages = {
  "/": {
    type: "WebPage",
    image: homeImage,
    en: {
      title: "Casa Lithic® | Luxury Interiors & Bespoke Furniture",
      description: "Complete luxury interiors, bespoke furniture and private wellness spaces, composed around your residence and the way you want to live.",
      name: "Home",
    },
    it: {
      title: "Casa Lithic® | Interni e arredi di lusso su misura",
      description: "Interni completi di lusso, arredi su misura e spazi benessere privati, composti intorno alla tua residenza e al tuo modo di vivere.",
      name: "Home",
    },
  },
  "/about": {
    type: "AboutPage",
    image: doorsImage,
    en: {
      title: "About Casa Lithic® | A Complete Vision of Luxury Living",
      description: "Discover Casa Lithic's philosophy: rare materials, exacting craftsmanship and complete interiors shaped into one deeply personal residence.",
      name: "About",
    },
    it: {
      title: "Chi siamo | La visione dell'abitare Casa Lithic®",
      description: "Scopri la filosofia Casa Lithic: materiali rari, lavorazione rigorosa e interni completi composti in una residenza profondamente personale.",
      name: "Chi siamo",
    },
  },
  "/collections": {
    type: "CollectionPage",
    image: indoorImage,
    en: {
      title: "Luxury Interior Collections | Casa Lithic®",
      description: "Explore eleven collections spanning bespoke kitchens, wardrobes, architectural timber, furniture, wellness and private entertainment.",
      name: "Collections",
    },
    it: {
      title: "Collezioni di interni e arredi di lusso | Casa Lithic®",
      description: "Esplora undici collezioni: cucine e armadi su misura, legno architettonico, arredi, benessere e intrattenimento privato.",
      name: "Collezioni",
    },
  },
  "/gallery": {
    type: "ImageGallery",
    image: indoorImage,
    en: {
      title: "Luxury Interior Gallery | Casa Lithic®",
      description: "Explore refined residences, bespoke furniture, architectural timber and private wellness spaces from the complete Casa Lithic world.",
      name: "Gallery",
    },
    it: {
      title: "Galleria di interni di lusso | Casa Lithic®",
      description: "Esplora residenze raffinate, arredi su misura, legno architettonico e spazi benessere privati del mondo Casa Lithic.",
      name: "Galleria",
    },
  },
  "/contact": {
    type: "ContactPage",
    image: outdoorImage,
    en: {
      title: "Contact Casa Lithic® | Private Interior Consultation",
      description: "Begin a private consultation for a complete residence or individual Casa Lithic collection. Share your project with our team.",
      name: "Contact",
    },
    it: {
      title: "Contatti Casa Lithic® | Consulenza privata per interni",
      description: "Inizia una consulenza privata per una residenza completa o una collezione Casa Lithic. Condividi il tuo progetto con il nostro team.",
      name: "Contatti",
    },
  },
  "/collections/wardrobes": {
    type: "CollectionPage",
    image: wardrobeImage,
    en: {
      title: "Bespoke Timber Wardrobes | Casa Lithic®",
      description: "Discover made-to-measure timber wardrobes and private dressing rooms, crafted with exceptional wood and composed around your collection.",
      name: "Wardrobes",
    },
    it: {
      title: "Armadi in legno su misura | Casa Lithic®",
      description: "Scopri armadi in legno e cabine armadio su misura, realizzati con essenze eccezionali e composti intorno al tuo guardaroba.",
      name: "Armadi",
    },
  },
  "/collections/kitchen": {
    type: "CollectionPage",
    image: kitchenImage,
    en: {
      title: "Bespoke Luxury Kitchens | Casa Lithic®",
      description: "Tailored kitchens combining fine wood, stone, metal and integrated performance, designed around the way you cook, gather and entertain.",
      name: "Kitchen",
    },
    it: {
      title: "Cucine di lusso su misura | Casa Lithic®",
      description: "Cucine su misura in legno pregiato, pietra e metallo, con prestazioni integrate e un progetto costruito intorno al tuo modo di vivere.",
      name: "Cucine",
    },
  },
  "/collections/vanities-wall-units": {
    type: "CollectionPage",
    image: vanityImage,
    en: {
      title: "Bespoke Vanities & Wall Units | Casa Lithic®",
      description: "Architectural wall units and bespoke vanities that unite refined storage, display, natural stone, fine timber and integrated light.",
      name: "Vanities & Wall Units",
    },
    it: {
      title: "Mobili bagno e pareti attrezzate su misura | Casa Lithic®",
      description: "Pareti attrezzate e mobili bagno su misura che uniscono contenimento, esposizione, pietra naturale, legno pregiato e luce integrata.",
      name: "Mobili bagno e pareti attrezzate",
    },
  },
  "/collections/doors": {
    type: "CollectionPage",
    image: doorsImage,
    en: {
      title: "Bespoke Architectural Timber Doors | Casa Lithic®",
      description: "Monumental entrances and refined interior doors crafted in selected timber, with precise hardware and effortless architectural movement.",
      name: "Doors",
    },
    it: {
      title: "Porte architettoniche in legno su misura | Casa Lithic®",
      description: "Ingressi monumentali e porte interne raffinate in legni selezionati, con ferramenta precisa e un movimento architettonico naturale.",
      name: "Porte",
    },
  },
  "/collections/flooring": {
    type: "CollectionPage",
    image: flooringImage,
    en: {
      title: "Luxury Timber Flooring | Casa Lithic®",
      description: "Wide-plank, herringbone, chevron and parquet timber floors selected to bring warmth, continuity and distinction through the residence.",
      name: "Flooring",
    },
    it: {
      title: "Pavimenti in legno di pregio | Casa Lithic®",
      description: "Pavimenti in legno a tavola larga, spina di pesce, chevron e parquet, selezionati per portare calore e continuità nella residenza.",
      name: "Pavimenti",
    },
  },
  "/collections/saunas-cold-plunges": {
    type: "CollectionPage",
    image: wellnessImage,
    en: {
      title: "Private Saunas & Cold Plunges | Casa Lithic®",
      description: "Private wellness suites combining timber saunas and cold plunges in one restorative architectural environment designed for daily ritual.",
      name: "Saunas & Cold Plunges",
    },
    it: {
      title: "Saune private e vasche fredde | Casa Lithic®",
      description: "Spazi benessere privati che riuniscono sauna in legno e vasca fredda in un ambiente architettonico rigenerante per il rituale quotidiano.",
      name: "Saune e vasche fredde",
    },
  },
  "/collections/indoor-furniture": {
    type: "CollectionPage",
    image: indoorImage,
    en: {
      title: "Luxury Indoor Furniture | Casa Lithic®",
      description: "Distinctive furniture for living, dining and bedrooms, balancing sculptural form, tailored comfort and refined natural materials.",
      name: "Indoor Furniture",
    },
    it: {
      title: "Arredi di lusso per interni | Casa Lithic®",
      description: "Arredi distintivi per living, pranzo e camere, dove forma scultorea, comfort su misura e materiali naturali raffinati trovano equilibrio.",
      name: "Arredi per interni",
    },
  },
  "/collections/outdoor-furniture": {
    type: "CollectionPage",
    image: outdoorImage,
    en: {
      title: "Luxury Outdoor Furniture | Casa Lithic®",
      description: "Refined furniture for terraces, gardens and poolside living, composed for exceptional comfort, lasting performance and the surrounding view.",
      name: "Outdoor Furniture",
    },
    it: {
      title: "Arredi di lusso per esterni | Casa Lithic®",
      description: "Arredi raffinati per terrazze, giardini e bordo piscina, composti per comfort eccezionale, prestazioni durature e dialogo con il paesaggio.",
      name: "Arredi per esterni",
    },
  },
  "/collections/saloon-furniture": {
    type: "CollectionPage",
    image: saloonImage,
    en: {
      title: "Luxury Saloon Furniture | Casa Lithic®",
      description: "Professional reception, styling and treatment furniture that combines client comfort, specialist performance and a distinctive identity.",
      name: "Saloon Furniture",
    },
    it: {
      title: "Arredi di lusso per saloni | Casa Lithic®",
      description: "Arredi professionali per reception, styling e trattamento che uniscono comfort del cliente, prestazioni specialistiche e identità distintiva.",
      name: "Arredi per saloni",
    },
  },
  "/collections/office-furniture": {
    type: "CollectionPage",
    image: officeImage,
    en: {
      title: "Luxury Executive Office Furniture | Casa Lithic®",
      description: "Distinguished furniture for private offices, boardrooms and workplaces, integrating ergonomic comfort, technology and refined materials.",
      name: "Office Furniture",
    },
    it: {
      title: "Arredi direzionali di lusso per ufficio | Casa Lithic®",
      description: "Arredi distintivi per uffici privati e sale riunioni, con comfort ergonomico, tecnologia integrata e materiali raffinati.",
      name: "Arredi per ufficio",
    },
  },
  "/collections/cinema-furniture": {
    type: "CollectionPage",
    image: cinemaImage,
    en: {
      title: "Bespoke Private Cinema Furniture | Casa Lithic®",
      description: "Tailored cinema recliners and lounge seating designed around sightlines, deep comfort, discreet technology and uninterrupted private viewing.",
      name: "Cinema Furniture",
    },
    it: {
      title: "Arredi su misura per cinema privato | Casa Lithic®",
      description: "Poltrone reclinabili e sedute lounge su misura, progettate intorno a visuali, comfort profondo, tecnologia discreta e visione privata.",
      name: "Arredi per cinema",
    },
  },
};

export function normalizeSeoPath(pathname) {
  const withoutLanguage = pathname === "/en" ? "/" : pathname.replace(/^\/en(?=\/)/, "");
  return withoutLanguage.replace(/\/$/, "") || "/";
}

export function getSeoPage(pathname, language) {
  const requestedRoute = normalizeSeoPath(pathname);
  const route = pages[requestedRoute] ? requestedRoute : "/";
  const page = pages[route];
  return {
    ...page,
    ...page[language],
    route,
  };
}

export const seoRoutes = Object.keys(pages);
