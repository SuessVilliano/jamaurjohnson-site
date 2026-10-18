"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MUSIC } from "@/lib/portfolio-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
          description="Original music, instrumentals, and healing frequencies — sound engineered for focus, performance, and elevation. Tap any cover to listen."
        />

        <div className="mb-10 overflow-hidden rounded-3xl border border-cyan-300/25 bg-white/[0.04] p-5 sm:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Featured Album · Original Motion Picture Soundtrack</p>
              <h3 className="mt-2 text-3xl font-semibold text-white sm:text-4xl" style={{ fontFamily: "var(--font-orbitron)" }}>TIME BACK</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65">A cinematic music journey through creativity, technology, purpose, and reclaiming your time.</p>
            </div>
            <a href="https://music.apple.com/us/album/time-back-the-original-motion-picture-soundtrack/6813829169" target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Listen on Apple Music ↗</a>
          </div>
          <iframe
            title="TIME BACK — The Original Motion Picture Soundtrack on Apple Music"
            src="https://embed.music.apple.com/us/album/time-back-the-original-motion-picture-soundtrack/6813829169"
            className="w-full rounded-xl border-0"
            height="450"
            loading="lazy"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          />
        </div>

        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {MUSIC.map((m, i) => {
            const accent = ACCENTS[m.accent];
            return (
              <motion.a
                key={m.title}
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col gap-5 overflow-hidden rounded-3xl glass p-5 ${accent.ring}`}
              >
                <div
                  className={`absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${accent.from} ${accent.to} opacity-30 blur-3xl transition-opacity duration-700 group-hover:opacity-50`}
                />

                {/* Cover art */}
                <div className="relative overflow-hidden rounded-2xl">
                  {m.cover && (
                    <Image
                      src={m.cover}
                      alt={`${m.title} cover art`}
                      width={450}
                      height={450}
                      className="block aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                  <div
                    className={`absolute bottom-3 right-3 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-gradient-to-br ${accent.from} ${accent.to} text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100`}
                    aria-hidden
                  >
                    <span className="ml-0.5 text-lg">▶</span>
                  </div>
                </div>

                {/* Meta */}
                <div className="relative flex flex-1 flex-col">
                  <h3
                    className="text-lg sm:text-xl font-semibold text-white"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {m.title}
                  </h3>
                  {m.artist && <div className="mt-0.5 text-xs text-white/55">by {m.artist}</div>}
                  <p className="mt-2 flex-1 text-sm text-white/65 leading-relaxed">
                    {m.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 transition-colors group-hover:text-cyan-200">
                    Listen
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
