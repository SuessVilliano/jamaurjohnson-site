# JAMAUR — jamaurjohnson.com

The official interactive portfolio universe for **Jamaur Johnson** — author, founder, music creator, AI builder, trader, and visionary.

A cinematic, 3D-animated, scroll-driven personal site built with Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, and React Three Fiber.

## Highlights

- Cinematic 3D hero (React Three Fiber + drei) with a distorted fluid orb, orbiting rings, sparkles, and a star field
- Liquid glassmorphism UI throughout — aqua / violet / electric gradients on a deep dark background
- Scroll-driven "Five Worlds" journey, parallax effects, animated cards
- **AI chat assistant** (Vercel AI Gateway + Claude Sonnet 4.5) that qualifies visitors and routes them to a call
- **Book-a-call** modal with calendar + time slots → emails leads to suessvilliano@gmail.com
- **Exit-intent popup** for email capture (7-day suppression via localStorage)
- All content driven from a single data file (`src/lib/portfolio-data.ts`)
- Mobile-first responsive design with `prefers-reduced-motion` support
- SEO + OpenGraph metadata, themed viewport, premium typography (Orbitron / Space Grotesk / JetBrains Mono)

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Fluid Compute)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://r3f.docs.pmnd.rs/) + [drei](https://drei.docs.pmnd.rs/) + [three](https://threejs.org/)
- [Vercel AI SDK v6](https://sdk.vercel.ai) + [Vercel AI Gateway](https://vercel.com/docs/ai-gateway)
- [Resend](https://resend.com) (transactional email)
- [react-day-picker](https://daypicker.dev) + [date-fns](https://date-fns.org)
- TypeScript, ESLint, Zod

## Local development

Requires Node 20+ and [pnpm](https://pnpm.io/).

```bash
pnpm install
cp .env.example .env.local
# fill in RESEND_API_KEY + AI_GATEWAY_API_KEY (see below)
pnpm dev
```

Open http://localhost:3000.

### Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable             | Purpose                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`     | Lead emails. Grab a key at [resend.com](https://resend.com) (free tier covers 100/day).       |
| `RESEND_FROM`        | Optional sender override. Defaults to Resend's onboarding address — fine until you verify a domain. |
| `AI_GATEWAY_API_KEY` | Powers `/api/chat`. Grab from [vercel.com/ai-gateway](https://vercel.com/ai-gateway). Auto-injected on Vercel via OIDC. |
| `CHAT_MODEL`         | Optional. Defaults to `anthropic/claude-sonnet-4.5`. Use any AI Gateway model string.         |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). Mount `<GoogleAnalytics>` site-wide when set; safe no-op when missing. |

On Vercel, set these in **Project Settings → Environment Variables** (or `vercel env add` from the CLI).

### Lead flow

- **Exit intent popup** — captures email when the cursor leaves the viewport (desktop) or after 45s of mobile scroll. Suppressed 7 days after dismiss/submit via `localStorage`.
- **Book a Call modal** — opens from nav, contact section, and chat. Calendar + 30-min slots, weekdays only, next 30 days. Submits to `/api/contact`.
- **AI chat assistant** — floating bottom-right widget. Streams Claude responses, suggests booking a call after a few exchanges.

All three POST to `/api/contact` with `source: "exit-intent" | "book-a-call" | "chat"`, which emails the lead to `suessvilliano@gmail.com` via Resend.

### Editing content

All books, companies, sites, music, and "worlds" live in one file:

```
src/lib/portfolio-data.ts
```

Update the arrays there to change the site — no component code required.

## Project structure

```
src/
  app/
    layout.tsx              # Fonts, metadata, root layout
    page.tsx                # Composes all sections + lead components
    globals.css             # Tailwind v4 theme, glass utilities
    api/
      contact/route.ts      # POST → emails lead to suessvilliano@gmail.com (Resend)
      chat/route.ts         # POST → streams AI chat (AI Gateway + Claude)
  components/
    sections/               # Nav, Hero, ScrollJourney, Books, Companies, Sites, Music, About, Vision, Contact, Footer
    three/                  # HeroScene, ParticleField (R3F)
    ui/                     # GlassButton, GlassCard, SectionHeader
    lead/                   # Modal, BookCallContext, BookCallModal, ExitIntentPopup, AIChat
  lib/
    portfolio-data.ts       # Central content data
    lead-email.ts           # Resend wrapper + email template
```

## Deploy to Vercel

The site is deploy-ready for Vercel with zero configuration.

```bash
# one-time
pnpm dlx vercel link

# deploy preview
pnpm dlx vercel

# deploy production
pnpm dlx vercel --prod
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) — Vercel will detect Next.js 16 automatically.

### Custom domain

Once deployed, add `jamaurjohnson.com` from the project's **Settings → Domains** page in Vercel and update your DNS to point at Vercel.

## License

© Jamaur Johnson. All rights reserved.
