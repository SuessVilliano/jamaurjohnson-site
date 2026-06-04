"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ABOUT } from "@/lib/portfolio-data";

const PILLARS = [
  { label: "AI Automation", color: "from-cyan-400 to-blue-600" },
  { label: "Music", color: "from-pink-500 to-rose-600" },
  { label: "Trading Education", color: "from-fuchsia-500 to-violet-700" },
  { label: "Health", color: "from-emerald-400 to-cyan-600" },
  { label: "Solar", color: "from-amber-400 to-orange-600" },
  { label: "Finance", color: "from-violet-500 to-indigo-700" },
  { label: "Books", color: "from-sky-400 to-blue-700" },
  { label: "Platforms", color: "from-purple-500 to-fuchsia-600" },
];

export function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow="About Jamaur" title={ABOUT.headline} />

        <p className="-mt-6 mb-12 text-center text-xs uppercase tracking-[0.32em] text-cyan-300/70">
          {ABOUT.aliases}
        </p>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Editorial photo pair */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-12 lg:mb-0 lg:sticky lg:top-24"
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/15 via-violet-500/15 to-transparent blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
              <Image
                src="/photos/portrait-bw.jpg"
                alt="Jamaur Johnson"
                width={786}
                height={786}
                className="block h-auto w-full"
              />
            </div>

            <div className="absolute -bottom-6 right-3 w-32 overflow-hidden rounded-2xl border-2 border-white/15 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] sm:-bottom-8 sm:right-5 sm:w-48">
              <Image
                src="/photos/portrait-green.jpg"
                alt="Jamaur Johnson"
                width={384}
                height={512}
                className="block h-auto w-full"
              />
            </div>
          </motion.div>

          {/* Text + pillars */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5 text-base sm:text-lg text-white/80 leading-relaxed"
            >
              {ABOUT.intro.map((p, i) => (
                <p key={i} className={i === ABOUT.intro.length - 1 ? "text-white/65" : undefined}>
                  {p}
                </p>
              ))}
            </motion.div>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="extended"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="relative space-y-5 pt-2 text-base sm:text-lg text-white/70 leading-relaxed">
                    <div className="absolute -left-3 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-violet-500/30 to-transparent" />
                    {ABOUT.extended.map((p, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                      >
                        {p}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="group inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span>{expanded ? "Collapse" : "Read the full story"}</span>
              <span
                className={`text-cyan-300 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              >
                ↓
              </span>
            </button>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl glass p-4 flex items-center gap-3"
                >
                  <span
                    className={`h-8 w-8 rounded-xl bg-gradient-to-br ${p.color} shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]`}
                  />
                  <span className="text-sm text-white/85">{p.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
