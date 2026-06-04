"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Returns false during SSR and the first client render, true afterwards —
 * without a setState-in-effect (the React-19/Next-16 lint rules flag that).
 * Use to gate client-only UI (e.g. 3D canvas, theme-dependent glyphs).
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
