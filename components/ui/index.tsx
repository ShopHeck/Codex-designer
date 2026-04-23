import Link from 'next/link';
import type { ReactNode } from 'react';

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = 'primary',
  className = ''
}: CtaButtonProps) {
  const variants = {
    primary:
      'bg-cyan text-background hover:bg-cyan/90 focus-visible:ring-cyan',
    secondary:
      'border border-white/20 bg-transparent text-foreground hover:border-cyan/70 hover:text-cyan focus-visible:ring-cyan'
  } as const;

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

type SurfaceCardProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function SurfaceCard({ title, description, children }: SurfaceCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-surface p-4 sm:p-5">
      <h3 className="font-display text-lg text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
      {children ? <div className="mt-4">{children}</div> : null}
    </article>
  );
}

type StatePanelProps = {
  state: 'loading' | 'empty' | 'error';
  title: string;
  message: string;
  actionLabel?: string;
  actionHref?: string;
};

export function StatePanel({
  state,
  title,
  message,
  actionLabel,
  actionHref
}: StatePanelProps) {
  const stateLabel = {
    loading: 'Loading state',
    empty: 'Empty state',
    error: 'Error state'
  } as const;

  return (
    <section
      aria-label={stateLabel[state]}
      className="rounded-xl border border-dashed border-white/20 bg-elevated p-4 sm:p-5"
    >
      <p className="text-xs uppercase tracking-wide text-muted">{stateLabel[state]}</p>
      <h4 className="mt-2 font-display text-base">{title}</h4>
      <p className="mt-1 text-sm text-muted">{message}</p>
      {actionLabel && actionHref ? (
        <div className="mt-4">
          <CtaButton href={actionHref} variant="secondary">
            {actionLabel}
          </CtaButton>
        </div>
      ) : null}
    </section>
  );
}
