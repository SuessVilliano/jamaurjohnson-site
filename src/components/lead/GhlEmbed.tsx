"use client";

import { useState } from "react";

/**
 * Renders a GoHighLevel (LeadConnector) widget iframe.
 *
 * Auto-resizing is handled by `form_embed.js`, which is loaded once globally
 * in the root layout. Its message listener resizes any GHL iframe on the page,
 * including ones mounted later inside a modal.
 */

const CALENDAR_ID = "48KkL8vdm1FgUx3VrnAl";
const FORM_ID = "sI9aX3JQwL3wlKngl2BT";

type Props = { type: "calendar" | "form" };

export function GhlEmbed({ type }: Props) {
  const [loaded, setLoaded] = useState(false);

  const isCalendar = type === "calendar";
  const src = isCalendar
    ? `https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`
    : `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;
  const minHeight = isCalendar ? 720 : 880;

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-white">
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white"
          style={{ minHeight }}
        >
          <span className="h-7 w-7 animate-spin rounded-full border-2 border-violet-500/30 border-t-violet-500" />
        </div>
      )}

      {isCalendar ? (
        <iframe
          src={src}
          id={`${CALENDAR_ID}_lead-modal`}
          title="Book a call with Jamaur"
          onLoad={() => setLoaded(true)}
          className="block w-full"
          style={{ border: "none", minHeight }}
        />
      ) : (
        <iframe
          src={src}
          id={`inline-${FORM_ID}`}
          title="Form 1"
          onLoad={() => setLoaded(true)}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-activation-type="alwaysActivated"
          data-deactivation-type="neverDeactivate"
          data-form-name="Form 1"
          data-height="872"
          data-layout-iframe-id={`inline-${FORM_ID}`}
          data-form-id={FORM_ID}
          className="block w-full"
          style={{ border: "none", borderRadius: 8, minHeight }}
        />
      )}
    </div>
  );
}
