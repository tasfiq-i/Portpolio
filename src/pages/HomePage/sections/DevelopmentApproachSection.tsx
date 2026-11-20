import { Bot, CheckSquare, GitBranch, ShieldCheck } from 'lucide-react';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';

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
    <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] py-16">
      <Container>
        <SectionHeading
          eyebrow="Engineering & AI Workflow"
          title="Development Approach"
          subtitle="Practical engineering habits paired with human-verified AI assistance."
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PRACTICES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-5"
              >
                <div className="mt-0.5 shrink-0 text-[var(--accent-primary)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
