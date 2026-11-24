import { useMemo, useState } from 'react';
import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Reveal } from '../../components/motion/Reveal';
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
      <Container className="py-16 sm:py-24">
        <SectionHeading
          as="h1"
          index="01"
          eyebrow="Portfolio"
          title="Projects & case"
          accent="studies."
          subtitle="Each project reflects its actual current development and verification status. Architecture case studies are labeled explicitly."
        />

        <Reveal delay={0.15} className="mt-10">
          <ProjectFilter
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />
        </Reveal>

        <div className="mt-10">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </Container>
    </>
  );
}
