import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Royal Velvet Sofa Cover', price: '$120', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Gold Embossed Cushion', price: '$45', image: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Kashmiri Silk Carpet', price: '$850', image: 'https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Handloom Cotton Bedsheet', price: '$90', image: 'https://images.unsplash.com/photo-1522771739223-07141528c371?auto=format&fit=crop&q=80&w=600' },
];

const BestSellingProducts = () => {
  return (
    <section className="bg-[#0f0d0c] py-32 px-4 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-xs tracking-[0.3em] text-luxury-gold uppercase mb-4">Curated Selection</p>
          <h2 className="text-4xl md:text-5xl font-serif">Best Selling Masterpieces</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              style={{ transformPerspective: 1000 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 border border-white/5">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-luxury-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 rounded-full font-mono text-xs tracking-widest uppercase hover:bg-luxury-gold hover:text-luxury-dark transition-colors">
                    View Details
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl mb-1">{product.name || product.title}</h3>
                <p className="font-mono text-luxury-gold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
