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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-500 ${
          scrolled
            ? 'bg-jet/90 backdrop-blur-xl border-b border-smoke/8'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-4 h-4 border border-smoke/60 rotate-45 flex items-center justify-center group-hover:border-smoke transition-colors duration-300">
            <div className="w-1 h-1 bg-smoke" />
          </div>
          <span className="text-[11px] font-serif tracking-[0.32em] text-smoke uppercase group-hover:text-smoke/70 transition-colors duration-300 hidden sm:block">
            Saibaba
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative group text-[10px] tracking-[0.22em] uppercase font-mono transition-colors duration-300"
            >
              <span className={
                location.pathname === link.path
                  ? 'text-smoke'
                  : 'text-smoke/40 group-hover:text-smoke/80'
              }>
                {link.name}
              </span>
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-smoke/60"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase font-mono text-smoke/50 hover:text-smoke transition-colors duration-300 group"
          >
            Inquire
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-1 shrink-0"
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} className="block w-5 h-[1.5px] bg-smoke origin-center" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-[1.5px] bg-smoke" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} className="block w-5 h-[1.5px] bg-smoke origin-center" />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu — full-width dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 left-0 right-0 z-40 bg-jet/96 backdrop-blur-2xl border-b border-smoke/8"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-3 text-sm font-serif tracking-wide border-b border-smoke/6 transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-smoke'
                        : 'text-smoke/40 hover:text-smoke/75'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <button
                onClick={() => { setIsModalOpen(true); setMenuOpen(false); }}
                className="mt-4 text-left text-[10px] tracking-[0.3em] uppercase font-mono text-smoke/40 hover:text-smoke transition-colors duration-300"
              >
                Request Consultation →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-jet/30 backdrop-blur-md"
            onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-smoke border border-jet/12 rounded-3xl max-w-2xl w-full relative shadow-[0_40px_100px_rgba(12,12,12,0.18)] overflow-hidden"
            >
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-jet/25 to-transparent" />

              <div className="p-10 md:p-14">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-8 right-8 text-jet/25 hover:text-jet transition-colors font-mono text-xs tracking-widest"
                >
                  ESC
                </button>

                <p className="font-mono text-[10px] tracking-[0.35em] text-jet-mid uppercase mb-3">
                  Private Consultation
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-jet mb-10 leading-tight">
                  Begin Your<br />
                  <span className="italic font-light text-jet-mid">Curated Journey</span>
                </h2>

                <form className="space-y-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <input type="text" placeholder="Full Name"
                      className="w-full bg-transparent border-b border-jet/15 py-3 text-sm text-jet placeholder-jet/28 outline-none focus:border-jet transition-colors duration-300 font-light" />
                    <input type="email" placeholder="Email Address"
                      className="w-full bg-transparent border-b border-jet/15 py-3 text-sm text-jet placeholder-jet/28 outline-none focus:border-jet transition-colors duration-300 font-light" />
                  </div>
                  <select className="w-full bg-transparent border-b border-jet/15 py-3 text-sm text-jet/50 outline-none focus:border-jet transition-colors duration-300 appearance-none">
                    <option value="" className="bg-smoke">Select Project Scale</option>
                    <option value="single" className="bg-smoke">Single Room Curation</option>
                    <option value="apartment" className="bg-smoke">Full Apartment Remodel</option>
                    <option value="villa" className="bg-smoke">Luxury Villa Architecture</option>
                  </select>
                  <textarea placeholder="Describe your vision..." rows={3}
                    className="w-full bg-transparent border-b border-jet/15 py-3 text-sm text-jet placeholder-jet/28 outline-none focus:border-jet transition-colors duration-300 resize-none font-light" />
                  <button type="button"
                    className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase font-mono text-jet border border-jet/25 rounded-full px-8 py-4 hover:bg-jet hover:text-smoke transition-all duration-300 group"
                  >
                    Submit Request
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                      <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              </div>

              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-jet/10 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
