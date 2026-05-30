import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { galleryData } from '../data/galleryData';

gsap.registerPlugin(ScrollTrigger);

const MASONRY_CONFIG = [
  { col: 0, height: 'h-[420px]', parallaxSpeed: -0.08 },
  { col: 1, height: 'h-[320px]', parallaxSpeed: 0.05 },
  { col: 0, height: 'h-[300px]', parallaxSpeed: -0.05 },
  { col: 1, height: 'h-[440px]', parallaxSpeed: 0.10 },
];

const SpacesPage = () => {
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const galleryRef = useRef(null);

  const categories = ['All', 'Living Rooms', 'Master Bedrooms', 'Bespoke Modular Kitchens'];
  const filteredSpaces = activeCategory === 'All' ? galleryData : galleryData.filter(s => s.category === activeCategory);

  // GSAP parallax on gallery items
  useEffect(() => {
    if (!galleryRef.current) return;
    const items = galleryRef.current.querySelectorAll('.gallery-item-inner');
    items.forEach((el, i) => {
      const speed = MASONRY_CONFIG[i % MASONRY_CONFIG.length].parallaxSpeed;
      gsap.to(el, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [filteredSpaces]);

  return (
    <main className="min-h-screen pt-40 pb-32 px-4 md:px-12 bg-luxury-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-luxury-teal uppercase mb-4">Virtual Showroom</p>
          <h1 className="text-6xl md:text-8xl font-serif leading-none mb-12">Spatial<br />Concepts</h1>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-2 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-luxury-teal text-white shadow-[0_0_20px_rgba(0,128,128,0.4)]'
                    : 'border border-white/15 text-white/60 hover:border-luxury-teal/50 hover:text-white'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div ref={galleryRef} className="columns-1 md:columns-2 gap-6 space-y-0">
          {filteredSpaces.map((space, i) => {
            const config = MASONRY_CONFIG[i % MASONRY_CONFIG.length];
            return (
              <motion.div
                layoutId={`space-${space.id}`}
                key={space.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`gallery-item relative mb-6 break-inside-avoid overflow-hidden rounded-2xl ${config.height} cursor-pointer group`}
                onDoubleClick={() => setSelectedSpace(space)}
              >
                <div className="gallery-item-inner absolute inset-[-15%] w-[130%] h-[130%]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${space.image})` }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-xs text-luxury-teal tracking-widest mb-1">{space.category}</p>
                  <h3 className="font-serif text-2xl text-white">{space.title}</h3>
                </div>
                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-xs text-white/50 border border-white/20 rounded-full px-3 py-1">
                  Double-click to view
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {selectedSpace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-luxury-dark/95 p-4 md:p-12 backdrop-blur-2xl"
            onClick={() => setSelectedSpace(null)}
          >
            <motion.div
              layoutId={`space-${selectedSpace.id}`}
              className="relative w-full max-w-6xl h-[85vh] rounded-3xl overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
              style={{ boxShadow: '0 0 100px rgba(0,128,128,0.15)' }}
            >
              <div className="w-full md:w-3/5 h-72 md:h-full bg-cover bg-center" style={{ backgroundImage: `url(${selectedSpace.image})` }} />
              <div className="w-full md:w-2/5 h-full p-8 md:p-12 flex flex-col justify-center bg-[#0a0a0a] border-l border-white/5">
                <button onClick={() => setSelectedSpace(null)} className="absolute top-6 right-6 text-3xl text-white/30 hover:text-white transition-colors">&times;</button>
                <p className="font-mono text-xs text-luxury-teal tracking-[0.3em] mb-4 uppercase">{selectedSpace.category}</p>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">{selectedSpace.title}</h2>
                <p className="text-white/50 mb-10 font-light leading-relaxed">{selectedSpace.description}</p>
                <div className="space-y-4">
                  {[
                    { label: 'DESIGNER', value: selectedSpace.designer },
                    { label: 'ASPECT RATIO', value: selectedSpace.aspectRatio },
                    { label: 'STYLE', value: selectedSpace.style },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between border-b border-white/8 pb-3">
                      <span className="font-mono text-xs text-white/30">{item.label}</span>
                      <span className="text-sm text-white/80">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default SpacesPage;
