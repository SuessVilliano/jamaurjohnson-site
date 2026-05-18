"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { WORLDS } from "@/lib/portfolio-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ScrollJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="worlds" ref={ref} className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="The Scroll Journey"
          title="Five Worlds, One Operating System"
          description="Every project I build orbits one of five worlds. Scroll through to see how the ecosystem connects."
        />

        <motion.div style={{ y }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WORLDS.map((w, i) => (
            <motion.a
              key={w.id}
              href={w.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 sm:p-8 min-h-[280px] flex flex-col justify-end float-slow"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <div
                className={`absolute -top-20 -right-16 h-72 w-72 rounded-full bg-gradient-to-br ${w.color} blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700`}
              />
              <div className="absolute top-5 right-5 text-xs font-mono text-white/40">
                0{i + 1} / 0{WORLDS.length}
              </div>
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.25em] text-white/60 mb-3">
                  {w.tagline}
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {w.name}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed">
                  {w.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 group-hover:text-cyan-200 transition-colors">
                  Enter world
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
