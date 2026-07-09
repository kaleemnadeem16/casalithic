import indoorFurniture from "../assets/casalithic-villa/web/indoor-furniture-enhanced.jpg";
import outdoorFurniture from "../assets/casalithic-villa/web/outdoor-furniture-enhanced.jpg";
import kitchen from "../assets/casalithic-villa/web/kitchen-enhanced.jpg";
import wardrobe from "../assets/casalithic-villa/web/wardrobe-enhanced.jpg";
import vanityWallUnit from "../assets/casalithic-villa/web/vanity-wall-unit.jpg";
import solidDoors from "../assets/casalithic-villa/web/solid-doors.jpg";
import woodenFlooring from "../assets/casalithic-villa/web/wooden-flooring.jpg";
import wellness from "../assets/casalithic-villa/web/wellness-enhanced.jpg";
import salon from "../assets/casalithic-villa/web/salon.jpg";
import officeFurniture from "../assets/casalithic-villa/web/office-furniture.jpg";
import cinemaFurniture from "../assets/casalithic-villa/web/cinema-furniture.png";

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
    label: "Wood · Glass",
    text: "Private dressing spaces where every detail turns the everyday into an occasion.",
    image: wardrobe,
  },
  {
    title: "Kitchen",
    label: "Wood · Steel · Bars",
    text: "Statement kitchens where beautiful materials make daily living feel effortless.",
    image: kitchen,
  },
  {
    title: "Vanities and Wall Units",
    label: "Cabinetry",
    text: "Tailored storage and display pieces that bring elegance into perfect order.",
    image: vanityWallUnit,
  },
  {
    title: "Doors",
    label: "Four wood species",
    text: "Architectural entrances crafted to make every arrival feel considered.",
    image: solidDoors,
  },
  {
    title: "Floorings",
    label: "Eight selections",
    text: "Rich timber foundations that carry warmth and distinction through every room.",
    image: woodenFlooring,
  },
  {
    title: "Saunas and Cold Plunges",
    label: "Wellness",
    text: "Private sanctuaries designed to restore the body and quiet the mind.",
    image: wellness,
  },
  {
    title: "Indoor Furniture",
    label: "Contemporary · Modern",
    text: "Sculptural comfort for living, dining, and moments made to be savoured.",
    image: indoorFurniture,
  },
  {
    title: "Outdoor Furniture",
    label: "Modern",
    text: "Resort-level comfort created for unhurried days and elegant evenings outdoors.",
    image: outdoorFurniture,
  },
  {
    title: "Saloon Furniture",
    label: "Professional",
    text: "Polished, high-comfort pieces for beauty rituals in elevated surroundings.",
    image: salon,
  },
  {
    title: "Office Furniture",
    label: "Professional",
    text: "Executive pieces that make focus feel composed, confident, and quietly powerful.",
    image: officeFurniture,
  },
  {
    title: "Cinema Furniture",
    label: "Private Entertainment",
    text: "Deeply tailored seating that turns every screening into a first-class experience.",
    image: cinemaFurniture,
  },
];

export const directionItems = [
  {
    number: "01",
    title: "A Signature of Your Own",
    text: "Furniture, surfaces, and finishes are composed as one personal language—distinctive, harmonious, and entirely yours.",
    image: woodenFlooring,
  },
  {
    number: "02",
    title: "Effortless by Design",
    text: "Every element works intuitively with the architecture, so beauty and ease are felt in every movement through your home.",
    image: kitchen,
  },
  {
    number: "03",
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
  { title: "Private Saloon", image: salon },
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
