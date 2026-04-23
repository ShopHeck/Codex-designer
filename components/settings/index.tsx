import { SurfaceCard } from '@/components/ui';

export function SettingsItemCard({
  title,
  detail
}: {
  title: string;
  detail: string;
}) {
  return <SurfaceCard title={title} description={detail} />;
}
