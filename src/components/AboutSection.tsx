import React from 'react';
import { MAIN_SECTIONS } from '../data/sections';
import {
  InteractiveArchitectureSection,
  InteractiveSectionItem
} from './InteractiveArchitectureSection';

const craftPrinciples: InteractiveSectionItem[] = [
  {
    id: 'craft-permanence',
    number: '01',
    category: 'PERMANENCE OVER TRENDS',
    title: 'Generational Longevity',
    description:
      'In an era dominated by rapid, disposable construction, Vistara approaches the craft of building from a perspective of generational longevity. We do not build mere speculative square footage; we create private sanctuaries designed for decades of living.',
    detailTag: 'Sanctuary Architecture & Permanent Value',
    image: '/images/craft/01-permanence.jpg',
    imageAlt:
      'Vistara Built on Craft — Timeless South Indian residence with aged natural stone, weathered timber colonnade, and mature courtyard greenery'
  },
  {
    id: 'craft-discipline',
    number: '02',
    category: 'ARCHITECTURAL DISCIPLINE',
    title: 'Architectural Coordination',
    description:
      'Collaborating seamlessly with leading architectural studios, translating complex structural cantilevers and parametric details into flawless reality.',
    detailTag: 'Parametric Engineering & Structural Precision',
    image: '/images/craft/02-discipline.jpg',
    imageAlt:
      'Vistara Built on Craft — Precise contemporary South Indian architecture, crisp geometry, clean structural lines, and refined travertine walls'
  },
  {
    id: 'craft-craftsmanship',
    number: '03',
    category: 'GENERATIONAL CRAFTSMANSHIP',
    title: 'Master Artisan Guilds',
    description:
      'Employing third-generation stone carvers, master teak woodworkers, and brass inlay craftsmen whose touch elevates raw minerals into poetry.',
    detailTag: 'Generational Guilds & Hand-Carved Joinery',
    image: '/images/craft/03-craftsmanship.jpg',
    imageAlt:
      'Vistara Built on Craft — Master artisan hand-finished timber joinery, solid teak fluting, brass inlay, and natural stone detailing'
  },
  {
    id: 'craft-engineering',
    number: '04',
    category: 'CLIMATE-RESPONSIVE ENGINEERING',
    title: 'Precision Quality Protocols',
    description:
      'Multi-stage laser alignment, acoustic sealing tests, structural thermal scanning, and proprietary waterproofing developed for severe coastal monsoons.',
    detailTag: 'Monsoon Waterproofing & Multi-Stage Laser QA',
    image: '/images/craft/04-engineering.jpg',
    imageAlt:
      'Vistara Built on Craft — Tropical South Indian residence demonstrating passive cooling, deep overhangs, shaded verandahs, and cross-ventilation'
  }
];

export const AboutSection: React.FC = () => {
  return (
    <InteractiveArchitectureSection
      id="about-section"
      sectionConfig={MAIN_SECTIONS.APPROACH}
      heading="BUILT ON CRAFT."
      subheadingItalic="Defined by detail."
      introParagraphs={[
        'Every line drawn and every stone set begins with an understanding of permanence. We reject the ephemeral in pursuit of architecture that gains depth with age.',
        'Rooted in Chennai and operating across South India’s cultural corridors, Vistara brings together architectural discipline, generational craftsmanship, and climate-responsive engineering to create spaces that endure.'
      ]}
      items={craftPrinciples}
      imagePosition="left"
      backgroundColor="#EEE8DC"
    />
  );
};
