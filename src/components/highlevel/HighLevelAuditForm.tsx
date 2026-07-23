"use client";

import { useEffect, useId, useRef, useState } from "react";
import { HL_AUDIT_FORM } from "@/lib/highlevel-content";
import { CONVERSION_CURRENCY, CONVERSION_VALUE, trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

export function HighLevelAuditForm() {
  const nameId = useId();
  const agencyId = useId();
  const emailId = useId();
  const phoneId = useId();
  const websiteId = useId();
  const clientsId = useId();
  const bottleneckId = useId();

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    agency: "",
    email: "",
    phone: "",
    website: "",
    clients: "",
    bottleneck: "",
  });

  const successRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (status === "success") {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.agency.trim() || !form.email.trim()) return;
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/highlevel", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          agency: form.agency,
          email: form.email,
          phone: form.phone || undefined,
          website: form.website || undefined,
          clients: form.clients || undefined,
          bottleneck: form.bottleneck || undefined,
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json?.error ?? "Submission failed");
      trackEvent("audit_request", {
        event_category: "lead",
        event_label: "LIV8 AI HighLevel Operations",
        business: form.agency,
        value: CONVERSION_VALUE.audit_request,
        currency: CONVERSION_CURRENCY,
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  function reset() {
    setStatus("idle");
    setError(null);
    setForm({
      name: "",
      agency: "",
      email: "",
      phone: "",
      website: "",
      clients: "",
      bottleneck: "",
    });
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        className="relative rounded-2xl border border-[#c2a567]/40 bg-gradient-to-br from-[#1a1612] via-[#0f141f] to-[#0a0f1d] p-8 text-center shadow-[0_30px_80px_-30px_rgba(194,165,103,0.4)]"
      >
        <button
          type="button"
          onClick={reset}
          aria-label="Close confirmation and start a new request"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-base text-[#f4ede0]/65 transition-colors hover:border-[#c2a567]/40 hover:text-[#e9d5a3]"
        >
          ✕
        </button>
        <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#c2a567]/20 text-2xl text-[#e9d5a3]">
          ✓
        </div>
        <div className="text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/85">
          Audit Request Received
        </div>
        <h3
          className="mt-3 text-2xl leading-tight text-[#f4ede0]"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          Thank you, {form.name.split(" ")[0]}.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#f4ede0]/70">
          Jamaur will personally review what you shared about{" "}
          <span className="text-[#f4ede0]">{form.agency}</span> and reach back out at{" "}
          <span className="text-[#f4ede0]">{form.email}</span> within one business day.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex h-10 items-center rounded-full border border-white/15 px-5 text-[10px] uppercase tracking-[0.28em] text-[#f4ede0]/80 transition-colors hover:border-[#c2a567]/40 hover:text-[#e9d5a3]"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-white/10 bg-[#0c111c] p-6 sm:p-7 shadow-[0_30px_80px_-30px_rgba(194,165,103,0.25)]"
    >
      <div className="text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/90">
        {HL_AUDIT_FORM.eyebrow}
      </div>
      <h3
        className="mt-3 text-2xl leading-tight text-[#f4ede0]"
        style={{ fontFamily: "var(--font-editorial)" }}
      >
        {HL_AUDIT_FORM.headline}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#f4ede0]/65">{HL_AUDIT_FORM.body}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Field id={nameId} label="Full Name" value={form.name} onChange={(v) => update("name", v)} required />
        <Field id={agencyId} label="Agency Name" value={form.agency} onChange={(v) => update("agency", v)} required />
        <Field id={emailId} label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} required />
        <Field id={phoneId} label="Phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} />
        <div className="sm:col-span-2">
          <Field id={websiteId} label="Agency Website" type="text" value={form.website} onChange={(v) => update("website", v)} placeholder="youragency.com" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={clientsId} className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-[#f4ede0]/55">
            {HL_AUDIT_FORM.clientsPrompt}
          </label>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={HL_AUDIT_FORM.clientsPrompt}>
            {HL_AUDIT_FORM.clientsOptions.map((opt) => {
              const active = form.clients === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => update("clients", active ? "" : opt)}
                  className={`inline-flex h-10 items-center rounded-full border px-4 text-xs transition-colors ${
                    active
                      ? "border-[#c2a567]/60 bg-[#c2a567]/15 text-[#e9d5a3]"
                      : "border-white/10 text-[#f4ede0]/70 hover:border-[#c2a567]/40 hover:text-[#e9d5a3]"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={bottleneckId} className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-[#f4ede0]/55">
            {HL_AUDIT_FORM.bottleneckPrompt}
          </label>
          <textarea
            id={bottleneckId}
            rows={3}
            value={form.bottleneck}
            onChange={(e) => update("bottleneck", e.target.value)}
            placeholder={HL_AUDIT_FORM.bottleneckPlaceholder}
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
        {status === "submitting" ? "Sending…" : HL_AUDIT_FORM.cta}
      </button>

      <p className="mt-4 text-[10px] leading-relaxed text-[#f4ede0]/40">
        {HL_AUDIT_FORM.disclaimer}
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
