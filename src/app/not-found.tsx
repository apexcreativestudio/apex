import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="bg-[#FCFCFD] text-[#0B0B0F] min-h-[80vh] flex items-center justify-center pt-32 pb-24 text-center">
      <div className="max-w-xl mx-auto px-4 space-y-6">
        <h1 className="text-6xl font-heading font-black text-[#0B0B0F]">404</h1>

        <h2 className="text-2xl font-heading font-bold uppercase tracking-tight text-[#0B0B0F]">
          PAGE NOT <span className="apex-gradient-text">FOUND</span>
        </h2>

        <p className="text-sm text-[#0B0B0F]/70 font-sans leading-relaxed">
          The route you requested does not exist or has been relocated within our site architecture.
        </p>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B0B0F] text-[#FCFCFD] text-xs font-heading font-bold uppercase tracking-wider hover:bg-[#7A2397] transition-colors"
          >
            <span>← Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

