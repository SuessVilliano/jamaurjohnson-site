/**
 * Get Started questionnaire — branching question tree.
 *
 * Edit copy, options, or branches here. The UI in
 * src/components/lead/GetStartedQuestionnaire.tsx and the recommendation
 * prompt in src/app/api/recommendation/route.ts both read from this file.
 *
 * Shape:
 *   - PATHS    : top-level "what brings you here?" buckets (Step 1)
 *   - BRANCHES : the follow-up questions per path (Step 2..N)
 *   - SHARED   : universal closing question (Step N+1) shown to every path
 */

export type PathId =
  | "founder"
  | "trader"
  | "business"
  | "buyer"
  | "program"
  | "other";

export type QuestionId = string;

export type Option = {
  value: string;
  label: string;
  description?: string;
};

export type Question =
  | {
      id: QuestionId;
      kind: "single";
      prompt: string;
      helper?: string;
      options: Option[];
      required?: boolean;
    }
  | {
      id: QuestionId;
      kind: "multi";
      prompt: string;
      helper?: string;
      options: Option[];
      max?: number;
      required?: boolean;
    }
  | {
      id: QuestionId;
      kind: "text";
      prompt: string;
      helper?: string;
      placeholder?: string;
      multiline?: boolean;
      required?: boolean;
    };

export type Path = {
  id: PathId;
  label: string;
  description: string;
  /** Used as a soft GHL tag suffix (`intent:<tag>`) and surfaced to the AI rec prompt. */
  tag: string;
  /** Question icon glyph for the step card. */
  glyph: string;
};

export const PATHS: Path[] = [
  {
    id: "founder",
    label: "I'm a founder / entrepreneur",
    description: "Building something from scratch or scaling an existing venture.",
    tag: "founder",
    glyph: "✦",
  },
  {
    id: "trader",
    label: "I'm a trader (or want to become one)",
    description: "Active markets, funded programs, or trading systems / AI agents.",
    tag: "trader",
    glyph: "↗",
  },
  {
    id: "business",
    label: "I run an established business",
    description: "Agency, coaching, e-commerce, SaaS, services — want to systemize.",
    tag: "business",
    glyph: "▣",
  },
  {
    id: "buyer",
    label: "I want a specific service or product",
    description: "GoHighLevel build-out, AI automation, consulting, or a JAMAUR product.",
    tag: "buyer",
    glyph: "◇",
  },
  {
    id: "program",
    label: "I have a question about a program",
    description: "LIV8AI, Hybrid Funding, Trade Hybrid, EMET, Sound Merge, books, etc.",
    tag: "program-question",
    glyph: "?",
  },
  {
    id: "other",
    label: "Something else",
    description: "Press, partnerships, collaborations, or anything else.",
    tag: "other",
    glyph: "✶",
  },
];

