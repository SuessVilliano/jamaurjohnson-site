export type Book = {
  title: string;
  category: string;
  description: string;
  status: "Coming Soon" | "Available Soon" | "Available";
  cover: string;
  link?: string;
};

export type Company = {
  name: string;
  category: "AI" | "Solar" | "Health" | "Finance" | "Trading" | "Music" | "Holdings" | "Brokerage";
  description: string;
  link?: string;
};

export type Site = {
  name: string;
  url: string;
  category: string;
};

export type MusicProject = {
  title: string;
  artist?: string;
  description: string;
  link?: string;
  cover?: string;
  accent: "aqua" | "violet" | "pink" | "amber";
};

export type World = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  color: string;
};

export const HERO = {
  name: "JAMAUR JOHNSON",
  subtitle: "Author. Founder. Music Creator. AI Builder. Trader. Visionary.",
  description:
    "A digital universe of books, companies, music, platforms, and ideas built to elevate people, business, creativity, and financial freedom.",
  roles: [
    "GoHighLevel Ecosystem Expert",
    "Founder",
    "Author",
    "Trader",
    "AI Automation Architect",
    "Music Creator",
    "Investor",
    "Father of 3",
  ],
};

export const TRUST_BADGES = [
  "AI Automation Architect",
  "SaaS Systems Strategist",
  "FinTech Builder",
  "Investor & Trader",
  "Music Creator",
  "Digital Infrastructure Builder",
  "Father of 3",
];

export const YOUTUBE_URL = "https://youtube.com/@suessvilliano";
export const CONTACT_EMAIL = "contact@liv8.co";

export const ABOUT = {
  headline:
    "Builder of Systems, Platforms, Media, and Modern Digital Infrastructure.",
  paragraphs: [
    "Jamaur Johnson is a GoHighLevel ecosystem expert, AI automation architect, investor, trader, author, music creator, and digital systems strategist focused on building interconnected ecosystems across business, technology, creativity, and financial infrastructure.",
    "His work spans SaaS consulting, AI automation systems, fintech, trading education, music production, media platforms, books, digital real estate, and online business architecture.",
    "As a father of three sons, Jamaur's mission extends beyond business. His work is rooted in ownership, freedom, legacy, creativity, and building systems that help people elevate their lives through technology, education, automation, and financial empowerment.",
  ],
};

export type Pillar = {
  key: "BUILD" | "TRADE" | "CREATE" | "ELEVATE";
  tagline: string;
  description: string;
  gradient: string;
  glow: string;
};

export const PILLARS: Pillar[] = [
  {
    key: "BUILD",
    tagline: "Companies & infrastructure",
    description:
      "Companies, automation systems, SaaS infrastructure, AI tools, websites, and digital real estate.",
    gradient: "from-cyan-400 to-blue-600",
    glow: "rgba(78,224,255,0.5)",
  },
  {
    key: "TRADE",
    tagline: "Markets & capital",
    description:
      "Markets, fintech, funded trader ecosystems, investing, discipline, strategy, and financial systems.",
    gradient: "from-violet-500 to-fuchsia-600",
    glow: "rgba(139,92,246,0.5)",
  },
  {
    key: "CREATE",
    tagline: "Media & ideas",
    description:
      "Books, music, storytelling, media, education, creative technology, and consciousness.",
    gradient: "from-fuchsia-500 to-pink-600",
    glow: "rgba(255,97,211,0.5)",
  },
  {
    key: "ELEVATE",
    tagline: "Family & legacy",
    description:
      "Family, ownership, freedom, legacy, empowerment, health, growth, and community.",
    gradient: "from-amber-400 to-orange-600",
    glow: "rgba(251,191,36,0.5)",
  },
];

export type Social = {
  platform: string;
  handle: string;
  url: string;
  blurb: string;
};

