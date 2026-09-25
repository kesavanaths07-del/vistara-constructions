import React from 'react';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ValueItem {
  number: string;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    number: '01',
    title: 'DESIGN',
    description: 'Architecture that responds intimately to people, landscape and the South Indian tropical climate.'
  },
  {
    number: '02',
    title: 'CRAFT',
    description: 'Material precision, uncompromising timber joinery, and generational stone craftsmanship.'
  },
  {
    number: '03',
    title: 'INTEGRITY',
    description: 'Transparent material provenance, disciplined engineering rigor, and responsible execution.'
  },
  {
    number: '04',
    title: 'LEGACY',
    description: 'Residences conceived and built to gain patina, dignity and permanence across generations.'
  }
];

export const ValuesSection: React.FC = () => {
  return (
    <section
      id="values-section"
      style={{
        backgroundColor: '#F5F1E8',
        paddingTop: 'clamp(120px, 12vw, 180px)',
        paddingBottom: 'clamp(120px, 12vw, 180px)',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(36px, 4.5vw, 48px)' }}>
          <span className="micro-label" style={{ marginBottom: '14px' }}>
            CORE PRINCIPLES
          </span>
          <h2
            className="heading-section"
            style={{
              color: 'var(--text-heading)',
              textTransform: 'uppercase'
            }}
          >
            OUR VALUES
          </h2>
        </div>

        {/* Core Principles Dedicated Title/Hero Image */}
        <div
          className="img-zoom-container core-principles-hero-wrapper"
          style={{
            marginBottom: 'clamp(48px, 6vw, 72px)',
            borderRadius: '1px',
            border: '1px solid var(--border-subtle)',
            overflow: 'hidden'
          }}
        >
          <ArchitecturalImage
            src="/images/about/core-principles.webp"
            fallbackSrc="/images/about/core-principles.jpg"
            alt="Vistara Core Principles — South Indian architectural colonnade with solid teak pillars, natural stone paving, and inner tropical courtyard"
            aspectRatio="16 / 9"
            className="core-principles-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>

        {/* 4-Column Architectural Typography Grid (Strictly No Icons) */}
        <div
          className="values-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: 'clamp(32px, 4vw, 56px)'
          }}
        >
          {values.map((v) => (
            <div
              key={v.number}
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.2em',
                  color: 'var(--accent-bronze)',
                  fontWeight: 600
                }}
              >
                {v.number}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  letterSpacing: '0.08em',
                  color: 'var(--text-heading)',
                  fontWeight: 400
                }}
              >
                {v.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  color: 'var(--text-secondary)'
                }}
              >
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .core-principles-hero-wrapper {
          width: 100%;
          max-width: 100%;
        }
        @media (max-width: 768px) {
          .core-principles-hero-wrapper .arch-img-wrapper {
            aspect-ratio: 16 / 10 !important;
          }
        }
        @media (max-width: 480px) {
          .core-principles-hero-wrapper .arch-img-wrapper {
            aspect-ratio: 4 / 3 !important;
          }
        }
      `}</style>
    </section>
  );
};
