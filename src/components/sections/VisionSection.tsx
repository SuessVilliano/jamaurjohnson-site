"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

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

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Press portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 mx-auto w-full max-w-xs sm:max-w-sm lg:order-1"
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-violet-500/25 via-cyan-400/15 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/12 shadow-[0_50px_140px_-40px_rgba(139,92,246,0.65)]">
              <Image
                src="/photos/portrait-press.jpg"
                alt="Jamaur Johnson"
                width={786}
                height={1048}
                className="block h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>

          {/* Text */}
          <div className="order-1 text-center lg:order-2 lg:text-left">
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
              className="mt-6 text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-gradient leading-[1.05]"
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
        </div>
      </div>
    </section>
  );
}
