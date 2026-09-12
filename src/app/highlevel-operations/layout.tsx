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
  "Archived LIV8 AI HighLevel operations offer. This page is retained for future reference but is not a current public offer.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
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
  provider: {
    "@type": "Organization",
    name: "LIV8 AI",
    url: SITE_URL,
    founder: { "@type": "Person", name: "Jamaur Johnson", url: SITE_URL },
  },
};

/**
 * Legacy HighLevel Operations page retained for future use.
 * It is intentionally removed from navigation/sitemap and marked noindex.
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
