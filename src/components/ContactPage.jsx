import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <main className="min-h-screen pt-40 pb-24 flex items-center bg-luxury-dark text-white relative overflow-hidden">
      {/* Teal ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-luxury-teal/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-luxury-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left */}
        <div className="space-y-12">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="font-mono text-xs tracking-[0.3em] text-luxury-teal uppercase mb-4">Get In Touch</p>
            <h1 className="text-6xl md:text-8xl font-serif leading-none mb-6">Connect</h1>
            <p className="text-white/50 font-light max-w-sm leading-relaxed">
              Begin your journey toward an extraordinary interior experience. Our atelier is waiting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 text-white/70"
          >
            <div>
              <h3 className="font-mono text-xs tracking-widest text-white/30 uppercase mb-3">Studio Address</h3>
              <p className="font-light leading-relaxed">452 Luxury Avenue, Suite 800<br/>Design District, CA 90210</p>
            </div>
            <div>
              <h3 className="font-mono text-xs tracking-widest text-white/30 uppercase mb-3">Direct Lines</h3>
              <p className="mb-1"><a href="tel:+18005550199" className="hover:text-luxury-teal transition-colors">+1 (800) 555-0199</a> <span className="font-mono text-xs text-white/30 ml-2">CONCIERGE</span></p>
              <p><a href="tel:+18005550200" className="hover:text-luxury-teal transition-colors">+1 (800) 555-0200</a> <span className="font-mono text-xs text-white/30 ml-2">DESIGNER</span></p>
            </div>
            <div>
              <h3 className="font-mono text-xs tracking-widest text-white/30 uppercase mb-3">Curation Channel</h3>
              <a href="mailto:curation@saibabadecor.com" className="hover:text-luxury-teal transition-colors">curation@saibabadecor.com</a>
            </div>
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(20px)', boxShadow: '0 0 60px rgba(0,128,128,0.08)' }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-luxury-teal/10 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-2xl md:text-3xl font-serif mb-8 relative z-10">Schedule a Consultation</h2>
          
          <form className="space-y-8 relative z-10">
            {[
              { label: 'YOUR NAME', placeholder: 'Full Name', type: 'text' },
              { label: 'EMAIL ADDRESS', placeholder: 'your@email.com', type: 'email' },
            ].map(field => (
              <div key={field.label} className="space-y-2">
                <label className="font-mono text-xs tracking-widest text-white/30">{field.label}</label>
                <input type={field.type} placeholder={field.placeholder}
                  className="w-full border-b border-white/15 bg-transparent py-2 text-white placeholder-white/25 outline-none focus:border-luxury-teal transition-colors" />
              </div>
            ))}
            <div className="space-y-2">
              <label className="font-mono text-xs tracking-widest text-white/30">INTERIOR BUDGET (USD)</label>
              <input type="text" placeholder="$50,000 – $500,000"
                className="w-full border-b border-white/15 bg-transparent py-2 text-white placeholder-white/25 outline-none focus:border-luxury-teal transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs tracking-widest text-white/30">PROJECT TIMELINE</label>
              <select className="w-full border-b border-white/15 bg-luxury-dark py-2 text-white/70 outline-none focus:border-luxury-teal transition-colors appearance-none">
                <option value="immediate">Immediate (1–3 months)</option>
                <option value="flexible">Flexible (3–6 months)</option>
                <option value="planning">Planning (6+ months)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-xs tracking-widest text-white/30">YOUR VISION</label>
              <textarea rows={3} placeholder="Describe your dream space..."
                className="w-full border-b border-white/15 bg-transparent py-2 text-white placeholder-white/25 outline-none focus:border-luxury-teal transition-colors resize-none" />
            </div>
            <button type="button"
              className="w-full bg-luxury-teal text-white py-4 rounded-full tracking-[0.2em] text-xs uppercase hover:bg-white hover:text-luxury-dark transition-all duration-300 font-semibold shadow-[0_0_30px_rgba(0,128,128,0.3)]">
              Request Callback
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;
