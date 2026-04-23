import { AppShell, PageContainer, PageHeader } from '@/components/app-shell';
import { PreviewDeviceCard } from '@/components/preview';
import { CtaButton, StatePanel } from '@/components/ui';

export default function PreviewPage({ params }: { params: { id: string } }) {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Preview"
          title={`Preview ${params.id}`}
          description="Validate the user journey before publish across all key devices."
          actions={<CtaButton href={`/experiences/${params.id}`}>Publish experience</CtaButton>}
        />
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PreviewDeviceCard title="Mobile" description="Primary layout with thumb-friendly CTA." />
          <PreviewDeviceCard title="Tablet" description="Expanded content with adaptive spacing." />
          <PreviewDeviceCard title="Desktop" description="Wider conversion panel with summary context." />
        </section>
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <StatePanel state="loading" title="Generating preview" message="Applying latest style and content overrides." />
          <StatePanel state="empty" title="No preview snapshot" message="Run preview after creating at least one step." actionLabel="Open builder" actionHref={`/builder/${params.id}`} />
          <StatePanel state="error" title="Preview crashed" message="A component failed to render in this version." actionLabel="Return to builder" actionHref={`/builder/${params.id}`} />
        </section>
      </PageContainer>
    </AppShell>
  );
}
