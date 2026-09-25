import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#28231D',
        borderTop: '1px solid rgba(250, 248, 243, 0.08)',
        paddingTop: 'clamp(80px, 9vw, 120px)',
        paddingBottom: '56px',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Main Minimal Editorial Footer Grid */}
        <div
          className="footer-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(32px, 4vw, 56px)',
            marginBottom: '72px'
          }}
        >
          {/* Brand Mark (5 cols) */}
          <div style={{ gridColumn: 'span 5' }} className="footer-brand-col">
            <Link
              to="/"
              onClick={scrollToTop}
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '2px',
                marginBottom: '24px'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.625rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  color: '#FAF8F3',
                  lineHeight: 1
                }}
              >
                VISTARA
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  letterSpacing: '0.36em',
                  color: 'var(--accent-champagne)',
                  lineHeight: 1
                }}
              >
                CONSTRUCTIONS
              </span>
            </Link>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: 'rgba(250, 248, 243, 0.65)',
                maxWidth: '340px',
                lineHeight: 1.8
              }}
            >
              Architecture, craftsmanship and generational permanence across South India.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div style={{ gridColumn: 'span 3' }} className="footer-nav-col">
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                letterSpacing: '0.24em',
                color: 'var(--accent-champagne)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '18px',
                fontWeight: 600
              }}
            >
              NAVIGATION
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Projects', path: '/projects' },
                { name: 'About', path: '/about' },
                { name: 'Expertise', path: '/expertise' },
                { name: 'Journal', path: '/journal' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      color: 'rgba(250, 248, 243, 0.75)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C5A875')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 248, 243, 0.75)')}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Studios (2 cols) */}
          <div style={{ gridColumn: 'span 2' }} className="footer-studios-col">
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                letterSpacing: '0.24em',
                color: 'var(--accent-champagne)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '18px',
                fontWeight: 600
              }}
            >
              STUDIOS
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Chennai', 'Bengaluru', 'Hyderabad'].map((city) => (
                <li
                  key={city}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    color: 'rgba(250, 248, 243, 0.75)'
                  }}
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links (2 cols) */}
          <div style={{ gridColumn: 'span 2' }} className="footer-social-col">
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                letterSpacing: '0.24em',
                color: 'var(--accent-champagne)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '18px',
                fontWeight: 600
              }}
            >
              CONNECT
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Instagram', url: 'https://instagram.com' },
                { name: 'LinkedIn', url: 'https://linkedin.com' },
                { name: 'Facebook', url: 'https://facebook.com' },
                { name: 'YouTube', url: 'https://youtube.com' }
              ].map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      color: 'rgba(250, 248, 243, 0.75)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C5A875')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 248, 243, 0.75)')}
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Minimal Copyright Line */}
        <div
          className="footer-bottom-bar"
          style={{
            borderTop: '1px solid rgba(250, 248, 243, 0.06)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              color: 'rgba(250, 248, 243, 0.45)',
              letterSpacing: '0.04em'
            }}
          >
            © {currentYear} Vistara Constructions. All rights reserved.
          </span>

          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              color: 'rgba(250, 248, 243, 0.45)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase'
            }}
          >
            CHENNAI · BENGALURU · HYDERABAD
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
          .footer-brand-col, .footer-nav-col, .footer-studios-col, .footer-social-col {
            grid-column: span 1 !important;
            width: 100% !important;
          }
        }
        @media (max-width: 600px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .footer-brand-col, .footer-nav-col, .footer-studios-col, .footer-social-col {
            grid-column: span 1 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </footer>
  );
};
