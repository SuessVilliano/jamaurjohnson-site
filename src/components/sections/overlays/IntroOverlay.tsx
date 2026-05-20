"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { HERO, TRUST_BADGES, YOUTUBE_URL, portraitById } from "@/lib/portfolio-data";
import { GlassButton } from "@/components/ui/GlassButton";
import { BrandImage } from "@/components/ui/BrandImage";
import { OverlayShell } from "./OverlayShell";

function RoleCycle() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % HERO.roles.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className="relative block h-[1.6em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 text-aqua-glow"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {HERO.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const ORBIT_TAGS = ["GHL", "AI", "SaaS", "FinTech"];

export function IntroOverlay() {
  return (
    <OverlayShell pillar="intro" id="top">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/50" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-28 sm:pt-36 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/80 pulse-on-hover">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(78,224,255,0.9)]" />
              Welcome to the Universe
            </div>

            <h1
              className="mt-6 text-[2.7rem] leading-[0.95] sm:text-6xl md:text-7xl font-semibold tracking-tight text-gradient"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              JAMAUR
              <br />
              JOHNSON
            </h1>

            <div className="mt-4 text-lg sm:text-2xl font-medium w-full">
              <RoleCycle />
            </div>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-white/65 leading-relaxed">
              {HERO.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <GlassButton href="#build" variant="primary" size="lg">
                Explore My Universe
              </GlassButton>
              <GlassButton href={YOUTUBE_URL} variant="ghost" size="lg">
                Watch on YouTube
              </GlassButton>
              <GlassButton href="#build" variant="ghost" size="lg">
                View Companies
              </GlassButton>
              <GlassButton href="#outro" variant="soft" size="lg">
                Collaborate
              </GlassButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle,rgba(78,224,255,0.28),transparent_65%)] blur-2xl" />
            <div className="float-soft">
              <BrandImage
                portrait={portraitById("cyber")}
                aspect="aspect-[4/5]"
                priority
                showCaption
                position="center 22%"
              />
            </div>

            {ORBIT_TAGS.map((tag, i) => {
              const spots = [
                "-left-3 top-10",
                "-right-3 top-1/3",
                "-left-4 bottom-24",
                "-right-4 bottom-10",
              ];
              return (
                <div
                  key={tag}
                  className={`absolute ${spots[i]} glass rounded-full px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-200 float-slow pulse-on-hover`}
                  style={{ animationDelay: `${i * 0.7}s` }}
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-14 sm:mt-20 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#03040a] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#03040a] to-transparent" />
          <div className="flex w-max marquee-track gap-3">
            {[...TRUST_BADGES, ...TRUST_BADGES].map((b, i) => (
              <span
                key={`${b}-${i}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full glass px-4 py-2 text-xs sm:text-sm text-white/75"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-[10px] tracking-[0.3em] uppercase">
        Scroll
      </div>
    </OverlayShell>
  );
}
