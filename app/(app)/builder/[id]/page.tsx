import { AppShell, PageContainer, PageHeader } from '@/components/app-shell';
import { BuilderStageCard } from '@/components/builder';
import { CtaButton, StatePanel } from '@/components/ui';

export default function BuilderPage({ params }: { params: { id: string } }) {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Builder"
          title={`Builder for ${params.id}`}
          description="Design steps, branching logic, and conversion actions in one flow."
          actions={<CtaButton href={`/preview/${params.id}`}>Preview flow</CtaButton>}
        />
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <BuilderStageCard title="Step 1: Entry" note="Capture intent with a single-question opener." />
          <BuilderStageCard title="Step 2: Qualify" note="Branch users by need and buying timeline." />
          <BuilderStageCard title="Step 3: Convert" note="Route to payment or high-intent demo booking." />
        </section>
        <section className="mt-6">
          <CtaButton href={`/experiences/${params.id}`}>Save draft changes</CtaButton>
        </section>
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <StatePanel state="loading" title="Rendering canvas" message="Compiling latest blocks and conditions." />
          <StatePanel state="empty" title="No blocks added" message="Start with a question block to build momentum." actionLabel="Add first block" actionHref={`/builder/${params.id}`} />
          <StatePanel state="error" title="Autosave interrupted" message="Recent edits have not synced yet." actionLabel="Retry save" actionHref={`/builder/${params.id}`} />
        </section>
      </PageContainer>
    </AppShell>
  );
}
