import React from 'react';
import { MAIN_SECTIONS } from '../data/sections';
import {
  InteractiveArchitectureSection,
  InteractiveSectionItem
} from './InteractiveArchitectureSection';

const coreValues: InteractiveSectionItem[] = [
  {
    id: 'value-design',
    number: '01',
    category: 'CLIMATE & CONTEXT',
    title: 'DESIGN',
    description:
      'Architecture that responds intimately to people, landscape and the South Indian tropical climate.',
    detailTag: 'Bioclimatic Orientation & Spatial Purity',
    image: '/images/values/01-design.jpg',
    imageAlt:
      'Vistara Values — Contemporary South Indian courtyard architecture integrated with lush tropical landscape'
  },
  {
    id: 'value-craft',
    number: '02',
    category: 'MATERIAL PRECISION',
    title: 'CRAFT',
    description:
      'Material precision, uncompromising timber joinery, and generational stone craftsmanship.',
    detailTag: 'Handcrafted Timber Joinery & Natural Stone',
    image: '/images/values/02-craft.jpg',
    imageAlt:
      'Vistara Values — Detailed interlocking timber joinery, fluted travertine stone, and precision artisan craftsmanship'
  },
  {
    id: 'value-integrity',
    number: '03',
    category: 'ENGINEERING RIGOR',
    title: 'INTEGRITY',
    description:
      'Transparent material provenance, disciplined engineering rigor, and responsible execution.',
    detailTag: 'Honest Materials & Multi-Stage Laser QA',
    image: '/images/values/03-integrity.jpg',
    imageAlt:
      'Vistara Values — Architectural construction detail showing chiseled black granite column, massive teak beam, and solid brass interface plate'
  },
  {
    id: 'value-legacy',
    number: '04',
    category: 'GENERATIONAL PATINA',
    title: 'LEGACY',
    description:
      'Residences conceived and built to gain patina, dignity and permanence across generations.',
    detailTag: 'Generational Patina & Permanent Value',
    image: '/images/values/04-legacy.jpg',
    imageAlt:
      'Vistara Values — Timeless South Indian courtyard residence with mature tropical landscaping, aged stone paving, and solid teak colonnade'
  }
];

export const ValuesSection: React.FC = () => {
  return (
    <InteractiveArchitectureSection
      id="values-section"
      sectionConfig={MAIN_SECTIONS.CORE_PRINCIPLES}
      heading="OUR VALUES"
      introParagraphs={[
        'Four foundational pillars guide every commission from initial spatial brief to generational handover.'
      ]}
      items={coreValues}
      imagePosition="left"
      backgroundColor="#F5F1E8"
    />
  );
};
