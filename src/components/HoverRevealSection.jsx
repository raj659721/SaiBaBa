import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const categories = [
  { name: 'Curtains',    count: '24', tag: 'Window Dressing', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&fit=crop' },
  { name: 'Sofa Covers', count: '18', tag: 'Upholstery',      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&fit=crop' },
  { name: 'Bedsheets',   count: '36', tag: 'Bedroom Linen',   image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80&fit=crop' },
  { name: 'Cushions',    count: '42', tag: 'Accent Pieces',   image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80&fit=crop' },
  { name: 'Wallpapers',  count: '29', tag: 'Wall Coverings',  image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80&fit=crop' },
  { name: 'Carpets',     count: '15', tag: 'Floor Textiles',  image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&fit=crop' },
  { name: 'Home Decor',  count: '58', tag: 'Curated Objects', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80&fit=crop' },
  { name: 'Handloom',    count: '21', tag: 'Artisan Craft',   image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80&fit=crop' },
];

const total = categories.reduce((s, c) => s + parseInt(c.count), 0);

export default function HoverRevealSection() {
  const [active, setActive] = useState(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { damping: 22, stiffness: 200, mass: 0.4 });
  const y = useSpring(rawY, { damping: 22, stiffness: 200, mass: 0.4 });

  return (
    <section
      className="relative bg-[#050505] overflow-hidden py-32 px-6 md:px-16"
      onMouseMove={(e) => { rawX.set(e.clientX + 24); rawY.set(e.clientY - 140); }}
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-teal/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-luxury-teal/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="font-mono text-[10px] tracking-[0.45em] text-luxury-teal uppercase mb-5">
              Our Collections
            </p>
            <h2 className="text-3xl md:text-[2.6rem] font-serif text-off-white leading-snug">
              Shop by Category
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1">
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase">{total}+ pieces</span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/15 uppercase">hover to preview</span>
          </div>
        </div>

        {/* Category list */}
        <ul className="border-t border-white/[0.06]">
          {categories.map((cat, i) => {
            const isActive = active === i;
            const isFaded = active !== null && !isActive;

            return (
              <motion.li
                key={cat.name}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                animate={{ opacity: isFaded ? 0.18 : 1 }}
                transition={{ duration: 0.2 }}
                className="relative border-b border-white/[0.06] group"
              >
                {/* Teal sweep line */}
                <motion.span
                  className="absolute bottom-[-1px] left-0 h-[1px] bg-luxury-teal"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  style={{ transformOrigin: 'left', width: '100%' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />

                <div className="flex items-center justify-between py-5 md:py-6">
                  {/* Left */}
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="font-mono text-[10px] text-white/20 tabular-nums w-5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="flex items-baseline gap-4 md:gap-6">
                      <motion.span
                        className="font-serif text-xl md:text-2xl tracking-tight"
                        animate={{
                          x: isActive ? 8 : 0,
                          color: isActive ? '#ffffff' : 'rgba(254,254,254,0.65)',
                        }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {cat.name}
                      </motion.span>

                      <motion.span
                        className="hidden md:block font-mono text-[9px] tracking-[0.3em] uppercase text-luxury-teal"
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -4 }}
                        transition={{ duration: 0.3 }}
                      >
                        {cat.tag}
                      </motion.span>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="hidden md:block font-mono text-[11px] text-white/25 tabular-nums">
                      {cat.count} pieces
                    </span>

                    <motion.div
                      className="w-8 h-8 rounded-none border flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(255,255,255,0)', borderColor: 'rgba(255,255,255,0.1)' }}
                      animate={{
                        backgroundColor: isActive ? 'rgba(0,128,128,0.12)' : 'rgba(255,255,255,0)',
                        borderColor: isActive ? 'rgba(0,128,128,0.5)' : 'rgba(255,255,255,0.1)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.svg
                        width="11" height="11" viewBox="0 0 11 11" fill="none"
                        animate={{ x: isActive ? 1 : 0, y: isActive ? -1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          d="M1 10L10 1M10 1H3.5M10 1V7.5"
                          stroke={isActive ? '#008080' : 'rgba(255,255,255,0.35)'}
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>

        {/* Footer row */}
        <div className="mt-14 flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/15 uppercase">
            Saibaba Home Decor — Since 2010
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] uppercase text-white/60 border border-white/12 px-5 py-3 hover:border-luxury-teal hover:text-luxury-teal transition-all duration-300 group"
          >
            View All Categories
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Floating cursor image */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed z-50 pointer-events-none"
            style={{ x, y, top: 0, left: 0 }}
            initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 1.5 }}
            exit={{ opacity: 0, scale: 0.88, rotate: -3 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-[200px] md:w-[230px] aspect-[3/4] overflow-hidden ring-1 ring-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-teal/80 to-transparent z-10" />

              <motion.img
                key={categories[active].image}
                src={categories[active].image}
                alt={categories[active].name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/85 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-serif text-sm leading-tight">{categories[active].name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-3 h-[1px] bg-luxury-teal" />
                  <p className="text-luxury-teal font-mono text-[9px] tracking-[0.3em] uppercase">
                    {categories[active].count} Pieces
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
