import type { MetadataRoute } from "next";

const SITE_URL = "https://jamaurjohnson.com";

/**
 * Allows all standard search-engine crawlers AND the major AI / generative
 * engine crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended,
 * Applebot-Extended, etc.) so Jamaur's bio, work, and ecosystem are
 * indexed for generative answers as well as classic search results.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // OpenAI / ChatGPT
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Anthropic / Claude
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      // Google (AI Overview / Gemini training)
      { userAgent: "Google-Extended", allow: "/" },
      // Apple Intelligence
      { userAgent: "Applebot-Extended", allow: "/" },
      // Meta AI
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      // Common Crawl (training data)
      { userAgent: "CCBot", allow: "/" },
      // Cohere
      { userAgent: "cohere-ai", allow: "/" },
      // You.com
      { userAgent: "YouBot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
