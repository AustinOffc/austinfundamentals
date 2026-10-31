import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CopyGuard from '@/components/CopyGuard';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RVC - Ruang Vibe Coders',
  description:
    'Ruang Vibe Coders: belajar bareng, bukan cuma bisa menyuruh AI, tapi paham apa yang ada di baliknya. Dasar programmer, algoritma, bahasa pemrograman, secure coding, dan AI Engineer.'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
        <CopyGuard />
        {children}
      </body>
    </html>
  );
}
