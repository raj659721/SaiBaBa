import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useInView } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef      = useRef(null);
  const videoRef        = useRef(null);
  const overlayRef      = useRef(null);
  const headlineRef     = useRef(null);
  const subheadRef      = useRef(null);
  const ctaRef          = useRef(null);
  const infoRef         = useRef(null);
  const bottomRef       = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  /* ---------- GSAP ScrollTrigger animations ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* 1. Video parallax — moves slower than scroll */
      if (videoRef.current) {
        gsap.fromTo(videoRef.current,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      }

      /* 2. Section scale reveal — 0.94 → 1 */
      gsap.fromTo(sectionRef.current,
        { scale: 0.94, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 88%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );

      /* 3. Headline word-by-word stagger */
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        gsap.fromTo(words,
          { y: 80, opacity: 0, rotateX: -20 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.08,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      /* 4. Subhead + CTA */
      if (subheadRef.current) {
        gsap.fromTo(subheadRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: subheadRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      }
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current.querySelectorAll('.cta-item'),
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            stagger: 0.12, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: ctaRef.current, start: 'top 83%', toggleActions: 'play none none none' },
          }
        );
      }

      /* 5. Info cards slide in */
      if (infoRef.current) {
        gsap.fromTo(infoRef.current.querySelectorAll('.info-card'),
          { x: -30, opacity: 0 },
          {
            x: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: infoRef.current, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      }

      /* 6. Bottom bar fades */
      if (bottomRef.current) {
        gsap.fromTo(bottomRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8,
            scrollTrigger: { trigger: bottomRef.current, start: 'top 92%', toggleActions: 'play none none none' },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headline = 'Transform Your Home With Timeless Elegance';

  return (
    <footer
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{ transformOrigin: 'center bottom' }}
    >
      {/* ── Video Background ───────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          src="/videos/footer-bg.mp4"
          autoPlay muted loop playsInline
        />
        {/* Rich multi-stop overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(160deg, rgba(10,8,5,0.82) 0%, rgba(30,20,10,0.70) 35%, rgba(15,10,5,0.85) 75%, rgba(8,6,3,0.93) 100%)',
          }}
        />
        {/* Gold shimmer vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1008]/95 via-transparent to-[#0d0905]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1008]/50 via-transparent to-[#1a1008]/50" />
      </div>

      {/* ── Floating grain texture ───────────────── */}
      <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '200px' }}
      />

      {/* ── Floating decorative lines ─────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[1px] z-[2]"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), rgba(201,168,76,0.7), rgba(201,168,76,0.4), transparent)' }}
      />
      <div className="absolute top-[1px] left-0 right-0 h-[1px] z-[2] opacity-30"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,240,200,0.6), transparent)' }}
      />

      {/* ── Main Content ─────────────────────────── */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ── Top: eyebrow + logo ─────────────────── */}
        <div className="flex items-center justify-between px-6 md:px-16 pt-16 pb-0">
          <div className="flex items-center gap-3">
            <div className="w-[1px] h-8" style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.7), transparent)' }} />
            <span className="font-mono text-[10px] tracking-[0.45em] uppercase"
              style={{ color: 'rgba(201,168,76,0.75)' }}>
              Saibaba Home-Decor · Est. 2005
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="w-3 h-3 border rotate-45 flex items-center justify-center"
              style={{ borderColor: 'rgba(201,168,76,0.5)' }}>
              <div className="w-[3px] h-[3px] rounded-full" style={{ background: 'rgba(201,168,76,0.8)' }} />
            </div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase"
              style={{ color: 'rgba(201,168,76,0.45)' }}>Luxury Interiors</span>
          </div>
        </div>

        {/* ── HEADLINE ────────────────────────────── */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 pt-10 pb-4">
          <div
            ref={headlineRef}
            className="overflow-hidden"
            style={{ perspective: '800px' }}
          >
            <h2
              className="font-serif font-light leading-[1.05] tracking-tight"
              style={{
                fontSize: 'clamp(2.8rem, 7.5vw, 7.5rem)',
                color: '#F5EFE2',
              }}
            >
              {headline.split(' ').map((word, i) => (
                <span key={i} className="word inline-block mr-[0.22em] last:mr-0 opacity-0"
                  style={{ display: 'inline-block' }}>
                  {i === 3 || i === 4
                    ? <em style={{ color: 'rgba(201,168,76,0.95)', fontStyle: 'italic', fontWeight: 300 }}>{word}</em>
                    : word}
                </span>
              ))}
            </h2>
          </div>

          {/* Sub-headline */}
          <p
            ref={subheadRef}
            className="font-mono mt-8 max-w-xl opacity-0"
            style={{
              fontSize: '11px',
              letterSpacing: '0.28em',
              lineHeight: 2.1,
              color: 'rgba(245,239,226,0.42)',
            }}
          >
            HANDCRAFTED FURNITURE · BESPOKE INTERIORS · LUXURY LIVING<br />
            VISIT OUR SHOWROOM — EXPERIENCE LUXURY IN PERSON
          </p>

          {/* ── CTA Row ─────────────────────────── */}
          <div ref={ctaRef} className="flex flex-wrap gap-4 mt-12">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-item group relative flex items-center gap-3 px-7 py-4 rounded-full overflow-hidden transition-all duration-500 opacity-0"
              style={{
                background: 'linear-gradient(135deg, rgba(201,168,76,0.9) 0%, rgba(172,138,50,0.95) 100%)',
                border: '1px solid rgba(201,168,76,0.4)',
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                style={{ background: 'linear-gradient(135deg, rgba(220,190,100,1) 0%, rgba(201,168,76,1) 100%)' }} />
              <svg className="relative z-10 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#1a1008' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="relative z-10 font-mono text-[11px] tracking-[0.2em] uppercase font-semibold" style={{ color: '#1a1008' }}>
                WhatsApp Us
              </span>
            </a>

            {/* Call Now */}
            <a
              href="tel:+919876543210"
              className="cta-item group flex items-center gap-3 px-7 py-4 rounded-full transition-all duration-500 opacity-0"
              style={{
                border: '1px solid rgba(201,168,76,0.35)',
                color: 'rgba(245,239,226,0.85)',
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                style={{ background: 'rgba(201,168,76,0.08)' }} />
              <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase">Call Now</span>
            </a>

            {/* Visit Store */}
            <Link
              to="/contact"
              className="cta-item group flex items-center gap-3 px-7 py-4 rounded-full transition-all duration-500 opacity-0"
              style={{
                border: '1px solid rgba(245,239,226,0.12)',
                color: 'rgba(245,239,226,0.55)',
              }}
            >
              <svg className="shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase">Visit Showroom</span>
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Glass Info Cards ─────────────────────── */}
        <div ref={infoRef} className="px-6 md:px-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Location */}
            <div className="info-card group relative rounded-2xl p-6 overflow-hidden opacity-0 cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: 'rgba(255,248,230,0.04)',
                border: '1px solid rgba(201,168,76,0.14)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: 'rgba(201,168,76,0.05)' }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(201,168,76,0.8)' }} />
                  <span className="font-mono text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(201,168,76,0.6)' }}>Showroom</span>
                </div>
                <p className="font-serif text-lg leading-snug mb-1" style={{ color: '#F5EFE2' }}>
                  Saibaba Home Decor
                </p>
                <p className="font-mono text-[11px] leading-relaxed" style={{ color: 'rgba(245,239,226,0.38)', letterSpacing: '0.05em' }}>
                  123 Luxury Avenue, Banjara Hills<br />
                  Hyderabad, Telangana 500034
                </p>
                <div className="flex items-center gap-1.5 mt-4 group-hover:gap-2.5 transition-all duration-300">
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: 'rgba(201,168,76,0.5)' }}>Get Directions</span>
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none" style={{ color: 'rgba(201,168,76,0.5)' }}>
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="info-card group relative rounded-2xl p-6 overflow-hidden opacity-0 cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: 'rgba(255,248,230,0.04)',
                border: '1px solid rgba(201,168,76,0.14)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: 'rgba(201,168,76,0.05)' }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'rgba(201,168,76,0.8)' }} />
                  <span className="font-mono text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(201,168,76,0.6)' }}>Open Now</span>
                </div>
                <p className="font-serif text-lg leading-snug mb-1" style={{ color: '#F5EFE2' }}>Showroom Hours</p>
                <div className="space-y-1 mt-2">
                  {[
                    ['Mon – Sat', '10:00 AM – 8:00 PM'],
                    ['Sunday',    '11:00 AM – 6:00 PM'],
                    ['Holidays',  'By Appointment'],
                  ].map(([day, time]) => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="font-mono text-[10px]" style={{ color: 'rgba(245,239,226,0.32)', letterSpacing: '0.04em' }}>{day}</span>
                      <span className="font-mono text-[10px]" style={{ color: 'rgba(245,239,226,0.55)', letterSpacing: '0.04em' }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="info-card group relative rounded-2xl p-6 overflow-hidden opacity-0 cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: 'rgba(255,248,230,0.04)',
                border: '1px solid rgba(201,168,76,0.14)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: 'rgba(201,168,76,0.05)' }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(201,168,76,0.8)' }} />
                  <span className="font-mono text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(201,168,76,0.6)' }}>Connect</span>
                </div>
                <p className="font-serif text-lg leading-snug mb-3" style={{ color: '#F5EFE2' }}>Stay In Touch</p>
                <div className="space-y-3">
                  <a href="tel:+919876543210" className="flex items-center gap-2.5 group/link">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'rgba(201,168,76,0.6)' }}>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a2 2 0 011.72-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-mono text-[11px] group-hover/link:text-[#c9a84c] transition-colors duration-300" style={{ color: 'rgba(245,239,226,0.5)', letterSpacing: '0.05em' }}>+91 98765 43210</span>
                  </a>
                  <a href="mailto:hello@saibabadecor.in" className="flex items-center gap-2.5 group/link">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'rgba(201,168,76,0.6)' }}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-mono text-[11px] group-hover/link:text-[#c9a84c] transition-colors duration-300" style={{ color: 'rgba(245,239,226,0.5)', letterSpacing: '0.05em' }}>hello@saibabadecor.in</span>
                  </a>
                  {/* Floating social icons */}
                  <div className="flex gap-3 pt-2">
                    {[
                      { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                      { label: 'Pinterest', path: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z' },
                      { label: 'YouTube', path: 'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' },
                    ].map(({ label, path }) => (
                      <a key={label} href="#" aria-label={label}
                        className="group/s w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        style={{ border: '1px solid rgba(201,168,76,0.2)', color: 'rgba(201,168,76,0.5)' }}
                      >
                        <svg className="group-hover/s:scale-110 transition-transform duration-300" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d={path} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Gold Divider ─────────────────────────── */}
        <div className="mx-6 md:mx-16"
          style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), rgba(201,168,76,0.15), transparent)' }}
        />

        {/* ── Bottom bar ───────────────────────────── */}
        <div ref={bottomRef} className="px-6 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: 'rgba(201,168,76,0.28)' }}>
            © {new Date().getFullYear()} Saibaba Home-Decor · All Rights Reserved
          </p>

          {/* Nav links with luxury hover */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              ['Collections', '/collections'],
              ['Spaces',      '/spaces'],
              ['Journal',     '/journal'],
              ['Contact',     '/contact'],
            ].map(([label, path]) => (
              <Link key={label} to={path}
                className="group relative font-mono text-[9px] tracking-[0.28em] uppercase transition-colors duration-300"
                style={{ color: 'rgba(245,239,226,0.22)' }}
              >
                <span className="group-hover:text-[#c9a84c] transition-colors duration-300">{label}</span>
                <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full transition-all duration-500 h-[1px]"
                  style={{ background: 'rgba(201,168,76,0.5)' }} />
              </Link>
            ))}
          </div>

          <div className="flex gap-5">
            {[['Privacy', '#'], ['Terms', '#']].map(([label, href]) => (
              <a key={label} href={href}
                className="font-mono text-[9px] tracking-[0.28em] uppercase transition-colors duration-300 hover:text-[#c9a84c]"
                style={{ color: 'rgba(245,239,226,0.15)' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
