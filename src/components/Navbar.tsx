import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Intelligence', href: '#intelligence' },
  { name: 'Performance', href: '#performance' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[100] transition-all duration-700",
      isScrolled ? "py-4" : "py-8"
    )}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "glass rounded-full px-8 py-4 flex items-center justify-between transition-all duration-700",
          isScrolled ? "bg-black/40 backdrop-blur-2xl border-white/10 shadow-2xl" : "bg-transparent border-transparent"
        )}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Zap className="text-black fill-black" size={20} />
            </div>
            <span className="text-xl font-display font-black tracking-tighter uppercase">
              FYP <span className="text-white/40 group-hover:text-neon-blue transition-colors duration-500">BOTS</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300">
              Sign In
            </button>
            <button className="px-6 py-3 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 active:scale-95 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full px-6 pt-4 md:hidden"
          >
            <div className="glass rounded-[2rem] p-8 border-white/10 shadow-2xl">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-bold text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                  <button className="w-full py-5 glass rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
                    Sign In
                  </button>
                  <button className="w-full py-5 bg-white text-black rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
