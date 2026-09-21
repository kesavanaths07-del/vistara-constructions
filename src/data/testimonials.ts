export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  project: string;
  location: string;
}

// 2-3 clearly structured placeholder testimonials designed for easy replacement
export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Every detail felt considered, from the architecture to the final finish. The team understood what we wanted and brought it to life with remarkable precision.',
    client: 'Private Residence Client',
    project: 'The Vistara Residence',
    location: 'Chennai'
  },
  {
    id: '2',
    quote: 'Building in South India requires a deep understanding of humidity, monsoon rains, and climate. Vistara delivered a home that stays tranquil and cool year-round.',
    client: 'Villa Owner',
    project: 'The Courtyard House',
    location: 'Coimbatore'
  },
  {
    id: '3',
    quote: 'The level of craftsmanship in the stone and timber joinery exceeded anything we had seen before. It is not just a house; it is an enduring family sanctuary.',
    client: 'Estate Client',
    project: 'Ananta Villa',
    location: 'Bengaluru'
  }
];
