interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className = '' }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--line-strong)] bg-[var(--surface-2)] px-3 py-1 font-mono text-[0.75rem] text-[var(--ink-muted)] transition-[transform,color,border-color] duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] ${className}`}
    >
      {name}
    </span>
  );
}
