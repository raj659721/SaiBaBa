import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Curtains & Drapes',
    count: '24',
    tag: 'Window Dressing',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=700&q=85&fit=crop',
    path: '/collections'
  },
  {
    name: 'Sofa Covers',
    count: '18',
    tag: 'Upholstery',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=85&fit=crop',
    path: '/collections'
  },
  {
    name: 'Bedsheets & Linen',
    count: '36',
    tag: 'Bedroom Textiles',
    image: 'https://images.unsplash.com/photo-1522771739223-07141528c371?w=700&q=85&fit=crop',
    path: '/collections'
  },
  {
    name: 'Cushion Covers',
    count: '42',
    tag: 'Accent Pieces',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=85&fit=crop',
    path: '/collections'
  },
  {
    name: 'Wallpapers',
    count: '29',
    tag: 'Wall Coverings',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b46a013?w=700&q=85&fit=crop',
    path: '/collections'
  },
  {
    name: 'Carpets & Rugs',
    count: '15',
    tag: 'Floor Textiles',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=85&fit=crop',
    path: '/collections'
  },
  {
    name: 'Home Decor Accents',
    count: '58',
    tag: 'Curated Objects',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=85&fit=crop',
    path: '/collections'
  },
  {
    name: 'Handloom Textiles',
    count: '21',
    tag: 'Artisan Craft',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=85&fit=crop',
    path: '/collections'
  },
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
      className="relative bg-smoke-2 overflow-hidden py-28 md:py-36 px-6 md:px-16"
      onMouseMove={(e) => { rawX.set(e.clientX + 24); rawY.set(e.clientY - 140); }}
    >
      {/* Ornamental medallion — contained inside overflow-hidden */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] pointer-events-none select-none translate-x-1/4"
        viewBox="0 0 400 400" fill="none"
        style={{ opacity: 0.035 }}
      >
        <path d="M200 20L380 200L200 380L20 200Z" stroke="#0C0C0C" strokeWidth="1.2"/>
        <path d="M200 60L340 200L200 340L60 200Z" stroke="#0C0C0C" strokeWidth="0.6"/>
        <path d="M200 100L300 200L200 300L100 200Z" stroke="#9A9A9A" strokeWidth="0.8"/>
        <path d="M200 140L260 200L200 260L140 200Z" stroke="#0C0C0C" strokeWidth="0.5"/>
        <line x1="200" y1="20" x2="200" y2="380" stroke="#0C0C0C" strokeWidth="0.3"/>
        <line x1="20" y1="200" x2="380" y2="200" stroke="#0C0C0C" strokeWidth="0.3"/>
        <circle cx="200" cy="20" r="3.5" fill="#9A9A9A"/>
        <circle cx="380" cy="200" r="3.5" fill="#9A9A9A"/>
        <circle cx="200" cy="380" r="3.5" fill="#9A9A9A"/>
        <circle cx="20" cy="200" r="3.5" fill="#9A9A9A"/>
        <circle cx="200" cy="200" r="6" stroke="#9A9A9A" strokeWidth="0.8" fill="none"/>
        <circle cx="200" cy="200" r="2" fill="#9A9A9A"/>
      </svg>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-jet/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-jet/8 to-transparent" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-jet/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-16 md:mb-20">
          <div>
            <p className="font-mono text-[10px] tracking-[0.45em] text-jet-mid uppercase mb-5">
              Our Collections
            </p>
            <h2 className="text-3xl md:text-[2.6rem] font-serif text-jet leading-snug">
              Shop by Category
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1">
            <span className="font-mono text-[10px] tracking-[0.3em] text-jet/25 uppercase">{total}+ pieces</span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-jet/18 uppercase">hover to preview</span>
          </div>
        </div>

        {/* Category list */}
        <ul className="border-t border-jet/10">
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
                className="relative border-b border-jet/10 group"
              >
                {/* Sweep line */}
                <motion.span
                  className="absolute bottom-[-1px] left-0 h-[1px] bg-jet"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  style={{ transformOrigin: 'left', width: '100%' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />

                <Link to={cat.path} className="block">
                  <div className="flex items-center justify-between py-5 md:py-6">
                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="font-mono text-[10px] text-jet/18 tabular-nums w-5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <div className="flex items-baseline gap-4 md:gap-6">
                        <motion.span
                          className="font-serif text-xl md:text-2xl tracking-tight"
                          animate={{
                            x: isActive ? 8 : 0,
                            color: isActive ? '#0C0C0C' : 'rgba(12,12,12,0.45)',
                          }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {cat.name}
                        </motion.span>

                        <motion.span
                          className="hidden md:block font-mono text-[9px] tracking-[0.3em] uppercase text-silver"
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -4 }}
                          transition={{ duration: 0.3 }}
                        >
                          {cat.tag}
                        </motion.span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 md:gap-10">
                      <span className="hidden md:block font-mono text-[11px] text-jet/25 tabular-nums">
                        {cat.count} pieces
                      </span>

                      <motion.div
                        className="w-8 h-8 rounded-none border flex items-center justify-center shrink-0"
                        animate={{
                          backgroundColor: isActive ? 'rgba(12,12,12,0.06)' : 'rgba(12,12,12,0)',
                          borderColor:     isActive ? 'rgba(12,12,12,0.35)' : 'rgba(12,12,12,0.12)',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                          animate={{ x: isActive ? 1 : 0, y: isActive ? -1 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path d="M1 10L10 1M10 1H3.5M10 1V7.5"
                            stroke={isActive ? '#0C0C0C' : 'rgba(12,12,12,0.25)'}
                            strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
                          />
                        </motion.svg>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Footer row */}
        <div className="mt-14 flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-[0.3em] text-jet/20 uppercase">
            Saibaba Home Decor — Since 2010
          </p>
          <Link to="/collections">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] uppercase text-jet/45 border border-jet/15 rounded-full px-5 py-3 hover:border-jet hover:text-jet hover:bg-jet/4 transition-all duration-300 group cursor-pointer"
            >
              View All Categories
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </Link>
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
            <div className="relative w-[200px] md:w-[230px] aspect-[3/4] overflow-hidden ring-1 ring-jet/15 shadow-[0_25px_60px_rgba(12,12,12,0.20)] rounded-xl">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-silver/60 to-transparent z-10" />

              <motion.img
                key={categories[active].image}
                src={categories[active].image}
                alt={categories[active].name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-jet/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-smoke font-serif text-sm leading-tight">{categories[active].name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-3 h-[1px] bg-silver" />
                  <p className="text-silver font-mono text-[9px] tracking-[0.3em] uppercase">
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
