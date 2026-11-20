import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SEO } from '../../components/shared/SEO';
import { Timeline } from '../../components/shared/Timeline';
import { EDUCATION_ITEMS } from '../../data/education';
import { PROFILE } from '../../data/profile';

export function AboutPage() {
  const academicItems = EDUCATION_ITEMS.filter((item) => item.type === 'academic');
  const trainingItems = EDUCATION_ITEMS.filter((item) => item.type === 'training');

  return (
    <>
      <SEO
        title="About — Portfolio"
        description="Background, academic education, technical training, and engineering approach."
      />
      <Container className="py-16">
        <div className="max-w-3xl space-y-14">
          <section>
            <SectionHeading
              as="h1"
              eyebrow="About"
              title="Developer Background & Focus"
              subtitle="Draft summary subject to owner confirmation."
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              <p>{PROFILE.shortBio}</p>
              <p>
                My practical work centers on building structured web applications
                with React, TypeScript, C#, ASP.NET MVC 5 / Core, and SQL Server.
                I focus on understanding data relationships, API contracts, and
                verification steps rather than rushing unreviewed code.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
              Academic Education
            </h2>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              Academic qualifications are listed separately from technical training.
            </p>
            <div className="mt-6">
              <Timeline items={academicItems} />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
              Technical Training &amp; Learning
            </h2>
            <div className="mt-6">
              <Timeline items={trainingItems} />
            </div>
          </section>

          <section className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6">
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              Career Goals &amp; Engineering Habits
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
              <li>
                Targeting Junior Full Stack, ASP.NET Core, Backend, or React
                engineering roles (local and remote) alongside scoped freelance work.
              </li>
              <li>
                Using AI tools responsibly for planning, boilerplate, and review
                while manually verifying every requirement, type, and behavior.
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </>
  );
}
