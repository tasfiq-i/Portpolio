import { Download, FileText } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SEO } from '../../components/shared/SEO';
import { Timeline } from '../../components/shared/Timeline';
import { EDUCATION_ITEMS } from '../../data/education';
import { PROFILE } from '../../data/profile';
import { PROJECTS } from '../../data/projects';

export function ResumePage() {
  return (
    <>
      <SEO
        title="Resume — Portfolio"
        description="Professional summary, technical focus, projects, and verified CV download."
      />
      <Container className="py-16">
        <div className="max-w-3xl space-y-12">
          <SectionHeading
            as="h1"
            eyebrow="Resume"
            title={PROFILE.isPlaceholder ? 'Resume (Draft Summary)' : PROFILE.name}
            subtitle={PROFILE.title}
            action={
              PROFILE.resumeUrl ? (
                <Button href={PROFILE.resumeUrl} target="_blank" variant="primary" size="sm">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download PDF</span>
                </Button>
              ) : undefined
            }
          />

          {!PROFILE.resumeUrl && (
            <div className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 text-sm text-[var(--text-secondary)]">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
              <p>
                PDF download is hidden until an owner-approved resume file is
                supplied.
              </p>
            </div>
          )}

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              Summary
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              {PROFILE.shortBio}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              Selected Projects
            </h2>
            <ul className="mt-3 space-y-3">
              {PROJECTS.map((project) => (
                <li
                  key={project.id}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4"
                >
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {project.title}
                  </p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">
                    {project.roleOrContribution} &bull;{' '}
                    {project.technologies.slice(0, 4).join(', ')}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              Education &amp; Training
            </h2>
            <div className="mt-4">
              <Timeline items={EDUCATION_ITEMS} />
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
