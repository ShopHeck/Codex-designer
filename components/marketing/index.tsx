import { SurfaceCard } from '@/components/ui';

export function MarketingValueCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return <SurfaceCard title={title} description={description} />;
}
