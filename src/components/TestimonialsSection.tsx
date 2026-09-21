import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials-section"
      style={{
        backgroundColor: '#EEE8DC',
        paddingTop: 'clamp(120px, 12vw, 180px)',
        paddingBottom: 'clamp(120px, 12vw, 180px)',
        position: 'relative'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '1040px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="micro-label" style={{ justifyContent: 'center' }}>
            CLIENT REFLECTIONS
          </span>
        </div>

        {/* Large Editorial Italic Serif Quote */}
        <div style={{ textAlign: 'center', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p
            key={current.id}
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.25rem, 2.8vw, 2.75rem)',
              lineHeight: 1.45,
              color: 'var(--text-heading)',
              fontStyle: 'italic',
              letterSpacing: '0.01em',
              marginBottom: '36px'
            }}
          >
            “{current.quote}”
          </p>

          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '4px'
              }}
            >
              — {current.client}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase'
              }}
            >
              {current.project} · {current.location}
            </span>
          </div>
        </div>

        {/* Restrained Editorial Controls */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            marginTop: '48px'
          }}
        >
          <button
            onClick={prev}
            aria-label="Previous quote"
            style={{
              width: '44px',
              height: '44px',
              border: '1px solid var(--border-subtle)',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-bronze)';
              e.currentTarget.style.color = 'var(--accent-bronze)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <ArrowLeft size={16} />
          </button>

          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'var(--accent-bronze)',
              fontWeight: 600
            }}
          >
            0{currentIndex + 1} / 0{testimonials.length}
          </span>

          <button
            onClick={next}
            aria-label="Next quote"
            style={{
              width: '44px',
              height: '44px',
              border: '1px solid var(--border-subtle)',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-bronze)';
              e.currentTarget.style.color = 'var(--accent-bronze)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
