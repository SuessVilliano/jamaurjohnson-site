"use client";

import { CONTACT_EMAIL, YOUTUBE_URL } from "@/lib/portfolio-data";
import { GlassButton } from "@/components/ui/GlassButton";
import { OverlayShell } from "./OverlayShell";

export function OutroOverlay() {
  return (
    <OverlayShell pillar="outro" id="outro" aliases={["contact"]}>
      <div className="relative h-full w-full flex items-center justify-center px-5 sm:px-8 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/75 pulse-on-hover">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(78,224,255,0.9)]" />
            Contact
          </div>

          <h2
            className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gradient leading-[1.05]"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Let&rsquo;s Build Something.
          </h2>

          <p className="mt-5 mx-auto max-w-xl text-sm sm:text-base text-white/65 leading-relaxed">
            For collaborations, ecosystem partnerships, automation builds, or
            speaking — the line is open.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <GlassButton href={`mailto:${CONTACT_EMAIL}`} variant="primary" size="lg">
              {CONTACT_EMAIL}
            </GlassButton>
            <GlassButton href={YOUTUBE_URL} variant="ghost" size="lg">
              Watch on YouTube
            </GlassButton>
          </div>

          <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-white/35">
            © {new Date().getFullYear()} Jamaur Johnson · LIV8 Holdings
          </p>
        </div>
      </div>
    </OverlayShell>
  );
}
