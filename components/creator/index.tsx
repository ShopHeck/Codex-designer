import { SurfaceCard } from '@/components/ui';

export function ExperienceCard({
  name,
  status
}: {
  name: string;
  status: string;
}) {
  return <SurfaceCard title={name} description={`Status: ${status}`} />;
}
