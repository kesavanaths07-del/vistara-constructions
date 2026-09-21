import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { articles } from '../data/journal';
import { EditorialSection } from './EditorialSection';

export const JournalSection: React.FC = () => {
  const article1 = articles[1] || articles[0]; // The Return of the Courtyard
  const article2 = articles[0]; // Designing for the South Indian Climate
  const secondaryArticles = articles.filter(
    (a) => a.id !== article1.id && a.id !== article2.id
  );

  // Magazine categories
  const publicationCategories = [
    { label: 'DESIGN', slug: 'design' },
    { label: 'MATERIALS', slug: 'materials' },
    { label: 'CLIMATE', slug: 'climate' },
    { label: 'CRAFT', slug: 'craft' }
  ];

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
              ARCHITECTURAL DISCOURSE
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
          spacingBottom="clamp(72px, 8vw, 110px)"
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

        {/* Editorial Topics Index */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            marginBottom: '40px',
            flexWrap: 'wrap',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '36px'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              letterSpacing: '0.24em',
              fontWeight: 600,
              color: 'var(--accent-bronze)',
              textTransform: 'uppercase'
            }}
          >
            EDITORIAL TOPICS:
          </span>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {publicationCategories.map((cat) => (
              <span
                key={cat.slug}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.2em',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase'
                }}
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>

        {/* Compact Grid for Remaining Secondary Articles (Requirement 21) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(24px, 3.5vw, 48px)'
          }}
        >
          {secondaryArticles.map((article) => (
            <Link
              key={article.id}
              to="/journal"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
              className="journal-card"
            >
              <div
                className="img-zoom-container"
                style={{
                  aspectRatio: '16 / 10',
                  backgroundColor: '#EEE8DC',
                  borderRadius: '1px'
                }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div className="project-meta-line" style={{ fontSize: '0.625rem' }}>
                <span>{article.category}</span>
                <span className="dot">·</span>
                <span>{article.date}</span>
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--text-heading)',
                  letterSpacing: '0.02em',
                  lineHeight: 1.25,
                  fontWeight: 400
                }}
              >
                {article.title}
              </h4>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
