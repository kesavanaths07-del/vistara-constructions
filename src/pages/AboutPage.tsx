import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Layers } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <main style={{ backgroundColor: '#F5F1E8', minHeight: '100vh', paddingTop: '140px', paddingBottom: '120px' }}>
      {/* Editorial Header */}
      <div className="container-custom" style={{ marginBottom: '80px' }}>
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
          OUR STORY &amp; ARCHITECTURAL HERITAGE
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)',
            lineHeight: 1.08,
            color: '#26221D',
            letterSpacing: '0.02em',
            marginBottom: '32px',
            maxWidth: '1000px'
          }}
        >
          ARCHITECTURE.{' '}
          <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-editorial)', color: '#B08A52' }}>
            CRAFTSMANSHIP.
          </span>{' '}
          LEGACY.
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)',
            lineHeight: 1.7,
            color: '#686158',
            maxWidth: '820px'
          }}
        >
          Vistara Constructions was founded with an uncompromising ambition: to build residences in South India that stand as enduring architectural legacies, deeply rooted in climate, craft, and material truth.
        </p>
      </div>

      {/* Hero Studio Banner */}
      <div
        style={{
          width: '100%',
          maxHeight: '75vh',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          borderTop: '1px solid rgba(50, 42, 32, 0.12)',
          borderBottom: '1px solid rgba(50, 42, 32, 0.12)',
          marginBottom: '100px',
          backgroundColor: '#EEE8DC'
        }}
      >
        <img
          src="/images/about/studio-heritage.jpg"
          alt="Vistara architectural studio and master craftsmanship atelier"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Narrative & Philosophy Grid */}
      <div className="container-custom" style={{ marginBottom: '120px' }}>
        <div
          className="about-narrative-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(40px, 6vw, 80px)'
          }}
        >
          <div style={{ gridColumn: 'span 5' }} className="about-col">
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                letterSpacing: '0.24em',
                color: '#B08A52',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px',
                fontWeight: 600
              }}
            >
              The Foundational Belief
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 5vw, 2.75rem)',
                lineHeight: 1.2,
                color: '#26221D',
                overflowWrap: 'break-word',
                wordBreak: 'break-word'
              }}
            >
              A RESIDENCE MUST OUTLIVE FLEETING TRENDS.
            </h2>
          </div>

          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
            className="about-col"
          >
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.0625rem', lineHeight: 1.8, color: '#24211D', overflowWrap: 'break-word' }}>
              In an era dominated by rapid, disposable construction, Vistara approaches the craft of building from a perspective of generational longevity. We do not build mere speculative square footage; we create private sanctuaries designed for decades of living.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.8, color: '#686158', overflowWrap: 'break-word' }}>
              Our work bridges high-performance structural engineering with ancient regional tectonics. We study the path of the sun across Chennai's coastline, the monsoon moisture of the Western Ghats, and the dry diurnal breezes of the Deccan Plateau. Every louver, courtyard opening, and stone block is oriented to harmonize with the climate.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership & Master Craftsmanship */}
      <div
        style={{
          backgroundColor: '#EEE8DC',
          paddingTop: 'clamp(80px, 10vw, 140px)',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
          borderTop: '1px solid rgba(50, 42, 32, 0.12)',
          borderBottom: '1px solid rgba(50, 42, 32, 0.12)',
          marginBottom: '120px'
        }}
      >
        <div className="container-custom">
          <div style={{ maxWidth: '700px', marginBottom: '64px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                letterSpacing: '0.26em',
                fontWeight: 600,
                color: '#B08A52',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              LEADERSHIP &amp; ARTISANS
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: '#26221D'
              }}
            >
              THE DISCIPLINE BEHIND THE LUXURY
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 'clamp(28px, 4vw, 40px)'
            }}
          >
            <div style={{ borderTop: '1px solid rgba(50, 42, 32, 0.15)', paddingTop: '28px' }}>
              <Compass size={24} color="#B08A52" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#26221D', marginBottom: '10px' }}>
                Architectural Coordination
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: 1.7, color: '#686158' }}>
                Collaborating seamlessly with leading architectural studios, translating complex structural cantilevers and parametric details into flawless reality.
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(50, 42, 32, 0.15)', paddingTop: '28px' }}>
              <Layers size={24} color="#B08A52" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#26221D', marginBottom: '10px' }}>
                Master Artisan Guilds
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: 1.7, color: '#686158' }}>
                Employing third-generation stone carvers, master teak woodworkers, and brass inlay craftsmen whose touch elevates raw minerals into poetry.
              </p>
            </div>

            <div style={{ borderTop: '1px solid rgba(50, 42, 32, 0.15)', paddingTop: '28px' }}>
              <ShieldCheck size={24} color="#B08A52" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#26221D', marginBottom: '10px' }}>
                Precision Quality Protocols
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: 1.7, color: '#686158' }}>
                Multi-stage laser alignment, acoustic sealing tests, structural thermal scanning, and proprietary waterproofing developed for severe coastal monsoons.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Studios Section */}
      <div className="container-custom" style={{ marginBottom: '100px' }}>
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              letterSpacing: '0.28em',
              fontWeight: 600,
              color: '#B08A52',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px'
            }}
          >
            GEOGRAPHIC PRESENCE
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: '#26221D' }}>
            STUDIOS ACROSS SOUTH INDIA
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '32px' }}>
          {[
            { city: 'Chennai', desc: 'Coastal Villa & Signature Residential Practice', address: 'Boat Club Road, R.A. Puram, Chennai' },
            { city: 'Bengaluru', desc: 'Monolithic Villas & Contemporary Urban Sanctuaries', address: 'Lavelle Road, Central Bengaluru' },
            { city: 'Hyderabad', desc: 'High-Altitude Deccan Stone Estates', address: 'Road No. 36, Jubilee Hills, Hyderabad' }
          ].map((loc) => (
            <div
              key={loc.city}
              style={{
                border: '1px solid rgba(50, 42, 32, 0.12)',
                borderRadius: '2px',
                padding: '36px 28px',
                backgroundColor: '#FAF8F3',
                boxShadow: '0 8px 24px rgba(45, 35, 25, 0.04)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#26221D', marginBottom: '8px' }}>
                {loc.city}
              </h3>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.14em',
                  color: '#B08A52',
                  display: 'block',
                  marginBottom: '14px',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                {loc.desc}
              </span>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: '#686158', lineHeight: 1.6 }}>
                {loc.address}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container-custom" style={{ textAlign: 'center' }}>
        <Link to="/contact" className="btn-primary">
          <span>CONNECT WITH OUR DIRECTORS</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-narrative-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .about-col {
            grid-column: span 1 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </main>
  );
};
