import { Button } from '../../../components/common/Button';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { TechBadge } from '../../../components/skills/TechBadge';

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
    items: ['Git & GitHub', 'Swagger / OpenAPI', 'Postman / API Testing', 'AI-Assisted Review'],
  },
];

export function TechStackSection() {
  return (
    <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] py-16">
      <Container>
        <SectionHeading
          eyebrow="Core Stack"
          title="Technologies I Work With"
          subtitle="Focused on practical full-stack web development with React, TypeScript, and the .NET ecosystem."
          action={
            <Button to="/skills" variant="secondary" size="sm">
              View All Skills
            </Button>
          }
        />

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STACK_GROUPS.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-5"
            >
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <TechBadge key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
