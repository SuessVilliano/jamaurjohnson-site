"use client";

import { PILLARS, SOCIALS } from "@/lib/portfolio-data";
import { OverlayShell } from "./OverlayShell";

const VALUES = [
  { label: "Family", line: "Three sons. The reason behind every system." },
  { label: "Ownership", line: "Stack assets, not subscriptions." },
  { label: "Freedom", line: "Build so the system runs without you." },
  { label: "Legacy", line: "Compounding over decades, not quarters." },
];

export function ElevateOverlay() {
  const pillar = PILLARS.find((p) => p.key === "ELEVATE")!;

  return (
    <OverlayShell pillar="elevate" id="elevate" aliases={["connect", "vision"]}>
      <div className="relative h-full w-full flex items-center justify-center px-5 sm:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-amber-200 pulse-on-hover">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.9)]" />
              Pillar 04 · {pillar.tagline}
            </div>
            <h2
              className="mt-5 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gradient"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              ELEVATE
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
              {pillar.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-4 mb-8">
            {VALUES.map((v) => (
              <div key={v.label} className="rounded-2xl glass p-4 pulse-on-hover transition-transform hover:-translate-y-1">
                <div
                  className="text-sm uppercase tracking-[0.2em] text-amber-200"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {v.label}
                </div>
                <p className="mt-1 text-xs text-white/60 leading-relaxed">{v.line}</p>
              </div>
            ))}
          </div>

          <div>
            <div className="mb-3 text-center text-[10px] uppercase tracking-[0.25em] text-white/60">
              Connect · Build in Public
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {SOCIALS.map((s) =>
                s.url ? (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-white/80 hover:text-white pulse-on-hover transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                    {s.platform}
                    <span className="text-white/45">{s.handle}</span>
                  </a>
                ) : (
                  <span
                    key={s.platform}
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-white/55"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    {s.platform}
                    <span className="text-white/30">soon</span>
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </OverlayShell>
  );
}
