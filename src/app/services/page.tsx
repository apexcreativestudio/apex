import Link from 'next/link';
import { SERVICES_DATA } from '@/lib/services/data';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Services Architecture — APEX CREATIVE',
  description: 'Explore the 18 specialized capabilities across Brand Strategy, Creative Craft, Digital Architecture, and Performance Growth.'
});

const PILLARS = [
  { 
    id: 'BRAND', 
    name: 'Brand Strategy & Identity', 
    color: 'text-[#F31A3E]', 
    accentColor: '#F31A3E',
    borderGlow: 'hover:border-[#F31A3E]/40',
    topBar: 'bg-[#F31A3E]',
    badge: 'bg-[#F31A3E]/10 text-[#F31A3E]'
  },
  { 
    id: 'CREATIVE', 
    name: 'Creative Craft & Visual Motion', 
    color: 'text-[#7A2397]', 
    accentColor: '#7A2397',
    borderGlow: 'hover:border-[#7A2397]/40',
    topBar: 'bg-[#7A2397]',
    badge: 'bg-[#7A2397]/10 text-[#7A2397]'
  },
  { 
    id: 'DIGITAL', 
    name: 'Digital Architecture & Web Apps', 
    color: 'text-[#1D16EF]', 
    accentColor: '#1D16EF',
    borderGlow: 'hover:border-[#1D16EF]/40',
    topBar: 'bg-[#1D16EF]',
    badge: 'bg-[#1D16EF]/10 text-[#1D16EF]'
  },
  { 
    id: 'GROWTH', 
    name: 'Performance Growth & Marketing', 
    color: 'text-[#03A7AE]', 
    accentColor: '#03A7AE',
    borderGlow: 'hover:border-[#03A7AE]/40',
    topBar: 'bg-[#03A7AE]',
    badge: 'bg-[#03A7AE]/10 text-[#03A7AE]'
  }
];

export default function ServicesOverviewPage() {
  return (
    <div className="bg-[#FCFCFD] text-[#0B0B0F] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F31A3E] block mb-3">
            CAPABILITIES ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight uppercase leading-[0.95] mb-6">
            OUR 18 SPECIALIZED <span className="apex-gradient-text">CAPABILITIES</span>
          </h1>
          <p className="text-lg text-[#0B0B0F]/75 font-sans leading-relaxed">
            We structure our capabilities across four core pillars: Brand, Creative, Digital, and Growth. Every service is a dedicated practice engineered to command market authority.
          </p>
        </div>

        {/* Quick Pillar Jump Navigation */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-16 pb-6 border-b border-[#0B0B0F]/10">
          <span className="text-xs font-mono font-bold text-[#0B0B0F]/40 uppercase mr-1">
            Pillars:
          </span>
          {PILLARS.map((pillar) => (
            <a
              key={pillar.id}
              href={`#${pillar.id.toLowerCase()}`}
              className="px-4 py-2 rounded-full bg-white border border-[#0B0B0F]/10 text-xs font-heading font-bold uppercase tracking-wider text-[#0B0B0F] hover:bg-[#0B0B0F] hover:text-[#FCFCFD] hover:border-[#0B0B0F] transition-all shadow-sm"
            >
              {pillar.name}
            </a>
          ))}
        </div>

        {/* Pillars Architecture */}
        <div className="space-y-24 mb-24">
          {PILLARS.map((pillar) => {
            const pillarServices = SERVICES_DATA.filter(s => s.category === pillar.id);

            return (
              <div key={pillar.id} id={pillar.id.toLowerCase()} className="space-y-8 scroll-mt-28">
                <div className="flex items-center gap-3 pb-4 border-b-2 border-[#0B0B0F]/10">
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#0B0B0F]">
                    {pillar.name}
                  </h2>
                  <span className="ml-auto text-xs font-mono font-bold text-[#0B0B0F]/40 uppercase">
                    {pillarServices.length} MODULES
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pillarServices.map((service, idx) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`p-7 sm:p-8 rounded-3xl bg-white border border-[#0B0B0F]/10 shadow-sm hover:shadow-2xl ${pillar.borderGlow} hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
                    >
                      {/* Top Laser Accent Line */}
                      <div className={`absolute top-0 left-0 right-0 h-[2.5px] opacity-0 group-hover:opacity-100 ${pillar.topBar} transition-opacity duration-300`} />

                      <div>
                        {/* Module Indicator & Category */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md ${pillar.badge} uppercase tracking-wider`}>
                            MODULE 0{idx + 1}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-[#0B0B0F]/40 group-hover:text-[#F31A3E] transition-all transform group-hover:translate-x-1">
                            EXPLORE →
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-heading font-black tracking-tight text-[#0B0B0F] group-hover:text-[#F31A3E] transition-colors mb-3">
                          {service.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-xs sm:text-sm text-[#0B0B0F]/70 font-sans leading-relaxed mb-6">
                          {service.shortDescription}
                        </p>

                        {/* Top Capabilities Tags */}
                        {service.capabilities && service.capabilities.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {service.capabilities.slice(0, 2).map((cap, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-mono px-2 py-1 rounded bg-[#0B0B0F]/5 text-[#0B0B0F]/65 border border-[#0B0B0F]/5"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Footer */}
                      <div className="pt-4 border-t border-[#0B0B0F]/10 flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#0B0B0F]/50 group-hover:text-[#0B0B0F] transition-colors">
                          FULL SPECIFICATION
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#7A2397] group-hover:text-[#F31A3E] transition-colors">
                          <span>View Details</span>
                          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#0B0B0F] text-white p-12 rounded-3xl space-y-6">
          <h3 className="text-3xl font-heading font-black">NEED A TAILORED CAPABILITY COMBINATION?</h3>
          <p className="text-sm text-white/70 max-w-xl mx-auto">
            We build custom capability suites tailored to your exact brand and growth goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full apex-gradient-bg text-white font-heading font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform"
          >
            <span>Initiate Project Brief</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
