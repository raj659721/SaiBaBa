import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BeforeAfterSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseMove = (e) => {
    if (isDragging) updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section ref={sectionRef} className="bg-jet py-28 md:py-36 px-4 md:px-12 overflow-hidden text-smoke relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-smoke/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-smoke/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20 relative z-10">

        {/* Left copy */}
        <div className="w-full lg:w-[38%] shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[10px] tracking-[0.40em] text-silver uppercase mb-5">
              The Transformation
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-smoke">
              See the Difference<br />
              <span className="text-silver font-light italic">For Yourself</span>
            </h2>
            <p className="text-smoke/50 font-light leading-relaxed mb-10 text-base">
              A single visit from our team. Premium bespoke curtains, a handcrafted sofa cover and artisan cushions — witness how quickly your room transforms from ordinary to extraordinary.
            </p>

            <div className="flex items-center gap-5 mb-10">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-smoke/8 border border-smoke/15 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-silver">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-smoke/28">Before</span>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-smoke/15 to-smoke/35" />
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-gold/12 border border-gold/25 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gold">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-gold/60">After</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '210+', label: 'Premium Fabrics' },
                { value: '13+', label: 'Years in Nashik' },
                { value: '5000+', label: 'Homes Transformed' },
                { value: '100%', label: 'Custom Fit' },
              ].map(stat => (
                <div key={stat.label} className="p-4 border border-smoke/8 rounded-xl bg-smoke/[0.03]">
                  <p className="font-serif text-2xl text-smoke mb-0.5">{stat.value}</p>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-smoke/35">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: interactive before/after slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:flex-1 relative h-[52vw] max-h-[580px] min-h-[320px] rounded-2xl overflow-hidden border border-smoke/10 shadow-[0_40px_100px_rgba(0,0,0,0.40)] select-none"
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          style={{ cursor: 'ew-resize' }}
        >
          {/* AFTER image (right side — full width base) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85&w=1600)' }}
          />

          {/* BEFORE image (left side — clipped) */}
          <div
            className="absolute inset-y-0 left-0 bg-cover bg-center"
            style={{
              width: `${sliderPosition}%`,
              backgroundImage: 'url(https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=85&w=1600)',
              filter: 'grayscale(85%) brightness(0.72)',
            }}
          />

          {/* Labels */}
          <div className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.3em] uppercase bg-jet/55 backdrop-blur-sm text-smoke/60 px-3 py-1.5 rounded-full border border-smoke/10 pointer-events-none">
            Before
          </div>
          <div className="absolute top-4 right-4 font-mono text-[9px] tracking-[0.3em] uppercase bg-jet/55 backdrop-blur-sm text-gold/80 px-3 py-1.5 rounded-full border border-gold/20 pointer-events-none">
            After
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-smoke/70 pointer-events-none"
            style={{ left: `calc(${sliderPosition}% - 1px)` }}
          />

          {/* Drag handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-smoke shadow-[0_4px_24px_rgba(0,0,0,0.45)] border-2 border-jet/15 flex items-center justify-center z-10 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M5 1L1 6L5 11" stroke="#0C0C0C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 1L17 6L13 11" stroke="#0C0C0C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="1" y1="6" x2="17" y2="6" stroke="#0C0C0C" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Bottom hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.3em] uppercase text-smoke/40 bg-jet/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-smoke/10 pointer-events-none whitespace-nowrap">
            Drag to compare
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
