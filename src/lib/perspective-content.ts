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

export type InsightPost = {
  slug: string;
  category: string;
  title: string;
  minutes: number;
  summary: string;
  publishedDate: string;
  body: string[];
};

export const INSIGHTS_POSTS: InsightPost[] = [
  {
    slug: "the-hidden-cost-of-operational-chaos",
    category: "Operations",
    title: "The Hidden Cost Of Operational Chaos",
    minutes: 5,
    publishedDate: "May 2026",
    summary:
      "What chaos really costs a business isn't measured in hours. It's measured in the decisions that never get made and the customers who quietly stop coming back.",
    body: [
      "Most owners can list the obvious costs of a chaotic business. Late invoices. Missed appointments. The Tuesday afternoon that disappears into resending a contract that was supposed to go out on Monday. These are the kinds of losses that show up on a spreadsheet, which means they tend to get addressed first.",
      "The deeper cost is harder to see, because it doesn't bill out as a line item. It bills out as judgment.",
      "When a business operates in chaos, the team's attention is permanently occupied by the next small fire. There is no mental space left for the question that actually moves the company forward — which customers are we losing, and why; which workflows are silently doubling our cost of delivery; which decisions have been waiting on the owner for the last three weeks. The longer this pattern runs, the more the business optimizes for survival instead of compounding. People get good at putting out fires and forget how to build.",
      "There is also a customer-experience cost that almost never appears in a report. A customer who has to repeat their order, or who waits two days for an answer to a single question, or who gets a different reply from three different team members — that customer doesn't write a complaint. They just don't come back. And because they don't come back, the business loses the most valuable signal it has, which is the data trail of what the customer was actually asking for.",
      "There is a team-energy cost, too. Repetitive manual work has a quiet way of eroding morale. The best people on a team are usually the ones who can see the inefficiency most clearly, which means they are also the ones most likely to leave a chaotic environment for somewhere that respects their time. The cost of that turnover doesn't appear as chaos. It appears as a hiring problem.",
      "What changes when the chaos is taken out of the operation is rarely dramatic in the way a marketing campaign is dramatic. The team stops dropping things. The customer experience becomes consistent. Decisions get made on the day they should be made. The owner stops being the human bottleneck for the business. None of that produces a press release. All of it produces the kind of compounding outcome a business actually needs.",
      "Operational chaos isn't a personality flaw or a sign that the team isn't trying hard enough. It's the predictable byproduct of growing faster than the system was designed for. The first step out of it is to stop normalizing it — to treat it as a real cost, not a cost of doing business.",
    ],
  },
  {
    slug: "why-systems-beat-hustle-every-time",
    category: "Systems",
    title: "Why Systems Beat Hustle Every Time",
    minutes: 4,
    publishedDate: "May 2026",
    summary:
      "Hustle is a finite resource. Systems compound. Every business eventually has to choose which one it's going to bet on.",
    body: [
      "There is a moment in the life of almost every growing business where hustle stops being the answer. The owner has been the engine since day one. They've taken the calls, written the proposals, hired the team, fixed the problems. And for a long time, hustle works — until the business gets big enough that the same energy starts producing diminishing returns.",
      "The reason this transition is so hard to see is that hustle, while it lasts, looks like leadership. The owner is everywhere. They are unblocking everything. The team feels protected. From the outside it looks like a strong operator. From the inside, the owner can feel that something has changed, but the language for it isn't obvious.",
      "What has changed is that the business has outgrown the human at the top of it. The work is no longer about doing — it's about designing.",
      "A system is what lets work happen without the owner's attention. It's the documented workflow, the automation that runs whether or not anyone remembers to trigger it, the dashboard that surfaces the right number to the right person at the right time. None of these things are glamorous. All of them are what separate a business that scales from a business that just gets busier.",
      "The most common objection to systems is that they take time to build, and the team doesn't have time. That objection is exactly the symptom they are designed to solve. A business that has no time to build systems is a business that will spend the rest of its life paying for the lack of them — in repeated work, in errors, in opportunities never captured because the team was too busy keeping the wheels on.",
      "Hustle is a finite resource. It depletes. Systems are a compounding resource. They get better the longer they run, and they keep working when the owner is asleep, on vacation, or focused on the next strategic move. Every business eventually has to choose which one of these two resources it's going to bet on. The ones that bet on systems are the ones that get to keep growing without burning the operator out.",
    ],
  },
  {
    slug: "inside-the-businesses-scaling-smarter",
    category: "Growth",
    title: "Inside The Businesses Scaling Smarter",
    minutes: 7,
    publishedDate: "May 2026",
    summary:
      "The businesses scaling cleanly in 2026 don't look louder than their peers. They look quieter. The work is happening inside the system, not on top of it.",
    body: [
      "From the outside, the businesses scaling well right now don't look dramatically different from the ones that are stuck. They run similar ads. They sell similar products. They post similar content. The difference shows up only when you look at how the work actually happens.",
      "The businesses that are scaling smarter have stopped trying to outwork their problems. They have built systems that make the right behavior the easy behavior. When a lead comes in, it is routed automatically, replied to within minutes, and assigned to the right person without anyone having to think about it. When a customer asks the same question for the fifth time, the answer is templated and personalized and sent in seconds, not hours. When a project moves from sold to delivered, the handoff is documented, the team knows what they own, and the customer hears from someone within twenty-four hours.",
      "What this produces is calm. Calm is the most underrated business advantage of the next decade.",
      "Calm businesses convert better, because customers can feel the difference between an organization that has its act together and one that does not. Calm businesses retain better, because nothing irritates a paying customer more than chasing the people they already paid. Calm businesses hire better, because top operators want to work somewhere they aren't constantly cleaning up someone else's chaos. Calm businesses scale better, because growth doesn't break what already works.",
      "The owners of these businesses tend to talk about their work in a recognizable way. They talk less about individual heroics and more about the system. They are proud of how little their day-to-day touches the operation. They have moved from running the business to designing the business — which is the only sustainable role for a founder past a certain size.",
      "None of this requires the latest software. The companies scaling smarter aren't winning because they bought a better tool. They are winning because they took the time to map the operation, identify where time was leaking, and rebuild the workflows so the work flowed cleanly. The tools are just the substrate the system runs on.",
      "If there is a pattern, it is this: the businesses that look the calmest from the outside are usually the ones that did the most uncomfortable work on the inside — questioning every step in every process, removing every workaround that had become permanent, and rebuilding the operation around how it actually needs to run, not how it happened to grow.",
    ],
  },
  {
    slug: "how-better-communication-improves-customer-experience",
    category: "Leadership",
    title: "How Better Communication Improves Customer Experience",
    minutes: 6,
    publishedDate: "May 2026",
    summary:
      "Most customer-experience problems are communication problems in disguise. The fix is rarely a new feature. It's a new pipe.",
    body: [
      "If you ask a hundred business owners what their customers complain about, the surface answers will be wildly different — pricing, scheduling, product quality, follow-through. But underneath, most of those complaints are versions of the same complaint: I didn't know what was happening, and nobody told me.",
      "Communication, more than almost anything else, is what customers experience. Not the brand, not the website, not the promise — the actual contact. The reply time. The clarity of the answer. Whether the same person who took the order is the same person who handles the follow-up. Whether the team across the business is telling the customer the same story.",
      "When communication is fragmented across SMS, email, web chat, voicemail, DMs, and three different team members' inboxes, every touchpoint becomes an opportunity to drop the ball. The customer doesn't experience the technology stack. They experience the dropped ball.",
      "The businesses that get this right have done one specific thing. They have collapsed all customer-facing communication into a single, shared, time-stamped view of the relationship. The team can see, in one place, every message the customer has ever sent and every reply they have ever received. There is no inbox to switch between. There is no question about who replied last. There is one source of truth, and the work flows from it.",
      "That single shift quietly fixes a long list of secondary problems. Response times drop, because the team isn't hunting for context. Tone becomes consistent, because everyone is reading the same history. Handoffs stop dropping balls, because the next person has the full thread. The customer feels seen for the first time in years.",
      "Better communication is also one of the highest-leverage changes a business can make, because it doesn't require building a better product. It requires building a better pipe. The product is already good enough — what the customer is judging is what happens around the product. Get that right and the rest of the brand becomes easier to defend.",
      "The leaders of the businesses doing this work well tend to share a quiet conviction. They believe their customers can tell the difference between organizations that are listening and organizations that are processing them. They are not wrong. The difference is the entire experience.",
    ],
  },
  {
    slug: "when-the-bottleneck-is-the-owner",
    category: "Insight",
    title: "When The Bottleneck Is The Owner — And What To Do About It",
    minutes: 5,
    publishedDate: "May 2026",
    summary:
      "Almost every owner of a growing business eventually discovers that the person holding it back is the one looking back from the mirror. The work that follows is unglamorous and durable.",
    body: [
      "It is a hard sentence to write down. Every owner of a growing business will eventually have to do it. The bottleneck is me.",
      "The reasons are rarely about effort. The owner is working harder than anyone else. They are answering messages at 11 p.m. They are unblocking everything the team brings them. They are, by every visible measure, the most committed person in the building. And yet the business keeps stalling at the same ceiling, and the ceiling looks suspiciously like the limits of one person's bandwidth.",
      "The reason this is hard to see is that the bottleneck is invisible from inside. The owner is so busy being the bottleneck — answering, deciding, fixing, unblocking — that they don't have the spare attention to notice they have become the choke point. From their perspective, the business is running. From the team's perspective, nothing moves until the owner moves it.",
      "The first step out is usually counterintuitive. It is to slow down on doing and speed up on designing. To take a week, sometimes a day, to map every decision the business makes, every workflow it runs, every recurring conversation it has — and then to ask, of each one, why this still needs me. Most of the answers are reflexes. Of the ones that are real, most can be solved with documentation, a small automation, or a single hire who owns the workflow end-to-end.",
      "The second step is harder, because it is psychological. The owner has to be willing to let work be done differently than they would do it. Not worse — just differently. The team will not deliver every decision in the exact way the owner would have. That is the cost of unblocking the business. Without that willingness, the bottleneck stays in place even after the systems are built, because every meaningful decision still has to filter through one head.",
      "The third step is the easiest to skip and the most important. After the systems are built, the owner has to actually use them. They have to resist the urge to step back into the operation just because they can. The discipline is to stay in the role they have grown into — the architect of the business, not the daily operator of it.",
      "Owners who make this transition describe the same thing on the other side. They are no longer the most exhausted person in the company. They are no longer the answer to every question. They have, for the first time in years, the time and the headspace to actually think about where the business is going next. That clarity is the part of the work nobody warns owners about, and it is what makes the rest of it worth doing.",
    ],
  },
];

/** Compact list used by the sidebar; derived from INSIGHTS_POSTS. */
export const TRENDING_INSIGHTS = INSIGHTS_POSTS.map((p) => ({
  slug: p.slug,
  category: p.category,
  title: p.title,
  minutes: p.minutes,
}));

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
