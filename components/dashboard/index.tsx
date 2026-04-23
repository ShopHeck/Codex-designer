import { SurfaceCard } from '@/components/ui';

export function DashboardMetricCard({
  title,
  value,
  delta
}: {
  title: string;
  value: string;
  delta: string;
}) {
  return (
    <SurfaceCard title={title} description={`Trend: ${delta}`}>
      <p className="font-display text-2xl">{value}</p>
    </SurfaceCard>
  );
}
