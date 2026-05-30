import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const amenitiesList = [
  {
    id: '01',
    title: 'Bespoke Curation',
    description: 'Every piece is hand-selected from the finest Italian ateliers, ensuring absolute exclusivity.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80&fit=crop'
  },
  {
    id: '02',
    title: 'Architectural Lighting',
    description: 'Cinematic illumination designed to interact with spatial shadows and material textures.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1000&q=80&fit=crop'
  },
  {
    id: '03',
    title: 'Material Index',
    description: 'Access to rare Turkish marbles, sustainable exotic woods, and full-grain aniline leathers.',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1000&q=80&fit=crop'
  },
  {
    id: '04',
    title: 'White Glove Delivery',
    description: 'Seamless global installation handled by our specialized logistics and design teams.',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1000&q=80&fit=crop'
  }
];

const AmenitiesSection = () => {
  const [activeId, setActiveId] = useState(amenitiesList[0].id);
  const activeAmenity = amenitiesList.find(a => a.id === activeId);

  return (
    <section className="bg-cream text-walnut py-32 px-4 md:px-12 min-h-screen flex items-center relative overflow-hidden">
      {/* Luxury ornamental — bottom left large medallion */}
      <svg
        className="absolute left-[-100px] bottom-[-100px] w-[500px] h-[500px] pointer-events-none select-none"
        viewBox="0 0 400 400" fill="none"
        style={{ opacity: 0.04 }}
      >
        <path d="M200 20L380 200L200 380L20 200Z" stroke="#2C1A0E" strokeWidth="1"/>
        <path d="M200 70L330 200L200 330L70 200Z" stroke="#C9A84C" strokeWidth="0.7"/>
        <path d="M200 120L280 200L200 280L120 200Z" stroke="#2C1A0E" strokeWidth="0.5"/>
        <line x1="200" y1="20" x2="200" y2="380" stroke="#2C1A0E" strokeWidth="0.3"/>
        <line x1="20" y1="200" x2="380" y2="200" stroke="#2C1A0E" strokeWidth="0.3"/>
        <circle cx="200" cy="20" r="3" fill="#C9A84C"/>
        <circle cx="380" cy="200" r="3" fill="#C9A84C"/>
        <circle cx="200" cy="380" r="3" fill="#C9A84C"/>
        <circle cx="20" cy="200" r="3" fill="#C9A84C"/>
      </svg>
      {/* Warm ambient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* Left Side */}
        <div className="space-y-12">
          <div>
            <h2 className="text-sm font-mono tracking-[0.3em] text-gold uppercase mb-4">The Experience</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-walnut leading-tight">Uncompromising<br/>Standards</h3>
          </div>

          <div className="space-y-2 border-l-2 border-cream-3 pl-6">
            {amenitiesList.map((amenity) => (
              <div
                key={amenity.id}
                onMouseEnter={() => setActiveId(amenity.id)}
                className="py-6 cursor-pointer transition-all duration-500 relative group"
              >
                {activeId === amenity.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -left-[27px] top-0 bottom-0 w-[3px] bg-gold rounded-full"
                  />
                )}

                <div className="flex items-baseline gap-6">
                  <span className={`font-mono text-xs transition-colors duration-300 ${activeId === amenity.id ? 'text-gold' : 'text-walnut/25'}`}>
                    {amenity.id}
                  </span>
                  <div>
                    <h4 className={`text-2xl font-serif transition-colors duration-300 ${activeId === amenity.id ? 'text-walnut' : 'text-walnut/45 group-hover:text-walnut/75'}`}>
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
                          <p className="text-walnut-mid font-sans font-light mt-4 leading-relaxed max-w-sm">
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

        {/* Right Side */}
        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(44,26,14,0.12)] bg-cream-3 ring-1 ring-walnut/8">
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
          {/* Bottom label tag */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-walnut/70 via-walnut/20 to-transparent p-8 pointer-events-none">
            <p className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase mb-1">{activeAmenity.id}</p>
            <p className="font-serif text-xl text-cream">{activeAmenity.title}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;
