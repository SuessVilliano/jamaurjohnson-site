import Link from "next/link";
import { TRENDING_INSIGHTS } from "@/lib/perspective-content";
import { AuditForm } from "./AuditForm";

export function TrendingSidebar() {
  return (
    <aside className="space-y-10">
      <div>
        <div className="flex items-center gap-3 border-b border-white/10 pb-3 text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/90">
          <span className="inline-block h-px w-6 bg-[#c2a567]/60" />
          Trending Insights
        </div>
        <ol className="mt-5 space-y-5">
          {TRENDING_INSIGHTS.map((i, idx) => {
            const isHybrid = i.theme === "hybrid";
            return (
              <li key={i.slug}>
                <Link
                  href={`/perspective/insights/${i.slug}`}
                  className="group flex gap-4"
                >
                  <span
                    className={`text-2xl transition-colors ${
                      isHybrid
                        ? "text-violet-500/45 group-hover:text-violet-400/80"
                        : "text-[#c2a567]/40 group-hover:text-[#c2a567]/70"
                    }`}
                    style={{ fontFamily: "var(--font-editorial)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div
                      className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] ${
                        isHybrid ? "text-cyan-300/85" : "text-[#f4ede0]/45"
                      }`}
                    >
                      {isHybrid && (
                        <span
                          aria-hidden="true"
                          className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                        />
                      )}
                      <span>
                        {i.category} · {i.minutes} min
                      </span>
                    </div>
                    <h4
                      className={`mt-1 text-[17px] leading-[1.3] text-[#f4ede0] transition-colors ${
                        isHybrid
                          ? "group-hover:text-violet-200"
                          : "group-hover:text-[#e9d5a3]"
                      }`}
                      style={{ fontFamily: "var(--font-editorial)" }}
                    >
                      {i.title}
                    </h4>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>

      <div id="audit-card">
        <AuditForm />
      </div>
    </aside>
  );
}
