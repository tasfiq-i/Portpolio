import type { ReactNode } from 'react';
import { Reveal } from '../motion/Reveal';
import { WordReveal } from '../motion/WordReveal';

interface SectionHeadingProps {
  title: string;
  /** Closing word(s) shown in the serif-italic accent style. */
  accent?: string;
  subtitle?: string;
  eyebrow?: string;
  /** Section number shown before the eyebrow, e.g. "01". */
  index?: string;
  action?: ReactNode;
  className?: string;
  as?: 'h1' | 'h2';
}

export function SectionHeading({
  title,
  accent,
  subtitle,
  eyebrow,
  index,
  action,
  className = '',
  as = 'h2',
}: SectionHeadingProps) {
  const headingSize = as === 'h1' ? 'text-display' : 'text-h1';

  return (
    <div
      className={`flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between ${className}`}
    >
      <div className="max-w-3xl">
        {(eyebrow || index) && (
          <Reveal y={10}>
            <p className="eyebrow">
              {index && (
                <>
                  <span className="text-[var(--ink-muted)]">{index}</span>
                  <span className="mx-2 text-[var(--ink-faint)]">/</span>
                </>
              )}
              <span className="text-[var(--accent)]">{eyebrow}</span>
            </p>
          </Reveal>
        )}
        <WordReveal
          as={as}
          text={title}
          accent={accent}
          className={`mt-4 font-display text-[var(--ink)] ${headingSize}`}
        />
        {subtitle && (
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
      {action && (
        <Reveal delay={0.2} className="shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}
