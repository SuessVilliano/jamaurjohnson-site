import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        {/* Scan-to-connect QR */}
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="rounded-2xl bg-white p-3 shadow-[0_24px_70px_-20px_rgba(78,224,255,0.45)]">
            <Image
              src="/jamaur-johnson-qr.png"
              alt="QR code — scan to connect with Jamaur Johnson"
              width={500}
              height={500}
              className="h-40 w-40"
            />
          </div>
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/75"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(78,224,255,0.9)]" />
              Scan to Connect
            </div>
            <p className="mt-3 text-sm text-white/50 max-w-xs">
              Point your camera here to connect with Jamaur on the go.
            </p>
          </div>
        </div>

        {/* Google review CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://g.page/r/CfRDdHa0s75BEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full glass px-5 py-3 text-sm text-white/85 hover:text-white hover:bg-white/10 transition-colors"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-base"
            >
              ★
            </span>
            <span>
              <span className="block text-[10px] uppercase tracking-[0.28em] text-white/55">
                Worked with Jamaur?
              </span>
              <span className="block font-medium">Leave a Google review</span>
            </span>
            <span className="text-cyan-300 transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        {/* Wordmark + copyright */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
          <div
            className="text-xl font-semibold tracking-[0.3em] text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            JAMAUR
          </div>
          <div className="text-xs sm:text-sm text-white/45 text-center sm:text-right">
            © {new Date().getFullYear()} Jamaur Johnson. All Rights Reserved.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            Built as a living digital portfolio.
          </div>
        </div>
      </div>
    </footer>
  );
}
