"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlassButton } from "@/components/ui/GlassButton";
import { useLeadModal } from "@/components/lead/LeadModalContext";

export function ContactSection() {
  const { openCalendar, openForm } = useLeadModal();

  return (
    <section id="contact" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          {/* Cutout portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400/25 via-violet-500/20 to-fuchsia-500/10 blur-3xl" />
            <Image
              src="/photos/portrait-cutout.png"
              alt="Jamaur Johnson"
              width={732}
              height={710}
              className="relative w-52 sm:w-64 lg:w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
            />
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1 relative overflow-hidden rounded-[2rem] glass-strong p-8 sm:p-14"
          >
            <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/0 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-violet-500/0 blur-3xl" />

            <div className="relative text-center lg:text-left">
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

              <p className="mt-5 max-w-2xl mx-auto lg:mx-0 text-white/65 text-base sm:text-lg leading-relaxed">
                Founders, artists, traders, builders — if you&apos;re building something
                that elevates people, I want to hear from you.
              </p>

              <div className="mt-9 flex flex-wrap gap-3 justify-center lg:justify-start">
                <GlassButton href="mailto:contact@liv8.co" size="lg" variant="primary">
                  Email Me
                </GlassButton>
                <GlassButton onClick={openCalendar} size="lg" variant="ghost">
                  Book a Call
                </GlassButton>
                <GlassButton onClick={openForm} size="lg" variant="soft">
                  Get Started
                </GlassButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
