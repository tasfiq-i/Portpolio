import { SEO } from '../../components/shared/SEO';
import { PROFILE } from '../../data/profile';
import { AboutPreviewSection } from './sections/AboutPreviewSection';
import { DevelopmentApproachSection } from './sections/DevelopmentApproachSection';
import { ExpertiseSection } from './sections/ExpertiseSection';
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { TechStackSection } from './sections/TechStackSection';

export function HomePage() {
  return (
    <>
      <SEO
        title={`${PROFILE.isPlaceholder ? 'Portfolio' : PROFILE.name} — ${PROFILE.title}`}
        description={PROFILE.tagline}
      />
      <HeroSection />
      <MarqueeSection />
      <FeaturedProjectsSection />
      <AboutPreviewSection />
      <TechStackSection />
      <DevelopmentApproachSection />
      <ExpertiseSection />
    </>
  );
}
