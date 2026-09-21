import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Hammer, Palette, ClipboardCheck, Trees } from 'lucide-react';
import { EditorialSection } from '../components/EditorialSection';
import { ArchitecturalImage } from '../components/ArchitecturalImage';

export const ExpertisePage: React.FC = () => {
  const capabilities = [
    {
      id: 'architecture',
      icon: <Compass size={24} color="#B08A52" />,
      title: 'Architecture',
      tagline: 'Concept development and architectural coordination.',
      description: 'We collaborate with world-renowned architects and our in-house master planners to develop spatial narratives that respect local microclimates, daylight gradients, and vernacular aesthetics.',
      points: ['Volumetric & Solar Trajectory Studies', 'Courtyard & Wind-Tunnel Engineering', 'Coordination with Principal Architects', 'High-Resolution 3D Visualization'],
      image: '/images/expertise/architecture-design.jpg',
      aspectRatio: '4 / 3'
    },
    {
      id: 'construction',
      icon: <Hammer size={24} color="#B08A52" />,
      title: 'Engineering & Construction',
      tagline: 'High-quality execution and site management.',
      description: 'The core of our heritage. We bring structural discipline, uncompromising engineering precision, and post-tensioned concrete expertise to realize even the most audacious architectural designs.',
      points: ['Advanced Concrete & Steel Post-Tensioning', 'Tightest Millimetric Tolerances', 'Monsoon Waterproofing Membranes', 'Zero-Accident Site Safety Protocols'],
      image: '/images/expertise/engineering-construction.jpg',
      aspectRatio: '16 / 11'
    },
    {
      id: 'interiors',
      icon: <Palette size={24} color="#B08A52" />,
      title: 'Interiors & Tactility',
      tagline: 'Material, lighting and interior detailing.',
      description: 'Every internal space is treated as an acoustic, tactile sanctuary. We sculpt continuous stone surfaces, concealed lighting troughs, and flush floor-to-ceiling doors with invisible hardware.',
      points: ['Honed Travertine & Granite Inlays', 'Bespoke Teak Millwork & Cabinetry', 'Concealed Architectural Lighting', 'Acoustic Soundproofing Engineering'],
      image: '/images/expertise/interiors-tactility.jpg',
      aspectRatio: '4 / 3'
    },
    {
      id: 'project-management',
      icon: <ClipboardCheck size={24} color="#B08A52" />,
      title: 'Project Directorship',
      tagline: 'Planning, coordination and delivery.',
      description: 'Rigorous schedule control, transparent material procurement, and unified coordination across structural, electrical, mechanical, and landscape consultants.',
      points: ['Transparent Cost Breakdown', 'Digital Project Tracking Dashboard', 'Strict Milestone Accountability', 'Vendor Sourcing & Vetting'],
      image: '/images/expertise/project-directorship.jpg',
      aspectRatio: '16 / 11'
    },
    {
      id: 'landscape',
      icon: <Trees size={24} color="#B08A52" />,
      title: 'Integrated Landscape',
      tagline: 'Integrated outdoor environments.',
      description: 'Architecture and landscape dissolve into one another. We integrate native South Indian tropical species, granite reflection ponds, and deep shaded garden pavilions.',
      points: ['Native Drought & Monsoon Flora', 'Shallow Evaporative Reflection Pools', 'Perimeter Vegetative Microclimate Buffer', 'Subterranean Rainwater Harvesting'],
      image: '/images/expertise/integrated-landscape.jpg',
      aspectRatio: '4 / 3'
    }
  ];

  return (
    <main style={{ backgroundColor: '#FAF8F3', minHeight: '100vh', paddingTop: '150px', paddingBottom: '120px' }}>
      {/* Header */}
      <div className="container-custom" style={{ marginBottom: '90px' }}>
        <span className="micro-label" style={{ marginBottom: '16px' }}>
          DISCIPLINE &amp; MASTERY
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.08,
            color: 'var(--text-heading)',
            letterSpacing: '0.02em',
            marginBottom: '24px',
            maxWidth: '900px',
            textTransform: 'uppercase'
          }}
        >
          COMPREHENSIVE CAPABILITIES
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.25vw, 1.1875rem)',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            maxWidth: '750px'
          }}
        >
          From the initial architectural line through structural execution, bespoke interior joinery, and mature tropical landscaping — our multidisciplinary team delivers turnkey architectural excellence.
        </p>
      </div>

      {/* Alternating Capabilities Presentation (Requirement 20) */}
      <div className="container-custom" style={{ marginBottom: '120px' }}>
        {capabilities.map((cap, index) => {
          const numberStr = `0${index + 1}`;

          return (
            <EditorialSection
              key={cap.id}
              index={index} // 0 => Image Left, 1 => Text Left, 2 => Image Left, etc.
              imageWidthPercent={56}
              spacingBottom="clamp(110px, 11vw, 160px)"
              imageSlot={
                <div className="img-zoom-container" style={{ borderRadius: '1px' }}>
                  <ArchitecturalImage
                    src={cap.image}
                    alt={cap.title}
                    aspectRatio={cap.aspectRatio}
                  />
                </div>
              }
              textSlot={
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Eyebrow & Number */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div className="editorial-project-number" style={{ margin: 0 }}>
                      {numberStr} — DISCIPLINE
                    </div>
                    <div>{cap.icon}</div>
                  </div>

                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.75rem, 2.5vw, 2.35rem)',
                      color: 'var(--text-heading)',
                      textTransform: 'uppercase',
                      lineHeight: 1.15
                    }}
                  >
                    {cap.title}
                  </h2>

                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      letterSpacing: '0.06em',
                      color: 'var(--accent-bronze)',
                      fontWeight: 600
                    }}
                  >
                    {cap.tagline}
                  </span>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.75,
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {cap.description}
                  </p>

                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      marginTop: '8px',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '16px'
                    }}
                  >
                    {cap.points.map((pt, i) => (
                      <li
                        key={i}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.8125rem',
                          color: 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-bronze)' }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              }
            />
          );
        })}
      </div>

      {/* CTA Box: Centered Editorial Destination */}
      <div className="container-custom">
        <div
          style={{
            backgroundColor: '#EEE8DC',
            border: '1px solid var(--border-subtle)',
            borderRadius: '1px',
            padding: 'clamp(32px, 5vw, 72px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '28px'
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.35rem, 2.2vw, 2rem)',
                color: 'var(--text-heading)',
                marginBottom: '10px',
                textTransform: 'uppercase'
              }}
            >
              Discuss Your Architectural Scope
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Speak directly with our senior project directors regarding site appraisal, climatic feasibility, and procurement.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-primary"
            style={{ minHeight: '48px', padding: '14px 28px' }}
          >
            <span>SCHEDULE A CONSULTATION</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
};
