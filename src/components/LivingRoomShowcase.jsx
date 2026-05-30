import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { id: 'curtains', title: 'Bespoke Drapes', top: '20%', left: '15%' },
  { id: 'sofa', title: 'Premium Upholstery', top: '70%', left: '40%' },
  { id: 'cushions', title: 'Handloom Cushions', top: '65%', left: '55%' },
  { id: 'carpet', title: 'Persian Rugs', top: '85%', left: '50%' },
];

const LivingRoomShowcase = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse',
      }
    });

    // Reveal tags one by one
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      tl.fromTo(el, 
        { opacity: 0, scale: 0.5, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'back.out(1.7)' },
        i * 0.2 // Stagger
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <img 
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
        alt="Luxury Living Room" 
        className="w-full h-full object-cover"
      />
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-luxury-dark/40" />

      {/* Interactive Hotspots */}
      {features.map((feature, i) => (
        <div 
          key={feature.id}
          ref={el => itemsRef.current[i] = el}
          className="absolute flex items-center gap-3 z-10"
          style={{ top: feature.top, left: feature.left }}
        >
          {/* Pulsing Dot */}
          <div className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-luxury-gold border-2 border-luxury-dark"></span>
          </div>
          {/* Label */}
          <div className="backdrop-blur-md bg-black/40 border border-luxury-gold/30 px-4 py-2 rounded-full hidden md:block">
            <span className="font-mono text-xs text-luxury-gold tracking-widest uppercase">{feature.title}</span>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-12 left-12 z-10">
        <h2 className="text-4xl md:text-6xl font-serif text-white">The Sai Baba<br/><span className="text-luxury-gold">Signature Room</span></h2>
      </div>
    </div>
  );
};

export default LivingRoomShowcase;
