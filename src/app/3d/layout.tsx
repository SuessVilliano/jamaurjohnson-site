import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Experience",
  description:
    "An immersive, scroll-driven 3D universe of Jamaur Johnson's ecosystem — BUILD, TRADE, CREATE, ELEVATE. Best viewed on desktop.",
  alternates: { canonical: "/3d" },
};

export default function ThreeDLayout({ children }: { children: React.ReactNode }) {
  return children;
}
