import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadEmail } from "@/lib/lead-email";

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

  const result = await sendLeadEmail({ ...parsed.data, userAgent });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 502 });
  }

  return NextResponse.json({ ok: true, delivered: result.delivered });
}
