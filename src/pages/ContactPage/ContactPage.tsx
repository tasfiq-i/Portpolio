import { Mail } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SEO } from '../../components/shared/SEO';
import { SocialLinks } from '../../components/shared/SocialLinks';
import { PROFILE } from '../../data/profile';

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact — Portfolio"
        description="Verified contact methods for junior software engineering roles and freelance inquiries."
      />
      <Container className="py-16">
        <div className="max-w-2xl space-y-8">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Get in Touch"
            subtitle="Open to Junior Full Stack, ASP.NET Core, and React roles as well as scoped freelance projects."
          />

          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 space-y-5">
            <div>
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">
                Direct Email
              </h2>
              {PROFILE.email ? (
                <div className="mt-2">
                  <Button href={`mailto:${PROFILE.email}`} variant="primary" size="sm">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>{PROFILE.email}</span>
                  </Button>
                </div>
              ) : (
                <p className="mt-1.5 text-sm text-[var(--text-secondary)]">
                  [Verified professional email pending owner confirmation]
                </p>
              )}
            </div>

            <div className="border-t border-[var(--border-subtle)] pt-5">
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">
                Professional Profiles
              </h2>
              <div className="mt-2">
                <SocialLinks showEmptyNote />
              </div>
            </div>
          </div>

          <p className="text-xs text-[var(--text-secondary)]">
            Version 1 is a static portfolio without a backend form handler. Only
            verified direct contact methods are displayed.
          </p>
        </div>
      </Container>
    </>
  );
}
