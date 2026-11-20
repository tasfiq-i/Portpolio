import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/common/Button';
import { Container } from '../../../components/common/Container';
import { SocialLinks } from '../../../components/shared/SocialLinks';
import { TechBadge } from '../../../components/skills/TechBadge';
import { PROFILE } from '../../../data/profile';

const CORE_STACK = ['React', 'TypeScript', 'C#', 'ASP.NET Core', 'SQL Server'];

export function HeroSection() {
  return (
    <section className="border-b border-[var(--border-subtle)] py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-[var(--accent-primary)]">
            {PROFILE.title}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            {PROFILE.name}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
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
      </Container>
    </section>
  );
}
