import { streamText } from "ai";
import { z } from "zod";
import { PATHS, BRANCHES, SHARED_QUESTION, summarize, type Answers, type PathId } from "@/lib/questionnaire";

export const runtime = "nodejs";
export const maxDuration = 60;

const Schema = z.object({
  path: z.enum(["founder", "trader", "business", "buyer", "program", "other"]),
  answers: z.record(z.string(), z.union([z.string(), z.array(z.string())])).optional(),
});

const SYSTEM_PROMPT = `You are JAMAUR Johnson's chief of staff, speaking on his behalf to a visitor who just shared what brought them to jamaurjohnson.com.

Jamaur is a GoHighLevel ecosystem expert, AI automation architect, founder of LIV8 (LIV8AI, LIV8 Solar, LIV8 Health), founder of Hybrid Holdings (Hybrid Funding — funded-trader prop firm; Trade Hybrid — trading education + signals + automation), SaaS strategist, investor, day trader, music creator (Suess Villiano / Meta SV / Sound Forge / Sound Merge), and author of 7 books on trading, consciousness, and strategy.

Map the visitor's answers to the right part of the ecosystem and write a SHORT personalized recommendation. Format:

Sentence 1 — Acknowledge specifically what they shared (mirror their words, no fluff).
Sentence 2-3 — Recommend the most relevant 1-2 Jamaur services/programs/products by name (e.g. "Hybrid Funding", "LIV8AI", "Trade Hybrid", "GoHighLevel build-out", a specific book). Be concrete about WHY it fits.
Sentence 4 — Give one tangible next step they can take on a call ("On a 20-min call, we can…").

Constraints:
- Max 120 words.
- Confident, warm, direct. Slightly futurist. No corporate fluff.
- Don't use bullet lists or headings — flow as 2-3 short paragraphs.
- Don't pretend to be Jamaur — say "Jamaur" not "I".
- Don't ask follow-up questions. The next step is the contact form, not more chat.
- Don't invent products or claims not listed above.`;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ ok: false, error: "Validation failed" }, { status: 400 });
  }

  const submission = {
    path: parsed.data.path as PathId,
    answers: (parsed.data.answers ?? {}) as Answers,
  };
  const pathLabel = PATHS.find((p) => p.id === submission.path)?.label ?? submission.path;
  const summary = summarize(submission);

  const model = process.env.CHAT_MODEL ?? "anthropic/claude-sonnet-4.5";

  const result = streamText({
    model,
    system: SYSTEM_PROMPT,
    prompt: `A visitor just identified as: ${pathLabel}\n\nTheir answers:\n${summary}\n\nWrite the personalized recommendation now.`,
    temperature: 0.55,
  });

  return result.toTextStreamResponse();
}

// Reference unused import to keep tree-shaking honest in case future questions
// reference BRANCHES / SHARED_QUESTION from this file directly.
void BRANCHES;
void SHARED_QUESTION;
