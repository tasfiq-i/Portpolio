interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className = '' }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2.5 py-1 text-xs font-medium text-[var(--text-primary)] ${className}`}
    >
      {name}
    </span>
  );
}
