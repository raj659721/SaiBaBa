import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CurtainReveal = ({ children }) => {
  const sectionRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=200%', // 2 screens of scrolling to open
        pin: true,
        scrub: 1,
      }
    });

    // Content scales up slightly as curtains open
    tl.fromTo(contentRef.current,
      { scale: 0.9, opacity: 0.5 },
      { scale: 1, opacity: 1, duration: 1, ease: 'none' },
      0
    );

    // Left curtain slides left
    tl.to(leftCurtainRef.current, {
      xPercent: -100,
      duration: 1,
      ease: 'power2.inOut'
    }, 0);

    // Right curtain slides right
    tl.to(rightCurtainRef.current, {
      xPercent: 100,
      duration: 1,
      ease: 'power2.inOut'
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-luxury-dark">
      
      {/* The content revealed behind the curtains */}
      <div ref={contentRef} className="absolute inset-0 w-full h-full z-0">
        {children}
      </div>

      {/* Left Curtain */}
      <div 
        ref={leftCurtainRef} 
        className="absolute top-0 left-0 w-1/2 h-full bg-[#151311] z-10 border-r border-luxury-gold/20 shadow-[10px_0_50px_rgba(0,0,0,0.8)] flex items-center justify-end pr-4 md:pr-12"
      >
        <div className="w-[1px] h-32 bg-luxury-gold/50" />
      </div>

      {/* Right Curtain */}
      <div 
        ref={rightCurtainRef} 
        className="absolute top-0 right-0 w-1/2 h-full bg-[#151311] z-10 border-l border-luxury-gold/20 shadow-[-10px_0_50px_rgba(0,0,0,0.8)] flex items-center justify-start pl-4 md:pl-12"
      >
        <div className="w-[1px] h-32 bg-luxury-gold/50" />
      </div>

    </section>
  );
};

export default CurtainReveal;
