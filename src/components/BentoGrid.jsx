import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { bentoCards } from '../data/decorData';

const BentoGrid = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative bg-cream-2 py-32 px-4 md:px-12 overflow-hidden">
      {/* Luxury corner flourish — top left */}
      <svg
        className="absolute left-0 top-0 w-[320px] h-[320px] pointer-events-none select-none"
        viewBox="0 0 200 200" fill="none"
        style={{ opacity: 0.05 }}
      >
        <path d="M0 100L100 0" stroke="#2C1A0E" strokeWidth="0.8"/>
        <path d="M0 160L160 0" stroke="#2C1A0E" strokeWidth="0.5"/>
        <path d="M0 40L40 0" stroke="#C9A84C" strokeWidth="0.8"/>
        <path d="M20 0 Q0 0 0 20" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
        <path d="M50 0 Q0 0 0 50" stroke="#2C1A0E" strokeWidth="0.5" fill="none"/>
        <path d="M90 0 Q0 0 0 90" stroke="#2C1A0E" strokeWidth="0.4" fill="none"/>
        <circle cx="20" cy="0" r="2" fill="#C9A84C"/>
        <circle cx="0" cy="20" r="2" fill="#C9A84C"/>
      </svg>
      {/* Warm ambient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs tracking-[0.3em] text-gold uppercase mb-4"
          >
            Curated Collections
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-5xl md:text-7xl font-serif text-walnut leading-none"
          >
            Rare Pieces,<br />
            <span className="text-gold">Singular Vision</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[280px]">
          {bentoCards.map((card, index) => {
            const isSignature = card.id === 'penthouse-suite';
            const colSpan = isSignature ? 'md:col-span-8 md:row-span-2' : 'md:col-span-4';

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02 }}
                className={`relative group overflow-hidden rounded-2xl cursor-pointer ${colSpan} ${
                  isSignature
                    ? 'border border-gold/30 shadow-[0_0_60px_rgba(201,168,76,0.12)]'
                    : 'border border-walnut/8 shadow-[0_4px_20px_rgba(44,26,14,0.07)]'
                }`}
              >
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-walnut/40 group-hover:bg-walnut/20 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut/85 via-walnut/15 to-transparent" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/[0.04] transition-all duration-700" />

                {/* Hover detail content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="border-t border-cream/15 pt-6">
                    <h3 className="text-2xl md:text-3xl font-serif mb-2">{card.title}</h3>
                    <p className="font-mono text-xs tracking-widest text-gold mb-4">{card.dimensions}</p>
                    <p className="text-sm font-light leading-relaxed text-cream/70 mb-6">{card.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {card.materials.map(mat => (
                        <span key={mat} className="px-3 py-1 border border-cream/20 rounded-full text-xs text-cream/80 backdrop-blur-md bg-cream/5">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Default title */}
                <div className={`absolute p-8 flex flex-col justify-between h-full text-cream pointer-events-none group-hover:opacity-0 transition-opacity duration-300 ${isSignature ? 'top-0 left-0' : 'inset-0'}`}>
                  <span className="font-mono text-xs text-cream/30">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    {isSignature && (
                      <span className="text-xs font-mono tracking-[0.25em] text-gold uppercase mb-3 block">
                        Signature Collection
                      </span>
                    )}
                    <h3 className="text-2xl md:text-4xl font-serif leading-tight">{card.title}</h3>
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
