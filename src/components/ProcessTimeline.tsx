import React, { useState } from 'react';
import { ArchitecturalImage } from './ArchitecturalImage';

interface Step {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

const steps: Step[] = [
  {
    number: '01',
    phase: 'DISCOVERY',
    title: 'VISION',
    description: 'Understanding spatial aspirations, lifestyle rhythms, topography, and solar orientation.',
    deliverables: ['Site Solar & Wind Study', 'Lifestyle Spatial Brief', 'Feasibility Assessment']
  },
  {
    number: '02',
    phase: 'ARCHITECTURE',
    title: 'DESIGN',
    description: 'Developing architectural language, spatial volumes, courtyard placements, and airflow corridors.',
    deliverables: ['Volumetric Study', 'Courtyard & Verandah Layouts', '3D Spatial Visualizer']
  },
  {
    number: '03',
    phase: 'ENGINEERING',
    title: 'DETAIL',
    description: 'Resolving stone fluting, timber joinery, post-tensioning, and MEP integration down to the millimeter.',
    deliverables: ['Material Sourcing Specs', 'Structural Engineering', 'Joinery Full-Scale Mockups']
  },
  {
    number: '04',
    phase: 'CRAFTSMANSHIP',
    title: 'BUILD',
    description: 'Executing construction with disciplined project management, master craftsmen, and strict tolerances.',
    deliverables: ['On-Site Quality Audits', 'Master Artisan Joinery', 'Milestone Transparency']
  },
  {
    number: '05',
    phase: 'HANDOVER',
    title: 'DELIVER',
    description: 'Commissioning environmental systems and delivering a finished home built for generations.',
    deliverables: ['Acoustic & Thermal Audit', 'Legacy Maintenance Charter', 'Turnkey Handover']
  }
];

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="process-section"
      style={{
        backgroundColor: '#E8E0D2',
        paddingTop: 'clamp(120px, 12vw, 180px)',
        paddingBottom: 'clamp(120px, 12vw, 180px)',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <div style={{ maxWidth: '780px', marginBottom: 'clamp(36px, 4.5vw, 48px)' }}>
          <span className="micro-label" style={{ marginBottom: '14px' }}>
            METHODOLOGY
          </span>
          <h2
            className="heading-section"
            style={{
              color: 'var(--text-heading)',
              textTransform: 'uppercase'
            }}
          >
            FROM VISION TO REALITY
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              marginTop: '16px',
              lineHeight: 1.7
            }}
          >
            Our disciplined five-phase process ensures architectural purity from initial sketch to generational handover.
          </p>
        </div>

        {/* Methodology Dedicated Title/Hero Image */}
        <div
          className="img-zoom-container methodology-hero-wrapper"
          style={{
            marginBottom: 'clamp(48px, 6vw, 72px)',
            borderRadius: '1px',
            border: '1px solid var(--border-subtle)',
            overflow: 'hidden'
          }}
        >
          <ArchitecturalImage
            src="/images/about/methodology-process.webp"
            fallbackSrc="/images/about/methodology-process.jpg"
            alt="Vistara Architectural Methodology — Drafting table with villa blueprint, natural stone, solid teak, brass fittings, and measuring tools"
            aspectRatio="16 / 9"
            className="methodology-process-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </div>

        {/* 5-Phase Horizontal Sequence */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '24px',
            position: 'relative'
          }}
          className="timeline-grid"
        >
          {steps.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(index)}
                style={{
                  borderTop: isSelected ? '2px solid var(--accent-bronze)' : '1px solid var(--border-subtle)',
                  paddingTop: '28px',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}
                className="timeline-item"
              >
                {/* Number & Phase */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      color: isSelected ? 'var(--accent-bronze)' : 'var(--text-muted)',
                      fontWeight: 600,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {step.number}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.625rem',
                      letterSpacing: '0.2em',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}
                  >
                    {step.phase}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    color: isSelected ? 'var(--accent-bronze)' : 'var(--text-heading)',
                    letterSpacing: '0.08em',
                    fontWeight: 400,
                    transition: 'color 0.3s ease'
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)'
                  }}
                >
                  {step.description}
                </p>

                {/* Deliverables */}
                <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.5625rem',
                      letterSpacing: '0.2em',
                      color: 'var(--accent-bronze)',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '4px',
                      fontWeight: 600
                    }}
                  >
                    Key Output
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      display: 'block'
                    }}
                  >
                    {step.deliverables[0]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .methodology-hero-wrapper {
          width: 100%;
          max-width: 100%;
        }
        @media (max-width: 768px) {
          .methodology-hero-wrapper .arch-img-wrapper {
            aspect-ratio: 16 / 10 !important;
          }
        }
        @media (max-width: 480px) {
          .methodology-hero-wrapper .arch-img-wrapper {
            aspect-ratio: 4 / 3 !important;
          }
        }
        @media (max-width: 1100px) and (min-width: 680px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 679px) {
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .timeline-item {
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(50, 42, 32, 0.12);
          }
        }
        .timeline-item:hover {
          border-top-color: var(--accent-bronze) !important;
        }
      `}</style>
    </section>
  );
};
