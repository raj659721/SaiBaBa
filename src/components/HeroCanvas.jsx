import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HEADLINES = [
  { eyebrow: 'Welcome To Saibaba',  line1: 'Transform',     line2: 'Your Home' },
  { eyebrow: 'Finest Fabrics',       line1: 'Premium',       line2: 'Curtains' },
  { eyebrow: 'Bespoke Upholstery',   line1: 'Luxury Sofa',   line2: 'Covers' },
  { eyebrow: 'Est. Nashik, India',   line1: 'Elegant',       line2: 'Handloom Decor' },
];

const HeroCanvas = () => {
  const sectionRef    = useRef(null);
  const scrollHintRef = useRef(null);
  const textRefs      = useRef([]);
  const overlayRef    = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ease = 'power2.inOut';

    /* ── Set initial states ── */
    textRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === 0) {
        gsap.set(el, { opacity: 1, y: 0, filter: 'blur(0px)' });
      } else {
        gsap.set(el, { opacity: 0, y: 60, filter: 'blur(16px)' });
      }
    });

    /* ── Pin + text cycling timeline ── */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=480%',
        pin: true,
        pinSpacing: true,
        scrub: 1,
      },
    });

    HEADLINES.forEach((_, i) => {
      const el = textRefs.current[i];
      if (!el) return;
      const inAt  = i * 5;
      const outAt = inAt + 4;
      if (i > 0) {
        tl.to(el, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease }, inAt);
      }
      if (i < HEADLINES.length - 1) {
        tl.to(el, { opacity: 0, y: -50, filter: 'blur(10px)', duration: 1, ease }, outAt);
      }
    });

    /* ── Scroll hint hide ── */
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top+=80 top',
      onEnter:     () => gsap.to(scrollHintRef.current, { opacity: 0, y: 20, duration: 0.5 }),
      onLeaveBack: () => gsap.to(scrollHintRef.current, { opacity: 1, y: 0,  duration: 0.5 }),
    });

    /* ── Subtle parallax on bg image ── */
    gsap.to(overlayRef.current, {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=480%',
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-ivory">

      {/* Background image */}
      <div ref={overlayRef} className="absolute inset-[-15%] w-[130%] h-[130%]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920&q=90&fit=crop)` }}
        />
      </div>

      {/* Warm overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/75 via-ivory/40 to-ivory/80 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-ivory/60 via-transparent to-ivory/30 z-10 pointer-events-none" />

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent z-20 pointer-events-none" />

      {/* Slide dot indicators — fixed bottom center */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-30 pointer-events-none">
        {HEADLINES.map((_, dot) => (
          <div key={dot} className="w-5 h-[1.5px] bg-walnut-mid/30 rounded-full" />
        ))}
      </div>

      {/* Headline text layers */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        {HEADLINES.map((h, i) => (
          <div
            key={i}
            ref={el => textRefs.current[i] = el}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          >
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-6 h-[1px] bg-gold/60" />
              <p className="font-mono text-[9px] md:text-[11px] tracking-[0.45em] text-walnut-mid/70 uppercase">
                {h.eyebrow}
              </p>
              <div className="w-6 h-[1px] bg-gold/60" />
            </div>

            <h1 className="font-serif leading-[1.04] tracking-tight">
              <span className="block text-[clamp(3.2rem,8vw,9rem)] text-walnut drop-shadow-[0_2px_20px_rgba(44,26,14,0.15)]">
                {h.line1}
              </span>
              <span className="block text-[clamp(3.2rem,8vw,9rem)] text-walnut-mid italic font-light">
                {h.line2}
              </span>
            </h1>

            {i === 0 && (
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="/collections"
                  className="px-8 py-3.5 bg-walnut text-ivory font-mono text-[10px] tracking-[0.25em] uppercase rounded-full hover:bg-walnut-2 transition-colors pointer-events-auto"
                >
                  Explore Collections
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-3.5 border border-gold/50 text-walnut font-mono text-[10px] tracking-[0.25em] uppercase rounded-full hover:bg-gold/10 transition-colors pointer-events-auto"
                >
                  WhatsApp Us
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div ref={scrollHintRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 pointer-events-none">
        <span className="font-mono text-[9px] tracking-[0.4em] text-walnut-mid/50 uppercase">Scroll to Explore</span>
        <div className="w-[1px] h-12 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-gold/60 to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroCanvas;
