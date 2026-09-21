import React from 'react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { EditorialSection } from './EditorialSection';

export const SouthIndianIdentity: React.FC = () => {
  const elements = [
    {
      number: '01',
      title: 'Monsoon-Responsive Flow',
      subtitle: 'Passive Cross-Ventilation',
      description: 'Orientation tuned to regional monsoon winds, drawing air through shaded vegetation and courtyard conduits to naturally cool thermal mass.'
    },
    {
      number: '02',
      title: 'Deep Verandahs & Overhangs',
      subtitle: 'Solar Modulation',
      description: 'Generous cantilevered timber eaves shield glass facades from harsh solar angles, eliminating thermal gain while extending outdoor living.'
    },
    {
      number: '03',
      title: 'Courtyard Typology',
      subtitle: 'Thotti Mane Reimagined',
      description: 'Central open-to-sky voids that induce natural stack chimney ventilation, framing tropical rain, morning light, and lush interior microclimates.'
    },
    {
      number: '04',
      title: 'Living Rainwater Basins',
      subtitle: 'Integrated Waterbodies',
      description: 'Shallow black granite reflecting pools that lower surrounding ambient temperatures by up to 4°C through evaporative microclimate cooling.'
    }
  ];

  return (
    <section
      id="south-indian-identity"
      style={{
        backgroundColor: '#E8E0D2',
        paddingTop: 'clamp(130px, 13vw, 180px)',
        paddingBottom: 'clamp(130px, 13vw, 180px)',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Alternating Editorial Composition: Text Left | Image Right */}
        <EditorialSection
          index={1} // index 1 => TEXT LEFT, IMAGE RIGHT
          imageWidthPercent={58}
          spacingBottom="clamp(64px, 7vw, 96px)"
          textSlot={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div>
                <span className="micro-label" style={{ marginBottom: '14px' }}>
                  REGIONAL TECTONICS
                </span>
                <h2
                  className="heading-section"
                  style={{
                    color: 'var(--text-heading)',
                    lineHeight: 1.1,
                    textTransform: 'uppercase',
                    fontSize: 'clamp(2rem, 3.4vw, 3.25rem)'
                  }}
                >
                  SHAPED BY SUN, RAIN &amp; REGIONAL WISDOM.
                </h2>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
                  lineHeight: 1.8,
                  color: 'var(--text-primary)'
                }}
              >
                We honor the architectural heritage of South India not through superficial ornament, but by translating centuries of bioclimatic intelligence into bold, contemporary spatial forms.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.85,
                  color: 'var(--text-secondary)'
                }}
              >
                From shaded perimeter verandahs and open rainwater impluviums to natural stack chimneys, each residence engages intimately with its microclimate to achieve effortless thermal comfort.
              </p>
            </div>
          }
          imageSlot={
            <div className="img-zoom-container" style={{ borderRadius: '1px' }}>
              <ArchitecturalImage
                src="/images/about/south-indian-identity.jpg"
                fallbackSrc="/images/about/south-indian-identity.jpg"
                alt="Bioclimatic tropical architecture, deep verandah and central raincourt by Vistara Constructions"
                aspectRatio="4 / 3"
              />
            </div>
          }
        />

        {/* 4-Column Architectural Breakdown (No icons, pure typography) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: 'clamp(28px, 4vw, 48px)'
          }}
        >
          {elements.map((item) => (
            <div
              key={item.number}
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    color: 'var(--accent-bronze)',
                    fontWeight: 600
                  }}
                >
                  {item.number}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.16em',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase'
                  }}
                >
                  {item.subtitle}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--text-heading)',
                  letterSpacing: '0.02em',
                  fontWeight: 400
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  lineHeight: 1.75,
                  color: 'var(--text-secondary)'
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
