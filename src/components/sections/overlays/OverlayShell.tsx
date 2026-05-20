"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  pillarWindow,
  scrollProgressStore,
  type PillarKey,
} from "@/components/providers/ScrollProgress";

type Props = {
  pillar: PillarKey;
  /** anchor id so Nav links land here */
  id?: string;
  /** legacy anchor ids that should also scroll to this pillar */
  aliases?: string[];
  children: ReactNode;
  className?: string;
};

/**
 * Renders a full-viewport overlay whose opacity is driven directly by scroll
 * progress without forcing React re-renders. The overlay sits absolutely
 * inside the pinned stage and only catches pointer events while visible.
 */
export function OverlayShell({ pillar, id, aliases, children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const [start, end] = pillarWindow(pillar);
    const range = end - start;

    let raf = 0;
    const tick = () => {
      const { progress } = scrollProgressStore.get();
      const local = (progress - start) / range;
      let opacity = 0;
      if (local > -0.4 && local < 1.4) {
        const fadeIn = Math.max(0, Math.min(1, (local + 0.25) / 0.35));
        const fadeOut = Math.max(0, Math.min(1, (1.25 - local) / 0.35));
        opacity = Math.min(fadeIn, fadeOut);
      }
      el.style.opacity = String(opacity);
      el.style.pointerEvents = opacity > 0.5 ? "auto" : "none";
      el.style.visibility = opacity > 0.01 ? "visible" : "hidden";
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pillar]);

  return (
    <section
      ref={ref}
      id={id}
      className={`absolute inset-0 overflow-y-auto overflow-x-hidden ${className}`}
      style={{ opacity: 0, visibility: "hidden" }}
    >
      {aliases?.map((alias) => (
        <span key={alias} id={alias} aria-hidden className="block h-0 w-0" />
      ))}
      {children}
    </section>
  );
}
