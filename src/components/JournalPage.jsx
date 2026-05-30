import React, { useState } from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    tag: 'Design Philosophy',
    title: 'The Art of Layered Textiles in Modern Interiors',
    excerpt: 'How the careful stacking of fabrics — from jute underlays to silk throws — creates depth, warmth and a sense of lived-in luxury.',
    author: 'Elena Rossi',
    date: 'May 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80&fit=crop',
    featured: true,
  },
  {
    id: 2,
    tag: 'Material Guide',
    title: 'Turkish Marble vs. Italian Travertine',
    excerpt: "A designer's guide to choosing the right stone for bathrooms, kitchens and statement floors.",
    author: 'Marcus Chen',
    date: 'April 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80&fit=crop',
  },
  {
    id: 3,
    tag: 'Trend Report',
    title: 'Warm Neutrals Are Replacing Cold Minimalism',
    excerpt: 'Cream, camel and terracotta are taking over from grey and white as the preferred palette in luxury homes.',
    author: 'Studio Saibaba',
    date: 'March 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=700&q=80&fit=crop',
  },
  {
    id: 4,
    tag: 'Craft Spotlight',
    title: 'Inside the Handloom Ateliers of Varanasi',
    excerpt: 'We visit the weavers behind our most sought-after handloom collection — three generations of craft on the banks of the Ganges.',
    author: 'Priya Sharma',
    date: 'February 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=80&fit=crop',
  },
  {
    id: 5,
    tag: 'Room Reveal',
    title: 'A Mumbai Penthouse Transformed in 90 Days',
    excerpt: 'Full documentation of a 4,200 sq ft penthouse transformation — from concept boards to final reveal.',
    author: 'Elena Rossi',
    date: 'January 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&q=80&fit=crop',
  },
];

export default function JournalPage() {
  const [hovered, setHovered] = useState(null);
  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <main className="min-h-screen bg-cream text-walnut pt-36 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-mono text-[10px] tracking-[0.45em] text-gold uppercase mb-5"
          >
            Design Editorial
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif leading-none text-walnut"
          >
            The Journal
          </motion.h1>
        </div>

        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          onMouseEnter={() => setHovered(featured.id)}
          onMouseLeave={() => setHovered(null)}
          className="relative group grid grid-cols-1 lg:grid-cols-2 border border-walnut/[0.08] mb-px cursor-pointer overflow-hidden rounded-2xl shadow-[0_4px_30px_rgba(44,26,14,0.07)]"
        >
          <div className="relative h-72 lg:h-[520px] overflow-hidden">
            <motion.img
              src={featured.image} alt={featured.title}
              className="w-full h-full object-cover"
              animate={{ scale: hovered === featured.id ? 1.04 : 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="p-10 lg:p-14 flex flex-col justify-center bg-cream-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold border border-gold/30 px-2.5 py-1 bg-cream rounded-full">
                {featured.tag}
              </span>
              <span className="font-mono text-[9px] text-walnut/30">Featured</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-walnut leading-snug mb-5">{featured.title}</h2>
            <p className="text-walnut-mid font-light leading-relaxed mb-8">{featured.excerpt}</p>
            <div className="flex items-center justify-between border-t border-walnut/10 pt-6">
              <div>
                <p className="font-mono text-[10px] text-walnut/50">{featured.author}</p>
                <p className="font-mono text-[10px] text-walnut/30">{featured.date} · {featured.readTime} read</p>
              </div>
              <motion.div
                className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase"
                animate={{ color: hovered === featured.id ? '#C9A84C' : 'rgba(44,26,14,0.3)' }}
                transition={{ duration: 0.3 }}
              >
                Read Article
                <motion.svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                  animate={{ x: hovered === featured.id ? 3 : 0, y: hovered === featured.id ? -3 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gold col-span-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hovered === featured.id ? 1 : 0 }}
            style={{ transformOrigin: 'left', width: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-walnut/[0.08] mt-px">
          {rest.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(article.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative group border-r border-b border-walnut/[0.08] cursor-pointer overflow-hidden bg-cream hover:bg-cream-2 transition-colors duration-400"
            >
              <div className="relative h-52 overflow-hidden">
                <motion.img
                  src={article.image} alt={article.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: hovered === article.id ? 1.06 : 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/10 to-transparent" />
              </div>

              <div className="p-6">
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-gold mb-3 block">{article.tag}</span>
                <h3 className="font-serif text-lg text-walnut leading-snug mb-3">{article.title}</h3>
                <p className="text-sm text-walnut-mid font-light leading-relaxed mb-5 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] text-walnut/25">{article.date} · {article.readTime}</p>
                  <motion.svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                    animate={{
                      x: hovered === article.id ? 2 : 0,
                      y: hovered === article.id ? -2 : 0,
                      color: hovered === article.id ? '#C9A84C' : 'rgba(44,26,14,0.25)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hovered === article.id ? 1 : 0 }}
                style={{ transformOrigin: 'left', width: '100%' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
