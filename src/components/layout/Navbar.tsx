'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // On mobile, hide navbar when scrolling down past 50px; reveal on scroll up or top
      if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
        setMobileNavVisible(false);
      } else {
        setMobileNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'SERVICES', href: '/services' },
    { name: 'APPROACH', href: '/approach' },
    { name: 'ABOUT', href: '/about' },
    { name: 'INSIGHTS', href: '/insights' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        mobileNavVisible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
      } ${
        isScrolled
          ? 'bg-[#FCFCFD]/95 backdrop-blur-md py-2 shadow-sm border-b border-[#0B0B0F]/10'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Touchpoint */}
          <Link href="/" className="flex items-center group focus:outline-none py-1">
            <div className="hidden sm:block">
              {/* Desktop & Tablet: Full APEX CREATIVE Primary Logo */}
              <img
                src="/brand/logo/apex-logo-navbar.png"
                alt="APEX CREATIVE — Ideas · Visuals · Impact"
                className="h-9 w-auto object-contain block select-none"
              />
            </div>

            {/* Mobile View: High Legibility Icon + Wordmark */}
            <div className="sm:hidden flex items-center gap-2">
              <img
                src="/brand/icon/apex-icon-mark.png"
                alt="APEX Flame Icon Mark"
                style={{ width: '32px', height: '32px' }}
                className="object-contain"
              />
              <span className="font-heading font-black text-sm tracking-wider text-[#0B0B0F]">
                APEX <span className="apex-gradient-text">CREATIVE</span>
              </span>
            </div>
          </Link>

          {/* Desktop Multi-Page Route Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs font-heading font-bold uppercase tracking-wider py-1 relative group transition-colors duration-300 ${
                    isActive ? 'text-[#F31A3E]' : 'text-[#0B0B0F]/80 hover:text-[#0B0B0F]'
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#F31A3E] to-[#1D16EF] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Contact CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B0B0F] text-[#FCFCFD] text-xs font-heading font-bold uppercase tracking-wider shadow-md hover:shadow-xl hover:shadow-[#F31A3E]/20 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">
                Contact APEX
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F31A3E] via-[#DC175B] via-[#7A2397] to-[#1D16EF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>

          {/* Mobile Menu Animated Toggler Button */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative w-11 h-11 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border focus:outline-none ${
                mobileMenuOpen
                  ? 'bg-[#0B0B0F] border-[#F31A3E] text-white shadow-lg shadow-[#F31A3E]/25'
                  : 'bg-[#0B0B0F]/5 border-[#0B0B0F]/15 text-[#0B0B0F] hover:bg-[#0B0B0F] hover:text-white'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                {/* Top Line */}
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-5 h-[2px] rounded-full block transform-origin-center ${
                    mobileMenuOpen ? 'bg-[#F31A3E]' : 'bg-current'
                  }`}
                />

                {/* Middle Line */}
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-[2px] rounded-full bg-current block"
                />

                {/* Bottom Line */}
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-5 h-[2px] rounded-full block transform-origin-center ${
                    mobileMenuOpen ? 'bg-[#03A7AE]' : 'bg-current'
                  }`}
                />
              </div>
            </motion.button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu with Staggered Item Animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#FCFCFD]/98 backdrop-blur-xl border-b border-[#0B0B0F]/10 overflow-hidden px-5 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              <div className="py-2 border-b border-[#0B0B0F]/10 flex items-center justify-between">
                <img
                  src="/brand/logo/apex-logo-transparent.png"
                  alt="APEX CREATIVE Primary Logo"
                  style={{ width: '150px', height: 'auto' }}
                  className="object-contain"
                />
                <span className="text-[10px] font-mono text-[#F31A3E] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#F31A3E]/10">
                  MENU ACTIVE
                </span>
              </div>

              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-heading font-black uppercase tracking-wider py-3 px-3 rounded-xl flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-[#0B0B0F] text-[#FCFCFD] shadow-md'
                          : 'text-[#0B0B0F] hover:bg-[#0B0B0F]/5'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#F31A3E]' : 'text-[#0B0B0F]/40'}`}>
                          0{idx + 1}
                        </span>
                        <span>{item.name}</span>
                      </span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="pt-4 flex flex-col gap-3"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 rounded-xl apex-gradient-bg text-[#FCFCFD] text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center shadow-xl shadow-[#F31A3E]/20"
                >
                  <span>Initiate Project Brief</span>
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
