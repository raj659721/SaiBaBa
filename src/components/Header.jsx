import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home',        path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Spaces',      path: '/spaces' },
    { name: 'Gallery',     path: '/gallery' },
    { name: 'Contact',     path: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div
          initial={{ y: -70, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`glass-pill rounded-full flex items-center gap-0 transition-all duration-500 ${
            scrolled ? 'shadow-[0_12px_48px_rgba(44,26,14,0.15)]' : ''
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group pl-5 pr-4 py-3 border-r border-gold/20">
            <div className="w-4 h-4 border border-gold/70 rotate-45 flex items-center justify-center group-hover:border-gold transition-colors duration-300 shrink-0">
              <div className="w-1 h-1 bg-gold" />
            </div>
            <span className="text-[11px] font-serif tracking-[0.3em] text-walnut uppercase hidden sm:block group-hover:text-walnut-mid transition-colors duration-300">
              Saibaba
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative px-4 py-3 group"
              >
                <span className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-walnut'
                    : 'text-walnut-mid group-hover:text-walnut'
                }`}>
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-2 left-4 right-4 h-[1.5px] bg-gold rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 ml-1 mr-3 my-1.5 px-5 py-2 bg-walnut text-ivory rounded-full font-mono text-[9px] tracking-[0.2em] uppercase hover:bg-walnut-2 transition-colors duration-300 shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gold shrink-0">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] px-4 py-3"
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} className="block w-5 h-[1.5px] bg-walnut origin-center" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-[1.5px] bg-walnut" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} className="block w-5 h-[1.5px] bg-walnut origin-center" />
          </button>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-24 left-4 right-4 z-40 glass-pill rounded-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-3 font-serif text-lg border-b border-gold/10 transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-walnut'
                        : 'text-walnut-mid hover:text-walnut'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center gap-2.5 justify-center w-full bg-walnut text-ivory py-3 rounded-full font-mono text-[10px] tracking-[0.25em] uppercase"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
