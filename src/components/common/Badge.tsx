import type { ReactNode } from 'react';

export type BadgeVariant = 'neutral' | 'accent' | 'success' | 'warning';

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  neutral:
    'border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]',
  accent:
    'border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]',
  success:
    'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  warning:
    'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400',
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
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
