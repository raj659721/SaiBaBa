import React, { useState } from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    tag: 'Styling Guide',
    title: 'The Art of Layered Textiles in Modern Interiors',
    excerpt: 'How the careful combination of curtains, cushions and throws — layered thoughtfully — creates depth, warmth and a sense of curated luxury in any room.',
    author: 'Saibaba Design Studio',
    date: 'May 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&q=85&fit=crop',
    featured: true,
  },
  {
    id: 2,
    tag: 'Fabric Guide',
    title: 'Silk vs Linen vs Velvet: Choosing the Right Curtain Fabric',
    excerpt: 'A practical guide to the three most popular curtain fabrics — their look, feel, light control and how to choose the right one for each room.',
    author: 'Saibaba Design Studio',
    date: 'April 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=85&fit=crop',
  },
  {
    id: 3,
    tag: 'Trend Report',
    title: 'Warm Neutrals Are the New Luxury',
    excerpt: 'Cream, camel and terracotta are taking over from cold grey — and handloom textures are leading this shift in Indian home decor.',
    author: 'Saibaba Design Studio',
    date: 'March 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&q=85&fit=crop',
  },
  {
    id: 4,
    tag: 'Craft Spotlight',
    title: 'Inside the Handloom Ateliers of Varanasi',
    excerpt: 'We visit the weavers behind our most sought-after handloom collection — three generations of craft on the banks of the Ganges.',
    author: 'Saibaba Design Studio',
    date: 'February 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=85&fit=crop',
  },
  {
    id: 5,
    tag: 'Home Transformation',
    title: 'A Nashik Home Transformed With New Curtains & Covers',
    excerpt: 'Full documentation of a living room and bedroom transformation using our custom curtains, sofa covers and handloom bedsheets.',
    author: 'Saibaba Design Studio',
    date: 'January 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&q=85&fit=crop',
  },
  {
    id: 6,
    tag: 'Care Guide',
    title: 'How to Care for Your Premium Curtains & Sofa Covers',
    excerpt: 'Expert tips on washing, drying and maintaining your bespoke textiles so they stay beautiful for years — season after season.',
    author: 'Saibaba Design Studio',
    date: 'December 2025',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=85&fit=crop',
  },
  {
    id: 7,
    tag: 'Design Tips',
    title: 'How to Choose Curtain Length for Every Room',
    excerpt: 'Sill-length, apron-length or full-length puddle? A definitive room-by-room guide to picking the right curtain drop for your home.',
    author: 'Saibaba Design Studio',
    date: 'November 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=85&fit=crop',
  },
  {
    id: 8,
    tag: 'Seasonal Edit',
    title: 'Winter Warmth: Textiles That Transform Your Home in December',
    excerpt: 'From thick velvet drapes to handloom wool throws — our favourite picks for creating a warm, cocooning home as temperatures drop.',
    author: 'Saibaba Design Studio',
    date: 'October 2025',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=700&q=85&fit=crop',
  },
  {
    id: 9,
    tag: 'How-to Guide',
    title: 'Measuring Your Windows for Custom Curtains — The Right Way',
    excerpt: 'A step-by-step guide to measuring windows for bespoke curtains, including common mistakes to avoid and how our team can help.',
    author: 'Saibaba Design Studio',
    date: 'September 2025',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=85&fit=crop',
  },
];

export default function JournalPage() {
  const [hovered, setHovered] = useState(null);
  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <main className="min-h-screen bg-smoke text-jet pt-36 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-mono text-[10px] tracking-[0.45em] text-jet-mid uppercase mb-5"
          >
            Design & Decor Stories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif leading-none text-jet"
          >
            The Journal
          </motion.h1>
        </div>

        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          onMouseEnter={() => setHovered(featured.id)}
          onMouseLeave={() => setHovered(null)}
          className="relative group grid grid-cols-1 lg:grid-cols-2 border border-jet/[0.08] mb-px cursor-pointer overflow-hidden rounded-2xl shadow-[0_4px_30px_rgba(12,12,12,0.06)]"
        >
          <div className="relative h-72 lg:h-[520px] overflow-hidden">
            <motion.img
              src={featured.image} alt={featured.title}
              className="w-full h-full object-cover"
              animate={{ scale: hovered === featured.id ? 1.04 : 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="p-10 lg:p-14 flex flex-col justify-center bg-smoke-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-jet border border-jet/20 px-2.5 py-1 bg-smoke rounded-full">
                {featured.tag}
              </span>
              <span className="font-mono text-[9px] text-jet/25">Featured</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-jet leading-snug mb-5">{featured.title}</h2>
            <p className="text-jet-light font-light leading-relaxed mb-8">{featured.excerpt}</p>
            <div className="flex items-center justify-between border-t border-jet/8 pt-6">
              <div>
                <p className="font-mono text-[10px] text-jet/45">{featured.author}</p>
                <p className="font-mono text-[10px] text-jet/25">{featured.date} · {featured.readTime} read</p>
              </div>
              <motion.div
                className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase"
                animate={{ color: hovered === featured.id ? '#0C0C0C' : 'rgba(12,12,12,0.28)' }}
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
            className="absolute bottom-0 left-0 h-[1px] bg-jet col-span-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hovered === featured.id ? 1 : 0 }}
            style={{ transformOrigin: 'left', width: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-jet/[0.08] mt-px">
          {rest.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(article.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative group border-r border-b border-jet/[0.08] cursor-pointer overflow-hidden bg-smoke hover:bg-smoke-2 transition-colors duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <motion.img
                  src={article.image} alt={article.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: hovered === article.id ? 1.06 : 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-smoke via-smoke/10 to-transparent" />
              </div>

              <div className="p-6">
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-jet-mid mb-3 block">{article.tag}</span>
                <h3 className="font-serif text-lg text-jet leading-snug mb-3">{article.title}</h3>
                <p className="text-sm text-jet-light font-light leading-relaxed mb-5 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] text-jet/22">{article.date} · {article.readTime}</p>
                  <motion.svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                    animate={{
                      x: hovered === article.id ? 2 : 0,
                      y: hovered === article.id ? -2 : 0,
                      color: hovered === article.id ? '#0C0C0C' : 'rgba(12,12,12,0.22)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </div>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-[1px] bg-jet"
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