export const SOCIALS: Social[] = [
  {
    platform: "YouTube",
    handle: "@suessvilliano",
    url: "https://youtube.com/@suessvilliano",
    blurb: "Building in public — systems, trading, music, and the ecosystem.",
  },
  {
    platform: "Instagram",
    handle: "@jamaurjohnson",
    url: "https://instagram.com/jamaurjohnson",
    blurb: "Daily build moments, behind-the-scenes, vortex shots.",
  },
  {
    platform: "X / Twitter",
    handle: "@jamaurjohnson",
    url: "https://twitter.com/jamaurjohnson",
    blurb: "Strategy, AI, fintech, and ecosystem thinking in real time.",
  },
  {
    platform: "LinkedIn",
    handle: "Jamaur Johnson",
    url: "https://linkedin.com/in/jamaurjohnson",
    blurb: "The professional record — automation, SaaS, and digital infrastructure.",
  },
];

export type Portrait = {
  id: string;
  src: string;
  alt: string;
  gradient: string;
  caption: string;
  scene: string;
};

export const PORTRAITS: Portrait[] = [
  {
    id: "cyber",
    src: "/photos/portrait-press.jpg",
    alt: "Jamaur Johnson — press portrait",
    gradient: "from-cyan-500 via-blue-700 to-violet-900",
    caption: "The Command Center",
    scene: "Where systems, markets, and AI converge.",
  },
  {
    id: "street",
    src: "/photos/portrait-street.jpg",
    alt: "Jamaur Johnson — street portrait",
    gradient: "from-indigo-500 via-blue-800 to-slate-900",
    caption: "Always In Motion",
    scene: "A modern digital nomad and ecosystem builder.",
  },
  {
    id: "neon",
    src: "/photos/portrait-neon.jpg",
    alt: "Jamaur Johnson — neon portrait",
    gradient: "from-fuchsia-600 via-violet-700 to-blue-800",
    caption: "Inside The Vortex",
    scene: "Creating in the space between worlds.",
  },
  {
    id: "noir",
    src: "/photos/portrait-bw.jpg",
    alt: "Jamaur Johnson — black & white portrait",
    gradient: "from-slate-700 via-slate-900 to-black",
    caption: "Clarity in Stillness",
    scene: "The author. The strategist. The father.",
  },
];

export const portraitById = (id: string): Portrait =>
  PORTRAITS.find((p) => p.id === id) ?? PORTRAITS[0];

export const WORLDS: World[] = [
  {
    id: "books",
    name: "Books World",
    tagline: "Words that rewire the mind",
    description:
      "A library of philosophy, strategy, and inner work — engineered to upgrade how you think, trade, and live.",
    href: "#books",
    color: "from-cyan-400/30 via-cyan-300/10 to-transparent",
  },
  {
    id: "companies",
    name: "Companies World",
    tagline: "Ecosystems of real-world ownership",
    description:
      "An interconnected portfolio of AI, finance, health, solar, and trading ventures designed to compound.",
    href: "#companies",
    color: "from-violet-500/30 via-violet-400/10 to-transparent",
  },
  {
    id: "sites",
    name: "Digital Real Estate",
    tagline: "Domains as long-term assets",
    description:
      "Web properties operated like buildings on a digital street — each with its own purpose, audience, and product.",
    href: "#sites",
    color: "from-fuchsia-500/30 via-fuchsia-400/10 to-transparent",
  },
  {
    id: "music",
    name: "Music World",
    tagline: "Frequencies that move energy",
    description:
      "From healing frequencies to high-energy anthems — sound engineered for focus, performance, and elevation.",
    href: "#music",
    color: "from-emerald-400/30 via-emerald-300/10 to-transparent",
  },
  {
    id: "vision",
    name: "Vision / Future",
    tagline: "Building tomorrow on purpose",
    description:
      "A long-range mission to architect systems, communities, and infrastructure that put ownership back in the hands of creators.",
    href: "#vision",
    color: "from-amber-400/30 via-amber-300/10 to-transparent",
  },
];

