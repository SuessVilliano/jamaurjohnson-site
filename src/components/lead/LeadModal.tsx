"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import { GhlEmbed } from "./GhlEmbed";
import { useLeadModal, type LeadView } from "./LeadModalContext";

const COPY: Record<LeadView, { eyebrow: string; title: string; subtitle: string }> = {
  calendar: {
    eyebrow: "Book a Call",
    title: "Schedule time with Jamaur",
    subtitle: "Pick a date and time that works — you'll get a confirmation by email.",
  },
  form: {
    eyebrow: "Get Started",
    title: "Tell Jamaur about you",
    subtitle: "Share a few details and the right next step will come straight to your inbox.",
  },
};

export function LeadModal() {
  const { view, close } = useLeadModal();

  // Keep the last view mounted through the modal's exit animation so the
  // content doesn't blank out while it fades. Adjusting state during render
  // (rather than in an effect) avoids a cascading-render lint warning.
  const [rendered, setRendered] = useState<LeadView>("calendar");
  if (view && view !== rendered) {
    setRendered(view);
  }

  const copy = COPY[rendered];

  return (
    <Modal
      open={view !== null}
      onClose={close}
      ariaLabel={copy.eyebrow}
      maxWidth="max-w-2xl"
    >
      <div className="flex flex-col gap-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/75">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            {copy.eyebrow}
          </div>
          <h3
            className="mt-3 text-2xl sm:text-3xl text-gradient font-semibold leading-tight"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {copy.title}
          </h3>
          <p className="mt-2 text-sm text-white/60">{copy.subtitle}</p>
        </div>

        <GhlEmbed key={rendered} type={rendered} />
      </div>
    </Modal>
  );
}
