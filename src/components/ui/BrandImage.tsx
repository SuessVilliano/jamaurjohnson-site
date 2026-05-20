"use client";

import { useState } from "react";
import type { Portrait } from "@/lib/portfolio-data";

type Props = {
  portrait: Portrait;
  className?: string;
  /** Tailwind aspect ratio class, e.g. "aspect-[3/4]". */
  aspect?: string;
  /** Show the HUD-style caption strip at the bottom. */
  showCaption?: boolean;
  /** Eager-load (use for above-the-fold portraits only). */
  priority?: boolean;
  /** Object position for the photo crop. */
  position?: string;
};

/**
 * Cinematic brand portrait with HUD framing. If the real photo is missing,
 * it gracefully renders an on-brand gradient panel instead of a broken image.
 */
export function BrandImage({
  portrait,
  className = "",
  aspect = "aspect-[3/4]",
  showCaption = false,
  priority = false,
  position = "center top",
}: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`neon-frame group relative overflow-hidden rounded-[1.75rem] bg-black/40 ${aspect} ${className}`}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={portrait.src}
          alt={portrait.alt}
          onError={() => setFailed(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: position }}
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${portrait.gradient}`}
          aria-label={portrait.alt}
          role="img"
        >
          <div className="absolute inset-0 grid-overlay opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.32),transparent_55%)]" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25" />
          <div className="absolute bottom-7 left-0 right-0 text-center">
            <div className="text-[10px] uppercase tracking-[0.45em] text-white/70">
              Portrait
            </div>
          </div>
        </div>
      )}

      {/* Environmental blend: keeps the photo from sitting flat */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03040a] via-[#03040a]/15 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-transparent to-fuchsia-500/15 mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[linear-gradient(180deg,transparent,rgba(78,224,255,0.14),transparent)] [background-size:100%_45%] [animation:scan_3.5s_linear_infinite]" />

      {/* HUD corner brackets */}
      {(["left-3 top-3", "right-3 top-3 rotate-90", "right-3 bottom-3 rotate-180", "left-3 bottom-3 -rotate-90"] as const).map(
        (pos) => (
          <span
            key={pos}
            className={`pointer-events-none absolute h-5 w-5 border-l-2 border-t-2 border-cyan-300/60 ${pos}`}
          />
        ),
      )}

      {showCaption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/90">
            {portrait.caption}
          </div>
          <div className="mt-1 text-sm text-white/75">{portrait.scene}</div>
        </div>
      )}
    </div>
  );
}
