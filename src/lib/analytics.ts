"use client";

/**
 * Tiny wrapper around the Google Analytics 4 `gtag` global.
 *
 * The GA script is mounted in src/app/layout.tsx via
 * @next/third-parties' <GoogleAnalytics />, gated on the
 * NEXT_PUBLIC_GA_MEASUREMENT_ID environment variable.
 *
 * Components call `trackEvent("audit_request", { business: "..." })` and the
 * call is a safe no-op in development or when the env var isn't set, so we
 * never have to wrap conversion code in defensive null checks.
 */

type GtagValue = string | number | boolean | undefined | null;
type GtagParams = Record<string, GtagValue>;

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set",
      target: string,
      params?: GtagParams,
    ) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const GA_ENABLED = Boolean(GA_MEASUREMENT_ID);

/** Fire a custom GA4 event. Safe no-op if gtag isn't loaded. */
export function trackEvent(name: string, params?: GtagParams) {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, params ?? {});
}
