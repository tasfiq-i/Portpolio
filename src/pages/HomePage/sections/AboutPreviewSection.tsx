import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/common/Button';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { PROFILE } from '../../../data/profile';

export function AboutPreviewSection() {
  return (
    <section className="border-b border-[var(--border-subtle)] py-16">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Engineering Focus & Background"
          action={
            <Button to="/about" variant="secondary" size="sm">
              <span>Read More</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          }
        />

        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          <p>{PROFILE.shortBio}</p>
          <p>
            I prioritize clear relational data modeling, readable API boundaries,
            and verifying every generated or written change before calling it done.
          </p>
        </div>
      </Container>
    </section>
  );
}
