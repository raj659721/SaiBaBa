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
      className="relative bg-cream-2 overflow-hidden py-32 px-6 md:px-16"
      onMouseMove={(e) => { rawX.set(e.clientX + 24); rawY.set(e.clientY - 140); }}
    >
      {/* Subtle ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-walnut/8 to-transparent" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-20">
          <div>
            <p className="font-mono text-[10px] tracking-[0.45em] text-gold uppercase mb-5">
              Our Collections
            </p>
            <h2 className="text-3xl md:text-[2.6rem] font-serif text-walnut leading-snug">
              Shop by Category
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1">
            <span className="font-mono text-[10px] tracking-[0.3em] text-walnut/30 uppercase">{total}+ pieces</span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-walnut/20 uppercase">hover to preview</span>
          </div>
        </div>

        {/* Category list */}
        <ul className="border-t border-walnut/10">
          {categories.map((cat, i) => {
            const isActive = active === i;
            const isFaded = active !== null && !isActive;

            return (
              <motion.li
                key={cat.name}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                animate={{ opacity: isFaded ? 0.22 : 1 }}
                transition={{ duration: 0.2 }}
                className="relative border-b border-walnut/10 group"
              >
                {/* Gold sweep line */}
                <motion.span
                  className="absolute bottom-[-1px] left-0 h-[1px] bg-gold"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  style={{ transformOrigin: 'left', width: '100%' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />

                <div className="flex items-center justify-between py-5 md:py-6">
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="font-mono text-[10px] text-walnut/20 tabular-nums w-5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="flex items-baseline gap-4 md:gap-6">
                      <motion.span
                        className="font-serif text-xl md:text-2xl tracking-tight"
                        animate={{
                          x: isActive ? 8 : 0,
                          color: isActive ? '#2C1A0E' : 'rgba(44,26,14,0.55)',
                        }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {cat.name}
                      </motion.span>

                      <motion.span
                        className="hidden md:block font-mono text-[9px] tracking-[0.3em] uppercase text-gold"
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -4 }}
                        transition={{ duration: 0.3 }}
                      >
                        {cat.tag}
                      </motion.span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="hidden md:block font-mono text-[11px] text-walnut/30 tabular-nums">
                      {cat.count} pieces
                    </span>

                    <motion.div
                      className="w-8 h-8 rounded-none border flex items-center justify-center shrink-0"
                      animate={{
                        backgroundColor: isActive ? 'rgba(201,168,76,0.12)' : 'rgba(44,26,14,0)',
                        borderColor:     isActive ? 'rgba(201,168,76,0.5)'  : 'rgba(44,26,14,0.12)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                        animate={{ x: isActive ? 1 : 0, y: isActive ? -1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path d="M1 10L10 1M10 1H3.5M10 1V7.5"
                          stroke={isActive ? '#C9A84C' : 'rgba(44,26,14,0.3)'}
                          strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
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
          <p className="font-mono text-[10px] tracking-[0.3em] text-walnut/20 uppercase">
            Saibaba Home Decor — Since 2010
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] uppercase text-walnut/50 border border-walnut/15 rounded-full px-5 py-3 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300 group"
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
            <div className="relative w-[200px] md:w-[230px] aspect-[3/4] overflow-hidden ring-1 ring-gold/20 shadow-[0_25px_60px_rgba(44,26,14,0.25)] rounded-xl">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/80 to-transparent z-10" />

              <motion.img
                key={categories[active].image}
                src={categories[active].image}
                alt={categories[active].name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-walnut/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-cream font-serif text-sm leading-tight">{categories[active].name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-3 h-[1px] bg-gold" />
                  <p className="text-gold font-mono text-[9px] tracking-[0.3em] uppercase">
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
