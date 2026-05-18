"use client";

import { motion } from "framer-motion";
import { SITES } from "@/lib/portfolio-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SitesSection() {
  return (
    <section id="sites" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Digital Real Estate"
          title="A Galaxy of Web Properties"
          description="Domains, subdomains, and platforms operated like long-term assets — each one a doorway into the ecosystem."
        />

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SITES.map((s, i) => (
            <motion.a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden rounded-2xl glass p-5 flex items-center justify-between gap-4 hover:bg-white/[0.08] transition-colors"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 via-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/45">
                  {s.category}
                </div>
                <div className="mt-1 text-base font-medium text-white truncate">{s.name}</div>
                <div className="text-xs text-white/45 truncate font-mono">
                  {s.url.replace(/^https?:\/\//, "")}
                </div>
              </div>
              <div
                aria-hidden
                className="shrink-0 h-9 w-9 rounded-full glass inline-flex items-center justify-center text-cyan-300 group-hover:text-white transition-colors"
              >
                ↗
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
