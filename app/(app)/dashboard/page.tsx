import { AppShell, PageContainer, PageHeader } from '@/components/app-shell';
import { DashboardMetricCard } from '@/components/dashboard';
import { CtaButton, StatePanel } from '@/components/ui';

export default function DashboardPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Overview"
          title="Revenue dashboard"
          description="Monitor the funnel performance and launch priorities across your workspace."
          actions={<CtaButton href="/experiences/new">Create experience</CtaButton>}
        />
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DashboardMetricCard title="Monthly recurring revenue" value="$18,420" delta="+12.4%" />
          <DashboardMetricCard title="Active trials" value="321" delta="+8.1%" />
          <DashboardMetricCard title="Activation rate" value="42%" delta="+3.0 pts" />
        </section>
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <StatePanel state="loading" title="Refreshing KPIs" message="Syncing your latest funnel and billing metrics." />
          <StatePanel state="empty" title="No pinned reports" message="Pin metrics to keep your team aligned daily." actionLabel="Open analytics" actionHref="/analytics" />
          <StatePanel state="error" title="Metric sync failed" message="Some charts are delayed due to provider timeout." actionLabel="Retry sync" actionHref="/dashboard" />
        </section>
      </PageContainer>
    </AppShell>
  );
}
