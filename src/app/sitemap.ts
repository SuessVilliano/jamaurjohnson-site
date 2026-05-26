import type { MetadataRoute } from "next";
import { INSIGHTS_POSTS } from "@/lib/perspective-content";

const SITE_URL = "https://jamaurjohnson.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/3d`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/perspective`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...INSIGHTS_POSTS.map((p) => ({
      url: `${SITE_URL}/perspective/insights/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
