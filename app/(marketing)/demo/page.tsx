import { MarketingValueCard } from '@/components/marketing';
import { CtaButton, StatePanel } from '@/components/ui';

export default function DemoPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl sm:text-4xl">Interactive product demo</h1>
      <p className="mt-3 text-sm text-muted sm:text-base">
        Explore how teams launch onboarding and checkout flows that drive subscription revenue.
      </p>
      <div className="mt-6">
        <CtaButton href="/sign-up">Start building now</CtaButton>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <MarketingValueCard title="Guided builder" description="Create steps, logic, and CTAs in one visual workspace." />
        <MarketingValueCard title="Analytics loop" description="See which interactions improve trial-to-paid conversion." />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <StatePanel state="loading" title="Loading live demo recording" message="Fetching the latest walkthrough assets." />
        <StatePanel state="empty" title="No saved demo session" message="Record a walkthrough to share with prospects." actionLabel="Record walkthrough" actionHref="/experiences/new" />
        <StatePanel state="error" title="Replay unavailable" message="The demo stream failed to load on this network." actionLabel="Retry with static demo" actionHref="/demo" />
      </section>
    </main>
  );
}
