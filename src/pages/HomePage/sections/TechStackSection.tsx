import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/common/Button';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { Stagger, StaggerItem } from '../../../components/motion/Reveal';
import { TechBadge } from '../../../components/skills/TechBadge';
import { formatIndex } from '../../../lib/projectMeta';

const STACK_GROUPS = [
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap 5'],
  },
  {
    label: 'Backend',
    items: ['C#', 'ASP.NET Core Web API', 'ASP.NET MVC 5', 'REST APIs'],
  },
  {
    label: 'Database & ORM',
    items: ['SQL Server', 'Entity Framework Core', 'Entity Framework 6'],
  },
  {
    label: 'Tools & Workflow',
    items: [
      'Git & GitHub',
      'Swagger / OpenAPI',
      'Postman / API Testing',
      'AI-Assisted Review',
    ],
  },
];

export function TechStackSection() {
  return (
    <section className="border-b border-[var(--line)] py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Core Stack"
          title="Technologies I work"
          accent="with."
          subtitle="Focused on practical full-stack web development with React, TypeScript, and the .NET ecosystem."
          action={
            <Button to="/skills" variant="secondary" size="sm">
              <span>View All Skills</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          }
        />

        <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STACK_GROUPS.map((group, index) => (
            <StaggerItem
              key={group.label}
              className="rounded-[var(--r-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]/50"
            >
              <div className="flex items-baseline justify-between border-b border-[var(--line)] pb-3">
                <h3 className="font-display text-base font-bold text-[var(--ink)]">
                  {group.label}
                </h3>
                <span className="eyebrow text-[var(--accent)]">
                  {formatIndex(index + 1)}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <TechBadge key={item} name={item} />
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
