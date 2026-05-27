/**
 * Editorial content for the /perspective landing page.
 *
 * This is the LIV8 Perspective brand surface — a Forbes-style business feature
 * built for paid traffic. Edit copy here without touching components.
 *
 * Voice rules (do not break when editing):
 *   - intelligent, cinematic, documentary
 *   - never salesy, never "AI guru", never "10x revenue"
 *   - lean on operational infrastructure, systems thinking, workflow architecture
 */

export const PERSPECTIVE_META = {
  brand: "LIV8 Perspective",
  tagline: "Operational Insight for Modern Operators",
  publishedDate: "May 2026",
  readingTime: "6 min read",
  byline: "By Jamaur Johnson",
  category: "Operations · Feature",
};

export const NAV_LINKS = [
  { href: "#insights", label: "Insights" },
  { href: "#operations", label: "Operations" },
  { href: "#systems", label: "Systems" },
  { href: "#leadership", label: "Leadership" },
  { href: "#growth", label: "Growth" },
  { href: "#about", label: "About" },
];

export const HERO = {
  eyebrow: "Operations · Feature",
  headline: "The Operator Quietly Rebuilding Businesses Behind The Scenes",
  subheadline:
    "How one entrepreneur is helping business owners uncover hidden inefficiencies, simplify operations, and reclaim their time.",
};

export const ARTICLE = {
  leadParagraph:
    "Most business owners don't have a marketing problem. They have an operational problem.",
  body: [
    "Talk to enough founders and a pattern surfaces. Their pipelines are full. Their teams are hired. The website looks fine. And yet the business itself feels like it's being held together by the owner's attention — phone calls that need to be returned, dashboards no one is watching, customer messages slipping into a half-dozen inboxes, decisions stuck waiting on the only person who has the whole picture in their head.",
    "From the outside it looks like growth. From the inside it feels like drag.",
    "This is the territory Jamaur Johnson has spent the last decade learning to read. A founder, AI automation architect, and trader, he approaches businesses the way an architect approaches a building — not by adding new floors, but by finding the load-bearing walls that are no longer load-bearing, the corridors that send people in circles, the rooms that exist because nobody ever questioned them.",
    "His diagnostic question is unfashionably simple. Where is time leaking? Where is information getting lost between the people who have it and the people who need it? Which of these tasks would not exist if the system were built today, from scratch?",
    "The answers, in business after business, tend to look the same. Conversations missed because the team is on three platforms instead of one. Customer requests answered slowly because the request has to travel through four hands before it reaches the one that can do anything about it. Owners pulled back into the work because there is no living record of how the work is supposed to happen.",
    "What changes after the audit isn't dramatic in the press-release sense. There is no new logo. There is no growth-hack framework. There is a quieter outcome: the business starts to operate at the level the owner has always believed it could, and the owner gets back the hours that used to disappear into keeping it upright.",
    "This is the kind of work that doesn't show up in case studies the way revenue does. But for the owners who go through it, it is the single most useful conversation they have had about their business in years.",
  ],
};

export type InsightPost = {
  slug: string;
  category: string;
  title: string;
  minutes: number;
  summary: string;
  publishedDate: string;
  body: string[];
  /** Visual theme + CTA track. Defaults to "editorial" (LIV8 gold/cream). */
  theme?: "editorial" | "hybrid";
};

