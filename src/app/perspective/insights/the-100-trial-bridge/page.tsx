import { GrowthInsightArticle, growthInsightMetadata } from "@/components/perspective/GrowthInsightArticle";
import { growthInsightBySlug } from "@/lib/growth-insights";

const post = growthInsightBySlug("the-100-trial-bridge")!;

export const metadata = growthInsightMetadata(post);

export default function Page() {
  return <GrowthInsightArticle post={post} />;
}
