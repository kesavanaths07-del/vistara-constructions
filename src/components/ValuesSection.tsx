import React from 'react';

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
        <div style={{ marginBottom: '64px' }}>
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

        {/* 4-Column Architectural Typography Grid (Strictly No Icons) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
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
    </section>
  );
};
