import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import { ProjectGrid } from '../../components/projects/ProjectGrid';
import { SEO } from '../../components/shared/SEO';
import { TechBadge } from '../../components/skills/TechBadge';
import { PROJECTS } from '../../data/projects';
import type { ProjectStatus } from '../../types';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';

const STATUS_LABELS: Record<ProjectStatus, string> = {
  completed: 'Completed',
  'in-progress': 'In Development',
  prototype: 'Prototype',
  'case-study': 'Case Study',
};

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id)
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .slice(0, 2);

  return (
    <>
      <SEO
        title={`${project.title} — Case Study`}
        description={project.shortDescription}
      />
      <Container className="py-16">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to Projects</span>
        </Link>

        <header className="mt-6 border-b border-[var(--border-subtle)] pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent">{STATUS_LABELS[project.status]}</Badge>
            <span className="text-xs font-medium text-[var(--text-secondary)]">
              {project.roleOrContribution}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)]">
            {project.overview}
          </p>

          {(project.githubUrl || project.liveDemoUrl || project.documentationUrl) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.githubUrl && (
                <Button href={project.githubUrl} target="_blank" variant="secondary" size="sm">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>Source Code</span>
                </Button>
              )}
              {project.liveDemoUrl && (
                <Button href={project.liveDemoUrl} target="_blank" variant="primary" size="sm">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span>Live Demo</span>
                </Button>
              )}
              {project.documentationUrl && (
                <Button href={project.documentationUrl} target="_blank" variant="secondary" size="sm">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span>Documentation</span>
                </Button>
              )}
            </div>
          )}
        </header>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <section>
              <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                Problem Statement
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {project.problemStatement}
              </p>
            </section>

            {project.objectives.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  Objectives
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
                  {project.objectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.features.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  Current Scope &amp; Features
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.plannedFeatures && project.plannedFeatures.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  Planned / Verification Next Steps
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
                  {project.plannedFeatures.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.architecture && (
              <section>
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  Architecture
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.architecture}
                </p>
              </section>
            )}

            {project.databaseDescription && (
              <section>
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  Database Design
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.databaseDescription}
                </p>
              </section>
            )}

            {project.challenges.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  Challenges &amp; Solutions
                </h2>
                <div className="mt-4 space-y-4">
                  {project.challenges.map((entry) => (
                    <div
                      key={entry.problem}
                      className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5"
                    >
                      <p className="text-sm font-semibold text-[var(--text-primary)]">
                        {entry.problem}
                      </p>
                      <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        {entry.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.screenshots.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                  Screenshots
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.screenshots.map((shot) => (
                    <figure
                      key={shot.src}
                      className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]"
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        className="h-auto w-full object-cover"
                      />
                      {shot.caption && (
                        <figcaption className="px-4 py-2 text-xs text-[var(--text-secondary)]">
                          {shot.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6">
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">
                Technology Stack
              </h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6">
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">
                Verification &amp; Links
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                {project.githubUrl || project.liveDemoUrl
                  ? 'Only verified public links are displayed.'
                  : 'Repository links, live demos, and screenshots will be published only after owner verification.'}
              </p>
            </div>
          </aside>
        </div>

        {relatedProjects.length > 0 && (
          <section className="mt-16 border-t border-[var(--border-subtle)] pt-12">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Other Projects
            </h2>
            <div className="mt-6">
              <ProjectGrid projects={relatedProjects} />
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
