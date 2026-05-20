"use client";

import type { ReactNode } from "react";
import { Nav } from "@/components/sections/Nav";
import { LeadModalProvider } from "@/components/lead/LeadModalContext";
import { LeadModal } from "@/components/lead/LeadModal";
import { GetStartedQuestionnaire } from "@/components/lead/GetStartedQuestionnaire";
import { ExitIntentPopup } from "@/components/lead/ExitIntentPopup";

/**
 * Wraps the entire app in shared client-side context (lead modal state) and
 * mounts the global Nav + every lead-capture surface so they are present on
 * both `/` (classic) and `/3d` (cinematic) without duplication.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <LeadModalProvider>
      <Nav />
      {children}
      <LeadModal />
      <GetStartedQuestionnaire />
      <ExitIntentPopup />
    </LeadModalProvider>
  );
}
