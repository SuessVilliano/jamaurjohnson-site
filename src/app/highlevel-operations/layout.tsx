import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

const playfair = Playfair_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://jamaurjohnson.com";
const PAGE_URL = `${SITE_URL}/highlevel-operations`;

const TITLE = "Fractional HighLevel Operations For Growing Agencies";
const DESCRIPTION =
  "LIV8 AI is the fractional HighLevel operations partner for agencies with 3–30 clients. We go inside your account to audit, repair, and operate your HighLevel systems — starting with the 7-day HighLevel Rescue Sprint. Independent; not affiliated with or endorsed by HighLevel.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "LIV8 AI",
    title: `${TITLE} · LIV8 AI`,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} · LIV8 AI`,
    description: DESCRIPTION,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fractional HighLevel Operations",
  serviceType: "HighLevel (GoHighLevel) agency operations, setup, repair, and automation",
  description: DESCRIPTION,
  url: PAGE_URL,
  areaServed: "US",
  audience: {
    "@type": "Audience",
    audienceType: "HighLevel agency owners with 3–30 active clients",
  },
  provider: {
    "@type": "Organization",
    name: "LIV8 AI",
    url: SITE_URL,
    founder: { "@type": "Person", name: "Jamaur Johnson", url: SITE_URL },
  },
  offers: [
    {
      "@type": "Offer",
      name: "HighLevel Rescue Sprint",
      description:
        "A 7-business-day audit, repair, and organization of an agency's HighLevel account with a written roadmap and 14 days of post-delivery support.",
      price: "1500",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "LIV8 Ops Desk — Essential",
      price: "497",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "497",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      name: "LIV8 Ops Desk — Growth",
      price: "997",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "997",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      name: "LIV8 Ops Desk — Embedded",
      price: "1997",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1997",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
  ],
};

/**
 * Isolated layout for the LIV8 AI HighLevel Operations landing page.
 *
 * Adds the Playfair Display editorial serif as `--font-editorial` and scopes a
 * dark surface to this branch of the tree. Unlike /perspective, we KEEP the
 * global GoHighLevel chat widget here — it fits a HighLevel-audience page and
 * doubles as live proof of a working LeadConnector install.
 */
export default function HighLevelLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${playfair.variable} bg-[#06080f] text-[#f4ede0]`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </div>
  );
}
