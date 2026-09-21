export interface StatItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  isPlaceholder: boolean;
}

// Structured placeholder data designed for direct replacement with verified company records
export const stats: StatItem[] = [
  {
    id: 'experience',
    value: '15+',
    label: 'YEARS OF EXPERIENCE',
    subtext: 'Bespoke residential architectural execution',
    isPlaceholder: true
  },
  {
    id: 'spaces',
    value: '120+',
    label: 'SPACES DELIVERED',
    subtext: 'Private villas, residences and sanctuaries',
    isPlaceholder: true
  },
  {
    id: 'built-area',
    value: '2.5M+',
    label: 'SQ. FT. BUILT',
    subtext: 'Masterfully engineered spatial volume',
    isPlaceholder: true
  },
  {
    id: 'cities',
    value: '3',
    label: 'SOUTH INDIAN CITIES',
    subtext: 'Chennai · Bengaluru · Hyderabad',
    isPlaceholder: true
  }
];
