import type { Education } from '../../types';
import { Badge } from '../common/Badge';

interface TimelineProps {
  items: Education[];
}

export function Timeline({ items }: TimelineProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-[var(--text-secondary)]">
        Education and training details pending owner confirmation.
      </p>
    );
  }

  return (
    <ol className="relative space-y-6 border-l border-[var(--border-subtle)] pl-6">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-[var(--accent-primary)] bg-[var(--bg-primary)]"
          />
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                {item.degree}
              </h3>
              <Badge variant={item.status === 'completed' ? 'success' : 'warning'}>
                {item.status === 'completed' ? 'Completed' : 'In Progress'}
              </Badge>
            </div>
            <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">
              {item.institution}
            </p>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              {item.subject}
              {item.passingYear ? ` • ${item.passingYear}` : ''}
              {item.result ? ` • ${item.result}` : ''}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
