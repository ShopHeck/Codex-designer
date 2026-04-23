import { AnalyticsKpiCard } from '@/components/analytics';
import { AppShell, PageContainer, PageHeader } from '@/components/app-shell';
import { CtaButton, StatePanel } from '@/components/ui';

export default function AnalyticsPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Analytics"
          title="Conversion analytics"
          description="Understand where users drop and where revenue momentum accelerates."
          actions={<CtaButton href="/dashboard">View executive summary</CtaButton>}
        />
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnalyticsKpiCard title="Visit to trial" value="8.9%" context="Last 30 days" />
          <AnalyticsKpiCard title="Trial to paid" value="24.3%" context="Last 30 days" />
          <AnalyticsKpiCard title="Average payback" value="41 days" context="Across active funnels" />
        </section>
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <StatePanel state="loading" title="Refreshing events" message="Syncing latest conversion events from trackers." />
          <StatePanel state="empty" title="No events collected" message="Install tracking script to populate analytics." actionLabel="Open setup" actionHref="/settings" />
          <StatePanel state="error" title="Event pipeline degraded" message="Some event sources are currently delayed." actionLabel="View status" actionHref="/api/health" />
        </section>
      </PageContainer>
    </AppShell>
  );
}
