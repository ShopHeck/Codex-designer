import { BillingPlanCard } from '@/components/billing';
import { CtaButton, StatePanel } from '@/components/ui';

export default function PricingPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl sm:text-4xl">Pricing built for growth teams</h1>
      <p className="mt-3 text-sm text-muted sm:text-base">Start free, then scale with usage as conversion volume grows.</p>
      <div className="mt-6">
        <CtaButton href="/sign-up">Choose starter plan</CtaButton>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <BillingPlanCard title="Starter" price="$49/month • 3 active funnels" />
        <BillingPlanCard title="Pro" price="$149/month • 15 funnels + advanced analytics" />
        <BillingPlanCard title="Scale" price="Custom • Unlimited funnels + priority support" />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <StatePanel state="loading" title="Calculating annual savings" message="Fetching discount preview for your team size." />
        <StatePanel state="empty" title="No payment method on file" message="Add billing details to activate paid features." actionLabel="Go to billing" actionHref="/billing" />
        <StatePanel state="error" title="Pricing service unreachable" message="We couldn't refresh plans right now." actionLabel="Contact sales" actionHref="/demo" />
      </section>
    </main>
  );
}
