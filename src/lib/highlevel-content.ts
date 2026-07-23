/**
 * Copy for the /highlevel-operations landing page.
 *
 * This is the LIV8 AI conversion surface for HighLevel agency owners — a
 * focused, direct-response page that sells Fractional HighLevel Operations.
 * Edit copy here without touching components.
 *
 * Positioning rules (do not break when editing):
 *   - Category = "Fractional HighLevel Operations" (NOT "AI agency")
 *   - Sell a painful, measurable outcome — a repaired, documented, launch-ready
 *     HighLevel agency — not "AI possibilities"
 *   - Senior-level, implementation-first. We go INTO the account and build.
 *   - Independent. Never claim affiliation with or endorsement by HighLevel.
 *   - No revenue/lead guarantees. Only the Launch-Ready (scope) guarantee.
 */

export const HL_META = {
  brand: "LIV8 AI",
  category: "Fractional HighLevel Operations",
  tagline: "The HighLevel Operations Partner For Agencies Tired Of Doing Everything Themselves",
};

export const HL_NAV_LINKS = [
  { href: "#rescue-sprint", label: "Rescue Sprint" },
  { href: "#why", label: "Why LIV8" },
  { href: "#ops-desk", label: "Ops Desk" },
  { href: "#proof", label: "Proof" },
  { href: "#faq", label: "FAQ" },
];

export const HL_HERO = {
  eyebrow: "Fractional HighLevel Operations",
  headline:
    "Stop Being The Salesperson, Onboarding Team, Tech Support, And HighLevel Expert All At Once.",
  subheadline:
    "LIV8 AI is the fractional HighLevel operations partner for growing agencies. We go inside your account and repair, organize, and operate your HighLevel systems — so you can get back to acquiring clients and growing the agency.",
  primaryCta: "Book My HighLevel Operations Audit",
  secondaryCta: "See The Rescue Sprint",
  trustLine:
    "Built for agencies with 3–30 active clients. Senior-level attention — not a low-cost general VA.",
};

export const HL_PAIN = {
  eyebrow: "The Real Problem",
  headline: "You Bought HighLevel To Simplify Your Agency.",
  subhead: "Instead, it quietly became another full-time job. Right now you are probably:",
  items: [
    "Fixing broken workflows at night instead of sleeping.",
    "Repeating the same onboarding call for every new client.",
    "Answering the same basic platform questions all day.",
    "Digging through settings every time something silently breaks.",
    "Juggling calendars, pipelines, domains, email, phone numbers, forms, funnels, permissions, and integrations.",
    "Delaying new client launches because the system isn't ready.",
  ],
  closer:
    "HighLevel is powerful. But without a clear operating system underneath it, that power turns into overhead — and the overhead lands on you.",
};

export const HL_RESCUE = {
  eyebrow: "The Irresistible Entry Offer",
  name: "The HighLevel Rescue Sprint",
  promise:
    "In seven business days, we audit, repair, and organize the most important parts of your HighLevel agency — so you can onboard and serve clients with confidence, without living inside the platform.",
  priceLabel: "Founding-Client Investment",
  price: "$1,500",
  priceNote: "Or two payments of $850. Later price: $2,500–$3,500.",
  includesTitle: "Your Rescue Sprint Includes",
  includes: [
    "Complete agency-account audit.",
    "Full review of funnels, workflows, pipelines, calendars, forms, domains, email, phone, permissions, and integrations.",
    "Identification of broken, redundant, or risky automations.",
    "Repair of up to three priority systems.",
    "One standardized client-onboarding workflow.",
    "One client-onboarding checklist.",
    "One pipeline & opportunity-management structure.",
    "One booking & follow-up system.",
    "A2P readiness review (registration approval not guaranteed).",
    "Recorded walkthrough of your improved system.",
    "A written “what to fix next” roadmap.",
    "14 days of post-delivery implementation support.",
  ],
  guaranteeLabel: "The Launch-Ready Guarantee",
  guarantee:
    "We keep working on the agreed deliverables until the systems in your project scope are operational and documented. No revenue promises — just systems that actually work.",
  cta: "Apply For A Rescue Sprint",
  spotsNote: "Founding pricing is limited to the first five agencies.",
};

export type OpsPlan = {
  name: string;
  price: string;
  cadence: string;
  best: string;
  featured?: boolean;
  features: string[];
};

