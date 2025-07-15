import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Sidebar } from '@/components/layout/Sidebar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Portfolio | Nikhil Reddy Satti',
  description: 'Portfolio for Nikhil Reddy Satti, a data analyst specializing in data engineering, analytics, and business intelligence.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <div className="relative flex min-h-dvh">
          <Sidebar />
          <div className="flex-1 lg:ml-72">
            <Header />
            <div className="p-4 sm:p-6 lg:p-8">
              {children}
            </div>
            <Footer />
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
