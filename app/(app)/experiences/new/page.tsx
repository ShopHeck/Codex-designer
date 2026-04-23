import { AppShell, PageContainer, PageHeader } from '@/components/app-shell';
import { TemplateCard } from '@/components/templates';
import { CtaButton, StatePanel } from '@/components/ui';

export default function NewExperiencePage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Create"
          title="Create a new experience"
          description="Start from a proven template and launch faster with conversion defaults."
          actions={<CtaButton href="/templates">Browse templates</CtaButton>}
        />
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <TemplateCard title="Product tour" fit="Free trial activation" />
          <TemplateCard title="Pricing recommender" fit="Plan upgrades" />
          <TemplateCard title="Lead scoring wizard" fit="Sales qualification" />
        </section>
        <section className="mt-6">
          <CtaButton href="/experiences/new">Start from blank canvas</CtaButton>
        </section>
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <StatePanel state="loading" title="Preparing template library" message="Fetching latest template metadata." />
          <StatePanel state="empty" title="No templates in workspace" message="Import templates or create your own baseline." actionLabel="Go to templates" actionHref="/templates" />
          <StatePanel state="error" title="Template fetch failed" message="We could not load recommendations right now." actionLabel="Retry loading" actionHref="/experiences/new" />
        </section>
      </PageContainer>
    </AppShell>
  );
}
