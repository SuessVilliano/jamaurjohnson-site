"use client";

import { COMPANIES, PILLARS, SITES } from "@/lib/portfolio-data";
import { OverlayShell } from "./OverlayShell";

const FEATURED = ["LIV8", "LIV8Ai", "Hybrid Funding", "Trade Hybrid"];

export function BuildOverlay() {
  const pillar = PILLARS.find((p) => p.key === "BUILD")!;
  const featured = COMPANIES.filter((c) => FEATURED.includes(c.name));

  return (
    <OverlayShell pillar="build" id="build" aliases={["system", "companies", "network", "expertise"]}>
      <div className="relative h-full w-full flex items-center justify-center px-5 sm:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-cyan-200 pulse-on-hover">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(78,224,255,0.9)]" />
              Pillar 01 · {pillar.tagline}
            </div>
            <h2
              className="mt-5 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gradient"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              BUILD
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
              {pillar.description}
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((c) => (
              <a
                key={c.name}
                href={c.link ?? "#"}
                target={c.link ? "_blank" : undefined}
                rel={c.link ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-3xl glass p-5 pulse-on-hover transition-transform hover:-translate-y-2"
              >
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full blur-3xl opacity-25 group-hover:opacity-80 transition-opacity"
                  style={{ background: `radial-gradient(circle, rgba(78,224,255,0.45), transparent 70%)` }}
                />
                <div className="relative flex items-start justify-between">
                  <h3
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {c.name}
                  </h3>
                  <span className="shrink-0 text-[9px] uppercase tracking-[0.2em] text-cyan-200/70 border border-cyan-300/30 rounded-full px-2 py-0.5">
                    {c.category}
                  </span>
                </div>
                <p className="relative mt-3 text-xs text-white/55 leading-relaxed line-clamp-3">
                  {c.description}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.25em] text-white/50">
            <span>
              <strong className="text-cyan-200">{COMPANIES.length}</strong> Companies
            </span>
            <span className="opacity-30">|</span>
            <span>
              <strong className="text-cyan-200">{SITES.length}</strong> Live Sites
            </span>
            <span className="opacity-30">|</span>
            <span>Digital Real Estate</span>
          </div>
        </div>
      </div>
    </OverlayShell>
  );
}
