import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '200+', label: 'Fabric Varieties' },
  { value: '15+',  label: 'Years in Nashik' },
  { value: '8',    label: 'Product Categories' },
];

const AboutSection = () => {
  return (
    <section className="bg-cream py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[150px] pointer-events-none" />

      {/* Ornamental diamond */}
      <svg className="absolute left-8 top-12 w-24 h-24 opacity-[0.06] pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M50 5L95 50L50 95L5 50Z" stroke="#C9A84C" strokeWidth="1.5"/>
        <path d="M50 20L80 50L50 80L20 50Z" stroke="#C9A84C" strokeWidth="0.8"/>
        <circle cx="50" cy="50" r="6" stroke="#C9A84C" strokeWidth="0.8" fill="none"/>
      </svg>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — image collage */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(44,26,14,0.15)] aspect-[4/5]"
            >
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80&fit=crop"
                alt="Handloom textiles"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-mono text-[9px] tracking-[0.3em] text-champagne-2 uppercase mb-1">Crafted with love</p>
                <p className="font-serif text-xl text-ivory">Nashik, Maharashtra</p>
              </div>
            </motion.div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-6 -bottom-6 z-20 glass-pill rounded-2xl p-5 shadow-[0_20px_60px_rgba(44,26,14,0.12)]"
            >
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&q=80&fit=crop"
                alt="Curtain showroom"
                className="w-36 h-28 object-cover rounded-xl mb-3"
              />
              <p className="font-mono text-[9px] tracking-[0.25em] text-walnut-mid uppercase mb-1">Our Showroom</p>
              <p className="font-serif text-sm text-walnut">Premium Curtain Studio</p>
            </motion.div>
          </div>

          {/* Right — content */}
          <div className="space-y-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-6 h-[1px] bg-gold" />
                <p className="font-mono text-[10px] tracking-[0.4em] text-gold uppercase">Our Story</p>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif text-walnut leading-tight mb-6"
              >
                Nashik's Trusted<br />
                <span className="text-walnut-mid italic font-light">Home Decor Destination</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-walnut-light font-light leading-relaxed text-base mb-4"
              >
                Saibaba Home Decor And Handloom has been serving the homes of Nashik and Maharashtra for over a decade. We specialise in premium curtains, bespoke sofa covers, handloom bedsheets, decorative cushions, carpets, and curated home decor — all handpicked from the finest fabric sources across India.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.28 }}
                className="text-walnut-light font-light leading-relaxed text-base"
              >
                Every piece we offer carries the warmth of handcraft — from Varanasi silk weaves to Rajasthani block prints and Egyptian cotton bedsheets. We measure, stitch and deliver to your doorstep.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="border border-gold/20 rounded-2xl p-5 bg-ivory/60">
                  <p className="font-serif text-3xl text-walnut mb-1">{stat.value}</p>
                  <p className="font-mono text-[9px] tracking-[0.25em] text-walnut-mid uppercase">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="flex items-center justify-center gap-2.5 px-7 py-4 bg-walnut text-ivory font-mono text-[10px] tracking-[0.25em] uppercase rounded-full hover:bg-walnut-2 transition-colors duration-300 group"
              >
                Visit Our Showroom
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2.5 px-7 py-4 border border-gold/40 text-walnut font-mono text-[10px] tracking-[0.25em] uppercase rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
