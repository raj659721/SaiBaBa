import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ReactLenis } from '@studio-freight/react-lenis'
import { motion, useScroll, useSpring } from 'framer-motion'
import gsap from 'gsap'

import Header from './components/Header'
import HeroCanvas from './components/HeroCanvas'
import BentoGrid from './components/BentoGrid'
import AmenitiesSection from './components/AmenitiesSection'
import SpacesPage from './components/SpacesPage'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

// Global glowing cursor component
const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorDotRef.current, { x: e.clientX, y: e.clientY, duration: 0 });
      gsap.to(cursorGlowRef.current, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out" });
    };

    const handleHover = () => {
      gsap.to(cursorGlowRef.current, { scale: 1.5, backgroundColor: 'rgba(0, 128, 128, 0.2)', duration: 0.3 });
      gsap.to(cursorDotRef.current, { scale: 0, duration: 0.2 });
    };

    const handleHoverOut = () => {
      gsap.to(cursorGlowRef.current, { scale: 1, backgroundColor: 'rgba(0, 128, 128, 0.1)', duration: 0.3 });
      gsap.to(cursorDotRef.current, { scale: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', moveCursor);

    const clickables = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clickables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot hidden md:block"></div>
      <div ref={cursorGlowRef} className="cursor-glow hidden md:block"></div>
    </>
  );
};

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Right side scroll progress indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 h-40 w-[2px] bg-white/10 z-[100] hidden lg:block rounded-full overflow-hidden">
      <motion.div
        className="w-full bg-luxury-teal origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
}

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <Router>
        <CustomCursor />
        <ScrollProgress />
        <ScrollToTop />
        <Header />
        
        <Routes>
          <Route path="/" element={
            <main className="bg-luxury-dark">
              <HeroCanvas />
              <AmenitiesSection />
              <BentoGrid />
            </main>
          } />
          <Route path="/collections" element={
            <main className="pt-32 min-h-screen px-4 md:px-12 flex items-center justify-center bg-luxury-dark">
              <h1 className="text-4xl md:text-6xl font-serif text-center text-off-white">Bespoke Furnishings</h1>
            </main>
          } />
          <Route path="/spaces" element={<SpacesPage />} />
          <Route path="/journal" element={
            <main className="pt-32 min-h-screen px-4 md:px-12 flex items-center justify-center bg-luxury-dark">
              <h1 className="text-4xl md:text-6xl font-serif text-center text-off-white">Design Editorial</h1>
            </main>
          } />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <Footer />
      </Router>
    </ReactLenis>
  )
}

export default App
