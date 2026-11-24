import type { ReactNode } from 'react';

export type BadgeVariant = 'neutral' | 'accent' | 'success' | 'warning';

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  neutral:
    'border-[var(--line-strong)] bg-[var(--surface-2)] text-[var(--ink-muted)]',
  accent:
    'border-[var(--accent)]/35 bg-[var(--accent)]/10 text-[var(--accent)]',
  success:
    'border-[var(--accent-2)]/35 bg-[var(--accent-2)]/10 text-[var(--accent-2)]',
  warning:
    'border-[var(--highlight)]/35 bg-[var(--highlight)]/10 text-[var(--highlight)]',
};

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({
  children,
  variant = 'neutral',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.68rem] font-medium tracking-[0.08em] uppercase ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
