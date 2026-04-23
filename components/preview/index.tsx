import { SurfaceCard } from '@/components/ui';

export function PreviewDeviceCard({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return <SurfaceCard title={title} description={description} />;
}
