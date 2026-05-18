import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Orbitron, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "JAMAUR — Author. Founder. Music Creator. AI Builder. Trader. Visionary.",
    template: "%s · JAMAUR",
  },
  description:
    "A digital universe of books, companies, music, platforms, and ideas built to elevate people, business, creativity, and financial freedom.",
  keywords: [
    "Jamaur Johnson",
    "JAMAUR",
    "LIV8",
    "Hybrid Funding",
    "Trade Hybrid",
    "AI builder",
    "founder",
    "author",
    "music",
    "trader",
    "digital real estate",
  ],
  authors: [{ name: "Jamaur Johnson" }],
  creator: "Jamaur Johnson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "JAMAUR",
    title: "JAMAUR — Author. Founder. Music Creator. AI Builder. Trader. Visionary.",
    description:
      "A digital universe of books, companies, music, platforms, and ideas built to elevate people, business, creativity, and financial freedom.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAMAUR — Multidimensional Creator",
    description:
      "Books, companies, music, platforms, and ideas — built to elevate people and unlock freedom.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#03040a",
  colorScheme: "dark",
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
      <body className="min-h-full flex flex-col noise">
        {children}

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
