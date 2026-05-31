import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80&fit=crop', title: 'Linen Living Room',    cat: 'Living Rooms',   h: 'h-[420px]' },
  { id: 2, src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80&fit=crop', title: 'Silk Curtain Suite',  cat: 'Curtains',       h: 'h-[280px]' },
  { id: 3, src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80&fit=crop', title: 'Velvet Bedroom',      cat: 'Bedrooms',       h: 'h-[340px]' },
  { id: 4, src: 'https://images.unsplash.com/photo-1522771739223-07141528c371?w=800&q=80&fit=crop', title: 'Egyptian Cotton Set', cat: 'Bedsheets',      h: 'h-[360px]' },
  { id: 5, src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80&fit=crop', title: 'Velvet Sofa Cover',   cat: 'Sofa Covers',    h: 'h-[300px]' },
  { id: 6, src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80&fit=crop', title: 'Handwoven Dhurrie',  cat: 'Carpets',        h: 'h-[420px]' },
  { id: 7, src: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80&fit=crop', title: 'Decor Accents',      cat: 'Home Decor',     h: 'h-[280px]' },
  { id: 8, src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80&fit=crop', title: 'Artisan Handloom',   cat: 'Handloom',       h: 'h-[360px]' },
];

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-ivory-2 py-28 md:py-36 px-4 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-[1px] bg-gold" />
            <p className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase">Spaces & Styles</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-walnut leading-none">
            Our Gallery
          </h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`relative mb-5 break-inside-avoid overflow-hidden rounded-2xl ${photo.h} cursor-pointer group shadow-[0_8px_30px_rgba(44,26,14,0.08)]`}
              onClick={() => setSelected(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut/75 via-walnut/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase mb-1">{photo.cat}</p>
                <h3 className="font-serif text-lg text-ivory">{photo.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/gallery"
            className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-walnut border border-walnut/20 rounded-full px-8 py-4 hover:bg-walnut hover:text-ivory transition-all duration-300 group"
          >
            View Full Gallery
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 bg-walnut/60 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden shadow-[0_60px_120px_rgba(44,26,14,0.35)]"
              onClick={e => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.title} className="w-full h-auto object-cover max-h-[80vh]" />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6">
                <p className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase mb-1">{selected.cat}</p>
                <p className="font-serif text-2xl text-ivory">{selected.title}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-walnut/60 backdrop-blur-sm text-ivory/70 hover:text-ivory flex items-center justify-center text-xl leading-none transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
