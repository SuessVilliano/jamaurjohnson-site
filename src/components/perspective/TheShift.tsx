import { SHIFT } from "@/lib/perspective-content";
import { SectionEyebrow } from "./DiscoveryCards";

export function TheShift() {
  return (
    <section id="systems" className="relative py-24 sm:py-32 bg-[#080c16]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#c2a567]/40 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow>The Shift</SectionEyebrow>
        <h2
          className="mt-4 max-w-3xl text-balance text-3xl leading-[1.1] text-[#f4ede0] sm:text-5xl"
          style={{ fontFamily: "var(--font-editorial)" }}
        >
          What changes after the audit isn&apos;t dramatic. It&apos;s structural.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#f4ede0]/65">
          The work is mostly invisible from the outside — and entirely visible from the
          inside. These are the operational shifts owners describe most often after the
          system is in place.
        </p>

        <div className="mt-14 divide-y divide-white/8 border-y border-white/8">
          {SHIFT.map((s, i) => (
            <div
              key={s.before}
              className="grid grid-cols-[auto_1fr_auto_1fr] items-center gap-4 py-5 sm:gap-8 sm:py-6"
            >
              <span
                className="text-xs text-[#c2a567]/50"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="text-[14px] leading-snug text-[#f4ede0]/45 line-through decoration-[#c2a567]/30 sm:text-base">
                {s.before}
              </div>
              <span className="text-[#c2a567]/70">→</span>
              <div
                className="text-[15px] leading-snug text-[#f4ede0] sm:text-lg"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                {s.after}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
