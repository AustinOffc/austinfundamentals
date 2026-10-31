'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, EyeOff, KeyRound, Bug } from 'lucide-react';

const POINTS = [
  {
    icon: EyeOff,
    title: 'Kode jalan, tapi tidak dipahami',
    description: 'Kalau kamu tidak tahu isi kodenya, kamu tidak bisa memperbaikinya saat error atau mengubahnya saat kebutuhan berubah.'
  },
  {
    icon: KeyRound,
    title: 'Secret dan akses terbuka',
    description: 'API key tertulis di kode, password tanpa hash, dan endpoint tanpa pengecekan akses sering muncul di kode hasil AI.'
  },
  {
    icon: Bug,
    title: 'Celah yang tidak terlihat',
    description: 'SQL injection, XSS, dan callback pembayaran palsu tidak muncul saat uji normal. Baru terasa setelah ada kerugian.'
  }
];

export default function VibeCodingBanner({ onGoSecure }: { onGoSecure: () => void }) {
  return (
    <section id="vibe-coding" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-8">
      <div className="rounded-3xl border border-danger-500/30 bg-gradient-to-br from-danger-500/10 via-slate-900/70 to-slate-900/70 p-6 sm:p-8">
        <div className="flex items-center gap-2 text-danger-300">
          <AlertTriangle className="h-5 w-5" />
          <span className="text-xs font-bold uppercase tracking-wide">Penting untuk pemula & vibe coder</span>
        </div>
        <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
          Menyuruh AI menulis kode itu mudah. Bertanggung jawab atas hasilnya itu tugasmu.
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
          Banyak aplikasi buatan vibe coding berjalan tetapi dibangun tanpa memahami algoritma, isi kode, dan keamanannya.
          Fondasi di platform ini membantumu membaca, menguji, dan mengamankan kode AI sebelum dipakai pengguna sungguhan.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
              >
                <Icon className="h-5 w-5 text-danger-300" />
                <h3 className="mt-3 text-sm font-bold text-white">{point.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{point.description}</p>
              </motion.div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={onGoSecure}
          className="mt-6 rounded-full bg-gradient-to-r from-danger-400 to-warn-400 px-6 py-2.5 text-sm font-bold text-slate-950 transition hover:opacity-90"
        >
          Buka Jalur Secure Coding
        </button>
      </div>
    </section>
  );
}
