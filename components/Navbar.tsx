import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          width: scrolled ? "900px" : "100%",
          paddingLeft: scrolled ? "32px" : "40px",
          paddingRight: scrolled ? "32px" : "40px",
          paddingTop: scrolled ? "10px" : "20px",
          paddingBottom: scrolled ? "10px" : "20px",
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.75)" : "rgba(255, 255, 255, 0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          borderRadius: scrolled ? "32px" : "0px",
          borderWidth: scrolled ? "1px" : "0px",
          marginTop: scrolled ? "2px" : "0px",
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex items-center justify-between border-black/5 shadow-soft max-w-7xl mx-auto pointer-events-auto"
      >
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 bg-textMain text-white rounded-lg flex items-center justify-center font-serif font-bold text-lg">
            L
          </div>
          <span className="font-sans font-bold text-lg tracking-tight text-textMain">
            LawYan
          </span>
        </Link>

        {/* Links - Desktop */}
        <div className="hidden md:flex items-center gap-1 bg-surface/50 p-1 rounded-full border border-black/5">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-1.5 text-sm font-medium transition-all rounded-full shrink-0 ${isActive
                  ? 'text-textMain bg-white shadow-sm'
                  : 'text-textMuted hover:text-textMain hover:bg-white/50'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="hidden md:block text-sm font-medium text-textMuted hover:text-textMain transition-colors">
            Log in
          </button>
          <Link to="/demo" className="px-4 py-2 bg-textMain text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg shadow-black/20">
            Start Trial
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button className="md:hidden text-textMain pointer-events-auto">
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </motion.nav>
    </div>
  );
};

export default Navbar;