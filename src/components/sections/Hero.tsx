"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { HERO } from "@/lib/portfolio-data";
import { GlassButton } from "@/components/ui/GlassButton";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false },
);

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <HeroScene />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-black/30 to-black" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-32 sm:pt-40 pb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(78,224,255,0.9)]" />
          Welcome to the Universe
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[0.95] text-gradient"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {HERO.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-5 text-base sm:text-xl text-white/85 max-w-2xl"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-4 text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed"
        >
          {HERO.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          <GlassButton href="#worlds" variant="primary" size="lg">
            Explore My Universe
          </GlassButton>
          <GlassButton href="#books" variant="ghost" size="lg">
            View Books
          </GlassButton>
          <GlassButton href="#companies" variant="ghost" size="lg">
            View Companies
          </GlassButton>
          <GlassButton href="#music" variant="ghost" size="lg">
            Listen to Music
          </GlassButton>
          <GlassButton href="#contact" variant="soft" size="lg">
            Collaborate
          </GlassButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] uppercase"
      >
        Scroll
      </motion.div>
    </section>
  );
}
