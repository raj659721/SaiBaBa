import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: 1, title: 'Bespoke Curtains',     sub: 'Floor to ceiling drapes',    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Handloom Bedsheets',   sub: 'Egyptian cotton & weaves',   image: 'https://images.unsplash.com/photo-1522771739223-07141528c371?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Luxury Sofa Covers',   sub: 'Custom fit upholstery',      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Velvet Cushions',      sub: 'Hand-embroidered accents',   image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Handwoven Carpets',    sub: 'Persian & dhurrie styles',   image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Premium Wallpapers',   sub: 'Textured & printed designs', image: 'https://images.unsplash.com/photo-1618220179428-22790b46a013?auto=format&fit=crop&q=80&w=800' },
];

const HorizontalProductScroll = () => {
  const containerRef    = useRef(null);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;

    const getScrollAmount = () => -(scrollWrapperRef.current.scrollWidth - window.innerWidth);

    const tween = gsap.to(scrollWrapperRef.current, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        scrub: 1.2,
        invalidateOnRefresh: true,
      }
    });

    return () => { tween.kill(); ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section ref={containerRef} className="bg-walnut text-ivory overflow-hidden h-screen flex flex-col justify-center relative">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="absolute top-10 left-4 md:left-12 z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-5 h-[1px] bg-gold" />
          <p className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase">Handcrafted in India</p>
        </div>
        <h2 className="text-4xl md:text-6xl font-serif text-ivory">
          Premium Selections
        </h2>
      </div>

      <div ref={scrollWrapperRef} className="flex gap-6 px-4 md:px-12 mt-16 w-[300vw] md:w-[210vw] h-[62vh]">
        {categories.map((cat, i) => (
          <div
            key={cat.id}
            className="relative w-[78vw] md:w-[32vw] h-full shrink-0 rounded-2xl overflow-hidden group border border-gold/10 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-108"
              style={{ backgroundImage: `url(${cat.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/20 to-transparent opacity-85" />
            <div className="absolute inset-0 border border-gold/8 rounded-2xl pointer-events-none" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-[1px] bg-gold" />
                <span className="font-mono text-[9px] text-gold tracking-widest">0{i + 1}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-ivory mb-1">{cat.title}</h3>
              <p className="font-mono text-[10px] tracking-[0.2em] text-walnut-pale/60 uppercase">{cat.sub}</p>
            </div>

            {/* Hover CTA */}
            <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center bg-walnut/50 backdrop-blur-sm">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 right-8 md:right-12 flex items-center gap-3 opacity-40">
        <span className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase">Drag or scroll</span>
        <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
          <path d="M0 5h26M22 1l4 4-4 4" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HorizontalProductScroll;
