"use client";

import { useEffect, useState } from "react";

export function StickyMobileCTA({ onRequestAudit }: { onRequestAudit: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-3 bottom-3 z-30 md:hidden transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        onClick={onRequestAudit}
        className="flex h-13 w-full items-center justify-center rounded-full bg-[#c2a567] py-3.5 text-[11px] uppercase tracking-[0.22em] text-[#0a0f1d] shadow-[0_20px_50px_-15px_rgba(194,165,103,0.55)]"
      >
        Request a Business Audit
      </button>
    </div>
  );
}
