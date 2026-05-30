import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const categories = [
  {
    name: 'Curtains',
    count: '24',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&fit=crop',
  },
  {
    name: 'Sofa Covers',
    count: '18',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&fit=crop',
  },
  {
    name: 'Bedsheets',
    count: '36',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80&fit=crop',
  },
  {
    name: 'Cushions',
    count: '42',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80&fit=crop',
  },
  {
    name: 'Wallpapers',
    count: '29',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80&fit=crop',
  },
  {
    name: 'Carpets',
    count: '15',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&fit=crop',
  },
  {
    name: 'Home Decor',
    count: '58',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80&fit=crop',
  },
  {
    name: 'Handloom',
    count: '21',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80&fit=crop',
  },
];

const HoverRevealSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 180, mass: 0.5 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  const handleMouseMove = (e) => {
    rawX.set(e.clientX + 24);
    rawY.set(e.clientY - 120);
  };

  return (
    <section
      className="relative bg-[#f5f0eb] py-24 px-4 md:px-16 overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-xs tracking-[0.35em] text-luxury-teal uppercase mb-3">
              Our Collections
            </p>
            <h2 className="text-5xl md:text-7xl font-serif text-luxury-dark leading-none">
              Shop by<br />
              <span className="italic font-light">Category</span>
            </h2>
          </div>
          <p className="hidden md:block text-sm text-luxury-dark/40 font-mono max-w-[200px] text-right leading-relaxed">
            Hover to explore each collection
          </p>
        </div>

        {/* List */}
        <div className="border-t border-luxury-dark/15">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              animate={{
                opacity: activeIndex === null ? 1 : activeIndex === i ? 1 : 0.25,
              }}
              transition={{ duration: 0.3 }}
              className="group relative flex items-center justify-between py-6 md:py-7 cursor-pointer border-b border-luxury-dark/15"
            >
              {/* Active line highlight */}
              <motion.div
                className="absolute bottom-0 left-0 h-[1.5px] bg-luxury-dark"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeIndex === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
              />

              {/* Left: index + name */}
              <div className="flex items-center gap-6 md:gap-10">
                <span className="font-mono text-xs text-luxury-dark/30 w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <motion.span
                  className="text-3xl md:text-5xl font-serif text-luxury-dark tracking-tight"
                  animate={{ x: activeIndex === i ? 8 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {cat.name}
                </motion.span>
              </div>

              {/* Right: count + arrow */}
              <div className="flex items-center gap-6 md:gap-10">
                <span className="font-mono text-xs text-luxury-dark/40 hidden md:block">
                  {cat.count} pieces
                </span>
                <motion.div
                  className="w-10 h-10 rounded-full border border-luxury-dark/20 flex items-center justify-center"
                  animate={{
                    backgroundColor: activeIndex === i ? '#0d4a4a' : 'rgba(0,0,0,0)',
                    borderColor: activeIndex === i ? '#0d4a4a' : 'rgba(13,20,20,0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    animate={{
                      x: activeIndex === i ? 1 : 0,
                      y: activeIndex === i ? -1 : 0,
                      color: activeIndex === i ? '#f5f0eb' : '#0d1414',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating cursor image */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed z-50 pointer-events-none"
            style={{ x, y, top: 0, left: 0 }}
            initial={{ opacity: 0, scale: 0.82, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            exit={{ opacity: 0, scale: 0.82, rotate: -4 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-[220px] md:w-[280px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
              <motion.img
                key={categories[activeIndex].image}
                src={categories[activeIndex].image}
                alt={categories[activeIndex].name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="absolute bottom-3 left-3 right-3 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2">
              <p className="text-white font-serif text-sm">{categories[activeIndex].name}</p>
              <p className="text-white/60 font-mono text-[10px] tracking-widest">{categories[activeIndex].count} PIECES</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HoverRevealSection;
