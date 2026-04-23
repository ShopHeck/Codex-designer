import { MarketingValueCard } from '@/components/marketing';
import { CtaButton, StatePanel } from '@/components/ui';

export default function MarketingPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-10">
        <p className="text-xs uppercase tracking-wide text-cyan">Launch faster</p>
        <h1 className="mt-3 font-display text-3xl sm:text-5xl">Ship AI experiences that convert visitors into revenue.</h1>
        <p className="mt-4 max-w-2xl text-sm text-muted sm:text-base">
          Build, test, and monetize interactive experiences with a conversion-first workflow.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton href="/sign-up">Start free trial</CtaButton>
          <CtaButton href="/demo" variant="secondary">
            View product demo
          </CtaButton>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <MarketingValueCard title="Higher conversion" description="A/B-ready templates built for signup and purchase events." />
        <MarketingValueCard title="Faster launches" description="From brief to live funnel in minutes with guided setup." />
        <MarketingValueCard title="Reliable insights" description="Track each step from click to checkout in one dashboard." />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <StatePanel state="loading" title="Preparing your personalized funnel" message="We are loading your suggested launch plan." />
        <StatePanel state="empty" title="No active campaigns yet" message="Create your first experience to begin collecting leads." actionLabel="Create experience" actionHref="/experiences/new" />
        <StatePanel state="error" title="Demo preview unavailable" message="We could not fetch your latest demo data. Try again or open status." actionLabel="Open status" actionHref="/api/health" />
      </section>
    </main>
  );
}
