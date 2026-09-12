import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://jamaurjohnson.com";
const BOOKING_URL = "https://speakwith.us/jamaurjohnson";

export const metadata: Metadata = {
  title: "Digital Real Estate | Jamaur Johnson",
  description:
    "Jamaur Johnson's framework for building digital assets that compound: content, audience, software, automation, affiliate revenue, data, and recurring systems.",
  alternates: { canonical: `${SITE_URL}/digital-real-estate` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/digital-real-estate`,
    siteName: "Jamaur Johnson",
    title: "Digital Real Estate · Jamaur Johnson",
    description:
      "Build digital assets that keep creating attention, leads, customers, and recurring revenue after the initial work is done.",
  },
};

const ASSETS = [
  {
    title: "Audience",
    body: "Email lists, communities, subscribers, followers, and relationships you can reach again without starting from zero.",
  },
  {
    title: "Content",
    body: "Videos, articles, tutorials, clips, search traffic, and educational assets that can keep attracting attention long after publication.",
  },
  {
    title: "Systems",
    body: "Automations, funnels, CRM workflows, AI agents, onboarding, follow-up, and infrastructure that keeps operating when you are not manually pushing every button.",
  },
  {
    title: "Distribution",
    body: "Channels, partnerships, affiliate relationships, referral paths, and repeatable ways to move an offer in front of the right people.",
  },
  {
    title: "Recurring Revenue",
    body: "Subscriptions, affiliate commissions, retainers, licensing, software, communities, and other models where one successful acquisition can keep producing value over time.",
  },
  {
    title: "Intellectual Property",
    body: "Your frameworks, prompts, data, playbooks, brands, code, media, and proprietary knowledge become assets when they are organized so they can be reused and distributed.",
  },
] as const;

const FLYWHEEL = [
  ["01", "Own attention", "Create useful content and build direct relationships instead of depending entirely on rented reach."],
  ["02", "Capture demand", "Move attention into an owned system: CRM, email, community, booking flow, trial, or another measurable next step."],
  ["03", "Activate value", "Help people get a result quickly. Better activation makes every audience, referral, and acquisition channel more valuable."],
  ["04", "Monetize repeatedly", "Use the right recurring model: software, affiliate revenue, consulting, subscriptions, licensing, or a mix that fits the asset."],
  ["05", "Compound the asset", "Improve the content, automation, data, retention, and distribution so yesterday's work can keep contributing to tomorrow's revenue."],
] as const;

export default function DigitalRealEstatePage() {
  return (
    <main className="min-h-screen bg-[#06080f] text-white">
      <section className="relative overflow-hidden border-b border-white/10 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_70%_at_75%_0%,rgba(34,211,238,0.15),transparent_58%),radial-gradient(55%_65%_at_10%_30%,rgba(139,92,246,0.18),transparent_62%)]" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Link href="/" className="text-[10px] uppercase tracking-[0.3em] text-white/45 transition-colors hover:text-cyan-300">
            ← Jamaur Johnson
          </Link>

          <div className="mt-12 max-w-5xl">
            <div className="text-[11px] uppercase tracking-[0.32em] text-cyan-300">Digital Real Estate</div>
            <h1
              className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Build Digital Assets That Keep Working After You Log Off.
            </h1>
            <p className="mt-7 max-w-4xl text-lg leading-relaxed text-white/70 sm:text-xl">
              I think of digital real estate as anything you build once, improve continuously, and can keep using to create attention, leads, customers, leverage, or recurring revenue. A website can be digital real estate. So can a content library, a community, a software system, a referral network, an automation stack, or an affiliate relationship with durable economics.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-full bg-cyan-300 px-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#06080f] transition-transform hover:-translate-y-0.5"
              >
                Schedule Time With Me
              </a>
              <a
                href="#framework"
                className="inline-flex h-12 items-center rounded-full border border-white/15 px-7 text-[11px] uppercase tracking-[0.22em] text-white/80 transition-colors hover:border-violet-400/50 hover:text-white"
              >
                See The Framework
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-violet-300">The Core Idea</div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">Ownership beats repeated effort.</h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
              <p>
                If an activity only pays when you personally repeat it, you have income — but not necessarily an asset. Digital real estate starts when the work creates something reusable: a ranked page, an email list, a trained AI workflow, a content archive, a customer base, a referral relationship, a brand, or a system that can keep creating value.
              </p>
              <p>
                The goal is not "passive income" by magic. The goal is leverage: make the next result easier because the previous work left behind something useful.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ASSETS.map((asset) => (
              <div key={asset.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-sm font-semibold text-cyan-300">{asset.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{asset.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090d17] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-4xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">Where HighLevel Fits</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">HighLevel is infrastructure, not the whole strategy.</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              HighLevel is one example of the operating layer behind digital real estate. CRM, funnels, calendars, automations, messaging, communities, payments, and follow-up can turn scattered attention into an organized customer journey. The software matters because it helps preserve and activate the value created by content, relationships, and demand.
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              I am not positioning this as agency management. My current focus is strategic: helping serious operators, affiliates, and high producers think through the systems, activation, retention, positioning, and growth mechanics behind what they are already building.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Affiliate Marketing</div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">Affiliate revenue can be one layer of the property.</h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
              <p>
                Affiliate marketing becomes more interesting when it stops being just "post a link and hope." The asset is the combination of trusted audience, useful content, positioning, onboarding, customer success, and relationships that can keep producing qualified referrals over time.
              </p>
              <p>
                For a strong producer, the real questions become: Where is the funnel leaking? Are people clicking but not trialing? Trialing but not activating? Paying but not staying? Those are digital-asset questions because improvements compound across future traffic.
              </p>
              <Link href="/affiliate-growth" className="inline-flex text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200">
                Explore the deeper affiliate-growth framework →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="framework" className="border-b border-white/10 bg-[#090d17] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">The Compounding Framework</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">Build once. Improve forever. Compound the advantage.</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {FLYWHEEL.map(([number, title, body]) => (
              <div key={number} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="font-mono text-xs text-cyan-300">{number}</div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">Talk Strategy</div>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
            If you already have momentum, let&apos;s figure out what should become an asset next.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg">
            Best fit for established affiliates, high producers, founders, and serious operators who want to turn what is already working into a more durable system.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-cyan-300 px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#06080f] transition-transform hover:-translate-y-0.5"
          >
            Book A Strategy Call
          </a>
          <p className="mx-auto mt-8 max-w-3xl text-xs leading-relaxed text-white/35">
            HighLevel is a third-party software platform. Content on this personal site reflects Jamaur Johnson&apos;s own perspective and is not an official HighLevel statement or earnings guarantee.
          </p>
        </div>
      </section>
    </main>
  );
}
