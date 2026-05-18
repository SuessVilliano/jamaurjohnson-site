import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadEmail } from "@/lib/lead-email";
import { pushLeadToGhl } from "@/lib/ghl";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const Schema = z.object({
  source: z.enum(["exit-intent", "book-a-call", "chat"]),
  name: z.string().min(1).max(120).optional(),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional(),
  company: z.string().max(160).optional(),
  message: z.string().max(4000).optional(),
  slotISO: z.string().datetime().optional(),
  timezone: z.string().max(80).optional(),
  conversation: z.string().max(20000).optional(),
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

  const userAgent = req.headers.get("user-agent") ?? undefined;

  // Notify Jamaur by email and sync the lead into GoHighLevel in parallel.
  // The GHL push is best-effort — a CRM hiccup must not drop the lead email.
  const [result, ghl] = await Promise.all([
    sendLeadEmail({ ...parsed.data, userAgent }),
    pushLeadToGhl({
      source: parsed.data.source,
      email: parsed.data.email,
      name: parsed.data.name,
      phone: parsed.data.phone,
      company: parsed.data.company,
      message: parsed.data.message,
    }),
  ]);

  if (!ghl.ok && !ghl.skipped) {
    console.error("[contact] GHL sync failed:", ghl.error);
  }

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 502 });
  }

  return NextResponse.json({
    ok: true,
    delivered: result.delivered,
    synced: ghl.ok,
  });
}
