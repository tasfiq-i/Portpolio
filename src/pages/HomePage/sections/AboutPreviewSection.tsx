import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/common/Button';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { Reveal } from '../../../components/motion/Reveal';
import { WordReveal } from '../../../components/motion/WordReveal';
import { PROFILE } from '../../../data/profile';

export function AboutPreviewSection() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]/35 py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="About"
          title="Engineering focus &"
          accent="background."
          action={
            <Button to="/about" variant="secondary" size="sm">
              <span>Read More</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <WordReveal
              as="p"
              text="I prioritize clear relational data modeling, readable API boundaries, and verifying every generated or written change before calling it"
              accent="done."
              className="font-display text-h2 text-[var(--ink)]"
            />
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-[var(--ink-muted)]">
              {PROFILE.shortBio}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