export const INSIGHTS_POSTS: InsightPost[] = [
  {
    slug: "the-capital-problem-most-traders-never-solve",
    category: "Capital",
    title: "The Capital Problem Most Traders Never Solve",
    minutes: 6,
    publishedDate: "May 2026",
    theme: "hybrid",
    summary:
      "Most traders don't have a strategy problem. They have a capital problem — and the math of an undersized account quietly caps everyone who refuses to address it.",
    body: [
      "Spend enough time talking to traders and the same quiet pattern keeps surfacing. The strategy works. The journal is honest. The win rate, on paper, is real. And yet the account just won't move — because the account was never big enough to matter in the first place.",
      "This is the part of trading that doesn't make the highlight reel. A trader can have a $5,000 account, a clean edge, a 60 percent win rate, and a 1.8 average reward-to-risk — and end the year up $2,400 in a discipline they could have spent on a side gig with a fraction of the effort. The math doesn't reward the work. Not because the trader is wrong, but because the capital isn't big enough to express what they actually know.",
      "The instinct most traders develop, looking at this gap, is to overlever. Take bigger size with the small account. Stretch the stops. Hold the runners longer. What happens next is almost always the same. A losing streak that would have been a 4 percent drawdown on a properly-sized account becomes a 30 percent gash on the overlevered one. The edge didn't disappear — the math just exposed an undersized stack to ruin.",
      "The other instinct is to wait. Save for years. Build the account up slowly out of personal income. This works for some. For most, it produces a different version of the same problem: by the time the account is finally big enough to matter, the trader is years older, more risk-averse, and out of sync with the markets that taught them to trade in the first place.",
      "The third path — the one a growing number of serious traders are taking — is to stop trying to solve the capital problem with personal capital. Funded-trader programs and prop firm structures exist for exactly this reason. They let a trader who has the skill but not the size run real capital under defined risk rules, keep the majority of the profit, and move past the math problem that was quietly capping their progress.",
      "The interesting thing about the traders who go this route is what they say after they cross it. The strategy doesn't change. The journal doesn't change. The discipline doesn't change. What changes is that the same trade now means something — the same 1R win produces real money instead of grocery-bill money, and the trader starts seeing the work pay back at the level the work actually deserved.",
      "Capital is leverage on skill. Without enough of it, even good traders look like hobbyists. With it, the same trader looks like a professional — because, mathematically, that's what they finally are.",
      "Hybrid Funding was built on top of this realization. It exists for the trader who has put the screen time in and now needs the size to make the skill real. The on-ramp is a free playbook that maps the path from personal equity to a funded account most traders could not have built on their own.",
    ],
  },
  {
    slug: "leverage-without-the-margin-call",
    category: "Leverage",
    title: "Leverage Without The Margin Call",
    minutes: 5,
    publishedDate: "May 2026",
    theme: "hybrid",
    summary:
      "For decades, leverage meant risking more than you had. Funded-trader programs have quietly rewritten the math — and changed what serious retail trading actually looks like.",
    body: [
      "Leverage used to be a single, ugly word in retail trading. You borrowed against your own account. You traded with size that was bigger than the equity sitting under it. When the trade went wrong, the broker liquidated whatever was left and sent you a margin call — and the worst version of that story didn't end at zero. It ended in debt.",
      "That picture of leverage has shaped a generation of retail traders. It is also, increasingly, out of date. The leverage that the most disciplined traders actually use today does not come from their broker. It comes from a prop firm.",
      "The math of a funded-trader program is different on purpose. The trader doesn't put their own equity at risk to access size. They pay a defined evaluation fee, prove they can trade inside a documented risk envelope — daily loss limits, max drawdown, position rules — and receive an account whose capital is provided by the firm. From there, the trader keeps the majority of the profits and bears none of the downside beyond losing the account itself.",
      "What this collapses is the historical link between leverage and personal ruin. The trader gets the size that lets the skill matter. The firm absorbs the loss tail. Both sides have aligned incentives — the firm wants the trader to print, because the firm earns from the trader's profits, not from their losses.",
      "This is not a small change. For most of trading history, the only people with serious size were the people who already had serious money. That accident of birth defined who got to be a professional trader and who stayed an amateur, no matter how good they were. Funded-trader infrastructure has dissolved that gate, quietly, over the last several years.",
      "The traders taking advantage of it are not the ones who treat the prop firm as a cheat code. They are the ones who have already done the work — built an edge, journaled the trades, sized correctly on personal capital, and earned the right to scale. The funded account just gives them the room to express what was already true.",
      "Leverage, used this way, stops being a synonym for risk. It becomes what it was supposed to be from the beginning — a tool that multiplies skill, not exposure.",
      "The path into it is more accessible than most traders realize. Hybrid Funding publishes a free playbook that walks through how the evaluation actually works, what the risk envelope really requires, and how to size a strategy for the kind of leverage a prop account provides. For traders who have spent years staring at the capital problem, it is the most useful document they can read.",
    ],
  },
  {
    slug: "seven-quiet-mistakes-that-blow-trading-accounts",
    category: "Risk",
    title: "The Seven Quiet Mistakes That Blow Most Trading Accounts",
    minutes: 7,
    publishedDate: "April 2026",
    theme: "hybrid",
    summary:
      "Most accounts don't get blown up by a bad trade. They get blown up by a pattern of small, invisible mistakes that the trader cannot see from inside.",
    body: [
      "Ask a trader who has just lost an account what went wrong, and the answer is almost always a specific trade. The Friday afternoon position that kept going. The earnings surprise. The stop that got skipped. Those moments are real, but they are rarely the whole story. The trade that blew the account is usually the last in a long, quiet sequence of behaviors that made ruin inevitable.",
      "The first is oversizing. Not catastrophic oversizing — just enough to push the per-trade risk past what the win rate can sustain. A trader who can win 55 percent of the time at 1R will compound. The same trader risking 3 percent per trade hits a six-loss streak — statistically routine — and is down nearly 20 percent before the math has even started.",
      "The second is overtrading. The strategy was built around four to six high-quality setups a week. The trader, watching the screen all day, finds twenty. Most of those extra trades are noise. Each one adds variance without adding edge, and variance without edge erodes the account from the inside.",
      "The third is the absence of a journal. Not a beautiful spreadsheet — just a record. Without it, the trader cannot tell which setups actually work, which times of day the edge is real, and which trades they keep taking against their own data. The journal is what separates feedback from folklore, and the lack of one is what keeps most traders rotating through the same mistakes for years.",
      "The fourth is the revenge trade. After a loss, the next trade is almost always larger, less considered, and taken sooner than the plan would have allowed. The revenge trade is rarely the trade that blows the account, but it is almost always the trade that turns a normal red day into the start of a real drawdown.",
      "The fifth is moving stops. A losing trade becomes a held one. A held one becomes a hope. A hope becomes a story the trader tells themselves about why the trade still works. By the time the trader admits the trade is broken, the loss is no longer a -1R event — it is the kind of loss that takes a week of clean trades to recover from.",
      "The sixth is no exit plan on the winners. The trader knows where to get in. They know where to get stopped out. They have not decided, in advance, where to take profit, or how to scale, or what to do if the trade runs farther than expected. So the winners become questions instead of outcomes, and questions, under pressure, become mistakes.",
      "The seventh is the deepest one: trading from need instead of skill. The account has to perform this month. The bills are real. The pressure leaks into the position sizing, the patience, the willingness to wait for the right setup. Trading from need always loses, because the market is indifferent to the need and only respects the skill.",
      "None of these mistakes is dramatic. None of them is what the trader posts about on social. All of them are quietly priced into the long-term P&L of nearly every retail account, and the trader cannot see them from inside because they look, in the moment, like just trading.",
      "The trader who fixes any one of these will compound differently from the trader who does not. The trader who fixes all seven will look, after a few years, like a different person at the screen. That is the actual work. The platform, the broker, the prop firm — all of those are infrastructure. The work itself is in the seven things above, and the trader who does it is the trader who eventually gets the capital they deserve.",
    ],
  },
  {
    slug: "the-free-playbook-changing-funded-traders",
    category: "Playbook",
    title: "The Free Playbook Quietly Changing How Funded Traders Approach Risk",
    minutes: 5,
    publishedDate: "March 2026",
    theme: "hybrid",
    summary:
      "Most evaluation guides read like brochures. The Hybrid Funding playbook reads like a risk manual. That single difference is changing how serious traders prepare.",
    body: [
      "Most of the documents a trader gets handed when they first approach a prop firm are sales documents in disguise. They explain the payout structure. They explain the rules. They list the platforms, the spreads, the time-in-force requirements. They do not, in any serious way, explain how to actually pass the evaluation. They assume the trader will figure that out on their own — and most won't.",
      "The Hybrid Funding playbook was written from the opposite premise. It treats the evaluation the way a trading desk would treat a new hire: as a risk problem to be solved, not a marketing funnel to be entered. It walks through the daily-loss math, the max-drawdown math, the position-sizing math — and then shows what a strategy actually has to look like to operate inside those constraints without flaming out on day three.",
      "The shift is small in writing and large in practice. Most traders fail their first evaluation not because their strategy is bad, but because their position sizing was calibrated for a personal account with no daily-loss rule. The playbook reframes the work. Instead of asking what is my edge, it asks what is the largest single trade I can take this morning without putting the entire account in jeopardy by 11 a.m. Once that question is answered correctly, most of the other problems of an evaluation collapse.",
      "There is also a section on what to do after the trader gets funded — which is the part most other guides skip entirely. The first weeks of trading a real funded account are psychologically different from the evaluation. The trader is no longer trying to pass a test; they are trying to compound real capital under real rules. The playbook walks through the common psychological traps of those first weeks, and what disciplined traders do to avoid them.",
      "It is free, and the reason it is free is not a marketing accident. Hybrid Funding's economics align with traders who actually trade well — the firm wants traders who pass the evaluation, scale, and stay scaling. A trader who gets blown up in a week is bad for the firm too. The playbook exists because the firm has a direct interest in raising the floor of trader behavior.",
      "The traders who read it tend to describe the same experience. Things that felt vague — what really counts as overleveraged, what really counts as overtrading, how exactly to think about the drawdown rule — became specific. And the moment something is specific, it becomes possible to train against it.",
      "The whole document is at hybridfunding.co. It is the kind of read that the trader's previous year of YouTube would have benefited from. And for a trader staring at the gap between their current account size and the size they actually need, it is the most useful five-minute decision they can make this week.",
    ],
  },
  {
    slug: "from-demo-to-funded",
    category: "Path",
    title: "From Demo To Funded — The Path Most Retail Traders Never See",
    minutes: 6,
    publishedDate: "February 2026",
    theme: "hybrid",
    summary:
      "The path from a fresh demo account to a funded one is shorter than most traders think — but only if they know what each stage is actually for.",
    body: [
      "Most retail traders make the same mistake about the first year of trading. They treat it as a single project — learning to trade — when it is actually three different projects in sequence, each one with a different purpose, a different metric of progress, and a different kind of mistake to avoid.",
      "The first project is the demo. Its purpose is not to make money. It is to discover whether the trader can hold a mechanical process together across hundreds of trades, on a platform they understand, against price action they cannot manipulate. The metric is not P&L. It is consistency. A trader who is profitable on demo but cannot describe their own setup is not ready for the next stage. A trader who is breakeven on demo but can describe every trade they took, why, what they would have done differently, and what the next iteration of the strategy looks like — that trader is ready, even if the equity curve doesn't yet say so.",
      "The second project is a small live account. Its purpose is to add the variable that the demo cannot simulate: the trader's own psychology with real money on the line. The metric is whether the strategy survives contact with emotion. Most traders are shocked by how different live trading feels even at very small size. The slippage is real. The hesitation on entries is real. The temptation to move stops is real. The job in this stage is not to make money — it is to prove that the same strategy that worked on demo can survive in a live nervous system.",
      "The third project is the prop firm evaluation. Its purpose is to take the strategy that has already proven itself on demo and in small live size, and run it under professional risk constraints. The metric is whether the trader can operate within daily-loss rules, max-drawdown limits, and minimum trading-day requirements without breaking discipline. A trader who has done the first two projects well will find the third surprisingly tractable. A trader who has skipped the first two will find it nearly impossible, no matter how many evaluations they buy.",
      "What goes wrong, for most retail traders, is that they collapse the three projects into one. They go straight from demo to a live account with size that was too big, then straight to a prop firm evaluation before the strategy has proven itself anywhere. The result is predictable. Each layer of pressure exposes a problem the previous layer would have caught, if the trader had let it.",
      "The traders who move through the three projects cleanly tend to share two habits. They are unhurried — they don't try to skip a stage just because the next one looks more exciting. And they are honest about which project they are actually on. They know whether they are still proving the strategy, still proving their psychology, or proving their ability to operate under constraints.",
      "By the time they reach the prop firm, the evaluation isn't a high-stakes event. It is the natural next step in work they have already been doing for months. The funded account, when it comes, doesn't change who they are at the screen — it just changes what their existing skill is allowed to do.",
      "Hybrid Funding's free playbook covers the third project in detail and connects it back to the second one. For a trader at any stage of the path, it is a useful map of where they are and where the next stage actually begins.",
    ],
  },
  {
    slug: "google-agentic-discovery-aeo-playbook",
    category: "Growth",
    title: "Beyond SEO: How Brands Win In Google's Agentic Discovery Era",
    minutes: 8,
    publishedDate: "May 2026",
    summary:
      "Google's keynote made the shift explicit. The future of being found isn't search anymore — it's discovery, and it's increasingly mediated by AI. Here's the playbook for businesses that want to stay visible.",
    body: [
      "For the last decade, the standard advice for getting found online was simple. Rank in Google. Pick a few keywords. Write content that targets them. Build links. Wait. That playbook still produces results, but it is no longer the whole game — and at Google's most recent keynote, the company made it explicit that the next chapter is being written in a different vocabulary altogether.",
      "The vocabulary is discovery. AI Overviews now sit above the classic ten blue links for a large share of informational queries. AI Mode in Search lets users ask follow-up questions and get synthesized answers drawn from across the web. Google's Discover feed surfaces content people didn't know to look for. Maps and Business Profile are increasingly the entry point for any local intent. Shopping Graph is feeding Performance Max campaigns that distribute across Search, YouTube, Display, Gmail, and Discover with one budget and one creative pipeline. Underneath all of it, Gemini is reading, summarizing, and recommending.",
      "What this means in practice is that the businesses that win in the next era will not necessarily be the ones that rank highest. They will be the ones that AI assistants are willing to cite, summarize, and recommend. That is a different skill set, and it has a name: Agentic Engine Optimization. Same first principles as SEO — be useful, be trustworthy, be discoverable — but with a different surface area.",
      "Two things have not changed. Google and YouTube remain the most efficient paid channels for serious businesses. Search captures intent at the moment of need, which is why the cost-per-click on Google still maps so cleanly to qualified action. YouTube — by every measure the world's second-largest search engine — captures consideration in long form, which is why it consistently outperforms short-form social on cost-per-converted-customer for B2B and high-ticket offers. Social platforms charge for attention; Google and YouTube charge for intent. For most businesses, that math still favors the intent side, and it is a major reason serious ad spend keeps flowing back to the Google ecosystem even as feeds get louder elsewhere.",
      "What has changed is how that intent gets routed. A growing share of it is now mediated by AI — by AI Overviews, by AI Mode, by Gemini in Workspace, by third-party assistants like ChatGPT and Claude pulling from public web indexes. Which means the brand that shows up in the answer is not necessarily the brand that ranked. It is the brand the assistant trusted enough to cite. That trust is built deliberately: through structured data, through unambiguous identity, through fresh and factual content, through reviews and citations on third-party sources, and through assets the AI can fetch without ambiguity.",
      "There is also a quieter shift happening in local. Google Business Profile — what used to be called Google My Business — has become the single highest-leverage surface for any business that serves a geography. Map results dominate mobile. Reviews carry disproportionate weight in AI-summarized answers about a category. Photos, posts, and Q&A all feed the same model that is now answering questions about the business directly inside Search. A neglected Business Profile in 2026 is the equivalent of a broken homepage in 2014.",
      "Google Shopping has expanded the same way. Performance Max campaigns now allocate budget across every Google surface — Search, Shopping, YouTube, Display, Gmail, Discover, Maps — based on where the algorithm sees the next conversion. The lever a business actually pulls is the product feed and the asset library. Clean product data, sharp creative, and accurate inventory feed the system. Sloppy product data starves it. The brands winning at Shopping right now are not the ones with the biggest ad budgets; they are the ones whose feed is the cleanest.",
      "Put together, the new playbook for visibility on Google looks something like this. Treat your Business Profile like a primary asset. Treat your product feed like a primary asset. Treat your structured data — Person, Organization, Product, Article, Review schemas — like primary infrastructure, not a plugin to set and forget. Publish content that is factual and citable, because that is what AI Overviews will pull from. Maintain an llms.txt file so agentic crawlers can fetch a clean identity card. Invest in YouTube as a real channel, not an afterthought. And keep the paid spend on Search and YouTube where the intent math still works.",
      "The businesses that ignore this shift are not going to be punished overnight. They will simply, quietly, stop being recommended. The ones that adapt will find that being discovered in 2026 looks less like climbing a ranking and more like becoming the obvious answer when an AI is asked the question.",
    ],
  },
  {
    slug: "when-the-bottleneck-is-the-owner",
    category: "Insight",
    title: "When The Bottleneck Is The Owner — And What To Do About It",
    minutes: 5,
    publishedDate: "January 2026",
    summary:
      "Almost every owner of a growing business eventually discovers that the person holding it back is the one looking back from the mirror. The work that follows is unglamorous and durable.",
    body: [
      "It is a hard sentence to write down. Every owner of a growing business will eventually have to do it. The bottleneck is me.",
      "The reasons are rarely about effort. The owner is working harder than anyone else. They are answering messages at 11 p.m. They are unblocking everything the team brings them. They are, by every visible measure, the most committed person in the building. And yet the business keeps stalling at the same ceiling, and the ceiling looks suspiciously like the limits of one person's bandwidth.",
      "The reason this is hard to see is that the bottleneck is invisible from inside. The owner is so busy being the bottleneck — answering, deciding, fixing, unblocking — that they don't have the spare attention to notice they have become the choke point. From their perspective, the business is running. From the team's perspective, nothing moves until the owner moves it.",
      "The first step out is usually counterintuitive. It is to slow down on doing and speed up on designing. To take a week, sometimes a day, to map every decision the business makes, every workflow it runs, every recurring conversation it has — and then to ask, of each one, why this still needs me. Most of the answers are reflexes. Of the ones that are real, most can be solved with documentation, a small automation, or a single hire who owns the workflow end-to-end.",
      "The second step is harder, because it is psychological. The owner has to be willing to let work be done differently than they would do it. Not worse — just differently. The team will not deliver every decision in the exact way the owner would have. That is the cost of unblocking the business. Without that willingness, the bottleneck stays in place even after the systems are built, because every meaningful decision still has to filter through one head.",
      "The third step is the easiest to skip and the most important. After the systems are built, the owner has to actually use them. They have to resist the urge to step back into the operation just because they can. The discipline is to stay in the role they have grown into — the architect of the business, not the daily operator of it.",
      "Owners who make this transition describe the same thing on the other side. They are no longer the most exhausted person in the company. They are no longer the answer to every question. They have, for the first time in years, the time and the headspace to actually think about where the business is going next. That clarity is the part of the work nobody warns owners about, and it is what makes the rest of it worth doing.",
    ],
  },
  {
    slug: "inside-the-businesses-scaling-smarter",
    category: "Growth",
    title: "Inside The Businesses Scaling Smarter",
    minutes: 7,
    publishedDate: "November 2025",
    summary:
      "The businesses scaling cleanly right now don't look louder than their peers. They look quieter. The work is happening inside the system, not on top of it.",
    body: [
      "From the outside, the businesses scaling well right now don't look dramatically different from the ones that are stuck. They run similar ads. They sell similar products. They post similar content. The difference shows up only when you look at how the work actually happens.",
      "The businesses that are scaling smarter have stopped trying to outwork their problems. They have built systems that make the right behavior the easy behavior. When a lead comes in, it is routed automatically, replied to within minutes, and assigned to the right person without anyone having to think about it. When a customer asks the same question for the fifth time, the answer is templated and personalized and sent in seconds, not hours. When a project moves from sold to delivered, the handoff is documented, the team knows what they own, and the customer hears from someone within twenty-four hours.",
      "What this produces is calm. Calm is the most underrated business advantage of the next decade.",
      "Calm businesses convert better, because customers can feel the difference between an organization that has its act together and one that does not. Calm businesses retain better, because nothing irritates a paying customer more than chasing the people they already paid. Calm businesses hire better, because top operators want to work somewhere they aren't constantly cleaning up someone else's chaos. Calm businesses scale better, because growth doesn't break what already works.",
      "The owners of these businesses tend to talk about their work in a recognizable way. They talk less about individual heroics and more about the system. They are proud of how little their day-to-day touches the operation. They have moved from running the business to designing the business — which is the only sustainable role for a founder past a certain size.",
      "None of this requires the latest software. The companies scaling smarter aren't winning because they bought a better tool. They are winning because they took the time to map the operation, identify where time was leaking, and rebuild the workflows so the work flowed cleanly. The tools are just the substrate the system runs on.",
      "If there is a pattern, it is this: the businesses that look the calmest from the outside are usually the ones that did the most uncomfortable work on the inside — questioning every step in every process, removing every workaround that had become permanent, and rebuilding the operation around how it actually needs to run, not how it happened to grow.",
    ],
  },
  {
    slug: "the-hidden-cost-of-operational-chaos",
    category: "Operations",
    title: "The Hidden Cost Of Operational Chaos",
    minutes: 5,
    publishedDate: "August 2025",
    summary:
      "What chaos really costs a business isn't measured in hours. It's measured in the decisions that never get made and the customers who quietly stop coming back.",
    body: [
      "Most owners can list the obvious costs of a chaotic business. Late invoices. Missed appointments. The Tuesday afternoon that disappears into resending a contract that was supposed to go out on Monday. These are the kinds of losses that show up on a spreadsheet, which means they tend to get addressed first.",
      "The deeper cost is harder to see, because it doesn't bill out as a line item. It bills out as judgment.",
      "When a business operates in chaos, the team's attention is permanently occupied by the next small fire. There is no mental space left for the question that actually moves the company forward — which customers are we losing, and why; which workflows are silently doubling our cost of delivery; which decisions have been waiting on the owner for the last three weeks. The longer this pattern runs, the more the business optimizes for survival instead of compounding. People get good at putting out fires and forget how to build.",
      "There is also a customer-experience cost that almost never appears in a report. A customer who has to repeat their order, or who waits two days for an answer to a single question, or who gets a different reply from three different team members — that customer doesn't write a complaint. They just don't come back. And because they don't come back, the business loses the most valuable signal it has, which is the data trail of what the customer was actually asking for.",
      "There is a team-energy cost, too. Repetitive manual work has a quiet way of eroding morale. The best people on a team are usually the ones who can see the inefficiency most clearly, which means they are also the ones most likely to leave a chaotic environment for somewhere that respects their time. The cost of that turnover doesn't appear as chaos. It appears as a hiring problem.",
      "What changes when the chaos is taken out of the operation is rarely dramatic in the way a marketing campaign is dramatic. The team stops dropping things. The customer experience becomes consistent. Decisions get made on the day they should be made. The owner stops being the human bottleneck for the business. None of that produces a press release. All of it produces the kind of compounding outcome a business actually needs.",
      "Operational chaos isn't a personality flaw or a sign that the team isn't trying hard enough. It's the predictable byproduct of growing faster than the system was designed for. The first step out of it is to stop normalizing it — to treat it as a real cost, not a cost of doing business.",
    ],
  },
  {
    slug: "how-better-communication-improves-customer-experience",
    category: "Leadership",
    title: "How Better Communication Improves Customer Experience",
    minutes: 6,
    publishedDate: "May 2025",
    summary:
      "Most customer-experience problems are communication problems in disguise. The fix is rarely a new feature. It's a new pipe.",
    body: [
      "If you ask a hundred business owners what their customers complain about, the surface answers will be wildly different — pricing, scheduling, product quality, follow-through. But underneath, most of those complaints are versions of the same complaint: I didn't know what was happening, and nobody told me.",
      "Communication, more than almost anything else, is what customers experience. Not the brand, not the website, not the promise — the actual contact. The reply time. The clarity of the answer. Whether the same person who took the order is the same person who handles the follow-up. Whether the team across the business is telling the customer the same story.",
      "When communication is fragmented across SMS, email, web chat, voicemail, DMs, and three different team members' inboxes, every touchpoint becomes an opportunity to drop the ball. The customer doesn't experience the technology stack. They experience the dropped ball.",
      "The businesses that get this right have done one specific thing. They have collapsed all customer-facing communication into a single, shared, time-stamped view of the relationship. The team can see, in one place, every message the customer has ever sent and every reply they have ever received. There is no inbox to switch between. There is no question about who replied last. There is one source of truth, and the work flows from it.",
      "That single shift quietly fixes a long list of secondary problems. Response times drop, because the team isn't hunting for context. Tone becomes consistent, because everyone is reading the same history. Handoffs stop dropping balls, because the next person has the full thread. The customer feels seen for the first time in years.",
      "Better communication is also one of the highest-leverage changes a business can make, because it doesn't require building a better product. It requires building a better pipe. The product is already good enough — what the customer is judging is what happens around the product. Get that right and the rest of the brand becomes easier to defend.",
      "The leaders of the businesses doing this work well tend to share a quiet conviction. They believe their customers can tell the difference between organizations that are listening and organizations that are processing them. They are not wrong. The difference is the entire experience.",
    ],
  },
  {
    slug: "why-systems-beat-hustle-every-time",
    category: "Systems",
    title: "Why Systems Beat Hustle Every Time",
    minutes: 4,
    publishedDate: "November 2024",
    summary:
      "Hustle is a finite resource. Systems compound. Every business eventually has to choose which one it's going to bet on.",
    body: [
      "There is a moment in the life of almost every growing business where hustle stops being the answer. The owner has been the engine since day one. They've taken the calls, written the proposals, hired the team, fixed the problems. And for a long time, hustle works — until the business gets big enough that the same energy starts producing diminishing returns.",
      "The reason this transition is so hard to see is that hustle, while it lasts, looks like leadership. The owner is everywhere. They are unblocking everything. The team feels protected. From the outside it looks like a strong operator. From the inside, the owner can feel that something has changed, but the language for it isn't obvious.",
      "What has changed is that the business has outgrown the human at the top of it. The work is no longer about doing — it's about designing.",
      "A system is what lets work happen without the owner's attention. It's the documented workflow, the automation that runs whether or not anyone remembers to trigger it, the dashboard that surfaces the right number to the right person at the right time. None of these things are glamorous. All of them are what separate a business that scales from a business that just gets busier.",
      "The most common objection to systems is that they take time to build, and the team doesn't have time. That objection is exactly the symptom they are designed to solve. A business that has no time to build systems is a business that will spend the rest of its life paying for the lack of them — in repeated work, in errors, in opportunities never captured because the team was too busy keeping the wheels on.",
      "Hustle is a finite resource. It depletes. Systems are a compounding resource. They get better the longer they run, and they keep working when the owner is asleep, on vacation, or focused on the next strategic move. Every business eventually has to choose which one of these two resources it's going to bet on. The ones that bet on systems are the ones that get to keep growing without burning the operator out.",
    ],
  },
];

