import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <main className="min-h-screen pt-36 pb-24 bg-cream text-walnut relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-champagne/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 md:px-12 relative z-10">

        {/* ── Page heading ── */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-mono text-[10px] tracking-[0.45em] text-gold uppercase mb-5"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif leading-none text-walnut"
          >
            Visit Our Studio
          </motion.h1>
        </div>

        {/* ── Map + Address row ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-0 mb-20 rounded-3xl overflow-hidden border border-walnut/10 shadow-[0_20px_80px_rgba(44,26,14,0.1)]"
        >
          {/* Map — takes 2/3 */}
          <div className="lg:col-span-2 relative h-[340px] lg:h-[480px]">
            {/* Gold top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold/80 via-gold/40 to-transparent z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.0865420317964!2d73.796612574689!3d20.046817520780195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb8f68f67a29%3A0x7e6933b6e8f9def0!2sSaibaba%20Home%20Decor%20And%20Handloom!5e0!3m2!1sen!2sin!4v1780145475139!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'sepia(20%) saturate(80%) brightness(95%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saibaba Home Decor Location"
            />
          </div>

          {/* Address panel — takes 1/3 */}
          <div className="bg-cream-2 border-t lg:border-t-0 lg:border-l border-walnut/10 p-8 md:p-10 flex flex-col justify-between">
            {/* Top: address info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 border border-gold/60 rotate-45 flex items-center justify-center shrink-0">
                    <div className="w-1 h-1 bg-gold" />
                  </div>
                  <p className="font-mono text-[9px] tracking-[0.35em] text-gold uppercase">Our Showroom</p>
                </div>
                <h3 className="font-serif text-xl text-walnut leading-snug mb-2">
                  Saibaba Home Decor<br />
                  <span className="text-walnut-mid font-light">&amp; Handloom</span>
                </h3>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-3">
                  <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.25em] text-walnut/35 uppercase mb-1">Address</p>
                    <p className="text-sm text-walnut-mid font-light leading-relaxed">
                      Saibaba Home Decor And Handloom<br />
                      Nashik, Maharashtra<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-3">
                  <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.25em] text-walnut/35 uppercase mb-1">Studio Hours</p>
                    <p className="text-sm text-walnut-mid font-light leading-relaxed">
                      Mon – Sat: 10:00 AM – 8:00 PM<br />
                      Sunday: 11:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.25em] text-walnut/35 uppercase mb-1">Contact</p>
                    <a href="tel:+919999999999" className="text-sm text-walnut-mid font-light hover:text-gold transition-colors">
                      Call for Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: directions button */}
            <div className="mt-8 pt-6 border-t border-walnut/10">
              <a
                href="https://www.google.com/maps/place/Saibaba+Home+Decor+And+Handloom/@20.0468175,73.7966126,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full font-mono text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/30 rounded-full py-3.5 hover:bg-gold hover:text-walnut transition-all duration-300 group"
              >
                Get Directions
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Contact form + info row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: headline + details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.35 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-walnut leading-tight mb-4">
                Begin Your<br />
                <span className="text-walnut-mid italic font-light">Curated Journey</span>
              </h2>
              <p className="text-walnut-mid font-light leading-relaxed max-w-sm">
                Walk into our showroom or drop us a line — our design consultants are ready to help you transform your space.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start p-5 bg-cream-2 rounded-2xl border border-walnut/8">
                <div className="w-9 h-9 rounded-full bg-gold/12 border border-gold/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.25em] text-walnut/35 uppercase mb-1">Email Us</p>
                  <a href="mailto:info@saibabadecor.com" className="text-sm text-walnut font-light hover:text-gold transition-colors">
                    info@saibabadecor.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 bg-cream-2 rounded-2xl border border-walnut/8">
                <div className="w-9 h-9 rounded-full bg-gold/12 border border-gold/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.25em] text-walnut/35 uppercase mb-1">Call Us</p>
                  <a href="tel:+919999999999" className="text-sm text-walnut font-light hover:text-gold transition-colors">
                    +91 99999 99999
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 bg-cream-2 rounded-2xl border border-walnut/8">
                <div className="w-9 h-9 rounded-full bg-gold/12 border border-gold/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.25em] text-walnut/35 uppercase mb-1">Visit Us</p>
                  <p className="text-sm text-walnut font-light leading-relaxed">
                    Saibaba Home Decor And Handloom<br />
                    Nashik, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="border border-walnut/10 rounded-3xl p-8 md:p-10 relative overflow-hidden bg-cream-2 shadow-[0_20px_60px_rgba(44,26,14,0.07)]"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/6 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-2xl font-serif mb-7 relative z-10 text-walnut">Schedule a Consultation</h2>

            <form className="space-y-6 relative z-10">
              {[
                { label: 'YOUR NAME',     placeholder: 'Full Name',      type: 'text' },
                { label: 'EMAIL ADDRESS', placeholder: 'your@email.com', type: 'email' },
              ].map(field => (
                <div key={field.label} className="space-y-1.5">
                  <label className="font-mono text-[9px] tracking-widest text-walnut/35">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border-b border-walnut/15 bg-transparent py-2.5 text-sm text-walnut placeholder-walnut/25 outline-none focus:border-gold transition-colors duration-300 font-light"
                  />
                </div>
              ))}
              <div className="space-y-1.5">
                <label className="font-mono text-[9px] tracking-widest text-walnut/35">INTERIOR BUDGET</label>
                <input
                  type="text"
                  placeholder="₹5,00,000 – ₹50,00,000"
                  className="w-full border-b border-walnut/15 bg-transparent py-2.5 text-sm text-walnut placeholder-walnut/25 outline-none focus:border-gold transition-colors duration-300 font-light"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-[9px] tracking-widest text-walnut/35">PROJECT TIMELINE</label>
                <select className="w-full border-b border-walnut/15 bg-cream-2 py-2.5 text-sm text-walnut/60 outline-none focus:border-gold transition-colors appearance-none">
                  <option value="immediate">Immediate (1–3 months)</option>
                  <option value="flexible">Flexible (3–6 months)</option>
                  <option value="planning">Planning (6+ months)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-[9px] tracking-widest text-walnut/35">YOUR VISION</label>
                <textarea
                  rows={3}
                  placeholder="Describe your dream space..."
                  className="w-full border-b border-walnut/15 bg-transparent py-2.5 text-sm text-walnut placeholder-walnut/25 outline-none focus:border-gold transition-colors resize-none font-light"
                />
              </div>
              <button
                type="button"
                className="w-full bg-walnut text-cream py-4 rounded-full tracking-[0.2em] text-xs uppercase hover:bg-gold hover:text-walnut transition-all duration-300 font-semibold shadow-[0_8px_30px_rgba(44,26,14,0.18)] mt-2"
              >
                Request Callback
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
