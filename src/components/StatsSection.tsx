import React from 'react';
import { stats } from '../data/stats';

export const StatsSection: React.FC = () => {
  return (
    <section
      id="stats-section"
      style={{
        backgroundColor: '#FAF8F3',
        paddingTop: 'clamp(90px, 10vw, 140px)',
        paddingBottom: 'clamp(90px, 10vw, 140px)',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
            gap: 'clamp(24px, 3.5vw, 56px)'
          }}
        >
          {stats.map((item) => (
            <div
              key={item.id}
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.25rem, 5vw, 4.25rem)',
                    lineHeight: 1,
                    color: 'var(--text-heading)',
                    fontWeight: 400
                  }}
                >
                  {item.value}
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  letterSpacing: '0.22em',
                  fontWeight: 600,
                  color: 'var(--accent-bronze)',
                  textTransform: 'uppercase'
                }}
              >
                {item.label}
              </span>

              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6
                }}
              >
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
