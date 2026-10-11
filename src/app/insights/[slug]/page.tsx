import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INITIAL_POSTS, getPostBySlug } from '@/lib/sanity/posts';
import { constructMetadata } from '@/lib/seo/metadata';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INITIAL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return constructMetadata({ title: 'Article Not Found' });
  }

  return constructMetadata({
    title: `${post.title} | APEX Insights`,
    description: post.excerpt,
    image: post.image,
    canonicalUrl: `/insights/${post.slug}`
  });
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Related articles (same category or recent)
  const relatedPosts = INITIAL_POSTS.filter(p => p.slug !== post.slug).slice(0, 2);

  // Schema.org Article Structured Data
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role
    },
    publisher: {
      '@type': 'Organization',
      name: 'APEX CREATIVE',
      logo: {
        '@type': 'ImageObject',
        url: 'https://apexcreative.agency/brand/logo/apex-logo-primary.png'
      }
    }
  };

  return (
    <div className="bg-[#FCFCFD] text-[#0B0B0F] pt-32 pb-28">
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#0B0B0F]/50 mb-8">
          <Link href="/insights" className="hover:text-[#F31A3E] transition-colors">INSIGHTS</Link>
          <span>/</span>
          <span className="text-[#F31A3E] font-bold uppercase">{post.category}</span>
          <span>/</span>
          <span className="text-[#0B0B0F] font-semibold truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
        </div>

        {/* Back Link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#0B0B0F]/70 hover:text-[#F31A3E] mb-8 transition-colors"
        >
          <span>← Back to All Articles</span>
        </Link>

        {/* Article Headline & Metadata Header */}
        <header className="space-y-6 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#F31A3E]/10 text-[#F31A3E] text-xs font-mono font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs font-mono text-[#0B0B0F]/40">•</span>
            <span className="text-xs font-mono text-[#0B0B0F]/60">
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.05] text-[#0B0B0F]">
            {post.title}
          </h1>

          {/* Author Details Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#0B0B0F]/10 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0B0B0F] p-1.5 flex items-center justify-center shrink-0">
                <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-heading font-bold text-[#0B0B0F] block text-sm">{post.author.name}</span>
                <span className="text-[11px] text-[#0B0B0F]/50 block">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[#0B0B0F]/60">
              <span>
                Published {post.publishedAt}
              </span>
            </div>
          </div>
        </header>

        {/* Executive Summary Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0F]/[0.03] border-l-4 border-[#F31A3E] mb-12 shadow-sm">
          <span className="text-[10px] font-mono font-bold text-[#F31A3E] uppercase tracking-widest block mb-2">
            EXECUTIVE SUMMARY
          </span>
          <p className="text-base sm:text-lg font-sans font-medium text-[#0B0B0F]/90 leading-relaxed italic">
            "{post.excerpt}"
          </p>
        </div>

        {/* Main Hero Image */}
        <div className="rounded-3xl overflow-hidden mb-14 shadow-2xl border border-[#0B0B0F]/10 h-72 sm:h-[420px] relative bg-[#0B0B0F]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/50 via-transparent to-transparent opacity-60" />
        </div>

        {/* Clean Editorial Reader Body Container (Max-Width 3XL for Optimal Reading Legibility) */}
        <div className="max-w-3xl mx-auto font-sans text-base sm:text-lg text-[#0B0B0F]/90 leading-[1.8] space-y-8">
          {post.content.split('\n\n').map((paragraph, idx) => {
            const cleanText = paragraph.trim();
            if (!cleanText) return null;

            if (cleanText.startsWith('# ')) {
              return (
                <h1 key={idx} className="text-3xl sm:text-4xl font-heading font-black text-[#0B0B0F] tracking-tight mt-12 mb-6 pt-4 border-t border-[#0B0B0F]/10">
                  {cleanText.replace('# ', '')}
                </h1>
              );
            }
            if (cleanText.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-2xl sm:text-3xl font-heading font-bold text-[#0B0B0F] tracking-tight mt-10 mb-4">
                  {cleanText.replace('## ', '')}
                </h2>
              );
            }
            if (cleanText.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl font-heading font-bold text-[#7A2397] tracking-tight mt-8 mb-3">
                  {cleanText.replace('### ', '')}
                </h3>
              );
            }

            // Paragraph with bold / inline markdown rendering
            return (
              <p key={idx} className="text-base sm:text-lg text-[#0B0B0F]/85 font-normal leading-relaxed">
                {cleanText.split(/(\*\*.*?\*\*|`.*?`)/).map((part, pIdx) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={pIdx} className="font-bold text-[#0B0B0F]">{part.slice(2, -2)}</strong>;
                  }
                  if (part.startsWith('`') && part.endsWith('`')) {
                    return (
                      <code key={pIdx} className="px-2 py-0.5 rounded-md bg-[#0B0B0F]/5 text-xs font-mono text-[#F31A3E] border border-[#0B0B0F]/10">
                        {part.slice(1, -1)}
                      </code>
                    );
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>

        {/* Tags Bar */}
        <div className="max-w-3xl mx-auto mt-14 pt-8 border-t border-[#0B0B0F]/10 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#0B0B0F]/50 font-bold mr-2">TOPICS:</span>
          {post.tags.map((tag) => (
            <span key={tag} className="px-3.5 py-1.5 rounded-full bg-[#0B0B0F]/5 text-xs font-mono font-semibold text-[#0B0B0F]/80 border border-[#0B0B0F]/10">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio Footer Box */}
        <div className="max-w-3xl mx-auto mt-12 p-8 rounded-3xl bg-[#0B0B0F] text-[#FCFCFD] flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-white/10 p-3 flex items-center justify-center shrink-0 border border-white/15">
            <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-contain" />
          </div>
          <div className="space-y-1 flex-grow">
            <span className="text-[10px] font-mono text-[#F31A3E] uppercase font-bold tracking-widest block">WRITTEN BY</span>
            <h4 className="text-lg font-heading font-black text-white">{post.author.name}</h4>
            <p className="text-xs font-mono text-[#03A7AE]">{post.author.role}</p>
            <p className="text-xs text-white/70 font-sans leading-relaxed pt-1">
              {post.author.name} specializes in {post.category.toLowerCase()} and brand strategy at APEX CREATIVE, engineering high-impact visual systems for digital brands.
            </p>
          </div>
        </div>

        {/* Related Articles Showcase */}
        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-[#0B0B0F]/10 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-heading font-black text-[#0B0B0F]">
                CONTINUE <span className="apex-gradient-text">READING</span>
              </h3>
              <Link href="/insights" className="text-xs font-heading font-bold text-[#7A2397] hover:text-[#F31A3E]">
                View All Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rel) => (
                <div key={rel.slug} className="bg-white rounded-3xl overflow-hidden border border-[#0B0B0F]/10 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all">
                  <div className="h-44 overflow-hidden relative bg-[#0B0B0F]">
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover opacity-90" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[10px] font-mono text-[#F31A3E] font-bold uppercase block mb-1">{rel.category}</span>
                      <h4 className="text-base font-heading font-bold text-[#0B0B0F] line-clamp-2">{rel.title}</h4>
                    </div>
                    <Link
                      href={`/insights/${rel.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#7A2397] hover:text-[#F31A3E]"
                    >
                      <span>Read Insight</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </article>
    </div>
  );
}
