import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ReactLenis } from '@studio-freight/react-lenis'
import { motion, useScroll, useSpring } from 'framer-motion'
import gsap from 'gsap'

import Header from './components/Header'
import HeroCanvas from './components/HeroCanvas'
import BentoGrid from './components/BentoGrid'
import AmenitiesSection from './components/AmenitiesSection'
import HoverRevealSection from './components/HoverRevealSection'
import CollectionsPage from './components/CollectionsPage'
import JournalPage from './components/JournalPage'
import SpacesPage from './components/SpacesPage'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorDotRef.current, { x: e.clientX, y: e.clientY, duration: 0 });
      gsap.to(cursorGlowRef.current, { x: e.clientX, y: e.clientY, duration: 0.15, ease: 'power2.out' });
    };

    const handleHover = () => {
      gsap.to(cursorGlowRef.current, { scale: 1.6, backgroundColor: 'rgba(201,168,76,0.15)', duration: 0.3 });
      gsap.to(cursorDotRef.current, { scale: 0, duration: 0.2 });
    };

    const handleHoverOut = () => {
      gsap.to(cursorGlowRef.current, { scale: 1, backgroundColor: 'rgba(201,168,76,0.08)', duration: 0.3 });
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
      <div ref={cursorDotRef} className="cursor-dot hidden md:block" />
      <div ref={cursorGlowRef} className="cursor-glow hidden md:block" />
    </>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 h-40 w-[2px] bg-jet/10 z-[100] hidden lg:block rounded-full overflow-hidden">
      <motion.div className="w-full bg-jet origin-top" style={{ scaleY, height: '100%' }} />
    </div>
  );
};

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
            <main className="bg-smoke">
              <HeroCanvas />
              <HoverRevealSection />
              <AmenitiesSection />
              <BentoGrid />
            </main>
          } />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/spaces"      element={<SpacesPage />} />
          <Route path="/journal"     element={<JournalPage />} />
          <Route path="/contact"     element={<ContactPage />} />
        </Routes>

        <Footer />
      </Router>
    </ReactLenis>
  )
}

export default App
