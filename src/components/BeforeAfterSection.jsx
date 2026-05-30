import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BeforeAfterSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <section ref={sectionRef} className="bg-jet py-32 px-4 md:px-12 overflow-hidden text-smoke relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-smoke/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">

        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] text-silver uppercase mb-4">The Transformation</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-smoke">Elevate Your Space Instantly</h2>
            <p className="text-smoke/55 font-light leading-relaxed mb-8">
              Witness the power of premium textiles. A simple addition of our bespoke curtains and handcrafted sofa covers can turn an ordinary room into a luxury suite.
            </p>
            <div className="flex gap-4 items-center font-mono text-xs uppercase tracking-widest text-smoke/40">
              <span>Before</span>
              <div className="w-8 h-[1px] bg-smoke/18" />
              <span className="text-silver">After</span>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-2/3 relative h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden border border-smoke/8"
             ref={containerRef}
             onMouseMove={handleMouseMove}
             onTouchMove={(e) => handleMouseMove(e.touches[0])}>

          {/* AFTER Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600)' }}
          />

          {/* BEFORE Image */}
          <div
            className="absolute inset-y-0 left-0 bg-cover bg-center overflow-hidden"
            style={{
              width: `${sliderPosition}%`,
              backgroundImage: 'url(https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1600)',
              filter: 'grayscale(100%) brightness(0.75)'
            }}
          />

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-[1px] bg-smoke/40 cursor-ew-resize flex items-center justify-center"
            style={{ left: `calc(${sliderPosition}% - 1px)` }}
          >
            <div className="w-8 h-8 bg-smoke rounded-full shadow-[0_0_20px_rgba(245,244,242,0.3)] flex items-center justify-center border border-jet/20">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0C0C0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSection;
