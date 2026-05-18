export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
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
    </footer>
  );
}
