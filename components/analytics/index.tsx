import { SurfaceCard } from '@/components/ui';

export function AnalyticsKpiCard({
  title,
  value,
  context
}: {
  title: string;
  value: string;
  context: string;
}) {
  return (
    <SurfaceCard title={title} description={context}>
      <p className="font-display text-2xl">{value}</p>
    </SurfaceCard>
  );
}
