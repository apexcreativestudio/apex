import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import '../index.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'APEX CREATIVE — IDEAS · VISUALS · IMPACT',
  description: 'Official website of APEX CREATIVE. A new, ambitious creative design and digital marketing agency built to combine strategy, craft, and digital growth.',
  icons: {
    icon: '/brand/favicon/favicon.png',
    apple: '/brand/favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#FCFCFD] text-[#0B0B0F] antialiased selection:bg-[#F31A3E] selection:text-white font-sans overflow-x-hidden min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
