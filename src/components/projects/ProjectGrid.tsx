import { AnimatePresence, m, useReducedMotion } from 'motion/react';
import { EASE_OUT } from '../../lib/motion';
import type { Project } from '../../types';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  emptyMessage?: string;
}

export function ProjectGrid({
  projects,
  emptyMessage = 'No projects match the selected category.',
}: ProjectGridProps) {
  const reduce = useReducedMotion();

  if (projects.length === 0) {
    return (
      <div className="rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-10 text-center">
        <p className="text-sm text-[var(--ink-muted)]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <m.div
            key={project.id}
            layout={!reduce}
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{
              duration: 0.5,
              delay: reduce ? 0 : index * 0.06,
              ease: EASE_OUT,
            }}
            className="h-full"
          >
            <ProjectCard project={project} index={project.displayOrder} />
          </m.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
