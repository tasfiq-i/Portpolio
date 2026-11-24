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
    <section className="border-b border-[var(--line)] py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="Selected Work"
          title="Featured"
          accent="projects."
          subtitle="Projects and architecture case studies labeled honestly by current development and verification status."
          action={
            <Button to="/projects" variant="secondary" size="sm">
              <span>All Projects</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          }
        />

        <div className="mt-12">
          <ProjectGrid projects={featuredProjects} />
        </div>
      </Container>
    </section>
  );
}
