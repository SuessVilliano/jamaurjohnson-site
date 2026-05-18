# JAMAUR — jamaurjohnson.com

The official interactive portfolio universe for **Jamaur Johnson** — author, founder, music creator, AI builder, trader, and visionary.

A cinematic, 3D-animated, scroll-driven personal site built with Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion, and React Three Fiber.

## Highlights

- Cinematic 3D hero (React Three Fiber + drei) with a distorted fluid orb, orbiting rings, sparkles, and a star field
- Liquid glassmorphism UI throughout — aqua / violet / electric gradients on a deep dark background
- Scroll-driven "Five Worlds" journey, parallax effects, animated cards
- All content driven from a single data file (`src/lib/portfolio-data.ts`)
- Mobile-first responsive design with `prefers-reduced-motion` support
- SEO + OpenGraph metadata, themed viewport, premium typography (Orbitron / Space Grotesk / JetBrains Mono)

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://r3f.docs.pmnd.rs/) + [drei](https://drei.docs.pmnd.rs/) + [three](https://threejs.org/)
- TypeScript, ESLint

## Local development

Requires Node 20+ and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

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
    layout.tsx          # Fonts, metadata, root layout
    page.tsx            # Composes all sections
    globals.css         # Tailwind v4 theme, glass utilities
  components/
    sections/           # Nav, Hero, ScrollJourney, Books, Companies, Sites, Music, About, Vision, Contact, Footer
    three/              # HeroScene, ParticleField (R3F)
    ui/                 # GlassButton, GlassCard, SectionHeader
  lib/
    portfolio-data.ts   # Central content data
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
