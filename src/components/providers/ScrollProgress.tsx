"use client";

import { useSyncExternalStore } from "react";

export type PillarKey = "intro" | "about" | "build" | "trade" | "create" | "elevate" | "outro";

export const PILLAR_KEYS: PillarKey[] = [
  "intro",
  "about",
  "build",
  "trade",
  "create",
  "elevate",
  "outro",
];

type Snapshot = {
  /** 0..1 across the entire pinned story */
  progress: number;
  /** which pillar's window the global progress currently sits in */
  pillar: PillarKey;
  /** 0..1 within the active pillar's window */
  pillarLocalProgress: number;
};

const INITIAL: Snapshot = {
  progress: 0,
  pillar: "intro",
  pillarLocalProgress: 0,
};

const listeners = new Set<() => void>();
let snapshot: Snapshot = INITIAL;

function deriveSnapshot(progress: number): Snapshot {
  const n = PILLAR_KEYS.length;
  const clamped = Math.max(0, Math.min(1, progress));
  const stepped = clamped * n;
  const idx = Math.min(n - 1, Math.floor(stepped));
  const local = stepped - idx;
  return {
    progress: clamped,
    pillar: PILLAR_KEYS[idx],
    pillarLocalProgress: local,
  };
}

export const scrollProgressStore = {
  set(progress: number) {
    snapshot = deriveSnapshot(progress);
    listeners.forEach((l) => l());
  },
  /** read without subscribing — for use inside useFrame */
  get(): Snapshot {
    return snapshot;
  },
};

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return snapshot;
}

function getServerSnapshot() {
  return INITIAL;
}

/** React-subscribed read. Re-renders the component on any progress change. */
export function useScrollProgress(): Snapshot {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Re-renders only when the active pillar changes (not on every progress tick).
 * Use this for overlay opacity gating to avoid 60fps React work.
 */
export function useActivePillar(): PillarKey {
  return useSyncExternalStore(
    subscribe,
    () => snapshot.pillar,
    () => INITIAL.pillar,
  );
}

/** Returns the relative window (start, end) of a pillar across the global progress. */
export function pillarWindow(pillar: PillarKey): [number, number] {
  const i = PILLAR_KEYS.indexOf(pillar);
  const n = PILLAR_KEYS.length;
  return [i / n, (i + 1) / n];
}

/** Map of every anchor id (legacy + new) to the pillar it lands on. */
export const ANCHOR_TO_PILLAR: Record<string, PillarKey> = {
  top: "intro",
  about: "about",
  build: "build",
  system: "build",
  companies: "build",
  network: "build",
  expertise: "build",
  trade: "trade",
  create: "create",
  books: "create",
  music: "create",
  gallery: "create",
  elevate: "elevate",
  connect: "elevate",
  vision: "elevate",
  outro: "outro",
  contact: "outro",
};

/** Returns 0..1 spacer scroll fraction for a given anchor, or null if unknown. */
export function spacerFractionForAnchor(hash: string): number | null {
  const id = hash.replace(/^#/, "");
  const pillar = ANCHOR_TO_PILLAR[id];
  if (!pillar) return null;
  const i = PILLAR_KEYS.indexOf(pillar);
  // Land near the start of the pillar window so the overlay is fully visible.
  return (i + 0.45) / PILLAR_KEYS.length;
}
