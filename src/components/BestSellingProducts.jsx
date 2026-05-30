import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Velvet Sofa Cover',       price: '₹2,499', tag: 'Best Seller', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Hand-Embroidered Cushion', price: '₹899',   tag: 'Artisan',    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Handloom Dhurrie Carpet',  price: '₹4,999', tag: 'Handwoven',  image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Egyptian Cotton Bedsheet', price: '₹1,999', tag: 'Premium',    image: 'https://images.unsplash.com/photo-1522771739223-07141528c371?auto=format&fit=crop&q=80&w=600' },
];

const BestSellingProducts = () => {
  return (
    <section className="bg-jet py-32 px-4 md:px-12 text-smoke">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-silver uppercase mb-4">Customer Favourites</p>
          <h2 className="text-4xl md:text-5xl font-serif text-smoke">Our Best Sellers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 border border-smoke/6">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-jet/20 group-hover:bg-transparent transition-colors duration-500" />

                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-smoke border border-smoke/25 px-2.5 py-1 bg-jet/50 backdrop-blur-sm rounded-full">
                    {product.tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full bg-smoke/10 backdrop-blur-md border border-smoke/20 text-smoke py-3 rounded-full font-mono text-xs tracking-widest uppercase hover:bg-smoke hover:text-jet transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg mb-1.5 text-smoke">{product.name}</h3>
                <p className="font-mono text-sm text-silver">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/collections" className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-smoke/50 border border-smoke/20 rounded-full px-8 py-4 hover:bg-smoke hover:text-jet transition-all duration-300 group">
            View All Collections
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