/** Compact list used by the sidebar; derived from INSIGHTS_POSTS. */
export const TRENDING_INSIGHTS = INSIGHTS_POSTS.map((p) => ({
  slug: p.slug,
  category: p.category,
  title: p.title,
  minutes: p.minutes,
  theme: p.theme ?? "editorial",
}));

export const HYBRID_PLAYBOOK_CTA = {
  eyebrow: "Free Trader's Playbook",
  headline: "The Hybrid Funding playbook is free — and the most useful five minutes a serious trader can spend this week.",
  body: "Daily-loss math, drawdown rules, position sizing for funded accounts, and the discipline the firm wants to see. Built for traders who already have an edge and need the size to express it.",
  cta: "Get The Free Playbook",
  href: "https://hybridfunding.co",
};

export const AUDIT_FORM = {
  eyebrow: "Free Business Audit",
  headline: "See where your business is leaking time.",
  body: "Discover what may be slowing your business down and where operational friction could be costing you visibility, responsiveness, and revenue.",
  cta: "Request My Audit",
  disclaimer:
    "Submitted information is reviewed by Jamaur's team only. We respond within one business day.",
  hardestPrompt: "What feels hardest to manage right now?",
  hardestPlaceholder:
    "e.g. customer messages get lost across inboxes, the team isn't sure who owns what after a sale, the dashboards don't agree…",
};

