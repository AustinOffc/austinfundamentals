import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Engineer Fundamentals',
  description:
    'Fundamental pertama yang harus dipelajari untuk menjadi AI Engineer. Kuasai dasar-dasarnya dulu sebelum membangun solusi AI yang nyata!'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020617'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>{children}</body>
    </html>
  );
}
