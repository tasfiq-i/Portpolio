import { Bot, CheckSquare, GitBranch, ShieldCheck } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { Stagger, StaggerItem } from '../../../components/motion/Reveal';
import { formatIndex } from '../../../lib/projectMeta';

const PRACTICES = [
  {
    icon: GitBranch,
    title: 'Structured Development',
    description:
      'Small, incremental changes with clear folder separation, typed models, and Git version history.',
  },
  {
    icon: ShieldCheck,
    title: 'Validation & Security Basics',
    description:
      'Input validation, role-based authorization concepts, and keeping secrets out of client code and repositories.',
  },
  {
    icon: CheckSquare,
    title: 'Testing & Verification',
    description:
      'Checking API endpoints, database queries, TypeScript types, and responsive UI behavior before release.',
  },
  {
    icon: Bot,
    title: 'Responsible AI-Assisted Workflow',
    description:
      'Using AI tools for planning, boilerplate, and review while manually reading, adapting, and testing every output.',
  },
];

export function DevelopmentApproachSection() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--surface)]/35 py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Engineering & AI Workflow"
          title="Development"
          accent="approach."
          subtitle="Practical engineering habits paired with human-verified AI assistance."
        />

        <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PRACTICES.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={item.title}
                className="group relative overflow-hidden rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-6 transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-[var(--accent)]/50 sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-2 right-5 select-none font-display text-6xl font-extrabold text-[var(--accent)] opacity-[0.08] transition-opacity group-hover:opacity-[0.16]"
                >
                  {formatIndex(index + 1)}
                </span>

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--r-sm)] border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="eyebrow text-[var(--accent)]">
                      Step {formatIndex(index + 1)}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-[var(--ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
