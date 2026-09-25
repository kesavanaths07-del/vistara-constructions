import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { TOTAL_HERO_FRAMES, getHeroFramePath } from '../data/heroFrames';

const INITIAL_BURST_FRAMES = 20;

export const HeroScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const editorialRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Storytelling Stage Refs for 60/120fps direct DOM interpolation without React re-renders
  const stage1Ref = useRef<HTMLDivElement>(null);
  const stage2Ref = useRef<HTMLDivElement>(null);
  const stage3Ref = useRef<HTMLDivElement>(null);
  const stage4Ref = useRef<HTMLDivElement>(null);

  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_HERO_FRAMES).fill(null));
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);
  const animationFrameIdRef = useRef<number | null>(null);
  const isCancelledRef = useRef<boolean>(false);
  const isInitialReadyRef = useRef<boolean>(false);

  const [isInitialReady, setIsInitialReady] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update storytelling stages dynamically based on the current frame index
  // Thresholds visually synchronized with the 204-frame construction progression:
  // Stage 1: Frame 0..42 (Empty site / Original headline)
  // Stage 2: Frame 45..88 (Structural pillars / Strong Foundations)
  // Stage 3: Frame 90..168 (Walls & roof / Selected Materials & Timeless Craft)
  // Stage 4: Frame 175..204 (Completed residence / Ready For The Way You Live)
  const updateStoryStages = useCallback((frame: number) => {
    // Stage 1: Empty Site
    let s1Opacity = 0;
    let s1Y = 0;
    if (frame <= 36) {
      s1Opacity = 1;
      s1Y = 0;
    } else if (frame < 44) {
      const p = (frame - 36) / 8;
      s1Opacity = 1 - p;
      s1Y = -10 * p;
    } else {
      s1Opacity = 0;
      s1Y = -10;
    }

    // Stage 2: Structural Pillars
    let s2Opacity = 0;
    let s2Y = 0;
    if (frame < 44) {
      s2Opacity = 0;
      s2Y = 10;
    } else if (frame < 52) {
      const p = (frame - 44) / 8;
      s2Opacity = p;
      s2Y = 10 * (1 - p);
    } else if (frame <= 84) {
      s2Opacity = 1;
      s2Y = 0;
    } else if (frame < 92) {
      const p = (frame - 84) / 8;
      s2Opacity = 1 - p;
      s2Y = -10 * p;
    } else {
      s2Opacity = 0;
      s2Y = -10;
    }

    // Stage 3: Walls + Roof / Selected Materials
    let s3Opacity = 0;
    let s3Y = 0;
    if (frame < 92) {
      s3Opacity = 0;
      s3Y = 10;
    } else if (frame < 100) {
      const p = (frame - 92) / 8;
      s3Opacity = p;
      s3Y = 10 * (1 - p);
    } else if (frame <= 160) {
      s3Opacity = 1;
      s3Y = 0;
    } else if (frame < 168) {
      const p = (frame - 160) / 8;
      s3Opacity = 1 - p;
      s3Y = -10 * p;
    } else {
      s3Opacity = 0;
      s3Y = -10;
    }

    // Stage 4: Completed Residence / Ready For Life
    let s4Opacity = 0;
    let s4Y = 0;
    if (frame < 168) {
      s4Opacity = 0;
      s4Y = 10;
    } else if (frame < 176) {
      const p = (frame - 168) / 8;
      s4Opacity = p;
      s4Y = 10 * (1 - p);
    } else {
      s4Opacity = 1;
      s4Y = 0;
    }

    if (stage1Ref.current) {
      stage1Ref.current.style.opacity = String(s1Opacity);
      stage1Ref.current.style.transform = `translateY(${s1Y.toFixed(2)}px)`;
      stage1Ref.current.style.pointerEvents = s1Opacity > 0.3 ? 'auto' : 'none';
      stage1Ref.current.style.visibility = s1Opacity > 0.001 ? 'visible' : 'hidden';
    }
    if (stage2Ref.current) {
      stage2Ref.current.style.opacity = String(s2Opacity);
      stage2Ref.current.style.transform = `translateY(${s2Y.toFixed(2)}px)`;
      stage2Ref.current.style.pointerEvents = s2Opacity > 0.3 ? 'auto' : 'none';
      stage2Ref.current.style.visibility = s2Opacity > 0.001 ? 'visible' : 'hidden';
    }
    if (stage3Ref.current) {
      stage3Ref.current.style.opacity = String(s3Opacity);
      stage3Ref.current.style.transform = `translateY(${s3Y.toFixed(2)}px)`;
      stage3Ref.current.style.pointerEvents = s3Opacity > 0.3 ? 'auto' : 'none';
      stage3Ref.current.style.visibility = s3Opacity > 0.001 ? 'visible' : 'hidden';
    }
    if (stage4Ref.current) {
      stage4Ref.current.style.opacity = String(s4Opacity);
      stage4Ref.current.style.transform = `translateY(${s4Y.toFixed(2)}px)`;
      stage4Ref.current.style.pointerEvents = s4Opacity > 0.3 ? 'auto' : 'none';
      stage4Ref.current.style.visibility = s4Opacity > 0.001 ? 'visible' : 'hidden';
    }
  }, []);

  // Draw image on canvas using object-fit: cover math (1920x1080 native frame aspect)
  // Adjusted vertical positioning: keeps frame top at y = 0 when canvasAspect > imgAspect,
  // revealing the entire upper sky and placing the house lower in the viewport without zooming or distortion.
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const clampedIndex = Math.max(0, Math.min(TOTAL_HERO_FRAMES - 1, frameIndex));

    // Find requested frame or nearest loaded frame to guarantee zero blank flicker
    let imgToDraw = imagesRef.current[clampedIndex];
    if (!imgToDraw || !imgToDraw.complete || imgToDraw.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_HERO_FRAMES; offset++) {
        const lower = clampedIndex - offset;
        const higher = clampedIndex + offset;
        if (lower >= 0 && imagesRef.current[lower]?.complete && imagesRef.current[lower]?.naturalWidth !== 0) {
          imgToDraw = imagesRef.current[lower];
          break;
        }
        if (higher < TOTAL_HERO_FRAMES && imagesRef.current[higher]?.complete && imagesRef.current[higher]?.naturalWidth !== 0) {
          imgToDraw = imagesRef.current[higher];
          break;
        }
      }
    }

    if (!imgToDraw) return;

    const width = canvas.width;
    const height = canvas.height;
    const imgAspect = 1920 / 1080;
    const canvasAspect = width / height;

    let drawW = width;
    let drawH = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      drawW = width;
      drawH = width / imgAspect;
      // Natural top-aligned rendering (offsetY = 0):
      // Preserves all the sky at the top of the frame, lowering the roof apex
      // and overall architectural structure comfortably into the viewport.
      offsetY = 0;
    } else {
      drawH = height;
      drawW = height * imgAspect;
      offsetX = (width - drawW) / 2;
      offsetY = 0;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(imgToDraw, offsetX, offsetY, drawW, drawH);
    lastDrawnFrameRef.current = clampedIndex;

    // High-efficiency direct DOM update for counter (avoids re-rendering React tree during 60/120fps scrolling)
    if (counterRef.current) {
      counterRef.current.textContent = String(clampedIndex + 1).padStart(3, '0');
    }
  }, []);

  // Listen for reset hero event when HOME is clicked (returns hero to frame 001)
  useEffect(() => {
    const handleResetHero = () => {
      targetFrameRef.current = 0;
      currentFrameRef.current = 0;
      renderFrame(0);
      updateStoryStages(0);
      if (editorialRef.current) {
        editorialRef.current.style.opacity = '1';
        editorialRef.current.style.transform = 'translateY(0px)';
        editorialRef.current.style.pointerEvents = 'auto';
      }
      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('vistara-reset-hero', handleResetHero);
    return () => window.removeEventListener('vistara-reset-hero', handleResetHero);
  }, [renderFrame, updateStoryStages]);

  // Resize canvas to match viewport and devicePixelRatio
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayW = window.innerWidth;
    const displayH = window.innerHeight;

    if (canvas.width !== Math.floor(displayW * dpr) || canvas.height !== Math.floor(displayH * dpr)) {
      canvas.width = Math.floor(displayW * dpr);
      canvas.height = Math.floor(displayH * dpr);
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      renderFrame(Math.round(currentFrameRef.current));
    }
  }, [renderFrame]);

  // Priority proximity loader when user scrolls
  const loadProximityFrames = useCallback((targetIndex: number) => {
    const range = 14;
    const start = Math.max(0, targetIndex - range);
    const end = Math.min(TOTAL_HERO_FRAMES - 1, targetIndex + range);

    for (let i = start; i <= end; i++) {
      if (!imagesRef.current[i]) {
        const img = new Image();
        img.decoding = 'async';
        img.src = getHeroFramePath(i);
        img.onload = () => {
          if (!isCancelledRef.current) {
            imagesRef.current[i] = img;
          }
        };
      }
    }
  }, []);

  // Progressive Frame Preloading Strategy (Phase 1 immediate, Phase 2 burst, Phase 3 progressive)
  useEffect(() => {
    isCancelledRef.current = false;

    const loadSingleImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        if (imagesRef.current[index]) {
          resolve(imagesRef.current[index]!);
          return;
        }
        const img = new Image();
        img.decoding = 'async';
        img.src = getHeroFramePath(index);
        img.onload = () => {
          if (!isCancelledRef.current) {
            imagesRef.current[index] = img;
            if (index === 0 && lastDrawnFrameRef.current === -1) {
              isInitialReadyRef.current = true;
              setIsInitialReady(true);
              renderFrame(0);
              updateStoryStages(0);
            }
          }
          resolve(img);
        };
        img.onerror = () => {
          resolve(img);
        };
      });
    };

    // Phase 1: Load Frame 1 immediately and draw without any delay
    loadSingleImage(0).then(() => {
      if (!isCancelledRef.current) {
        isInitialReadyRef.current = true;
        setIsInitialReady(true);
        renderFrame(0);
        updateStoryStages(0);
      }
    });

    // Phase 2: Preload initial burst (frames 1 to 20)
    const burstPromises: Promise<HTMLImageElement>[] = [];
    for (let i = 1; i < Math.min(INITIAL_BURST_FRAMES, TOTAL_HERO_FRAMES); i++) {
      burstPromises.push(loadSingleImage(i));
    }

    Promise.all(burstPromises).then(() => {
      if (isCancelledRef.current) return;

      // Phase 3: Background progressive loader in throttled batches
      const loadRemainingInBatches = async () => {
        const batchSize = 6;
        for (let i = INITIAL_BURST_FRAMES; i < TOTAL_HERO_FRAMES; i += batchSize) {
          if (isCancelledRef.current) break;
          const batch: Promise<HTMLImageElement>[] = [];
          for (let j = i; j < Math.min(i + batchSize, TOTAL_HERO_FRAMES); j++) {
            batch.push(loadSingleImage(j));
          }
          await Promise.all(batch);
          // Yield to browser execution queue between batches
          await new Promise((r) => setTimeout(r, 16));
        }
      };

      loadRemainingInBatches();
    });

    return () => {
      isCancelledRef.current = true;
    };
  }, [renderFrame, updateStoryStages]);

  // Handle scroll calculation (passive, decoupled from React state for maximum smoothness)
  useEffect(() => {
    if (isReducedMotion) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.scrollHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      const targetIndex = progress * (TOTAL_HERO_FRAMES - 1);
      targetFrameRef.current = targetIndex;
      loadProximityFrames(Math.round(targetIndex));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, isReducedMotion, loadProximityFrames]);

  // Animation Loop with smooth lerp interpolation and synchronized DOM style updates
  useEffect(() => {
    if (isReducedMotion) {
      renderFrame(0);
      updateStoryStages(0);
      return;
    }

    const animate = () => {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      const diff = target - current;

      // Carefully tuned lerp (0.14) for responsive yet silky-smooth motion
      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current += diff * 0.14;
        const frameToDraw = Math.round(currentFrameRef.current);
        if (frameToDraw !== lastDrawnFrameRef.current) {
          renderFrame(frameToDraw);
        }
      } else if (current !== target) {
        currentFrameRef.current = target;
        const frameToDraw = Math.round(target);
        if (frameToDraw !== lastDrawnFrameRef.current) {
          renderFrame(frameToDraw);
        }
      }

      // Synchronize 4-stage storytelling transitions directly to current frame progress
      if (isInitialReadyRef.current) {
        updateStoryStages(currentFrameRef.current);
      }

      // Smooth scroll indicator fade out as user starts scrolling
      const smoothedProgress = currentFrameRef.current / (TOTAL_HERO_FRAMES - 1);
      if (scrollIndicatorRef.current) {
        scrollIndicatorRef.current.style.opacity = smoothedProgress < 0.10 ? '1' : '0';
      }

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [renderFrame, updateStoryStages, isReducedMotion]);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      style={{
        position: 'relative',
        height: isReducedMotion ? '100vh' : '520vh',
        backgroundColor: '#1E180F',
        zIndex: 10
      }}
    >
      {/* Sticky Viewport (100vh / 100svh) */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          minHeight: '100svh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* Canvas Renderer */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        />

        {/* Subtle Warm Cinematic Overlay preserving daylight & architectural tones */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(
              to bottom,
              rgba(30, 24, 15, 0.38) 0%,
              rgba(30, 24, 15, 0.20) 45%,
              rgba(30, 24, 15, 0.42) 100%
            )`,
            pointerEvents: 'none'
          }}
        />

        {/* Hero Editorial Typography */}
        <div
          ref={editorialRef}
          className="hero-editorial-wrapper"
          style={{
            position: 'relative',
            zIndex: 20,
            textAlign: 'center',
            maxWidth: '920px',
            width: '100%',
            padding: '0 20px',
            opacity: isInitialReady ? 1 : 0,
            transform: 'translateY(0px)',
            transition: 'opacity 0.4s ease',
            marginTop: 'clamp(10px, 2.5vh, 26px)'
          }}
        >
          {/* Eyebrow Label - Consistent badge throughout all stages */}
          <div
            className="hero-eyebrow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: 'clamp(12px, 2vh, 18px)',
              padding: '5px 16px',
              background: 'rgba(30, 24, 15, 0.45)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(197, 168, 117, 0.35)',
              borderRadius: '2px'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                fontWeight: 600,
                letterSpacing: '0.26em',
                color: 'var(--accent-champagne)',
                textTransform: 'uppercase'
              }}
            >
              • BUILDING SPACES THAT ENDURE •
            </span>
          </div>

          {/* Stage Viewport Deck - Fixed Height / Grid Stacking guarantees zero layout shift & stable CTA */}
          <div
            className="hero-stage-deck"
            style={{
              display: 'grid',
              gridTemplateAreas: '"stage"',
              placeItems: 'center',
              width: '100%',
              minHeight: 'clamp(210px, 30vh, 290px)',
              marginBottom: 'clamp(16px, 2.5vh, 28px)',
              position: 'relative'
            }}
          >
            {/* STAGE 1: Empty Site / Vision (Frames 0 to ~42) */}
            <div
              ref={stage1Ref}
              style={{
                gridArea: 'stage',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'none',
                opacity: 1,
                transform: 'translateY(0px)',
                willChange: 'opacity, transform'
              }}
            >
              <h1
                className="hero-h1"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(32px, 5.8vw, 84px)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.02em',
                  color: '#FAF8F3',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  maxWidth: 'min(92vw, 850px)',
                  margin: '0 auto clamp(10px, 1.8vh, 18px) auto',
                  textShadow: '0 4px 24px rgba(20, 15, 10, 0.65)'
                }}
              >
                CRAFTING SPACES <br />
                <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-editorial)', color: 'var(--accent-champagne)' }}>
                  BEYOND
                </span>{' '}
                EXPECTATIONS.
              </h1>

              <h2
                className="hero-h2"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.6875rem, 2vw, 0.9375rem)',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#FAF8F3',
                  maxWidth: 'min(90vw, 560px)',
                  margin: '0 auto clamp(6px, 1.2vh, 10px) auto',
                  lineHeight: 1.5,
                  textShadow: '0 2px 12px rgba(20, 15, 10, 0.7)'
                }}
              >
                ARCHITECTURE, CRAFTED FOR THE WAY YOU LIVE.
              </h2>

              <p
                className="hero-p"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.8125rem, 1.8vw, 0.9375rem)',
                  color: 'rgba(250, 248, 243, 0.85)',
                  maxWidth: 'min(90vw, 520px)',
                  margin: '0 auto',
                  lineHeight: 1.6,
                  letterSpacing: '0.01em',
                  textShadow: '0 2px 10px rgba(20, 15, 10, 0.7)'
                }}
              >
                Thoughtfully designed residences where timeless materials, considered details and the spirit of South India come together.
              </p>
            </div>

            {/* STAGE 2: Structural Pillars / Foundations (Frames ~45 to ~88) */}
            <div
              ref={stage2Ref}
              style={{
                gridArea: 'stage',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'none',
                opacity: 0,
                transform: 'translateY(12px)',
                visibility: 'hidden',
                pointerEvents: 'none',
                willChange: 'opacity, transform'
              }}
            >
              <h1
                className="hero-h1"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(34px, 6.2vw, 88px)',
                  lineHeight: 1.04,
                  letterSpacing: '-0.02em',
                  color: '#FAF8F3',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  maxWidth: 'min(92vw, 850px)',
                  margin: '0 auto clamp(12px, 2vh, 20px) auto',
                  textShadow: '0 4px 24px rgba(20, 15, 10, 0.65)'
                }}
              >
                STRONG <br />
                FOUNDATIONS.
              </h1>

              <p
                className="hero-p"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.875rem, 2vw, 1.0625rem)',
                  fontWeight: 400,
                  color: 'rgba(250, 248, 243, 0.9)',
                  maxWidth: 'min(90vw, 520px)',
                  margin: '0 auto',
                  lineHeight: 1.6,
                  letterSpacing: '0.02em',
                  textShadow: '0 2px 10px rgba(20, 15, 10, 0.7)'
                }}
              >
                Built from the ground up with precision, strength and purpose.
              </p>
            </div>

            {/* STAGE 3: Walls + Roof / Selected Materials (Frames ~90 to ~168) */}
            <div
              ref={stage3Ref}
              style={{
                gridArea: 'stage',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'none',
                opacity: 0,
                transform: 'translateY(12px)',
                visibility: 'hidden',
                pointerEvents: 'none',
                willChange: 'opacity, transform'
              }}
            >
              <h1
                className="hero-h1"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(28px, 5.2vw, 76px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  color: '#FAF8F3',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  maxWidth: 'min(92vw, 880px)',
                  margin: '0 auto clamp(12px, 2vh, 20px) auto',
                  textShadow: '0 4px 24px rgba(20, 15, 10, 0.65)'
                }}
              >
                SELECTED MATERIALS <br />
                <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-editorial)', color: 'var(--accent-champagne)' }}>
                  &amp;
                </span>{' '}
                TIMELESS CRAFT.
              </h1>

              <p
                className="hero-p"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.875rem, 2vw, 1.0625rem)',
                  fontWeight: 400,
                  color: 'rgba(250, 248, 243, 0.9)',
                  maxWidth: 'min(90vw, 540px)',
                  margin: '0 auto',
                  lineHeight: 1.6,
                  letterSpacing: '0.02em',
                  textShadow: '0 2px 10px rgba(20, 15, 10, 0.7)'
                }}
              >
                Carefully selected materials, refined details and enduring finishes.
              </p>
            </div>

            {/* STAGE 4: Completed Residence / Ready For Life (Frames ~175 to 204) */}
            <div
              ref={stage4Ref}
              style={{
                gridArea: 'stage',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'none',
                opacity: 0,
                transform: 'translateY(12px)',
                visibility: 'hidden',
                pointerEvents: 'none',
                willChange: 'opacity, transform'
              }}
            >
              <h1
                className="hero-h1"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(30px, 5.6vw, 80px)',
                  lineHeight: 1.06,
                  letterSpacing: '-0.02em',
                  color: '#FAF8F3',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  maxWidth: 'min(92vw, 860px)',
                  margin: '0 auto clamp(12px, 2vh, 20px) auto',
                  textShadow: '0 4px 24px rgba(20, 15, 10, 0.65)'
                }}
              >
                READY FOR THE WAY <br />
                YOU LIVE.
              </h1>

              <p
                className="hero-p"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.875rem, 2vw, 1.0625rem)',
                  fontWeight: 400,
                  color: 'rgba(250, 248, 243, 0.9)',
                  maxWidth: 'min(90vw, 520px)',
                  margin: '0 auto',
                  lineHeight: 1.6,
                  letterSpacing: '0.02em',
                  textShadow: '0 2px 10px rgba(20, 15, 10, 0.7)'
                }}
              >
                A considered residence, crafted for everyday life.
              </p>
            </div>
          </div>

          {/* Call to Actions (Side-by-side desktop, stacked mobile) - Position is 100% stable across all 4 stages */}
          <div
            className="hero-cta-group"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}
          >
            <a
              href="#intro-section"
              className="btn-primary hero-cta-btn"
              style={{
                minWidth: '190px',
                minHeight: '44px',
                padding: '0 24px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={(e) => {
                e.preventDefault();
                const intro = document.getElementById('intro-section');
                if (intro) {
                  intro.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowDown size={14} />
            </a>

            <Link
              to="/contact"
              className="link-editorial-hero hero-cta-btn"
              style={{
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom Minimal Scroll Indicator (Hidden on mobile to avoid colliding with buttons) */}
        <div
          ref={scrollIndicatorRef}
          className="hero-scroll-indicator"
          style={{
            position: 'absolute',
            bottom: '36px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            opacity: 1,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.625rem',
              letterSpacing: '0.28em',
              fontWeight: 600,
              color: 'var(--accent-champagne)',
              textTransform: 'uppercase'
            }}
          >
            SCROLL TO EXPLORE
          </span>
          <div
            style={{
              width: '1px',
              height: '32px',
              background: 'linear-gradient(to bottom, var(--accent-champagne), transparent)',
              animation: 'scrollPulse 2.2s infinite ease-in-out'
            }}
          />
        </div>

        {/* Real-time Dynamic Frame Counter (Updates dynamically up to 204) */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            right: '48px',
            zIndex: 20,
            fontFamily: 'var(--font-sans)',
            fontSize: '0.625rem',
            letterSpacing: '0.22em',
            color: 'var(--accent-champagne)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(30, 24, 15, 0.45)',
            padding: '4px 12px',
            border: '1px solid rgba(197, 168, 117, 0.28)',
            borderRadius: '0',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
          className="hero-counter"
        >
          <span ref={counterRef} style={{ color: 'var(--accent-champagne)', fontWeight: 600 }}>
            001
          </span>
          <span style={{ color: 'rgba(197, 168, 117, 0.45)' }}>/</span>
          <span style={{ color: 'rgba(250, 248, 243, 0.6)' }}>{TOTAL_HERO_FRAMES}</span>
        </div>
      </div>

      {/* Hero CSS Keyframe & Responsive Animations */}
      <style>{`
        @keyframes scrollPulse {
          0% {
            transform: scaleY(0);
            transform-origin: top;
            opacity: 0;
          }
          50% {
            transform: scaleY(1);
            transform-origin: top;
            opacity: 1;
          }
          50.1% {
            transform: scaleY(1);
            transform-origin: bottom;
          }
          100% {
            transform: scaleY(0);
            transform-origin: bottom;
            opacity: 0;
          }
        }
        @media (max-width: 768px) {
          #hero-section {
            height: 420vh !important;
          }
          .hero-stage-deck {
            min-height: clamp(230px, 34vh, 320px) !important;
            margin-bottom: 20px !important;
          }
        }
        @media (max-width: 640px) {
          .hero-cta-group {
            flex-direction: column !important;
            gap: 14px !important;
            width: 100% !important;
            max-width: 260px !important;
            margin: 0 auto !important;
          }
          .hero-cta-btn {
            width: 100% !important;
            min-width: 0 !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 768px) {
          .hero-counter {
            bottom: 16px !important;
            right: 16px !important;
            padding: 3px 10px !important;
            font-size: 0.5625rem !important;
            letter-spacing: 0.18em !important;
            background: rgba(30, 24, 15, 0.6) !important;
            border-color: rgba(197, 168, 117, 0.25) !important;
          }
          .hero-scroll-indicator {
            display: none !important;
          }
        }
        @media (max-height: 500px) and (orientation: landscape) {
          .hero-editorial-wrapper {
            margin-top: 18px !important;
            padding: 0 16px !important;
          }
          .hero-eyebrow {
            display: none !important;
          }
          .hero-stage-deck {
            min-height: 110px !important;
            margin-bottom: 12px !important;
          }
          .hero-h1 {
            font-size: clamp(20px, 5.5vh, 28px) !important;
            margin-bottom: 6px !important;
          }
          .hero-h2 {
            font-size: 0.6875rem !important;
            margin-bottom: 6px !important;
          }
          .hero-p {
            display: none !important;
          }
          .hero-cta-group {
            flex-direction: row !important;
            gap: 16px !important;
          }
          .hero-cta-btn {
            min-height: 38px !important;
            padding: 0 16px !important;
            font-size: 0.6875rem !important;
          }
          .hero-counter {
            bottom: 12px !important;
            right: 16px !important;
          }
          .hero-scroll-indicator {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
