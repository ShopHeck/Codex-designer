import { SurfaceCard } from '@/components/ui';

export function TemplateCard({
  title,
  fit
}: {
  title: string;
  fit: string;
}) {
  return <SurfaceCard title={title} description={`Best for: ${fit}`} />;
}