export type DiscoveryItem = {
  glyph: string;
  title: string;
  body: string;
};

export const DISCOVERY: DiscoveryItem[] = [
  {
    glyph: "✦",
    title: "Missed Conversations",
    body: "Inbound messages slip across SMS, email, DMs, web chat, and voicemail — and the team can't see them in one place.",
  },
  {
    glyph: "◷",
    title: "Slow Response Times",
    body: "Leads and customers wait hours for replies that should take minutes, while attention quietly leaks elsewhere.",
  },
  {
    glyph: "▣",
    title: "Operational Bottlenecks",
    body: "Decisions stack up on one or two people because the rest of the team doesn't have the visibility to move on their own.",
  },
  {
    glyph: "↻",
    title: "Repetitive Manual Work",
    body: "Staff retype the same data into the same tools because no two systems are talking to each other.",
  },
  {
    glyph: "◐",
    title: "Lack Of Visibility",
    body: "Nobody on the team can answer simple questions about where customers, jobs, or revenue actually stand right now.",
  },
  {
    glyph: "◇",
    title: "Fragmented Systems",
    body: "CRM, calendars, billing, fulfillment, and reporting live in tools that don't share a source of truth.",
  },
  {
    glyph: "≈",
    title: "Inconsistent Communication",
    body: "Customers get different answers from different team members because nothing is templated, sequenced, or scripted.",
  },
  {
    glyph: "✕",
    title: "Overloaded Owners",
    body: "The business cannot operate for a full day without the founder personally unblocking it.",
  },
];

