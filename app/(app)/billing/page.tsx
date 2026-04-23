import { AppShell, PageContainer, PageHeader } from '@/components/app-shell';
import { BillingPlanCard } from '@/components/billing';
import { CtaButton, StatePanel } from '@/components/ui';

export default function BillingPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Billing"
          title="Billing and subscriptions"
          description="Manage plan, payment methods, and invoices for predictable growth."
          actions={<CtaButton href="/pricing">Upgrade plan</CtaButton>}
        />
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <BillingPlanCard title="Current plan" price="Pro • $149/month" />
          <BillingPlanCard title="Seats" price="12 active members" />
          <BillingPlanCard title="Next invoice" price="$149 due May 14" />
        </section>
        <section className="mt-6">
          <CtaButton href="/billing">Update payment method</CtaButton>
        </section>
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <StatePanel state="loading" title="Fetching invoices" message="Loading recent invoice history and usage." />
          <StatePanel state="empty" title="No invoice history" message="Invoices appear once your first billing cycle closes." actionLabel="Back to pricing" actionHref="/pricing" />
          <StatePanel state="error" title="Billing sync issue" message="Unable to sync with payment provider." actionLabel="Retry billing sync" actionHref="/billing" />
        </section>
      </PageContainer>
    </AppShell>
  );
}
