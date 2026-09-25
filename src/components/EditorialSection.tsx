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
  layoutDirection?: 'image-left' | 'image-right';
  textMaxWidth?: string | number;
  alignItems?: React.CSSProperties['alignItems'];
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({
  index,
  imageSlot,
  textSlot,
  offsetY = 0,
  spacingBottom = 'clamp(120px, 12vw, 170px)',
  imageWidthPercent = 58,
  className = '',
  style,
  layoutDirection,
  textMaxWidth,
  alignItems = 'center'
}) => {
  const isImageRight = layoutDirection ? layoutDirection === 'image-right' : index % 2 === 1;
  const isCustomLayout = layoutDirection !== undefined;
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
  // Image Left (isImageRight=false): Image from Left, Text from Right
  // Image Right (isImageRight=true): Image from Right, Text from Left
  const imgAnimClass = isImageRight
    ? 'editorial-reveal-from-right'
    : 'editorial-reveal-from-left';

  const textAnimClass = isImageRight
    ? 'editorial-reveal-from-left'
    : 'editorial-reveal-from-right';

  const activeClass = isVisible ? 'editorial-reveal-active' : '';

  const imageColumn = (
    <div
      key="editorial-img-col"
      className={`editorial-img-col ${imgAnimClass} ${activeClass}`}
      style={{
        flex: `0 0 ${imageWidthPercent}%`
      }}
    >
      {imageSlot}
    </div>
  );

  const textColumn = (
    <div
      key="editorial-text-col"
      className={`editorial-text-col ${textAnimClass} editorial-stagger ${activeClass}`}
      style={{
        flex: `0 0 ${100 - imageWidthPercent - 5}%`,
        maxWidth: textMaxWidth !== undefined ? textMaxWidth : undefined
      }}
    >
      {textSlot}
    </div>
  );

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
        className={`editorial-layout-row ${!isCustomLayout && isImageRight ? 'is-reversed' : ''}`}
        style={{
          alignItems: alignItems,
          transform: offsetY !== 0 ? `translateY(var(--editorial-offset, ${offsetY}px))` : undefined,
          ['--editorial-offset' as any]: `${offsetY}px`
        }}
      >
        {isCustomLayout && isImageRight ? (
          <>
            {textColumn}
            {imageColumn}
          </>
        ) : (
          <>
            {imageColumn}
            {textColumn}
          </>
        )}
      </div>
    </div>
  );
};
