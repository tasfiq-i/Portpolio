import { ArrowRight, Download } from 'lucide-react';
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Button } from '../../../components/common/Button';
import { Container } from '../../../components/common/Container';
import { SocialLinks } from '../../../components/shared/SocialLinks';
import { TechBadge } from '../../../components/skills/TechBadge';
import { PROFILE } from '../../../data/profile';
import { PROJECTS } from '../../../data/projects';
import { SKILLS } from '../../../data/skills';
import { EASE_OUT } from '../../../lib/motion';
import { formatIndex } from '../../../lib/projectMeta';
import { HeroName3D } from './HeroName3D';
import { HeroPortrait } from './HeroPortrait';

const CORE_STACK = ['React', 'TypeScript', 'C#', 'ASP.NET Core', 'SQL Server'];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const sceneY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  const displayName = PROFILE.isPlaceholder ? 'Portfolio' : PROFILE.name;
  const [firstName, ...restName] = displayName.split(' ');
  const lastName = restName.join(' ') || 'Islam';
  const activeCount = PROJECTS.filter((p) => p.status === 'in-progress').length;

  const proofMetrics = [
    { value: formatIndex(PROJECTS.length), label: 'Documented projects' },
    { value: formatIndex(activeCount), label: 'Active builds' },
    { value: formatIndex(SKILLS.length), label: 'Cataloged skills' },
  ];

  return (
    <section
      ref={sectionRef}
      aria-label="Introduction"
      className="relative isolate overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28"
    >
      {/* Masked architectural grid + ambient radial glow */}
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 opacity-65 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_30%,#000_30%,transparent_80%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-[8%] h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, var(--accent-glow), transparent 68%)',
        }}
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
          {/* Left editorial column */}
          <div className="relative z-10 min-w-0">
            {/* Status + availability row */}
            <m.div
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE_OUT }}
              className="flex flex-wrap items-center gap-3"
            >
              {PROFILE.availability.openToJobs && (
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface)]/90 px-3 py-1 font-mono text-[0.7rem] tracking-[0.14em] text-[var(--ink-muted)] uppercase">
                  <span className="pulse-dot" aria-hidden="true" />
                  <span>Open to work</span>
                </span>
              )}

              {PROFILE.availability.openToFreelance && (
                <span className="eyebrow">
                  &middot; Freelance available
                </span>
              )}
            </m.div>

            {/* Role + location eyebrow */}
            <p className="eyebrow mt-6 text-cyan-700 dark:text-cyan-300/90">
              {PROFILE.title} &middot; {PROFILE.location}
            </p>

            {/* 3D editorial full-name lockup */}
            <HeroName3D
              firstName={firstName}
              lastName={lastName}
              roleTitle={PROFILE.title}
            />

            {/* Mask-revealed tagline */}
            <p className="reveal-mask mt-6 max-w-[58ch] text-lede text-[var(--ink-muted)]">
              <span style={{ animationDelay: '0.35s' }}>{PROFILE.tagline}</span>
            </p>

            {/* Core stack chips */}
            <m.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE_OUT }}
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Core technologies"
            >
              {CORE_STACK.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </m.div>

            {/* Primary CTAs */}
            <m.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5, ease: EASE_OUT }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
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
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download CV</span>
                </Button>
              )}

              <Button to="/contact" variant="secondary">
                Contact
              </Button>
            </m.div>

            {/* Verified data metrics + social links strip */}
            <m.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65, ease: EASE_OUT }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--line)] pt-6"
            >
              {proofMetrics.map((metric) => (
                <div key={metric.label} className="flex items-baseline gap-2">
                  <span className="font-mono text-base font-bold text-[var(--highlight)]">
                    {metric.value}
                  </span>
                  <span className="text-xs text-[var(--ink-faint)]">
                    {metric.label}
                  </span>
                </div>
              ))}

              <SocialLinks />
            </m.div>
          </div>

          {/* Right visual column: interactive 2.5D personal portrait with scroll parallax */}
          <m.div
            style={{ y: reduce ? 0 : sceneY }}
            className="relative min-w-0"
          >
            <HeroPortrait />
          </m.div>
        </div>
      </Container>
    </section>
  );
}
