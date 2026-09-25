import React, { useState } from 'react';
import { ArrowUpRight, X, Clock } from 'lucide-react';
import { articles, Article } from '../data/journal';

export const JournalPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeTopic, setActiveTopic] = useState<string>('all');

  const EDITORIAL_TOPICS = [
    { label: 'ALL', slug: 'all' },
    { label: 'DESIGN', slug: 'design' },
    { label: 'MATERIALS', slug: 'materials' },
    { label: 'CLIMATE', slug: 'climate' },
    { label: 'CRAFT', slug: 'craft' }
  ];

  const filteredArticles = articles.filter((article) => {
    if (activeTopic === 'all') return true;
    const cat = article.category.toUpperCase();
    const title = article.title.toUpperCase();
    if (activeTopic === 'design') {
      return cat.includes('DESIGN') || cat.includes('SPATIAL') || cat.includes('PHILOSOPHY') || title.includes('DESIGN');
    }
    if (activeTopic === 'materials') {
      return cat.includes('MATERIAL') || cat.includes('CRAFT') || title.includes('MATERIAL');
    }
    if (activeTopic === 'climate') {
      return cat.includes('CLIMATE') || title.includes('CLIMATE');
    }
    if (activeTopic === 'craft') {
      return cat.includes('CRAFT') || title.includes('MATERIAL') || title.includes('PATINA');
    }
    return true;
  });

  // When "ALL" is selected, feature the lead article and arrange the remaining 3 in a balanced 3-column grid
  const isAllView = activeTopic === 'all';
  const leadArticle = isAllView && filteredArticles.length > 0 ? filteredArticles[0] : null;
  const secondaryArticles = isAllView ? filteredArticles.slice(1) : filteredArticles;

  return (
    <main style={{ backgroundColor: '#FAF8F3', minHeight: '100vh', paddingTop: '140px', paddingBottom: '120px' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
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
            EDITORIAL ARCHIVE
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5.5vw, 4.75rem)',
              lineHeight: 1.08,
              color: '#26221D',
              letterSpacing: '0.02em',
              marginBottom: '24px',
              overflowWrap: 'break-word',
              wordBreak: 'break-word'
            }}
          >
            THE VISTARA JOURNAL
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.3vw, 1.1875rem)',
              lineHeight: 1.7,
              color: '#686158'
            }}
          >
            Critical perspectives on tropical bioclimatic architecture, natural materiality, vernacular heritage, and structural endurance.
          </p>
        </div>

        {/* Editorial Topics Filter & Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            marginBottom: '48px',
            flexWrap: 'wrap',
            borderTop: '1px solid rgba(50, 42, 32, 0.12)',
            paddingTop: '28px'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              letterSpacing: '0.24em',
              fontWeight: 600,
              color: '#B08A52',
              textTransform: 'uppercase'
            }}
          >
            EDITORIAL TOPICS:
          </span>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            {EDITORIAL_TOPICS.map((topic) => {
              const isActive = activeTopic === topic.slug;
              return (
                <button
                  key={topic.slug}
                  onClick={() => setActiveTopic(topic.slug)}
                  style={{
                    background: 'none',
                    border: 'none',
                    borderBottom: isActive ? '1.5px solid #B08A52' : '1.5px solid transparent',
                    padding: '4px 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.2em',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#26221D' : '#8A8175',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease, border-color 0.2s ease'
                  }}
                  className="editorial-topic-btn"
                >
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. Lead Featured Essay (Active when "ALL" is selected) */}
        {leadArticle && (
          <div
            onClick={() => setSelectedArticle(leadArticle)}
            className="journal-lead-feature"
            style={{
              cursor: 'pointer',
              marginBottom: '56px'
            }}
          >
            <div className="journal-lead-grid">
              {/* Image */}
              <div
                className="img-zoom-container journal-lead-img-wrapper"
                style={{
                  aspectRatio: '16 / 10',
                  border: '1px solid rgba(50, 42, 32, 0.12)',
                  borderRadius: '2px',
                  backgroundColor: '#EEE8DC',
                  boxShadow: '0 12px 36px rgba(45, 35, 25, 0.05)',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={leadArticle.image}
                  alt={leadArticle.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Text */}
              <div className="journal-lead-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.625rem',
                      letterSpacing: '0.2em',
                      color: '#B08A52',
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}
                  >
                    FEATURED ESSAY
                  </span>
                  <span style={{ color: 'rgba(50, 42, 32, 0.2)' }}>·</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.625rem',
                      letterSpacing: '0.18em',
                      color: 'var(--text-secondary)',
                      textTransform: 'uppercase',
                      fontWeight: 500
                    }}
                  >
                    {leadArticle.category}
                  </span>
                  <span style={{ color: 'rgba(50, 42, 32, 0.2)' }}>·</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', color: '#8A8175' }}>
                    {leadArticle.date} · {leadArticle.readTime}
                  </span>
                </div>

                <h2
                  className="journal-lead-title"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.5rem, 2.8vw, 2.35rem)',
                    lineHeight: 1.18,
                    color: '#26221D',
                    letterSpacing: '0.02em',
                    transition: 'color 0.3s ease',
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word'
                  }}
                >
                  {leadArticle.title}
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
                    lineHeight: 1.8,
                    color: '#686158',
                    overflowWrap: 'break-word'
                  }}
                >
                  {leadArticle.excerpt}
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.16em',
                    color: '#B08A52',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginTop: '8px'
                  }}
                >
                  <span>Read essay</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>

            {/* Subtle Divider between Lead and Secondary Articles */}
            <div
              style={{
                borderTop: '1px solid rgba(50, 42, 32, 0.10)',
                marginTop: 'clamp(44px, 5.5vw, 64px)'
              }}
            />
          </div>
        )}

        {/* 2. Balanced Editorial Archive Grid */}
        <div
          className={`journal-archive-grid ${
            secondaryArticles.length === 1
              ? 'journal-grid-single'
              : secondaryArticles.length === 2
              ? 'journal-grid-two'
              : 'journal-grid-three'
          }`}
        >
          {secondaryArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              style={{
                cursor: 'pointer',
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
                  border: '1px solid rgba(50, 42, 32, 0.12)',
                  borderRadius: '2px',
                  backgroundColor: '#EEE8DC',
                  boxShadow: '0 8px 24px rgba(45, 35, 25, 0.04)',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.625rem',
                    letterSpacing: '0.2em',
                    color: '#B08A52',
                    textTransform: 'uppercase',
                    fontWeight: 600
                  }}
                >
                  {article.category}
                </span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', color: '#8A8175' }}>
                  {article.date} · {article.readTime}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
                  lineHeight: 1.25,
                  color: '#26221D',
                  letterSpacing: '0.02em',
                  transition: 'color 0.3s ease',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word'
                }}
                className="journal-title"
              >
                {article.title}
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  lineHeight: 1.75,
                  color: '#686158',
                  overflowWrap: 'break-word'
                }}
              >
                {article.excerpt}
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.14em',
                  color: '#B08A52',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginTop: 'auto',
                  paddingTop: '6px'
                }}
              >
                <span>Read essay</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal with Warm Ivory Paper Styling */}
      {selectedArticle && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(30, 24, 15, 0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 'clamp(12px, 3vw, 24px)'
          }}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            style={{
              backgroundColor: '#FAF8F3',
              border: '1px solid rgba(50, 42, 32, 0.15)',
              borderRadius: '2px',
              boxShadow: '0 25px 70px rgba(30, 20, 10, 0.25)',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: 'clamp(28px, 5vw, 64px) clamp(18px, 4vw, 48px)',
              boxSizing: 'border-box',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: '1px solid rgba(50, 42, 32, 0.15)',
                color: '#26221D',
                padding: '8px',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
              aria-label="Close article"
            >
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', letterSpacing: '0.2em', color: '#B08A52', textTransform: 'uppercase', fontWeight: 600 }}>
                {selectedArticle.category}
              </span>
              <span style={{ color: 'rgba(50, 42, 32, 0.2)' }}>·</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: '#8A8175', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={12} /> {selectedArticle.readTime}
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                lineHeight: 1.2,
                color: '#26221D',
                marginBottom: '28px',
                overflowWrap: 'break-word'
              }}
            >
              {selectedArticle.title}
            </h2>

            <div style={{ aspectRatio: '16 / 9', marginBottom: '32px', overflow: 'hidden', border: '1px solid rgba(50, 42, 32, 0.12)', borderRadius: '2px' }}>
              <img src={selectedArticle.image} alt={selectedArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx} style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: '#24211D' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* Lead feature layout */
        .journal-lead-grid {
          display: grid;
          grid-template-columns: 58% 1fr;
          gap: clamp(32px, 4vw, 56px);
          align-items: center;
        }
        .journal-lead-content {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .journal-lead-feature:hover .journal-lead-title {
          color: #B08A52 !important;
        }
        .journal-card:hover .journal-title {
          color: #B08A52 !important;
        }
        .editorial-topic-btn:hover {
          color: #B08A52 !important;
        }

        /* Balanced 3-column desktop layout */
        .journal-grid-three {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(32px, 3.5vw, 48px);
        }
        .journal-grid-two {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(32px, 4vw, 56px);
          max-width: 960px;
        }
        .journal-grid-single {
          display: grid;
          grid-template-columns: 1fr;
          max-width: 680px;
        }

        /* Tablet layout (768px - 1024px) */
        @media (max-width: 1024px) and (min-width: 769px) {
          .journal-lead-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .journal-grid-three {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 36px !important;
          }
        }

        /* Dedicated Mobile Editorial Layout (< 768px down to 320px) */
        @media (max-width: 768px) {
          .journal-lead-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .journal-grid-three, .journal-grid-two, .journal-grid-single {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .journal-card {
            padding-bottom: 36px;
            border-bottom: 1px solid rgba(50, 42, 32, 0.08);
            gap: 14px !important;
          }
          .journal-card:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .journal-lead-feature {
            margin-bottom: 40px !important;
          }
        }
      `}</style>
    </main>
  );
};
