import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const amenitiesList = [
  {
    id: '01',
    title: 'Bespoke Curation',
    description: 'Every piece is hand-selected from the finest Italian ateliers, ensuring absolute exclusivity.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b46a013?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '02',
    title: 'Architectural Lighting',
    description: 'Cinematic illumination designed to interact with spatial shadows and material textures.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '03',
    title: 'Material Index',
    description: 'Access to rare Turkish marbles, sustainable exotic woods, and full-grain aniline leathers.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '04',
    title: 'White Glove Delivery',
    description: 'Seamless global installation handled by our specialized logistics and design teams.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000'
  }
];

const AmenitiesSection = () => {
  const [activeId, setActiveId] = useState(amenitiesList[0].id);

  const activeAmenity = amenitiesList.find(a => a.id === activeId);

  return (
    <section className="bg-luxury-dark text-white py-32 px-4 md:px-12 min-h-screen flex items-center relative overflow-hidden">
      {/* Blurred background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-luxury-teal/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side: Vertical Menu */}
        <div className="space-y-12">
          <div>
            <h2 className="text-sm font-mono tracking-[0.3em] text-luxury-teal uppercase mb-4">The Experience</h2>
            <h3 className="text-4xl md:text-6xl font-serif leading-tight">Uncompromising<br/>Standards</h3>
          </div>

          <div className="space-y-2 border-l border-white/10 pl-6">
            {amenitiesList.map((amenity) => (
              <div 
                key={amenity.id}
                onMouseEnter={() => setActiveId(amenity.id)}
                className={`py-6 cursor-pointer transition-all duration-500 relative group`}
              >
                {/* Active Indicator line */}
                {activeId === amenity.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -left-[25px] top-0 bottom-0 w-[2px] bg-luxury-teal"
                  />
                )}
                
                <div className="flex items-baseline gap-6">
                  <span className={`font-mono text-xs transition-colors duration-300 ${activeId === amenity.id ? 'text-luxury-teal' : 'text-white/30'}`}>
                    {amenity.id}
                  </span>
                  <div>
                    <h4 className={`text-2xl font-serif transition-colors duration-300 ${activeId === amenity.id ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
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
                          <p className="text-white/60 font-sans font-light mt-4 leading-relaxed max-w-sm">
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

        {/* Right Side: Large Image Preview */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-white/5">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeAmenity.image}
              src={activeAmenity.image}
              alt={activeAmenity.title}
              initial={{ scale: 1.1, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              exit={{ scale: 1.05, opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;
