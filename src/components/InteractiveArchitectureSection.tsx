import React, { useState } from 'react';
import { SectionConfig, formatSectionEyebrow } from '../data/sections';

export interface InteractiveSectionItem {
  id: string;
  number: string;
  category?: string;
  title: string;
  description: string;
  deliverables?: string[];
  keyOutputLabel?: string;
  detailTag?: string;
  image: string;
  imageAlt: string;
}

export interface InteractiveArchitectureSectionProps {
  id: string;
  eyebrow?: string;
  sectionConfig?: SectionConfig;
  heading: React.ReactNode;
  subheadingItalic?: string;
  introParagraphs?: string[];
  items: InteractiveSectionItem[];
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
  paddingTop?: string;
  paddingBottom?: string;
  imageWidthPercent?: number;
  showEmblem?: boolean;
}

export const InteractiveArchitectureSection: React.FC<InteractiveArchitectureSectionProps> = ({
  id,
  eyebrow,
  sectionConfig,
  heading,
  subheadingItalic,
  introParagraphs = [],
  items,
  imagePosition = 'left',
  backgroundColor = '#F5F1E8',
  paddingTop = 'clamp(120px, 12vw, 170px)',
  paddingBottom = 'clamp(120px, 12vw, 170px)',
  imageWidthPercent = 54,
  showEmblem = true
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const displayEyebrow = sectionConfig ? formatSectionEyebrow(sectionConfig) : (eyebrow || '');

  const activeItem = items[activeIdx] || items[0];
  const isImageRight = imagePosition === 'right';

  // Dynamic Image Column
  const imageColumn = (
    <div
      key="interactive-img-col"
      className="interactive-arch-image-col"
      style={{
        flex: `0 0 ${imageWidthPercent}%`,
        maxWidth: '880px',
        position: 'relative'
      }}
    >
      <div
        className="interactive-image-frame img-zoom-container"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          backgroundColor: '#EAE3D6',
          borderRadius: '1px',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)'
        }}
      >
        {items.map((item, idx) => {
          const isCurrent = activeIdx === idx;
          return (
            <img
              key={item.id || item.number}
              src={item.image}
              alt={item.imageAlt || item.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: isCurrent ? 1 : 0,
                transform: isCurrent ? 'scale(1)' : 'scale(1.025)',
                transition:
                  'opacity 650ms cubic-bezier(0.16, 1, 0.3, 1), transform 750ms cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: isCurrent ? 'auto' : 'none'
              }}
            />
          );
        })}

        {/* Minimalist Architectural Floating Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '18px',
            left: '18px',
            backgroundColor: 'rgba(36, 33, 29, 0.72)',
            backdropFilter: 'blur(10px)',
            padding: '6px 14px',
            borderRadius: '1px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              letterSpacing: '0.22em',
              color: 'var(--accent-champagne)',
              fontWeight: 600
            }}
          >
            {activeItem.number}
          </span>
          <span
            style={{
              width: '6px',
              height: '1px',
              backgroundColor: 'rgba(250, 248, 243, 0.4)'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              letterSpacing: '0.18em',
              color: 'var(--text-ivory)',
              textTransform: 'uppercase',
              fontWeight: 500
            }}
          >
            {activeItem.category || activeItem.title}
          </span>
        </div>
      </div>
    </div>
  );

  // Content Column (Heading + Text + Selectable Points)
  const contentColumn = (
    <div
      key="interactive-content-col"
      className="interactive-arch-content-col"
      style={{
        flex: `0 0 ${100 - imageWidthPercent - 5}%`,
        maxWidth: '560px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {/* Header Area */}
      <div style={{ marginBottom: 'clamp(24px, 3vw, 36px)' }}>
        <div
          style={{
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span className="micro-label">{displayEyebrow}</span>

          {showEmblem && (
            <div
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                border: '1px solid rgba(176, 138, 82, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.8
              }}
              aria-hidden="true"
            >
              <span
                style={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-bronze)'
                }}
              />
            </div>
          )}
        </div>

        <h2
          className="heading-section"
          style={{
            color: 'var(--text-heading)',
            textTransform: 'uppercase',
            fontSize: 'clamp(2rem, 3.2vw, 3.25rem)',
            lineHeight: 1.15
          }}
        >
          {heading}
          {subheadingItalic && (
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
              {subheadingItalic}
            </span>
          )}
        </h2>

        {introParagraphs.map((para, i) => (
          <p
            key={i}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
              color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
              marginTop: i === 0 ? '16px' : '12px',
              lineHeight: 1.75
            }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Unified Vertical Selectors List */}
      <div
        className="interactive-points-list"
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
        role="tablist"
        aria-label={displayEyebrow}
      >
        {items.map((item, index) => {
          const isSelected = activeIdx === index;
          const isHovered = hoveredIdx === index;
          const isLast = index === items.length - 1;

          return (
            <div
              key={item.id || item.number}
              onClick={() => setActiveIdx(index)}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveIdx(index);
                }
              }}
              role="tab"
              tabIndex={0}
              aria-selected={isSelected}
              style={{
                borderTop: isSelected
                  ? '2px solid var(--accent-bronze)'
                  : isHovered
                  ? '1px solid rgba(176, 138, 82, 0.55)'
                  : '1px solid var(--border-subtle)',
                borderBottom: isLast ? '1px solid var(--border-subtle)' : 'none',
                paddingTop: 'clamp(14px, 1.6vw, 18px)',
                paddingBottom: 'clamp(14px, 1.6vw, 18px)',
                cursor: 'pointer',
                outline: 'none',
                transition: 'border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
              className={`interactive-point-item ${isSelected ? 'is-active' : ''}`}
            >
              {/* Header row: Number, Title, and Category */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.22em',
                      color: isSelected || isHovered ? 'var(--accent-bronze)' : 'var(--text-muted)',
                      fontWeight: isSelected ? 600 : 500,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {item.number}
                  </span>
                  <span
                    style={{
                      width: '12px',
                      height: '1px',
                      backgroundColor: isSelected ? 'var(--accent-bronze)' : 'var(--border-subtle)',
                      opacity: isSelected ? 1 : isHovered ? 0.8 : 0.4,
                      transition: 'all 0.3s ease'
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.0625rem, 1.25vw, 1.25rem)',
                      letterSpacing: '0.06em',
                      color: isSelected
                        ? 'var(--text-heading)'
                        : isHovered
                        ? 'var(--text-heading)'
                        : 'var(--text-muted)',
                      fontWeight: isSelected ? 500 : 400,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {item.category && (
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.625rem',
                      letterSpacing: '0.18em',
                      color: isSelected
                        ? 'var(--accent-bronze)'
                        : isHovered
                        ? 'var(--accent-bronze)'
                        : 'var(--text-muted)',
                      textTransform: 'uppercase',
                      fontWeight: isSelected ? 600 : 500,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {item.category}
                  </span>
                )}
              </div>

              {/* Active Detailed View: Description, Deliverables or DetailTag */}
              {isSelected && (
                <div
                  key={`detail-${item.id || item.number}`}
                  className="interactive-point-detail-reveal"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    paddingTop: '4px'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'clamp(0.8125rem, 0.95vw, 0.875rem)',
                      lineHeight: 1.75,
                      color: 'var(--text-secondary)',
                      paddingLeft: 'clamp(0px, 1.4vw, 32px)',
                      margin: 0
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Optional Key Output Deliverable */}
                  {item.deliverables && item.deliverables.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '8px',
                        paddingLeft: 'clamp(0px, 1.4vw, 32px)',
                        paddingTop: '2px'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.5625rem',
                          letterSpacing: '0.2em',
                          color: 'var(--accent-bronze)',
                          textTransform: 'uppercase',
                          fontWeight: 600
                        }}
                      >
                        {item.keyOutputLabel || 'KEY OUTPUT'}:
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.75rem',
                          color: 'var(--text-primary)',
                          letterSpacing: '0.02em',
                          fontWeight: 500
                        }}
                      >
                        {item.deliverables[0]}
                      </span>
                    </div>
                  )}

                  {/* Optional Detail Tag */}
                  {item.detailTag && (
                    <div
                      style={{
                        paddingLeft: 'clamp(0px, 1.4vw, 32px)',
                        paddingTop: '2px'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.625rem',
                          letterSpacing: '0.18em',
                          color: 'var(--accent-bronze)',
                          textTransform: 'uppercase',
                          fontWeight: 600
                        }}
                      >
                        {item.detailTag}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section
      id={id}
      style={{
        backgroundColor,
        paddingTop,
        paddingBottom,
        position: 'relative'
      }}
    >
      <div className="container-custom">
        <div
          className={`interactive-arch-row ${isImageRight ? 'is-image-right' : 'is-image-left'}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(40px, 5.5vw, 88px)',
            width: '100%'
          }}
        >
          {isImageRight ? (
            <>
              {contentColumn}
              {imageColumn}
            </>
          ) : (
            <>
              {imageColumn}
              {contentColumn}
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes archDetailReveal {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .interactive-point-detail-reveal {
          animation: archDetailReveal 550ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: opacity, transform;
        }

        .interactive-point-item:focus-visible {
          border-top-color: var(--accent-bronze) !important;
        }

        @media (max-width: 1024px) {
          .interactive-arch-row {
            gap: clamp(24px, 3.5vw, 44px) !important;
          }
        }

        @media (max-width: 860px) {
          .interactive-arch-row,
          .interactive-arch-row.is-image-right,
          .interactive-arch-row.is-image-left {
            flex-direction: column !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
            gap: 32px !important;
          }
          /* Mobile Order: Image first, then content */
          .interactive-arch-image-col {
            width: 100% !important;
            max-width: 100% !important;
            flex: none !important;
            order: 1 !important;
          }
          .interactive-arch-content-col {
            width: 100% !important;
            max-width: 100% !important;
            flex: none !important;
            order: 2 !important;
          }
          .interactive-point-detail-reveal p,
          .interactive-point-detail-reveal div {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};
