import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section
      id="contact-cta-section"
      style={{
        backgroundColor: '#EEE8DC',
        paddingTop: 'clamp(140px, 15vw, 210px)',
        paddingBottom: 'clamp(140px, 15vw, 210px)',
        position: 'relative',
        borderTop: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container-custom" style={{ maxWidth: '920px', textAlign: 'center' }}>
        {/* Eyebrow */}
        <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'center' }}>
          <span className="micro-label">05 — INQUIRIES &amp; ENGAGEMENT</span>
        </div>

        {/* Centered Destination Headline (Requirement 24) */}
        <h2
          className="heading-section"
          style={{
            color: 'var(--text-heading)',
            lineHeight: 1.1,
            marginBottom: '32px',
            textTransform: 'uppercase',
            fontSize: 'clamp(1.875rem, 5vw, 4.25rem)'
          }}
        >
          LET'S BUILD SOMETHING <br />
          <span
            style={{
              fontFamily: 'var(--font-editorial)',
              fontStyle: 'italic',
              color: 'var(--accent-bronze)',
              textTransform: 'none'
            }}
          >
            meaningful.
          </span>
        </h2>

        {/* Calm, Spacious Supporting Copy */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.9375rem, 1.35vw, 1.25rem)',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            margin: '0 auto 40px auto'
          }}
        >
          Start a conversation about your next private residence, coastal sanctuary or architectural commission.
        </p>

        {/* Centered Action Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <Link
            to="/contact"
            className="btn-primary contact-cta-btn"
            style={{
              padding: '16px 36px',
              minHeight: '48px',
              maxWidth: '300px',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Subtle Minimalist Studio Coordinates */}
        <div
          className="contact-cta-coords"
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '36px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div className="project-meta-line" style={{ fontSize: '0.6875rem' }}>
            <span>CHENNAI</span>
            <span className="dot">·</span>
            <span>BENGALURU</span>
            <span className="dot">·</span>
            <span>HYDERABAD</span>
          </div>

          <a
            href="mailto:contact@vistaraconstructions.com"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              letterSpacing: '0.08em',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              overflowWrap: 'break-word',
              wordBreak: 'break-word'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-bronze)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            contact@vistaraconstructions.com
          </a>
        </div>
      </div>
    </section>
  );
};
