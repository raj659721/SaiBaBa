import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Spaces', path: '/spaces' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050505]/95 border-b border-white/8'
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        {/* Top accent line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-luxury-teal/60 to-transparent" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-6 h-6 border border-luxury-teal/60 rotate-45 flex items-center justify-center group-hover:border-luxury-teal transition-colors duration-300">
              <div className="w-1.5 h-1.5 bg-luxury-teal rotate-0" />
            </div>
            <span className="text-sm font-serif tracking-[0.35em] text-white uppercase group-hover:text-luxury-teal transition-colors duration-300">
              Saibaba
            </span>
          </Link>

          {/* Desktop Nav — center */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group text-[10px] tracking-[0.25em] uppercase font-mono transition-colors duration-300"
              >
                <span className={location.pathname === link.path ? 'text-luxury-teal' : 'text-white/50 group-hover:text-white'}>
                  {link.name}
                </span>
                {/* Underline on active */}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-luxury-teal"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-mono text-white border border-white/20 px-5 py-2.5 hover:border-luxury-teal hover:text-luxury-teal transition-all duration-300 group"
            >
              <span>Inquire</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="block w-5 h-[1px] bg-white origin-center" />
              <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-[1px] bg-white" />
              <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="block w-5 h-[1px] bg-white origin-center" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden bg-[#050505]/98 border-t border-white/5"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-sm font-serif tracking-wide ${location.pathname === link.path ? 'text-luxury-teal' : 'text-white/60'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <button
                  onClick={() => { setIsModalOpen(true); setMenuOpen(false); }}
                  className="mt-2 text-[10px] tracking-[0.25em] uppercase font-mono text-luxury-teal border border-luxury-teal/40 px-5 py-3 w-fit"
                >
                  Inquire
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-luxury-dark/90 backdrop-blur-md"
            onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#080808] border border-white/10 max-w-2xl w-full relative"
            >
              {/* Modal top accent */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-luxury-teal to-transparent" />

              <div className="p-10 md:p-14">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-8 right-8 text-white/30 hover:text-white transition-colors font-mono text-xs tracking-widest"
                >
                  ESC
                </button>

                <p className="font-mono text-[10px] tracking-[0.35em] text-luxury-teal uppercase mb-3">
                  Private Consultation
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 leading-tight">
                  Begin Your<br />
                  <span className="italic font-light">Curated Journey</span>
                </h2>

                <form className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-transparent border-b border-white/15 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-luxury-teal transition-colors duration-300 font-light"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-transparent border-b border-white/15 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-luxury-teal transition-colors duration-300 font-light"
                      />
                    </div>
                  </div>
                  <select className="w-full bg-transparent border-b border-white/15 py-3 text-sm text-white/50 outline-none focus:border-luxury-teal transition-colors duration-300 appearance-none">
                    <option value="" className="bg-[#080808]">Select Project Scale</option>
                    <option value="single" className="bg-[#080808]">Single Room Curation</option>
                    <option value="apartment" className="bg-[#080808]">Full Apartment Remodel</option>
                    <option value="villa" className="bg-[#080808]">Luxury Villa Architecture</option>
                  </select>
                  <textarea
                    placeholder="Describe your vision..."
                    rows={3}
                    className="w-full bg-transparent border-b border-white/15 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-luxury-teal transition-colors duration-300 resize-none font-light"
                  />
                  <button
                    type="button"
                    className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase font-mono text-white border border-white/20 px-8 py-4 hover:border-luxury-teal hover:text-luxury-teal transition-all duration-300 group mt-2"
                  >
                    Submit Request
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Bottom accent */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