export const BRANCHES: Record<PathId, Question[]> = {
  founder: [
    {
      id: "stage",
      kind: "single",
      prompt: "Where are you in the journey?",
      required: true,
      options: [
        { value: "idea", label: "Idea stage" },
        { value: "building", label: "Building (pre-revenue)" },
        { value: "early", label: "Early traction (under $10k/mo)" },
        { value: "scaling", label: "Scaling ($10k–$250k/mo)" },
        { value: "mature", label: "Mature ($250k+/mo)" },
      ],
    },
    {
      id: "focus",
      kind: "multi",
      prompt: "What do you want help with most? (pick up to 3)",
      max: 3,
      required: true,
      options: [
        { value: "ghl", label: "GoHighLevel build-out (CRM, funnels, workflows)" },
        { value: "ai", label: "AI agents & automation" },
        { value: "saas", label: "SaaS / platform infrastructure" },
        { value: "capital", label: "Funded capital / trading systems" },
        { value: "audience", label: "Audience, content, brand" },
        { value: "team", label: "Team / operating systems" },
      ],
    },
  ],
  trader: [
    {
      id: "experience",
      kind: "single",
      prompt: "How long have you been trading?",
      required: true,
      options: [
        { value: "new", label: "Brand new (under 6 months)" },
        { value: "1to2", label: "1–2 years" },
        { value: "3plus", label: "3+ years" },
        { value: "funded", label: "Already funded / professional" },
      ],
    },
    {
      id: "trader_interest",
      kind: "multi",
      prompt: "What are you most interested in? (pick up to 3)",
      max: 3,
      required: true,
      options: [
        { value: "funded-program", label: "Funded trader program (Hybrid Funding)" },
        { value: "trade-hybrid", label: "Trade Hybrid (education, signals, community)" },
        { value: "ai-agents", label: "AI trading agents & automation" },
        { value: "copy", label: "Copy trading / signals" },
        { value: "psychology", label: "Trading psychology & systems" },
      ],
    },
  ],
  business: [
    {
      id: "industry",
      kind: "single",
      prompt: "What kind of business?",
      required: true,
      options: [
        { value: "agency", label: "Agency / consultancy" },
        { value: "coaching", label: "Coaching / info products" },
        { value: "ecom", label: "E-commerce" },
        { value: "saas", label: "SaaS / software" },
        { value: "service", label: "Local / service business" },
        { value: "other", label: "Something else" },
      ],
    },
    {
      id: "bottleneck",
      kind: "single",
      prompt: "What's the single biggest bottleneck right now?",
      required: true,
      options: [
        { value: "leadgen", label: "Lead generation" },
        { value: "closing", label: "Sales / closing" },
        { value: "fulfillment", label: "Fulfillment / delivery" },
        { value: "tech", label: "Tech / systems / automation" },
        { value: "team", label: "Team / operations" },
      ],
    },
    {
      id: "revenue",
      kind: "single",
      prompt: "Annual revenue ballpark?",
      options: [
        { value: "u100k", label: "Under $100k" },
        { value: "100k-1m", label: "$100k – $1M" },
        { value: "1-10m", label: "$1M – $10M" },
        { value: "10m+", label: "$10M+" },
        { value: "skip", label: "Prefer not to say" },
      ],
    },
  ],
  buyer: [
    {
      id: "service",
      kind: "single",
      prompt: "What are you looking for?",
      required: true,
      options: [
        { value: "ghl-build", label: "Full GoHighLevel build-out" },
        { value: "ai-automation", label: "AI automation / agent build" },
        { value: "consulting", label: "1:1 consulting / advisory" },
        { value: "product", label: "A specific JAMAUR product (book, music, course)" },
        { value: "custom", label: "Something custom — let's talk" },
      ],
    },
    {
      id: "timeline",
      kind: "single",
      prompt: "How soon are you ready to move?",
      required: true,
      options: [
        { value: "now", label: "Ready now" },
        { value: "30-60", label: "Next 30–60 days" },
        { value: "exploring", label: "Just exploring" },
      ],
    },
    {
      id: "budget",
      kind: "single",
      prompt: "What's your budget range for this?",
      options: [
        { value: "u5k", label: "Under $5k" },
        { value: "5-25k", label: "$5k – $25k" },
        { value: "25-100k", label: "$25k – $100k" },
        { value: "100k+", label: "$100k+" },
        { value: "skip", label: "Prefer to discuss" },
      ],
    },
  ],
  program: [
    {
      id: "program_name",
      kind: "single",
      prompt: "Which program?",
      required: true,
      options: [
        { value: "liv8ai", label: "LIV8AI" },
        { value: "hybrid-funding", label: "Hybrid Funding" },
        { value: "trade-hybrid", label: "Trade Hybrid" },
        { value: "emet", label: "EMET" },
        { value: "sound-merge", label: "Sound Merge" },
        { value: "books", label: "Books" },
        { value: "other", label: "Something else" },
      ],
    },
    {
      id: "question_type",
      kind: "single",
      prompt: "What's the question about?",
      required: true,
      options: [
        { value: "pricing", label: "Pricing" },
        { value: "how-it-works", label: "How it works" },
        { value: "fit", label: "Is it right for me?" },
        { value: "support", label: "Support / refund / account" },
        { value: "partnership", label: "Affiliate / partnership" },
        { value: "other", label: "Something else" },
      ],
    },
  ],
  other: [
    {
      id: "topic",
      kind: "text",
      prompt: "Tell me a little about what you'd like to discuss.",
      placeholder: "Press, partnership, collaboration, or anything else…",
      multiline: true,
      required: true,
    },
  ],
};

export const SHARED_QUESTION: Question = {
  id: "outcome",
  kind: "text",
  prompt: "If we work together, what does success look like 90 days from now?",
  helper: "One or two sentences is plenty. Be specific.",
  placeholder: "e.g. 'My GHL is automated end-to-end and we're closing 30 calls/mo.'",
  multiline: true,
  required: true,
};

export type Answers = Record<QuestionId, string | string[] | undefined>;

export type QuestionnaireSubmission = {
  path: PathId;
  answers: Answers;
};

/** Build a human-readable summary for emails, GHL notes, and the AI rec prompt. */
export function summarize(submission: QuestionnaireSubmission): string {
  const path = PATHS.find((p) => p.id === submission.path);
  const lines: string[] = [];
  lines.push(`Path: ${path?.label ?? submission.path}`);
  const branch = BRANCHES[submission.path] ?? [];
  for (const q of [...branch, SHARED_QUESTION]) {
    const value = submission.answers[q.id];
    if (value === undefined || value === "" || (Array.isArray(value) && value.length === 0)) {
      continue;
    }
    const label = formatAnswer(q, value);
    lines.push(`${q.prompt}\n  → ${label}`);
  }
  return lines.join("\n\n");
}

function formatAnswer(q: Question, value: string | string[]): string {
  if (q.kind === "text") return String(value);
  const values = Array.isArray(value) ? value : [value];
  if (q.kind === "single" || q.kind === "multi") {
    const labels = values.map((v) => q.options.find((o) => o.value === v)?.label ?? v);
    return labels.join(", ");
  }
  return values.join(", ");
}

/** Tags to apply on the GHL contact. */
export function tagsFor(submission: QuestionnaireSubmission): string[] {
  const path = PATHS.find((p) => p.id === submission.path);
  const tags = ["website-lead", `path:${path?.tag ?? submission.path}`];

  const focus = submission.answers["focus"];
  if (Array.isArray(focus)) focus.forEach((f) => tags.push(`focus:${f}`));

  const traderInterest = submission.answers["trader_interest"];
  if (Array.isArray(traderInterest)) traderInterest.forEach((f) => tags.push(`interest:${f}`));

  const service = submission.answers["service"];
  if (typeof service === "string") tags.push(`service:${service}`);

  const timeline = submission.answers["timeline"];
  if (typeof timeline === "string") tags.push(`timeline:${timeline}`);

  const programName = submission.answers["program_name"];
  if (typeof programName === "string") tags.push(`program:${programName}`);

  const bottleneck = submission.answers["bottleneck"];
  if (typeof bottleneck === "string") tags.push(`bottleneck:${bottleneck}`);

  return tags;
}
