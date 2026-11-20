import { Mail } from 'lucide-react';
import { Button } from '../../../components/common/Button';
import { Container } from '../../../components/common/Container';
import { PROFILE } from '../../../data/profile';

export function ContactCTASection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 sm:p-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
              Open to Junior Engineering Roles &amp; Freelance Inquiries
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              Looking for a Junior Full Stack Software Engineer or help with a
              React / ASP.NET Core project? Reach out through verified contact
              channels.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Go to Contact Page</span>
              </Button>
              {PROFILE.email && (
                <Button href={`mailto:${PROFILE.email}`} variant="secondary">
                  Email Directly
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
