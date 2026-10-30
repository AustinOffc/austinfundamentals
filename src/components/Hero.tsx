'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const STATS = [
  { value: '9', label: 'Modul Lengkap' },
  { value: '4', label: 'Tahapan Karir' },
  { value: 'Santai', label: 'Bahasa Santai & Analogi' }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-16 sm:pt-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-300"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Platform Belajar Interaktif
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Fundamental Pertama yang Harus Dipelajari Untuk Menjadi{' '}
          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-fuchsia-500 bg-clip-text text-transparent">
            AI Engineer
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base text-slate-400 sm:text-lg"
        >
          Kuasai dasar-dasarnya dulu sebelum membangun solusi AI yang nyata!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="#kurikulum"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-7 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-purple-500/20 transition hover:scale-105"
          >
            Mulai Belajar Sekarang
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid grid-cols-3 gap-3"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 backdrop-blur-md">
              <div className="text-2xl font-extrabold text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
