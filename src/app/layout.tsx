import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Orbitron, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://jamaurjohnson.com";
const TITLE =
  "Jamaur Johnson — Founder, AI Automation Architect, Trader, Author & Music Creator";
const DESCRIPTION =
  "Jamaur Johnson (aka Suess Villiano, bka META SV) — Wilmington-born founder, AI automation architect, trader, author, and music creator. Builder of LIV8, LIV8AI, Hybrid Funding, Trade Hybrid, and digital ecosystems that turn ideas into long-term assets.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Jamaur Johnson",
  },
  description: DESCRIPTION,
  applicationName: "Jamaur Johnson",
  keywords: [
    "Jamaur Johnson",
    "Suess Villiano",
    "META SV",
    "JAMAUR",
    "LIV8",
    "LIV8AI",
    "Hybrid Funding",
    "Trade Hybrid",
    "GoHighLevel expert",
    "AI automation architect",
    "AI agents",
    "SaaS founder",
    "funded trader program",
    "prop firm",
    "digital ecosystems",
    "digital real estate",
    "Wilmington Delaware entrepreneur",
    "AI builder",
    "trader",
    "author",
    "music creator",
  ],
  authors: [{ name: "Jamaur Johnson", url: SITE_URL }],
  creator: "Jamaur Johnson",
  publisher: "Jamaur Johnson",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Jamaur Johnson",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@jamaurjohnson",
  },
  category: "personal brand",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#03040a",
  colorScheme: "dark",
};

// JSON-LD structured data — gives search engines and LLM assistants a clean,
// machine-readable record of who Jamaur is, what he's built, and how to
// disambiguate his identities (legal name, music alias, creative alias).
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}#jamaur`,
  name: "Jamaur Johnson",
  alternateName: ["Suess Villiano", "META SV"],
  url: SITE_URL,
  image: `${SITE_URL}/photos/portrait-press.jpg`,
  description: DESCRIPTION,
  jobTitle: [
    "Founder",
    "AI Automation Architect",
    "Trader",
    "Author",
    "Music Creator",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "AI Automation",
    "GoHighLevel",
    "SaaS",
    "FinTech",
    "Trading",
    "Prop Trading",
    "Funded Trader Programs",
    "Digital Real Estate",
    "Entrepreneurship",
    "Music Production",
    "Generational Wealth",
  ],
  birthPlace: {
    "@type": "Place",
    name: "Wilmington, Delaware, USA",
  },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "Caravel Academy" },
    { "@type": "EducationalOrganization", name: "West Chester University" },
    { "@type": "EducationalOrganization", name: "University of Delaware" },
    { "@type": "EducationalOrganization", name: "Wilmington University" },
  ],
  sameAs: [
    "https://youtube.com/@suessvilliano",
    "https://instagram.com/jamaurjohnson",
    "https://twitter.com/jamaurjohnson",
    "https://linkedin.com/in/jamaurjohnson",
  ],
  worksFor: [
    { "@type": "Organization", name: "LIV8", url: "https://liv8.co" },
    { "@type": "Organization", name: "Hybrid Funding" },
    { "@type": "Organization", name: "Trade Hybrid" },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: "Jamaur Johnson",
  alternateName: ["JAMAUR", "Suess Villiano", "META SV"],
  description: DESCRIPTION,
  inLanguage: "en-US",
  publisher: { "@id": `${SITE_URL}#jamaur` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${space.variable} ${orbitron.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col noise">
        <Providers>{children}</Providers>

        {/* GoHighLevel form/booking widget auto-resize helper.
            Loaded once globally so booking + form iframes resize correctly,
            including ones mounted later inside the lead modal. */}
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="afterInteractive"
        />

        {/* GoHighLevel chat widget — bottom-right conversation bubble. */}
        <Script
          src="https://beta.leadconnectorhq.com/loader.js"
          data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a0b30308dd781334c57af7c"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
