import { GrowthInsightArticle, growthInsightMetadata } from "@/components/perspective/GrowthInsightArticle";
import { growthInsightBySlug } from "@/lib/growth-insights";

const post = growthInsightBySlug("content-that-compounds-affiliate-business")!;

export const metadata = growthInsightMetadata(post);

export default function Page() {
  return <GrowthInsightArticle post={post} />;
}
