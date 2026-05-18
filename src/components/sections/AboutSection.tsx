"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
  return (
    <section id="about" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow="About Jamaur" title="A Builder of Digital Ecosystems" />

        <div className="grid gap-10 lg:grid-cols-5 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-5 text-base sm:text-lg text-white/75 leading-relaxed"
          >
            <p>
              <span className="text-white font-medium">Jamaur Johnson</span> is a creator,
              founder, author, trader, and builder of digital ecosystems. His work spans
              AI automation, music, trading education, health, solar, finance, books, and
              digital platforms.
            </p>
            <p>
              His mission is to build systems that{" "}
              <span className="text-cyan-300">elevate people</span>, unlock{" "}
              <span className="text-violet-300">freedom</span>, and turn ideas into{" "}
              <span className="text-fuchsia-300">real-world assets</span>.
            </p>
            <p className="text-white/55">
              Every company, book, song, and platform is part of one larger story — a
              long-range bet on creators, ownership, and consciousness.
            </p>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`rounded-2xl glass p-4 flex items-center gap-3`}
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
    </section>
  );
}
