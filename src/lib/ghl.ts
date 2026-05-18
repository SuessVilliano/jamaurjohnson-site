/**
 * GoHighLevel (LeadConnector) API v2 client.
 *
 * Server-side only. Authentication uses a Private Integration Token (PIT)
 * read from the GHL_PIT_TOKEN environment variable — it must never be sent
 * to the browser or committed to the repo.
 *
 * Configure via env:
 *   GHL_PIT_TOKEN    Private Integration Token (Settings → Private Integrations)
 *   GHL_LOCATION_ID  Sub-account / Location ID
 *   GHL_API_VERSION  Optional — API version date header (default 2021-07-28)
 */

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = process.env.GHL_API_VERSION?.trim() || "2021-07-28";

const token = () => process.env.GHL_PIT_TOKEN?.trim();
const locationId = () => process.env.GHL_LOCATION_ID?.trim();

/** True only when both the PIT token and location id are configured. */
export function isGhlConfigured() {
  return Boolean(token() && locationId());
}

type Json = Record<string, unknown>;
type GhlResult<T> = { ok: true; data: T } | { ok: false; error: string };

async function ghlRequest<T>(path: string, init: RequestInit): Promise<GhlResult<T>> {
  const t = token();
  if (!t) return { ok: false, error: "GHL_PIT_TOKEN is not set" };

  try {
    const res = await fetch(`${GHL_BASE}${path}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${t}`,
        Version: GHL_VERSION,
        Accept: "application/json",
        "Content-Type": "application/json",
        ...init.headers,
      },
    });
    const raw = await res.text();
    const body: Json = raw ? JSON.parse(raw) : {};
    if (!res.ok) {
      const msg = typeof body.message === "string" ? body.message : `GHL HTTP ${res.status}`;
      return { ok: false, error: msg };
    }
    return { ok: true, data: body as T };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "GHL request failed" };
  }
}

export type GhlContactInput = {
  email: string;
  name?: string;
  phone?: string;
  companyName?: string;
  source?: string;
  tags?: string[];
};

type UpsertResponse = { contact?: { id?: string }; new?: boolean };

/** Create or update a contact in GHL, identified by email/phone per the
 *  location's duplicate-handling rules. Returns the contact id. */
export async function upsertContact(
  input: GhlContactInput,
): Promise<GhlResult<{ contactId?: string; isNew?: boolean }>> {
  const loc = locationId();
  if (!loc) return { ok: false, error: "GHL_LOCATION_ID is not set" };

  const parts = (input.name ?? "").trim().split(/\s+/).filter(Boolean);
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ") || undefined;

  const res = await ghlRequest<UpsertResponse>("/contacts/upsert", {
    method: "POST",
    body: JSON.stringify({
      locationId: loc,
      email: input.email,
      ...(firstName ? { firstName } : {}),
      ...(lastName ? { lastName } : {}),
      ...(input.name ? { name: input.name } : {}),
      ...(input.phone ? { phone: input.phone } : {}),
      ...(input.companyName ? { companyName: input.companyName } : {}),
      ...(input.source ? { source: input.source } : {}),
      ...(input.tags?.length ? { tags: input.tags } : {}),
    }),
  });

  if (!res.ok) return res;
  return { ok: true, data: { contactId: res.data.contact?.id, isNew: res.data.new } };
}

/** Attach a free-text note to a contact (best-effort context for the team). */
export async function addContactNote(contactId: string, body: string) {
  return ghlRequest(`/contacts/${contactId}/notes`, {
    method: "POST",
    body: JSON.stringify({ body }),
  });
}

const SOURCE_TAGS: Record<string, string> = {
  "exit-intent": "Exit Intent Optin",
  "book-a-call": "Book A Call Request",
  chat: "Chat Lead",
};

export type GhlLead = {
  source: string;
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  message?: string;
};

type PushResult =
  | { ok: true; contactId?: string; isNew?: boolean }
  | { ok: false; error: string; skipped?: boolean };

/**
 * Upsert a website lead into GHL and tag it so automation workflows
 * (email follow-ups, SMS campaigns) can pick it up. Safe to call even when
 * GHL is not configured — it simply reports `skipped`.
 */
export async function pushLeadToGhl(lead: GhlLead): Promise<PushResult> {
  if (!isGhlConfigured()) {
    return { ok: false, error: "GHL is not configured", skipped: true };
  }

  const tags = ["Website Lead", "jamaurjohnson.com"];
  const sourceTag = SOURCE_TAGS[lead.source];
  if (sourceTag) tags.push(sourceTag);

  const res = await upsertContact({
    email: lead.email,
    name: lead.name,
    phone: lead.phone,
    companyName: lead.company,
    source: `jamaurjohnson.com (${lead.source})`,
    tags,
  });
  if (!res.ok) return res;

  if (lead.message && res.data.contactId) {
    // Best-effort — never let a failed note block the lead.
    await addContactNote(
      res.data.contactId,
      `Website message (${lead.source}):\n${lead.message}`,
    );
  }

  return { ok: true, contactId: res.data.contactId, isNew: res.data.isNew };
}
