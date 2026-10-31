'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Trophy } from 'lucide-react';
import type { TrackInfo } from '@/data/curriculum';

export default function OutcomeSection({ track }: { track: TrackInfo }) {
  return (
    <section id="hasil" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16">
      <div className="mb-10 text-center">
        <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-warn-400/15">
          <Trophy className="h-6 w-6 text-warn-300" />
        </span>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Hasil Akhir: {track.label}</h2>
        <p className="mt-2 text-slate-400">Target yang kamu capai setelah menyelesaikan seluruh tahapan jalur ini.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {track.outcomes.map((outcome, index) => (
          <motion.div
            key={`${track.id}-${outcome.title}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-md"
          >
            <CheckCircle2 className="h-7 w-7 text-success-400" />
            <h3 className="mt-4 text-lg font-bold text-white">{outcome.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{outcome.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
