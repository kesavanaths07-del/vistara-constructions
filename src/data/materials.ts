export interface Material {
  id: string;
  name: string;
  subtitle: string;
  origin: string;
  image: string;
  description: string;
  tactileCharacteristics: string;
  architecturalApplication: string;
  tags: string[];
}

export const materials: Material[] = [
  {
    id: 'natural-stone',
    name: 'Natural Stone',
    subtitle: 'Fluted Travertine & Deccan Sandstone',
    origin: 'Tivoli, Italy & Deccan Basin, India',
    image: '/images/materials/stone.jpg',
    description: 'Selected for its timeless permanence and thermal stability. Our stonework is hand-honed or precision-fluted to catch daylight in soft vertical gradations.',
    tactileCharacteristics: 'Velvety honed finish with natural micro-cavities and delicate sedimentary strata.',
    architecturalApplication: 'Double-height feature atriums, cantilevered facades, and monolithic fireplace surrounds.',
    tags: ['Thermal Mass', 'Acoustic Absorption', 'Zero Maintenance']
  },
  {
    id: 'teak-wood',
    name: 'Teak Wood',
    subtitle: 'Old-Growth Burmese & Malabar Teak',
    origin: 'Sustainably Managed Plantations, Nilgiris & Myanmar',
    image: '/images/materials/teak.jpg',
    description: 'The soul of South Indian architecture. Naturally rich in silica and organic oils, it resists high humidity, monsoon moisture, and wood boring insects for centuries.',
    tactileCharacteristics: 'Silky oil-rubbed grain with warm golden-amber luster and subtle aromatic scent.',
    architecturalApplication: 'Exterior shading louvers, structural verandah columns, ceiling soffits, and custom entry portals.',
    tags: ['Moisture Resistant', 'Natural Oils', 'Generational Longevity']
  },
  {
    id: 'brass-bronze',
    name: 'Muted Brass',
    subtitle: 'Unlacquered Architectural Brass & Bronze',
    origin: 'Heritage Metallurgical Foundries, Swamimalai & Moradabad',
    image: '/images/materials/brass.jpg',
    description: 'Brass brings warmth and living history into modern structures. Left unlacquered, it develops a deep, noble patina that records the passage of time and touch.',
    tactileCharacteristics: 'Satin brush-line grain that absorbs and warms reflected natural light without harsh glare.',
    architecturalApplication: 'Granite floor dividing inlays, custom door hardware, facade jali screens, and bespoke lighting fixtures.',
    tags: ['Living Patina', 'Hand-Finished', 'Noble Metal']
  },
  {
    id: 'terracotta',
    name: 'Terracotta',
    subtitle: 'Hand-Pressed Clay & Jali Screens',
    origin: 'Artisanal Kilns, Tamil Nadu & Kerala',
    image: '/images/materials/terracotta.jpg',
    description: 'Earthy, porous, and breathable. Terracotta tiles and perforated jali screens filter blinding solar glare into gentle shadow patterns while allowing natural air circulation.',
    tactileCharacteristics: 'Warm textured earth feel, matte baked finish with subtle artisanal color variations.',
    architecturalApplication: 'Bespoke courtyard ventilation walls, sloping roof eaves, and textured rain-screen facades.',
    tags: ['Passive Cooling', 'Locally Sourced', 'Breathable']
  },
  {
    id: 'warm-concrete',
    name: 'Warm Concrete',
    subtitle: 'Board-Formed Architectural Concrete',
    origin: 'In-Situ Precision Castings',
    image: '/images/materials/concrete.jpg',
    description: 'Honest structural expression where timber formwork leaves an indelible organic grain imprint into monolithic structural elements.',
    tactileCharacteristics: 'Crisp relief texture of Douglas fir wood grain transferred into mineral stone.',
    architecturalApplication: 'Cantilevered floor plates, privacy perimeter walls, and structural shear columns.',
    tags: ['Structural Honesty', 'High Strength', 'Minimalist Expression']
  },
  {
    id: 'architectural-glass',
    name: 'Architectural Glass',
    subtitle: 'Acoustic Low-Iron Solar Glazing',
    origin: 'Precision Fabricators, Saint-Gobain Glass',
    image: '/images/materials/glass.jpg',
    description: 'Ultra-clear panoramic glazing engineered with spectral selectivity to block up to 74% of solar heat while allowing 92% of pure natural sunlight to permeate living volumes.',
    tactileCharacteristics: 'Completely planar reflection, seamless minimal sightlines, zero green tint.',
    architecturalApplication: 'Pocket sliding walls, double-height atrium facades, and frameless sky corners.',
    tags: ['Thermal Efficiency', 'UV Protection', 'Optical Clarity']
  }
];
