import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  FlaskConical,
  Github,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project, ProjectStatus } from '../../types';
import { Badge, type BadgeVariant } from '../common/Badge';
import { TechBadge } from '../skills/TechBadge';

const STATUS_META: Record<
  ProjectStatus,
  { label: string; variant: BadgeVariant; icon: typeof CheckCircle2 }
> = {
  completed: {
    label: 'Completed',
    variant: 'success',
    icon: CheckCircle2,
  },
  'in-progress': {
    label: 'In Development',
    variant: 'warning',
    icon: Clock,
  },
  prototype: {
    label: 'Prototype',
    variant: 'accent',
    icon: FlaskConical,
  },
  'case-study': {
    label: 'Case Study',
    variant: 'neutral',
    icon: FileText,
  },
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusMeta = STATUS_META[project.status];
  const StatusIcon = statusMeta.icon;

  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 transition-colors hover:border-[var(--accent-primary)]/50">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant={statusMeta.variant}>
            <StatusIcon className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{statusMeta.label}</span>
          </Badge>
          <span className="text-xs font-medium text-[var(--text-secondary)]">
            {project.roleOrContribution}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
          <Link
            to={`/projects/${project.slug}`}
            className="hover:text-[var(--accent-primary)]"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.shortDescription}
        </p>

        {project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-primary)] hover:text-[var(--accent-hover)]"
        >
          <span>View Case Study</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Code</span>
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
