"use client";

import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { GlassButton } from "@/components/ui/GlassButton";
import { useLeadModal } from "./LeadModalContext";

const STORAGE_KEY = "jamaur:exit-intent:dismissed-at";
const SUPPRESS_DAYS = 7;

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const { openCalendar } = useLeadModal();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = window.localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const age = Date.now() - Number(dismissed);
      if (age < SUPPRESS_DAYS * 24 * 60 * 60 * 1000) return;
    }

    let triggered = false;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setOpen(true);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    if (!isMobile) {
      document.addEventListener("mouseleave", onMouseLeave);
    }

    // Mobile fallback: trigger after 45s of scroll engagement
    let scrolled = false;
    const onScroll = () => {
      scrolled = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const t = window.setTimeout(() => {
      if (isMobile && scrolled) trigger();
    }, 45000);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(t);
    };
  }, []);

  function dismiss() {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          source: "exit-intent",
          name: name || undefined,
          email,
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json?.error ?? "Submission failed");
      setStatus("success");
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  return (
    <Modal open={open} onClose={dismiss} ariaLabel="Wait — get the inside track" maxWidth="max-w-xl">
      {status === "success" ? (
        <div className="py-8 text-center">
          <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-2xl">
            ✓
          </div>
          <h3
            className="text-2xl text-gradient font-semibold"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            You&apos;re on the list.
          </h3>
          <p className="mt-2 text-white/65 max-w-md mx-auto">
            We&apos;ll send updates when new books, music, and platforms drop.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <GlassButton onClick={dismiss} variant="ghost">
              Keep exploring
            </GlassButton>
            <GlassButton
              onClick={() => {
                dismiss();
                openCalendar();
              }}
              variant="primary"
            >
              Book a Call
            </GlassButton>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Before you go
            </div>
            <h3
              className="mt-3 text-2xl sm:text-3xl text-gradient font-semibold leading-tight"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Get the inside track on JAMAUR
            </h3>
            <p className="mt-2 text-sm text-white/65">
              New books, music drops, platform launches, and behind-the-scenes from the
              LIV8 + Hybrid ecosystem — straight to your inbox.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="text"
              placeholder="First name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 rounded-2xl glass border-0 px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            />
            <input
              type="email"
              required
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-2xl glass border-0 px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            />
          </div>

          {error && (
            <div className="rounded-xl bg-red-500/10 border border-red-400/30 px-4 py-2 text-sm text-red-200">
              {error}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={dismiss}
              className="text-xs text-white/45 hover:text-white/70 transition-colors"
            >
              No thanks — keep browsing
            </button>
            <GlassButton variant="primary" size="md">
              {status === "submitting" ? "Sending..." : "Notify Me"}
            </GlassButton>
          </div>
        </form>
      )}
    </Modal>
  );
}
