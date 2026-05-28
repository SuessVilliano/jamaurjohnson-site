import Link from "next/link";
import type { Metadata } from "next";
import {
  INSIGHTS_POSTS,
  publishedSortKey,
} from "@/lib/perspective-content";
import { PerspectiveFooter } from "@/components/perspective/PerspectiveFooter";
import { ThemeToggle } from "@/components/perspective/ThemeToggle";
import {
  InsightsGrid,
  type InsightsGridPost,
} from "@/components/perspective/InsightsGrid";

const SITE_URL = "https://jamaurjohnson.com";

export const metadata: Metadata = {
  title: "Insights — LIV8 Perspective",
  description:
    "Editorial on operations, AI, capital, leverage, spirituality, music, and how systems give modern operators their time back. Published under LIV8 Perspective for LIV8 and Hybrid Funding.",
  alternates: { canonical: `${SITE_URL}/perspective/insights` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/perspective/insights`,
    siteName: "LIV8 Perspective",
    title: "Insights — LIV8 Perspective",
    description:
      "All articles from LIV8 Perspective — operations and AI for LIV8, trading and prop-firm strategy for Hybrid Funding, plus spirituality, investments, music, and life systems.",
  },
};

export default function InsightsIndexPage() {
  const posts: InsightsGridPost[] = [...INSIGHTS_POSTS]
    .sort(
      (a, b) =>
        publishedSortKey(b.publishedDate) - publishedSortKey(a.publishedDate),
    )
    .map((p) => ({
      slug: p.slug,
      category: p.category,
      title: p.title,
      minutes: p.minutes,
      publishedDate: p.publishedDate,
      summary: p.summary,
      theme: p.theme ?? "editorial",
    }));

  return (
    <main className="relative bg-[#06080f] text-[#f4ede0]">
      {/* Header */}
      <section className="relative pt-32 pb-12 sm:pt-36 sm:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-20 h-[400px] [background:radial-gradient(60%_50%_at_50%_0%,rgba(194,165,103,0.10),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#f4ede0]/55 transition-colors hover:text-[#e9d5a3]"
            >
              <span aria-hidden="true">←</span>
              Jamaur Johnson · Back home
            </Link>
            <ThemeToggle />
          </div>

          <div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/90">
            <span className="inline-block h-px w-8 bg-[#c2a567]/60" />
            All Insights · LIV8 Perspective
          </div>

          <h1
            className="mt-5 max-w-3xl text-balance text-4xl leading-[1.05] tracking-tight text-[#f4ede0] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            Business, capital, spirit, sound, and the systems behind all of it.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f4ede0]/70">
            Long-form editorial across the work — operations and AI for LIV8,
            trading and capital for Hybrid Funding, plus spirituality,
            investments, music, and the life systems that make the rest
            sustainable. Filter by topic below.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.28em]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c2a567]/35 px-3 py-1.5 text-[#c2a567]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c2a567]" />
              LIV8 · Operations · Mindset · Life
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/35 px-3 py-1.5 text-cyan-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
              Hybrid Funding · Trading · Capital
            </span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <InsightsGrid posts={posts} />
        </div>
      </section>

      <PerspectiveFooter />
    </main>
  );
}
