import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Spaces', path: '/spaces' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Floating Glass Pill Navbar */}
      <motion.header 
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 left-1/2 z-50 w-[95%] max-w-6xl"
      >
        <div className="glass-pill px-6 md:px-10 py-4 grid grid-cols-2 md:grid-cols-3 items-center shadow-2xl shadow-black/50 w-full">
          
          {/* Logo - Left aligned */}
          <div className="flex justify-start">
            <Link to="/" className="text-2xl font-serif tracking-widest text-white hover:text-luxury-teal transition-colors">
              SAIBABA
            </Link>
          </div>

          {/* Navigation - Center aligned (hidden on small screens) */}
          <div className="hidden md:flex justify-center w-full">
            <nav className="flex items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-[10px] lg:text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                    location.pathname === link.path ? 'text-luxury-teal drop-shadow-[0_0_8px_rgba(0,128,128,0.8)]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Button - Right aligned */}
          <div className="flex justify-end">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-xs tracking-widest uppercase bg-white text-luxury-dark px-6 py-3 rounded-full hover:bg-luxury-teal hover:text-white transition-all duration-300 font-medium"
            >
              Inquire
            </button>
          </div>

        </div>
      </motion.header>

      {/* Consultation Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-luxury-dark/80"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-luxury-dark border border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl w-full relative shadow-[0_0_50px_rgba(0,128,128,0.1)]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-2xl text-white/50 hover:text-white transition-colors"
              >
                &times;
              </button>
              
              <h2 className="text-3xl md:text-5xl font-serif mb-2 text-white">Private Consultation</h2>
              <p className="text-xs text-luxury-teal font-mono mb-10 tracking-[0.2em] uppercase">Curated Spatial Experiences</p>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Full Name" className="w-full border-b border-white/20 bg-transparent py-2 text-white placeholder-white/40 outline-none focus:border-luxury-teal transition-colors" />
                  <input type="email" placeholder="Email Address" className="w-full border-b border-white/20 bg-transparent py-2 text-white placeholder-white/40 outline-none focus:border-luxury-teal transition-colors" />
                </div>
                <select className="w-full border-b border-white/20 bg-transparent py-2 text-white/70 outline-none focus:border-luxury-teal transition-colors appearance-none">
                  <option value="" className="bg-luxury-dark">Select Project Scale</option>
                  <option value="single" className="bg-luxury-dark">Single Room Curation</option>
                  <option value="apartment" className="bg-luxury-dark">Full Apartment Remodel</option>
                  <option value="villa" className="bg-luxury-dark">Luxury Villa Architecture</option>
                </select>
                <textarea placeholder="Describe your vision..." rows={3} className="w-full border-b border-white/20 bg-transparent py-2 text-white placeholder-white/40 outline-none focus:border-luxury-teal transition-colors resize-none"></textarea>
                
                <button type="button" className="w-full bg-luxury-teal text-white py-4 rounded-full tracking-[0.2em] text-xs uppercase hover:bg-white hover:text-luxury-dark transition-colors font-semibold">
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
