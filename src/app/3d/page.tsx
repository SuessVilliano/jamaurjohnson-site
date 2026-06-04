"use client";

import dynamic from "next/dynamic";
import { StackedFallback } from "@/components/sections/StackedFallback";
import { useDisplayMode } from "@/components/three/hooks/useDisplayMode";
import { useMounted } from "@/components/hooks/useMounted";

const SceneOrchestrator = dynamic(
  () => import("@/components/three/SceneOrchestrator").then((m) => m.SceneOrchestrator),
  { ssr: false },
);

const PinnedStory = dynamic(
  () => import("@/components/sections/PinnedStory").then((m) => m.PinnedStory),
  { ssr: false },
);

export default function ThreeDExperience() {
  const mounted = useMounted();
  const mode = useDisplayMode();
  const cinematic = mounted && mode === "full";

  if (!cinematic) {
    return (
      <main id="main-content" className="relative w-full">
        <StackedFallback />
      </main>
    );
  }

  return (
    <main id="main-content" className="relative w-full">
      <SceneOrchestrator />
      <PinnedStory />
    </main>
  );
}
