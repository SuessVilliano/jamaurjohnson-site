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
 *
 * Convention follows Neil Patel's GA4 reporting guidance:
 *   - Conversions carry `value` + `currency` so they feed multi-touch
 *     attribution and Google Ads bid optimization correctly
 *   - Funnel events ride on the same name family with a step suffix
 *     (questionnaire_open / questionnaire_path / questionnaire_submit)
 *     so GA4 Explorations can render a clean funnel without re-mapping
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

/** Assigned monetary value for each conversion type, used by Google Ads
 *  Smart Bidding strategies and GA4 multi-touch attribution reports. Tune
 *  these in one place as the business learns its real lead → close value. */
export const CONVERSION_VALUE = {
  audit_request: 250,
  questionnaire_submit: 200,
  exit_intent_email: 25,
} as const;

export const CONVERSION_CURRENCY = "USD";

