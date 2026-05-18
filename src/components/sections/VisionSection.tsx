"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleField = dynamic(
  () => import("@/components/three/ParticleField").then((m) => m.ParticleField),
  { ssr: false },
);

export function VisionSection() {
  return (
    <section id="vision" className="relative py-28 sm:py-44 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70">
        <ParticleField />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/75"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(139,92,246,0.9)]" />
          The Vision
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gradient leading-[1.05]"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Building Digital Real Estate for the Future
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-7 text-base sm:text-xl text-white/70 leading-relaxed"
        >
          Every company, book, song, platform, and system is part of a larger ecosystem
          designed to help people think better, build faster, trade smarter, create
          freely, and live with more ownership.
        </motion.p>
      </div>
    </section>
  );
}
