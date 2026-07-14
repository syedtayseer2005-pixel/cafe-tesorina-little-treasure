export const SITE = {
  name: "Cafe Tesorina",
  tagline: "Little treasure of Parkville",
  address: "Corner of Morrah Street, Parkville VIC 3052, Australia",
  addressShort: "Morrah Street, Parkville VIC",
  hours: "7:45am – 3pm, seven days",
  instagram: "https://www.instagram.com/cafetesorina/",
  instagramHandle: "@cafetesorina",
  mapEmbed:
    "https://www.google.com/maps?q=Cafe%20Tesorina%20Morrah%20Street%20Parkville%20VIC&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Cafe+Tesorina+Morrah+Street+Parkville+VIC",
} as const;

export type NavLink = { label: string; to: string; hash?: string };

export const PRIMARY_NAV: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Visit", to: "/contact" },
];
