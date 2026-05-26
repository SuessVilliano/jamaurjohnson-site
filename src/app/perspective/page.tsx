"use client";

import { useCallback } from "react";
import { PerspectiveNav } from "@/components/perspective/PerspectiveNav";
import { PerspectiveHero } from "@/components/perspective/Hero";
import { OpeningArticle } from "@/components/perspective/OpeningArticle";
import { TrendingSidebar } from "@/components/perspective/TrendingSidebar";
import { DiscoveryCards } from "@/components/perspective/DiscoveryCards";
import { TheShift } from "@/components/perspective/TheShift";
import { PullQuote } from "@/components/perspective/PullQuote";
import { FinalCTA } from "@/components/perspective/FinalCTA";
import { PerspectiveFooter } from "@/components/perspective/PerspectiveFooter";
import { StickyMobileCTA } from "@/components/perspective/StickyMobileCTA";

export default function PerspectivePage() {
  // All CTAs scroll to the sidebar audit card, which holds the live form.
  const requestAudit = useCallback(() => {
    if (typeof document === "undefined") return;
    const el = document.getElementById("audit-card");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Bring focus to the first input for keyboard users.
    const firstInput = el.querySelector<HTMLInputElement>("input");
    setTimeout(() => firstInput?.focus({ preventScroll: true }), 500);
  }, []);

  return (
    <main className="relative">
      <PerspectiveNav onRequestAudit={requestAudit} />

      <PerspectiveHero onRequestAudit={requestAudit} />

      {/* Article + sidebar */}
      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.5fr_0.85fr] lg:gap-16">
            <OpeningArticle />
            <TrendingSidebar />
          </div>
        </div>
      </section>

      <DiscoveryCards />
      <TheShift />
      <PullQuote />
      <FinalCTA onRequestAudit={requestAudit} />
      <PerspectiveFooter />

      <StickyMobileCTA onRequestAudit={requestAudit} />
    </main>
  );
}
