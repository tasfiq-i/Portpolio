import { Container } from '../../components/common/Container';
import { SectionHeading } from '../../components/common/SectionHeading';
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
      <Container className="py-16">
        <SectionHeading
          as="h1"
          eyebrow="Capabilities"
          title="Technical Skills"
          subtitle="Grouped by domain using evidence-based labels rather than percentage bars. Final levels are pending owner review."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategory
              key={category}
              title={category}
              skills={SKILLS.filter((skill) => skill.category === category)}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
