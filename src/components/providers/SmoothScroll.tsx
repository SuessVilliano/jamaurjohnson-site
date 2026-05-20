"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { spacerFractionForAnchor } from "@/components/providers/ScrollProgress";

/**
 * Lenis smooth scrolling + GSAP ScrollTrigger bridge.
 *
 * Both libraries share a single ticker so the scroll-driven 3D scene stays
 * frame-locked with the scroll position. Disabled when the visitor prefers
 * reduced motion. In-page anchor links glide through Lenis, and pillar
 * anchors in cinematic mode resolve to the correct point on the pinned
 * scroll spacer (including direct visits with a URL hash).
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // The ScrollTrigger in PinnedStory uses `start: "top top"` / `end: "bottom bottom"`,
    // so progress 0..1 maps to scroll distance = spacerHeight - viewportHeight.
    const scrollToHash = (hash: string, opts: { immediate?: boolean } = {}): boolean => {
      const id = hash.startsWith("#") ? hash : `#${hash}`;
      if (id === "#") return false;

      const spacer = document.getElementById("pinned-story-spacer");
      const fraction = spacerFractionForAnchor(id);
      if (spacer && fraction !== null) {
        const distance = Math.max(0, spacer.offsetHeight - window.innerHeight);
        const y = spacer.offsetTop + fraction * distance;
        lenis.scrollTo(y, { offset: 0, immediate: opts.immediate });
        return true;
      }

      const el = document.querySelector(id);
      if (el) {
        lenis.scrollTo(el as HTMLElement, { offset: -80, immediate: opts.immediate });
        return true;
      }
      return false;
    };

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      if (!scrollToHash(id)) return;
      e.preventDefault();
      history.replaceState(null, "", id);
    };

    document.addEventListener("click", onClick);

    // Reconcile the initial URL hash once the pinned spacer is on the page.
    // In cinematic mode the spacer mounts a tick after this effect runs, so
    // we observe the DOM until it appears (with a safety timeout).
    let hashObserver: MutationObserver | null = null;
    let hashTimeout: ReturnType<typeof setTimeout> | null = null;
    const initialHash = window.location.hash;
    if (initialHash && initialHash !== "#") {
      if (!scrollToHash(initialHash, { immediate: true })) {
        hashObserver = new MutationObserver(() => {
          if (scrollToHash(initialHash, { immediate: true })) {
            hashObserver?.disconnect();
            hashObserver = null;
            if (hashTimeout) clearTimeout(hashTimeout);
          }
        });
        hashObserver.observe(document.body, { childList: true, subtree: true });
        hashTimeout = setTimeout(() => {
          hashObserver?.disconnect();
          hashObserver = null;
        }, 5000);
      }
    }

    return () => {
      document.removeEventListener("click", onClick);
      hashObserver?.disconnect();
      if (hashTimeout) clearTimeout(hashTimeout);
      gsap.ticker.remove(tickerCallback);
      ScrollTrigger.getAll().forEach((s) => s.kill());
      lenis.destroy();
    };
  }, []);

  return null;
}
