import { DISCOVERY } from "@/lib/perspective-content";

export function DiscoveryCards() {
  return (
    <section id="operations" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow>Field Observations</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-balance text-3xl leading-[1.1] text-[#f4ede0] sm:text-5xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          What business owners are discovering when they stop and look.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#f4ede0]/65">
          The patterns below come up again and again in audits — across industries, team
          sizes, and revenue tiers. Most owners recognize at least three of them
          immediately.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {DISCOVERY.map((d) => (
            <div
              key={d.title}
              className="group bg-[#0a0f1d] p-7 transition-colors hover:bg-[#0f1626]"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#c2a567]/30 bg-[#c2a567]/10 text-lg text-[#e9d5a3]">
                {d.glyph}
              </div>
              <h3
                className="mt-5 text-xl leading-tight text-[#f4ede0]"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                {d.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#f4ede0]/65">
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/90">
      <span className="inline-block h-px w-8 bg-[#c2a567]/60" />
      {children}
    </div>
  );
}
