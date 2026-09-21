// Vistara Constructions — Hero Frame-by-Frame Animation Sequence
// Generated from 1 Hero New.zip containing exactly 204 sequential JPG frames: frame-0001.jpg through frame-0204.jpg

export const TOTAL_HERO_FRAMES = 204;

export const HERO_FRAMES: string[] = Array.from({ length: TOTAL_HERO_FRAMES }, (_, index) => {
  const frameNum = String(index + 1).padStart(4, '0');
  return `/hero/frame-${frameNum}.jpg`;
});

export const getHeroFramePath = (index: number): string => {
  const clampedIndex = Math.max(0, Math.min(TOTAL_HERO_FRAMES - 1, index));
  return HERO_FRAMES[clampedIndex];
};
