"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HighLevelAuditForm } from "@/components/highlevel/HighLevelAuditForm";
import {
  HL_AUDIT_FORM,
  HL_FAQ,
  HL_FINAL_CTA,
  HL_FOOTER,
  HL_HERO,
  HL_META,
  HL_NAV_LINKS,
  HL_OPS_DESK,
  HL_PAIN,
  HL_PROOF,
  HL_PULL_QUOTE,
  HL_RESCUE,
  HL_SHIFT,
  HL_WHY,
} from "@/lib/highlevel-content";

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HighLevelOperationsPage() {
  const requestAudit = useCallback(() => {
    scrollToId("audit");
    const el = document.getElementById("audit");
    const firstInput = el?.querySelector<HTMLInputElement>("input");
    setTimeout(() => firstInput?.focus({ preventScroll: true }), 500);
  }, []);

  return (
    <main className="relative">
      <Nav onRequestAudit={requestAudit} />
      <Hero onRequestAudit={requestAudit} />
      <Pain />
      <RescueSprint onRequestAudit={requestAudit} />
      <Why />
      <Shift />
      <OpsDesk onRequestAudit={requestAudit} />
      <PullQuote />
      <Proof />
      <AuditSection />
      <Faq />
      <FinalCta onRequestAudit={requestAudit} />
      <Footer />
      <StickyMobileCta onRequestAudit={requestAudit} />
    </main>
  );
}

/* ─────────────────────────── Nav ─────────────────────────── */

