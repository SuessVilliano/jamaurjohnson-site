/**
 * Editorial content for the /perspective landing page.
 *
 * This is the LIV8 Perspective brand surface — a Forbes-style business feature
 * built for paid traffic. Edit copy here without touching components.
 *
 * Voice rules (do not break when editing):
 *   - intelligent, cinematic, documentary
 *   - never salesy, never "AI guru", never "10x revenue"
 *   - lean on operational infrastructure, systems thinking, workflow architecture
 */

export const PERSPECTIVE_META = {
  brand: "LIV8 Perspective",
  tagline: "Operational Insight for Modern Operators",
  publishedDate: "May 2026",
  readingTime: "6 min read",
  byline: "By Jamaur Johnson",
  category: "Operations · Feature",
};

export const NAV_LINKS = [
  { href: "#insights", label: "Insights" },
  { href: "#operations", label: "Operations" },
  { href: "#systems", label: "Systems" },
  { href: "#leadership", label: "Leadership" },
  { href: "#growth", label: "Growth" },
  { href: "#about", label: "About" },
];

export const HERO = {
  eyebrow: "Operations · Feature",
  headline: "The Operator Quietly Rebuilding Businesses Behind The Scenes",
  subheadline:
    "How one entrepreneur is helping business owners uncover hidden inefficiencies, simplify operations, and reclaim their time.",
};

export const ARTICLE = {
  leadParagraph:
    "Most business owners don't have a marketing problem. They have an operational problem.",
  body: [
    "Talk to enough founders and a pattern surfaces. Their pipelines are full. Their teams are hired. The website looks fine. And yet the business itself feels like it's being held together by the owner's attention — phone calls that need to be returned, dashboards no one is watching, customer messages slipping into a half-dozen inboxes, decisions stuck waiting on the only person who has the whole picture in their head.",
    "From the outside it looks like growth. From the inside it feels like drag.",
    "This is the territory Jamaur Johnson has spent the last decade learning to read. A founder, AI automation architect, and trader, he approaches businesses the way an architect approaches a building — not by adding new floors, but by finding the load-bearing walls that are no longer load-bearing, the corridors that send people in circles, the rooms that exist because nobody ever questioned them.",
    "His diagnostic question is unfashionably simple. Where is time leaking? Where is information getting lost between the people who have it and the people who need it? Which of these tasks would not exist if the system were built today, from scratch?",
    "The answers, in business after business, tend to look the same. Conversations missed because the team is on three platforms instead of one. Customer requests answered slowly because the request has to travel through four hands before it reaches the one that can do anything about it. Owners pulled back into the work because there is no living record of how the work is supposed to happen.",
    "What changes after the audit isn't dramatic in the press-release sense. There is no new logo. There is no growth-hack framework. There is a quieter outcome: the business starts to operate at the level the owner has always believed it could, and the owner gets back the hours that used to disappear into keeping it upright.",
    "This is the kind of work that doesn't show up in case studies the way revenue does. But for the owners who go through it, it is the single most useful conversation they have had about their business in years.",
  ],
};

export const TRENDING_INSIGHTS = [
  {
    category: "Operations",
    title: "The Hidden Cost Of Operational Chaos",
    minutes: 5,
  },
  {
    category: "Systems",
    title: "Why Systems Beat Hustle Every Time",
    minutes: 4,
  },
  {
    category: "Growth",
    title: "Inside The Businesses Scaling Smarter",
    minutes: 7,
  },
  {
    category: "Leadership",
    title: "How Better Communication Improves Customer Experience",
    minutes: 6,
  },
  {
    category: "Insight",
    title: "When The Bottleneck Is The Owner — And What To Do About It",
    minutes: 5,
  },
];

