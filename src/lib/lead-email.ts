import { Resend } from "resend";

const TO = "suessvilliano@gmail.com";
const FROM = process.env.RESEND_FROM ?? "JAMAUR Site <onboarding@resend.dev>";

let _resend: Resend | null = null;
function resend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (!_resend) _resend = new Resend(key);
  return _resend;
}

export type LeadSource = "exit-intent" | "book-a-call" | "chat" | "questionnaire";

export type LeadPayload = {
  source: LeadSource;
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  slotISO?: string;
  timezone?: string;
  conversation?: string;
  userAgent?: string;
  pageUrl?: string;
};

const SOURCE_LABEL: Record<LeadSource, string> = {
  "exit-intent": "EXIT INTENT",
  "book-a-call": "BOOK A CALL",
  chat: "CHAT LEAD",
  questionnaire: "GET STARTED QUESTIONNAIRE",
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:8px 14px;color:#9aa0aa;font-size:12px;text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #1a1f2b;width:140px;vertical-align:top">${label}</td>
      <td style="padding:8px 14px;color:#f5f7ff;font-size:14px;line-height:1.55;border-bottom:1px solid #1a1f2b;white-space:pre-wrap">${escapeHtml(value)}</td>
    </tr>`;
}

function buildHtml(p: LeadPayload) {
  const tag = SOURCE_LABEL[p.source];
  const slotLine = p.slotISO
    ? new Date(p.slotISO).toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
        timeZone: p.timezone ?? "America/New_York",
      })
    : undefined;

  return `
  <div style="background:#0b0d13;padding:24px;font-family:-apple-system,BlinkMacSystemFont,sans-serif">
    <table cellspacing="0" cellpadding="0" style="background:#0f121b;border:1px solid #1a1f2b;border-radius:14px;width:100%;max-width:620px;margin:0 auto;overflow:hidden">
      <tr>
        <td style="padding:18px 22px;background:linear-gradient(135deg,#4ee0ff22,#8b5cf622);border-bottom:1px solid #1a1f2b">
          <div style="font-size:11px;letter-spacing:3px;color:#4ee0ff;text-transform:uppercase">JAMAUR · New Lead</div>
          <div style="font-size:20px;color:#f5f7ff;margin-top:4px;font-weight:600">[${tag}]</div>
        </td>
      </tr>
      <tr><td>
        <table cellspacing="0" cellpadding="0" style="width:100%">
          ${row("Source", tag)}
          ${row("Name", p.name)}
          ${row("Email", p.email)}
          ${row("Phone", p.phone)}
          ${row("Company", p.company)}
          ${row("Booked slot", slotLine)}
          ${row("Timezone", p.timezone)}
          ${row("Message", p.message)}
          ${row("Conversation", p.conversation)}
          ${row("Page", p.pageUrl)}
          ${row("User agent", p.userAgent)}
        </table>
      </td></tr>
    </table>
  </div>`;
}

export async function sendLeadEmail(payload: LeadPayload) {
  const r = resend();
  if (!r) {
    console.warn("[lead-email] RESEND_API_KEY missing — logging instead of sending");
    console.log("[lead-email] payload:", payload);
    return { ok: true as const, delivered: false as const };
  }

  const subject = `[JAMAUR · ${SOURCE_LABEL[payload.source]}] ${payload.name ?? payload.email}`;

  const { data, error } = await r.emails.send({
    from: FROM,
    to: TO,
    replyTo: payload.email,
    subject,
    html: buildHtml(payload),
  });

  if (error) {
    console.error("[lead-email] send failed", error);
    return { ok: false as const, error: error.message };
  }

  return { ok: true as const, delivered: true as const, id: data?.id };
}
