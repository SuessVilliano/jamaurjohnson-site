"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

/** Which lead-capture view is currently showing. */
export type LeadView = "calendar" | "questionnaire";

type Ctx = {
  view: LeadView | null;
  openCalendar: () => void;
  openQuestionnaire: () => void;
  close: () => void;
};

const LeadModalCtx = createContext<Ctx | null>(null);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<LeadView | null>(null);

  // Wrap opens in stable handlers that also fire funnel-top events so GA4
  // Explorations can render Open → Submit drop-off without extra wiring.
  const openCalendar = useCallback(() => {
    trackEvent("book_a_call_open", { event_category: "engagement" });
    setView("calendar");
  }, []);

  const openQuestionnaire = useCallback(() => {
    trackEvent("get_started_open", { event_category: "engagement" });
    setView("questionnaire");
  }, []);

  const close = useCallback(() => setView(null), []);

  return (
    <LeadModalCtx.Provider value={{ view, openCalendar, openQuestionnaire, close }}>
      {children}
    </LeadModalCtx.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalCtx);
  if (!ctx) throw new Error("useLeadModal must be used inside <LeadModalProvider>");
  return ctx;
}
