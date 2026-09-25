import React from 'react';
import { MAIN_SECTIONS } from '../data/sections';
import {
  InteractiveArchitectureSection,
  InteractiveSectionItem
} from './InteractiveArchitectureSection';

const methodologySteps: InteractiveSectionItem[] = [
  {
    id: 'methodology-vision',
    number: '01',
    category: 'DISCOVERY',
    title: 'VISION',
    description: 'Understanding spatial aspirations, lifestyle rhythms, topography, and solar orientation.',
    deliverables: ['Site Solar & Wind Study'],
    keyOutputLabel: 'KEY OUTPUT',
    image: '/images/methodology/01-vision.jpg',
    imageAlt: 'Vistara Architecture Methodology Phase 01: Initial architectural vision, topographical site analysis, and tropical concept sketching'
  },
  {
    id: 'methodology-design',
    number: '02',
    category: 'ARCHITECTURE',
    title: 'DESIGN',
    description: 'Developing architectural language, spatial volumes, courtyard placements, and airflow corridors.',
    deliverables: ['Volumetric Study'],
    keyOutputLabel: 'KEY OUTPUT',
    image: '/images/methodology/02-design.jpg',
    imageAlt: 'Vistara Architecture Methodology Phase 02: Architectural scale model, courtyard airflow planning, and volumetric spatial development'
  },
  {
    id: 'methodology-detail',
    number: '03',
    category: 'ENGINEERING',
    title: 'DETAIL',
    description: 'Resolving stone fluting, timber joinery, post-tensioning, and MEP integration down to the millimeter.',
    deliverables: ['Material Sourcing Specs'],
    keyOutputLabel: 'KEY OUTPUT',
    image: '/images/methodology/03-detail.jpg',
    imageAlt: 'Vistara Architecture Methodology Phase 03: Precision timber joinery mockups, fluted travertine stone detailing, and technical blueprint assemblies'
  },
  {
    id: 'methodology-build',
    number: '04',
    category: 'CRAFTSMANSHIP',
    title: 'BUILD',
    description: 'Executing construction with disciplined project management, master craftsmen, and strict tolerances.',
    deliverables: ['On-Site Quality Audits'],
    keyOutputLabel: 'KEY OUTPUT',
    image: '/images/methodology/04-build.jpg',
    imageAlt: 'Vistara Architecture Methodology Phase 04: Active construction of South Indian residence with master craftsmen erecting solid teak pillars and lime plaster'
  },
  {
    id: 'methodology-deliver',
    number: '05',
    category: 'HANDOVER',
    title: 'DELIVER',
    description: 'Commissioning environmental systems and delivering a finished home built for generations.',
    deliverables: ['Acoustic & Thermal Audit'],
    keyOutputLabel: 'KEY OUTPUT',
    image: '/images/methodology/05-deliver.jpg',
    imageAlt: 'Vistara Architecture Methodology Phase 05: Completed luxury South Indian courtyard residence with reflecting pool, mature tropical gardens, and teak colonnade'
  }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <InteractiveArchitectureSection
      id="process-section"
      sectionConfig={MAIN_SECTIONS.METHODOLOGY}
      heading="FROM VISION TO REALITY"
      introParagraphs={[
        'Our disciplined five-phase process ensures architectural purity from initial sketch to generational handover.'
      ]}
      items={methodologySteps}
      imagePosition="left"
      backgroundColor="#E8E0D2"
    />
  );
};
