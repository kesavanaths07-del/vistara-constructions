import React, { useState } from 'react';
import { materials, Material } from '../data/materials';
import { EditorialSection } from './EditorialSection';

export const MaterialsSection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<Material>(materials[0]);

  // Editorial captions matching Requirement 28
  const editorialCaptions: Record<string, { headline: string; caption: string }> = {
    'natural-stone': {
      headline: 'TRAVERTINE',
      caption: 'Natural variation. Quiet permanence.'
    },
    'teak-wood': {
      headline: 'TEAK WOOD',
      caption: 'Deep warm grain. Generational resilience.'
    },
    'brass-bronze': {
      headline: 'BRUSHED BRASS',
      caption: 'Living patina. Handcrafted warmth.'
    },
    'terracotta': {
      headline: 'TERRACOTTA & GRANITE',
      caption: 'Earthy tones. Indigenous thermal mass.'
    },
    'warm-concrete': {
      headline: 'LIME PLASTER & CONCRETE',
      caption: 'Soft mineral texture. Monolithic calm.'
    }
  };

  return (
    <section
      id="materials-section"
      style={{
        backgroundColor: '#FAF8F3',
        paddingTop: 'clamp(130px, 13vw, 180px)',
        paddingBottom: 'clamp(130px, 13vw, 180px)',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className="section-header-editorial"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '64px',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div>
            <span className="micro-label" style={{ marginBottom: '14px' }}>
              04 — MATERIALITY
            </span>
            <h2
              className="heading-section"
              style={{
                color: 'var(--text-heading)',
                textTransform: 'uppercase'
              }}
            >
              THE BEAUTY IS IN THE DETAIL.
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '460px',
              lineHeight: 1.7
            }}
          >
            We curate geological and organic materials that mature with character under the South Indian sun.
          </p>
        </div>

        {/* Tactile Material Gallery Layout: Image Left | Text Right */}
        <EditorialSection
          index={0} // index 0 => IMAGE LEFT, TEXT RIGHT
          imageWidthPercent={58}
          spacingBottom="0"
          imageSlot={
            <div className="material-preview-col">
              <div
                className="img-zoom-container"
                style={{
                  aspectRatio: '16 / 11',
                  backgroundColor: '#EEE8DC',
                  borderRadius: '1px'
                }}
              >
                <img
                  key={selectedMaterial.id}
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Editorial Caption under photograph */}
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      letterSpacing: '0.08em',
                      color: 'var(--text-heading)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {editorialCaptions[selectedMaterial.id]?.headline || selectedMaterial.name.toUpperCase()}
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      color: 'var(--accent-bronze)',
                      letterSpacing: '0.04em',
                      marginTop: '2px'
                    }}
                  >
                    {editorialCaptions[selectedMaterial.id]?.caption || selectedMaterial.subtitle}
                  </p>
                </div>

                <span className="project-meta-line">
                  <span>ORIGIN: {selectedMaterial.origin.toUpperCase()}</span>
                </span>
              </div>
            </div>
          }
          textSlot={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
              className="material-list-col"
            >
              {materials.slice(0, 4).map((mat) => {
                const isSelected = selectedMaterial.id === mat.id;
                const ed = editorialCaptions[mat.id];

                return (
                  <div
                    key={mat.id}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedMaterial(mat)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedMaterial(mat);
                      }
                    }}
                    style={{
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '18px',
                      paddingBottom: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.1875rem',
                          letterSpacing: '0.06em',
                          color: isSelected ? 'var(--accent-bronze)' : 'var(--text-heading)',
                          transition: 'color 0.3s ease',
                          fontWeight: isSelected ? 600 : 400
                        }}
                      >
                        {ed?.headline || mat.name}
                      </h3>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.6875rem',
                          letterSpacing: '0.2em',
                          color: isSelected ? 'var(--accent-bronze)' : 'var(--text-muted)'
                        }}
                      >
                        {isSelected ? 'ACTIVE' : 'SELECT'}
                      </span>
                    </div>

                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.875rem',
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {ed?.caption || mat.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          }
        />
      </div>
    </section>
  );
};
