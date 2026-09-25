import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MAIN_SECTIONS, formatSectionEyebrow } from '../data/sections';
import { ArchitecturalImage } from './ArchitecturalImage';
import { EditorialSection } from './EditorialSection';

export const IntroSection: React.FC = () => {
  return (
    <section
      id="intro-section"
      style={{
        backgroundColor: '#F5F1E8',
        paddingTop: 'clamp(140px, 14vw, 190px)',
        paddingBottom: 'clamp(100px, 10vw, 150px)',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        <EditorialSection
          index={0} // index 0 => IMAGE LEFT, TEXT RIGHT
          imageWidthPercent={56}
          spacingBottom="0"
          imageSlot={
            <div className="img-zoom-container" style={{ borderRadius: '1px' }}>
              <ArchitecturalImage
                src="/images/about/philosophy-living.jpg"
                fallbackSrc="/images/about/philosophy-living.jpg"
                alt="Contemporary South Indian courtyard residence by Vistara Constructions"
                aspectRatio="4 / 3"
              />
            </div>
          }
          textSlot={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {/* Section Number & Eyebrow */}
              <div style={{ marginBottom: '8px' }}>
                <span className="micro-label">{formatSectionEyebrow(MAIN_SECTIONS.PHILOSOPHY)}</span>
              </div>

              <h2
                className="heading-editorial-statement"
                style={{
                  color: 'var(--text-heading)',
                  textTransform: 'uppercase',
                  fontSize: 'clamp(2rem, 3.2vw, 3.25rem)',
                  lineHeight: 1.15
                }}
              >
                WE BUILD MORE <br />
                THAN STRUCTURES.{' '}
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
                  We build the way life is lived.
                </span>
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1rem, 1.15vw, 1.125rem)',
                  lineHeight: 1.8,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.01em'
                }}
              >
                Vistara Constructions creates thoughtfully designed residences where architecture, craftsmanship and material come together with purpose.
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.85,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.01em'
                }}
              >
                Rooted in the character of South India and shaped by contemporary living, our spaces are designed to feel considered, natural and enduring.
              </p>

              <div style={{ paddingTop: '8px' }}>
                <Link to="/about" className="link-editorial">
                  <span>DISCOVER VISTARA</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
};