export const BOOKS: Book[] = [
  {
    title: "The Last Verifiable Year",
    category: "Philosophy / Future",
    description:
      "A reckoning with the year reality became negotiable — and what comes after.",
    status: "Coming Soon",
    cover: "/photos/books/cover-the-last-verifiable-year.jpg",
  },
  {
    title: "Synchronicity",
    category: "Inner Work",
    description:
      "Reading the signal in the noise. A guide to aligning with the patterns life is already showing you.",
    status: "Coming Soon",
    cover: "/photos/books/cover-synchronicity.jpg",
  },
  {
    title: "Awakening to Source",
    category: "Consciousness",
    description:
      "Remembering what you already are. A field manual for the inward path.",
    status: "Coming Soon",
    cover: "/photos/books/cover-awakening-to-source.jpg",
  },
  {
    title: "The Space In Between",
    category: "Reflection",
    description:
      "Notes from the threshold — between identities, eras, and selves.",
    status: "Coming Soon",
    cover: "/photos/books/cover-the-space-in-between.jpg",
  },
  {
    title: "Atomic Habits for Traders",
    category: "Trading / Performance",
    description:
      "The compounding edge: small systems, repeated, that build a trader who can't be shaken.",
    status: "Coming Soon",
    cover: "/photos/books/cover-atomic-habits.jpg",
  },
  {
    title: "Trading In The Vortex",
    category: "Trading / Mindset",
    description:
      "Operating from alignment instead of fear. A philosophy and playbook for the modern trader.",
    status: "Coming Soon",
    cover: "/photos/books/cover-trading-in-the-vortex.jpg",
  },
  {
    title: "Trade Hybrid",
    category: "Trading / Systems",
    description:
      "The hybrid trader's manual — strategy, technology, psychology, and community as one engine.",
    status: "Coming Soon",
    cover: "/photos/books/cover-trade-hybrid.jpg",
  },
];

export const COMPANIES: Company[] = [
  {
    name: "LIV8",
    category: "Holdings",
    description: "The parent ecosystem — a holding company for ventures that elevate how people live.",
    link: "https://liv8.co",
  },
  {
    name: "LIV8Ai",
    category: "AI",
    description: "AI agents, automations, and operating systems for founders and creators.",
    link: "https://liv8ai.com",
  },
  {
    name: "LIV8 Solar",
    category: "Solar",
    description: "Clean energy and solar deployment — ownership of the grid, one roof at a time.",
    link: "https://liv8solar.com",
  },
  {
    name: "LIV8 Health",
    category: "Health",
    description: "Tools, products, and protocols built around longevity, performance, and recovery.",
    link: "https://liv8health.com",
  },
  {
    name: "Smart Life Brokers",
    category: "Brokerage",
    description: "Life insurance and protection planning, modernized for the next generation.",
    link: "https://smartlifebrokers.com",
  },
  {
    name: "Hybrid Holdings",
    category: "Holdings",
    description: "The umbrella for the Hybrid family of trading, funding, and education brands.",
  },
  {
    name: "Hybrid Funding",
    category: "Finance",
    description: "Funded-trader programs and prop firm infrastructure for serious operators.",
    link: "https://hybridfunding.co",
  },
  {
    name: "Trade Hybrid",
    category: "Trading",
    description: "Education, signals, and tooling for the modern hybrid trader.",
    link: "https://tradehybrid.co",
  },
  {
    name: "Sound Forge",
    category: "Music",
    description: "A studio brand for original music, instrumentals, and frequency-driven sound design.",
  },
];

