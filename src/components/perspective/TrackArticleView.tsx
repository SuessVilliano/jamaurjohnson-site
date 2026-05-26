"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = {
  slug: string;
  category: string;
  title: string;
  minutes: number;
};

/**
 * Client component that fires a single `article_view` event on mount.
 * Lets GA4 segment article performance by category + title in a way
 * the standard page_view alone can't, and unlocks Explorations like
 * "articles by category that lead to an audit_request later in the
 * session" without writing a regex on page_path.
 */
export function TrackArticleView({ slug, category, title, minutes }: Props) {
  useEffect(() => {
    trackEvent("article_view", {
      event_category: "content",
      event_label: title,
      article_slug: slug,
      article_category: category,
      reading_time: minutes,
    });
  }, [slug, category, title, minutes]);
  return null;
}
