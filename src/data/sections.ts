export interface SectionConfig {
  sectionNumber: string;
  sectionLabel: string;
}

export const MAIN_SECTIONS = {
  PHILOSOPHY: {
    sectionNumber: '01',
    sectionLabel: 'PHILOSOPHY'
  },
  SELECTED_WORK: {
    sectionNumber: '02',
    sectionLabel: 'SELECTED WORK'
  },
  APPROACH: {
    sectionNumber: '03',
    sectionLabel: 'APPROACH'
  },
  CORE_PRINCIPLES: {
    sectionNumber: '04',
    sectionLabel: 'CORE PRINCIPLES'
  },
  REGIONAL_TECTONICS: {
    sectionNumber: '05',
    sectionLabel: 'REGIONAL TECTONICS'
  },
  METHODOLOGY: {
    sectionNumber: '06',
    sectionLabel: 'METHODOLOGY'
  },
  MATERIALITY: {
    sectionNumber: '07',
    sectionLabel: 'MATERIALITY'
  },
  ARCHITECTURAL_DISCOURSE: {
    sectionNumber: '08',
    sectionLabel: 'ARCHITECTURAL DISCOURSE'
  },
  INQUIRIES: {
    sectionNumber: '09',
    sectionLabel: 'INQUIRIES & ENGAGEMENT'
  }
} as const;

export type SectionKey = keyof typeof MAIN_SECTIONS;

/**
 * Helper to produce the standard editorial section eyebrow format:
 * e.g. "04 — CORE PRINCIPLES"
 */
export const formatSectionEyebrow = (config: SectionConfig): string => {
  return `${config.sectionNumber} — ${config.sectionLabel}`;
};
