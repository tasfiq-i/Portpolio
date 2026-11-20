import { useMemo, useState } from 'react';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import {
  ProjectFilter,
  type ProjectFilterValue,
} from '../../components/projects/ProjectFilter';
import { ProjectGrid } from '../../components/projects/ProjectGrid';
import { SEO } from '../../components/shared/SEO';
import { PROJECTS } from '../../data/projects';

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectFilterValue>('all');

  const filteredProjects = useMemo(() => {
    const sorted = [...PROJECTS].sort(
      (a, b) => a.displayOrder - b.displayOrder,
    );
    if (selectedCategory === 'all') return sorted;
    return sorted.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <SEO
        title="Projects — Portfolio"
        description="Full-stack, backend API, and system architecture projects with truthful status labels."
      />
      <Container className="py-16">
        <SectionHeading
          as="h1"
          eyebrow="Portfolio"
          title="Projects & Case Studies"
          subtitle="Each project reflects its actual current development and verification status. Architecture case studies are labeled explicitly."
        />

        <div className="mt-8">
          <ProjectFilter
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        <div className="mt-8">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </Container>
    </>
  );
}
