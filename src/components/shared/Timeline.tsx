import type { Education } from '../../types';
import { Badge } from '../common/Badge';
import { Stagger, StaggerItem } from '../motion/Reveal';

interface TimelineProps {
  items: Education[];
}

export function Timeline({ items }: TimelineProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-[var(--ink-muted)]">
        Education and training details pending owner confirmation.
      </p>
    );
  }

  return (
    <Stagger
      as="ol"
      stagger={0.1}
      className="relative space-y-6 border-l border-[var(--line-strong)] pl-7"
    >
      {items.map((item) => (
        <StaggerItem as="li" key={item.id} className="relative">
          <span
            aria-hidden="true"
            className="absolute top-6 -left-[34px] grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>
          <div className="rounded-[var(--r-md)] border border-[var(--line-strong)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]/50">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-lg font-bold text-[var(--ink)]">
                {item.degree}
              </h3>
              <Badge variant={item.status === 'completed' ? 'success' : 'warning'}>
                {item.status === 'completed' ? 'Completed' : 'In Progress'}
              </Badge>
            </div>
            <p className="mt-1.5 text-sm font-medium text-[var(--ink-muted)]">
              {item.institution}
            </p>
            <p className="mt-1.5 font-mono text-xs text-[var(--ink-faint)]">
              {item.subject}
              {item.passingYear ? ` · ${item.passingYear}` : ''}
              {item.result ? ` · ${item.result}` : ''}
            </p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
