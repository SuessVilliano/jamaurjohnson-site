import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { INSIGHTS_POSTS, PERSPECTIVE_META } from "@/lib/perspective-content";
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

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = INSIGHTS_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = INSIGHTS_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

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
    <main className="relative">
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
          className="pointer-events-none absolute inset-x-0 -top-20 h-[400px] [background:radial-gradient(60%_50%_at_50%_0%,rgba(194,165,103,0.12),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/perspective#insights"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#f4ede0]/55 transition-colors hover:text-[#e9d5a3]"
          >
            <span aria-hidden="true">←</span>
            LIV8 Perspective · Back to feature
          </Link>

          <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/85">
            <span className="inline-block h-px w-8 bg-[#c2a567]/60" />
            {post.category}
          </div>

          <h1
            className="mt-5 text-balance text-4xl leading-[1.05] tracking-tight text-[#f4ede0] sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-editorial)" }}
          >
            {post.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#f4ede0]/70">
            {post.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-[#f4ede0]/55">
            <span className="text-[#f4ede0]/80">{PERSPECTIVE_META.byline}</span>
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
          <article className="space-y-6 text-[17px] leading-[1.75] text-[#f4ede0]/80">
            {post.body.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-[#c2a567]"
                    : undefined
                }
              >
                {p}
              </p>
            ))}
          </article>

          <div className="mt-14 rounded-2xl border border-[#c2a567]/30 bg-gradient-to-br from-[#1a1612] via-[#0f141f] to-[#0a0f1d] p-7 sm:p-9">
            <div className="text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/85">
              Free Business Audit
            </div>
            <h2
              className="mt-3 text-2xl leading-tight text-[#f4ede0] sm:text-3xl"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              See where your business is leaking time.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#f4ede0]/65">
              If anything in this piece sounded familiar, request a free audit. Jamaur&apos;s
              team will review what you shared and reach back out within one business day.
            </p>
            <Link
              href="/perspective#audit-card"
              className="mt-6 inline-flex h-12 items-center rounded-full bg-[#c2a567] px-7 text-[11px] uppercase tracking-[0.22em] text-[#0a0f1d] transition-colors hover:bg-[#d1b67c]"
            >
              Request My Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Related insights */}
      {related.length > 0 && (
        <section className="relative border-t border-white/8 bg-[#080c16] py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/85">
              <span className="inline-block h-px w-8 bg-[#c2a567]/60" />
              Continue Reading
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/perspective/insights/${r.slug}`}
                  className="group block rounded-2xl border border-white/10 bg-[#0c111c] p-6 transition-colors hover:border-[#c2a567]/30 hover:bg-[#0f1626]"
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#f4ede0]/45">
                    {r.category} · {r.minutes} min
                  </div>
                  <h3
                    className="mt-3 text-xl leading-tight text-[#f4ede0] transition-colors group-hover:text-[#e9d5a3]"
                    style={{ fontFamily: "var(--font-editorial)" }}
                  >
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#f4ede0]/60 line-clamp-3">
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
