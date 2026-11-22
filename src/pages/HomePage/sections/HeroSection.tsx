import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/common/Button';
import { Container } from '../../../components/common/Container';
import { SocialLinks } from '../../../components/shared/SocialLinks';
import { TechBadge } from '../../../components/skills/TechBadge';
import { PROFILE } from '../../../data/profile';
import { HeroScene } from './HeroScene';

const CORE_STACK = ['React', 'TypeScript', 'C#', 'ASP.NET Core', 'SQL Server'];

export function HeroSection() {
  return (
    <section className="overflow-hidden border-b border-[var(--border-subtle)] py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              {PROFILE.profileImage && (
                <div className="w-32 shrink-0 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-1 shadow-lg ring-1 ring-[var(--accent-primary)]/20 sm:w-36">
                  <img
                    src={PROFILE.profileImage}
                    alt={`${PROFILE.name} — ${PROFILE.title}`}
                    width={144}
                    height={176}
                    loading="eager"
                    decoding="async"
                    className="aspect-[4/5] w-full rounded-xl object-cover"
                  />
                </div>
              )}

              <div>
                <p className="text-sm font-semibold tracking-wide text-[var(--accent-primary)]">
                  {PROFILE.title}
                </p>
                <h1 className="mt-1.5 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                  {PROFILE.name}
                </h1>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {PROFILE.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Core technologies">
              {CORE_STACK.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/projects" variant="primary">
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>

              {PROFILE.resumeUrl && (
                <Button
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  variant="secondary"
                >
                  Download CV
                </Button>
              )}

              <Button to="/contact" variant="secondary">
                Contact
              </Button>
            </div>

            <SocialLinks className="mt-6" />
          </div>

          <div className="lg:col-span-6">
            <HeroScene />
          </div>
        </div>
      </Container>
    </section>
  );
}
