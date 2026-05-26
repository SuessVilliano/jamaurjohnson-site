import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

const playfair = Playfair_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://jamaurjohnson.com";

export const metadata: Metadata = {
  title: "The Operator Quietly Rebuilding Businesses Behind The Scenes",
  description:
    "How one entrepreneur is helping business owners uncover hidden inefficiencies, simplify operations, and reclaim their time. A LIV8 Perspective feature.",
  alternates: { canonical: `${SITE_URL}/perspective` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/perspective`,
    siteName: "LIV8 Perspective",
    title: "The Operator Quietly Rebuilding Businesses Behind The Scenes",
    description:
      "How one entrepreneur is helping business owners uncover hidden inefficiencies, simplify operations, and reclaim their time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Operator Quietly Rebuilding Businesses Behind The Scenes",
    description:
      "How one entrepreneur is helping business owners uncover hidden inefficiencies, simplify operations, and reclaim their time.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Operator Quietly Rebuilding Businesses Behind The Scenes",
  description:
    "How one entrepreneur is helping business owners uncover hidden inefficiencies, simplify operations, and reclaim their time.",
  author: {
    "@type": "Person",
    name: "Jamaur Johnson",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "LIV8 Perspective",
    url: `${SITE_URL}/perspective`,
  },
  mainEntityOfPage: `${SITE_URL}/perspective`,
  image: `${SITE_URL}/photos/portrait-lounge.png`,
};

/**
 * Isolated editorial layout for the LIV8 Perspective landing page.
 *
 * Adds the Playfair Display editorial serif as `--font-editorial`, scopes a
 * dark-mode class to this branch of the tree, and injects a small style block
 * that hides the global GoHighLevel chat widget (loaded by the root layout)
 * so the editorial tone isn't broken by a chat bubble.
 */
export default function PerspectiveLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${playfair.variable} perspective-root bg-[#06080f] text-[#f4ede0]`}>
      <style>{`
        /* Hide the global LeadConnector chat bubble on the perspective surface. */
        [id*="lc_chat_widget"],
        [id*="chat-widget"],
        iframe[src*="leadconnectorhq.com/chat-widget"],
        iframe[src*="leadconnector.com/chat-widget"] {
          display: none !important;
        }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {children}
    </div>
  );
}
