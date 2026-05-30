import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCanvasVideo } from '../hooks/useCanvasVideo';

gsap.registerPlugin(ScrollTrigger);

const REVEAL_TEXT = "REDEFINE YOUR SPATIAL REALITY";

const HeroCanvas = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const subtextRef = useRef(null);
  const scrollHintRef = useRef(null);
  const marqueeRef = useRef(null);

  const words = REVEAL_TEXT.split(' ');
  const { loaded, drawFrame, progress } = useCanvasVideo(canvasRef, 210, '/frames-hero', 'frame_', 3, '.webp');

  useEffect(() => {
    if (!loaded || !canvasRef.current || !sectionRef.current) return;

    // Draw first frame immediately
    drawFrame(0);

    const obj = { frame: 0 };

    // Canvas scrub tied to scroll
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
      }
    });

    // Master timeline for all text animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=400%',
        scrub: 1,
      }
    });

    const wordEls = textContainerRef.current?.querySelectorAll('.reveal-word');

    tl.fromTo(subtextRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(wordEls,
      { opacity: 0, y: 60, filter: 'blur(12px)' },
      {
        opacity: 1, y: 0, filter: 'blur(0px)',
        stagger: 0.25,
        duration: 2,
        ease: 'power3.out'
      }, '-=0.5'
    )
    .to([subtextRef.current, ...Array.from(wordEls || [])], {
      opacity: 0,
      y: -40,
      filter: 'blur(8px)',
      stagger: 0.08,
      duration: 1.5,
      delay: 0.5
    })
    .to(canvasRef.current, { opacity: 0.3, duration: 2 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top+=50 top',
      onEnter: () => gsap.to(scrollHintRef.current, { opacity: 0, y: 20, duration: 0.5 }),
      onLeaveBack: () => gsap.to(scrollHintRef.current, { opacity: 1, y: 0, duration: 0.5 }),
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [loaded, drawFrame]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-luxury-dark overflow-hidden">

      {/* Loading indicator */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-50 gap-6">
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-luxury-teal transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">
            Loading {progress}%
          </p>
        </div>
      )}

      {/* Full-Screen Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

      {/* Subtle Marquee Overlay blending with the video */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[200vw] flex overflow-hidden z-[5] pointer-events-none mix-blend-overlay opacity-30">
        <div className="flex animate-marquee whitespace-nowrap">
          {["SAIBABA HOME DECORE", "✦", "SAIBABA HOME DECORE", "✦"].map((item, i) => (
            <span key={i} className="text-[clamp(4rem,15vw,12rem)] font-serif font-bold text-white mx-8 shrink-0 tracking-tighter">
              {item}
            </span>
          ))}
          {["SAIBABA HOME DECORE", "✦", "SAIBABA HOME DECORE", "✦"].map((item, i) => (
            <span key={`dup-${i}`} className="text-[clamp(4rem,15vw,12rem)] font-serif font-bold text-white mx-8 shrink-0 tracking-tighter">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/60 via-transparent to-luxury-dark z-10 pointer-events-none" />

      {/* Text layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 pointer-events-none text-center">
        <p
          ref={subtextRef}
          className="font-mono text-xs tracking-[0.4em] text-luxury-teal uppercase mb-8 opacity-0"
        >
          Interior Architecture &amp; Bespoke Furnishing
        </p>

        <h1
          ref={textContainerRef}
          className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 text-[clamp(2.5rem,6vw,7rem)] font-serif text-white leading-none tracking-tight"
        >
          {words.map((word, i) => (
            <span key={i} className="reveal-word inline-block opacity-0 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              {word}
            </span>
          ))}
        </h1>
      </div>

      {/* Scroll hint */}
      <div ref={scrollHintRef} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase">Begin Journey</span>
        <div className="w-[1px] h-16 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-luxury-teal to-transparent animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroCanvas;
