import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadEmail } from "@/lib/lead-email";
import { addContactNote, isGhlConfigured, upsertContact } from "@/lib/ghl";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const Schema = z.object({
  name: z.string().min(1).max(120),
  agency: z.string().min(1).max(160),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional(),
  website: z.string().max(300).optional(),
  clients: z.string().max(40).optional(),
  bottleneck: z.string().max(2000).optional(),
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
  const noteLines = [
    `Agency: ${data.agency}`,
    data.website ? `Website: ${data.website}` : null,
    data.clients ? `Active client sub-accounts: ${data.clients}` : null,
    data.bottleneck ? `\nHardest to manage right now:\n${data.bottleneck}` : null,
  ].filter(Boolean);
  const note = noteLines.join("\n");

  const userAgent = req.headers.get("user-agent") ?? undefined;

  const [email, ghl] = await Promise.all([
    sendLeadEmail({
      source: "highlevel",
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.agency,
      message: note,
      pageUrl: data.pageUrl,
      userAgent,
    }),
    pushHighLevelLead(data, note),
  ]);

  if (!email.ok) console.error("[highlevel] email failed", email.error);
  if (!ghl.ok && !ghl.skipped) console.error("[highlevel] GHL failed", ghl.error);

  return NextResponse.json({
    ok: true,
    email: email.ok ? { delivered: email.delivered } : { error: email.error },
    ghl: ghl.ok
      ? { synced: true, contactId: ghl.contactId, isNew: ghl.isNew }
      : { synced: false, ...(ghl.skipped ? { skipped: true } : { error: ghl.error }) },
  });
}

type HighLevelLead = z.infer<typeof Schema>;
type GhlPushResult =
  | { ok: true; contactId?: string; isNew?: boolean }
  | { ok: false; error: string; skipped?: boolean };

async function pushHighLevelLead(
  data: HighLevelLead,
  note: string,
): Promise<GhlPushResult> {
  if (!isGhlConfigured()) {
    return { ok: false, error: "GHL is not configured", skipped: true };
  }

  const upsert = await upsertContact({
    email: data.email,
    name: data.name,
    phone: data.phone,
    companyName: data.agency,
    source: "jamaurjohnson.com (highlevel-operations)",
    tags: [
      "Website Lead",
      "jamaurjohnson.com",
      "LIV8 AI",
      "HighLevel Operations",
      "Rescue Sprint Lead",
    ],
  });
  if (!upsert.ok) return upsert;

  if (note && upsert.data.contactId) {
    await addContactNote(
      upsert.data.contactId,
      `HighLevel Operations Audit Request (LIV8 AI):\n\n${note}`,
    );
  }

  return { ok: true, contactId: upsert.data.contactId, isNew: upsert.data.isNew };
}
