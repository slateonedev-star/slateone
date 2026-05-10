export type Project = {
  slug: string;
  name: string;
  domain: string;
  href: string;
  tag: string;
  industry: string;
  year: string;
  city: string;
  blurb: string;
  // Visual identity
  palette: {
    bg: string; // CSS color
    surface: string;
    fg: string;
    muted: string;
    accent: string;
    accent2: string;
  };
  display: string; // font-family stack
  body: string;
  hero: {
    eyebrow: string;
    title: string;
    italic?: string;
    sub: string;
    cta: string;
  };
  services: { title: string; desc: string; price?: string }[];
  stats: { label: string; value: string }[];
  testimonial: { quote: string; author: string };
  gallery: { label: string; tone: string }[]; // visual swatch tiles
};

export const projects: Project[] = [
  {
    slug: "asphalt-workx",
    name: "Asphalt WorkX",
    domain: "asphaltworkx.ca",
    href: "https://asphaltworkx.ca",
    tag: "Trades · Redesign",
    industry: "Paving & Sealing",
    year: "2025",
    city: "Brampton, ON",
    blurb:
      "Full redesign for a GTA paving company. Service grid, before/after gallery, real reviews — built to convert callers.",
    palette: {
      bg: "#0b0b0c",
      surface: "#141416",
      fg: "#f5f3ee",
      muted: "#8a8780",
      accent: "#f5b301",
      accent2: "#ff6a00",
    },
    display: "'Instrument Serif', serif",
    body: "'Inter', sans-serif",
    hero: {
      eyebrow: "GTA · Since 2014",
      title: "Driveways done",
      italic: "right.",
      sub: "Asphalt paving, sealing & repair — same crew, ten‑year warranty, free quote in 24 hours.",
      cta: "Get a free quote",
    },
    services: [
      { title: "Asphalt Paving", desc: "New driveways, parking lots, walkways. 10-year warranty.", price: "from $2.40/sqft" },
      { title: "Sealcoating", desc: "Commercial-grade sealer. Cures in 24h, lasts 3 years.", price: "from $0.35/sqft" },
      { title: "Crack Repair", desc: "Hot-rubber injection. Stops water damage cold.", price: "from $4/lf" },
      { title: "Interlock & Stone", desc: "Patios, walkways, retaining walls. Lifetime install warranty." },
    ],
    stats: [
      { label: "Driveways paved", value: "1,400+" },
      { label: "Years in GTA", value: "11" },
      { label: "Google rating", value: "4.9★" },
    ],
    testimonial: {
      quote: "Showed up early, finished in a day, looks better than the neighbour who paid double. Done.",
      author: "Manjit S. — Mississauga",
    },
    gallery: [
      { label: "Driveway · Brampton", tone: "linear-gradient(135deg,#1a1a1c,#2b2b2e)" },
      { label: "Lot · Etobicoke", tone: "linear-gradient(135deg,#0e0e10,#1c1c1f)" },
      { label: "Sealcoat · Caledon", tone: "linear-gradient(135deg,#141414,#262626)" },
      { label: "Interlock · Vaughan", tone: "linear-gradient(135deg,#1f1f22,#0e0e10)" },
    ],
  },
  {
    slug: "onkar-home",
    name: "Onkar Home",
    domain: "onkarhome.ca",
    href: "https://onkarhome.ca",
    tag: "Renovation · Redesign",
    industry: "Home Renovation",
    year: "2025",
    city: "Brampton, ON",
    blurb:
      "Dark luxury rebuild for a renovation company. Gold accents, animated hero, service-area map.",
    palette: {
      bg: "#0e0c08",
      surface: "#1a1611",
      fg: "#f6efde",
      muted: "#9a8c70",
      accent: "#d4a857",
      accent2: "#7e5a1f",
    },
    display: "'Instrument Serif', serif",
    body: "'Inter', sans-serif",
    hero: {
      eyebrow: "Custom Home Renovation",
      title: "Live in the home you",
      italic: "dreamed of.",
      sub: "Full kitchens, baths, basements & additions across the GTA. Design + build under one roof.",
      cta: "Book a consult",
    },
    services: [
      { title: "Kitchens", desc: "Custom cabinetry, stone counters, full layout redesign." },
      { title: "Bathrooms", desc: "Spa-grade renos with heated floors and frameless glass." },
      { title: "Basements", desc: "Legal second suites, in-law setups, theatre rooms." },
      { title: "Additions", desc: "Second storeys, sunrooms, full structural builds." },
    ],
    stats: [
      { label: "Homes transformed", value: "320+" },
      { label: "Avg. project (days)", value: "42" },
      { label: "Repeat clients", value: "61%" },
    ],
    testimonial: {
      quote: "They treated our kitchen like it was their own. The detail in the trim work is unreal.",
      author: "Priya & Dev — Brampton",
    },
    gallery: [
      { label: "Kitchen · 2024", tone: "linear-gradient(135deg,#1a1611,#2a2218)" },
      { label: "Master Bath · 2025", tone: "linear-gradient(135deg,#15110a,#231b10)" },
      { label: "Basement Suite", tone: "linear-gradient(135deg,#1f1810,#100c08)" },
      { label: "Addition · 2024", tone: "linear-gradient(135deg,#1c1812,#2c2418)" },
    ],
  },
  {
    slug: "xpress-pizza",
    name: "Xpress Pizza House",
    domain: "xpresspizzahousebrampton.com",
    href: "https://xpresspizzahousebrampton.com",
    tag: "Food & Dining · New build",
    industry: "Pizza Restaurant",
    year: "2025",
    city: "Brampton, ON",
    blurb:
      "Bold restaurant site for a Brampton pizza spot. Animated hero, full menu, hours, online order links.",
    palette: {
      bg: "#fff8ef",
      surface: "#ffe9c9",
      fg: "#1a0d04",
      muted: "#7a5a3c",
      accent: "#d83a1a",
      accent2: "#ffb300",
    },
    display: "'Instrument Serif', serif",
    body: "'Inter', sans-serif",
    hero: {
      eyebrow: "Hot · Fast · Brampton",
      title: "The pizza Brampton",
      italic: "actually craves.",
      sub: "Hand-stretched dough, San Marzano sauce, real mozzarella. Out the door in 12 minutes.",
      cta: "Order online",
    },
    services: [
      { title: "Specialty Pies", desc: "16 signature pizzas. Butter chicken, tandoori, classic pepperoni.", price: "$14–$22" },
      { title: "Family Deals", desc: "2 large + wings + pop. Feeds 4 hungry humans.", price: "$32.99" },
      { title: "Wings & Sides", desc: "8 sauces, garlic bread, poutine, samosas." },
      { title: "Late Night", desc: "Open until 2am Fri & Sat. Delivery citywide." },
    ],
    stats: [
      { label: "Pies a week", value: "2,800" },
      { label: "Avg. delivery", value: "18 min" },
      { label: "Rating", value: "4.8★" },
    ],
    testimonial: {
      quote: "Best butter chicken pizza in the GTA. We order weekly. Crust is unreal.",
      author: "The Sandhu family — Brampton",
    },
    gallery: [
      { label: "Tandoori Special", tone: "linear-gradient(135deg,#d83a1a,#ffb300)" },
      { label: "Classic Pepperoni", tone: "linear-gradient(135deg,#a82010,#d83a1a)" },
      { label: "Garlic Wings", tone: "linear-gradient(135deg,#ffb300,#ffe9c9)" },
      { label: "Family Combo", tone: "linear-gradient(135deg,#7a3010,#d83a1a)" },
    ],
  },
  {
    slug: "emma-b-artistry",
    name: "Emma B Artistry",
    domain: "emmabartistry.com",
    href: "https://emmabartistry.com",
    tag: "Beauty · Redesign",
    industry: "Permanent Makeup Studio",
    year: "2024",
    city: "Caledon, ON",
    blurb:
      "Editorial rose aesthetic for a Caledon PMU studio. Full-bleed hero, six service cards with pricing, rich gallery.",
    palette: {
      bg: "#fbf3ef",
      surface: "#f3e0d6",
      fg: "#3a1f1a",
      muted: "#8a6a60",
      accent: "#c8746a",
      accent2: "#e8b8ac",
    },
    display: "'Instrument Serif', serif",
    body: "'Inter', sans-serif",
    hero: {
      eyebrow: "Caledon · By appointment",
      title: "Wake up",
      italic: "ready.",
      sub: "Permanent makeup, brows & lips by Emma — handcrafted, healed, and timeless.",
      cta: "Book a session",
    },
    services: [
      { title: "Powder Brows", desc: "Soft, shaded brows that look like makeup. Heals natural.", price: "$650" },
      { title: "Combo Brows", desc: "Hair-stroke detail layered with shading.", price: "$750" },
      { title: "Lip Blush", desc: "Subtle tint that gives lips definition + colour.", price: "$700" },
      { title: "Eyeliner", desc: "Lash enhancement to bold liner. Heals soft.", price: "$550" },
      { title: "Touch-up", desc: "6-week refinement included with all new sets." },
      { title: "Removal", desc: "Saline lightening for past PMU work.", price: "from $200" },
    ],
    stats: [
      { label: "Faces enhanced", value: "900+" },
      { label: "Years certified", value: "7" },
      { label: "Five-star reviews", value: "240" },
    ],
    testimonial: {
      quote: "I haven't picked up an eyebrow pencil in two years. Emma is an actual artist.",
      author: "Sarah L. — Bolton",
    },
    gallery: [
      { label: "Powder · before/after", tone: "linear-gradient(135deg,#f3e0d6,#c8746a)" },
      { label: "Lip Blush · day 30", tone: "linear-gradient(135deg,#e8b8ac,#c8746a)" },
      { label: "Combo · healed", tone: "linear-gradient(135deg,#fbf3ef,#e8b8ac)" },
      { label: "Studio · Caledon", tone: "linear-gradient(135deg,#c8746a,#8a4a40)" },
    ],
  },
  {
    slug: "spaw-grooming",
    name: "Spaw Grooming Salon",
    domain: "spawgrooming.com",
    href: "https://spawgrooming.com",
    tag: "Pet services · New build",
    industry: "Luxury Pet Grooming",
    year: "2024",
    city: "Mississauga, ON",
    blurb:
      "Soft sage & blush brand for a luxury grooming salon. Animated ticker, six service cards, testimonials, clean booking CTA.",
    palette: {
      bg: "#f1f3ee",
      surface: "#e2e8d8",
      fg: "#23302a",
      muted: "#6b7a6e",
      accent: "#7a9a7e",
      accent2: "#e8b8b0",
    },
    display: "'Instrument Serif', serif",
    body: "'Inter', sans-serif",
    hero: {
      eyebrow: "Mississauga · Spa for dogs",
      title: "A spa day for your",
      italic: "best friend.",
      sub: "Full-service grooming for dogs of every coat and size — gentle, unhurried, by appointment.",
      cta: "Book grooming",
    },
    services: [
      { title: "Full Groom", desc: "Bath, blow-out, haircut, nails, ears.", price: "from $75" },
      { title: "Bath & Brush", desc: "Deep clean + de-shed without the haircut.", price: "from $45" },
      { title: "Puppy First Visit", desc: "Calm, slow intro session for under-6-month pups.", price: "$55" },
      { title: "De-shedding", desc: "Specialty treatment for double coats. 70% less shedding.", price: "from $65" },
      { title: "Nail Trim", desc: "Clip + file. In and out in 10 minutes.", price: "$15" },
      { title: "Spa Add-ons", desc: "Blueberry facial, paw balm, teeth brushing." },
    ],
    stats: [
      { label: "Tails wagged", value: "5,200+" },
      { label: "Repeat clients", value: "82%" },
      { label: "Rating", value: "4.9★" },
    ],
    testimonial: {
      quote: "Buddy actually pulls me into the salon. He has never been cleaner or happier.",
      author: "Jess M. — Mississauga",
    },
    gallery: [
      { label: "Doodle · post-groom", tone: "linear-gradient(135deg,#e2e8d8,#7a9a7e)" },
      { label: "Frenchie · spa day", tone: "linear-gradient(135deg,#e8b8b0,#7a9a7e)" },
      { label: "Salon interior", tone: "linear-gradient(135deg,#f1f3ee,#e2e8d8)" },
      { label: "Husky · de-shed", tone: "linear-gradient(135deg,#7a9a7e,#23302a)" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
