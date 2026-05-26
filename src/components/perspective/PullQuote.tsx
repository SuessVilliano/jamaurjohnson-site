import { PULL_QUOTE } from "@/lib/perspective-content";

export function PullQuote() {
  return (
    <section id="leadership" className="relative overflow-hidden py-28 sm:py-44">
      {/* Cinematic warm spotlight that mimics the chandelier in the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-1/4 h-[140%] [background:radial-gradient(60%_50%_at_50%_0%,rgba(194,165,103,0.18),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:linear-gradient(180deg,transparent,rgba(6,8,15,0.7))]"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <span
          aria-hidden="true"
          className="block text-7xl text-[#c2a567]/40 sm:text-8xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          &ldquo;
        </span>
        <blockquote
          className="-mt-8 text-balance text-3xl leading-[1.2] text-[#f4ede0] sm:text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          {PULL_QUOTE.body}
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/85">
          <span className="inline-block h-px w-10 bg-[#c2a567]/50" />
          {PULL_QUOTE.attribution}
          <span className="inline-block h-px w-10 bg-[#c2a567]/50" />
        </div>
      </div>
    </section>
  );
}
