import React, { useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface MobileSliderItem {
  id: string;
  number: string;
  category?: string;
  title: string;
  overlayLabel?: string;
  description: string;
  deliverables?: string[];
  keyOutputLabel?: string;
  detailTag?: string;
  origin?: string;
  image: string;
  imageAlt?: string;
}

export interface MobileSectionSliderProps {
  items: MobileSliderItem[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
  accentColor?: string;
  ariaLabel?: string;
  aspectRatio?: string;
}

export const MobileSectionSlider: React.FC<MobileSectionSliderProps> = ({
  items,
  activeIndex,
  onSelectIndex,
  accentColor = 'var(--accent-bronze)',
  ariaLabel = 'Architectural gallery slider',
  aspectRatio = '4 / 3'
}) => {
  // Touch swipe gesture tracking
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchScrollLock = useRef<'horizontal' | 'vertical' | null>(null);

  // Naturally loop between points
  const handlePrev = useCallback(() => {
    onSelectIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  }, [activeIndex, items.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    onSelectIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, items.length, onSelectIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchScrollLock.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = e.touches[0].clientX - touchStartX.current;
    const diffY = e.touches[0].clientY - touchStartY.current;

    if (touchScrollLock.current === null) {
      if (Math.abs(diffX) < 7 && Math.abs(diffY) < 7) return;

      if (Math.abs(diffY) >= Math.abs(diffX)) {
        // Vertical gesture -> scroll page naturally with zero hindrance
        touchScrollLock.current = 'vertical';
        return;
      } else {
        // Horizontal gesture -> lock to slider
        touchScrollLock.current = 'horizontal';
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchScrollLock.current === 'horizontal' && touchStartX.current !== null) {
      const diffX = e.changedTouches[0].clientX - touchStartX.current;
      const swipeThreshold = 36;

      if (diffX < -swipeThreshold) {
        handleNext();
      } else if (diffX > swipeThreshold) {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    touchScrollLock.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  const activeItem = items[activeIndex] || items[0];
  if (!activeItem) return null;

  const displayOverlayTitle = activeItem.overlayLabel
    ? activeItem.overlayLabel.replace(/^[0-9]+\s*—\s*/, '')
    : activeItem.category || activeItem.title;

  return (
    <div
      className="mobile-section-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        outline: 'none',
        position: 'relative'
      }}
    >
      {/* 4. Large Section Image with inside Navigation Controls & Bottom Overlay Label */}
      <div
        className="mobile-slider-image-frame"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => {
          touchStartX.current = null;
          touchStartY.current = null;
          touchScrollLock.current = null;
        }}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio,
          backgroundColor: '#EAE3D6',
          borderRadius: '1px',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          touchAction: 'pan-y',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          boxShadow: '0 12px 32px rgba(40, 35, 29, 0.08)'
        }}
      >
        {/* Layered Architectural Images with Crossfade */}
        {items.map((item, idx) => {
          const isCurrent = activeIndex === idx;
          return (
            <img
              key={item.id || item.number || idx}
              src={item.image}
              alt={item.imageAlt || item.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: isCurrent ? 1 : 0,
                transform: isCurrent ? 'scale(1)' : 'scale(1.03)',
                transition:
                  'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
                pointerEvents: isCurrent ? 'auto' : 'none'
              }}
            />
          );
        })}

        {/* Subtle Bottom Shadow Gradient for Text Contrast */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            background:
              'linear-gradient(to top, rgba(20, 18, 16, 0.55) 0%, rgba(20, 18, 16, 0) 100%)',
            pointerEvents: 'none',
            zIndex: 2
          }}
        />

        {/* 6. Left Navigation Arrow (Vertically Centered on Left Edge Inside Image) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous slide"
          className="slider-arrow-btn"
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(32, 28, 24, 0.72)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(250, 248, 243, 0.28)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FAF8F3',
            cursor: 'pointer',
            zIndex: 4,
            padding: 0,
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            touchAction: 'manipulation'
          }}
        >
          <ChevronLeft size={18} />
        </button>

        {/* 6. Right Navigation Arrow (Vertically Centered on Right Edge Inside Image) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next slide"
          className="slider-arrow-btn"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(32, 28, 24, 0.72)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(250, 248, 243, 0.28)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FAF8F3',
            cursor: 'pointer',
            zIndex: 4,
            padding: 0,
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            touchAction: 'manipulation'
          }}
        >
          <ChevronRight size={18} />
        </button>

        {/* 5. Overlay Label at the Bottom of the Image */}
        <div
          className="slider-overlay-badge"
          style={{
            position: 'absolute',
            bottom: '14px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(30, 26, 22, 0.82)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            padding: '7px 16px',
            borderRadius: '1px',
            border: '1px solid rgba(176, 138, 82, 0.42)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            zIndex: 4,
            pointerEvents: 'none',
            maxWidth: 'calc(100% - 104px)',
            whiteSpace: 'nowrap'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              letterSpacing: '0.2em',
              color: 'var(--accent-champagne)',
              fontWeight: 600,
              flexShrink: 0
            }}
          >
            {activeItem.number}
          </span>
          <span
            style={{
              width: '6px',
              height: '1px',
              backgroundColor: 'rgba(197, 168, 117, 0.55)',
              flexShrink: 0
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              letterSpacing: '0.16em',
              color: 'var(--text-ivory)',
              textTransform: 'uppercase',
              fontWeight: 600,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {displayOverlayTitle}
          </span>
        </div>
      </div>

      {/* 5. Interactive Points Content Below Image: Description, Tags, and Pagination */}
      <div
        className="mobile-slider-details-card"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.42)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderTop: `2px solid ${accentColor}`,
          borderLeft: '1px solid var(--border-subtle)',
          borderRight: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          borderRadius: '1px',
          padding: '18px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          boxShadow: '0 6px 20px rgba(40, 35, 29, 0.03)'
        }}
        aria-live="polite"
      >
        {/* Point Title / Subtitle */}
        {activeItem.title && activeItem.category && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px'
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.0625rem',
                letterSpacing: '0.04em',
                color: 'var(--text-heading)',
                fontWeight: 500,
                textTransform: 'uppercase',
                margin: 0
              }}
            >
              {activeItem.title}
            </h3>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                letterSpacing: '0.16em',
                color: accentColor,
                fontWeight: 600,
                textTransform: 'uppercase'
              }}
            >
              {activeItem.category}
            </span>
          </div>
        )}

        {/* Point Description */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            margin: 0
          }}
        >
          {activeItem.description}
        </p>

        {/* Optional Deliverables / Key Output */}
        {activeItem.deliverables && activeItem.deliverables.length > 0 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '8px',
              paddingTop: '6px',
              borderTop: '1px solid rgba(40, 35, 29, 0.08)'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.5625rem',
                letterSpacing: '0.2em',
                color: accentColor,
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              {activeItem.keyOutputLabel || 'KEY OUTPUT'}:
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                color: 'var(--text-primary)',
                letterSpacing: '0.02em',
                fontWeight: 500
              }}
            >
              {activeItem.deliverables[0]}
            </span>
          </div>
        )}

        {/* Optional Detail Tag */}
        {activeItem.detailTag && (
          <div
            style={{
              paddingTop: '6px',
              borderTop: '1px solid rgba(40, 35, 29, 0.08)'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                letterSpacing: '0.18em',
                color: accentColor,
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              {activeItem.detailTag}
            </span>
          </div>
        )}

        {/* Optional Origin */}
        {activeItem.origin && (
          <div
            style={{
              paddingTop: '6px',
              borderTop: '1px solid rgba(40, 35, 29, 0.08)'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                letterSpacing: '0.14em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                fontWeight: 500
              }}
            >
              ORIGIN: {activeItem.origin.toUpperCase()}
            </span>
          </div>
        )}

        {/* Segmented Progress Indicators & Slide Counter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '10px',
            borderTop: '1px solid rgba(40, 35, 29, 0.08)',
            marginTop: '2px'
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            role="tablist"
            aria-label="Slide indicators"
          >
            {items.map((it, idx) => {
              const isCurrent = activeIndex === idx;
              return (
                <button
                  key={it.id || it.number || idx}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  aria-label={`Go to slide ${it.number || idx + 1}: ${it.title}`}
                  onClick={() => onSelectIndex(idx)}
                  style={{
                    height: '24px',
                    padding: '8px 2px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    touchAction: 'manipulation'
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      height: '2px',
                      width: isCurrent ? '26px' : '8px',
                      backgroundColor: isCurrent ? accentColor : 'rgba(40, 35, 29, 0.22)',
                      borderRadius: '1px',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </button>
              );
            })}
          </div>

          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6875rem',
              letterSpacing: '0.18em',
              color: 'var(--text-muted)',
              fontWeight: 500,
              userSelect: 'none'
            }}
          >
            <span style={{ color: accentColor, fontWeight: 600 }}>
              {activeItem.number || String(activeIndex + 1).padStart(2, '0')}
            </span>{' '}
            / {String(items.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      <style>{`
        .slider-arrow-btn:hover {
          background-color: rgba(32, 28, 24, 0.9) !important;
          border-color: var(--accent-champagne) !important;
          color: var(--accent-champagne) !important;
          transform: translateY(-50%) scale(1.08) !important;
        }

        .slider-arrow-btn:active {
          transform: translateY(-50%) scale(0.94) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .slider-arrow-btn,
          .mobile-slider-image-frame img {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};