export const AUDIT_FORM = {
  eyebrow: "Free Business Audit",
  headline: "See where your business is leaking time.",
  body: "Discover what may be slowing your business down and where operational friction could be costing you visibility, responsiveness, and revenue.",
  cta: "Request My Audit",
  disclaimer:
    "Submitted information is reviewed by Jamaur's team only. We respond within one business day.",
  hardestPrompt: "What feels hardest to manage right now?",
  hardestPlaceholder:
    "e.g. customer messages get lost across inboxes, the team isn't sure who owns what after a sale, the dashboards don't agree…",
};

export type DiscoveryItem = {
  glyph: string;
  title: string;
  body: string;
};

export const DISCOVERY: DiscoveryItem[] = [
  {
    glyph: "✦",
    title: "Missed Conversations",
    body: "Inbound messages slip across SMS, email, DMs, web chat, and voicemail — and the team can't see them in one place.",
  },
  {
    glyph: "◷",
    title: "Slow Response Times",
    body: "Leads and customers wait hours for replies that should take minutes, while attention quietly leaks elsewhere.",
  },
  {
    glyph: "▣",
    title: "Operational Bottlenecks",
    body: "Decisions stack up on one or two people because the rest of the team doesn't have the visibility to move on their own.",
  },
  {
    glyph: "↻",
    title: "Repetitive Manual Work",
    body: "Staff retype the same data into the same tools because no two systems are talking to each other.",
  },
  {
    glyph: "◐",
    title: "Lack Of Visibility",
    body: "Nobody on the team can answer simple questions about where customers, jobs, or revenue actually stand right now.",
  },
  {
    glyph: "◇",
    title: "Fragmented Systems",
    body: "CRM, calendars, billing, fulfillment, and reporting live in tools that don't share a source of truth.",
  },
  {
    glyph: "≈",
    title: "Inconsistent Communication",
    body: "Customers get different answers from different team members because nothing is templated, sequenced, or scripted.",
  },
  {
    glyph: "✕",
    title: "Overloaded Owners",
    body: "The business cannot operate for a full day without the founder personally unblocking it.",
  },
];

export type ShiftItem = {
  before: string;
  after: string;
};

export const SHIFT: ShiftItem[] = [
  {
    before: "Operations live in the owner's head",
    after: "Operations live in a system the whole team can see",
  },
  {
    before: "Customers wait for replies",
    after: "Conversations are answered in the same channel the customer used",
  },
  {
    before: "Tasks repeat across tools",
    after: "Work flows once, end-to-end, in one place",
  },
  {
    before: "Days disappear into firefighting",
    after: "Calendars protect the work that actually moves the business",
  },
  {
    before: "Team members guess at status",
    after: "Pipelines, jobs, and customers have a single source of truth",
  },
  {
    before: "Owners are the bottleneck",
    after: "Owners are the architects",
  },
  {
    before: "Growth makes the chaos worse",
    after: "Growth scales through the system, not the founder",
  },
];

export const PULL_QUOTE = {
  body: "Most owners are working harder than ever, but their businesses aren't operating better. That's where we start.",
  attribution: "Jamaur Johnson",
};

export const FINAL_CTA = {
  headline:
    "Your Business May Not Need More Hustle. It May Need Better Infrastructure.",
  subheadline:
    "Request a free business audit and uncover what may be slowing your business down behind the scenes.",
  primary: "Request My Audit",
  secondary: "Learn More",
};

export const FOOTER = {
  brand: "LIV8 Perspective",
  blurb:
    "An editorial perspective on operational infrastructure, systems thinking, and modern business architecture, published by LIV8.",
  nav: [
    { href: "#insights", label: "Insights" },
    { href: "#operations", label: "Operations" },
    { href: "#systems", label: "Systems" },
    { href: "#about", label: "About" },
    { href: "/", label: "Main Site" },
  ],
  socials: [
    { label: "YouTube", href: "https://youtube.com/@suessvilliano" },
    { label: "Instagram", href: "https://instagram.com/jamaurjohnson" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jamaurjohnson" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "mailto:contact@liv8.co", label: "Contact" },
  ],
  disclaimer:
    "This content is editorial-style branded marketing intended for informational purposes. Results vary by business.",
};
