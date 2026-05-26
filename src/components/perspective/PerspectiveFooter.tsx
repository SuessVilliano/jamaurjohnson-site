import { FOOTER } from "@/lib/perspective-content";

export function PerspectiveFooter() {
  return (
    <footer id="about" className="border-t border-white/8 bg-[#04060c] pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span
                className="text-lg font-semibold tracking-[0.18em] text-[#f4ede0]"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                LIV8
              </span>
              <span className="text-xs uppercase tracking-[0.32em] text-[#c2a567]/85">
                Perspective
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#f4ede0]/55">
              {FOOTER.blurb}
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-[#f4ede0]/45">
              Sections
            </div>
            <ul className="mt-4 space-y-3 text-sm text-[#f4ede0]/75">
              {FOOTER.nav.map((l) => (
                <li key={l.href}>
                  <a className="hover:text-[#e9d5a3] transition-colors" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-[#f4ede0]/45">
              Follow
            </div>
            <ul className="mt-4 space-y-3 text-sm text-[#f4ede0]/75">
              {FOOTER.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#e9d5a3] transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/8 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#f4ede0]/40">
              © {new Date().getFullYear()} LIV8 Perspective · Published by Jamaur Johnson
            </p>
            <ul className="flex gap-5 text-[11px] uppercase tracking-[0.28em] text-[#f4ede0]/55">
              {FOOTER.legal.map((l) => (
                <li key={l.href}>
                  <a className="hover:text-[#e9d5a3] transition-colors" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-[#f4ede0]/35">
            {FOOTER.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
