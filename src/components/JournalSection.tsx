import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { articles } from '../data/journal';
import { MAIN_SECTIONS, formatSectionEyebrow } from '../data/sections';
import { EditorialSection } from './EditorialSection';

export const JournalSection: React.FC = () => {
  const article1 = articles[1] || articles[0]; // The Return of the Courtyard
  const article2 = articles[0]; // Designing for the South Indian Climate

  return (
    <section
      id="journal-section"
      style={{
        backgroundColor: '#F5F1E8',
        paddingTop: 'clamp(130px, 13vw, 180px)',
        paddingBottom: 'clamp(120px, 12vw, 170px)',
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
              {formatSectionEyebrow(MAIN_SECTIONS.ARCHITECTURAL_DISCOURSE)}
            </span>
            <h2
              className="heading-section"
              style={{
                color: 'var(--text-heading)',
                textTransform: 'uppercase'
              }}
            >
              FROM THE JOURNAL
            </h2>
          </div>

          <Link to="/journal" className="link-editorial">
            <span>VIEW ALL ESSAYS</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Featured Journal 1: IMAGE LEFT | TEXT RIGHT (Requirement 21) */}
        <EditorialSection
          index={0} // index 0 => IMAGE LEFT, TEXT RIGHT
          imageWidthPercent={58}
          spacingBottom="clamp(64px, 7vw, 96px)"
          imageSlot={
            <Link
              to="/journal"
              className="img-zoom-container"
              style={{
                display: 'block',
                aspectRatio: '16 / 10',
                backgroundColor: '#EEE8DC',
                textDecoration: 'none',
                borderRadius: '1px'
              }}
            >
              <img
                src={article1.image}
                alt={article1.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Link>
          }
          textSlot={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div className="project-meta-line">
                <span style={{ color: 'var(--accent-bronze)', fontWeight: 600 }}>FEATURED ESSAY</span>
                <span className="dot">·</span>
                <span>{article1.category}</span>
                <span className="dot">·</span>
                <span>{article1.readTime}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                  lineHeight: 1.2,
                  color: 'var(--text-heading)',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase'
                }}
              >
                {article1.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)'
                }}
              >
                {article1.excerpt}
              </p>

              <div style={{ paddingTop: '8px' }}>
                <Link to="/journal" className="link-editorial">
                  <span>READ ESSAY</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          }
        />

        {/* Featured Journal 2: TEXT LEFT | IMAGE RIGHT (Requirement 21) */}
        <EditorialSection
          index={1} // index 1 => TEXT LEFT, IMAGE RIGHT
          imageWidthPercent={58}
          spacingBottom="0"
          textSlot={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div className="project-meta-line">
                <span style={{ color: 'var(--accent-bronze)', fontWeight: 600 }}>ESSAY 02</span>
                <span className="dot">·</span>
                <span>{article2.category}</span>
                <span className="dot">·</span>
                <span>{article2.readTime}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
                  lineHeight: 1.2,
                  color: 'var(--text-heading)',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase'
                }}
              >
                {article2.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
                  lineHeight: 1.8,
                  color: 'var(--text-secondary)'
                }}
              >
                {article2.excerpt}
              </p>

              <div style={{ paddingTop: '8px' }}>
                <Link to="/journal" className="link-editorial">
                  <span>READ ESSAY</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          }
          imageSlot={
            <Link
              to="/journal"
              className="img-zoom-container"
              style={{
                display: 'block',
                aspectRatio: '16 / 10',
                backgroundColor: '#EEE8DC',
                textDecoration: 'none',
                borderRadius: '1px'
              }}
            >
              <img
                src={article2.image}
                alt={article2.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Link>
          }
        />
      </div>
    </section>
  );
};
