import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { bentoCards } from '../data/decorData';

const BentoGrid = () => {
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative bg-cream-2 py-28 md:py-36 px-4 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      {/* Corner ornament */}
      <svg className="absolute left-0 top-0 w-[260px] h-[260px] pointer-events-none select-none" viewBox="0 0 200 200" fill="none" style={{ opacity: 0.06 }}>
        <path d="M0 100L100 0" stroke="#C9A84C" strokeWidth="0.8"/>
        <path d="M0 160L160 0" stroke="#C9A84C" strokeWidth="0.5"/>
        <path d="M0 40L40 0" stroke="#C9A84C" strokeWidth="0.8"/>
        <path d="M20 0 Q0 0 0 20" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
        <circle cx="20" cy="0" r="2" fill="#C9A84C"/>
        <circle cx="0" cy="20" r="2" fill="#C9A84C"/>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-6 h-[1px] bg-gold" />
            <p className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase">Signature Pieces</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-5xl md:text-7xl font-serif text-walnut leading-none"
          >
            Crafted for<br />
            <span className="text-walnut-mid italic font-light">Every Home</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[280px]">
          {bentoCards.map((card, index) => {
            const isSignature = card.id === 'penthouse-suite';
            const colSpan     = isSignature ? 'md:col-span-8 md:row-span-2' : 'md:col-span-4';

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02 }}
                className={`relative group overflow-hidden rounded-2xl cursor-pointer ${colSpan} border border-walnut/10 shadow-[0_8px_30px_rgba(44,26,14,0.10)]`}
              >
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-walnut/30 group-hover:bg-walnut/10 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/85 via-walnut/15 to-transparent" />

                {/* Hover detail */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="border-t border-gold/25 pt-6">
                    <h3 className="text-2xl md:text-3xl font-serif mb-2 text-ivory">{card.title}</h3>
                    <p className="font-mono text-xs tracking-widest text-gold mb-3">{card.dimensions}</p>
                    <p className="text-sm font-light leading-relaxed text-ivory/75 mb-5">{card.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {card.materials.map(mat => (
                        <span key={mat} className="px-3 py-1 border border-gold/30 rounded-full text-xs text-gold/80 bg-walnut/30 backdrop-blur-md">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Default title */}
                <div className={`absolute p-8 flex flex-col justify-between h-full text-ivory pointer-events-none group-hover:opacity-0 transition-opacity duration-300 ${isSignature ? 'top-0 left-0' : 'inset-0'}`}>
                  <span className="font-mono text-xs text-ivory/30">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    {isSignature && (
                      <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase mb-3 block">
                        Signature Collection
                      </span>
                    )}
                    <h3 className="text-2xl md:text-4xl font-serif leading-tight text-ivory">{card.title}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
