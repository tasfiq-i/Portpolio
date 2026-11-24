import { Mail, MapPin } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Reveal } from '../../components/motion/Reveal';
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
      <Container className="py-16 sm:py-24">
        <div className="max-w-3xl space-y-10">
          <SectionHeading
            as="h1"
            index="01"
            eyebrow="Contact"
            title="Get in"
            accent="touch."
            subtitle="Open to Junior Full Stack, ASP.NET Core, and React roles as well as scoped freelance projects."
          />

          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              {PROFILE.availability.openToJobs && (
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-3.5 py-1.5 font-mono text-xs text-[var(--ink-muted)]">
                  <span className="pulse-dot" aria-hidden="true" />
                  <span>Open to Full-Time / Junior Engineering Roles</span>
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-3.5 py-1.5 font-mono text-xs text-[var(--ink-muted)]">
                <MapPin
                  className="h-3.5 w-3.5 text-[var(--accent)]"
                  aria-hidden="true"
                />
                <span>{PROFILE.location}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-7 sm:p-9">
              <div>
                <p className="eyebrow text-[var(--accent)]">Direct Email</p>
                {PROFILE.email ? (
                  <div className="mt-3">
                    <Button
                      href={`mailto:${PROFILE.email}`}
                      variant="primary"
                      size="sm"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>{PROFILE.email}</span>
                    </Button>
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">
                    [Verified professional email pending owner confirmation]
                  </p>
                )}
              </div>

              <div className="border-t border-[var(--line)] pt-6">
                <p className="eyebrow text-[var(--accent)]">
                  Professional Profiles
                </p>
                <div className="mt-3">
                  <SocialLinks showEmptyNote />
                </div>
              </div>
            </div>
          </Reveal>

          <p className="font-mono text-xs text-[var(--ink-faint)]">
            Version 1 is a static portfolio without a backend form handler. Only
            verified direct contact methods are displayed.
          </p>
        </div>
      </Container>
    </>
  );
}
