"use client";

import { motion } from "framer-motion";
import { GlassButton } from "@/components/ui/GlassButton";

/**
 * Homepage cross-link banner for Jamaur's digital real estate thesis.
 * HighLevel and affiliate marketing are supporting layers inside the broader strategy.
 */
export function HighLevelCTA() {
  return (
    <section id="highlevel" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl glass px-6 py-12 sm:px-12 sm:py-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-10 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/20 via-violet-500/15 to-transparent blur-3xl"
          />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(78,224,255,0.8)]" />
                Digital Real Estate
              </div>

              <h2
                className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight text-gradient"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Build Assets That Keep Creating Value After The First Move
              </h2>

              <p className="mt-5 max-w-xl text-base sm:text-lg text-white/65 leading-relaxed">
                Content, audience, automation, software, affiliate relationships, data, and recurring revenue can all become digital property when the work keeps producing value after the original effort is over.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55">
                <span className="inline-flex items-center gap-2">
                  <span className="text-cyan-300">✦</span> HighLevel as operating infrastructure
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="text-cyan-300">✦</span> Affiliate marketing as a recurring-revenue layer
                </span>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
              <GlassButton href="https://speakwith.us/jamaurjohnson" size="lg" variant="primary">
                Schedule Time With Me →
              </GlassButton>
              <GlassButton href="/digital-real-estate" size="lg" variant="ghost">
                Explore Digital Real Estate →
              </GlassButton>
              <span className="max-w-xs text-left text-xs leading-relaxed text-white/40 lg:text-right">
                Best fit for established affiliates, high producers, founders, and serious operators building for leverage.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
