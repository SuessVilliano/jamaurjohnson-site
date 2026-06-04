"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useMounted } from "@/components/hooks/useMounted";

const STORAGE_KEY = "perspective-theme";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.querySelector(".perspective-root");
  if (!root) return;
  if (theme === "light") root.classList.add("perspective-light");
  else root.classList.remove("perspective-light");
}

// Tiny external store for the theme — lets us read localStorage without a
// setState-in-effect (which the React 19 / Next 16 lint rules flag).
const listeners = new Set<() => void>();
let current: Theme | null = null;

function readTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage disabled — fall through
  }
  return "dark";
}

function getSnapshot(): Theme {
  if (current === null) current = readTheme();
  return current;
}
function getServerSnapshot(): Theme {
  return "dark";
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
function setTheme(next: Theme) {
  current = next;
  applyTheme(next);
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // ignore
  }
  listeners.forEach((l) => l());
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const mounted = useMounted();

  // Sync the DOM class to the current theme (side effect only — no setState).
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Until hydrated, present the server value so SSR + client markup agree.
  const display: Theme = mounted ? theme : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(display === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${display === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${display === "dark" ? "light" : "dark"} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--p-border,rgba(255,255,255,0.12))] text-[var(--p-text-muted,rgba(244,237,224,0.7))] transition-colors hover:border-[#c2a567]/40 hover:text-[#e9d5a3]"
    >
      <span aria-hidden="true" className="text-base leading-none">
        {!mounted ? "◐" : display === "dark" ? "☾" : "☀"}
      </span>
    </button>
  );
}
