"use client";

import { useId, useState } from "react";
import { AUDIT_FORM } from "@/lib/perspective-content";

type Status = "idle" | "submitting" | "success" | "error";

export function AuditForm({ compact = false }: { compact?: boolean }) {
  const nameId = useId();
  const businessId = useId();
  const emailId = useId();
  const phoneId = useId();
  const websiteId = useId();
  const hardestId = useId();

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    website: "",
    hardest: "",
  });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.business.trim() || !form.email.trim()) return;
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          business: form.business,
          email: form.email,
          phone: form.phone || undefined,
          website: form.website || undefined,
          hardest: form.hardest || undefined,
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json?.error ?? "Submission failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#c2a567]/30 bg-[#0f141f] p-8 text-center">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#c2a567]/15 text-xl text-[#e9d5a3]">
          ✓
        </div>
        <h3
          className="text-xl text-[#f4ede0]"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          Audit request received
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-[#f4ede0]/65">
          Jamaur&apos;s team will review your business and reach back out at{" "}
          <span className="text-[#f4ede0]">{form.email}</span> within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className={`rounded-2xl border border-white/10 bg-[#0c111c] p-6 sm:p-7 ${compact ? "" : "shadow-[0_30px_80px_-30px_rgba(194,165,103,0.25)]"}`}
    >
      <div className="text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/90">
        {AUDIT_FORM.eyebrow}
      </div>
      <h3
        className="mt-3 text-2xl leading-tight text-[#f4ede0]"
        style={{ fontFamily: "var(--font-editorial)" }}
      >
        {AUDIT_FORM.headline}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#f4ede0]/65">{AUDIT_FORM.body}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Field id={nameId} label="Full Name" value={form.name} onChange={(v) => update("name", v)} required />
        <Field id={businessId} label="Business Name" value={form.business} onChange={(v) => update("business", v)} required />
        <Field id={emailId} label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} required />
        <Field id={phoneId} label="Phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} />
        <div className="sm:col-span-2">
          <Field id={websiteId} label="Website" type="url" value={form.website} onChange={(v) => update("website", v)} placeholder="https://" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={hardestId} className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-[#f4ede0]/55">
            {AUDIT_FORM.hardestPrompt}
          </label>
          <textarea
            id={hardestId}
            rows={3}
            value={form.hardest}
            onChange={(e) => update("hardest", e.target.value)}
            placeholder={AUDIT_FORM.hardestPlaceholder}
            className="w-full resize-none rounded-xl border border-white/10 bg-[#06080f] px-4 py-3 text-sm text-[#f4ede0] placeholder:text-[#f4ede0]/30 focus:border-[#c2a567]/50 focus:outline-none focus:ring-2 focus:ring-[#c2a567]/20"
          />
        </div>
      </div>

      {error && (
        <p className="mt-3 rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs text-red-200">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#c2a567] text-[11px] uppercase tracking-[0.22em] text-[#0a0f1d] transition-colors hover:bg-[#d1b67c] disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : AUDIT_FORM.cta}
      </button>

      <p className="mt-4 text-[10px] leading-relaxed text-[#f4ede0]/40">
        {AUDIT_FORM.disclaimer}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-[#f4ede0]/55">
        {label}
        {required ? <span className="text-[#c2a567]/80"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-white/10 bg-[#06080f] px-4 text-sm text-[#f4ede0] placeholder:text-[#f4ede0]/30 focus:border-[#c2a567]/50 focus:outline-none focus:ring-2 focus:ring-[#c2a567]/20"
      />
    </div>
  );
}
