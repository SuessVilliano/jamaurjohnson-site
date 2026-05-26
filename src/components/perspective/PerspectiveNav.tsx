"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, PERSPECTIVE_META } from "@/lib/perspective-content";
import { ThemeToggle } from "./ThemeToggle";

export function PerspectiveNav({ onRequestAudit }: { onRequestAudit: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#06080f]/85 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
          <a href="#top" className="flex items-baseline gap-2">
            <span
              className="text-base font-semibold tracking-[0.18em] text-[#f4ede0] sm:text-lg"
              style={{ fontFamily: "var(--font-editorial)" }}
            >
              LIV8
            </span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-[#c2a567]/90 sm:text-xs">
              Perspective
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13px] uppercase tracking-[0.18em] text-[#f4ede0]/65 transition-colors hover:text-[#f4ede0]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={onRequestAudit}
              className="inline-flex h-10 items-center rounded-full border border-[#c2a567]/40 bg-[#c2a567]/10 px-5 text-xs uppercase tracking-[0.22em] text-[#e9d5a3] transition-colors hover:bg-[#c2a567]/20"
            >
              Request Audit
            </button>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#f4ede0]"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full bg-current transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full bg-current transition-transform ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#06080f]/95 backdrop-blur-2xl pt-20">
          <ul className="flex flex-col items-center gap-7 pb-12">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-xl text-[#f4ede0]"
                  style={{ fontFamily: "var(--font-editorial)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <div className="mt-3 flex flex-col items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => {
                  setOpen(false);
                  onRequestAudit();
                }}
                className="inline-flex h-12 items-center rounded-full border border-[#c2a567]/40 bg-[#c2a567]/15 px-7 text-xs uppercase tracking-[0.22em] text-[#e9d5a3]"
              >
                Request Audit
              </button>
            </div>
          </ul>
        </div>
      )}

      {/* Edition / publication strip — gives the page a magazine masthead feel */}
      <div className="hidden md:block fixed inset-x-0 top-20 z-30 border-y border-white/5 bg-[#06080f]/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-[10px] uppercase tracking-[0.32em] text-[#f4ede0]/55">
          <span>{PERSPECTIVE_META.tagline}</span>
          <span>{PERSPECTIVE_META.publishedDate}</span>
        </div>
      </div>
    </>
  );
}
