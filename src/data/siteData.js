import indoorFurniture from "../assets/casalithic-villa/web/indoor-furniture-enhanced.webp";
import outdoorFurniture from "../assets/casalithic-villa/web/outdoor-furniture-enhanced.webp";
import kitchen from "../assets/casalithic-villa/web/kitchen-enhanced.webp";
import wardrobe from "../assets/casalithic-villa/web/wardrobe-enhanced.webp";
import vanityWallUnit from "../assets/casalithic-villa/web/vanity-wall-unit.webp";
import solidDoors from "../assets/casalithic-villa/web/solid-doors.webp";
import woodenFlooring from "../assets/casalithic-villa/web/wooden-flooring.webp";
import wellness from "../assets/casalithic-villa/web/wellness-enhanced.webp";
import salon from "../assets/salon-furniture/gallery/salon-furniture-gallery-09.webp";
import officeFurniture from "../assets/office-furniture/gallery/office-furniture-gallery-09.webp";
import cinemaFurniture from "../assets/cinema-furniture/gallery/cinema-furniture-gallery-09.webp";

export const heroSlides = [
  indoorFurniture,
  outdoorFurniture,
  kitchen,
  wardrobe,
  wellness,
  woodenFlooring,
];

export const heroContent = {
  kicker: "The Art of Luxury Living",
  title: "Live beautifully. Feel exceptional.",
  body:
    "Casa Lithic® creates complete interiors for those who expect more from home—rare comfort, refined materials, and an atmosphere that feels unmistakably yours.",
};

export const collectionItems = [
  {
    title: "Wardrobes",
    label: "Fine Wood",
    text: "Private timber dressing spaces that surround the everyday with rare distinction.",
    image: wardrobe,
    href: "/collections/wardrobes",
  },
  {
    title: "Kitchens",
    label: "Wood · Steel · Bars",
    text: "Statement kitchens where beautiful materials make daily living feel effortless.",
    image: kitchen,
    href: "/collections/kitchen",
  },
  {
    title: "Vanities and Wall Units",
    label: "Cabinetry",
    text: "Tailored storage and display pieces that bring elegance into perfect order.",
    image: vanityWallUnit,
    href: "/collections/vanities-wall-units",
  },
  {
    title: "Doors",
    label: "Four wood species",
    text: "Architectural entrances crafted to make every arrival feel considered.",
    image: solidDoors,
    href: "/collections/doors",
  },
  {
    title: "Floorings",
    label: "Eight selections",
    text: "Rich timber foundations that carry warmth and distinction through every room.",
    image: woodenFlooring,
    href: "/collections/flooring",
  },
  {
    title: "Sauna & Cold Plunge",
    label: "Wellness",
    text: "Private sanctuaries designed to restore the body and settle the mind.",
    image: wellness,
    href: "/collections/sauna-cold-plunge",
  },
  {
    title: "Indoor Furniture",
    label: "Contemporary · Modern",
    text: "Sculptural comfort for living, dining, and moments made to be savoured.",
    image: indoorFurniture,
    href: "/collections/indoor-furniture",
  },
  {
    title: "Outdoor Furniture",
    label: "Modern",
    text: "Resort-level comfort created for unhurried days and elegant evenings outdoors.",
    image: outdoorFurniture,
    href: "/collections/outdoor-furniture",
  },
  {
    title: "Salon Solution",
    label: "Professional",
    text: "Polished, high-comfort pieces for beauty rituals in elevated surroundings.",
    image: salon,
    href: "/collections/salon-solution",
  },
  {
    title: "Office Solution",
    label: "Professional",
    text: "Executive pieces that make focus feel composed, confident, and assuredly powerful.",
    image: officeFurniture,
    href: "/collections/office-solution",
  },
  {
    title: "Cinema Solution",
    label: "Private Entertainment",
    text: "Deeply tailored seating that turns every screening into a first-class experience.",
    image: cinemaFurniture,
    href: "/collections/cinema-solution",
  },
];

export const directionItems = [
  {
    title: "A Signature of Your Own",
    text: "Furniture, surfaces, and finishes are composed as one personal language—distinctive, harmonious, and entirely yours.",
    image: woodenFlooring,
  },
  {
    title: "Effortless by Design",
    text: "Every element works intuitively with the architecture, so beauty and ease are felt in every movement through your home.",
    image: kitchen,
  },
  {
    title: "Everyday Indulgence",
    text: "From wellness rituals to private cinema nights, exceptional comfort becomes a natural part of how you live.",
    image: wellness,
  },
];

export const galleryImages = [
  { title: "Grand Living Room", image: indoorFurniture },
  { title: "Pool Terrace", image: outdoorFurniture },
  { title: "Sculpted Kitchen", image: kitchen },
  { title: "Private Dressing Room", image: wardrobe },
  { title: "Principal Vanity Suite", image: vanityWallUnit },
  { title: "Architectural Doors", image: solidDoors },
  { title: "Crafted Timber Floors", image: woodenFlooring },
  { title: "Private Wellness Suite", image: wellness },
  { title: "Private Salon", image: salon },
  { title: "Executive Office", image: officeFurniture },
  { title: "Private Cinema", image: cinemaFurniture },
];

export const gallerySets = [
  [galleryImages[0], galleryImages[1], galleryImages[2]],
  [galleryImages[3], galleryImages[4], galleryImages[7]],
  [galleryImages[6], galleryImages[5], galleryImages[8]],
  [galleryImages[9], galleryImages[10], galleryImages[2]],
  [galleryImages[10], galleryImages[0], galleryImages[7]],
];
