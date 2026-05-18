"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLeadModal } from "@/components/lead/LeadModalContext";

const LINKS = [
  { href: "#worlds", label: "Worlds" },
  { href: "#books", label: "Books" },
  { href: "#companies", label: "Companies" },
  { href: "#sites", label: "Sites" },
  { href: "#music", label: "Music" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 0.7]);
  const [open, setOpen] = useState(false);
  const { openCalendar } = useLeadModal();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        style={{
          backgroundColor: "rgba(3, 4, 10, 0.0)",
        }}
        className="fixed top-0 inset-x-0 z-50"
      >
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 backdrop-blur-xl bg-black/40 border-b border-white/5"
        />
        <nav className="relative mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Link
            href="#top"
            className="text-lg sm:text-xl font-semibold tracking-[0.3em] text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            JAMAUR
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={openCalendar}
            className="hidden md:inline-flex h-10 items-center rounded-full px-5 text-sm text-white bg-gradient-to-r from-cyan-400/80 to-violet-500/80 hover:shadow-[0_10px_40px_-10px_rgba(78,224,255,0.6)] transition-shadow"
          >
            Book a Call
          </button>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full glass"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full bg-white transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full bg-white transition-transform ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 md:hidden bg-black/85 backdrop-blur-2xl pt-20"
        >
          <ul className="flex flex-col items-center gap-7 mt-10">
            {LINKS.map((l, i) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl text-white/90"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {l.label}
                </a>
              </motion.li>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * LINKS.length }}
              onClick={() => {
                setOpen(false);
                openCalendar();
              }}
              className="mt-4 inline-flex h-12 items-center rounded-full px-7 text-base text-white bg-gradient-to-r from-cyan-400/80 to-violet-500/80"
            >
              Book a Call
            </motion.button>
          </ul>
        </motion.div>
      )}
    </>
  );
}
