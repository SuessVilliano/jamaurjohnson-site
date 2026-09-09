export type GrowthInsight = {
  slug: string;
  category: string;
  title: string;
  minutes: number;
  publishedDate: string;
  summary: string;
  theme: "editorial" | "hybrid";
  body: string[];
  sources?: { label: string; url: string }[];
  cta: {
    eyebrow: string;
    headline: string;
    body: string;
    href: string;
    label: string;
  };
};

export const GROWTH_INSIGHTS: GrowthInsight[] = [
  {
    slug: "cme-e-nano-futures-changed-the-game",
    category: "Markets",
    title: "The Micro Futures Era Just Got Smaller — Why CME E-nanos Change the Game",
    minutes: 7,
    publishedDate: "September 9, 2026",
    theme: "hybrid",
    summary:
      "CME's new E-nano equity index futures are one-tenth the size of Micro E-minis. That sounds like a smaller contract. It is really a much bigger change in how retail traders can size risk.",
    body: [
      "For years, the Micro E-mini was the answer to a simple retail-trading problem: the major index futures contracts were too large for many individual traders to size responsibly. On August 24, 2026, CME Group took that same idea another step and launched E-nano futures on the S&P 500, Nasdaq-100, Russell 2000 and Dow Jones Industrial Average.",
      "The important number is not the name. It is the scale. E-nanos are one-tenth the size of the already-small Micro E-mini contracts. The E-nano S&P 500 uses a $0.50 multiplier per index point. The E-nano Nasdaq-100 uses $0.20. The E-nano Russell 2000 uses $0.50. The E-nano Dow uses $0.05. Their Globex codes are NES, NNQ, N2K and NDOW.",
      "That changes the conversation for small accounts because position sizing stops being so binary. A trader can have a perfectly valid setup and still be forced into too much risk simply because the smallest available contract is larger than the risk budget. Before E-nanos, that was especially obvious in Nasdaq futures. One MNQ contract can still be too much exposure for a very small account or for a trader who wants to test a new idea with minimal dollar risk.",
      "E-nanos create another layer between paper trading and larger futures size. That matters for learning, for scaling, for partial exits and for traders who care more about process than about posting a giant P&L screenshot. If your stop distance is fixed by market structure, a smaller multiplier lets you preserve the technical stop while reducing the dollars attached to it.",
      "This is what I mean when I say risk just became more divisible. The contract does not make the market safer. It gives the trader a finer tool. A bad entry with bad discipline is still a bad trade. Leverage is still leverage. Fees still matter. Slippage still matters. A trader can still overtrade ten tiny contracts just as easily as one larger contract.",
      "The real advantage is precision. The trader can scale into a position instead of treating every decision like an all-or-nothing bet. They can test an execution model live with less financial consequence. They can take a partial profit without cutting the entire position. They can build risk around the chart rather than forcing the chart to fit the contract.",
      "That is why I think E-nanos are more important than they look. Retail access has been moving in one direction for years: lower commissions, smaller products, fractional exposure and better tools. CME's E-nanos bring that same democratization deeper into regulated futures markets.",
      "The flip side is that easier access creates a new responsibility. Smaller contracts can tempt traders into thinking the risk is small enough to ignore. It is not. Ten NNQ contracts equal one MNQ in multiplier terms. Position size can quietly rebuild the same exposure a trader thought they escaped. The tool only improves risk management if the trader actually manages risk.",
      "For serious traders, the better question is not, 'How much can I trade now?' It is, 'How precisely can I express my risk?' That is the game-changing part. E-nanos give retail traders another gear — and the traders who benefit most will be the ones disciplined enough not to floor it every time the light turns green.",
    ],
    sources: [
      {
        label: "CME Group — E-nano Equity Index Futures",
        url: "https://www.cmegroup.com/markets/equities/e-nano-equity-index.html",
      },
      {
        label: "CME Group — E-nano Equity Index Futures FAQ",
        url: "https://www.cmegroup.com/articles/faqs/faq-e-nano-equity-index-futures.html",
      },
      {
        label: "CME Group — August 24, 2026 E-nano launch announcement",
        url: "https://www.cmegroup.com/media-room/press-releases/2026/8/03/cme_group_to_expandretailaccesstofourleadingbenchmarkswithe-nano.html",
      },
    ],
    cta: {
      eyebrow: "Build The Process",
      headline: "Smaller contracts do not replace a trading system.",
      body: "Use the smaller size to improve execution, journaling and risk discipline — then scale only when the data says the process deserves it.",
      href: "https://hybridjournal.co",
      label: "Explore Hybrid Journal",
    },
  },
  {
    slug: "affiliate-marketing-is-digital-real-estate",
    category: "Affiliate Growth",
    title: "Affiliate Marketing Is Digital Real Estate — If You Build It Like An Asset",
    minutes: 7,
    publishedDate: "September 9, 2026",
    theme: "editorial",
    summary:
      "A referral link is not an asset. A trusted audience, useful content, a conversion system and retained customers can become one — and recurring commissions are the rent.",
    body: [
      "Most people describe affiliate marketing like a transaction. Share a link. Someone buys. You get paid. That description is technically correct and strategically small.",
      "The better way to think about a strong recurring affiliate business is digital real estate. You build something people repeatedly find useful — content, a community, a comparison, a tutorial, a workflow, a niche brand, a trusted point of view — and that asset keeps sending qualified people into a product long after the original work was published.",
      "The rent is the recurring commission. HighLevel publicly advertises a 40% monthly recurring commission on direct referred subscriptions. If a customer remains active, the affiliate can continue earning from the relationship month after month under the program terms. That is fundamentally different from a one-time sponsorship or a single product sale.",
      "But digital real estate only works when the property has tenants. In affiliate terms, that means retention. Getting a trial is not the finish line. Even getting the first paid month is not the finish line. If the customer never reaches value, churns quickly or forgets why they bought, the asset never compounds.",
      "This is one of the biggest differences I see between casual promoters and established affiliates. Early on, the obsession is traffic: more clicks, more posts, more links. After a certain level of production, the questions get operational. Which content creates qualified trials? Which trial sources become paying customers? Which customers stay? What happens during onboarding? What support or education keeps them engaged? Where is the earliest leak in the funnel?
",
      "The funnel I care about is simple: audience → content or offer → clicks → trials → paid customers → retention → recurring revenue. Every stage has a different job. If the content is weak, more audience will not save it. If the offer is unclear, more clicks will not save it. If onboarding is poor, more trials will not save it. If retention is weak, more sales simply pour water into a leaking bucket.",
      "That is why I like the real-estate analogy. A landlord who loses every tenant after the first month does not have a great rental business just because the building gets a lot of tours. The value is in durable occupancy. In software affiliate marketing, the equivalent is durable product value.",
      "The strongest affiliates eventually build multiple pieces of property. A YouTube tutorial ranks in search. A comparison article answers a buying question. An email sequence educates a new lead. A private community helps customers get results. A webinar turns curiosity into action. A template gives someone a reason to start today. Each asset has a job, and together they create a portfolio.",
      "That is the opportunity I find most interesting about affiliate growth. You are not merely selling access to software. You are building an information layer around the software — a trusted path that helps the right people understand it, adopt it and keep using it. When that layer becomes useful enough, it can pay rent for years.",
    ],
    sources: [
      {
        label: "HighLevel Support — Affiliate Portal and recurring commission overview",
        url: "https://help.gohighlevel.com/support/solutions/articles/48001202637",
      },
      {
        label: "HighLevel Support — First steps to be a successful HighLevel affiliate",
        url: "https://help.gohighlevel.com/support/solutions/articles/48001182420-first-steps-to-be-a-successful-highlevel-affiliate",
      },
    ],
    cta: {
      eyebrow: "Affiliate Growth",
      headline: "Already generating trials? Build the portfolio behind them.",
      body: "I work around established affiliate businesses and the systems behind conversion, activation and retention. If you are past the beginner stage, schedule time to talk strategy.",
      href: "/affiliate-growth#book",
      label: "Schedule Time With Jamaur",
    },
  },
  {
    slug: "five-things-highlevel-affiliates-should-know",
    category: "HighLevel",
    title: "5 Things HighLevel Affiliates Should Know Before Chasing More Traffic",
    minutes: 6,
    publishedDate: "September 9, 2026",
    theme: "editorial",
    summary:
      "Traffic is only one stage of the affiliate funnel. Before spending another dollar or publishing another hundred posts, diagnose what is actually limiting growth.",
    body: [
      "The easiest affiliate advice to give is 'get more traffic.' It is also one of the easiest ways to waste time when traffic is not the real constraint.",
      "Once an affiliate has enough activity to see patterns, growth becomes a diagnostic exercise. I would rather find the first meaningful bottleneck than tell someone to do more of everything. More content, more ads and more partnerships only help when the stage they feed is healthy enough to convert the extra volume.",
      "One: know your funnel, not just your commission total. Audience → content or offer → clicks → trials → paid customers → retention → affiliate revenue. Those numbers tell a story. If clicks are healthy but trials are weak, the landing promise may not match the audience. If trials are healthy but paid conversion is weak, activation is the problem. If paid conversion is solid but recurring revenue stalls, retention deserves the attention.",
      "Two: a trial is a beginning, not a win. HighLevel's affiliate documentation makes the distinction clear: commissions are tied to paying customers, not simply trial starts. A large trial number can look impressive while hiding a weak business underneath it. The quality of the trial and what happens immediately after signup matter.",
      "Three: teach after the referral. The best recurring affiliate programs reward customer longevity, which means the affiliate has an economic reason to care whether the customer succeeds. HighLevel itself recommends communities and groups where affiliates can mentor referred customers and keep them successful. Tutorials, onboarding calls, snapshots, checklists, live sessions and use-case content are not charity. They are retention infrastructure.",
      "Four: stop sending generic check-ins. Whether you are reactivating an audience, a prospect or a partner, 'just following up' gives the other person no reason to re-engage. Bring a hook: a promotion, a content idea, a funnel insight, a milestone gap, a specific fix, a new feature that maps to their business or a clear question that can be answered quickly.",
      "Five: end every interaction with one tangible next step. One. Not seven. Book the setup call. Publish the comparison video. Fix the onboarding email. Invite the trials into the community. Build the follow-up workflow. Test one new offer. Momentum gets lost when strategy ends as a cloud of possibilities instead of a specific action.",
      "This is why mature affiliate growth looks more like operating a business than posting links. The work becomes segmentation, diagnosis, activation, retention, messaging and measurement. Traffic still matters. It just should not be the answer before you know the question.",
    ],
    sources: [
      {
        label: "HighLevel Support — Affiliate Portal",
        url: "https://help.gohighlevel.com/support/solutions/articles/48001202637",
      },
      {
        label: "HighLevel Support — Five ways to find your first five affiliate referrals",
        url: "https://help.gohighlevel.com/support/solutions/articles/48001174612-5-ways-to-get-your-first-5-affiliates",
      },
    ],
    cta: {
      eyebrow: "Find The Constraint",
      headline: "Do not scale the leak.",
      body: "If you are already producing trials, the next growth move may be somewhere deeper in the funnel. Schedule time and we can talk through the system, not just the top-line number.",
      href: "/affiliate-growth#book",
      label: "Talk Affiliate Strategy",
    },
  },
  {
    slug: "rebuild-trust-fast-affiliate-growth",
    category: "Growth Systems",
    title: "How To Rebuild Trust Fast: Give People A Reason To Re-Engage",
    minutes: 6,
    publishedDate: "September 9, 2026",
    theme: "editorial",
    summary:
      "The fastest way to wake up a cold audience or dormant relationship is not another check-in. It is useful relevance delivered with one clear next step.",
    body: [
      "Trust does not usually disappear in one dramatic moment. More often, it fades. The emails get less relevant. The messages become generic. The content starts sounding like everyone else's content. The relationship is technically still there, but attention has moved somewhere else.",
      "That is why 'just checking in' is such a weak reactivation strategy. It asks the other person to manufacture the reason for the conversation. If there is no new value attached to the message, silence is the rational response.",
      "A stronger reactivation starts with a real hook. Maybe there is a promotion that actually fits their audience. Maybe you noticed a gap in their funnel. Maybe a new platform feature solves a problem they mentioned months ago. Maybe they are one milestone away from a meaningful target. Maybe their old content can be repackaged into a stronger campaign. Maybe something is broken and you can help fix it.",
      "The point is not to invent urgency. Fake urgency damages the exact trust you are trying to rebuild. The point is to bring relevance. Show that you understand where the person is, why the conversation matters now and what small next step could create movement.",
      "I like communication that is human, warm, concise and specific. Not a five-paragraph corporate note. Not a wall of hype. Acknowledge the context. Give the useful observation. Make one clear request. Then let the person decide.",
      "That same rule works with an audience. If your content has gone cold, do not return by asking people to buy something immediately. Return with something that reduces uncertainty. A teardown. A checklist. A 'here is what changed' post. A mistake you made and what you learned. A comparison that helps someone make a decision. Trust accelerates when the audience feels smarter after interacting with you.",
      "It also works after the sale. A customer who has not logged in or used the product recently does not need another 'we miss you' email. They need a use case. A quick win. A template. A reminder of the outcome they originally wanted. Retention is often a trust problem disguised as a usage problem.",
      "The bigger lesson is that reactivation is not about getting someone's attention back for your benefit. It is about earning relevance again. If every touch contains a reason to care, trust can return much faster than people expect.",
    ],
    cta: {
      eyebrow: "Reactivation",
      headline: "Bring a hook, not a check-in.",
      body: "If your referrals, audience or affiliate funnel has stalled, start with the most useful reason for them to care today — then make the next step obvious.",
      href: "/affiliate-growth#book",
      label: "Schedule A Strategy Call",
    },
  },
  {
    slug: "content-that-compounds-affiliate-business",
    category: "Digital Marketing",
    title: "Stop Posting. Start Building Content That Compounds.",
    minutes: 7,
    publishedDate: "September 9, 2026",
    theme: "editorial",
    summary:
      "The best affiliate content behaves like an asset: it answers durable questions, earns search and social discovery, and keeps moving people toward the product after publication day.",
    body: [
      "There is a version of content marketing that feels like a treadmill. Post today. Watch the graph move for a few hours. Wake up tomorrow and do it again. If the business stops publishing, the attention stops too.",
      "Then there is content that compounds. A tutorial that still gets searched six months later. A comparison article that appears when someone is deciding between two platforms. A YouTube walkthrough that becomes the video everyone sends when a prospect asks the same question. A checklist that keeps collecting email addresses. A webinar that becomes clips, emails, posts, FAQs and onboarding material.",
      "That second category is where affiliate marketing gets interesting because one piece of work can influence multiple stages of the funnel. It can create the click, improve the trial, answer the objection and help the customer stay.",
      "The first principle is search for durable questions, not just trending topics. What does the buyer repeatedly need to understand before starting? What are they afraid of? What setup problem keeps appearing? What comparison are they making? What outcome are they trying to reach? A useful answer to a durable question can become digital real estate.",
      "The second principle is build clusters, not isolated posts. If you publish 'What is HighLevel?' and stop, you own one tiny piece of the buyer journey. Surround it with 'HighLevel vs X,' 'how to set up your first workflow,' 'what to do during your 14-day trial,' 'five mistakes new agencies make,' 'how to onboard your first client,' and 'what to automate first.' Now the content starts behaving like a system.",
      "The third principle is repurpose with intent. One long tutorial can become short clips, an email, a checklist, a carousel, a FAQ, an onboarding lesson and a follow-up sequence. That is not lazy recycling. It is distribution. People learn in different formats and meet your brand at different moments.",
      "The fourth principle is connect content to activation. Affiliate content should not end at 'click my link.' The next step should help the buyer win. Send them to a setup guide. Give them a snapshot. Invite them into a community. Show them the first workflow to build. Reduce the distance between signup and value.",
      "The fifth principle is update winners. One of the easiest mistakes is spending all your energy creating new posts while your highest-performing old content becomes outdated. Refresh screenshots. Update features. Improve calls to action. Add answers to objections you learned later. A page that already has trust and traffic is usually a better asset to renovate than a brand-new empty lot.",
      "The goal is not to become a content machine. It is to build a library that keeps doing useful work. When your content answers real questions, routes people toward the next action and continues helping after the referral, your marketing starts to look less like posting and more like infrastructure.",
    ],
    sources: [
      {
        label: "HighLevel Support — First steps to be a successful HighLevel affiliate",
        url: "https://help.gohighlevel.com/support/solutions/articles/48001182420-first-steps-to-be-a-successful-highlevel-affiliate",
      },
    ],
    cta: {
      eyebrow: "Build The Library",
      headline: "Make your best content work more than once.",
      body: "Start with one buyer question, build the definitive answer, then turn that answer into a small content system that moves people from discovery to activation.",
      href: "/affiliate-growth#book",
      label: "Talk Content & Growth",
    },
  },
  {
    slug: "the-100-trial-bridge",
    category: "Affiliate Growth",
    title: "The 100-Trial Bridge: When Affiliate Marketing Becomes An Operating Business",
    minutes: 7,
    publishedDate: "September 9, 2026",
    theme: "editorial",
    summary:
      "The questions that matter after meaningful production are different from the questions at the beginning. At scale, affiliate growth becomes an operating discipline.",
    body: [
      "There is a point in an affiliate business where beginner advice starts becoming less useful. You already know how to get a link. You already know how to post. You have an audience, a funnel or a repeatable source of demand. The problem is no longer proving that someone will click.",
      "I think of 100+ trials as a useful bridge because by then there is enough activity to stop guessing. Patterns exist. Some campaigns produced better trials than others. Some customers converted and stayed. Some never activated. Some content created curiosity but not buyers. Some offers brought the exact right people into the product.",
      "That is the moment where an affiliate business starts looking like operations. The questions become: what is the trial-to-paid rate by source? How long do referred customers stay? Which plan mix drives the strongest economics? Which campaigns produce upgrades? Which segments are dormant? Where is the earliest material constraint? How quickly do we follow up after a handoff? What does the customer experience during the first week?
",
      "The answer is almost never 'do everything.' Strong operators segment. A dormant affiliate with an audience but no recent activity needs a different conversation than an expert producer with consistent trials. A producer whose trials are converting but churning needs a different strategy from a producer whose content is generating clicks but no trials.",
      "The same applies to support. The most useful conversation ends with one tangible next step. Not a list of fifteen tactics. One move that addresses the current bottleneck. Launch the webinar. Fix the trial onboarding. Build the comparison page. Re-engage the customer community. Test the upgrade campaign. Clean up attribution. Then measure what happened.",
      "This is also where the income can become meaningful, because recurring commissions stack when customers remain active. HighLevel publicly advertises 40% monthly recurring commission for direct referrals and also supports second-tier commission structures under current program terms. But the arithmetic only compounds if the customers compound.",
      "That is why I would never judge an established affiliate only by the biggest top-line number on the dashboard. Trials tell me demand. Paid conversion tells me alignment and activation. Retention tells me whether the referred customer keeps finding value. Recurring commission tells me what the whole machine produces.",
      "Crossing the 100-trial bridge does not mean someone has figured out everything. It means they have earned enough data to stop treating the business like a mystery. At that point, the best growth strategy is often not louder promotion. It is better diagnosis.",
    ],
    sources: [
      {
        label: "HighLevel Support — Affiliate Portal and payout structure",
        url: "https://help.gohighlevel.com/support/solutions/articles/48001202637",
      },
      {
        label: "HighLevel Support — Affiliate split commissions overview",
        url: "https://help.gohighlevel.com/support/solutions/articles/155000002420-affiliate-split-commissions-overview",
      },
    ],
    cta: {
      eyebrow: "Past The Beginner Stage",
      headline: "If you have the data, use it.",
      body: "For established affiliates, the next move is usually hidden somewhere between trial quality, activation, retention and positioning. That is the conversation I want to have.",
      href: "/affiliate-growth#book",
      label: "Schedule Time With Me",
    },
  },
];

export const growthInsightBySlug = (slug: string) =>
  GROWTH_INSIGHTS.find((post) => post.slug === slug);
