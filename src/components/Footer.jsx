import React from 'react';
import { Link } from 'react-router-dom';

const MarqueeText = () => {
  const items = [
    'SAIBABA HOME DECOR', '✦', 'NASHIK, INDIA', '✦',
    'CURTAINS & SOFA COVERS', '✦', 'SAIBABA HOME DECOR', '✦',
    'HANDLOOM TEXTILES', '✦', 'PREMIUM FABRICS', '✦',
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
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-smoke/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-5 border border-smoke/40 rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-smoke" />
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-smoke">Saibaba</h2>
            <p className="font-mono text-xs tracking-[0.3em] text-silver uppercase mt-2">Home Decor & Handloom</p>
          </div>
          <Link to="/contact">
            <button className="border border-smoke/30 text-smoke px-10 py-4 rounded-full text-xs font-mono tracking-widest uppercase hover:bg-smoke hover:text-jet transition-all duration-300">
              Visit Our Showroom
            </button>
          </Link>
        </div>

        <MarqueeText />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {[
            {
              title: 'OUR COLLECTIONS',
              links: [
                { label: 'Curtains',    path: '/collections' },
                { label: 'Sofa Covers', path: '/collections' },
                { label: 'Bedsheets',   path: '/collections' },
                { label: 'Cushions',    path: '/collections' },
              ]
            },
            {
              title: 'MORE PRODUCTS',
              links: [
                { label: 'Carpets & Rugs',   path: '/collections' },
                { label: 'Wallpapers',        path: '/collections' },
                { label: 'Handloom Textiles', path: '/collections' },
                { label: 'Home Decor',        path: '/collections' },
              ]
            },
            {
              title: 'CONNECT',
              links: [
                { label: 'Visit Showroom',    path: '/contact' },
                { label: 'Book Consultation', path: '/contact' },
                { label: 'Journal',           path: '/journal' },
                { label: 'Spaces Gallery',    path: '/spaces' },
              ]
            },
            {
              title: 'QUICK LINKS',
              links: [
                { label: 'Home',        path: '/' },
                { label: 'Collections', path: '/collections' },
                { label: 'Spaces',      path: '/spaces' },
                { label: 'Contact',     path: '/contact' },
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

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-smoke/8 font-mono text-xs text-smoke/18">
          <p>&copy; {new Date().getFullYear()} Saibaba Home Decor & Handloom, Nashik. All rights reserved.</p>
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
