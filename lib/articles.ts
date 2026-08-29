export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  date: string;
  updated?: string;
  readMins: number;
  verdictScore?: number;
  status: "published" | "coming-soon";
};

// Editorial framing note: Flossatech does not claim an in-house physical
// test lab. Flossa's angle is data literacy — real manufacturer datasheets,
// regulatory filings, retailer pricing, and the published methodology of
// outlets that do bench-test hardware, explained so a normal buyer can
// use it. Every figure in an article must be a real, sourced number.
export const articles: Article[] = [
  {
    slug: "best-budget-smartphones-under-200",
    title: "The Best Budget Smartphones Under $200 in 2026",
    dek: "A spec-for-spec, price-for-price breakdown of the sub-$200 Android field — and which corners each model actually cuts.",
    category: "Smartphones",
    date: "2026-08-10",
    readMins: 19,
    verdictScore: 84,
    status: "published",
  },
  {
    slug: "power-bank-real-capacity-test",
    title: "Power Bank mAh Ratings, Explained: Why You Never Get the Number on the Box",
    dek: "The physics of USB power delivery means advertised capacity and usable capacity are never the same number. Here's the real math.",
    category: "Accessories",
    date: "2026-08-14",
    readMins: 16,
    verdictScore: 79,
    status: "published",
  },
  {
    slug: "robot-vacuum-buying-guide",
    title: "Robot Vacuums in 2026: What the Spec Sheet Doesn't Tell You",
    dek: "Suction-power ratings (Pa) aren't standardized across brands. A breakdown of what actually predicts real cleaning performance.",
    category: "Smart Home",
    date: "2026-08-18",
    readMins: 21,
    verdictScore: 81,
    status: "published",
  },
  {
    slug: "true-wireless-earbuds-battery-life",
    title: "True Wireless Earbuds: How Battery-Life Numbers on the Box Are Measured (and Where They Mislead)",
    dek: "Every brand tests battery life differently. A look at the standards, the fine print, and how to compare across brands fairly.",
    category: "Audio",
    date: "2026-08-21",
    readMins: 18,
    verdictScore: 77,
    status: "published",
  },
  {
    slug: "best-laptops-for-students-2026",
    title: "The Best Laptops for Students in 2026",
    dek: "Benchmark scores and battery-life claims compared against real specs and pricing, for machines that actually fit a student budget.",
    category: "Laptops",
    date: "2026-08-25",
    readMins: 22,
    verdictScore: 85,
    status: "published",
  },
  { slug: "smartwatch-battery-vs-features", title: "Smartwatches: What Turning On Each Feature Actually Costs in Battery Life", dek: "", category: "Wearables", date: "2026-09-01", readMins: 20, status: "coming-soon" },
  { slug: "budget-vs-flagship-camera-phone", title: "Budget Phone Cameras vs. Flagships: What the Sensor Specs Actually Explain", dek: "", category: "Smartphones", date: "2026-09-05", readMins: 20, status: "coming-soon" },
  { slug: "mesh-wifi-router-real-world-test", title: "Mesh Wi-Fi Routers: Lab-Rated Speeds vs. What Your Walls Do to Them", dek: "", category: "Networking", date: "2026-09-08", readMins: 18, status: "coming-soon" },
  { slug: "e-reader-comparison-2026", title: "E-Readers Compared: Screen Tech, Storage, and Ecosystem Lock-In", dek: "", category: "Gadgets", date: "2026-09-11", readMins: 17, status: "coming-soon" },
  { slug: "portable-bluetooth-speaker-durability", title: "Bluetooth Speaker IP Ratings, Explained: What IP67 Actually Promises You", dek: "", category: "Audio", date: "2026-09-14", readMins: 16, status: "coming-soon" },
  { slug: "action-camera-stabilization-test", title: "Action Camera Stabilization: Optical vs. Digital, and Why the Spec Sheet Hides the Difference", dek: "", category: "Cameras", date: "2026-09-17", readMins: 18, status: "coming-soon" },
  { slug: "gaming-monitor-response-time-myths", title: "Gaming Monitor Response Times: What the Number on the Box Actually Means", dek: "", category: "Displays", date: "2026-09-20", readMins: 19, status: "coming-soon" },
  { slug: "solar-charger-output-test", title: "Solar Phone Chargers: The Panel-Wattage Math Behind the Marketing Photos", dek: "", category: "Accessories", date: "2026-09-23", readMins: 15, status: "coming-soon" },
  { slug: "budget-tablet-vs-ipad", title: "Budget Android Tablets vs. the Cheapest iPad: Where the Price Gap Actually Comes From", dek: "", category: "Tablets", date: "2026-09-26", readMins: 18, status: "coming-soon" },
  { slug: "smart-plug-energy-monitoring-accuracy", title: "Smart Plugs and Energy Monitoring: How the Math Behind the App Actually Works", dek: "", category: "Smart Home", date: "2026-09-29", readMins: 15, status: "coming-soon" },
  { slug: "car-dash-cam-night-footage-test", title: "Dash Cam Night Footage: Sensor Size and Aperture, Not Megapixels, Explain the Difference", dek: "", category: "Automotive Tech", date: "2026-10-02", readMins: 16, status: "coming-soon" },
  { slug: "wireless-charger-speed-heat-test", title: "Wireless Chargers: The Qi Standard, Wattage Classes, and Why Heat Slows Them Down", dek: "", category: "Accessories", date: "2026-10-05", readMins: 15, status: "coming-soon" },
  { slug: "budget-noise-cancelling-headphones", title: "Budget Noise-Cancelling Headphones: How Close Can Cheap ANC Get to Flagship Silence?", dek: "", category: "Audio", date: "2026-10-08", readMins: 18, status: "coming-soon" },
  { slug: "fitness-tracker-heart-rate-accuracy", title: "Fitness Tracker Heart-Rate Sensors: Why Wrist-Based PPG Struggles, By Design", dek: "", category: "Wearables", date: "2026-10-11", readMins: 17, status: "coming-soon" },
  { slug: "external-ssd-real-transfer-speeds", title: "Portable SSDs: Advertised Speeds vs. the Interface Bottleneck That Caps Them", dek: "", category: "Storage", date: "2026-10-14", readMins: 17, status: "coming-soon" },
];

export const publishedArticles = articles.filter((a) => a.status === "published");
