import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Reveal } from '../../components/motion/Reveal';
import { WordReveal } from '../../components/motion/WordReveal';
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
      <Container className="py-16 sm:py-24">
        <div className="space-y-20">
          <section>
            <SectionHeading
              as="h1"
              index="01"
              eyebrow="About"
              title="Developer background &"
              accent="focus."
              subtitle="Draft summary subject to owner confirmation."
            />

            <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
              {PROFILE.profileImage && (
                <Reveal className="lg:col-span-4">
                  <div className="max-w-xs overflow-hidden rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-2 shadow-[var(--shadow-sm)]">
                    <img
                      src={PROFILE.profileImage}
                      alt={`${PROFILE.name} — ${PROFILE.title}`}
                      width={320}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full rounded-[var(--r-md)] object-cover"
                    />
                  </div>
                </Reveal>
              )}

              <div
                className={`space-y-6 ${
                  PROFILE.profileImage ? 'lg:col-span-8' : 'lg:col-span-10'
                }`}
              >
                <WordReveal
                  as="p"
                  text="My practical work centers on building structured web applications with React, TypeScript, C#, ASP.NET MVC 5 / Core, and SQL"
                  accent="Server."
                  className="font-display text-h2 text-[var(--ink)]"
                />

                <Reveal delay={0.1}>
                  <div className="space-y-4 text-base leading-relaxed text-[var(--ink-muted)]">
                    <p>{PROFILE.shortBio}</p>
                    <p>
                      I focus on understanding data relationships, API contracts,
                      and verification steps rather than rushing unreviewed code.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-12 border-t border-[var(--line)] pt-16 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-[var(--accent)]">02 / Qualifications</p>
              <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
                Academic Education
              </h2>
              <p className="mt-2 text-xs text-[var(--ink-faint)]">
                Academic qualifications are listed separately from technical training.
              </p>
              <div className="mt-8">
                <Timeline items={academicItems} />
              </div>
            </div>

            <div>
              <p className="eyebrow text-[var(--accent)]">03 / Preparation</p>
              <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
                Technical Training &amp; Learning
              </h2>
              <p className="mt-2 text-xs text-[var(--ink-faint)]">
                Full-stack coursework and hands-on stack practice.
              </p>
              <div className="mt-8">
                <Timeline items={trainingItems} />
              </div>
            </div>
          </section>

          <Reveal as="section">
            <div className="rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-7 sm:p-9">
              <p className="eyebrow text-[var(--accent)]">04 / Standards</p>
              <h2 className="mt-2 font-display text-h2 text-[var(--ink)]">
                Career Goals &amp; Engineering Habits
              </h2>
              <ul className="mt-5 grid grid-cols-1 gap-4 text-sm leading-relaxed text-[var(--ink-muted)] sm:grid-cols-2 sm:text-base">
                <li className="rounded-[var(--r-md)] border border-[var(--line)] bg-[var(--bg)] p-5">
                  Targeting Junior Full Stack, ASP.NET Core, Backend, or React
                  engineering roles (local and remote) alongside scoped freelance
                  work.
                </li>
                <li className="rounded-[var(--r-md)] border border-[var(--line)] bg-[var(--bg)] p-5">
                  Using AI tools responsibly for planning, boilerplate, and review
                  while manually verifying every requirement, type, and behavior.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
