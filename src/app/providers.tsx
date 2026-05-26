"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Nav } from "@/components/sections/Nav";
import { LeadModalProvider } from "@/components/lead/LeadModalContext";
import { LeadModal } from "@/components/lead/LeadModal";
import { GetStartedQuestionnaire } from "@/components/lead/GetStartedQuestionnaire";
import { ExitIntentPopup } from "@/components/lead/ExitIntentPopup";

/**
 * Wraps the entire app in shared client-side context (lead modal state) and
 * mounts the global JAMAUR nav + every lead-capture surface so they are
 * present on `/` (classic) and `/3d` (cinematic) without duplication.
 *
 * The `/perspective` editorial surface is its own brand (LIV8 Perspective)
 * with its own nav and lead funnel, so we suppress the JAMAUR chrome on
 * those routes — otherwise the two navs render on top of each other and
 * the exit-intent popup interrupts the editorial tone.
 */
export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPerspective = pathname?.startsWith("/perspective") ?? false;

  return (
    <LeadModalProvider>
      {!isPerspective && <Nav />}
      {children}
      <LeadModal />
      <GetStartedQuestionnaire />
      {!isPerspective && <ExitIntentPopup />}
    </LeadModalProvider>
  );
}
