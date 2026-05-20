"use client";

import { BOOKS, MUSIC, PILLARS, YOUTUBE_URL } from "@/lib/portfolio-data";
import { OverlayShell } from "./OverlayShell";

export function CreateOverlay() {
  const pillar = PILLARS.find((p) => p.key === "CREATE")!;
  const featuredBooks = BOOKS.slice(0, 3);
  const featuredMusic = MUSIC.slice(0, 3);

  return (
    <OverlayShell pillar="create" id="create" aliases={["books", "music", "gallery"]}>
      <div className="relative h-full w-full flex items-center justify-center px-5 sm:px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-pink-200 pulse-on-hover">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_14px_rgba(255,97,211,0.9)]" />
              Pillar 03 · {pillar.tagline}
            </div>
            <h2
              className="mt-5 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gradient"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              CREATE
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-white/65 leading-relaxed">
              {pillar.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-fuchsia-200/80">
                Books · Coming Soon
              </div>
              <div className="space-y-2">
                {featuredBooks.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-2xl glass p-4 pulse-on-hover transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className="text-base font-semibold text-white"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                      >
                        {b.title}
                      </div>
                      <span className="shrink-0 text-[9px] uppercase tracking-[0.2em] text-fuchsia-200/70 border border-fuchsia-300/30 rounded-full px-2 py-0.5">
                        {b.category}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-white/55 leading-relaxed line-clamp-2">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-pink-200/80">
                Music · Suess Villiano / Meta SV
              </div>
              <div className="space-y-2">
                {featuredMusic.map((m) => (
                  <a
                    key={m.title}
                    href={m.link ?? "#"}
                    target={m.link ? "_blank" : undefined}
                    rel={m.link ? "noopener noreferrer" : undefined}
                    className="block rounded-2xl glass p-4 pulse-on-hover transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className="text-base font-semibold text-white"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                      >
                        {m.title}
                      </div>
                      {m.artist ? (
                        <span className="shrink-0 text-[9px] uppercase tracking-[0.2em] text-pink-200/70 border border-pink-300/30 rounded-full px-2 py-0.5">
                          {m.artist}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-xs text-white/55 leading-relaxed line-clamp-2">{m.description}</p>
                  </a>
                ))}
              </div>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs text-pink-200 hover:text-white transition-colors"
              >
                Watch on YouTube →
              </a>
            </div>
          </div>
        </div>
      </div>
    </OverlayShell>
  );
}
