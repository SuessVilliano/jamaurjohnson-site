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
