"use client";

import { motion } from "framer-motion";
import { MUSIC } from "@/lib/portfolio-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassButton } from "@/components/ui/GlassButton";

const ACCENTS: Record<string, { from: string; to: string; ring: string }> = {
  aqua: { from: "from-cyan-400", to: "to-blue-600", ring: "shadow-[0_0_60px_-10px_rgba(78,224,255,0.55)]" },
  violet: { from: "from-violet-500", to: "to-fuchsia-600", ring: "shadow-[0_0_60px_-10px_rgba(139,92,246,0.55)]" },
  pink: { from: "from-pink-500", to: "to-rose-600", ring: "shadow-[0_0_60px_-10px_rgba(244,114,182,0.55)]" },
  amber: { from: "from-amber-400", to: "to-orange-600", ring: "shadow-[0_0_60px_-10px_rgba(251,191,36,0.55)]" },
};

export function MusicSection() {
  return (
    <section id="music" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Music World"
          title="An Audio Wall of Frequencies"
          description="Original music, instrumentals, and healing frequencies — sound engineered for focus, performance, and elevation."
        />

        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {MUSIC.map((m, i) => {
            const accent = ACCENTS[m.accent];
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl glass p-6 flex flex-col gap-5 min-h-[240px] ${accent.ring}`}
              >
                <div
                  className={`absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${accent.from} ${accent.to} opacity-30 blur-3xl group-hover:opacity-50 transition-opacity duration-700`}
                />

                <div className="relative flex items-center gap-4">
                  <div
                    className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${accent.from} ${accent.to} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
                    <span className="relative text-white text-2xl" aria-hidden>
                      ♪
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="text-lg sm:text-xl font-semibold text-white truncate"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      {m.title}
                    </h3>
                    {m.artist && (
                      <div className="text-xs text-white/55">by {m.artist}</div>
                    )}
                  </div>
                </div>

                <p className="relative text-sm text-white/65 leading-relaxed flex-1">
                  {m.description}
                </p>

                <div className="relative flex items-center gap-3">
                  {m.link ? (
                    <GlassButton href={m.link} size="sm" variant="primary">
                      Listen
                    </GlassButton>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-xs text-white/45">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                      Releasing soon
                    </span>
                  )}
                </div>

                {/* fake waveform */}
                <div className="relative flex items-end gap-[3px] h-6 opacity-60 group-hover:opacity-90 transition-opacity">
                  {Array.from({ length: 32 }).map((_, idx) => (
                    <span
                      key={idx}
                      className={`block w-[3px] rounded-full bg-gradient-to-t ${accent.from} ${accent.to}`}
                      style={{
                        height: `${20 + Math.abs(Math.sin(idx * 0.7 + i)) * 80}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
