export type Dish = {
  name: string;
  description: string;
  price: string;
  tag?: string;
  image?: string;
  dietary?: string[];
};

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  items: Dish[];
};

export const SIGNATURES: Dish[] = [
  {
    name: "Ricotta Hotcakes",
    description:
      "Fluffy ricotta hotcakes with raspberry compote and house lemon curd.",
    price: "$22",
    image: "/images/hotcakes.jpg",
    tag: "Signature",
  },
  {
    name: "Mushrooms & White Bean",
    description:
      "Sautéed mushrooms, white bean purée, seasonal greens, salsa verde on Rustica sourdough.",
    price: "$21",
    image: "/images/mushrooms.jpg",
    dietary: ["v"],
  },
  {
    name: "Poached Eggs & Labneh",
    description:
      "Poached eggs on Rustica sourdough with labneh, crispy chilli oil, pickle and fresh herbs.",
    price: "$19",
    image: "/images/poached-eggs.jpg",
  },
  {
    name: "Smash Avo",
    description:
      "Smashed avocado, poached egg, sriracha feta whip, radish and fresh herbs.",
    price: "$20",
    image: "/images/avo-toast.jpg",
  },
  {
    name: "Sicilian Eggplant",
    description:
      "Baked crumbed eggplant in tomato sugo with walnut pesto. A nod to nonna.",
    price: "$18",
    image: "/images/eggplant.jpg",
    dietary: ["v"],
  },
  {
    name: "The Tesorina Board",
    description:
      "Prosciutto, house relish, braised peach, boiled egg, pickle, tomato and sourdough. Made to share.",
    price: "$28",
    image: "/images/tesorina-board.jpg",
    tag: "Signature",
  },
];

export const MENU: MenuSection[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    note: "Served from open until 11:30am.",
    items: [
      SIGNATURES[0],
      SIGNATURES[2],
      SIGNATURES[3],
      {
        name: "Toasted Muesli",
        description:
          "House-toasted muesli with seasonal fruit, natural yoghurt and honey.",
        price: "$16",
        dietary: ["v"],
      },
    ],
  },
  {
    id: "all-day",
    title: "All Day",
    items: [
      SIGNATURES[1],
      SIGNATURES[4],
      {
        name: "Soup of the Day",
        description:
          "Rotating with the seasons. Ask the counter, comes with sourdough.",
        price: "$15",
      },
      {
        name: "Friday Lasagne",
        description:
          "House-made lasagne with béchamel and slow-cooked sugo. Fridays only, until it's gone.",
        price: "$22",
        tag: "Fridays",
      },
    ],
  },
  {
    id: "boards",
    title: "Boards & Sandwiches",
    items: [
      SIGNATURES[5],
      {
        name: "Poached Chicken Sandwich",
        description:
          "Poached chicken with capers, cornichons, parsley, lettuce and aioli on seeded sourdough.",
        price: "$16",
      },
      {
        name: "Daily Toastie",
        description:
          "Changes with the week. Ask what's melting today.",
        price: "$14",
      },
      {
        name: "Counter Roll",
        description:
          "Fresh rolls made daily. Fillings on the board.",
        price: "$12",
      },
    ],
  },
  {
    id: "drinks",
    title: "Coffee & Drinks",
    note: "Beans by Rumble Coffee Roasters, Kensington. House blend: Shadow Boxer — dark chocolate, raspberry, toffee.",
    items: [
      {
        name: "Espresso / Long Black / Macchiato",
        description: "Shadow Boxer house blend, or ask for today's single origin.",
        price: "$4.5",
      },
      {
        name: "Flat White / Latte / Cappuccino",
        description: "Full milk, skim, oat, almond, soy or lactose-free.",
        price: "$5",
      },
      {
        name: "Batch Filter",
        description: "Rotating single origin, brewed all morning.",
        price: "$5",
      },
      {
        name: "Hot Chocolate",
        description: "Rich, not too sweet.",
        price: "$5.5",
      },
      {
        name: "Fresh Juice / Smoothie",
        description: "Made to order with what's in season.",
        price: "$9",
      },
      {
        name: "Dog Biscuit",
        description: "Home-baked. Complimentary for good dogs.",
        price: "Free",
        tag: "For the pup",
      },
    ],
  },
];
