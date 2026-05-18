"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

/** Which GHL embed the lead modal is currently showing. */
export type LeadView = "calendar" | "form";

type Ctx = {
  view: LeadView | null;
  openCalendar: () => void;
  openForm: () => void;
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
        openForm: () => setView("form"),
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
