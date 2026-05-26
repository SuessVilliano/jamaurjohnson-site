"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  ariaLabel: string;
  maxWidth?: string;
};

export function Modal({ open, onClose, children, ariaLabel, maxWidth = "max-w-lg" }: Props) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Adds a body class so global page chrome (like the GoHighLevel chat
    // bubble in the root layout) can hide itself via CSS when a modal is
    // covering the screen.
    document.body.classList.add("jamaur-modal-open");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      document.body.classList.remove("jamaur-modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full ${maxWidth} max-h-[90vh] overflow-y-auto rounded-3xl glass-strong border border-white/10 p-6 sm:p-8 shadow-[0_30px_120px_-20px_rgba(0,0,0,0.7)]`}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 h-9 w-9 rounded-full glass inline-flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              ✕
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
