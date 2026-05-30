import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCanvasVideo } from '../hooks/useCanvasVideo';

gsap.registerPlugin(ScrollTrigger);

const HEADLINES = [
  { line1: 'Transform',    line2: 'Your Home' },
  { line1: 'Premium Curtains', line2: '& Sofa Covers' },
  { line1: 'Luxury Fabrics', line2: 'For Every Room' },
  { line1: 'Sai Baba',     line2: 'Home Decor' },
];

const HeroCanvas = () => {
  const canvasRef     = useRef(null);
  const sectionRef    = useRef(null);
  const scrollHintRef = useRef(null);
  const textRefs      = useRef([]);

  const { loaded, drawFrame, progress } = useCanvasVideo(canvasRef, 210, '/frames-hero', 'frame_', 3, '.webp');

  useEffect(() => {
    if (!loaded || !canvasRef.current || !sectionRef.current) return;

    drawFrame(0);

    const obj = { frame: 0 };

    /* ── Canvas frame scrub ── */
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=500%',
      pin: true,
      pinSpacing: true,
      scrub: 0.6,
      onUpdate: (self) => {
        const frame = Math.floor(self.progress * 209);
        if (obj.frame !== frame) {
          obj.frame = frame;
          drawFrame(frame);
        }
      },
    });

    /* ── Scroll-hint hide ── */
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top+=50 top',
      onEnter:     () => gsap.to(scrollHintRef.current, { opacity: 0, y: 20, duration: 0.5 }),
      onLeaveBack: () => gsap.to(scrollHintRef.current, { opacity: 1, y: 0,  duration: 0.5 }),
    });

    /* ── Headline cycling timeline ──
       Total timeline = 20 units scrubbed across 480% of scroll.
       Each slide: 1 unit fade-in │ ~3 units hold │ 1 unit fade-out
       Gap between slides: 0.5 unit
    */
    const ease = 'power2.inOut';
    const blur0 = 'blur(0px)';
    const blurIn  = 'blur(18px)';
    const blurOut = 'blur(10px)';

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=480%',
        scrub: 1,
      },
    });

    HEADLINES.forEach((_, i) => {
      const el = textRefs.current[i];
      if (!el) return;

      const inAt  = i * 5;   // 0, 5, 10, 15
      const outAt = inAt + 4; // 4, 9, 14, 19

      if (i === 0) {
        /* First slide starts fully visible */
        gsap.set(el, { opacity: 1, y: 0, filter: blur0 });
      } else {
        /* Other slides start hidden */
        gsap.set(el, { opacity: 0, y: 50, filter: blurIn });
        /* Fade in */
        tl.to(el, { opacity: 1, y: 0, filter: blur0, duration: 1, ease }, inAt);
      }

      /* Fade out — all except the last slide */
      if (i < HEADLINES.length - 1) {
        tl.to(el, { opacity: 0, y: -40, filter: blurOut, duration: 1, ease }, outAt);
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [loaded, drawFrame]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-jet overflow-hidden">

      {/* Loading screen */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 gap-6 bg-jet">
          <div className="w-48 h-[1px] bg-smoke/10 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 bg-smoke transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="font-mono text-xs tracking-[0.3em] text-smoke/35 uppercase">
            Loading {progress}%
          </p>
        </div>
      )}

      {/* Canvas — pixel/video animation (untouched) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

      {/* Top gradient for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Headline text layers — all stacked, each scrolls in/out */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        {HEADLINES.map((h, i) => (
          <div
            key={i}
            ref={el => textRefs.current[i] = el}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          >
            {/* Eyebrow tag */}
            <p className="font-mono text-[10px] md:text-xs tracking-[0.35em] text-smoke/50 uppercase mb-5 md:mb-7">
              {i === 0 ? 'Welcome To' : i === 3 ? 'Est. 2010' : 'Saibaba Decor'}
            </p>

            {/* Headline */}
            <h1 className="font-serif leading-[1.05] tracking-tight drop-shadow-[0_4px_40px_rgba(0,0,0,0.85)]">
              <span className="block text-[clamp(3rem,7.5vw,8.5rem)] text-smoke">
                {h.line1}
              </span>
              <span className="block text-[clamp(3rem,7.5vw,8.5rem)] text-smoke/70 italic font-light">
                {h.line2}
              </span>
            </h1>

            {/* Slide counter dot */}
            <div className="flex gap-2 mt-10 md:mt-12">
              {HEADLINES.map((_, dot) => (
                <div
                  key={dot}
                  className={`rounded-full transition-all duration-300 ${
                    dot === i
                      ? 'w-6 h-[2px] bg-smoke'
                      : 'w-[6px] h-[2px] bg-smoke/25'
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div ref={scrollHintRef} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.4em] text-smoke/40 uppercase">Scroll to Explore</span>
        <div className="w-[1px] h-16 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-smoke/50 to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroCanvas;
