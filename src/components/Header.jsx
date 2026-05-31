import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '919511285634';
const WHATSAPP_MESSAGE = encodeURIComponent('Hi! I visited your website and would like to know more about your curtains, sofa covers and home decor products.');

const WaIcon = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home',        path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Spaces',      path: '/spaces' },
    { name: 'Gallery',     path: '/spaces' },
    { name: 'Contact',     path: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isDark = !scrolled;

  return (
    <>
      {/* ── Floating pill wrapper ── */}
      <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`
            pointer-events-auto w-full max-w-6xl
            flex items-center justify-between
            px-5 md:px-7 h-[52px] rounded-full
            transition-all duration-700
            ${scrolled
              ? 'bg-[#EAE4DA]/88 backdrop-blur-2xl border border-[#2C1A0E]/12 shadow-[0_8px_48px_rgba(44,26,14,0.14)]'
              : 'bg-[#2C1A0E]/35 backdrop-blur-md  border border-[#A8845F]/22'}
          `}
        >
          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className={`w-3.5 h-3.5 rotate-45 border flex items-center justify-center transition-colors duration-500
              ${isDark ? 'border-[#E8D5A3]/60' : 'border-walnut/50 group-hover:border-walnut'}`}>
              <div className={`w-1 h-1 transition-colors duration-500 ${isDark ? 'bg-[#E8D5A3]' : 'bg-walnut'}`} />
            </div>
            <div className="hidden sm:block leading-none">
              <span className={`block text-[11px] font-serif tracking-[0.30em] uppercase transition-colors duration-500
                ${isDark ? 'text-[#F0E0B0]' : 'text-walnut'}`}>
                Saibaba
              </span>
              <span className={`block text-[7.5px] font-mono tracking-[0.28em] uppercase transition-colors duration-500
                ${isDark ? 'text-[#E8D5A3]/45' : 'text-walnut-light'}`}>
                Home Decor
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path && link.name !== 'Gallery';
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group text-[10px] tracking-[0.22em] uppercase font-mono py-1"
                >
                  <span className={`transition-colors duration-300
                    ${isActive
                      ? (isDark ? 'text-[#F0E0B0]' : 'text-walnut')
                      : (isDark ? 'text-[#E8D5A3]/48 group-hover:text-[#F0E0B0]' : 'text-walnut/45 group-hover:text-walnut')
                    }`}>
                    {link.name}
                  </span>

                  {/* hover underline */}
                  <motion.span
                    className={`absolute bottom-0 left-0 h-[1px] rounded-full
                      ${isDark ? 'bg-[#C9A84C]/70' : 'bg-gold'}`}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    style={{ originX: 0, width: '100%' }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Right side ── */}
          <div className="flex items-center gap-3">
            {/* WhatsApp pill */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-1.5 text-[9.5px] tracking-[0.18em] uppercase font-mono
                px-4 py-2 rounded-full border transition-all duration-400
                ${isDark
                  ? 'bg-[#C9A84C]/15 border-[#C9A84C]/35 text-[#E8D5A3] hover:bg-[#C9A84C]/25'
                  : 'bg-walnut text-[#F0E0B0] border-walnut hover:bg-walnut/85'}`}
            >
              <WaIcon size={11} />
              WhatsApp
            </a>

            {/* Inquire */}
            <button
              onClick={() => setIsModalOpen(true)}
              className={`hidden md:flex items-center gap-1.5 text-[9.5px] tracking-[0.22em] uppercase font-mono transition-colors duration-300
                ${isDark ? 'text-[#E8D5A3]/42 hover:text-[#F0E0B0]' : 'text-walnut/40 hover:text-walnut'}`}
            >
              Inquire
              <svg width="7" height="7" viewBox="0 0 10 10" fill="none" className="opacity-70">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-[4.5px] p-1.5 shrink-0"
              aria-label="Toggle menu"
            >
              {[
                { rotate: menuOpen ? 45 : 0,  y: menuOpen ? 6.5 : 0 },
                { opacity: menuOpen ? 0 : 1 },
                { rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 },
              ].map((anim, i) => (
                <motion.span
                  key={i}
                  animate={anim}
                  className={`block w-[18px] h-[1.5px] rounded-full transition-colors duration-500 origin-center
                    ${isDark ? 'bg-[#E8D5A3]' : 'bg-walnut'}`}
                />
              ))}
            </button>
          </div>
        </motion.div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[68px] left-4 right-4 z-40 rounded-3xl bg-[#EAE4DA]/96 backdrop-blur-2xl border border-walnut/10 shadow-[0_20px_60px_rgba(44,26,14,0.16)] overflow-hidden"
          >
            <div className="px-7 py-7 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.045, duration: 0.28 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-3.5 text-sm font-serif tracking-wide border-b border-walnut/8 transition-colors duration-200
                      ${location.pathname === link.path ? 'text-walnut' : 'text-walnut/45 hover:text-walnut/75'}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-walnut text-[#F0E0B0] py-3.5 rounded-full font-mono text-[10px] tracking-widest uppercase"
                >
                  <WaIcon size={13} />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => { setIsModalOpen(true); setMenuOpen(false); }}
                  className="text-center text-[10px] tracking-[0.3em] uppercase font-mono text-walnut/38 hover:text-walnut transition-colors py-1.5"
                >
                  Request Consultation →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating WhatsApp button ── */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.45, type: 'spring', stiffness: 180, damping: 16 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.93 }}
        className="fixed bottom-7 right-6 z-[100] flex items-center gap-2.5 bg-walnut text-[#F0E0B0] rounded-full
          shadow-[0_6px_32px_rgba(44,26,14,0.30)] hover:shadow-[0_8px_44px_rgba(44,26,14,0.40)]
          hover:bg-walnut/88 transition-all duration-300"
        style={{ padding: '13px 18px 13px 14px' }}
      >
        <WaIcon size={20} />
        <span className="font-mono text-[9.5px] tracking-[0.22em] uppercase font-semibold whitespace-nowrap">
          Chat with us
        </span>
      </motion.a>

      {/* ── Inquiry Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-walnut/20 backdrop-blur-md"
            onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: 36, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 36, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ivory border border-walnut/10 rounded-3xl max-w-2xl w-full relative shadow-[0_40px_100px_rgba(44,26,14,0.18)] overflow-hidden"
            >
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-walnut/20 to-transparent" />

              <div className="p-10 md:p-14">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-8 right-8 text-walnut/25 hover:text-walnut transition-colors font-mono text-xs tracking-widest"
                >
                  ESC
                </button>

                <p className="font-mono text-[10px] tracking-[0.35em] text-walnut-light uppercase mb-2">
                  Get In Touch
                </p>
                <h2 className="text-3xl md:text-4xl font-serif text-walnut mb-2 leading-tight">
                  Request a<br />
                  <span className="italic font-light text-walnut-light">Free Consultation</span>
                </h2>
                <p className="text-sm text-walnut/40 font-light mb-8">
                  Or call us: <a href="tel:+919511285634" className="text-walnut/70 hover:text-walnut transition-colors">+91 95112 85634</a>
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name"
                      className="w-full bg-transparent border-b border-walnut/15 py-3 text-sm text-walnut placeholder-walnut/28 outline-none focus:border-walnut transition-colors font-light" />
                    <input type="tel" placeholder="+91 Phone Number"
                      className="w-full bg-transparent border-b border-walnut/15 py-3 text-sm text-walnut placeholder-walnut/28 outline-none focus:border-walnut transition-colors font-light" />
                  </div>
                  <select className="w-full bg-transparent border-b border-walnut/15 py-3 text-sm text-walnut/50 outline-none focus:border-walnut transition-colors appearance-none">
                    <option value="">What are you looking for?</option>
                    <option value="curtains">Curtains &amp; Drapes</option>
                    <option value="sofa">Sofa Covers</option>
                    <option value="bedsheets">Bedsheets &amp; Linen</option>
                    <option value="cushions">Cushions &amp; Carpets</option>
                    <option value="all">Complete Home Makeover</option>
                  </select>
                  <textarea placeholder="Describe your space and requirements..." rows={3}
                    className="w-full bg-transparent border-b border-walnut/15 py-3 text-sm text-walnut placeholder-walnut/28 outline-none focus:border-walnut transition-colors resize-none font-light" />

                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <button type="button"
                      className="flex items-center justify-center gap-2 text-[10px] tracking-[0.25em] uppercase font-mono text-walnut border border-walnut/25 rounded-full px-8 py-4 hover:bg-walnut hover:text-ivory transition-all duration-300 flex-1"
                    >
                      Submit Request
                    </button>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-[10px] tracking-[0.25em] uppercase font-mono bg-walnut text-ivory rounded-full px-8 py-4 hover:bg-walnut/85 transition-colors flex-1"
                    >
                      <WaIcon size={12} />
                      WhatsApp Instead
                    </a>
                  </div>
                </form>
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-walnut/10 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
