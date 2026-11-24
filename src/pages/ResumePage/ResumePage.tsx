import { ArrowUpRight, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '../../components/motion/Reveal';
import { SEO } from '../../components/shared/SEO';
import { Timeline } from '../../components/shared/Timeline';
import { EDUCATION_ITEMS } from '../../data/education';
import { PROFILE } from '../../data/profile';
import { PROJECTS } from '../../data/projects';
import { STATUS_META, formatIndex } from '../../lib/projectMeta';

export function ResumePage() {
  return (
    <>
      <SEO
        title="Resume — Portfolio"
        description="Professional summary, technical focus, projects, and verified CV download."
      />
      <Container className="py-16 sm:py-24">
        <div className="max-w-4xl space-y-16">
          <SectionHeading
            as="h1"
            index="01"
            eyebrow="Resume"
            title={
              PROFILE.isPlaceholder ? 'Resume (Draft Summary)' : PROFILE.name
            }
            accent="CV."
            subtitle={PROFILE.title}
            action={
              PROFILE.resumeUrl ? (
                <Button
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  variant="primary"
                  size="sm"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download PDF</span>
                </Button>
              ) : undefined
            }
          />

          {!PROFILE.resumeUrl && (
            <Reveal>
              <div className="flex items-start gap-3 rounded-[var(--r-md)] border border-[var(--line-strong)] bg-[var(--surface)] p-5 text-sm text-[var(--ink-muted)]">
                <FileText
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]"
                  aria-hidden="true"
                />
                <p>
                  PDF download is hidden until an owner-approved resume file is
                  supplied.
                </p>
              </div>
            </Reveal>
          )}

          <Reveal as="section">
            <p className="eyebrow text-[var(--accent)]">02 / Profile</p>
            <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
              Summary
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)]">
              {PROFILE.shortBio}
            </p>
          </Reveal>

          <section>
            <p className="eyebrow text-[var(--accent)]">03 / Experience</p>
            <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
              Selected Projects
            </h2>
            <Stagger as="ul" className="mt-6 space-y-4">
              {PROJECTS.map((project, index) => {
                const status = STATUS_META[project.status];
                return (
                  <StaggerItem
                    as="li"
                    key={project.id}
                    className="group rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]/50"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-[var(--accent)]">
                          {formatIndex(index + 1)}
                        </span>
                        <Link
                          to={`/projects/${project.slug}`}
                          className="nudge inline-flex items-center gap-1.5 font-display text-lg font-bold text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                        >
                          <span>{project.title}</span>
                          <ArrowUpRight
                            className="h-4 w-4 text-[var(--ink-faint)] group-hover:text-[var(--accent)]"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                      <Badge variant={status.variant}>{status.label}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-[var(--ink-muted)]">
                      {project.shortDescription}
                    </p>
                    <p className="mt-3 font-mono text-xs text-[var(--ink-faint)]">
                      {project.roleOrContribution} &bull;{' '}
                      {project.technologies.slice(0, 5).join(', ')}
                    </p>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </section>

          <section>
            <p className="eyebrow text-[var(--accent)]">04 / Credentials</p>
            <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
              Education &amp; Training
            </h2>
            <div className="mt-6">
              <Timeline items={EDUCATION_ITEMS} />
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
