import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { PROFILE } from '../../data/profile';
import { SOCIAL_LINKS } from '../../data/socialLinks';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { Reveal } from '../motion/Reveal';
import { WordReveal } from '../motion/WordReveal';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const brandName = PROFILE.isPlaceholder
    ? 'Developer Portfolio (Draft)'
    : PROFILE.name;

  return (
    <footer className="relative isolate overflow-hidden border-t border-[var(--line)] bg-[var(--surface)]/50">
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_25%,transparent_80%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[38rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)',
        }}
      />

      <Container className="py-20 sm:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              {PROFILE.availability.openToJobs && (
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-1 font-mono text-[0.7rem] tracking-[0.14em] text-[var(--ink-muted)] uppercase">
                  <span className="pulse-dot" aria-hidden="true" />
                  <span>Open to engineering roles</span>
                </span>
              )}
              {PROFILE.availability.openToFreelance && (
                <span className="eyebrow">
                  &bull; Scoped freelance inquiries
                </span>
              )}
            </div>
          </Reveal>

          <WordReveal
            as="h2"
            text="Let’s build something"
            accent="reliable."
            className="mt-6 font-display text-display text-[var(--ink)]"
          />

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
              Looking for a Junior Full Stack Software Engineer or help with a
              React, TypeScript, C#, ASP.NET Core, or SQL Server project? Reach
              out through verified contact channels.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button to="/contact" variant="primary">
                <span>Get in Touch</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              {PROFILE.email && (
                <Button href={`mailto:${PROFILE.email}`} variant="secondary">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>{PROFILE.email}</span>
                </Button>
              )}
              <Button to="/projects" variant="secondary">
                View Projects
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-[var(--line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-base font-bold text-[var(--ink)]">
              {brandName}
              <span className="serif-accent text-[var(--accent)]">.</span>
            </p>
            <p className="mt-1 font-mono text-xs text-[var(--ink-faint)]">
              {PROFILE.title} &middot; {PROFILE.location} &middot; &copy;{' '}
              {currentYear}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="link-underline text-sm font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {SOCIAL_LINKS.length > 0 && (
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-mono text-xs text-[var(--ink-muted)] hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}
