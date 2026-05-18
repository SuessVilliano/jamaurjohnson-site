"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
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

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-32 sm:pt-36 pb-24 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Text column */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
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
            className="mt-7 text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[0.95] text-gradient"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {HERO.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-5 text-base sm:text-xl text-white/85 max-w-xl"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-4 text-sm sm:text-base text-white/60 max-w-xl leading-relaxed"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <GlassButton href="#worlds" variant="primary" size="md">
              Explore My Universe
            </GlassButton>
            <GlassButton href="#books" variant="ghost" size="md">
              View Books
            </GlassButton>
            <GlassButton href="#music" variant="ghost" size="md">
              Listen to Music
            </GlassButton>
            <GlassButton href="#contact" variant="soft" size="md">
              Collaborate
            </GlassButton>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/25 via-violet-500/20 to-fuchsia-500/15 blur-3xl" />
          <div className="relative float-slow overflow-hidden rounded-[1.75rem] border border-white/12 shadow-[0_50px_140px_-40px_rgba(139,92,246,0.7)]">
            <Image
              src="/photos/portrait-neon.jpg"
              alt="Jamaur Johnson"
              width={786}
              height={786}
              priority
              className="block h-auto w-full"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
          </div>
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
