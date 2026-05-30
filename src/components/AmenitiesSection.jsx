import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const amenitiesList = [
  {
    id: '01',
    title: 'Handpicked Fabrics',
    description: 'Every fabric is personally selected from trusted weavers and mills across India — from Varanasi silk to Rajasthani block prints and Egyptian cotton.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1000&q=80&fit=crop'
  },
  {
    id: '02',
    title: 'Custom Tailoring',
    description: 'We measure your windows, sofas and beds precisely — then craft each piece to fit perfectly. No standard sizes, no compromises.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&q=80&fit=crop'
  },
  {
    id: '03',
    title: 'Premium Textile Range',
    description: 'Choose from silk, velvet, Belgian linen, Egyptian cotton, handloom and more. Our collection spans over 200 fabrics in every colour and texture.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1000&q=80&fit=crop'
  },
  {
    id: '04',
    title: 'Home Delivery & Installation',
    description: 'Free delivery across India with professional installation by our trained team. We handle everything — from measurement to final fitting.',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1000&q=80&fit=crop'
  }
];

const AmenitiesSection = () => {
  const [activeId, setActiveId] = useState(amenitiesList[0].id);
  const activeAmenity = amenitiesList.find(a => a.id === activeId);

  return (
    <section className="bg-smoke text-jet py-32 px-4 md:px-12 min-h-screen flex items-center relative overflow-hidden">
      <svg
        className="absolute left-[-100px] bottom-[-100px] w-[500px] h-[500px] pointer-events-none select-none"
        viewBox="0 0 400 400" fill="none"
        style={{ opacity: 0.035 }}
      >
        <path d="M200 20L380 200L200 380L20 200Z" stroke="#0C0C0C" strokeWidth="1"/>
        <path d="M200 70L330 200L200 330L70 200Z" stroke="#9A9A9A" strokeWidth="0.7"/>
        <path d="M200 120L280 200L200 280L120 200Z" stroke="#0C0C0C" strokeWidth="0.5"/>
        <line x1="200" y1="20" x2="200" y2="380" stroke="#0C0C0C" strokeWidth="0.3"/>
        <line x1="20" y1="200" x2="380" y2="200" stroke="#0C0C0C" strokeWidth="0.3"/>
        <circle cx="200" cy="20" r="3" fill="#9A9A9A"/>
        <circle cx="380" cy="200" r="3" fill="#9A9A9A"/>
        <circle cx="200" cy="380" r="3" fill="#9A9A9A"/>
        <circle cx="20" cy="200" r="3" fill="#9A9A9A"/>
      </svg>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-jet/[0.025] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-jet/15 to-transparent" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        <div className="space-y-12">
          <div>
            <h2 className="text-sm font-mono tracking-[0.3em] text-jet-mid uppercase mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-jet leading-tight">The Saibaba<br/>Difference</h3>
          </div>

          <div className="space-y-2 border-l-2 border-smoke-3 pl-6">
            {amenitiesList.map((amenity) => (
              <div
                key={amenity.id}
                onMouseEnter={() => setActiveId(amenity.id)}
                className="py-6 cursor-pointer transition-all duration-500 relative group"
              >
                {activeId === amenity.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -left-[27px] top-0 bottom-0 w-[3px] bg-jet rounded-full"
                  />
                )}

                <div className="flex items-baseline gap-6">
                  <span className={`font-mono text-xs transition-colors duration-300 ${activeId === amenity.id ? 'text-jet' : 'text-jet/20'}`}>
                    {amenity.id}
                  </span>
                  <div>
                    <h4 className={`text-2xl font-serif transition-colors duration-300 ${activeId === amenity.id ? 'text-jet' : 'text-jet/40 group-hover:text-jet/70'}`}>
                      {amenity.title}
                    </h4>
                    <AnimatePresence>
                      {activeId === amenity.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-jet-mid font-sans font-light mt-4 leading-relaxed max-w-sm">
                            {amenity.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(12,12,12,0.10)] bg-smoke-3 ring-1 ring-jet/8">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeAmenity.image}
              src={activeAmenity.image}
              alt={activeAmenity.title}
              initial={{ scale: 1.1, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              exit={{ scale: 1.05, opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-jet/70 via-jet/20 to-transparent p-8 pointer-events-none">
            <p className="font-mono text-[9px] tracking-[0.3em] text-silver-light uppercase mb-1">{activeAmenity.id}</p>
            <p className="font-serif text-xl text-smoke">{activeAmenity.title}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;
