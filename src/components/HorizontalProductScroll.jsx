import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: 1, title: 'Bespoke Curtains', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Handloom Bedsheets', image: 'https://images.unsplash.com/photo-1522771739223-07141528c371?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Luxury Sofa Covers', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Velvet Cushions', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Persian Carpets', image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Premium Wallpapers', image: 'https://images.unsplash.com/photo-1618220179428-22790b46a013?auto=format&fit=crop&q=80&w=800' },
];

const HorizontalProductScroll = () => {
  const containerRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;

    // Calculate how far to scroll horizontally
    // The width of the wrapper minus the viewport width
    const getScrollAmount = () => {
      let scrollWidth = scrollWrapperRef.current.scrollWidth;
      return -(scrollWidth - window.innerWidth);
    };

    const tween = gsap.to(scrollWrapperRef.current, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true // Recalculate on window resize
      }
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-luxury-dark text-white overflow-hidden h-screen flex flex-col justify-center relative">
      <div className="absolute top-12 left-4 md:left-12 z-10">
        <p className="font-mono text-xs tracking-[0.3em] text-luxury-gold uppercase mb-2">Our Collections</p>
        <h2 className="text-4xl md:text-6xl font-serif">Handcrafted Elegance</h2>
      </div>

      {/* The horizontal scrolling track */}
      <div ref={scrollWrapperRef} className="flex gap-8 px-4 md:px-12 mt-20 w-[300vw] md:w-[200vw] h-[60vh]">
        {categories.map((cat, i) => (
          <div 
            key={cat.id} 
            className="relative w-[80vw] md:w-[35vw] h-full shrink-0 rounded-2xl overflow-hidden group border border-white/5"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              style={{ backgroundImage: `url(${cat.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <span className="font-mono text-xs text-luxury-gold tracking-widest mb-2 block">0{i + 1}</span>
              <h3 className="text-3xl font-serif text-white">{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalProductScroll;
