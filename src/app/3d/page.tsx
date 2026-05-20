"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { StackedFallback } from "@/components/sections/StackedFallback";
import { useDisplayMode } from "@/components/three/hooks/useDisplayMode";

const SceneOrchestrator = dynamic(
  () => import("@/components/three/SceneOrchestrator").then((m) => m.SceneOrchestrator),
  { ssr: false },
);

const PinnedStory = dynamic(
  () => import("@/components/sections/PinnedStory").then((m) => m.PinnedStory),
  { ssr: false },
);

export default function ThreeDExperience() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const mode = useDisplayMode();
  const cinematic = mounted && mode === "full";

  if (!cinematic) {
    return (
      <main className="relative w-full">
        <StackedFallback />
      </main>
    );
  }

  return (
    <main className="relative w-full">
      <SceneOrchestrator />
      <PinnedStory />
    </main>
  );
}
