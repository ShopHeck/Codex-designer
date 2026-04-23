import { AppShell, PageContainer, PageHeader } from '@/components/app-shell';
import { SettingsItemCard } from '@/components/settings';
import { CtaButton, StatePanel } from '@/components/ui';

export default function SettingsPage() {
  return (
    <AppShell>
      <PageContainer>
        <PageHeader
          eyebrow="Settings"
          title="Workspace settings"
          description="Control branding, tracking, and access policies across your team."
          actions={<CtaButton href="/billing">Manage plan</CtaButton>}
        />
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SettingsItemCard title="Branding" detail="Logo, colors, and tone presets" />
          <SettingsItemCard title="Tracking" detail="Pixel, webhook, and UTM defaults" />
          <SettingsItemCard title="Team access" detail="Roles and workspace permissions" />
        </section>
        <section className="mt-6">
          <CtaButton href="/settings">Save settings</CtaButton>
        </section>
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <StatePanel state="loading" title="Applying configuration" message="Saving your latest workspace settings." />
          <StatePanel state="empty" title="No integrations connected" message="Connect at least one integration to automate reporting." actionLabel="Connect integration" actionHref="/settings" />
          <StatePanel state="error" title="Save failed" message="One or more fields did not pass validation." actionLabel="Review fields" actionHref="/settings" />
        </section>
      </PageContainer>
    </AppShell>
  );
}
