import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  HYBRID_PLAYBOOK_CTA,
  INSIGHTS_POSTS,
  PERSPECTIVE_META,
} from "@/lib/perspective-content";
import { PerspectiveFooter } from "@/components/perspective/PerspectiveFooter";
import { TrackArticleView } from "@/components/perspective/TrackArticleView";

export const dynamicParams = false;

export function generateStaticParams() {
  return INSIGHTS_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = INSIGHTS_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `https://jamaurjohnson.com/perspective/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: `https://jamaurjohnson.com/perspective/insights/${post.slug}`,
      siteName: "LIV8 Perspective",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

/**
 * Per-theme palette. CSS variables are applied at the <main> root so every
 * descendant can pick them up via Tailwind arbitrary values (`bg-[var(--…)]`).
 *
 * `editorial` keeps the existing LIV8 Perspective gold/cream look.
 * `hybrid`    drops in the Hybrid Funding emerald-on-deep-black look used
 *             for the trading / prop-firm track.
 */
const THEMES = {
  editorial: {
    "--p-bg": "#06080f",
    "--p-surface": "#080c16",
    "--p-card": "#0c111c",
    "--p-card-hover": "#0f1626",
    "--p-border": "rgba(255,255,255,0.10)",
    "--p-border-hover": "rgba(194,165,103,0.30)",
    "--p-divider": "rgba(255,255,255,0.08)",
    "--p-accent": "#c2a567",
    "--p-accent-bright": "#e9d5a3",
    "--p-accent-soft": "rgba(194,165,103,0.60)",
    "--p-accent-tint": "rgba(194,165,103,0.85)",
    "--p-accent-radial": "rgba(194,165,103,0.12)",
    "--p-text": "#f4ede0",
    "--p-text-soft": "rgba(244,237,224,0.80)",
    "--p-text-muted": "rgba(244,237,224,0.65)",
    "--p-text-faint": "rgba(244,237,224,0.55)",
    "--p-text-quiet": "rgba(244,237,224,0.45)",
    "--p-cta-from": "#1a1612",
    "--p-cta-via": "#0f141f",
    "--p-cta-to": "#0a0f1d",
    "--p-cta-btn-bg": "#c2a567",
    "--p-cta-btn-bg-hover": "#d1b67c",
    "--p-cta-btn-text": "#0a0f1d",
  },
  hybrid: {
    "--p-bg": "#03080a",
    "--p-surface": "#05101a",
    "--p-card": "#08151e",
    "--p-card-hover": "#0c2129",
    "--p-border": "rgba(255,255,255,0.08)",
    "--p-border-hover": "rgba(34,197,94,0.32)",
    "--p-divider": "rgba(255,255,255,0.06)",
    "--p-accent": "#22c55e",
    "--p-accent-bright": "#4ade80",
    "--p-accent-soft": "rgba(34,197,94,0.55)",
    "--p-accent-tint": "rgba(74,222,128,0.85)",
    "--p-accent-radial": "rgba(34,197,94,0.14)",
    "--p-text": "#e8f5ec",
    "--p-text-soft": "rgba(232,245,236,0.82)",
    "--p-text-muted": "rgba(232,245,236,0.66)",
    "--p-text-faint": "rgba(232,245,236,0.55)",
    "--p-text-quiet": "rgba(232,245,236,0.45)",
    "--p-cta-from": "#031a14",
    "--p-cta-via": "#04140e",
    "--p-cta-to": "#03080a",
    "--p-cta-btn-bg": "#22c55e",
    "--p-cta-btn-bg-hover": "#4ade80",
    "--p-cta-btn-text": "#03080a",
  },
} as const;

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = INSIGHTS_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const theme = post.theme ?? "editorial";
  const themeStyle = THEMES[theme] as React.CSSProperties;
  const isHybrid = theme === "hybrid";

  // Related posts: prefer same-theme posts so the trading and editorial tracks
  // don't bleed into each other at the bottom of an article.
  const sameTheme = INSIGHTS_POSTS.filter(
    (p) => p.slug !== post.slug && (p.theme ?? "editorial") === theme,
  );
  const related = sameTheme.slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    author: { "@type": "Person", name: "Jamaur Johnson", url: "https://jamaurjohnson.com" },
    publisher: {
      "@type": "Organization",
      name: "LIV8 Perspective",
      url: "https://jamaurjohnson.com/perspective",
    },
    datePublished: post.publishedDate,
    mainEntityOfPage: `https://jamaurjohnson.com/perspective/insights/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <main
      className="relative bg-[var(--p-bg)] text-[var(--p-text)]"
      style={themeStyle}
    >
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

      {/* Header */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-20 h-[400px]"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, var(--p-accent-radial), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/perspective#insights"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[var(--p-text-faint)] transition-colors hover:text-[var(--p-accent-bright)]"
          >
            <span aria-hidden="true">←</span>
            LIV8 Perspective · Back to feature
          </Link>

          <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[var(--p-accent-tint)]">
            <span
              className="inline-block h-px w-8"
              style={{ background: "var(--p-accent-soft)" }}
            />
            {post.category}
          </div>

          <h1
            className="mt-5 text-balance text-4xl leading-[1.05] tracking-tight text-[var(--p-text)] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            {post.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--p-text-muted)]">
            {post.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-[var(--p-text-faint)]">
            <span className="text-[var(--p-text-soft)]">{PERSPECTIVE_META.byline}</span>
            <span aria-hidden="true">·</span>
            <span>{post.minutes} min read</span>
            <span aria-hidden="true">·</span>
            <span>Published {post.publishedDate}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <article className="space-y-6 text-[17px] leading-[1.75] text-[var(--p-text-soft)]">
            {post.body.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-[var(--p-accent)]"
                    : undefined
                }
              >
                {p}
              </p>
            ))}
          </article>

          {isHybrid ? (
            <div
              className="mt-14 rounded-2xl p-7 sm:p-9"
              style={{
                border: "1px solid var(--p-border-hover)",
                background:
                  "linear-gradient(135deg, var(--p-cta-from), var(--p-cta-via), var(--p-cta-to))",
              }}
            >
              <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--p-accent-tint)]">
                {HYBRID_PLAYBOOK_CTA.eyebrow}
              </div>
              <h2
                className="mt-3 text-2xl leading-tight text-[var(--p-text)] sm:text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                {HYBRID_PLAYBOOK_CTA.headline}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--p-text-muted)]">
                {HYBRID_PLAYBOOK_CTA.body}
              </p>
              <a
                href={HYBRID_PLAYBOOK_CTA.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 items-center rounded-full px-7 text-[11px] uppercase tracking-[0.22em] transition-colors"
                style={{
                  background: "var(--p-cta-btn-bg)",
                  color: "var(--p-cta-btn-text)",
                }}
              >
                {HYBRID_PLAYBOOK_CTA.cta}
              </a>
            </div>
          ) : (
            <div
              className="mt-14 rounded-2xl p-7 sm:p-9"
              style={{
                border: "1px solid var(--p-border-hover)",
                background:
                  "linear-gradient(135deg, var(--p-cta-from), var(--p-cta-via), var(--p-cta-to))",
              }}
            >
              <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--p-accent-tint)]">
                Free Business Audit
              </div>
              <h2
                className="mt-3 text-2xl leading-tight text-[var(--p-text)] sm:text-3xl"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                See where your business is leaking time.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--p-text-muted)]">
                If anything in this piece sounded familiar, request a free audit. Jamaur&apos;s
                team will review what you shared and reach back out within one business day.
              </p>
              <Link
                href="/perspective#audit-card"
                className="mt-6 inline-flex h-12 items-center rounded-full px-7 text-[11px] uppercase tracking-[0.22em] transition-colors"
                style={{
                  background: "var(--p-cta-btn-bg)",
                  color: "var(--p-cta-btn-text)",
                }}
              >
                Request My Audit
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related insights */}
      {related.length > 0 && (
        <section
          className="relative py-20"
          style={{
            background: "var(--p-surface)",
            borderTop: "1px solid var(--p-divider)",
          }}
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[var(--p-accent-tint)]">
              <span
                className="inline-block h-px w-8"
                style={{ background: "var(--p-accent-soft)" }}
              />
              Continue Reading
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/perspective/insights/${r.slug}`}
                  className="group block rounded-2xl p-6 transition-colors"
                  style={{
                    border: "1px solid var(--p-border)",
                    background: "var(--p-card)",
                  }}
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--p-text-quiet)]">
                    {r.category} · {r.minutes} min
                  </div>
                  <h3
                    className="mt-3 text-xl leading-tight text-[var(--p-text)] transition-colors group-hover:text-[var(--p-accent-bright)]"
                    style={{ fontFamily: "var(--font-editorial)" }}
                  >
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--p-text-muted)] line-clamp-3">
                    {r.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <PerspectiveFooter />
    </main>
  );
}
