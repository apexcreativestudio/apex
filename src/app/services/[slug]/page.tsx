import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES_DATA, getServiceBySlug } from '@/lib/services/data';
import { constructMetadata } from '@/lib/seo/metadata';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return constructMetadata({ title: 'Service Not Found' });
  }

  return constructMetadata({
    title: `${service.title} Services | APEX CREATIVE`,
    description: service.shortDescription,
    canonicalUrl: `/services/${service.slug}`
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES_DATA.filter(
    s => s.category === service.category && s.slug !== service.slug
  ).slice(0, 3);

  return (
    <div className="bg-[#FCFCFD] text-[#0B0B0F] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#0B0B0F]/50 mb-8">
          <Link href="/services" className="hover:text-[#F31A3E]">SERVICES</Link>
          <span>/</span>
          <span className="text-[#F31A3E] font-bold uppercase">{service.category}</span>
          <span>/</span>
          <span className="text-[#0B0B0F] font-bold">{service.title}</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mb-20">
          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight uppercase leading-[0.95] mb-6">
            {service.title.split(' ')[0]} <span className="apex-gradient-text">{service.title.split(' ').slice(1).join(' ') || 'CAPABILITY'}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#0B0B0F]/80 font-sans font-medium leading-relaxed mb-8">
            "{service.heroStatement}"
          </p>
          <div className="p-6 rounded-2xl bg-[#0B0B0F]/5 border border-[#0B0B0F]/10 text-xs font-sans text-[#0B0B0F]/80 leading-relaxed">
            <strong className="font-heading font-bold text-[#0B0B0F] block mb-1">Capability Scope Overview</strong>
            {service.shortDescription}
          </div>
        </div>

        {/* Grid: Capabilities & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Capabilities */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#0B0B0F]/10 shadow-lg space-y-6">
            <h2 className="text-2xl font-heading font-black text-[#0B0B0F] pb-4 border-b border-[#0B0B0F]/10">
              Core Capabilities
            </h2>
            <div className="space-y-4">
              {service.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#0B0B0F]/5 border border-[#0B0B0F]/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F31A3E] shrink-0 mt-2" />
                  <span className="text-xs sm:text-sm font-heading font-bold text-[#0B0B0F]">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="lg:col-span-5 bg-[#0B0B0F] text-[#FCFCFD] rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <h2 className="text-2xl font-heading font-black text-white pb-4 border-b border-white/10 mb-6">
                Engineered Deliverables
              </h2>
              <div className="space-y-3">
                {service.deliverables.map((del, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-white/90">
                    {del}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 text-[11px] font-mono text-white/70">
              <strong className="text-[#03A7AE] block mb-1">Why It Matters:</strong>
              {service.whyItMatters}
            </div>
          </div>
        </div>

        {/* Execution Process */}
        <div className="mb-24">
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-[#0B0B0F] mb-8 text-center">
            EXECUTION <span className="apex-gradient-text">PROCESS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.process.map((prc) => (
              <div key={prc.step} className="p-8 rounded-3xl bg-white border border-[#0B0B0F]/10 shadow-lg space-y-3">
                <span className="text-3xl font-heading font-black text-[#F31A3E]">{prc.step}</span>
                <h3 className="text-lg font-heading font-bold text-[#0B0B0F]">{prc.name}</h3>
                <p className="text-xs text-[#0B0B0F]/70 font-sans leading-relaxed">{prc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mb-24 pt-12 border-t border-[#0B0B0F]/10">
            <h3 className="text-xl font-heading font-bold text-[#0B0B0F] mb-6">Related Pillar Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <div key={rel.slug} className="p-6 rounded-2xl bg-white border border-[#0B0B0F]/10 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-heading font-bold text-[#0B0B0F] mb-2">{rel.title}</h4>
                    <p className="text-xs text-[#0B0B0F]/70 line-clamp-2">{rel.shortDescription}</p>
                  </div>
                  <Link href={`/services/${rel.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#7A2397] hover:text-[#F31A3E] transition-colors">
                    <span>View Capability</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center bg-[#0B0B0F] text-white p-12 rounded-3xl space-y-6">
          <h3 className="text-3xl font-heading font-black">DISCUSS YOUR {service.title.toUpperCase()} BRIEF</h3>
          <p className="text-sm text-white/70 max-w-xl mx-auto">
            Partner with APEX Creative to engineer your {service.title.toLowerCase()} strategy.
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
