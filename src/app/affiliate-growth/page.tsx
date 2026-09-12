import Link from "next/link";
import type { Metadata } from "next";
import { AFFILIATE_STAGE_IMAGE_1, AFFILIATE_STAGE_IMAGE_2 } from "@/lib/affiliate-stage-image";

const SITE_URL = "https://jamaurjohnson.com";
const BOOKING_URL = "https://speakwith.us/jamaurjohnson";
const AFFILIATE_STAGE_IMAGE = `data:image/webp;base64,${AFFILIATE_STAGE_IMAGE_1}${AFFILIATE_STAGE_IMAGE_2}`;

export const metadata: Metadata = {
  title: "Affiliate Growth Strategy & Consulting",
  description:
    "Jamaur Johnson works with established HighLevel affiliates, high producers, and serious operators on positioning, activation, retention, content systems, and recurring-revenue growth.",
  alternates: { canonical: `${SITE_URL}/affiliate-growth` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/affiliate-growth`,
    siteName: "Jamaur Johnson",
    title: "Affiliate Growth Strategy & Consulting · Jamaur Johnson",
    description:
      "Strategy for established affiliates who already have traction and want to turn momentum into durable recurring revenue.",
  },
};

const FRAMEWORK = [
  {
    number: "01",
    title: "Sharpen positioning",
    body: "Clarify who you are for, what problem you solve, and why your audience should move now instead of treating your referral link like another generic promotion.",
  },
  {
    number: "02",
    title: "Improve activation",
    body: "Turn interest and trials into real usage with better onboarding, clearer next steps, practical implementation, and faster time-to-value.",
  },
  {
    number: "03",
    title: "Build content leverage",
    body: "Create repeatable content systems that educate, create demand, answer objections, and keep working long after the original post goes live.",
  },
  {
    number: "04",
    title: "Protect retention",
    body: "Recurring revenue compounds when customers keep getting value. Retention strategy matters just as much as getting the referral in the first place.",
  },
  {
    number: "05",
    title: "Scale the asset",
    body: "Once the engine works, systemize the parts that can be repeated so content, partnerships, customer success, and recurring revenue reinforce each other.",
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
                Affiliate Growth Strategy & Consulting
              </div>
              <h1
                className="mt-5 text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                You Already Have Traction. Let&apos;s Build The Next Level.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
                I work best with established affiliates, high producers, high-income earners, and serious operators who are already creating demand and want to improve positioning, conversion, activation, retention, content systems, and recurring-revenue durability.
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
            <div className="text-[10px] uppercase tracking-[0.3em] text-violet-300">Who I Work Best With</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Producers who are past the beginner conversation.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              If you already know how to get attention, generate trials, build an audience, sell, or create revenue online, the problems become different. The question is no longer simply how to post a link — it is how to make the entire growth system more efficient and more durable.
            </p>
            <p>
              That can mean better positioning, stronger campaigns, more effective content, improved onboarding, higher activation, better retention, cleaner attribution, or finding the next constraint keeping your book of business from compounding faster.
            </p>
            <p>
              My value is in looking at the system with you, finding the leverage point, and helping you turn what is already working into something more scalable.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090d17] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">The Growth System</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              The affiliate flywheel is bigger than traffic.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              The strongest affiliate businesses connect attention, trust, activation, customer success, retention, and recurring revenue into one system. More traffic only helps when the rest of the engine can convert and retain it.
            </p>
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

      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">What I Look At</div>
              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Find the earliest constraint in the funnel.</h3>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Audience → content and offer → clicks → trials → paid customers → activation → retention → recurring revenue. The most valuable next move is usually fixing the earliest meaningful constraint, not adding more activity everywhere at once.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <div className="text-[10px] uppercase tracking-[0.3em] text-violet-300">How I Help</div>
              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Strategic thinking without pretending you need another agency.</h3>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                This is consulting and strategic support — not agency management. We can look at the numbers, messaging, offers, campaigns, content, funnels, partner opportunities, activation, or retention and identify the highest-leverage move from where you are now.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">Schedule Time</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              If you&apos;re already producing, let&apos;s talk about what comes next.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
              If you are an established affiliate, high producer, high-income earner, creator, or operator with real traction, schedule time with me and we&apos;ll look at where the next growth opportunity is.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-13 items-center rounded-full bg-cyan-300 px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#06080f] transition-transform hover:-translate-y-0.5"
            >
              Book A Strategy Call →
            </a>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-white/35">
            HighLevel is a third-party software platform. Content on this personal site reflects Jamaur Johnson&apos;s own perspective and is not an official HighLevel statement, guarantee, or earnings claim. Affiliate terms and program details can change.
          </p>
        </div>
      </section>
    </main>
  );
}