export const SITES: Site[] = [
  { name: "LIV8.co", url: "https://liv8.co", category: "Ecosystem" },
  { name: "Liv8ai.com", url: "https://liv8ai.com", category: "AI" },
  { name: "Builtinminutes.com", url: "https://builtinminutes.com", category: "AI" },
  { name: "OS by LIV8", url: "https://os.liv8.co/", category: "Platform" },
  { name: "Liv8solar.com", url: "https://liv8solar.com", category: "Solar" },
  { name: "Liv8health.com", url: "https://liv8health.com", category: "Health" },
  { name: "Smartlifebrokers.com", url: "https://smartlifebrokers.com", category: "Brokerage" },
  { name: "Hybridjournal.co", url: "https://hybridjournal.co", category: "Trading" },
  { name: "Hybridfunding.co", url: "https://hybridfunding.co", category: "Finance" },
  { name: "The Hybrid Zone", url: "https://thehybridzone.club/", category: "Community" },
  { name: "tradehybrid.co", url: "https://tradehybrid.co", category: "Trading" },
  { name: "Copy.tradehybrid.co", url: "https://copy.tradehybrid.co", category: "Trading" },
  { name: "Pro.tradehybrid.co", url: "https://pro.tradehybrid.co/", category: "Trading" },
  { name: "Dro.liv8.co", url: "https://dro.liv8.co/", category: "Platform" },
  { name: "Water.liv8.co", url: "https://water.liv8.co/", category: "Health" },
  { name: "Emet.liv8.co", url: "https://emet.liv8.co/", category: "AI" },
  { name: "Land.liv8.co", url: "https://land.liv8.co/", category: "Real Estate" },
  { name: "AI Sound Merge", url: "https://ai.soundmerge.co/", category: "Music" },
  { name: "Baron the Move", url: "https://baronthemove.liv8.co/", category: "Creator" },
];

export const MUSIC: MusicProject[] = [
  {
    title: "Written By Human",
    artist: "Suess Villiano",
    description: "A statement project — proof of authorship in an AI-saturated world.",
    link: "https://distrokid.com/hyperfollow/suessvilliano1/written-by-human",
    cover: "/photos/music/cover-written-by-human.jpg",
    accent: "aqua",
  },
  {
    title: "Pyscho Glow",
    artist: "Meta SV",
    description: "Glow that comes from depth. Atmospheric and unapologetic.",
    link: "https://distrokid.com/hyperfollow/metasv/pyscho-glow",
    cover: "/photos/music/cover-psycho-glow.jpg",
    accent: "violet",
  },
  {
    title: "Rise 2026",
    artist: "Meta SV",
    description: "An anthem for the next era — momentum on tape.",
    link: "https://distrokid.com/hyperfollow/metasv/rise-2026",
    cover: "/photos/music/cover-rise-2026.jpg",
    accent: "pink",
  },
  {
    title: "Healing Frequencies",
    artist: "Meta SV",
    description: "Tuned soundscapes designed for restoration, meditation, and clarity.",
    link: "https://distrokid.com/hyperfollow/suessvilliano1/healing-frequencies",
    cover: "/photos/music/cover-healing-frequencies.jpg",
    accent: "aqua",
  },
  {
    title: "Instrumentals for the Vortex",
    artist: "Meta SV",
    description: "Frequency-rich instrumentals to align focus and performance.",
    link: "https://distrokid.com/hyperfollow/suessvilliano1/instrumentals-for-the-vortex",
    cover: "/photos/music/cover-vortex.jpg",
    accent: "violet",
  },
  {
    title: "Trade Zone",
    artist: "Meta SV",
    description: "Focus music for the screens — built for the session.",
    link: "https://distrokid.com/hyperfollow/suessvilliano1/the-trade-zone",
    cover: "/photos/music/cover-trade-zone.jpg",
    accent: "amber",
  },
  {
    title: "Trade Zone 2",
    artist: "Meta SV",
    description: "The sequel — deeper, denser, sharper.",
    link: "https://distrokid.com/hyperfollow/suessvilliano1/trade-hybrid-presents-trade-zone-2",
    cover: "/photos/music/cover-trade-zone-2.jpg",
    accent: "amber",
  },
];
