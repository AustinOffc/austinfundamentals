'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { TrackInfo } from '@/data/curriculum';
import { STAGE_STYLES } from '@/lib/icons';

export default function StageRoadmap({ track }: { track: TrackInfo }) {
  return (
    <section id="tahapan" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Tahapan Belajar: {track.label}</h2>
        <p className="mt-2 text-slate-400">{track.description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {track.stages.map((stage, index) => {
          const style = STAGE_STYLES[index % STAGE_STYLES.length];
          return (
            <motion.div
              key={`${track.id}-${stage.step}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative rounded-2xl border ${style.ring} bg-slate-900/70 p-5 backdrop-blur-md`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-extrabold text-slate-950 ${style.badge}`}
                >
                  {stage.step}
                </span>
                {index < track.stages.length - 1 && <ChevronRight className={`hidden h-6 w-6 md:block ${style.text}`} />}
              </div>
              <h3 className="mt-4 text-base font-bold text-white">{stage.title}</h3>
              <span className={`mt-1 inline-block text-xs font-semibold ${style.text}`}>Level {stage.level}</span>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{stage.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
