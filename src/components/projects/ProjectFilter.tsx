import { m } from 'motion/react';
import type { ProjectCategory } from '../../types';

export type ProjectFilterValue = 'all' | ProjectCategory;

const FILTER_OPTIONS: { value: ProjectFilterValue; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'full-stack', label: 'Full Stack' },
  { value: 'backend', label: 'Backend / API' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'architecture', label: 'Architecture / Case Study' },
];

interface ProjectFilterProps {
  selected: ProjectFilterValue;
  onChange: (value: ProjectFilterValue) => void;
}

export function ProjectFilter({ selected, onChange }: ProjectFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="inline-flex flex-wrap gap-1.5 rounded-2xl border border-[var(--line-strong)] bg-[var(--surface)] p-1.5"
    >
      {FILTER_OPTIONS.map((option) => {
        const isActive = selected === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
            className={`relative rounded-xl px-4 py-2 font-display text-sm font-semibold transition-colors ${
              isActive
                ? 'text-white'
                : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
            }`}
          >
            {isActive && (
              <m.span
                layoutId="project-filter-pill"
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-xl bg-[var(--accent)] shadow-[0_6px_22px_var(--accent-glow)]"
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
