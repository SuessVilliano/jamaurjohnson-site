"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "soft";
type Size = "sm" | "md" | "lg";

type Props = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const sizeMap: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-base sm:text-lg",
};

const variantMap: Record<Variant, string> = {
  primary:
    "text-white bg-gradient-to-r from-cyan-400/90 via-violet-500/90 to-fuchsia-500/90 shadow-[0_10px_40px_-10px_rgba(78,224,255,0.55)] hover:shadow-[0_20px_60px_-10px_rgba(139,92,246,0.7)]",
  ghost: "text-white/90 glass hover:text-white",
  soft: "text-white/90 bg-white/5 border border-white/10 hover:bg-white/10",
};

const HOVER = { y: -2 };
const TAP = { scale: 0.97 };

export function GlassButton({
  children,
  href,
  external,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type,
  disabled,
}: Props) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 active:scale-[0.98] will-change-transform";

  const disabledCls = disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "";
  const cls = `${base} ${sizeMap[size]} ${variantMap[variant]} ${disabledCls} ${className}`;

  if (href) {
    const isExternal = external ?? /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          whileHover={HOVER}
          whileTap={TAP}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.span whileHover={HOVER} whileTap={TAP} className="inline-flex">
        <Link href={href} className={cls} onClick={onClick}>
          {children}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      whileHover={disabled ? undefined : HOVER}
      whileTap={disabled ? undefined : TAP}
    >
      {children}
    </motion.button>
  );
}
