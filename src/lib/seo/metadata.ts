import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'APEX CREATIVE',
  url: 'https://apexcreative.co.in',
  tagline: 'IDEAS · VISUALS · IMPACT',
  description: 'Official digital flagship of APEX CREATIVE. A new, ambitious creative design and digital marketing agency engineering bold visual identities, strategic digital experiences, and brand growth.',
  ogImage: '/brand/logo/apex-logo-primary.png'
};

export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  canonicalUrl,
  noIndex = false
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const pageTitle = title ? `${title} | APEX CREATIVE` : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;

  return {
    title: pageTitle,
    description,
    keywords: [
      'APEX CREATIVE',
      'Creative Agency',
      'Brand Identity',
      'Visual Identity Design',
      'Website Design',
      'Motion Graphics',
      'Digital Marketing',
      'Brand Strategy',
      'Performance Marketing'
    ],
    authors: [{ name: 'APEX CREATIVE Team' }],
    creator: 'APEX CREATIVE',
    publisher: 'APEX CREATIVE',
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonicalUrl || '/',
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl || '/',
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [image],
      creator: '@apexcreative',
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
