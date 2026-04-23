import { SurfaceCard } from '@/components/ui';

export function BillingPlanCard({
  title,
  price
}: {
  title: string;
  price: string;
}) {
  return <SurfaceCard title={title} description={price} />;
}
