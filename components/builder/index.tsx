import { SurfaceCard } from '@/components/ui';

export function BuilderStageCard({ title, note }: { title: string; note: string }) {
  return <SurfaceCard title={title} description={note} />;
}
