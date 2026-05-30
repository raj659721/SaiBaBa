import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const categories = [
  {
    name: 'Curtains',
    count: '24',
    tag: 'Window Dressing',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&fit=crop',
  },
  {
    name: 'Sofa Covers',
    count: '18',
    tag: 'Upholstery',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&fit=crop',
  },
  {
    name: 'Bedsheets',
    count: '36',
    tag: 'Bedroom Linen',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80&fit=crop',
  },
  {
    name: 'Cushions',
    count: '42',
    tag: 'Accent Pieces',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80&fit=crop',
  },
  {
    name: 'Wallpapers',
    count: '29',
    tag: 'Wall Coverings',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80&fit=crop',
  },
  {
    name: 'Carpets',
    count: '15',
    tag: 'Floor Textiles',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&fit=crop',
  },
  {
    name: 'Home Decor',
    count: '58',
    tag: 'Curated Objects',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80&fit=crop',
  },
  {
    name: 'Handloom',
    count: '21',
    tag: 'Artisan Craft',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80&fit=crop',
  },
];

const HoverRevealSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { damping: 22, stiffness: 200, mass: 0.4 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  const handleMouseMove = (e) => {
    rawX.set(e.clientX + 20);
    rawY.set(e.clientY - 130);
  };

  return (
    <section
      className="relative bg-luxury-dark py-28 px-4 md:px-16 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-luxury-teal/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs tracking-[0.35em] text-luxury-teal uppercase mb-4">
              Our Collections
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-off-white leading-tight">
              Shop by Category
            </h2>
          </div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-white/25 uppercase md:text-right">
            Hover to preview
          </p>
        </div>

        {/* Divider list */}
        <div className="border-t border-white/8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              animate={{
                opacity: activeIndex === null ? 1 : activeIndex === i ? 1 : 0.2,
              }}
              transition={{ duration: 0.25 }}
              className="relative flex items-center justify-between py-5 md:py-6 cursor-pointer border-b border-white/8 group"
            >
              {/* Teal line sweep on active */}
              <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-luxury-teal"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeIndex === i ? 1 : 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left', width: '100%' }}
              />

              {/* Left: number + name + tag */}
              <div className="flex items-center gap-5 md:gap-8">
                <span className="font-mono text-[10px] text-white/20 w-5 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex items-baseline gap-4 md:gap-6">
                  <motion.span
                    className="text-xl md:text-2xl font-serif text-off-white tracking-tight"
                    animate={{ x: activeIndex === i ? 6 : 0, color: activeIndex === i ? '#ffffff' : '#e8e2da' }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {cat.name}
                  </motion.span>
                  <motion.span
                    className="hidden md:block font-mono text-[10px] tracking-[0.2em] uppercase"
                    animate={{ opacity: activeIndex === i ? 1 : 0, color: '#2dd4bf' }}
                    transition={{ duration: 0.3 }}
                  >
                    {cat.tag}
                  </motion.span>
                </div>
              </div>

              {/* Right: count + arrow */}
              <div className="flex items-center gap-5 md:gap-8">
                <span className="font-mono text-[11px] text-white/30 hidden md:block tabular-nums">
                  {cat.count} pieces
                </span>

                <motion.div
                  className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0)', borderColor: 'rgba(255,255,255,0.12)' }}
                  animate={{
                    backgroundColor: activeIndex === i ? 'rgba(45,212,191,0.15)' : 'rgba(255,255,255,0)',
                    borderColor: activeIndex === i ? 'rgba(45,212,191,0.6)' : 'rgba(255,255,255,0.12)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.svg
                    width="12" height="12" viewBox="0 0 14 14" fill="none"
                    animate={{
                      x: activeIndex === i ? 1 : 0,
                      y: activeIndex === i ? -1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      d="M1 13L13 1M13 1H4M13 1V10"
                      stroke={activeIndex === i ? '#2dd4bf' : 'rgba(255,255,255,0.4)'}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase">
            {categories.reduce((s, c) => s + parseInt(c.count), 0)}+ curated pieces in total
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            className="text-[11px] font-mono tracking-[0.25em] text-luxury-teal uppercase border border-luxury-teal/30 px-5 py-2.5 rounded-full hover:bg-luxury-teal/10 transition-colors duration-300"
          >
            View All
          </motion.button>
        </div>
      </div>

      {/* Floating cursor image */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed z-50 pointer-events-none"
            style={{ x, y, top: 0, left: 0 }}
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            exit={{ opacity: 0, scale: 0.85, rotate: -3 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-[200px] md:w-[240px] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
              <motion.img
                key={categories[activeIndex].image}
                src={categories[activeIndex].image}
                alt={categories[activeIndex].name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Overlay label */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white font-serif text-sm leading-tight">{categories[activeIndex].name}</p>
                <p className="text-luxury-teal font-mono text-[9px] tracking-[0.25em] uppercase mt-0.5">
                  {categories[activeIndex].count} Pieces
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HoverRevealSection;
