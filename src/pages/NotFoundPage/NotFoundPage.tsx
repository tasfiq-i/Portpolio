import { ArrowRight } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import { KineticText } from '../../components/motion/KineticText';
import { SEO } from '../../components/shared/SEO';

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 Not Found — Portfolio"
        description="Requested page could not be found."
      />
      <Container className="py-24 text-center sm:py-32">
        <p className="eyebrow text-[var(--accent)]">Error 404</p>
        <h1
          aria-label="404 — Page not found"
          className="kinetic mt-4 font-display text-mega text-[var(--ink)]"
        >
          <KineticText text="404" baseDelay={0.05} step={0.06} />
          <span
            aria-hidden="true"
            className="char serif-accent text-[var(--accent)]"
            style={{ animationDelay: '0.24s' }}
          >
            .
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-[var(--ink-muted)]">
          The page you requested does not exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" variant="primary">
            <span>Go Home</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button to="/projects" variant="secondary">
            View Projects
          </Button>
        </div>
      </Container>
    </>
  );
}
