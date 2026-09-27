import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Alexandre Dubois | Développeur Web & Full-Stack',
  description: 'Portfolio de Alexandre Dubois, développeur Full-Stack spécialisé en Next.js, React et Node.js.',
  openGraph: {
    title: 'Alexandre Dubois | Développeur Web & Full-Stack',
    description: 'Portfolio de Alexandre Dubois, développeur Full-Stack spécialisé en Next.js, React et Node.js.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexandre Dubois | Développeur Web & Full-Stack',
    description: 'Portfolio de Alexandre Dubois, développeur Full-Stack spécialisé en Next.js, React et Node.js.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased selection:bg-accent/30 selection:text-accent-foreground min-h-screen flex flex-col`} suppressHydrationWarning>
        <Header />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
