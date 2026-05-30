import React from 'react';
import { Link } from 'react-router-dom';

const MarqueeText = () => {
  const items = [
    'SAIBABA HOME DECOR', '✦', 'BESPOKE LUXURY', '✦',
    'SPATIAL CURATION', '✦', 'SAIBABA HOME DECOR', '✦',
    'BESPOKE LUXURY', '✦', 'SPATIAL CURATION', '✦',
  ];
  return (
    <div className="relative overflow-hidden py-8 border-t border-b border-smoke/6 my-16">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-[clamp(2rem,6vw,5rem)] font-serif font-bold text-smoke/6 mx-8 shrink-0 tracking-tighter">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-jet text-smoke pt-24 pb-8 overflow-hidden relative">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-smoke/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Brand section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-5 border border-smoke/40 rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-smoke" />
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-smoke">Saibaba</h2>
            <p className="font-mono text-xs tracking-[0.3em] text-silver uppercase mt-2">Home-decor Atelier</p>
          </div>
          <Link to="/contact">
            <button className="border border-smoke/30 text-smoke px-10 py-4 rounded-full text-xs font-mono tracking-widest uppercase hover:bg-smoke hover:text-jet transition-all duration-300">
              Begin Consultation
            </button>
          </Link>
        </div>

        <MarqueeText />

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {[
            {
              title: 'SPATIAL CURATION',
              links: [
                { label: 'Bespoke Furnishings', path: '/collections' },
                { label: 'Virtual Showroom',    path: '/spaces' },
                { label: 'Editorial Journal',   path: '/journal' },
                { label: 'Limited Releases',    path: '/collections' },
              ]
            },
            {
              title: 'TEXTILE SUPPLY',
              links: [
                { label: 'Italian Leathers',  path: '#' },
                { label: 'Turkish Marbles',   path: '#' },
                { label: 'Sustainable Woods', path: '#' },
                { label: 'Material Index',    path: '#' },
              ]
            },
            {
              title: 'CONNECT',
              links: [
                { label: 'Book Consultation', path: '/contact' },
                { label: 'Studio Locations',  path: '#' },
                { label: 'Press & Media',     path: '#' },
                { label: 'Careers',           path: '#' },
              ]
            },
            {
              title: 'GLOBAL NETWORK',
              links: [
                { label: 'Milan',    path: '#' },
                { label: 'New York', path: '#' },
                { label: 'Tokyo',    path: '#' },
                { label: 'Dubai',    path: '#' },
              ]
            },
          ].map(col => (
            <div key={col.title}>
              <h4 className="font-mono text-xs tracking-[0.2em] text-smoke/22 mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-sm text-smoke/40 hover:text-smoke transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-smoke/8 font-mono text-xs text-smoke/18">
          <p>&copy; {new Date().getFullYear()} Saibaba Home-decor. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-smoke transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-smoke transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
