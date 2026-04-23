import { CtaButton, StatePanel, SurfaceCard } from '@/components/ui';

export default function SignUpPage() {
  return (
    <main className="mx-auto w-full max-w-md px-4 py-12 sm:px-6 sm:py-20">
      <SurfaceCard title="Create your account" description="Start a free trial and publish your first experience today.">
        <form className="space-y-3" aria-label="Sign up form">
          <input className="w-full rounded-lg border border-white/20 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan" placeholder="Full name" />
          <input className="w-full rounded-lg border border-white/20 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan" placeholder="Work email" />
          <input type="password" className="w-full rounded-lg border border-white/20 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan" placeholder="Create password" />
          <CtaButton href="/dashboard" className="w-full">Create free account</CtaButton>
        </form>
      </SurfaceCard>

      <div className="mt-6 grid gap-3">
        <StatePanel state="loading" title="Setting up workspace" message="Creating your trial environment." />
        <StatePanel state="empty" title="No invite selected" message="Join via team invite or start your own workspace." actionLabel="Start workspace" actionHref="/dashboard" />
        <StatePanel state="error" title="Could not create account" message="Sign-up service is temporarily unavailable." actionLabel="Try again" actionHref="/sign-up" />
      </div>
    </main>
  );
}