export const HL_OPS_DESK = {
  eyebrow: "After The Sprint",
  headline: "LIV8 Ops Desk — Ongoing HighLevel Operations, On Retainer.",
  subhead:
    "Experienced HighLevel operations support without the cost or overhead of a full-time hire. Every plan runs on a clear request system with real boundaries — no vague “unlimited” promises we can’t keep.",
  plans: [
    {
      name: "Essential",
      price: "$497",
      cadence: "/ month",
      best: "For smaller agencies that need reliable technical backup.",
      features: [
        "Up to 5 agency-level requests / month",
        "Workflow & funnel troubleshooting",
        "One monthly strategy / operations call",
        "Loom explanations for every change",
        "48-business-hour response target",
        "Minor configuration changes",
        "Agency-team support (not direct client support)",
      ],
    },
    {
      name: "Growth",
      price: "$997",
      cadence: "/ month",
      best: "The core plan for agencies actively onboarding clients.",
      featured: true,
      features: [
        "Up to 12 operations requests / month",
        "Up to 2 new sub-account onboardings / month",
        "Workflow, calendar, pipeline, form, funnel & integration work",
        "One priority system build / month",
        "Weekly operations call",
        "24-business-hour response target",
        "Private Slack / dedicated support channel",
        "Client-facing calls available when scheduled",
      ],
    },
    {
      name: "Embedded",
      price: "$1,997",
      cadence: "/ month",
      best: "A fractional operations manager inside your agency. Limited to 3–4 agencies.",
      features: [
        "Fractional HighLevel operations manager",
        "Up to 4 sub-account onboardings / month",
        "Agency + scheduled client-facing support",
        "Weekly implementation work",
        "SOP & training-library development",
        "Priority troubleshooting",
        "Two operations calls / week",
        "Quarterly system-architecture review",
      ],
    },
  ] as OpsPlan[],
  footnote:
    "Most agencies start with a Rescue Sprint, then move onto the plan that matches how fast they’re onboarding.",
};

export type WhyItem = { glyph: string; title: string; body: string };

export const HL_WHY = {
  eyebrow: "Why LIV8 AI",
  headline: "The Bridge Between A Random VA And A Giant White-Label Support Company.",
  subhead:
    "The big white-label shops win on scale and volume. We win on senior-level attention and implementation — someone who understands both the technology and the business behind it.",
  items: [
    {
      glyph: "◆",
      title: "Implementation, Not Instructions",
      body: "We don’t send you another help article or tell you which button to click. We go inside the account, build or repair the system, and document it.",
    },
    {
      glyph: "◉",
      title: "Senior-Level Attention",
      body: "You’re not immediately handed off to a low-cost general VA. You work with an experienced HighLevel operator who has seen the patterns that quietly derail agencies.",
    },
    {
      glyph: "△",
      title: "One Partner Across Your System",
      body: "Instead of juggling separate funnel builders, automation specialists, support VAs, and AI consultants, you get one operations partner who understands how the pieces connect.",
    },
    {
      glyph: "◈",
      title: "Systems Your Team Can Actually Use",
      body: "Every major build is organized and documented, so your agency never stays dependent on a single person — including us.",
    },
    {
      glyph: "✦",
      title: "AI On Top Of HighLevel",
      body: "Conversation AI, Voice AI, knowledge bases, lead qualification, appointment booking, automated follow-up, and client-onboarding automation — installed properly, not just switched on.",
    },
    {
      glyph: "◐",
      title: "Boundaries That Protect Delivery",
      body: "Clear request systems and defined scope mean we actually deliver what we promise — instead of over-promising “unlimited” and burning out.",
    },
  ] as WhyItem[],
};

export type ShiftRow = { before: string; after: string };

export const HL_SHIFT: ShiftRow[] = [
  { before: "You are the bottleneck for every fix", after: "The system runs whether or not you touch it" },
  { before: "Every new client is an operational emergency", after: "One standardized onboarding handles them all" },
  { before: "Workflows break silently in the background", after: "Automations are audited, repaired, and documented" },
  { before: "Knowledge lives in your head", after: "SOPs and Looms your whole team can follow" },
  { before: "You explain the same thing every week", after: "A knowledge base and AI answer it for you" },
  { before: "Launches get delayed because the system isn’t ready", after: "Accounts are launch-ready before the client arrives" },
];

