"use client";

import Image from "next/image";
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

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Editorial photo pair */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-12 lg:mb-0"
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

            <div className="absolute -bottom-6 -right-2 w-36 overflow-hidden rounded-2xl border-2 border-white/15 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] sm:-bottom-8 sm:-right-6 sm:w-52">
              <Image
                src="/photos/portrait-street.jpg"
                alt="Jamaur Johnson"
                width={786}
                height={786}
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
              className="space-y-5 text-base sm:text-lg text-white/75 leading-relaxed"
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

            <div className="grid grid-cols-2 gap-3">
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
