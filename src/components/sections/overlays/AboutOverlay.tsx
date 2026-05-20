"use client";

import { ABOUT, HERO } from "@/lib/portfolio-data";
import { OverlayShell } from "./OverlayShell";

const STATS = [
  { value: "9", label: "Companies" },
  { value: "19", label: "Platforms" },
  { value: "7", label: "Books" },
  { value: "8", label: "Music Projects" },
];

export function AboutOverlay() {
  return (
    <OverlayShell pillar="about" id="about">
      <div className="relative h-full w-full flex items-center justify-center px-5 sm:px-8 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/75 pulse-on-hover">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(139,92,246,0.9)]" />
            About Jamaur
          </div>

          <h2
            className="mt-6 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gradient leading-[1.05]"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {ABOUT.headline}
          </h2>

          <p className="mt-6 mx-auto max-w-3xl text-sm sm:text-lg text-white/70 leading-relaxed">
            {ABOUT.paragraphs[0]}
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl glass p-4 pulse-on-hover transition-transform hover:-translate-y-1"
              >
                <div
                  className="text-2xl sm:text-3xl font-semibold text-gradient"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs sm:text-sm text-white/45 max-w-2xl mx-auto">
            {HERO.roles.slice(0, 6).join(" · ")}
          </p>
        </div>
      </div>
    </OverlayShell>
  );
}
