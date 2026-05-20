"use client";

import { COMPANIES, PILLARS } from "@/lib/portfolio-data";
import { OverlayShell } from "./OverlayShell";

const FEATURED = ["Hybrid Funding", "Trade Hybrid", "Hybrid Holdings"];

const TRADE_PRINCIPLES = [
  { kpi: "Discipline", line: "Process over impulse — execution as identity." },
  { kpi: "Hybrid Edge", line: "Funded traders, signals, automation, and copy as one engine." },
  { kpi: "Ownership", line: "Stack capital into long-arc assets, not noise." },
];

export function TradeOverlay() {
  const pillar = PILLARS.find((p) => p.key === "TRADE")!;
  const featured = COMPANIES.filter((c) => FEATURED.includes(c.name));

  return (
    <OverlayShell pillar="trade" id="trade">
      <div className="relative h-full w-full flex items-center justify-center px-5 sm:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-violet-200 pulse-on-hover">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(139,92,246,0.9)]" />
              Pillar 02 · {pillar.tagline}
            </div>
            <h2
              className="mt-5 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gradient"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              TRADE
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
              {pillar.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            {TRADE_PRINCIPLES.map((p) => (
              <div key={p.kpi} className="rounded-2xl glass p-5 pulse-on-hover transition-transform hover:-translate-y-1">
                <div
                  className="text-sm uppercase tracking-[0.2em] text-violet-200"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {p.kpi}
                </div>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.line}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {featured.map((c) => (
              <a
                key={c.name}
                href={c.link ?? "#"}
                target={c.link ? "_blank" : undefined}
                rel={c.link ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-3xl glass p-4 pulse-on-hover transition-transform hover:-translate-y-2"
              >
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-25 group-hover:opacity-80 transition-opacity"
                  style={{ background: `radial-gradient(circle, rgba(139,92,246,0.45), transparent 70%)` }}
                />
                <div className="relative flex items-center justify-between">
                  <h3 className="text-base font-semibold text-white" style={{ fontFamily: "var(--font-orbitron)" }}>
                    {c.name}
                  </h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-violet-200/70 border border-violet-300/30 rounded-full px-2 py-0.5">
                    {c.category}
                  </span>
                </div>
                <p className="relative mt-2 text-xs text-white/55 leading-relaxed line-clamp-2">
                  {c.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </OverlayShell>
  );
}
