import { CtaButton, StatePanel, SurfaceCard } from '@/components/ui';

export default function SignInPage() {
  return (
    <main className="mx-auto w-full max-w-md px-4 py-12 sm:px-6 sm:py-20">
      <SurfaceCard title="Welcome back" description="Sign in to manage live experiences and billing.">
        <form className="space-y-3" aria-label="Sign in form">
          <input className="w-full rounded-lg border border-white/20 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan" placeholder="Work email" />
          <input type="password" className="w-full rounded-lg border border-white/20 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan" placeholder="Password" />
          <CtaButton href="/dashboard" className="w-full">Sign in</CtaButton>
        </form>
      </SurfaceCard>

      <div className="mt-6 grid gap-3">
        <StatePanel state="loading" title="Checking session" message="Validating your workspace access." />
        <StatePanel state="empty" title="No account found" message="Create an account to start your first revenue funnel." actionLabel="Create account" actionHref="/sign-up" />
        <StatePanel state="error" title="Authentication failed" message="Credentials were rejected. Try reset flow." actionLabel="Reset password" actionHref="/sign-in" />
      </div>
    </main>
  );
}
