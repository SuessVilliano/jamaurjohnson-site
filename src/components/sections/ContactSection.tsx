"use client";

import { motion } from "framer-motion";
import { GlassButton } from "@/components/ui/GlassButton";
import { useBookCall } from "@/components/lead/BookCallContext";

export function ContactSection() {
  const { openModal } = useBookCall();
  return (
    <section id="contact" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-14 text-center"
        >
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/0 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-violet-500/0 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(78,224,255,0.9)]" />
              Open for Collaboration
            </div>

            <h2
              className="mt-6 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gradient leading-[1.05]"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Let&apos;s Build, Collaborate, or Create
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-white/65 text-base sm:text-lg leading-relaxed">
              Founders, artists, traders, builders — if you&apos;re building something
              that elevates people, I want to hear from you.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <GlassButton href="mailto:contact@liv8.co" size="lg" variant="primary">
                Email Me
              </GlassButton>
              <GlassButton onClick={openModal} size="lg" variant="ghost">
                Book a Call
              </GlassButton>
              <GlassButton href="#worlds" size="lg" variant="soft">
                Explore My Work
              </GlassButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
