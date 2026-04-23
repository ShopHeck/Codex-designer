import { AppShell, PageContainer, PageHeader } from '@/components/app-shell';
import { ExperienceCard } from '@/components/creator';
import { CtaButton, StatePanel } from '@/components/ui';

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Experience detail"
          title={`Experience ${params.id}`}
          description="Review performance and continue editing before the next publish."
          actions={<CtaButton href={`/builder/${params.id}`}>Edit in builder</CtaButton>}
        />
        <section className="mt-6 grid gap-4 sm:grid-cols-2">
          <ExperienceCard name="Current version" status="Published" />
          <ExperienceCard name="Next version" status="Draft" />
        </section>
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <StatePanel state="loading" title="Loading experience details" message="Fetching nodes, copy, and conversion events." />
          <StatePanel state="empty" title="No activity recorded" message="This experience has no traffic yet." actionLabel="Open preview" actionHref={`/preview/${params.id}`} />
          <StatePanel state="error" title="Cannot load version history" message="History service is temporarily unavailable." actionLabel="Back to experiences" actionHref="/experiences" />
        </section>
      </PageContainer>
    </AppShell>
  );
}
