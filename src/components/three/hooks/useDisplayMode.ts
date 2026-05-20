"use client";

import { useSyncExternalStore } from "react";

export type DisplayMode = "full" | "lite" | "off";

function readMode(): DisplayMode {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "off";
  return window.matchMedia("(max-width: 768px)").matches ? "lite" : "full";
}

function subscribeMode(onChange: () => void) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const small = window.matchMedia("(max-width: 768px)");
  reduce.addEventListener("change", onChange);
  small.addEventListener("change", onChange);
  return () => {
    reduce.removeEventListener("change", onChange);
    small.removeEventListener("change", onChange);
  };
}

export function useDisplayMode(): DisplayMode {
  return useSyncExternalStore(subscribeMode, readMode, () => "full");
}
