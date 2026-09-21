import React, { useRef, useEffect, useState } from 'react';

export interface EditorialSectionProps {
  index: number;
  imageSlot: React.ReactNode;
  textSlot: React.ReactNode;
  offsetY?: number;
  spacingBottom?: string;
  imageWidthPercent?: number; // 54 - 60%
  className?: string;
  style?: React.CSSProperties;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({
  index,
  imageSlot,
  textSlot,
  offsetY = 0,
  spacingBottom = 'clamp(120px, 12vw, 170px)',
  imageWidthPercent = 58,
  className = '',
  style
}) => {
  const isReversed = index % 2 === 1;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const currentEl = sectionRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentEl);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(currentEl);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Compute directional animation classes
  // Image Left (isReversed=false): Image from Left, Text from Right
  // Image Right (isReversed=true): Image from Right, Text from Left
  const imgAnimClass = isReversed
    ? 'editorial-reveal-from-right'
    : 'editorial-reveal-from-left';

  const textAnimClass = isReversed
    ? 'editorial-reveal-from-left'
    : 'editorial-reveal-from-right';

  const activeClass = isVisible ? 'editorial-reveal-active' : '';

  return (
    <div
      ref={sectionRef}
      className={`editorial-section ${className}`}
      style={{
        marginBottom: spacingBottom,
        ...style
      }}
    >
      <div
        className={`editorial-layout-row ${isReversed ? 'is-reversed' : ''}`}
        style={{
          transform: offsetY !== 0 ? `translateY(var(--editorial-offset, ${offsetY}px))` : undefined,
          ['--editorial-offset' as any]: `${offsetY}px`
        }}
      >
        {/* Substantial Architectural Image Column (55-60%) */}
        <div
          className={`editorial-img-col ${imgAnimClass} ${activeClass}`}
          style={{
            flex: `0 0 ${imageWidthPercent}%`
          }}
        >
          {imageSlot}
        </div>

        {/* Editorial Text Column (40-45%) */}
        <div
          className={`editorial-text-col ${textAnimClass} editorial-stagger ${activeClass}`}
          style={{
            flex: `0 0 ${100 - imageWidthPercent - 5}%`
          }}
        >
          {textSlot}
        </div>
      </div>
    </div>
  );
};