function Nav({ onRequestAudit }: { onRequestAudit: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#06080f]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-lg tracking-tight text-[#f4ede0]"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            {HL_META.brand}
          </span>
          <span className="hidden text-[9px] uppercase tracking-[0.3em] text-[#c2a567]/80 sm:inline">
            HighLevel Operations
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {HL_NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.22em] text-[#f4ede0]/60 transition-colors hover:text-[#e9d5a3]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onRequestAudit}
            className="inline-flex h-10 items-center rounded-full bg-[#c2a567] px-5 text-[10px] uppercase tracking-[0.2em] text-[#0a0f1d] transition-colors hover:bg-[#d1b67c]"
          >
            Book Audit
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#f4ede0]/70 md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/5 px-5 pb-4 md:hidden">
          {HL_NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[12px] uppercase tracking-[0.22em] text-[#f4ede0]/70"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */

function Hero({ onRequestAudit }: { onRequestAudit: () => void }) {
  const [imgError, setImgError] = useState(false);
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 right-0 h-[600px] bg-gradient-to-bl from-[#c2a567]/15 via-[#c2a567]/5 to-transparent blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/85">
            <span className="inline-block h-px w-8 bg-[#c2a567]/60" />
            {HL_HERO.eyebrow}
          </div>

          <h1
            className="mt-6 text-balance text-4xl leading-[1.06] tracking-tight text-[#f4ede0] sm:text-5xl lg:text-[58px]"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            {HL_HERO.headline}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-[#f4ede0]/70 sm:text-lg">
            {HL_HERO.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <button
              onClick={onRequestAudit}
              className="inline-flex h-12 items-center rounded-full bg-[#c2a567] px-7 text-[11px] uppercase tracking-[0.22em] text-[#0a0f1d] transition-colors hover:bg-[#d1b67c]"
            >
              {HL_HERO.primaryCta}
            </button>
            <a
              href="#rescue-sprint"
              className="inline-flex h-12 items-center rounded-full border border-white/15 px-7 text-[11px] uppercase tracking-[0.22em] text-[#f4ede0]/80 transition-colors hover:border-[#c2a567]/40 hover:text-[#e9d5a3]"
            >
              {HL_HERO.secondaryCta}
            </a>
          </div>

          <p className="mt-6 max-w-lg text-[13px] leading-relaxed text-[#f4ede0]/45">
            {HL_HERO.trustLine}
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1612] via-[#0a0f1d] to-[#06080f] shadow-[0_50px_140px_-40px_rgba(0,0,0,0.9)]">
            {!imgError && (
              <Image
                src="/photos/portrait-lounge.jpg"
                alt="Jamaur Johnson, founder of LIV8 AI — fractional HighLevel operations for agencies."
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
                onError={() => setImgError(true)}
              />
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080f] via-transparent to-[#c2a567]/10"
            />
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.28em] text-[#f4ede0]/45">
            <span>Jamaur Johnson · LIV8 AI</span>
            <span className="text-[#c2a567]/80">HighLevel Operations</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Pain ─────────────────────────── */

function Pain() {
  return (
    <section className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Eyebrow>{HL_PAIN.eyebrow}</Eyebrow>
        <h2
          className="mt-4 text-balance text-3xl leading-tight text-[#f4ede0] sm:text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          {HL_PAIN.headline}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[#f4ede0]/65">{HL_PAIN.subhead}</p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {HL_PAIN.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#0c111c] p-4 text-sm leading-relaxed text-[#f4ede0]/80"
            >
              <span className="mt-0.5 text-[#c2a567]">✕</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 border-l-2 border-[#c2a567]/50 pl-5 text-base leading-relaxed text-[#f4ede0]/75">
          {HL_PAIN.closer}
        </p>
      </div>
    </section>
  );
}

/* ─────────────────── Rescue Sprint (flagship offer) ─────────────────── */

function RescueSprint({ onRequestAudit }: { onRequestAudit: () => void }) {
  return (
    <section id="rescue-sprint" className="relative border-t border-white/5 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#c2a567]/[0.06] to-transparent"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <Eyebrow center>{HL_RESCUE.eyebrow}</Eyebrow>
          <h2
            className="mx-auto mt-4 max-w-3xl text-balance text-3xl leading-tight text-[#f4ede0] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            {HL_RESCUE.name}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#f4ede0]/70">
            {HL_RESCUE.promise}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          {/* Deliverables */}
          <div className="rounded-2xl border border-white/10 bg-[#0c111c] p-7 sm:p-8">
            <h3 className="text-[11px] uppercase tracking-[0.28em] text-[#c2a567]/90">
              {HL_RESCUE.includesTitle}
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {HL_RESCUE.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#f4ede0]/80">
                  <span className="mt-0.5 text-[#c2a567]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Price + guarantee */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-[#c2a567]/35 bg-gradient-to-br from-[#161310] to-[#0a0f1d] p-7 text-center shadow-[0_30px_80px_-30px_rgba(194,165,103,0.35)]">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#c2a567]/85">
                {HL_RESCUE.priceLabel}
              </div>
              <div
                className="mt-2 text-5xl text-[#f4ede0]"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                {HL_RESCUE.price}
              </div>
              <div className="mt-2 text-xs leading-relaxed text-[#f4ede0]/55">
                {HL_RESCUE.priceNote}
              </div>
              <button
                onClick={onRequestAudit}
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#c2a567] text-[11px] uppercase tracking-[0.22em] text-[#0a0f1d] transition-colors hover:bg-[#d1b67c]"
              >
                {HL_RESCUE.cta}
              </button>
              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[#c2a567]/70">
                {HL_RESCUE.spotsNote}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0c111c] p-6">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-[#c2a567]/90">
                <span>◆</span>
                {HL_RESCUE.guaranteeLabel}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#f4ede0]/70">
                {HL_RESCUE.guarantee}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Why ─────────────────────────── */

function Why() {
  return (
    <section id="why" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Eyebrow>{HL_WHY.eyebrow}</Eyebrow>
          <h2
            className="mt-4 text-balance text-3xl leading-tight text-[#f4ede0] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            {HL_WHY.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#f4ede0]/65">{HL_WHY.subhead}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HL_WHY.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#0c111c] p-6 transition-colors hover:border-[#c2a567]/30"
            >
              <div className="text-2xl text-[#c2a567]">{item.glyph}</div>
              <h3 className="mt-4 text-lg text-[#f4ede0]" style={{ fontFamily: "var(--font-editorial)" }}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#f4ede0]/65">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Shift (before/after) ─────────────────────── */

function Shift() {
  return (
    <section className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <h2
          className="text-balance text-center text-3xl leading-tight text-[#f4ede0] sm:text-4xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          What Changes After We Go In
        </h2>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          {HL_SHIFT.map((row, i) => (
            <div
              key={row.before}
              className={`grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-4 text-sm sm:px-6 ${
                i % 2 ? "bg-[#0c111c]" : "bg-[#0a0f18]"
              }`}
            >
              <span className="text-[#f4ede0]/45 line-through decoration-white/20">{row.before}</span>
              <span className="text-[#c2a567]" aria-hidden="true">→</span>
              <span className="text-[#f4ede0]/90">{row.after}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Ops Desk (pricing) ─────────────────────── */

function OpsDesk({ onRequestAudit }: { onRequestAudit: () => void }) {
  return (
    <section id="ops-desk" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Eyebrow>{HL_OPS_DESK.eyebrow}</Eyebrow>
          <h2
            className="mt-4 text-balance text-3xl leading-tight text-[#f4ede0] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            {HL_OPS_DESK.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#f4ede0]/65">{HL_OPS_DESK.subhead}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {HL_OPS_DESK.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                plan.featured
                  ? "border-[#c2a567]/50 bg-gradient-to-br from-[#161310] to-[#0a0f1d] shadow-[0_30px_80px_-30px_rgba(194,165,103,0.3)]"
                  : "border-white/10 bg-[#0c111c]"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-[#c2a567] px-3 py-1 text-[9px] uppercase tracking-[0.24em] text-[#0a0f1d]">
                  Most Agencies Start Here
                </span>
              )}
              <h3 className="text-lg text-[#f4ede0]" style={{ fontFamily: "var(--font-editorial)" }}>
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span
                  className="text-4xl text-[#f4ede0]"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {plan.price}
                </span>
                <span className="text-xs text-[#f4ede0]/50">{plan.cadence}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#f4ede0]/60">{plan.best}</p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#f4ede0]/80">
                    <span className="mt-0.5 text-[#c2a567]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={onRequestAudit}
                className={`mt-7 inline-flex h-11 w-full items-center justify-center rounded-full text-[10px] uppercase tracking-[0.22em] transition-colors ${
                  plan.featured
                    ? "bg-[#c2a567] text-[#0a0f1d] hover:bg-[#d1b67c]"
                    : "border border-white/15 text-[#f4ede0]/80 hover:border-[#c2a567]/40 hover:text-[#e9d5a3]"
                }`}
              >
                Start With An Audit
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm leading-relaxed text-[#f4ede0]/50">
          {HL_OPS_DESK.footnote}
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── Pull quote ─────────────────────────── */

function PullQuote() {
  return (
    <section className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="text-5xl text-[#c2a567]/50" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote
          className="mt-2 text-balance text-2xl leading-snug text-[#f4ede0] sm:text-3xl md:text-4xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          {HL_PULL_QUOTE.body}
        </blockquote>
        <div className="mt-6 text-[11px] uppercase tracking-[0.28em] text-[#c2a567]/85">
          {HL_PULL_QUOTE.attribution}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Proof ─────────────────────────── */

function Proof() {
  const hasTestimonials = HL_PROOF.testimonials.length > 0;
  return (
    <section id="proof" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Eyebrow>{HL_PROOF.eyebrow}</Eyebrow>
          <h2
            className="mt-4 text-balance text-3xl leading-tight text-[#f4ede0] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            {HL_PROOF.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#f4ede0]/65">{HL_PROOF.subhead}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HL_PROOF.categories.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-[#0c111c] p-6">
              <h3 className="text-base text-[#f4ede0]" style={{ fontFamily: "var(--font-editorial)" }}>
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#f4ede0]/65">{c.body}</p>
            </div>
          ))}
        </div>

        {hasTestimonials ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {HL_PROOF.testimonials.map((t) => (
              <figure key={t.attribution} className="rounded-2xl border border-white/10 bg-[#0c111c] p-6">
                <blockquote className="text-sm leading-relaxed text-[#f4ede0]/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#c2a567]/80">
                  {t.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="mt-8 text-center text-xs uppercase tracking-[0.22em] text-[#f4ede0]/35">
            {HL_PROOF.testimonialPlaceholder}
          </p>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────── Audit section (form) ─────────────────────── */

function AuditSection() {
  return (
    <section id="audit" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <Eyebrow>{HL_FINAL_CTA.eyebrow}</Eyebrow>
          <h2
            className="mt-4 text-balance text-3xl leading-tight text-[#f4ede0] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            {HL_FINAL_CTA.headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#f4ede0]/65">{HL_FINAL_CTA.subhead}</p>
          <ul className="mt-7 flex flex-col gap-3">
            {HL_FINAL_CTA.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-[#f4ede0]/80">
                <span className="mt-0.5 text-[#c2a567]">✦</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <HighLevelAuditForm />
      </div>
    </section>
  );
}

/* ─────────────────────────── FAQ ─────────────────────────── */

function Faq() {
  return (
    <section id="faq" className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2
          className="text-balance text-center text-3xl leading-tight text-[#f4ede0] sm:text-4xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          Questions Agency Owners Ask
        </h2>
        <div className="mt-10 flex flex-col gap-3">
          {HL_FAQ.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-white/10 bg-[#0c111c] p-5 [&_summary]:cursor-pointer"
            >
              <summary className="flex items-center justify-between gap-4 text-sm font-medium text-[#f4ede0] marker:content-none">
                {item.q}
                <span className="text-[#c2a567] transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#f4ede0]/65">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Final CTA ─────────────────────────── */

function FinalCta({ onRequestAudit }: { onRequestAudit: () => void }) {
  return (
    <section className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2
          className="text-balance text-3xl leading-[1.1] text-[#f4ede0] sm:text-5xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          {HL_FINAL_CTA.headline}
        </h2>
        <button
          onClick={onRequestAudit}
          className="mt-9 inline-flex h-13 items-center rounded-full bg-[#c2a567] px-8 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[#0a0f1d] transition-colors hover:bg-[#d1b67c]"
        >
          {HL_FINAL_CTA.cta}
        </button>
      </div>
    </section>
  );
}

/* ─────────────────────────── Footer ─────────────────────────── */

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#05070d] py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="text-lg text-[#f4ede0]" style={{ fontFamily: "var(--font-editorial)" }}>
              {HL_FOOTER.brand}
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#f4ede0]/55">
              {HL_FOOTER.blurb}
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#c2a567]/80">Explore</div>
            <ul className="mt-4 flex flex-col gap-2.5">
              {HL_FOOTER.nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-[#f4ede0]/60 transition-colors hover:text-[#e9d5a3]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#c2a567]/80">Connect</div>
            <ul className="mt-4 flex flex-col gap-2.5">
              {HL_FOOTER.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#f4ede0]/60 transition-colors hover:text-[#e9d5a3]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              {HL_FOOTER.legal.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-[#f4ede0]/60 transition-colors hover:text-[#e9d5a3]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-[11px] leading-relaxed text-[#f4ede0]/35">
          {HL_FOOTER.disclaimer}
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────── Sticky mobile CTA ─────────────────────── */

function StickyMobileCta({ onRequestAudit }: { onRequestAudit: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#06080f]/95 p-3 backdrop-blur-md md:hidden">
      <button
        onClick={onRequestAudit}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#c2a567] text-[11px] uppercase tracking-[0.22em] text-[#0a0f1d]"
      >
        {HL_AUDIT_FORM.cta}
      </button>
    </div>
  );
}

/* ─────────────────────────── Shared ─────────────────────────── */

function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/85 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="inline-block h-px w-8 bg-[#c2a567]/60" />
      {children}
    </div>
  );
}
