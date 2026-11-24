import { ArrowLeft, CheckCircle2, Clock, ExternalLink, Github } from 'lucide-react';
import type { CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import { Reveal } from '../../components/motion/Reveal';
import { WordReveal } from '../../components/motion/WordReveal';
import { ProjectGrid } from '../../components/projects/ProjectGrid';
import { SEO } from '../../components/shared/SEO';
import { TechBadge } from '../../components/skills/TechBadge';
import { PROJECTS } from '../../data/projects';
import {
  CATEGORY_META,
  STATUS_META,
  formatIndex,
} from '../../lib/projectMeta';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const statusMeta = STATUS_META[project.status];
  const categoryMeta = CATEGORY_META[project.category];
  const StatusIcon = statusMeta.icon;
  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id)
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .slice(0, 2);

  return (
    <>
      <SEO
        title={`${project.title} — Case Study`}
        description={project.shortDescription}
      />
      <Container className="py-14 sm:py-20">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-wider text-[var(--ink-muted)] uppercase transition-colors hover:text-[var(--accent)]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Back to Projects</span>
        </Link>

        {/* Accent-tinted case-study hero banner */}
        <header
          style={{ '--card-accent': categoryMeta.accent } as CSSProperties}
          className="relative isolate mt-6 overflow-hidden rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-7 shadow-[var(--shadow-sm)] sm:p-11"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
            style={{ background: categoryMeta.accent }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-16 h-80 w-80 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, color-mix(in srgb, var(--card-accent) 26%, transparent), transparent 70%)',
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 right-6 select-none font-display text-[6rem] font-extrabold leading-none tracking-[-0.05em] opacity-[0.1] sm:text-[8.5rem]"
            style={{ color: categoryMeta.accent }}
          >
            {formatIndex(project.displayOrder)}
          </span>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant={statusMeta.variant}>
                <StatusIcon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{statusMeta.label}</span>
              </Badge>
              <span className="eyebrow">&middot; {categoryMeta.label}</span>
              <span className="font-mono text-xs text-[var(--ink-faint)]">
                &middot; {project.roleOrContribution}
              </span>
            </div>

            <WordReveal
              as="h1"
              text={project.title}
              className="mt-5 font-display text-display text-[var(--ink)]"
            />

            <p className="mt-5 max-w-3xl text-lede text-[var(--ink-muted)]">
              {project.overview}
            </p>

            {(project.githubUrl ||
              project.liveDemoUrl ||
              project.documentationUrl) && (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    variant="secondary"
                    size="sm"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    <span>Source Code</span>
                  </Button>
                )}
                {project.liveDemoUrl && (
                  <Button
                    href={project.liveDemoUrl}
                    target="_blank"
                    variant="primary"
                    size="sm"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span>Live Demo</span>
                  </Button>
                )}
                {project.documentationUrl && (
                  <Button
                    href={project.documentationUrl}
                    target="_blank"
                    variant="secondary"
                    size="sm"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span>Documentation</span>
                  </Button>
                )}
              </div>
            )}
          </div>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <Reveal as="section">
              <p className="eyebrow text-[var(--accent)]">01 / Context</p>
              <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
                Problem Statement
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
                {project.problemStatement}
              </p>
            </Reveal>

            {project.objectives.length > 0 && (
              <Reveal as="section">
                <p className="eyebrow text-[var(--accent)]">02 / Goals</p>
                <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
                  Objectives
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {project.objectives.map((objective, idx) => (
                    <li
                      key={objective}
                      className="flex items-start gap-3 rounded-[var(--r-md)] border border-[var(--line)] bg-[var(--surface)] p-4 text-sm text-[var(--ink-muted)] sm:text-base"
                    >
                      <span className="font-mono text-xs font-semibold text-[var(--accent)]">
                        {formatIndex(idx + 1)}
                      </span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {project.features.length > 0 && (
              <Reveal as="section">
                <p className="eyebrow text-[var(--accent)]">03 / Scope</p>
                <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
                  Current Scope &amp; Features
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-[var(--r-md)] border border-[var(--line)] bg-[var(--surface)] p-4 text-sm text-[var(--ink-muted)] sm:text-base"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-2)]"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {project.plannedFeatures && project.plannedFeatures.length > 0 && (
              <Reveal as="section">
                <p className="eyebrow text-[var(--highlight)]">04 / Roadmap</p>
                <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
                  Planned / Verification Next Steps
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {project.plannedFeatures.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-[var(--r-md)] border border-dashed border-[var(--line-strong)] bg-[var(--surface)]/60 p-4 text-sm text-[var(--ink-muted)] sm:text-base"
                    >
                      <Clock
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--highlight)]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {project.architecture && (
              <Reveal as="section">
                <p className="eyebrow text-[var(--accent)]">05 / System</p>
                <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
                  Architecture
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
                  {project.architecture}
                </p>
              </Reveal>
            )}

            {project.databaseDescription && (
              <Reveal as="section">
                <p className="eyebrow text-[var(--accent)]">06 / Data</p>
                <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
                  Database Design
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
                  {project.databaseDescription}
                </p>
              </Reveal>
            )}

            {project.challenges.length > 0 && (
              <Reveal as="section">
                <p className="eyebrow text-[var(--accent)]">07 / Engineering</p>
                <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
                  Challenges &amp; Solutions
                </h2>
                <div className="mt-4 space-y-4">
                  {project.challenges.map((entry) => (
                    <div
                      key={entry.problem}
                      className="rounded-[var(--r-md)] border border-[var(--line-strong)] bg-[var(--surface)] p-5"
                    >
                      <p className="font-display text-base font-bold text-[var(--ink)]">
                        {entry.problem}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                        {entry.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {project.screenshots.length > 0 && (
              <Reveal as="section">
                <p className="eyebrow text-[var(--accent)]">08 / Visuals</p>
                <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
                  Screenshots
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.screenshots.map((shot) => (
                    <figure
                      key={shot.src}
                      className="overflow-hidden rounded-[var(--r-md)] border border-[var(--line-strong)] bg-[var(--surface)]"
                    >
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        className="h-auto w-full object-cover"
                      />
                      {shot.caption && (
                        <figcaption className="px-4 py-2 font-mono text-xs text-[var(--ink-muted)]">
                          {shot.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          <aside className="space-y-6 lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-6">
              <p className="eyebrow text-[var(--accent)]">Stack</p>
              <h2 className="mt-1 font-display text-lg font-bold text-[var(--ink)]">
                Technology Stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>

            <div className="rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-6">
              <p className="eyebrow text-[var(--accent)]">Evidence</p>
              <h2 className="mt-1 font-display text-lg font-bold text-[var(--ink)]">
                Verification &amp; Links
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[var(--ink-muted)]">
                {project.githubUrl || project.liveDemoUrl
                  ? 'Only verified public links are displayed.'
                  : 'Repository links, live demos, and screenshots will be published only after owner verification.'}
              </p>
            </div>
          </aside>
        </div>

        {relatedProjects.length > 0 && (
          <section className="mt-20 border-t border-[var(--line)] pt-14">
            <p className="eyebrow text-[var(--accent)]">Continue exploring</p>
            <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
              Other Projects
            </h2>
            <div className="mt-8">
              <ProjectGrid projects={relatedProjects} />
            </div>
          </section>
        )}
      </Container>
    </>
  );
}
