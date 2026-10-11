import Link from 'next/link';
import { CONCEPT_PROJECTS } from '@/lib/work/data';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata = constructMetadata({
  title: 'Work & Creative Lab — APEX Self-Initiated Concepts',
  description: 'Explore APEX Creative Lab explorations, self-initiated brand concepts, and 3D motion experiments. All work is clearly labeled as concept explorations.'
});

export default function WorkPage() {
  return (
    <div className="bg-[#FCFCFD] text-[#0B0B0F] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0B0F]/5 text-xs font-mono font-bold uppercase tracking-widest text-[#F31A3E] mb-4">
            <span>Creative Lab Explorations</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight uppercase leading-[0.95] mb-6">
            WORK & <span className="apex-gradient-text">EXPERIMENTS</span>
          </h1>
          <p className="text-lg text-[#0B0B0F]/75 font-sans leading-relaxed">
            As a new studio, we present our self-initiated lab explorations to demonstrate our strategic thinking, visual design quality, and technical capabilities.
          </p>
        </div>

        {/* Mandatory Transparency Notice Box */}
        <div className="p-6 rounded-2xl bg-[#0B0B0F] text-[#FCFCFD] mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/10 shadow-xl">
          <div className="flex items-center gap-3">
            <p className="text-xs font-mono leading-relaxed text-white/80">
              <strong className="text-white uppercase font-bold">Governance Integrity Protocol:</strong> All projects below are self-initiated APEX Creative Lab concepts. They demonstrate what we can create for our future partners.
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono text-white/70 whitespace-nowrap shrink-0">
            100% Truth Standard
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {CONCEPT_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#0B0B0F]/10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#0B0B0F]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="px-3 py-1.5 rounded-full bg-[#F31A3E] text-white text-[11px] font-mono font-bold uppercase shadow-md">
                    {project.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#0B0B0F]/80 backdrop-blur-md text-white text-[10px] font-mono font-bold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                <div>
                  <h2 className="text-2xl font-heading font-black text-[#0B0B0F] group-hover:text-[#F31A3E] transition-colors flex items-center justify-between mb-2">
                    <span>{project.title}</span>
                  </h2>
                  <p className="text-xs font-mono text-[#7A2397] font-semibold mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-[#0B0B0F]/75 font-sans leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#0B0B0F]/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#0B0B0F]/50 font-bold block">
                    Exploration Focus
                  </span>
                  <ul className="space-y-1 text-xs text-[#0B0B0F]/80 font-sans">
                    {project.designExploration.map((exp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#F31A3E] font-bold">•</span>
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#0B0B0F]/10 flex items-center justify-between text-xs font-heading font-bold text-[#03A7AE]">
                  <span>LAB SPECIFICATIONS</span>
                  <span>{project.specs[0].value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#0B0B0F] text-white p-12 rounded-3xl space-y-6">
          <h3 className="text-3xl font-heading font-black">WANT TO BE OUR FIRST FLAGSHIP CLIENT?</h3>
          <p className="text-sm text-white/70 max-w-xl mx-auto">
            Partner with APEX Creative to build your next brand identity or digital experience.
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

