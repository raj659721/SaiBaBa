import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Velvet Sofa Cover',
    tag: 'Best Seller',
    material: 'Premium Velvet',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=85&w=700',
  },
  {
    id: 2,
    name: 'Hand-Embroidered Cushion',
    tag: 'Artisan',
    material: 'Silk Embroidery',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=85&w=700',
  },
  {
    id: 3,
    name: 'Handloom Dhurrie Carpet',
    tag: 'Handwoven',
    material: 'Pure Cotton',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=85&w=700',
  },
  {
    id: 4,
    name: 'Egyptian Cotton Bedsheet',
    tag: 'Premium',
    material: 'Egyptian Cotton',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=85&w=700',
  },
  {
    id: 5,
    name: 'Silk Window Curtain Pair',
    tag: 'Signature',
    material: 'Pure Silk',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=700',
  },
  {
    id: 6,
    name: 'Block Print Table Runner',
    tag: 'Artisan',
    material: 'Handblock Cotton',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=85&w=700',
  },
  {
    id: 7,
    name: 'Velvet Blackout Curtains',
    tag: 'Best Seller',
    material: 'Blackout Velvet',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85&w=700',
  },
  {
    id: 8,
    name: 'Premium Sofa Throw Blanket',
    tag: 'Cosy Pick',
    material: 'Merino Blend',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=85&w=700',
  },
];

const BestSellingProducts = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-jet py-28 md:py-36 px-4 md:px-12 text-smoke overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-smoke/12 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-smoke/[0.018] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-mono text-[10px] tracking-[0.40em] text-silver uppercase mb-4"
            >
              Customer Favourites
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-smoke leading-none"
            >
              Best Sellers
            </motion.h2>
          </div>
          <Link to="/collections">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.28em] uppercase text-smoke/40 border border-smoke/15 rounded-full px-6 py-3 hover:border-smoke/40 hover:text-smoke transition-all duration-300 group"
            >
              View All Collections
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-smoke/8 bg-jet-3">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                  animate={{ scale: hovered === product.id ? 1.07 : 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jet/60 via-transparent to-transparent" />
                <div className={`absolute inset-0 bg-jet/20 transition-opacity duration-500 ${hovered === product.id ? 'opacity-0' : 'opacity-100'}`} />

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-smoke border border-smoke/25 px-2.5 py-1 bg-jet/55 backdrop-blur-sm rounded-full">
                    {product.tag}
                  </span>
                </div>

                {/* Hover CTA */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-400 ${hovered === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                  <div className="w-full bg-smoke/12 backdrop-blur-md border border-smoke/20 text-smoke py-2.5 rounded-full font-mono text-[9px] tracking-widest uppercase text-center hover:bg-smoke hover:text-jet transition-colors">
                    View Details
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="px-0.5">
                <p className="font-mono text-[9px] tracking-[0.2em] text-silver/50 uppercase mb-1">{product.material}</p>
                <h3 className="font-serif text-base text-smoke leading-snug">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/collections">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-smoke border border-smoke/25 rounded-full px-8 py-4 hover:bg-smoke hover:text-jet transition-all duration-300 group"
            >
              Browse All Products
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </Link>
          <a
            href="https://wa.me/919511285634?text=Hi!%20I%20saw%20your%20best%20sellers%20and%20want%20to%20enquire%20about%20pricing%20and%20availability."
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase bg-walnut text-champagne rounded-full px-8 py-4 hover:bg-walnut/85 transition-all duration-300"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              WhatsApp to Order
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
