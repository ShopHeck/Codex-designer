import { AppShell, PageContainer, PageHeader } from '@/components/app-shell';
import { ExperienceCard } from '@/components/creator';
import { CtaButton, StatePanel } from '@/components/ui';

export default function ExperiencesPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Experiences"
          title="Manage all experiences"
          description="Track status, publish changes, and optimize each conversion flow."
          actions={<CtaButton href="/experiences/new">New experience</CtaButton>}
        />
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ExperienceCard name="SaaS onboarding quiz" status="Published" />
          <ExperienceCard name="Checkout assist flow" status="Draft" />
          <ExperienceCard name="Lead qualification bot" status="Paused" />
        </section>
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <StatePanel state="loading" title="Loading experience list" message="Fetching current statuses and owners." />
          <StatePanel state="empty" title="No experiences yet" message="Create one to start collecting conversions." actionLabel="Create first experience" actionHref="/experiences/new" />
          <StatePanel state="error" title="List unavailable" message="Experience service returned an unexpected response." actionLabel="Retry" actionHref="/experiences" />
        </section>
      </PageContainer>
    </AppShell>
  );
}
