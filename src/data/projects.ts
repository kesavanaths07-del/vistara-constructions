export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'RESIDENTIAL' | 'VILLAS' | 'INTERIORS' | 'COMMERCIAL';
  location: string;
  city: string;
  state: string;
  year: string;
  area: string;
  status: 'Completed' | 'In Progress' | 'Design Phase';
  isSignature?: boolean;
  heroImage: string;
  thumbnailImage: string;
  galleryImages: string[];
  overview: string;
  architecturalConcept: string;
  designDetails: {
    title: string;
    description: string;
  }[];
  materialsUsed: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'the-courtyard-house',
    slug: 'courtyard-house',
    title: 'The Courtyard House',
    subtitle: 'Reimagining the sacred South Indian courtyard through minimalist proportions and tectonic honesty.',
    category: 'VILLAS',
    location: 'Race Course, Coimbatore',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    year: '2024',
    area: '8,800 SQ. FT.',
    status: 'Completed',
    heroImage: '/images/projects/courtyard-house.jpg',
    thumbnailImage: '/images/projects/courtyard-house.jpg',
    galleryImages: [
      '/images/projects/courtyard-house.jpg',
      '/images/projects/courtyard-house-detail1.jpg',
      '/images/projects/courtyard-house-detail2.jpg'
    ],
    overview: 'Centering on an open-to-sky courtyard with a shallow granite reflecting pool, The Courtyard House recalls the timeless Thotti Mane spatial typology of South India, elevated by clean monolithic lines and natural stone.',
    architecturalConcept: 'The house breathes continuously. Cool breezes enter through shaded ground verandahs, traverse the central reflecting pool, and rise through the open roof opening, creating an effortless passive chimney effect.',
    designDetails: [
      {
        title: 'Central Thotti & Water Body',
        description: 'An open central impluvium collects monsoon rains into a subterranean harvesting tank while generating a tranquil sensory centerpiece.'
      },
      {
        title: 'Sculpted Teak Columns',
        description: 'Hand-turned solid teak pillars support the perimeter verandah roof, celebrating authentic regional woodcraft with modern joinery.'
      },
      {
        title: 'Terracotta Acoustic Screens',
        description: 'Custom baked clay jali blocks provide acoustic insulation from urban streets while welcoming dappled patterns of natural light.'
      }
    ],
    materialsUsed: [
      'Terracotta Jali Tiles',
      'Solid Teak Columns',
      'Honed Travertine Floors',
      'Black Granite Water Basins'
    ],
    specs: [
      { label: 'LOCATION', value: 'Coimbatore, Tamil Nadu' },
      { label: 'TYPOLOGY', value: 'Courtyard Villa' },
      { label: 'TOTAL BUILT-UP AREA', value: '8,800 Sq. Ft.' },
      { label: 'COMPLETION YEAR', value: '2024' },
      { label: 'STATUS', value: 'Completed' }
    ]
  },
  {
    id: 'ananta-villa',
    slug: 'ananta-villa',
    title: 'Ananta Villa',
    subtitle: 'Brutalist concrete cantilevers floating effortlessly over dark reflection pools and tropical gardens.',
    category: 'VILLAS',
    location: 'Sadashivanagar, Bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    year: '2024',
    area: '10,200 SQ. FT.',
    status: 'Completed',
    heroImage: '/images/projects/ananta-villa.jpg',
    thumbnailImage: '/images/projects/ananta-villa.jpg',
    galleryImages: [
      '/images/projects/ananta-villa.jpg',
      '/images/projects/ananta-villa-detail1.jpg',
      '/images/projects/ananta-villa-detail2.jpg'
    ],
    overview: 'Ananta Villa is an architectural statement in Bengaluru. Its bold board-formed concrete cantilevers appear weightless against black granite water channels and towering tropical flora.',
    architecturalConcept: 'By cantilevering the upper master suites over the ground reflection pool, the house provides continuous shade to ground-floor living areas while offering privacy without high compound walls.',
    designDetails: [
      {
        title: 'Board-Formed Architectural Concrete',
        description: 'Pine-timber board grain imprinted into high-performance concrete adds warmth and natural tactile texture to monumental forms.'
      },
      {
        title: 'Perimeter Reflection Moat',
        description: 'A 45-meter perimeter water pool isolates the structure from ground vibrations and mirrors the dramatic architectural cantilevers.'
      }
    ],
    materialsUsed: [
      'Exposed Architectural Concrete',
      'Flamed Black Granite',
      'Teak Louver Systems',
      'Polished Brass Accents'
    ],
    specs: [
      { label: 'LOCATION', value: 'Bengaluru, Karnataka' },
      { label: 'TYPOLOGY', value: 'Modern Monolithic Villa' },
      { label: 'AREA', value: '10,200 Sq. Ft.' },
      { label: 'COMPLETION YEAR', value: '2024' }
    ]
  },
  {
    id: 'tamarind-house',
    slug: 'tamarind-house',
    title: 'Tamarind House',
    subtitle: 'Warm sandstone fluting, bronze screens and framed sunset views in the Deccan plateau.',
    category: 'RESIDENTIAL',
    location: 'Jubilee Hills, Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    year: '2023',
    area: '9,400 SQ. FT.',
    status: 'Completed',
    heroImage: '/images/projects/tamarind-house.jpg',
    thumbnailImage: '/images/projects/tamarind-house.jpg',
    galleryImages: [
      '/images/projects/tamarind-house.jpg',
      '/images/projects/tamarind-house-detail1.jpg',
      '/images/projects/tamarind-house-detail2.jpg'
    ],
    overview: 'Situated atop a rocky outcrop in Jubilee Hills, Tamarind House uses local golden sandstone and custom bronze screens to create a quiet sanctuary elevated above Hyderabad’s urban skyline.',
    architecturalConcept: 'Inspired by the historic stone architecture of the Deccan, the house uses massive stone walls for thermal mass, while delicate motorized bronze louvers filter harsh afternoon sunlight.',
    designDetails: [
      {
        title: 'Thermal Mass Sandstone Walls',
        description: '300mm solid sandstone cladding keeps the interior living spaces cool throughout the dry Hyderabad summer.'
      },
      {
        title: 'Bronze Architectural Screens',
        description: 'Perforated laser-cut bronze panels modulate daylight, creating intricate geometric shadow carpets across stone floors.'
      }
    ],
    materialsUsed: [
      'Deccan Golden Sandstone',
      'Architectural Bronze',
      'Honed Basalt Stone',
      'Low-Iron Glass'
    ],
    specs: [
      { label: 'LOCATION', value: 'Hyderabad, Telangana' },
      { label: 'TYPOLOGY', value: 'Private Residence' },
      { label: 'AREA', value: '9,400 Sq. Ft.' },
      { label: 'COMPLETION YEAR', value: '2023' }
    ]
  },
  {
    id: 'the-garden-residence',
    slug: 'garden-residence',
    title: 'The Garden Residence',
    subtitle: 'A biophilic pavilion home nestled inside a coastal Kerala rainforest canopy.',
    category: 'INTERIORS',
    location: 'Fort Kochi, Kochi',
    city: 'Kochi',
    state: 'Kerala',
    year: '2024',
    area: '7,600 SQ. FT.',
    status: 'Completed',
    heroImage: '/images/projects/garden-residence.jpg',
    thumbnailImage: '/images/projects/garden-residence.jpg',
    galleryImages: [
      '/images/projects/garden-residence.jpg',
      '/images/projects/garden-residence-detail1.jpg',
      '/images/projects/garden-residence-detail2.jpg'
    ],
    overview: 'Designed as a series of connected pavilions sheltered beneath traditional terracotta pitched roofs, The Garden Residence dissolves the boundary between lush interior living and tropical landscape.',
    architecturalConcept: 'Sliding brass-framed glass panels slide entirely into concealed wall pockets, turning living rooms into open-air verandahs overlooking private rain gardens and tropical waterways.',
    designDetails: [
      {
        title: 'Pocket Glass Facade',
        description: '12-meter continuous openings without corner columns connect interior living spaces directly with the surrounding forest.'
      },
      {
        title: 'Deep Monsoon Verandahs',
        description: 'Expansive 3.5-meter roof overhangs protect against torrential monsoon downpours while keeping verandahs fully usable.'
      }
    ],
    materialsUsed: [
      'Reclaimed Kerala Teak',
      'Artisanal Terracotta Tiles',
      'Brushed Brass Joinery',
      'River Stone Hardscaping'
    ],
    specs: [
      { label: 'LOCATION', value: 'Kochi, Kerala' },
      { label: 'TYPOLOGY', value: 'Pavilion Villa & Interiors' },
      { label: 'AREA', value: '7,600 Sq. Ft.' },
      { label: 'COMPLETION YEAR', value: '2024' }
    ]
  },
  {
    id: 'vistara-heights',
    slug: 'vistara-heights',
    title: 'Vistara Heights',
    subtitle: 'Limited-edition sky residences overlooking the Bay of Bengal coastline.',
    category: 'COMMERCIAL',
    location: 'ECR, Chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    year: '2025',
    area: '32,000 SQ. FT.',
    status: 'Completed',
    heroImage: '/images/projects/vistara-heights.jpg',
    thumbnailImage: '/images/projects/vistara-heights.jpg',
    galleryImages: [
      '/images/projects/vistara-heights.jpg',
      '/images/projects/vistara-heights-detail1.jpg',
      '/images/projects/vistara-heights-detail2.jpg'
    ],
    overview: 'A collection of bespoke penthouse residences along the East Coast Road. Each floor comprises a single luxury residence with panoramic ocean vistas, private cantilevered infinity pools, and double-height tropical sky gardens.',
    architecturalConcept: 'Blending high-rise structural engineering with the warmth of boutique residential architecture, using titanium-zinc facade cladding, warm teak terrace decks, and acoustic double glazing.',
    designDetails: [
      {
        title: 'Cantilevered Horizon Pools',
        description: 'Post-tensioned concrete cantilevers support private reflection and swimming pools floating 60 meters above the coastline.'
      },
      {
        title: 'Dynamic Shading Facade',
        description: 'Custom motorized bronze louvers track sun angles, optimizing panoramic ocean views while deflecting tropical glare.'
      }
    ],
    materialsUsed: [
      'Titanium-Zinc Composite',
      'Burmese Teak Decking',
      'Honed Black Granite',
      'Acoustic Solar Glass'
    ],
    specs: [
      { label: 'LOCATION', value: 'Chennai, Tamil Nadu' },
      { label: 'TYPOLOGY', value: 'Boutique Luxury Development' },
      { label: 'AREA', value: '32,000 Sq. Ft.' },
      { label: 'COMPLETION YEAR', value: '2025' }
    ]
  }
];
