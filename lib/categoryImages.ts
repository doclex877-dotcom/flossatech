// Maps each article category to a representative image used on:
// - homepage cards
// - /blog listing cards
// - the banner at the top of each article (via ArticleHeader)
//
// Files are NOT included in this repo — download real photos and drop
// them at the paths below. See IMAGE-GUIDE.md in the project root for
// exact Unsplash search terms, composition notes, and licensing info
// for every file referenced here.
//
// Until a file exists at a given path, the <img> tag will 404 visually
// (a broken-image icon) rather than break the build — Next.js does not
// validate plain string image paths at build time.

export const categoryImages: Record<string, { src: string; alt: string }> = {
  Smartphones: {
    src: "/images/categories/smartphones.jpg",
    alt: "Several smartphones laid out on a desk",
  },
  Accessories: {
    src: "/images/categories/accessories.jpg",
    alt: "Phone chargers and cables coiled on a desk",
  },
  "Smart Home": {
    src: "/images/categories/smart-home.jpg",
    alt: "A robot vacuum cleaning a living room rug",
  },
  Audio: {
    src: "/images/categories/audio.jpg",
    alt: "A pair of wireless headphones resting on a desk",
  },
  Laptops: {
    src: "/images/categories/laptops.jpg",
    alt: "An open laptop on a desk with a cup of coffee nearby",
  },
  Wearables: {
    src: "/images/categories/wearables.jpg",
    alt: "A smartwatch close up on a wrist",
  },
  Networking: {
    src: "/images/categories/networking.jpg",
    alt: "A Wi-Fi router on a shelf in a home office",
  },
  Gadgets: {
    src: "/images/categories/gadgets.jpg",
    alt: "An e-reader resting on a table next to a paperback book",
  },
  Cameras: {
    src: "/images/categories/cameras.jpg",
    alt: "An action camera mounted on outdoor gear",
  },
  Displays: {
    src: "/images/categories/displays.jpg",
    alt: "A gaming monitor glowing on a desk setup",
  },
  Tablets: {
    src: "/images/categories/tablets.jpg",
    alt: "A tablet with a stylus resting on top",
  },
  "Automotive Tech": {
    src: "/images/categories/automotive-tech.jpg",
    alt: "A dash cam mounted on a car windshield",
  },
  Storage: {
    src: "/images/categories/storage.jpg",
    alt: "A portable external SSD next to a laptop",
  },
};

export function getCategoryImage(category: string) {
  return (
    categoryImages[category] ?? {
      src: "/images/categories/default.jpg",
      alt: "Gadget on a desk",
    }
  );
}
