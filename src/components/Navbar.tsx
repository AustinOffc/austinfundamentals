'use client';

import { BrainCircuit, RotateCcw } from 'lucide-react';

interface NavbarProps {
  percent: number;
  onReset: () => void;
}

const LINKS = [
  { href: '#vibe-coding', label: 'Kenapa Fondasi?' },
  { href: '#kurikulum', label: 'Kurikulum' },
  { href: '#tahapan', label: 'Tahapan Belajar' },
  { href: '#hasil', label: 'Hasil Akhir' }
];

export default function Navbar({ percent, onReset }: NavbarProps) {
  const handleReset = () => {
    if (window.confirm('Reset semua progress belajar, checklist, dan skor kuis?')) {
      onReset();
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500">
            <BrainCircuit className="h-5 w-5 text-slate-950" />
          </span>
          <span className="text-sm font-bold tracking-tight text-white sm:text-base">RVC <span className="hidden font-medium text-slate-400 sm:inline">· Ruang Vibe Coders</span></span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            {percent}% Selesai
          </span>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition hover:border-danger-500/60 hover:text-danger-300"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Reset Progress</span>
          </button>
        </div>
      </div>
      <div className="h-0.5 w-full bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </header>
  );
}
