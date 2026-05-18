"use client";

import { useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";
import { addDays, format, isWeekend, startOfDay } from "date-fns";
import "react-day-picker/style.css";
import { Modal } from "./Modal";
import { useBookCall } from "./BookCallContext";
import { GlassButton } from "@/components/ui/GlassButton";

const SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

type Status = "idle" | "submitting" | "success" | "error";

export function BookCallModal() {
  const { open, closeModal } = useBookCall();
  const today = startOfDay(new Date());
  const max = addDays(today, 30);

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [slot, setSlot] = useState<string | undefined>(undefined);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const tz = useMemo(
    () =>
      typeof Intl !== "undefined"
        ? Intl.DateTimeFormat().resolvedOptions().timeZone
        : "America/New_York",
    [],
  );

  function reset() {
    setDate(undefined);
    setSlot(undefined);
    setForm({ name: "", email: "", phone: "", company: "", message: "" });
    setStatus("idle");
    setErrorMsg(null);
  }

  function handleClose() {
    if (status === "submitting") return;
    closeModal();
    setTimeout(reset, 400);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!date || !slot || !form.name || !form.email) return;
    setStatus("submitting");
    setErrorMsg(null);

    const [h, m] = slot.split(":").map(Number);
    const slotDate = new Date(date);
    slotDate.setHours(h, m, 0, 0);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          source: "book-a-call",
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          company: form.company || undefined,
          message: form.message || undefined,
          slotISO: slotDate.toISOString(),
          timezone: tz,
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json?.error ?? "Submission failed");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed");
    }
  }

  const canSubmit =
    !!date && !!slot && !!form.name.trim() && !!form.email.trim() && status !== "submitting";

  return (
    <Modal open={open} onClose={handleClose} ariaLabel="Book a call" maxWidth="max-w-2xl">
      {status === "success" ? (
        <div className="py-10 text-center">
          <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-3xl">
            ✓
          </div>
          <h3
            className="text-2xl sm:text-3xl text-gradient font-semibold"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Locked in.
          </h3>
          <p className="mt-3 text-white/70 max-w-md mx-auto">
            Jamaur will personally review your request and reach back out at{" "}
            <span className="text-white">{form.email}</span> to confirm the time.
          </p>
          <div className="mt-7">
            <GlassButton onClick={handleClose} size="md" variant="ghost">
              Close
            </GlassButton>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Book a Call
            </div>
            <h3
              className="mt-3 text-2xl sm:text-3xl text-gradient font-semibold leading-tight"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Schedule 20 minutes with Jamaur
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Pick a date and time. Tell us a bit about you. We&apos;ll confirm by email.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-white/55 mb-2">
                Date
              </label>
              <div className="rounded-2xl glass p-2 sm:p-3">
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={[{ before: today }, { after: max }, (d) => isWeekend(d)]}
                  weekStartsOn={1}
                  className="text-white"
                  classNames={{
                    today: "text-cyan-300",
                    selected:
                      "!bg-gradient-to-br !from-cyan-400 !to-violet-500 !text-white",
                    chevron: "fill-white/70",
                  }}
                />
              </div>
              <p className="mt-2 text-[11px] text-white/40">Weekdays only · Timezone: {tz}</p>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-white/55 mb-2">
                Time
              </label>
              {date ? (
                <div className="grid grid-cols-3 gap-2">
                  {SLOTS.map((s) => {
                    const selected = slot === s;
                    return (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setSlot(s)}
                        className={`h-10 rounded-xl text-sm font-medium transition-all ${
                          selected
                            ? "bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-[0_10px_30px_-10px_rgba(78,224,255,0.55)]"
                            : "glass text-white/80 hover:bg-white/10"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-2xl glass p-6 text-center text-sm text-white/45">
                  Select a date to see available times
                </div>
              )}
              {date && slot && (
                <p className="mt-3 text-xs text-cyan-300">
                  ✓ {format(date, "EEEE, MMMM d")} · {slot}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Field
              label="Name *"
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              required
            />
            <Field
              label="Email *"
              type="email"
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              required
            />
            <Field
              label="Phone"
              type="tel"
              value={form.phone}
              onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
            />
            <Field
              label="Company / Brand"
              value={form.company}
              onChange={(v) => setForm((f) => ({ ...f, company: v }))}
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-white/55 mb-2">
              What do you want to talk about?
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              rows={4}
              className="w-full rounded-2xl glass border-0 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 resize-none"
              placeholder="Tell us about you, what you're building, and how Jamaur can help..."
            />
          </div>

          {errorMsg && (
            <div className="rounded-xl bg-red-500/10 border border-red-400/30 px-4 py-2 text-sm text-red-200">
              {errorMsg}
            </div>
          )}

          <div className="flex items-center justify-between gap-3">
            <p className="text-[11px] text-white/40">
              We&apos;ll never share your info. Replies come from Jamaur directly.
            </p>
            <GlassButton variant="primary" size="md">
              <span aria-disabled={!canSubmit}>
                {status === "submitting" ? "Sending..." : "Request Call"}
              </span>
            </GlassButton>
          </div>
        </form>
      )}
    </Modal>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-white/55 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full h-11 rounded-2xl glass border-0 px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
      />
    </div>
  );
}
