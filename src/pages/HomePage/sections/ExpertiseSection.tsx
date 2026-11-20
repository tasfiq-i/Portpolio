import { Code2, Database, Wrench } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { SERVICES } from '../../../data/services';

const SERVICE_ICONS = [Code2, Database, Wrench];

export function ExpertiseSection() {
  return (
    <section className="border-b border-[var(--border-subtle)] py-16">
      <Container>
        <SectionHeading
          eyebrow="Services (Draft)"
          title="How I Can Help"
          subtitle="Areas aligned with my current project stack. Specific project scope and timelines are discussed per inquiry."
        />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
            return (
              <div
                key={service.id}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[var(--text-primary)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
