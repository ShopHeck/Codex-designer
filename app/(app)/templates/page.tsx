import { AppShell, PageContainer, PageHeader } from '@/components/app-shell';
import { TemplateCard } from '@/components/templates';
import { CtaButton, StatePanel } from '@/components/ui';

export default function TemplatesPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Templates"
          title="Template library"
          description="Pick high-performing templates designed for onboarding and upsell use cases."
          actions={<CtaButton href="/experiences/new">Use a template</CtaButton>}
        />
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <TemplateCard title="Onboarding checklist" fit="Activation" />
          <TemplateCard title="Upgrade nudger" fit="Expansion revenue" />
          <TemplateCard title="Qualification survey" fit="Inbound lead scoring" />
        </section>
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <StatePanel state="loading" title="Loading templates" message="Fetching curated template recommendations." />
          <StatePanel state="empty" title="No custom templates" message="Save your best-performing flows as reusable templates." actionLabel="Create template" actionHref="/experiences/new" />
          <StatePanel state="error" title="Template API error" message="Unable to fetch templates from workspace." actionLabel="Try again" actionHref="/templates" />
        </section>
      </PageContainer>
    </AppShell>
  );
}
