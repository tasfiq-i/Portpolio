import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import { SEO } from '../../components/shared/SEO';

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 Not Found — Portfolio"
        description="Requested page could not be found."
      />
      <Container className="py-24 text-center">
        <p className="text-sm font-semibold text-[var(--accent-primary)]">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          The page you requested does not exist or may have moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button to="/" variant="primary">
            Go Home
          </Button>
          <Button to="/projects" variant="secondary">
            View Projects
          </Button>
        </div>
      </Container>
    </>
  );
}
