"use client";

import { FINAL_CTA } from "@/lib/perspective-content";

export function FinalCTA({ onRequestAudit }: { onRequestAudit: () => void }) {
  return (
    <section id="growth" className="relative py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <h2
          className="text-balance text-3xl leading-[1.1] text-[#f4ede0] sm:text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          {FINAL_CTA.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#f4ede0]/65 sm:text-lg">
          {FINAL_CTA.subheadline}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onRequestAudit}
            className="inline-flex h-13 items-center rounded-full bg-[#c2a567] px-8 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[#0a0f1d] transition-colors hover:bg-[#d1b67c]"
          >
            {FINAL_CTA.primary}
          </button>
          <a
            href="#insights"
            className="inline-flex h-13 items-center rounded-full border border-white/15 px-8 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[#f4ede0]/80 transition-colors hover:border-[#c2a567]/40 hover:text-[#e9d5a3]"
          >
            {FINAL_CTA.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
