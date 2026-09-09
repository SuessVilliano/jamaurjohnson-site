import Link from "next/link";
import type { Metadata } from "next";
import type { GrowthInsight } from "@/lib/growth-insights";
import { PerspectiveFooter } from "@/components/perspective/PerspectiveFooter";
import { ThemeToggle } from "@/components/perspective/ThemeToggle";
import { TrackArticleView } from "@/components/perspective/TrackArticleView";

const SITE_URL = "https://jamaurjohnson.com";

export function growthInsightMetadata(post: GrowthInsight): Metadata {
  const url = `${SITE_URL}/perspective/insights/${post.slug}`;
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url,
      siteName: "LIV8 Perspective",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export function GrowthInsightArticle({ post }: { post: GrowthInsight }) {
  const isHybrid = post.theme === "hybrid";
  const accent = isHybrid ? "text-cyan-300" : "text-[#c2a567]";
  const accentBorder = isHybrid ? "border-violet-400/35" : "border-[#c2a567]/35";
  const ctaBg = isHybrid
    ? "from-violet-950/70 via-[#0b0920] to-cyan-950/30"
    : "from-[#1a1612] via-[#0f141f] to-[#0a0f1d]";
  const dropCapClass = isHybrid
    ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-violet-400"
    : "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-[#c2a567]";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    author: { "@type": "Person", name: "Jamaur Johnson", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "LIV8 Perspective",
      url: `${SITE_URL}/perspective`,
    },
    datePublished: post.publishedDate,
    mainEntityOfPage: `${SITE_URL}/perspective/insights/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <main className={isHybrid ? "relative bg-[#06031a] text-[#ecebff]" : "relative bg-[#06080f] text-[#f4ede0]"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <TrackArticleView
        slug={post.slug}
        category={post.category}
        title={post.title}
        minutes={post.minutes}
      />

      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div
          aria-hidden="true"
          className={
            isHybrid
              ? "pointer-events-none absolute inset-x-0 -top-20 h-[420px] [background:radial-gradient(60%_50%_at_50%_0%,rgba(168,85,247,0.18),transparent_60%)]"
              : "pointer-events-none absolute inset-x-0 -top-20 h-[420px] [background:radial-gradient(60%_50%_at_50%_0%,rgba(194,165,103,0.12),transparent_60%)]"
          }
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/perspective/insights"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-white/50 transition-colors hover:text-white"
            >
              ← All Insights
            </Link>
            <ThemeToggle />
          </div>

          <div className={`mt-9 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] ${accent}`}>
            <span className="inline-block h-px w-8 bg-current opacity-60" />
            {post.category}
          </div>

          <h1
            className="mt-5 text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            {post.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{post.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
            <span className="text-white/75">By Jamaur Johnson</span>
            <span>·</span>
            <span>{post.minutes} min read</span>
            <span>·</span>
            <span>{post.publishedDate}</span>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <article className="space-y-6 text-[17px] leading-[1.78] text-white/80">
            {post.body.map((paragraph, index) => (
              <p key={index} className={index === 0 ? dropCapClass : undefined}>
                {paragraph}
              </p>
            ))}
          </article>

          {post.sources && post.sources.length > 0 && (
            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <div className={`text-[10px] uppercase tracking-[0.3em] ${accent}`}>Sources</div>
              <ul className="mt-4 space-y-3">
                {post.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm leading-relaxed text-white/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={`mt-14 rounded-3xl border ${accentBorder} bg-gradient-to-br ${ctaBg} p-7 sm:p-9`}>
            <div className={`text-[10px] uppercase tracking-[0.32em] ${accent}`}>{post.cta.eyebrow}</div>
            <h2
              className="mt-3 text-2xl leading-tight sm:text-3xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              {post.cta.headline}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">{post.cta.body}</p>
            {post.cta.href.startsWith("/") ? (
              <Link
                href={post.cta.href}
                className={
                  isHybrid
                    ? "mt-6 inline-flex h-12 items-center rounded-full bg-violet-500 px-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-cyan-300 hover:text-[#06031a]"
                    : "mt-6 inline-flex h-12 items-center rounded-full bg-[#c2a567] px-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0a0f1d] transition-colors hover:bg-[#d1b67c]"
                }
              >
                {post.cta.label}
              </Link>
            ) : (
              <a
                href={post.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isHybrid
                    ? "mt-6 inline-flex h-12 items-center rounded-full bg-violet-500 px-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-cyan-300 hover:text-[#06031a]"
                    : "mt-6 inline-flex h-12 items-center rounded-full bg-[#c2a567] px-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0a0f1d] transition-colors hover:bg-[#d1b67c]"
                }
              >
                {post.cta.label}
              </a>
            )}
          </div>
        </div>
      </section>

      <PerspectiveFooter />
    </main>
  );
}
