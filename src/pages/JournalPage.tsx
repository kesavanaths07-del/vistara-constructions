import React, { useState } from 'react';
import { ArrowUpRight, X, Clock } from 'lucide-react';
import { articles, Article } from '../data/journal';

export const JournalPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <main style={{ backgroundColor: '#FAF8F3', minHeight: '100vh', paddingTop: '140px', paddingBottom: '120px' }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '72px' }}>
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
              overflowWrap: 'break-word'
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

        {/* Articles List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: 'clamp(32px, 4vw, 56px)' }}>
          {articles.map((article) => (
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
                  boxShadow: '0 8px 24px rgba(45, 35, 25, 0.04)'
                }}
              >
                <img src={article.image} alt={article.title} loading="lazy" />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                  fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                  lineHeight: 1.3,
                  color: '#26221D',
                  letterSpacing: '0.02em',
                  transition: 'color 0.3s ease'
                }}
                className="journal-title"
              >
                {article.title}
              </h2>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: 1.7, color: '#686158' }}>
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
                  fontWeight: 600
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
        .journal-card:hover .journal-title {
          color: #B08A52 !important;
        }
      `}</style>
    </main>
  );
};
