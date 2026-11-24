import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import {
  CATEGORY_META,
  STATUS_META,
  formatIndex,
} from '../../lib/projectMeta';
import { handleSpotlightMove } from '../../lib/spotlight';
import type { Project } from '../../types';
import { Badge } from '../common/Badge';
import { TechBadge } from '../skills/TechBadge';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const statusMeta = STATUS_META[project.status];
  const categoryMeta = CATEGORY_META[project.category];
  const StatusIcon = statusMeta.icon;
  const numberLabel = formatIndex(index ?? project.displayOrder);

  return (
    <article
      onPointerMove={handleSpotlightMove}
      style={{ '--card-accent': categoryMeta.accent } as CSSProperties}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-[var(--card-accent)]/60 hover:shadow-[var(--shadow-md)] sm:p-8"
    >
      {/* Top accent line */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px]"
        style={{
          background:
            'color-mix(in srgb, var(--card-accent) 65%, transparent)',
        }}
      />

      {/* Ambient header glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full opacity-55 blur-3xl transition-opacity duration-300 group-hover:opacity-90"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--card-accent) 28%, transparent), transparent 70%)',
        }}
      />

      {/* Pointer-follow spotlight */}
      <div
        aria-hidden="true"
        className="spotlight-layer pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Ghost index number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-3 right-5 select-none font-display text-[5.2rem] font-extrabold leading-none tracking-[-0.05em] opacity-[0.1] transition-opacity duration-300 group-hover:opacity-[0.18] sm:text-[6.25rem]"
        style={{ color: categoryMeta.accent }}
      >
        {numberLabel}
      </span>

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-2.5 pr-16">
          <span
            aria-hidden="true"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-[var(--r-sm)] font-display text-lg font-bold"
            style={{
              color: categoryMeta.accent,
              background:
                'color-mix(in srgb, var(--card-accent) 14%, transparent)',
              border:
                '1px solid color-mix(in srgb, var(--card-accent) 36%, transparent)',
            }}
          >
            {project.title[0]}
          </span>
          <Badge variant={statusMeta.variant}>
            <StatusIcon className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{statusMeta.label}</span>
          </Badge>
          <span className="eyebrow">&middot; {categoryMeta.label}</span>
        </div>

        <p className="mt-4 font-mono text-xs text-[var(--ink-faint)]">
          {project.roleOrContribution}
        </p>

        <h3 className="mt-2 font-display text-h2 text-[var(--ink)]">
          <Link
            to={`/projects/${project.slug}`}
            className="transition-colors hover:text-[var(--accent)] focus-visible:outline-none"
          >
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
          {project.shortDescription}
        </p>

        {project.technologies.length > 0 && (
          <div className="relative z-20 mt-5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        )}
      </div>

      <div className="relative z-20 mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-5">
        <Link
          to={`/projects/${project.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="nudge inline-flex items-center gap-2 font-display text-sm font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>

        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] bg-[var(--surface-2)] px-3 py-1 font-mono text-xs text-[var(--ink-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
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
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] bg-[var(--surface-2)] px-3 py-1 font-mono text-xs text-[var(--ink-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
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
