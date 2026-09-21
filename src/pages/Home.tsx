import React from 'react';
import { HeroScroll } from '../components/HeroScroll';
import { IntroSection } from '../components/IntroSection';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { AboutSection } from '../components/AboutSection';
import { ValuesSection } from '../components/ValuesSection';
import { SouthIndianIdentity } from '../components/SouthIndianIdentity';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { MaterialsSection } from '../components/MaterialsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { StatsSection } from '../components/StatsSection';
import { JournalSection } from '../components/JournalSection';
import { ContactCTA } from '../components/ContactCTA';

export const Home: React.FC = () => {
  return (
    <main>
      {/* 1. Hero 3D Frame Scroll Section */}
      <HeroScroll />

      {/* 2. Editorial Introduction */}
      <IntroSection />

      {/* 3. Filterable Projects Portfolio */}
      <ProjectsGrid />

      {/* 5. About the Studio */}
      <AboutSection />

      {/* 6. Foundational Values */}
      <ValuesSection />

      {/* 7. South Indian Identity & Climate-Responsive Architecture */}
      <SouthIndianIdentity />

      {/* 8. 5-Phase Process Timeline */}
      <ProcessTimeline />

      {/* 9. Tactile Material Explorer */}
      <MaterialsSection />

      {/* 10. Client Testimonials */}
      <TestimonialsSection />

      {/* 11. Minimalist Statistics */}
      <StatsSection />

      {/* 12. Architectural Journal */}
      <JournalSection />

      {/* 13. Conversion & Contact Section */}
      <ContactCTA />
    </main>
  );
};
