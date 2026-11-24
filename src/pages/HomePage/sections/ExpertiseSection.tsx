import { Code2, Database, Wrench } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { Stagger, StaggerItem } from '../../../components/motion/Reveal';
import { SERVICES } from '../../../data/services';
import { formatIndex } from '../../../lib/projectMeta';

const SERVICE_ICONS = [Code2, Database, Wrench];

export function ExpertiseSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Services (Draft)"
          title="How I can"
          accent="help."
          subtitle="Areas aligned with my current project stack. Specific project scope and timelines are discussed per inquiry."
        />

        <Stagger className="mt-12 divide-y divide-[var(--line-strong)] border-y border-[var(--line-strong)]">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
            return (
              <StaggerItem
                key={service.id}
                className="group grid grid-cols-1 items-start gap-4 py-8 transition-colors sm:grid-cols-12 sm:items-center sm:gap-6"
              >
                <div className="flex items-center gap-4 sm:col-span-5">
                  <span className="font-mono text-xs text-[var(--ink-faint)]">
                    {formatIndex(index + 1)}
                  </span>
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--r-sm)] border border-[var(--line-strong)] bg-[var(--surface)] text-[var(--accent)] transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-[var(--ink-muted)] sm:col-span-7 sm:text-base">
                  {service.description}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
