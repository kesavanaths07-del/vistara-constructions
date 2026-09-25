import React from 'react';
import { MAIN_SECTIONS } from '../data/sections';
import {
  InteractiveArchitectureSection,
  InteractiveSectionItem
} from './InteractiveArchitectureSection';

const tectonicPrinciples: InteractiveSectionItem[] = [
  {
    id: 'tectonic-ventilation',
    number: '01',
    category: 'PASSIVE CROSS-VENTILATION',
    title: 'Monsoon-Responsive Flow',
    description:
      'Orientation tuned to regional monsoon winds, drawing air through shaded vegetation and courtyard conduits to naturally cool thermal mass.',
    detailTag: 'Diurnal Airflow Corridors & Microclimate Cooling',
    image: '/images/tectonics/01-cross-ventilation.jpg',
    imageAlt:
      'Vistara Regional Tectonics — South Indian tropical courtyard designed for natural cross-ventilation, shaded verandahs, and passive cooling'
  },
  {
    id: 'tectonic-solar',
    number: '02',
    category: 'SOLAR MODULATION',
    title: 'Deep Verandahs & Overhangs',
    description:
      'Generous cantilevered timber eaves shield glass facades from harsh solar angles, eliminating thermal gain while extending outdoor living.',
    detailTag: 'Thermal Eaves & Geometric Sun Shading',
    image: '/images/tectonics/02-solar-modulation.jpg',
    imageAlt:
      'Vistara Regional Tectonics — Deep cantilevered timber verandah with massive overhangs casting rhythmic slatted sunlight across stone floors'
  },
  {
    id: 'tectonic-courtyard',
    number: '03',
    category: 'THOTTI MANE REIMAGINED',
    title: 'Courtyard Typology',
    description:
      'Central open-to-sky voids that induce natural stack chimney ventilation, framing tropical rain, morning light, and lush interior microclimates.',
    detailTag: 'Stack Ventilation & Living Impluvium',
    image: '/images/tectonics/03-thotti-mane.jpg',
    imageAlt:
      'Vistara Regional Tectonics — Contemporary Thotti Mane courtyard villa with rain falling through central open-to-sky void into granite basin'
  },
  {
    id: 'tectonic-water',
    number: '04',
    category: 'INTEGRATED WATERBODIES',
    title: 'Living Rainwater Basins',
    description:
      'Shallow black granite reflecting pools that lower surrounding ambient temperatures through evaporative microclimate cooling.',
    detailTag: 'Evaporative Cooling & Water Reflection',
    image: '/images/tectonics/04-waterbodies.jpg',
    imageAlt:
      'Vistara Regional Tectonics — Refined shallow black granite reflecting pool integrated into a tropical courtyard surrounded by lush caladiums'
  }
];

export const SouthIndianIdentity: React.FC = () => {
  return (
    <InteractiveArchitectureSection
      id="south-indian-identity"
      sectionConfig={MAIN_SECTIONS.REGIONAL_TECTONICS}
      heading={
        <>
          SHAPED BY SUN, <br />
          RAIN &amp; REGIONAL <br />
          WISDOM.
        </>
      }
      introParagraphs={[
        'We honor the architectural heritage of South India not through superficial ornament, but by translating centuries of bioclimatic intelligence into bold, contemporary spatial forms.',
        'From shaded perimeter verandahs and open rainwater impluviums to natural stack chimneys, each residence engages intimately with its microclimate to achieve effortless thermal comfort.'
      ]}
      items={tectonicPrinciples}
      imagePosition="right"
      backgroundColor="#E8E0D2"
    />
  );
};
