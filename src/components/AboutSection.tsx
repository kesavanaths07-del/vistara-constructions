import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage';
import { EditorialSection } from './EditorialSection';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about-section"
      style={{
        backgroundColor: '#EEE8DC',
        paddingTop: 'clamp(130px, 13vw, 180px)',
        paddingBottom: 'clamp(130px, 13vw, 180px)',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        <EditorialSection
          index={0} // index 0 => IMAGE LEFT, TEXT RIGHT (Craftsmanship Section)
          imageWidthPercent={58}
          spacingBottom="0"
          textSlot={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <div>
                <span className="micro-label" style={{ marginBottom: '14px' }}>
                  03 — APPROACH
                </span>
                <h2
                  className="heading-section"
                  style={{
                    color: 'var(--text-heading)',
                    lineHeight: 1.1,
                    textTransform: 'uppercase',
                    fontSize: 'clamp(2rem, 3.5vw, 3.25rem)'
                  }}
                >
                  BUILT ON CRAFT. <br />
                  <span
                    style={{
                      fontFamily: 'var(--font-editorial)',
                      fontStyle: 'italic',
                      color: 'var(--accent-bronze)',
                      textTransform: 'none',
                      display: 'block',
                      marginTop: '6px'
                    }}
                  >
                    Defined by detail.
                  </span>
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
                Every line drawn and every stone set begins with an understanding of permanence. We reject the ephemeral in pursuit of architecture that gains depth with age.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.85,
                  color: 'var(--text-secondary)'
                }}
              >
                Rooted in Chennai and operating across South India’s cultural corridors, Vistara brings together architectural discipline, generational craftsmanship, and climate-responsive engineering to create spaces that endure.
              </p>

              <div style={{ paddingTop: '12px' }}>
                <Link to="/about" className="link-editorial">
                  <span>OUR PHILOSOPHY &amp; CRAFT</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          }
          imageSlot={
            <div className="img-zoom-container" style={{ borderRadius: '1px' }}>
              <ArchitecturalImage
                src="/images/about/approach-craft.jpg"
                fallbackSrc="/images/about/approach-craft.jpg"
                alt="Architectural craftsmanship, precision teak joinery and natural stone detailing by Vistara Constructions"
                aspectRatio="4 / 3"
              />
            </div>
          }
        />
      </div>
    </section>
  );
};
