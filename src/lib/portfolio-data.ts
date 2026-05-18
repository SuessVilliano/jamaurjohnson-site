export type Book = {
  title: string;
  category: string;
  description: string;
  status: "Coming Soon" | "Available Soon" | "Available";
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
};

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
  },
  {
    title: "Synchronicity",
    category: "Inner Work",
    description:
      "Reading the signal in the noise. A guide to aligning with the patterns life is already showing you.",
    status: "Coming Soon",
  },
  {
    title: "Awakening to Source",
    category: "Consciousness",
    description:
      "Remembering what you already are. A field manual for the inward path.",
    status: "Coming Soon",
  },
  {
    title: "The Space In Between",
    category: "Reflection",
    description:
      "Notes from the threshold — between identities, eras, and selves.",
    status: "Coming Soon",
  },
  {
    title: "Atomic Habits for Traders",
    category: "Trading / Performance",
    description:
      "The compounding edge: small systems, repeated, that build a trader who can't be shaken.",
    status: "Coming Soon",
  },
  {
    title: "Trading In The Vortex",
    category: "Trading / Mindset",
    description:
      "Operating from alignment instead of fear. A philosophy and playbook for the modern trader.",
    status: "Coming Soon",
  },
  {
    title: "Trade Hybrid",
    category: "Trading / Systems",
    description:
      "The hybrid trader's manual — strategy, technology, psychology, and community as one engine.",
    status: "Coming Soon",
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
    link: "http://distrokid.com/hyperfollow/suessvilliano1/written-by-human/",
    accent: "aqua",
  },
  {
    title: "Pyscho Glow",
    artist: "Meta SV",
    description: "Glow that comes from depth. Atmospheric and unapologetic.",
    link: "http://distrokid.com/hyperfollow/metasv/pyscho-glow/",
    accent: "violet",
  },
  {
    title: "Rise 2026",
    artist: "Meta SV",
    description: "An anthem for the next era — momentum on tape.",
    link: "http://distrokid.com/hyperfollow/metasv/rise-2026/",
    accent: "pink",
  },
  {
    title: "Healing Frequencies",
    description: "Tuned soundscapes designed for restoration, meditation, and clarity.",
    accent: "aqua",
  },
  {
    title: "Instrumentals for the Vortex",
    description: "Frequency-rich instrumentals to align focus and performance.",
    link: "https://music.apple.com/us/album/instrumentals-for-the-vortex/1772615359",
    accent: "violet",
  },
  {
    title: "Trade Zone",
    description: "Focus music for the screens — built for the session.",
    accent: "amber",
  },
  {
    title: "Trade Zone 2",
    description: "The sequel — deeper, denser, sharper.",
    accent: "amber",
  },
  {
    title: "Suess Villiano",
    description: "The artist project. Raw, original, layered.",
    accent: "pink",
  },
];
