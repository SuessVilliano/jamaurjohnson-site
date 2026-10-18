"use client";

import { useLeadModal } from "@/components/lead/LeadModalContext";

const channels = [
  { label: "Trading & Community", description: "Market education, discipline, live discussions and the Trade Hybrid ecosystem.", href: "https://tradehybrid.co", action: "Explore Trade Hybrid", tag: "TRADE" },
  { label: "AI, SaaS & Digital Business", description: "Watch real builds, software tutorials, automation workflows and independent creator experiments.", href: "/perspective/insights", action: "Explore tutorials", tag: "BUILD" },
  { label: "Life Insurance & Legacy", description: "Learn the fundamentals of coverage, protection and long-term planning. Individual recommendations require a licensed professional.", href: "#contact", action: "Ask a question", tag: "PROTECT" },
  { label: "Mindset & Personal Development", description: "Books, stories, creative projects and practical systems for reclaiming time and building a meaningful life.", href: "#books", action: "Explore books", tag: "ELEVATE" },
  { label: "Music & TIME BACK", description: "Listen to the new original motion picture soundtrack and explore the music catalog.", href: "#music", action: "Hear the album", tag: "CREATE" },
  { label: "Hybrid Funding", description: "Explore the separately operated trader evaluation platform, programs and published risk rules.", href: "https://hybridfunding.co", action: "Explore Hybrid Funding", tag: "DISCOVER" },
] as const;

export function ContentHub() {
  const { openQuestionnaire } = useLeadModal();
  return (
    <section id="content" className="relative border-y border-white/10 bg-[#070c18] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">The Jamaur Johnson Content Network</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Build. Trade. Create. Elevate.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">One home for the things I am building and learning. Pick your lane, watch the work, and discover resources that fit your goals.</p>
          </div>
          <button type="button" onClick={openQuestionnaire} className="rounded-full bg-cyan-300 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Connect & tell me what interests you →</button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {channels.map((channel) => (
            <a key={channel.label} href={channel.href} target={channel.href.startsWith("https://") ? "_blank" : undefined} rel={channel.href.startsWith("https://") ? "noopener noreferrer" : undefined} className="group flex min-h-60 flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-cyan-300/40 hover:bg-white/[0.07]">
              <span className="text-xs font-mono tracking-[0.2em] text-cyan-300">{channel.tag}</span>
              <h3 className="mt-5 text-xl font-semibold text-white">{channel.label}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{channel.description}</p>
              <span className="mt-6 text-sm font-medium text-cyan-300 group-hover:text-cyan-200">{channel.action} →</span>
            </a>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-xs leading-relaxed text-white/45">Independent personal content. Views are my own, not statements by my employer. Educational trading content is not investment advice; trading and funded-trader evaluations carry risk. Insurance information is general education, not an individualized recommendation.</p>
      </div>
    </section>
  );
}
