export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const articles: Article[] = [
  {
    id: 'designing-for-south-indian-climate',
    slug: 'designing-for-south-indian-climate',
    title: 'Designing for the South Indian Climate',
    category: 'CLIMATE & ARCHITECTURE',
    date: 'February 2025',
    readTime: '6 min read',
    image: '/images/journal/climate.jpg',
    excerpt: 'How deep verandahs, cross-ventilation, and thermal mass create residences that remain naturally cool during peak summer without constant air conditioning.',
    content: [
      'The tropical climate of South India presents both an architectural challenge and a profound opportunity. For centuries, regional architecture responded not through mechanical air cooling, but through the deliberate articulation of shade, air movement, and thermal inertia.',
      'In our contemporary practice, we study traditional solar angles across Chennai, Bengaluru, and Hyderabad. By calculating deep horizontal overhangs, exterior louvered screens, and wind-tunnel courtyards, we reduce solar heat gain on glazing by more than 70%.',
      'The result is a home that breathes in synchrony with diurnal wind patterns — inviting cool maritime breezes at twilight and retaining interior freshness throughout the afternoon.'
    ]
  },
  {
    id: 'return-of-the-courtyard',
    slug: 'return-of-the-courtyard',
    title: 'The Return of the Courtyard',
    category: 'SPATIAL TYPOLOGY',
    date: 'January 2025',
    readTime: '5 min read',
    image: '/images/journal/courtyard-editorial.jpg',
    excerpt: 'Rediscovering the central courtyard as the spiritual, emotional, and bioclimatic anchor of the modern luxury residence.',
    content: [
      'In traditional South Indian homes — from the Chettinad mansions of Tamil Nadu to the Nalukettu homes of Kerala — the courtyard (Muttaram or Thotti) was never merely an aesthetic ornament. It was the atmospheric heart of family life.',
      'Modern luxury has often alienated inhabitants from the elements through sealed glass boxes. At Vistara, our courtyards reintroduce the drama of changing light, falling monsoon raindrops, and fragrant tropical flora into daily life.',
      'A courtyard acts as a natural air lung: warm air gathers and exhausts upward through the open sky opening, pulling cool air across the perimeter ground verandahs.'
    ]
  },
  {
    id: 'why-material-matters',
    slug: 'why-material-matters',
    title: 'Why Material Matters',
    category: 'CRAFTSMANSHIP',
    date: 'December 2024',
    readTime: '4 min read',
    image: '/images/journal/material-study.jpg',
    excerpt: 'In an era of synthetic veneers, the sensory resonance of authentic stone, solid teak, and unlacquered brass creates enduring luxury.',
    content: [
      'True luxury is not about visual flamboyance; it is felt beneath your fingertips and barefoot on cool stone floors. The tactile honesty of authentic materials cannot be simulated.',
      'When we specify honed travertine, old-growth Burmese teak, or solid black granite, we choose materials that carry geological history and organic integrity. Unlike synthetic surfaces that deteriorate with age, natural materials evolve with graceful dignity.'
    ]
  },
  {
    id: 'architecture-that-ages-well',
    slug: 'architecture-that-ages-well',
    title: 'Architecture That Ages Well',
    category: 'PHILOSOPHY',
    date: 'November 2024',
    readTime: '5 min read',
    image: '/images/journal/aging-patina.jpg',
    excerpt: 'Building residences designed not for ephemeral magazine trends, but to stand with increasing beauty fifty years into the future.',
    content: [
      'Too much contemporary residential construction is built for the moment of handover — shiny on day one, but rapidly degrading under monsoon rain, intense ultraviolet radiation, and humidity.',
      'At Vistara, our foundational question is simple: How will this wall, this timber column, this brass detail look in twenty-five years? When designed with disciplined detailing and weather-responsive water drips, architecture gains patina and profound character.'
    ]
  }
];
