import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadEmail } from "@/lib/lead-email";
import { addContactNote, isGhlConfigured, upsertContact } from "@/lib/ghl";
import { summarize, tagsFor, type Answers, type PathId } from "@/lib/questionnaire";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const Schema = z.object({
  path: z.enum(["founder", "trader", "business", "buyer", "program", "other"]),
  answers: z.record(z.string(), z.union([z.string(), z.array(z.string())])).default({}),
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional(),
  company: z.string().max(160).optional(),
  recommendation: z.string().max(4000).optional(),
  pageUrl: z.string().max(500).optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const submission = { path: data.path as PathId, answers: data.answers as Answers };
  const summary = summarize(submission);
  const note = data.recommendation
    ? `${summary}\n\n— AI Recommendation —\n${data.recommendation}`
    : summary;
  const tags = [
    "Website Lead",
    "jamaurjohnson.com",
    "Get Started Questionnaire",
    ...tagsFor(submission),
  ];

  const userAgent = req.headers.get("user-agent") ?? undefined;

  const [email, ghl] = await Promise.all([
    sendLeadEmail({
      source: "questionnaire",
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      message: note,
      pageUrl: data.pageUrl,
      userAgent,
    }),
    pushToGhl({
      email: data.email,
      name: data.name,
      phone: data.phone,
      companyName: data.company,
      tags,
      note,
    }),
  ]);

  if (!email.ok) console.error("[questionnaire] email failed", email.error);
  if (!ghl.ok && !ghl.skipped) console.error("[questionnaire] GHL failed", ghl.error);

  // User-facing flow succeeds even if GHL is misconfigured — Resend always
  // backs it up and the visitor shouldn't see internal errors.
  return NextResponse.json({
    ok: true,
    email: email.ok ? { delivered: email.delivered } : { error: email.error },
    ghl: ghl.ok
      ? { synced: true, contactId: ghl.contactId, isNew: ghl.isNew }
      : { synced: false, ...(ghl.skipped ? { skipped: true } : { error: ghl.error }) },
  });
}

type GhlPushArgs = {
  email: string;
  name?: string;
  phone?: string;
  companyName?: string;
  tags: string[];
  note: string;
};

type GhlPushResult =
  | { ok: true; contactId?: string; isNew?: boolean }
  | { ok: false; error: string; skipped?: boolean };

async function pushToGhl(input: GhlPushArgs): Promise<GhlPushResult> {
  if (!isGhlConfigured()) {
    return { ok: false, error: "GHL is not configured", skipped: true };
  }

  const upsert = await upsertContact({
    email: input.email,
    name: input.name,
    phone: input.phone,
    companyName: input.companyName,
    source: "jamaurjohnson.com (questionnaire)",
    tags: input.tags,
  });
  if (!upsert.ok) return upsert;

  if (input.note && upsert.data.contactId) {
    // Best-effort — never let a failed note block the contact create.
    await addContactNote(
      upsert.data.contactId,
      `Get Started Questionnaire submission:\n\n${input.note}`,
    );
  }

  return { ok: true, contactId: upsert.data.contactId, isNew: upsert.data.isNew };
}
