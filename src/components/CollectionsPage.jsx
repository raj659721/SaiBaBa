import React, { useState } from 'react';
import { motion } from 'framer-motion';

const collections = [
  {
    id: 1,
    name: 'Curtains & Drapes',
    tag: 'Window Dressing',
    count: 24,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=85&fit=crop',
    desc: 'Floor-to-ceiling drapes custom-stitched in silk, linen and velvet for every window size.',
    priceFrom: '₹1,499',
  },
  {
    id: 2,
    name: 'Sofa Covers',
    tag: 'Upholstery',
    count: 18,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85&fit=crop',
    desc: 'Stretch-fit and tailored sofa covers in cotton blends, velvet and woven fabric.',
    priceFrom: '₹1,799',
  },
  {
    id: 3,
    name: 'Bedsheets & Linen',
    tag: 'Bedroom Textiles',
    count: 36,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=85&fit=crop',
    desc: 'Egyptian cotton and handloom bedsheets — 400 thread count luxury at honest prices.',
    priceFrom: '₹899',
  },
  {
    id: 4,
    name: 'Cushion Covers',
    tag: 'Accent Pieces',
    count: 42,
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=85&fit=crop',
    desc: 'Hand-embroidered and block-printed statement cushions by Indian artisan weavers.',
    priceFrom: '₹349',
  },
  {
    id: 5,
    name: 'Wallpapers',
    tag: 'Wall Coverings',
    count: 29,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=85&fit=crop',
    desc: 'Textured and printed wallpapers in peel-and-stick and paste formats to transform any room.',
    priceFrom: '₹299/sqft',
  },
  {
    id: 6,
    name: 'Carpets & Rugs',
    tag: 'Floor Textiles',
    count: 15,
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=85&fit=crop',
    desc: 'Handwoven dhurries, Persian-style and contemporary floor rugs in all sizes.',
    priceFrom: '₹2,499',
  },
  {
    id: 7,
    name: 'Home Decor Accents',
    tag: 'Curated Objects',
    count: 58,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&q=85&fit=crop',
    desc: 'Vases, candle stands, decorative trays and curated accent pieces for every corner.',
    priceFrom: '₹249',
  },
  {
    id: 8,
    name: 'Handloom Textiles',
    tag: 'Artisan Craft',
    count: 21,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=85&fit=crop',
    desc: 'Pure handloom textiles woven by master craftsmen — table runners, throws and more.',
    priceFrom: '₹599',
  },
  {
    id: 9,
    name: 'Table Linen',
    tag: 'Dining & Kitchen',
    count: 22,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=85&fit=crop',
    desc: 'Elegant tablecloths, napkins and placemats for everyday dining and festive occasions.',
    priceFrom: '₹449',
  },
  {
    id: 10,
    name: 'Throw Blankets',
    tag: 'Soft Furnishings',
    count: 16,
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=900&q=85&fit=crop',
    desc: 'Luxury throw blankets and sofa throws in merino, cotton and woven blends.',
    priceFrom: '₹799',
  },
  {
    id: 11,
    name: 'Window Blinds',
    tag: 'Light Control',
    count: 12,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=85&fit=crop',
    desc: 'Roman blinds, roller blinds and wooden venetians — custom fitted to your windows.',
    priceFrom: '₹1,299',
  },
  {
    id: 12,
    name: 'Bed Runners & Bolsters',
    tag: 'Bedroom Styling',
    count: 19,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85&fit=crop',
    desc: 'Decorative bed runners, bolster covers and pillow shams to complete your bedroom look.',
    priceFrom: '₹549',
  },
];

const FILTERS = ['All', 'Window Dressing', 'Upholstery', 'Bedroom Textiles', 'Accent Pieces', 'Floor Textiles'];

export default function CollectionsPage() {
  const [hovered, setHovered] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? collections
    : collections.filter(c => c.tag === activeFilter);

  return (
    <main className="min-h-screen bg-smoke text-jet pt-36 pb-32 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="font-mono text-[10px] tracking-[0.45em] text-jet-mid uppercase mb-5"
        >
          Bespoke Furnishings
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif leading-none text-jet mb-10"
        >
          Our Collections
        </motion.h1>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-2.5"
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-jet text-smoke shadow-[0_4px_20px_rgba(12,12,12,0.18)]'
                  : 'border border-jet/15 text-jet/50 hover:border-jet/40 hover:text-jet bg-transparent'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="h-[1px] w-full bg-gradient-to-r from-jet/20 via-jet/8 to-transparent mb-0" />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-b border-jet/[0.08]">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: Math.min(i * 0.05, 0.3), ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            className="relative group overflow-hidden border-t border-r border-jet/[0.08] cursor-pointer bg-smoke hover:bg-smoke-2 transition-colors duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={item.image} alt={item.name}
                className="w-full h-full object-cover"
                animate={{ scale: hovered === item.id ? 1.06 : 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-smoke via-smoke/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-jet-mid border border-jet/20 px-2.5 py-1 bg-smoke/85 backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>
            </div>

            <div className="p-6 pb-8">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl text-jet">{item.name}</h3>
                <div className="text-right shrink-0 ml-4">
                  <span className="font-mono text-[9px] text-jet/28 block">from</span>
                  <span className="font-mono text-xs text-jet/60">{item.priceFrom}</span>
                </div>
              </div>
              <p className="text-sm text-jet-light font-light leading-relaxed mb-5">{item.desc}</p>

              <motion.div
                className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase"
                animate={{ color: hovered === item.id ? '#0C0C0C' : 'rgba(12,12,12,0.28)' }}
                transition={{ duration: 0.3 }}
              >
                <span>Explore</span>
                <motion.svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                  animate={{ x: hovered === item.id ? 3 : 0, y: hovered === item.id ? -3 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </motion.div>
            </div>

            <motion.div
              className="absolute bottom-0 left-0 h-[1px] bg-jet"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hovered === item.id ? 1 : 0 }}
              style={{ transformOrigin: 'left', width: '100%' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-[10px] tracking-[0.3em] text-jet/20 uppercase">
          {collections.reduce((s, c) => s + c.count, 0)}+ curated pieces — updated seasonally
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/919511285634?text=Hi!%20I%20would%20like%20to%20request%20a%20catalogue%20of%20your%20collections."
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-jet border border-jet/25 rounded-full px-7 py-3.5 hover:bg-jet hover:text-smoke transition-all duration-300 cursor-pointer"
            >
              Request a Catalogue
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </a>
        </div>
      </div>
    </main>
  );
}