export const HL_PROOF = {
  eyebrow: "What Agencies Get",
  headline: "Deep HighLevel Knowledge, Communicated Clearly, Implemented End-To-End.",
  subhead:
    "The work is built to solve the problems agency owners get stuck on — not just answer a ticket and move on.",
  categories: [
    { title: "Technical Problem-Solving", body: "Diagnosing the real cause behind a “broken” workflow — not just the surface symptom." },
    { title: "Platform Depth", body: "Funnels, workflows, pipelines, calendars, A2P, domains, email, phone, permissions, and integrations." },
    { title: "Clear Communication", body: "Plain-language explanations and recorded walkthroughs, so your team understands what changed and why." },
    { title: "Beyond The Ticket", body: "Connecting the fix back to the outcome the agency is actually trying to reach." },
    { title: "Automation & AI Insight", body: "Knowing which automations to build, which to kill, and where AI genuinely helps." },
    { title: "Speed & Follow-Through", body: "Defined response targets and a request system that keeps work moving." },
  ],
  // ────────────────────────────────────────────────────────────────────────
  // TESTIMONIALS: intentionally empty. Do NOT fabricate reviews here.
  // Drop in real, permission-obtained testimonials once you have written
  // consent to use each person's words / name / company. Anonymized is fine
  // (e.g. "Agency owner, 20+ client accounts") until you have that consent.
  // ────────────────────────────────────────────────────────────────────────
  testimonials: [] as { quote: string; attribution: string }[],
  testimonialPlaceholder:
    "Founding-client testimonials are being added as the first Rescue Sprints complete.",
};

export const HL_PULL_QUOTE = {
  body: "Most agency owners aren’t stuck because HighLevel lacks features. They’re stuck because they have too many features, too many disconnected systems, and no operating structure connecting them.",
  attribution: "Jamaur Johnson, LIV8 AI",
};

export const HL_FAQ = [
  {
    q: "Do you actually go into my account, or just advise?",
    a: "We go in. With your permission and access, we build and repair the systems directly — then document everything so your team isn’t dependent on us forever.",
  },
  {
    q: "Is LIV8 AI affiliated with HighLevel?",
    a: "No. LIV8 AI is an independent company and is not affiliated with, sponsored by, or endorsed by HighLevel. We’re an independent operations partner for agencies building on the platform.",
  },
  {
    q: "Can you guarantee more leads or revenue?",
    a: "No — and you should be careful with anyone who does. We guarantee the work: we keep going until the systems in your agreed scope are operational and documented.",
  },
  {
    q: "What size agency is this for?",
    a: "Agencies with roughly 3–30 active clients — already making money, but hitting onboarding and fulfillment friction, and not yet ready to hire a full-time HighLevel admin.",
  },
  {
    q: "Will you support my clients directly?",
    a: "Primarily we support your agency team. Scheduled client-facing calls are available on the Growth and Embedded plans when it makes sense.",
  },
  {
    q: "What about A2P / 10DLC?",
    a: "The Rescue Sprint includes an A2P readiness review — we make sure your setup is correct and submission-ready. We can’t guarantee carrier approval, since that’s decided by the carriers.",
  },
];

export const HL_FINAL_CTA = {
  eyebrow: "Your Next Step",
  headline: "Book Your HighLevel Operations Audit.",
  subhead:
    "On the call we’ll identify what’s broken or slowing you down, what to repair first, whether a Rescue Sprint fits, and what ongoing support would look like after. No exaggerated promises — just practical HighLevel systems built around how your agency actually operates.",
  points: [
    "What’s currently broken or slowing you down",
    "Which problems to repair first",
    "Whether the Rescue Sprint is right for your agency",
    "What ongoing support looks like after implementation",
  ],
  cta: "Book My Operations Audit",
};

export const HL_AUDIT_FORM = {
  eyebrow: "Free HighLevel Operations Audit",
  headline: "Tell us where your HighLevel is leaking time.",
  body: "Share a few details about your agency and the systems that keep breaking. We review it personally and reach back out within one business day.",
  cta: "Request My Audit",
  disclaimer:
    "Your information is reviewed by Jamaur’s team only. LIV8 AI is independent and not affiliated with or endorsed by HighLevel.",
  clientsPrompt: "Active client sub-accounts",
  clientsOptions: ["1–5", "6–15", "16–30", "30+"],
  bottleneckPrompt: "What feels hardest to manage right now?",
  bottleneckPlaceholder:
    "e.g. onboarding takes forever, workflows keep breaking, A2P is a mess, nobody on the team knows how the account is set up…",
};

export const HL_FOOTER = {
  brand: "LIV8 AI",
  blurb:
    "Fractional HighLevel operations for growing agencies. We repair, organize, and operate your HighLevel systems so you can focus on acquiring clients and growing the agency.",
  nav: HL_NAV_LINKS,
  socials: [
    { label: "YouTube", href: "https://youtube.com/@suessvilliano" },
    { label: "Instagram", href: "https://instagram.com/jamaurjohnson" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jamaurjohnson" },
  ],
  legal: [
    { href: "/", label: "Main Site" },
    { href: "mailto:contact@liv8.co", label: "Contact" },
  ],
  disclaimer:
    "LIV8 AI is an independent company and is not affiliated with, sponsored by, or endorsed by HighLevel or its affiliates. HighLevel is a trademark of its respective owner. Services are provided on a defined-scope basis; results vary by agency.",
};
