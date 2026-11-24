import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Stagger, StaggerItem } from '../../components/motion/Reveal';
import { SEO } from '../../components/shared/SEO';
import { SkillCategory } from '../../components/skills/SkillCategory';
import { SKILL_CATEGORIES, SKILLS } from '../../data/skills';

export function SkillsPage() {
  return (
    <>
      <SEO
        title="Skills — Portfolio"
        description="Technical skills grouped by category with evidence-based labels."
      />
      <Container className="py-16 sm:py-24">
        <SectionHeading
          as="h1"
          index="01"
          eyebrow="Capabilities"
          title="Technical"
          accent="skills."
          subtitle="Grouped by domain using evidence-based labels rather than percentage bars. Final levels are pending owner review."
        />

        <Stagger className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category, index) => (
            <StaggerItem key={category}>
              <SkillCategory
                index={index + 1}
                title={category}
                skills={SKILLS.filter((skill) => skill.category === category)}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </>
  );
}
