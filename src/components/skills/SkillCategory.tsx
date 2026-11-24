import { formatIndex } from '../../lib/projectMeta';
import type { Skill, SkillLevel } from '../../types';
import { Badge, type BadgeVariant } from '../common/Badge';

const LEVEL_META: Record<
  SkillLevel,
  { label: string; variant: BadgeVariant; dot: string }
> = {
  'project-experience': {
    label: 'Project Experience',
    variant: 'success',
    dot: 'var(--accent-2)',
  },
  'working-knowledge': {
    label: 'Working Knowledge',
    variant: 'accent',
    dot: 'var(--accent)',
  },
  'currently-learning': {
    label: 'Currently Learning',
    variant: 'warning',
    dot: 'var(--highlight)',
  },
};

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  index?: number;
}

export function SkillCategory({ title, skills, index }: SkillCategoryProps) {
  if (skills.length === 0) return null;

  return (
    <section className="rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]/40 sm:p-7">
      <div className="flex items-baseline justify-between gap-3 border-b border-[var(--line)] pb-4">
        <div className="flex items-baseline gap-3">
          {index !== undefined && (
            <span className="eyebrow text-[var(--accent)]">
              {formatIndex(index)}
            </span>
          )}
          <h3 className="font-display text-lg font-bold text-[var(--ink)]">
            {title}
          </h3>
        </div>
        <span className="font-mono text-xs text-[var(--ink-faint)]">
          {skills.length} {skills.length === 1 ? 'skill' : 'skills'}
        </span>
      </div>

      <ul className="mt-4 divide-y divide-[var(--line)]">
        {skills.map((skill) => {
          const level = LEVEL_META[skill.level];
          return (
            <li
              key={skill.id}
              className="flex items-center justify-between gap-3 py-3 first:pt-1 last:pb-0"
            >
              <span className="inline-flex items-center gap-2.5 text-sm font-medium text-[var(--ink)]">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: level.dot }}
                />
                {skill.name}
              </span>
              <Badge variant={level.variant}>{level.label}</Badge>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
