import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#26221D', backgroundColor: '#F5F1E8' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '16px' }}>Project Not Found</h1>
        <Link to="/projects" className="btn-primary">BACK TO ALL PROJECTS</Link>
      </main>
    );
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <main style={{ backgroundColor: '#F5F1E8', minHeight: '100vh', paddingTop: '110px', paddingBottom: '120px' }}>
      {/* Back Navigation Bar */}
      <div className="container-custom" style={{ marginBottom: '32px' }}>
        <Link
          to="/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            letterSpacing: '0.16em',
            color: '#686158',
            textDecoration: 'none',
            textTransform: 'uppercase',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#B08A52')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#686158')}
        >
          <ArrowLeft size={14} /> BACK TO SELECTED WORK
        </Link>
      </div>

      {/* Project Title & Metadata Header */}
      <div className="container-custom" style={{ marginBottom: '48px' }}>
        <div style={{ maxWidth: '960px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                letterSpacing: '0.24em',
                color: '#B08A52',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              {project.category} · {project.year}
            </span>
            <span style={{ color: 'rgba(50, 42, 32, 0.2)' }}>|</span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                letterSpacing: '0.2em',
                color: '#8A8175',
                textTransform: 'uppercase'
              }}
            >
              {project.location}
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.75rem, 5.5vw, 5rem)',
              lineHeight: 1.08,
              color: '#26221D',
              letterSpacing: '0.02em',
              marginBottom: '24px',
              textTransform: 'uppercase'
            }}
          >
            {project.title}
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
              fontStyle: 'italic',
              lineHeight: 1.5,
              color: '#B08A52'
            }}
          >
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Full-Bleed Architectural Hero Banner without dark tint */}
      <div
        style={{
          width: '100%',
          maxHeight: '80vh',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          borderTop: '1px solid rgba(50, 42, 32, 0.12)',
          borderBottom: '1px solid rgba(50, 42, 32, 0.12)',
          marginBottom: '80px',
          backgroundColor: '#EEE8DC'
        }}
      >
        <img
          src={project.heroImage}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Project Overview & Architectural Concept */}
      <div className="container-custom" style={{ marginBottom: '96px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(40px, 6vw, 80px)'
          }}
        >
          {/* Left Column: Concept Narrative (7 cols) */}
          <div style={{ gridColumn: 'span 7' }} className="project-detail-left">
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                letterSpacing: '0.26em',
                fontWeight: 600,
                color: '#B08A52',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '16px'
              }}
            >
              ARCHITECTURAL ESSAY
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                color: '#26221D',
                marginBottom: '28px',
                lineHeight: 1.2
              }}
            >
              SPATIAL CHOREOGRAPHY &amp; CLIMATIC HARMONY
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: '#24211D',
                marginBottom: '24px'
              }}
            >
              {project.overview}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#686158'
              }}
            >
              {project.architecturalConcept}
            </p>

            {/* Design Details Points */}
            <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {project.designDetails.map((detail, idx) => (
                <div
                  key={idx}
                  style={{
                    borderLeft: '2px solid #B08A52',
                    paddingLeft: '24px'
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.125rem',
                      color: '#26221D',
                      marginBottom: '8px'
                    }}
                  >
                    {detail.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      lineHeight: 1.7,
                      color: '#686158'
                    }}
                  >
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Project Specifications Table (5 cols) */}
          <div style={{ gridColumn: 'span 5' }} className="project-detail-right">
            <div
              style={{
                backgroundColor: '#FAF8F3',
                border: '1px solid rgba(50, 42, 32, 0.12)',
                borderRadius: '2px',
                boxShadow: '0 10px 30px rgba(45, 35, 25, 0.05)',
                padding: '36px 32px'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.24em',
                  fontWeight: 600,
                  color: '#B08A52',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '24px',
                  borderBottom: '1px solid rgba(50, 42, 32, 0.12)',
                  paddingBottom: '12px'
                }}
              >
                PROJECT METADATA
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {project.specs.map((spec, i) => (
                  <div key={i}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.5625rem',
                        letterSpacing: '0.2em',
                        color: '#B08A52',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '4px',
                        fontWeight: 600
                      }}
                    >
                      {spec.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.0625rem',
                        color: '#26221D'
                      }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Materials Palette Section */}
              <div style={{ marginTop: '36px', borderTop: '1px solid rgba(50, 42, 32, 0.12)', paddingTop: '24px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.625rem',
                    letterSpacing: '0.2em',
                    color: '#B08A52',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '14px',
                    fontWeight: 600
                  }}
                >
                  SPECIFIED MATERIALS
                </span>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.materialsUsed.map((m, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8125rem',
                        color: '#686158',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <CheckCircle2 size={13} color="#B08A52" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div style={{ marginTop: '36px' }}>
                <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>COMMISSION SIMILAR</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container-custom" style={{ marginBottom: '120px' }}>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.6875rem',
            letterSpacing: '0.28em',
            fontWeight: 600,
            color: '#B08A52',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '16px'
          }}
        >
          MONOGRAPH GALLERY
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            color: '#26221D',
            marginBottom: '40px'
          }}
        >
          ARCHITECTURAL VOLUMES &amp; TECTONICS
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px'
          }}
        >
          {project.galleryImages.map((img, i) => (
            <div
              key={i}
              className="img-zoom-container"
              style={{
                aspectRatio: '16 / 10',
                border: '1px solid rgba(50, 42, 32, 0.12)',
                borderRadius: '2px',
                backgroundColor: '#EEE8DC',
                boxShadow: '0 8px 24px rgba(45, 35, 25, 0.04)'
              }}
            >
              <img src={img} alt={`${project.title} detail ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Related Projects */}
      <div className="container-custom" style={{ borderTop: '1px solid rgba(50, 42, 32, 0.12)', paddingTop: '80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                letterSpacing: '0.24em',
                color: '#B08A52',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px',
                fontWeight: 600
              }}
            >
              CONTINUE EXPLORING
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#26221D' }}>
              RELATED RESIDENCES
            </h2>
          </div>
          <Link to="/projects" className="link-editorial">
            <span>ALL WORK</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '36px' }}>
          {relatedProjects.map((rel) => (
            <Link
              key={rel.id}
              to={`/projects/${rel.slug}`}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}
              className="project-card"
            >
              <div
                className="img-zoom-container"
                style={{
                  aspectRatio: '16 / 10',
                  border: '1px solid rgba(50, 42, 32, 0.12)',
                  borderRadius: '2px',
                  boxShadow: '0 8px 24px rgba(45, 35, 25, 0.04)'
                }}
              >
                <img src={rel.thumbnailImage} alt={rel.title} loading="lazy" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#26221D' }}>
                {rel.title}
              </h3>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: '#686158' }}>
                {rel.location}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .project-detail-left, .project-detail-right {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </main>
  );
};
