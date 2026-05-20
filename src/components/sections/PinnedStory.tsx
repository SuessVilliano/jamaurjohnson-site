"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollProgressStore } from "@/components/providers/ScrollProgress";
import { IntroOverlay } from "./overlays/IntroOverlay";
import { AboutOverlay } from "./overlays/AboutOverlay";
import { BuildOverlay } from "./overlays/BuildOverlay";
import { TradeOverlay } from "./overlays/TradeOverlay";
import { CreateOverlay } from "./overlays/CreateOverlay";
import { ElevateOverlay } from "./overlays/ElevateOverlay";
import { OutroOverlay } from "./overlays/OutroOverlay";

/**
 * The pinned-viewport orchestrator. The tall spacer is what the user actually
 * scrolls — the visible stage stays fixed in the viewport, and overlay opacity
 * is driven by the master ScrollTrigger that scrubs through the spacer.
 */
export function PinnedStory() {
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!spacerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: spacerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => scrollProgressStore.set(self.progress),
    });

    return () => {
      trigger.kill();
      scrollProgressStore.set(0);
    };
  }, []);

  return (
    <>
      {/* Tall spacer — 7 scenes × 100vh of scroll surface */}
      <div ref={spacerRef} id="pinned-story-spacer" style={{ height: "700vh" }} aria-hidden />

      {/* Fixed overlay stage */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <IntroOverlay />
        <AboutOverlay />
        <BuildOverlay />
        <TradeOverlay />
        <CreateOverlay />
        <ElevateOverlay />
        <OutroOverlay />
      </div>
    </>
  );
}
