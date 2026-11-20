import type { ProjectCategory } from '../../types';

export type ProjectFilterValue = 'all' | ProjectCategory;

const FILTER_OPTIONS: { value: ProjectFilterValue; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'full-stack', label: 'Full Stack' },
  { value: 'backend', label: 'Backend/API' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'architecture', label: 'Architecture/Case Study' },
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
      className="flex flex-wrap gap-2"
    >
      {FILTER_OPTIONS.map((option) => {
        const isActive = selected === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
            className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
                : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]/40 hover:text-[var(--text-primary)]'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
