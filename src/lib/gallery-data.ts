export type GalleryItem = {
  src: string;
  alt: string;
  category: "Interior" | "Coffee" | "Food" | "Community";
  wide?: boolean;
  tall?: boolean;
};

export const GALLERY: GalleryItem[] = [
  {
    src: "/images/hero-facade.jpg",
    alt: "Cafe Tesorina's pink corner facade on Morrah Street, Parkville",
    category: "Interior",
    wide: true,
  },
  {
    src: "/images/interior-tiles.jpg",
    alt: "Bright blue subway tiles and exposed brick inside Cafe Tesorina",
    category: "Interior",
  },
  {
    src: "/images/coffee-pour.jpg",
    alt: "Espresso pouring from portafilter into a ceramic cup",
    category: "Coffee",
    tall: true,
  },
  {
    src: "/images/hotcakes.jpg",
    alt: "Ricotta hotcakes with raspberry compote and lemon curd",
    category: "Food",
  },
  {
    src: "/images/tesorina-board.jpg",
    alt: "The Tesorina Board with prosciutto, peach, boiled egg, pickles and sourdough",
    category: "Food",
    wide: true,
  },
  {
    src: "/images/poached-eggs.jpg",
    alt: "Poached eggs on sourdough with labneh, chilli oil and radish",
    category: "Food",
  },
  {
    src: "/images/mushrooms.jpg",
    alt: "Sautéed mushrooms on sourdough with white bean puree and salsa verde",
    category: "Food",
  },
  {
    src: "/images/avo-toast.jpg",
    alt: "Smashed avocado on sourdough with poached egg and sriracha feta whip",
    category: "Food",
  },
  {
    src: "/images/eggplant.jpg",
    alt: "Sicilian baked crumbed eggplant in tomato sugo with walnut pesto",
    category: "Food",
  },
  {
    src: "/images/alex-counter.jpg",
    alt: "Alex, owner of Cafe Tesorina, behind the counter in front of blue subway tiles",
    category: "Community",
    tall: true,
  },
  {
    src: "/images/dog-treats.jpg",
    alt: "Two happy dogs outside Cafe Tesorina with a bowl of home-baked treats",
    category: "Community",
  },
  {
    src: "/images/alfresco-seating.jpg",
    alt: "Alfresco street seating under market umbrellas outside Cafe Tesorina",
    category: "Interior",
    wide: true,
  },
];

export const GALLERY_CATEGORIES = ["All", "Interior", "Coffee", "Food", "Community"] as const;
