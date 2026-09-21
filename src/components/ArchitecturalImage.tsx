import React, { useState } from 'react';

interface ArchitecturalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: string;
  fallbackSrc?: string;
  containerStyle?: React.CSSProperties;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  aspectRatio = '16 / 10',
  fallbackSrc,
  containerStyle,
  style,
  className,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      if (import.meta.env.DEV) {
        console.warn(`[Vistara Architecture] Asset failed: "${currentSrc}", attempting fallback: "${fallbackSrc}"`);
      }
      setCurrentSrc(fallbackSrc);
    } else {
      if (import.meta.env.DEV) {
        console.error(`[Vistara Architecture] Image load error: "${currentSrc}" (${alt})`);
      }
      setError(true);
      setLoaded(true);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: aspectRatio,
        backgroundColor: '#EAE3D6',
        overflow: 'hidden',
        ...containerStyle
      }}
      className={`arch-img-wrapper ${className || ''}`}
    >
      {/* Subtle Warm Stone Loading State */}
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#E8E0D2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            transition: 'opacity 0.6s ease'
          }}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              border: '1px solid rgba(176, 138, 82, 0.3)',
              borderTopColor: '#B08A52',
              borderRadius: '50%',
              animation: 'archSpin 1.4s linear infinite',
              opacity: 0.6
            }}
          />
        </div>
      )}

      {/* Error Fallback */}
      {error ? (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#E8E0D2',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            textAlign: 'center'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              letterSpacing: '0.22em',
              color: '#8A8175',
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}
          >
            ARCHITECTURAL MONOGRAPH
          </span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              color: '#26221D',
              letterSpacing: '0.04em'
            }}
          >
            {alt}
          </span>
        </div>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)',
            ...style
          }}
          {...props}
        />
      )}

      <style>{`
        @keyframes archSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
