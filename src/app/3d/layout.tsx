import type { Metadata } from "next";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const DESCRIPTION =
  "An immersive, scroll-driven 3D universe of Jamaur Johnson's ecosystem — BUILD, TRADE, CREATE, ELEVATE. Best viewed on desktop.";

export const metadata: Metadata = {
  title: "3D Experience",
  description: DESCRIPTION,
  alternates: { canonical: "/3d" },
  openGraph: {
    type: "website",
    url: "/3d",
    siteName: "Jamaur Johnson",
    title: "3D Experience · Jamaur Johnson",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Experience · Jamaur Johnson",
    description: DESCRIPTION,
  },
};

export default function ThreeDLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll />
      {children}
    </>
  );
}
