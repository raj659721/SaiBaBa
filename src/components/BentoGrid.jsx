import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { bentoCards } from '../data/decorData';

const BentoGrid = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative bg-luxury-dark py-32 px-4 md:px-12 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/bento-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-luxury-dark/80" />
      </div>

      {/* Teal glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs tracking-[0.3em] text-luxury-teal uppercase mb-4"
          >
            Curated Collections
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-5xl md:text-7xl font-serif text-off-white leading-none"
          >
            Rare Pieces,<br />
            <span className="text-luxury-teal">Singular Vision</span>
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
                    ? 'border border-luxury-teal/30 shadow-[0_0_60px_rgba(0,128,128,0.1)]'
                    : 'border border-white/5'
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 ${
                  isSignature
                    ? 'bg-gradient-to-br from-white/10 to-luxury-teal/10'
                    : `bg-gradient-to-br ${
                        index === 1 ? 'from-white/8 to-white/3' :
                        index === 2 ? 'from-luxury-teal/10 to-luxury-dark' :
                        'from-white/5 to-luxury-dark'
                      }`
                } transition-all duration-700`} />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-luxury-teal/0 group-hover:bg-luxury-teal/5 transition-all duration-700" />

                {/* Hover content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="border-t border-white/10 pt-6">
                    <h3 className="text-2xl md:text-3xl font-serif mb-2">{card.title}</h3>
                    <p className="font-mono text-xs tracking-widest text-luxury-teal mb-4">{card.dimensions}</p>
                    <p className="text-sm font-light leading-relaxed text-white/70 mb-6">{card.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {card.materials.map(mat => (
                        <span key={mat} className="px-3 py-1 border border-white/20 rounded-full text-xs text-white/80 backdrop-blur-md">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Default title */}
                <div className={`absolute p-8 flex flex-col justify-between h-full text-white pointer-events-none group-hover:opacity-0 transition-opacity duration-300 ${isSignature ? 'top-0 left-0' : 'inset-0'}`}>
                  <span className="font-mono text-xs text-white/30">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    {isSignature && (
                      <span className="text-xs font-mono tracking-[0.25em] text-luxury-teal uppercase mb-3 block">
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
