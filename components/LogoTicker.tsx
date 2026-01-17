import React from 'react';

const LOGOS = [
  "Acme Corp", "Quantum", "Echo", "Celestial", "Pulse", "Apex"
];

const LogoTicker: React.FC = () => {
  return (
    <section className="py-12 border-y border-black/5 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-semibold text-textMuted uppercase tracking-widest">TRUSTED BY 2,000+ LEGAL TEAMS</p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10"></div>

        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <div key={idx} className="mx-12 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default grayscale hover:grayscale-0">
              <span className="text-xl font-serif font-semibold text-textMain">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;