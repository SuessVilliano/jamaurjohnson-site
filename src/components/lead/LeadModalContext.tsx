"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

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

  return (
    <LeadModalCtx.Provider
      value={{
        view,
        openCalendar: () => setView("calendar"),
        openQuestionnaire: () => setView("questionnaire"),
        close: () => setView(null),
      }}
    >
      {children}
    </LeadModalCtx.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalCtx);
  if (!ctx) throw new Error("useLeadModal must be used inside <LeadModalProvider>");
  return ctx;
}
