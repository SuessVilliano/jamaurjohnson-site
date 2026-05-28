"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type InsightsGridPost = {
  slug: string;
  category: string;
  title: string;
  minutes: number;
  publishedDate: string;
  summary: string;
  theme: "editorial" | "hybrid";
};

type Topic = {
  key: string;
  label: string;
  /** Categories from perspective-content.ts that belong in this topic. */
  categories: string[];
};

/**
 * High-level topics shown as filter tabs on the insights index.
 * Each tab unions one or more of the per-post category strings so the
 * editorial sees a small, scannable set of choices instead of 14 raw tags.
 */
const TOPICS: Topic[] = [
  {
    key: "business",
    label: "Business",
    categories: ["Operations", "Systems", "Insight", "Leadership", "Growth"],
  },
  {
    key: "trading",
    label: "Trading",
    categories: ["Capital", "Leverage", "Risk", "Playbook", "Path"],
  },
  {
    key: "investments",
    label: "Investments",
    categories: ["Investments"],
  },
  {
    key: "spirituality",
    label: "Spirituality",
    categories: ["Spirituality", "Life Systems"],
  },
  {
    key: "music",
    label: "Music",
    categories: ["Music"],
  },
];

export function InsightsGrid({ posts }: { posts: InsightsGridPost[] }) {
  const [active, setActive] = useState<string>("all");

  // Count posts per tab so the tabs surface their depth at a glance.
  const counts = useMemo(() => {
    const map: Record<string, number> = { all: posts.length };
    for (const topic of TOPICS) {
      map[topic.key] = posts.filter((p) =>
        topic.categories.includes(p.category),
      ).length;
    }
    return map;
  }, [posts]);

  const visible = useMemo(() => {
    if (active === "all") return posts;
    const topic = TOPICS.find((t) => t.key === active);
    if (!topic) return posts;
    return posts.filter((p) => topic.categories.includes(p.category));
  }, [active, posts]);

  return (
    <div>
      {/* Filter tabs */}
      <div className="-mx-5 sm:mx-0 mb-10 overflow-x-auto px-5 sm:px-0">
        <div className="flex w-max gap-2 sm:flex-wrap sm:w-auto">
          <FilterTab
            label="All"
            count={counts.all}
            active={active === "all"}
            onClick={() => setActive("all")}
          />
          {TOPICS.map((t) => (
            <FilterTab
              key={t.key}
              label={t.label}
              count={counts[t.key] ?? 0}
              active={active === t.key}
              onClick={() => setActive(t.key)}
            />
          ))}
        </div>
      </div>

      {/* Card grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => {
          const isHybrid = p.theme === "hybrid";
          return (
            <Link
              key={p.slug}
              href={`/perspective/insights/${p.slug}`}
              className={`group relative flex flex-col rounded-2xl border bg-[#0c111c] p-6 transition-colors ${
                isHybrid
                  ? "border-white/10 hover:border-violet-400/35 hover:bg-[#0f1626]"
                  : "border-white/10 hover:border-[#c2a567]/30 hover:bg-[#0f1626]"
              }`}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -top-px left-6 right-6 h-px ${
                  isHybrid
                    ? "bg-gradient-to-r from-transparent via-violet-400/45 to-transparent"
                    : "bg-gradient-to-r from-transparent via-[#c2a567]/40 to-transparent"
                }`}
              />

              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em]">
                {isHybrid && (
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                  />
                )}
                <span
                  className={
                    isHybrid ? "text-cyan-300/85" : "text-[#c2a567]/85"
                  }
                >
                  {p.category}
                </span>
                <span className="text-[#f4ede0]/30">·</span>
                <span className="text-[#f4ede0]/45">{p.minutes} min</span>
              </div>

              <h3
                className={`mt-3 text-xl leading-[1.25] text-[#f4ede0] transition-colors ${
                  isHybrid
                    ? "group-hover:text-violet-200"
                    : "group-hover:text-[#e9d5a3]"
                }`}
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                {p.title}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#f4ede0]/60">
                {p.summary}
              </p>

              <div className="mt-auto flex items-center justify-between pt-5 text-[10px] uppercase tracking-[0.28em]">
                <span className="text-[#f4ede0]/45">{p.publishedDate}</span>
                <span
                  className={
                    isHybrid ? "text-violet-300/70" : "text-[#c2a567]/70"
                  }
                >
                  {isHybrid ? "Hybrid Funding" : "LIV8"}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-sm text-[#f4ede0]/50">
          Nothing in this category yet. New work publishing soon.
        </p>
      )}
    </div>
  );
}

function FilterTab({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors ${
        active
          ? "border-[#c2a567]/60 bg-[#c2a567]/10 text-[#e9d5a3]"
          : "border-white/12 text-[#f4ede0]/65 hover:border-[#c2a567]/30 hover:text-[#e9d5a3]"
      }`}
      aria-pressed={active}
    >
      <span>{label}</span>
      <span
        className={`rounded-full px-1.5 text-[10px] tabular-nums ${
          active
            ? "bg-[#c2a567]/20 text-[#e9d5a3]"
            : "bg-white/5 text-[#f4ede0]/45 group-hover:bg-[#c2a567]/15 group-hover:text-[#e9d5a3]"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
