import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'SkullG | Mammal Skull Analyzer',
  description: 'Interactive mammal skull and trait analyzer using zoological data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased text-white selection:bg-cyan-500/30">
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
