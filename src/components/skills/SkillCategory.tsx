import type { Skill, SkillLevel } from '../../types';
import { Badge, type BadgeVariant } from '../common/Badge';

const LEVEL_META: Record<
  SkillLevel,
  { label: string; variant: BadgeVariant }
> = {
  'project-experience': { label: 'Project Experience', variant: 'success' },
  'working-knowledge': { label: 'Working Knowledge', variant: 'accent' },
  'currently-learning': { label: 'Currently Learning', variant: 'warning' },
};

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  if (skills.length === 0) return null;

  return (
    <section className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6">
      <h3 className="text-base font-semibold text-[var(--text-primary)]">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {skills.map((skill) => {
          const level = LEVEL_META[skill.level];
          return (
            <li
              key={skill.id}
              className="flex items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-2.5 last:border-b-0 last:pb-0"
            >
              <span className="text-sm font-medium text-[var(--text-primary)]">
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
