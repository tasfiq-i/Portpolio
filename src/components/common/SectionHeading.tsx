import type { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  action?: ReactNode;
  className?: string;
  as?: 'h1' | 'h2';
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  action,
  className = '',
  as = 'h2',
}: SectionHeadingProps) {
  const HeadingTag = as;
  const headingSize =
    as === 'h1' ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl';

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between ${className}`}
    >
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-wider text-[var(--accent-primary)] uppercase">
            {eyebrow}
          </p>
        )}
        <HeadingTag
          className={`mt-1 font-bold tracking-tight text-[var(--text-primary)] ${headingSize}`}
        >
          {title}
        </HeadingTag>
        {subtitle && (
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
