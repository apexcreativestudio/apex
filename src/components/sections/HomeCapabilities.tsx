'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PILLARS = [
  {
    id: 'BRAND',
    name: 'Brand Strategy & Identity',
    accent: 'text-[#F31A3E]',
    borderGlow: 'hover:border-[#F31A3E]/40',
    tagline: 'Engineering unshakeable visual identity systems and brand governance.',
    link: '/services/branding',
    items: ['Visual Identity Master Blueprint', 'Logo System Architecture', 'Signature Color Science', 'Brand Governance Portals']
  },
  {
    id: 'CREATIVE',
    name: 'Creative Craft & Visual Motion',
    accent: 'text-[#7A2397]',
    borderGlow: 'hover:border-[#7A2397]/40',
    tagline: 'Transforming static concepts into kinetic 3D motion and visual statements.',
    link: '/services/graphic-design',
    items: ['3D Volumetric Shaders', 'Signature Motion Loops', 'Key Visual Art Direction', 'High-Impact Editorial Graphics']
  },
  {
    id: 'DIGITAL',
    name: 'Digital Architecture & Web Apps',
    accent: 'text-[#1D16EF]',
    borderGlow: 'hover:border-[#1D16EF]/40',
    tagline: 'Next-gen React & Next.js web flagships with sub-second performance.',
    link: '/services/website-design',
    items: ['Next.js App Router Architecture', 'Design Token System Libraries', 'Tactile Micro-Animations', 'Lighthouse 90+ Compliance']
  },
  {
    id: 'GROWTH',
    name: 'Performance Growth & SEO',
    accent: 'text-[#03A7AE]',
    borderGlow: 'hover:border-[#03A7AE]/40',
    tagline: 'Data-driven search optimization, conversion creative, and lead engines.',
    link: '/services/performance-marketing',
    items: ['Technical SEO Infrastructure', 'Conversion Rate Creative (CRO)', 'Content Marketing Topology', 'Executive Data Analytics']
  }
];

export const HomeCapabilities: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('BRAND');

  const selected = PILLARS.find(p => p.id === activePillar) || PILLARS[0];

  return (
    <section className="py-24 bg-[#FCFCFD] text-[#0B0B0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F31A3E] block mb-2">
              Capabilities Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#0B0B0F]">
              OUR FOUR <span className="apex-gradient-text">PILLARS</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#0B0B0F] hover:text-[#F31A3E] transition-colors py-2 border-b border-[#0B0B0F]/20 hover:border-[#F31A3E]"
          >
            <span>Explore All 18 Services</span>
          </Link>
        </div>

        {/* Pillar Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {PILLARS.map((pillar) => {
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between min-h-[140px] cursor-pointer ${
                  isActive 
                    ? 'bg-[#0B0B0F] text-[#FCFCFD] border-[#0B0B0F] shadow-xl shadow-[#0B0B0F]/15 -translate-y-1' 
                    : 'bg-white text-[#0B0B0F] border-[#0B0B0F]/10 hover:border-[#0B0B0F]/30 hover:bg-[#0B0B0F]/5'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#F31A3E]' : 'text-[#0B0B0F]/40'}`}>
                    0{PILLARS.indexOf(pillar) + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-heading font-black tracking-tight mt-3">
                    {pillar.name}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detail View */}
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-12 rounded-3xl bg-white border border-[#0B0B0F]/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-[#F31A3E] uppercase tracking-widest block">
              Pillar Focus Scope
            </span>
            <h3 className="text-2xl sm:text-4xl font-heading font-black text-[#0B0B0F]">
              {selected.name}
            </h3>
            <p className="text-base text-[#0B0B0F]/75 font-sans leading-relaxed">
              {selected.tagline}
            </p>

            <div className="pt-4">
              <Link
                href={selected.link}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0B0B0F] text-[#FCFCFD] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#7A2397] transition-all shadow-md group"
              >
                <span>Deep-Dive Into {selected.id}</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#0B0B0F]/5 rounded-2xl p-6 sm:p-8 border border-[#0B0B0F]/10 space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#0B0B0F]/60 uppercase tracking-widest mb-2">
              Engineered Capability Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selected.items.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#0B0B0F]/10 flex items-center gap-2.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#03A7AE] shrink-0" />
                  <span className="text-xs font-heading font-semibold text-[#0B0B0F]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
