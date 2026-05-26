"use client";

import Image from "next/image";
import { useState } from "react";
import { HERO, PERSPECTIVE_META } from "@/lib/perspective-content";

export function PerspectiveHero({ onRequestAudit }: { onRequestAudit: () => void }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="top"
      className="relative pt-32 sm:pt-40 pb-16 sm:pb-24"
    >
      {/* Ambient warm spotlight from above-right, gives the page a chandelier feel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 left-1/2 h-[600px] bg-gradient-to-bl from-[#c2a567]/15 via-[#c2a567]/5 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:3px_3px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-end">
        <div>
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/85">
            <span className="inline-block h-px w-8 bg-[#c2a567]/60" />
            {HERO.eyebrow}
          </div>

          <h1
            className="mt-6 text-balance text-4xl leading-[1.05] tracking-tight text-[#f4ede0] sm:text-5xl md:text-6xl lg:text-[68px]"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            {HERO.headline}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-[#f4ede0]/70 sm:text-lg">
            {HERO.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-[#f4ede0]/55">
            <span className="text-[#f4ede0]/80">{PERSPECTIVE_META.byline}</span>
            <span aria-hidden="true">·</span>
            <span>{PERSPECTIVE_META.readingTime}</span>
            <span aria-hidden="true">·</span>
            <span>Published {PERSPECTIVE_META.publishedDate}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onRequestAudit}
              className="inline-flex h-12 items-center rounded-full bg-[#c2a567] px-7 text-[11px] uppercase tracking-[0.22em] text-[#0a0f1d] transition-colors hover:bg-[#d1b67c]"
            >
              Request a Business Audit
            </button>
            <ShareBar />
          </div>
        </div>

        {/* Portrait */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1612] via-[#0a0f1d] to-[#06080f] shadow-[0_50px_140px_-40px_rgba(0,0,0,0.9)]">
            {!imgError && (
              <Image
                src="/photos/portrait-lounge.png"
                alt="Jamaur Johnson, photographed in a luxury lounge — a feature portrait for LIV8 Perspective."
                fill
                priority
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
                onError={() => setImgError(true)}
              />
            )}

            {/* Always-on warm chandelier glow & cinematic vignette overlays */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080f] via-transparent to-[#c2a567]/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 [background:radial-gradient(140%_80%_at_50%_-10%,rgba(194,165,103,0.18),transparent_60%)]"
            />
          </div>

          {/* Magazine-style caption strip below the image */}
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.28em] text-[#f4ede0]/45">
            <span>Portrait · {PERSPECTIVE_META.publishedDate}</span>
            <span className="text-[#c2a567]/80">LIV8 Perspective</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShareBar() {
  return (
    <div className="flex items-center gap-2 text-[#f4ede0]/55">
      <span className="text-[10px] uppercase tracking-[0.28em]">Share</span>
      {SHARE_LINKS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${s.label}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[11px] transition-colors hover:border-[#c2a567]/40 hover:text-[#e9d5a3]"
        >
          {s.glyph}
        </a>
      ))}
    </div>
  );
}

const SHARE_TARGET = "https://jamaurjohnson.com/perspective";
const SHARE_TEXT =
  "The Operator Quietly Rebuilding Businesses Behind The Scenes — a LIV8 Perspective feature";

const SHARE_LINKS = [
  {
    label: "X",
    glyph: "𝕏",
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_TARGET)}`,
  },
  {
    label: "LinkedIn",
    glyph: "in",
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_TARGET)}`,
  },
  {
    label: "Facebook",
    glyph: "f",
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_TARGET)}`,
  },
  {
    label: "Email",
    glyph: "✉",
    href: `mailto:?subject=${encodeURIComponent(SHARE_TEXT)}&body=${encodeURIComponent(SHARE_TARGET)}`,
  },
];
