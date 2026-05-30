import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home',        path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Spaces',      path: '/spaces' },
    { name: 'Journal',     path: '/journal' },
    { name: 'Contact',     path: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ── Floating pill navbar ── */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center gap-6 md:gap-10 transition-all duration-500 rounded-full px-5 md:px-7 py-3 ${
            scrolled
              ? 'bg-cream/95 shadow-[0_8px_40px_rgba(44,26,14,0.13)] border border-gold/25 backdrop-blur-2xl'
              : 'bg-cream/80 shadow-[0_4px_24px_rgba(44,26,14,0.09)] border border-gold/15 backdrop-blur-xl'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-5 h-5 border border-gold/70 rotate-45 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
              <div className="w-1.5 h-1.5 bg-gold rotate-0" />
            </div>
            <span className="text-[11px] font-serif tracking-[0.3em] text-walnut uppercase group-hover:text-gold transition-colors duration-300 hidden sm:block">
              Saibaba
            </span>
          </Link>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-5 bg-walnut/10" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group text-[10px] tracking-[0.22em] uppercase font-mono transition-colors duration-300"
              >
                <span className={
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-walnut/50 group-hover:text-walnut'
                }>
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="pill-nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-gold"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-5 bg-walnut/10" />

          {/* CTA */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase font-mono text-walnut border border-walnut/20 rounded-full px-5 py-2 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300 shrink-0 group"
          >
            Inquire
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-1.5 shrink-0"
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} className="block w-5 h-[1.5px] bg-walnut origin-center" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-[1.5px] bg-walnut" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} className="block w-5 h-[1.5px] bg-walnut origin-center" />
          </button>
        </div>

        {/* Mobile dropdown — floats below pill */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[calc(100%+10px)] left-0 right-0 mx-4 rounded-3xl bg-cream/97 border border-gold/20 backdrop-blur-2xl shadow-[0_20px_60px_rgba(44,26,14,0.15)] overflow-hidden pointer-events-auto"
            >
              <div className="p-6 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 px-4 rounded-xl text-sm font-serif tracking-wide transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'text-gold bg-gold/8'
                          : 'text-walnut/60 hover:text-walnut hover:bg-walnut/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-3 pt-3 border-t border-walnut/8">
                  <button
                    onClick={() => { setIsModalOpen(true); setMenuOpen(false); }}
                    className="w-full text-center text-[10px] tracking-[0.3em] uppercase font-mono text-gold border border-gold/30 rounded-full px-5 py-3 hover:bg-gold/10 transition-all duration-300"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Inquiry Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-walnut/30 backdrop-blur-md"
            onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="bg-cream border border-gold/20 rounded-3xl max-w-2xl w-full relative shadow-[0_40px_100px_rgba(44,26,14,0.2)] overflow-hidden"
            >
              {/* Top gold accent */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

              <div className="p-10 md:p-14">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-8 right-8 text-walnut/30 hover:text-walnut transition-colors font-mono text-xs tracking-widest"
                >
                  ESC
                </button>

                <p className="font-mono text-[10px] tracking-[0.35em] text-gold uppercase mb-3">
                  Private Consultation
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-walnut mb-10 leading-tight">
                  Begin Your<br />
                  <span className="italic font-light text-walnut-mid">Curated Journey</span>
                </h2>

                <form className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div>
                      <input type="text" placeholder="Full Name"
                        className="w-full bg-transparent border-b border-walnut/15 py-3 text-sm text-walnut placeholder-walnut/30 outline-none focus:border-gold transition-colors duration-300 font-light" />
                    </div>
                    <div>
                      <input type="email" placeholder="Email Address"
                        className="w-full bg-transparent border-b border-walnut/15 py-3 text-sm text-walnut placeholder-walnut/30 outline-none focus:border-gold transition-colors duration-300 font-light" />
                    </div>
                  </div>
                  <select className="w-full bg-transparent border-b border-walnut/15 py-3 text-sm text-walnut/50 outline-none focus:border-gold transition-colors duration-300 appearance-none">
                    <option value="" className="bg-cream">Select Project Scale</option>
                    <option value="single" className="bg-cream">Single Room Curation</option>
                    <option value="apartment" className="bg-cream">Full Apartment Remodel</option>
                    <option value="villa" className="bg-cream">Luxury Villa Architecture</option>
                  </select>
                  <textarea placeholder="Describe your vision..." rows={3}
                    className="w-full bg-transparent border-b border-walnut/15 py-3 text-sm text-walnut placeholder-walnut/30 outline-none focus:border-gold transition-colors duration-300 resize-none font-light" />
                  <button type="button"
                    className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase font-mono text-walnut border border-walnut/25 rounded-full px-8 py-4 hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300 group"
                  >
                    Submit Request
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              </div>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
