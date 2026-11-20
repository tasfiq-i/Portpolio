import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/common/Button';
import { Container } from '../../../components/common/Container';
import { SectionHeading } from '../../../components/common/SectionHeading';
import { ProjectGrid } from '../../../components/projects/ProjectGrid';
import { PROJECTS } from '../../../data/projects';

export function FeaturedProjectsSection() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).sort(
    (a, b) => a.displayOrder - b.displayOrder,
  );

  return (
    <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] py-16">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="Projects and architecture case studies labeled honestly by current development and verification status."
          action={
            <Button to="/projects" variant="secondary" size="sm">
              <span>All Projects</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          }
        />

        <div className="mt-8">
          <ProjectGrid projects={featuredProjects} />
        </div>
      </Container>
    </section>
  );
}
