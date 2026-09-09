import { GrowthInsightArticle, growthInsightMetadata } from "@/components/perspective/GrowthInsightArticle";
import { growthInsightBySlug } from "@/lib/growth-insights";

const post = growthInsightBySlug("cme-e-nano-futures-changed-the-game")!;

export const metadata = growthInsightMetadata(post);

export default function Page() {
  return <GrowthInsightArticle post={post} />;
}
