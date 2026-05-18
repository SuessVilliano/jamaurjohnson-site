"use client";

import { COMPANIES } from "@/lib/portfolio-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlassButton } from "@/components/ui/GlassButton";

const CATEGORY_COLORS: Record<string, string> = {
  AI: "bg-cyan-400/15 text-cyan-200 border-cyan-300/30",
  Solar: "bg-amber-400/15 text-amber-200 border-amber-300/30",
  Health: "bg-emerald-400/15 text-emerald-200 border-emerald-300/30",
  Finance: "bg-violet-400/15 text-violet-200 border-violet-300/30",
  Trading: "bg-fuchsia-400/15 text-fuchsia-200 border-fuchsia-300/30",
  Music: "bg-pink-400/15 text-pink-200 border-pink-300/30",
  Holdings: "bg-white/10 text-white/85 border-white/20",
  Brokerage: "bg-blue-400/15 text-blue-200 border-blue-300/30",
};

export function CompaniesSection() {
  return (
    <section id="companies" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Companies World"
          title="A Founder Portfolio That Compounds"
          description="Nine ventures spanning AI, finance, health, solar, trading, and music — each one a standalone business and a piece of one larger ecosystem."
        />

        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANIES.map((c, i) => (
            <GlassCard key={c.name} delay={i * 0.05} className="flex flex-col gap-4 min-h-[220px]">
              <div className="flex items-start justify-between gap-3">
                <h3
                  className="text-xl sm:text-2xl font-semibold text-white leading-tight"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {c.name}
                </h3>
                <span
                  className={`shrink-0 inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] ${
                    CATEGORY_COLORS[c.category] ?? "bg-white/10 text-white/80 border-white/15"
                  }`}
                >
                  {c.category}
                </span>
              </div>

              <p className="text-sm text-white/65 leading-relaxed flex-1">
                {c.description}
              </p>

              {c.link ? (
                <GlassButton href={c.link} size="sm" variant="ghost">
                  Visit site →
                </GlassButton>
              ) : (
                <span className="inline-flex items-center gap-2 text-xs text-white/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  In development
                </span>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
