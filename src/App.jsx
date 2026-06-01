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
import BeforeAfterSection from './components/BeforeAfterSection'
import BestSellingProducts from './components/BestSellingProducts'
import CollectionsPage from './components/CollectionsPage'
import JournalPage from './components/JournalPage'
import SpacesPage from './components/SpacesPage'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mouse   = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const rafRef  = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.10);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.10);
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%,-50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dotRef.current?.classList.add('hovered');
      ringRef.current?.classList.add('hovered');
    };
    const onLeave = () => {
      dotRef.current?.classList.remove('hovered');
      ringRef.current?.classList.remove('hovered');
    };

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);
    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-glow" />
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
              <BeforeAfterSection />
              <BentoGrid />
              <BestSellingProducts />
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
