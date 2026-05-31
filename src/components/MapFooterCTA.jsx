import React from 'react';

const MapFooterCTA = () => {
  return (
    <footer className="bg-[#0A0A0A] text-smoke pt-24 pb-12 relative overflow-hidden border-t border-smoke/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-smoke/18 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          <div className="space-y-10">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-silver uppercase mb-4">Visit Us</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-smoke">See It In Person<br/>At Our Showroom</h2>
            </div>

            <div className="space-y-6 text-smoke/60 font-light">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-smoke/25 mb-2">Showroom</h4>
                <p>Saibaba Home Decor &amp; Handloom<br/>Nashik, Maharashtra, India</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-smoke/25 mb-2">Hours</h4>
                <p>Mon – Sat: 10:00 AM – 8:00 PM<br/>Sunday: 11:00 AM – 6:00 PM</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-smoke/25 mb-2">Contact</h4>
                <p>Email: info@saibabadecor.com<br/>Phone: +91 95112 85634</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/919511285634?text=Hi!%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20curtains%2C%20sofa%20covers%20and%20home%20decor%20products."
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-mono text-xs tracking-widest uppercase hover:bg-smoke hover:text-jet transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(37,211,102,0.25)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+919511285634"
                className="border border-smoke/30 text-smoke px-8 py-4 rounded-full font-mono text-xs tracking-widest uppercase hover:bg-smoke hover:text-jet transition-colors text-center"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="w-full h-80 lg:h-96 rounded-3xl overflow-hidden border border-smoke/8 relative filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.0865420317964!2d73.796612574689!3d20.046817520780195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb8f68f67a29%3A0x7e6933b6e8f9def0!2sSaibaba%20Home%20Decor%20And%20Handloom!5e0!3m2!1sen!2sin!4v1780145475139!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saibaba Home Decor Location – Nashik"
            />
            <div className="absolute inset-0 pointer-events-none border border-smoke/5 rounded-3xl" />
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-smoke/5 font-mono text-xs text-smoke/25 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Saibaba Home Decor &amp; Handloom, Nashik. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-smoke transition-colors">Privacy</a>
            <a href="#" className="hover:text-smoke transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MapFooterCTA;
