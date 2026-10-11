import { INITIAL_POSTS } from '@/lib/sanity/posts';
import { constructMetadata } from '@/lib/seo/metadata';
import { InsightsClient } from '@/components/sections/InsightsClient';

export const metadata = constructMetadata({
  title: 'Insights & Thought Leadership | APEX CREATIVE',
  description: 'Articles on brand identity, visual design science, performance marketing, and digital web architecture by APEX CREATIVE.'
});

export default function InsightsOverviewPage() {
  return <InsightsClient posts={INITIAL_POSTS} />;
}
