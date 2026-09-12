import Link from "next/link";
import type { Metadata } from "next";
import { GhlEmbed } from "@/components/lead/GhlEmbed";
import { AFFILIATE_STAGE_IMAGE_1, AFFILIATE_STAGE_IMAGE_2 } from "@/lib/affiliate-stage-image";

const SITE_URL = "https://jamaurjohnson.com";
const AFFILIATE_STAGE_IMAGE = `data:image/webp;base64,${AFFILIATE_STAGE_IMAGE_1}${AFFILIATE_STAGE_IMAGE_2}`;

export const metadata: Metadata = {
  title: "Affiliate Growth & Digital Real Estate",
  description:
    "Jamaur Johnson on affiliate growth, recurring revenue, HighLevel, and building digital real estate that compounds month after month.",
  alternates: { canonical: `${SITE_URL}/affiliate-growth` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/affiliate-growth`,
    siteName: "Jamaur Johnson",
    title: "Affiliate Growth & Digital Real Estate · Jamaur Johnson",
    description:
      "How serious affiliates turn content, trust, software and retention into recurring digital assets.",
  },
};

const ECONOMICS = [
  ["$97 plan", "$38.80/mo"],
  ["$297 plan", "$118.80/mo"],
  ["$497 plan", "$198.80/mo"],
] as const;

const FRAMEWORK = [
  {
    number: "01",
    title: "Earn attention",
    body: "Content, community, partnerships and education create the first touch. The goal is not clicks for the sake of clicks — it is qualified attention from people who can actually benefit from the platform.",
  },
  {
    number: "02",
    title: "Convert trust into trials",
    body: "A referral link is not a strategy. The best affiliates give people a reason to act: a use case, a clear offer, proof, a tutorial, a migration plan or a specific problem the platform solves.",
  },
  {
    number: "03",
    title: "Turn trials into customers",
    body: "This is where onboarding matters. Faster time-to-value, better education and clearer next steps usually matter more than another round of promotion.",
  },
  {
    number: "04",
    title: "Protect retention",
    body: "Recurring revenue only compounds when customers stay. Strong affiliates keep teaching after the sale, build communities, surface new use cases and help customers keep getting value from the product.",
  },
  {
    number: "05",
    title: "Build the asset",
    body: "When the system works, yesterday's content and relationships can keep producing tomorrow's commissions. That is the point where affiliate marketing starts behaving like digital real estate.",
  },
] as const;

export default function AffiliateGrowthPage() {
  return (
    <main className="min-h-screen bg-[#06080f] text-white">
      <section className="relative overflow-hidden border-b border-white/10 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_70%_at_70%_0%,rgba(34,211,238,0.14),transparent_58%),radial-gradient(55%_60%_at_15%_25%,rgba(168,85,247,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-cyan-300"
          >
            ← Jamaur Johnson
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div>
              <div className="text-[11px] uppercase tracking-[0.32em] text-cyan-300">
                Digital Growth & Affiliate Strategy
              </div>
              <h1
                className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                I Think About Affiliate Revenue Like Digital Real Estate.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
                You build the asset once, improve it continuously, and — when the economics and retention are right — it can keep paying you every month. My work inside the HighLevel affiliate ecosystem puts me alongside established partners who have already crossed the 100+ trial threshold, which gives me a front-row view of what separates a referral link from a real recurring-revenue engine.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#book"
                  className="inline-flex h-12 items-center rounded-full bg-cyan-300 px-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#06080f] transition-transform hover:-translate-y-0.5"
                >
                  Schedule Time With Me
                </a>
                <Link
                  href="/perspective/insights"
                  className="inline-flex h-12 items-center rounded-full border border-white/15 px-7 text-[11px] uppercase tracking-[0.22em] text-white/80 transition-colors hover:border-violet-400/50 hover:text-white"
                >
                  Read Affiliate Insights
                </Link>
              </div>
            </div>

            <figure className="relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.03] shadow-2xl shadow-cyan-950/30 lg:mx-0 lg:ml-auto">
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#06080f]/70 via-transparent to-cyan-400/5" />
              <img
                src={AFFILIATE_STAGE_IMAGE}
                alt="Jamaur Johnson speaking on stage about affiliate marketing"
                className="aspect-[2/3] h-auto w-full object-cover"
              />
              <figcaption className="absolute inset-x-5 bottom-5 z-20 rounded-2xl border border-white/10 bg-[#06080f]/80 px-5 py-4 backdrop-blur-md">
                <div className="text-[10px] uppercase tracking-[0.28em] text-cyan-300">Affiliate Growth</div>
                <div className="mt-1 text-sm font-medium text-white/90">People. Systems. Profits. Freedom.</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Who I Am In This World</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Founder brain. Operator experience. Affiliate-growth lens.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              I did not stop being a founder, AI automation architect, trader or builder when I stepped deeper into the affiliate side of software. I added another vantage point: what happens after a platform is built, when thousands of people have to understand it, trust it, sell it, onboard customers into it and keep those customers successful.
            </p>
            <p>
              My focus is established affiliate partners — the people who have already proven they can create demand. At the 100+ trial level, the conversation changes. It is less about “how do I post my link?” and more about conversion, activation, retention, positioning, campaigns, content systems, attribution and how to make the revenue durable.
            </p>
            <p>
              That is the part that fits everything else I already do. I have always been interested in leverage: systems that keep working after the initial effort is over. Affiliate revenue is another form of leverage when it is built correctly.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090d17] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">The Digital Real Estate Idea</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              A customer can become a piece of recurring digital property.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              HighLevel publicly advertises a 40% monthly recurring commission on direct referred subscriptions. That means a customer who stays active can keep producing commission month after month. It is not passive by magic — retention still has to be earned — but the economics are fundamentally different from a one-time sale.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {ECONOMICS.map(([plan, commission]) => (
              <div key={plan} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs uppercase tracking-[0.24em] text-white/45">HighLevel {plan}</div>
                <div className="mt-3 text-3xl font-semibold text-cyan-300">{commission}</div>
                <div className="mt-2 text-sm text-white/50">illustrative 40% recurring commission</div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-white/45">
            Example economics only. Actual earnings depend on referred plan mix, trial-to-paid conversion, retention, upgrades, cancellations, attribution and current affiliate-program terms. A trial by itself is not a commission.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-violet-300">The Growth System</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              The affiliate flywheel is bigger than traffic.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {FRAMEWORK.map((item) => (
              <div key={item.number} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="text-xs font-mono text-cyan-300">{item.number}</div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090d17] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">What I Look At</div>
              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">The earliest constraint in the funnel.</h3>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Audience → content and offer → clicks → trials → paid customers → retention → recurring affiliate revenue. If the audience is there but clicks are weak, that is a positioning problem. If trials are healthy but paid conversion is weak, that is an activation problem. If paid customers churn, more traffic simply pours water into a leaking bucket.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <div className="text-[10px] uppercase tracking-[0.3em] text-violet-300">What I Believe</div>
              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Trust is a measurable growth asset.</h3>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                The fastest way to rebuild momentum with an audience or an inactive partner is not another generic check-in. It is a useful hook: a promotion, a content angle, a funnel insight, a milestone gap, a fix, or a concrete next move. Be human. Be concise. Be useful. End with one clear next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">Talk Strategy</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Already generating HighLevel trials? Let&apos;s talk about what comes next.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
              If you are building content, generating trials, trying to improve activation or turning your referrals into a more durable recurring-revenue business, schedule time with me below.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white">
            <GhlEmbed type="calendar" />
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-white/35">
            HighLevel is a third-party software platform. Content on this personal site reflects Jamaur Johnson&apos;s own perspective and is not an official HighLevel statement, guarantee or earnings claim. Affiliate terms and program details can change.
          </p>
        </div>
      </section>
    </main>
  );
}
