import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * useCanvasVideo
 * High-performance frame-scrubbing engine.
 * - savedImages ref is declared OUTSIDE the useEffect loop to protect memory cache.
 * - Progressive loading: renders first frame immediately, then loads rest in background.
 * - High-DPI: auto-scales to devicePixelRatio on resize.
 * - Color Space: uses display-p3 for rich lifelike colors.
 */
export const useCanvasVideo = (
  canvasRef,
  totalFrames,
  folderPath,
  prefix = 'frame_',
  padCount = 3,
  ext = '.webp'
) => {
  // ✅ Declared OUTSIDE and PRIOR to the useEffect boundary to protect cache indexes
  const savedImages = useRef([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastFrameRef = useRef(-1);
  const rafRef = useRef(null);

  useEffect(() => {
    let loadedCount = 0;
    const images = new Array(totalFrames);

    const onImageLoad = (i) => {
      loadedCount++;
      setProgress(Math.round((loadedCount / totalFrames) * 100));

      // Draw first frame immediately so canvas isn't blank
      if (i === 0) {
        savedImages.current = images;
        setLoaded(true);
      }

      if (loadedCount === totalFrames) {
        savedImages.current = images;
      }
    };

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const num = (i + 1).toString().padStart(padCount, '0');
      img.src = `${folderPath}/${prefix}${num}${ext}`;
      img.onload = () => onImageLoad(i);
      img.onerror = () => { loadedCount++; }; // skip broken frames gracefully
      images[i] = img;
    }

    // Handle window resize — reset canvas size so DPI stays sharp
    const handleResize = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [totalFrames, folderPath, prefix, padCount, ext]);

  // Stable drawFrame wrapped in useCallback for perf
  const drawFrame = useCallback((frameIndex) => {
    const clampedIndex = Math.max(0, Math.min(frameIndex, totalFrames - 1));
    if (clampedIndex === lastFrameRef.current) return; // Skip if same frame
    if (!canvasRef.current || !savedImages.current[clampedIndex]) return;

    const canvas = canvasRef.current;

    // ✅ display-p3 + alpha:false for rich textures
    const ctx = canvas.getContext('2d', { alpha: false, colorSpace: 'display-p3' })
      || canvas.getContext('2d', { alpha: false }); // fallback

    if (!ctx) return;

    const img = savedImages.current[clampedIndex];
    if (!img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
    }

    // Use requestAnimationFrame for buttery 60fps rendering
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // ✅ Cover simulation: fills the entire canvas maintaining aspect ratio
      const scale = Math.max(displayWidth / img.naturalWidth, displayHeight / img.naturalHeight);
      const x = (displayWidth - img.naturalWidth * scale) / 2;
      const y = (displayHeight - img.naturalHeight * scale) / 2;

      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
      ctx.restore();

      lastFrameRef.current = clampedIndex;
    });
  }, [canvasRef, totalFrames]);

  return { loaded, drawFrame, progress };
};
