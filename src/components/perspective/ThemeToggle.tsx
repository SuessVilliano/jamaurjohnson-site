"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "perspective-theme";

type Theme = "dark" | "light";

function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage disabled — fall through
  }
  return "dark";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.querySelector(".perspective-root");
  if (!root) return;
  if (theme === "light") root.classList.add("perspective-light");
  else root.classList.remove("perspective-light");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = readInitialTheme();
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--p-border,rgba(255,255,255,0.12))] text-[var(--p-text-muted,rgba(244,237,224,0.7))] transition-colors hover:border-[#c2a567]/40 hover:text-[#e9d5a3]"
    >
      <span aria-hidden="true" className="text-base leading-none">
        {/* Render a stable glyph until hydration so SSR + client agree. */}
        {!mounted ? "◐" : theme === "dark" ? "☾" : "☀"}
      </span>
    </button>
  );
}
