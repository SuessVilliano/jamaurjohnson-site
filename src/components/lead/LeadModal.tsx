"use client";

import { Modal } from "./Modal";
import { GhlEmbed } from "./GhlEmbed";
import { useLeadModal } from "./LeadModalContext";

/**
 * Hosts the GHL booking-calendar embed.
 *
 * The "Get Started" view is handled by <GetStartedQuestionnaire />, which
 * owns its own multi-step modal but shares this context's `view` state.
 */
export function LeadModal() {
  const { view, close } = useLeadModal();
  const open = view === "calendar";

  return (
    <Modal open={open} onClose={close} ariaLabel="Book a Call" maxWidth="max-w-2xl">
      <div className="flex flex-col gap-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/75">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Book a Call
          </div>
          <h3
            className="mt-3 text-2xl sm:text-3xl text-gradient font-semibold leading-tight"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Schedule time with Jamaur
          </h3>
          <p className="mt-2 text-sm text-white/60">
            Pick a date and time that works — you&apos;ll get a confirmation by email.
          </p>
        </div>

        <GhlEmbed type="calendar" />
      </div>
    </Modal>
  );
}