export type ShiftItem = {
  before: string;
  after: string;
};

export const SHIFT: ShiftItem[] = [
  {
    before: "Operations live in the owner's head",
    after: "Operations live in a system the whole team can see",
  },
  {
    before: "Customers wait for replies",
    after: "Conversations are answered in the same channel the customer used",
  },
  {
    before: "Tasks repeat across tools",
    after: "Work flows once, end-to-end, in one place",
  },
  {
    before: "Days disappear into firefighting",
    after: "Calendars protect the work that actually moves the business",
  },
  {
    before: "Team members guess at status",
    after: "Pipelines, jobs, and customers have a single source of truth",
  },
  {
    before: "Owners are the bottleneck",
    after: "Owners are the architects",
  },
  {
    before: "Growth makes the chaos worse",
    after: "Growth scales through the system, not the founder",
  },
];

export const PULL_QUOTE = {
  body: "Most owners are working harder than ever, but their businesses aren't operating better. That's where we start.",
  attribution: "Jamaur Johnson",
};

export const FINAL_CTA = {
  headline:
    "Your Business May Not Need More Hustle. It May Need Better Infrastructure.",
  subheadline:
    "Request a free business audit and uncover what may be slowing your business down behind the scenes.",
  primary: "Request My Audit",
  secondary: "Learn More",
};

export const FOOTER = {
  brand: "LIV8 Perspective",
  blurb:
    "An editorial perspective on operational infrastructure, systems thinking, and modern business architecture, published by LIV8.",
  nav: [
    { href: "#insights", label: "Insights" },
    { href: "#operations", label: "Operations" },
    { href: "#systems", label: "Systems" },
    { href: "#about", label: "About" },
    { href: "/", label: "Main Site" },
  ],
  socials: [
    { label: "YouTube", href: "https://youtube.com/@suessvilliano" },
    { label: "Instagram", href: "https://instagram.com/jamaurjohnson" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jamaurjohnson" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "mailto:contact@liv8.co", label: "Contact" },
  ],
  disclaimer:
    "This content is editorial-style branded marketing intended for informational purposes. Results vary by business.",
};
