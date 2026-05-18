"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  glow?: boolean;
  delay?: number;
};

export function GlassCard({
  children,
  className = "",
  interactive = true,
  glow = false,
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={interactive ? { y: -6, scale: 1.01 } : undefined}
      className={`group relative overflow-hidden rounded-3xl glass p-6 sm:p-7 transition-all duration-500 ${
        glow ? "glow-ring" : ""
      } ${className}`}
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/0 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
