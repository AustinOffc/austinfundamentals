'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { ModuleItem } from '@/data/curriculum';
import { MODULE_ICONS } from '@/lib/icons';

interface ModuleCardProps {
  item: ModuleItem;
  index: number;
  progress: number;
  checked: Record<string, boolean>;
  quizCorrect: boolean;
  onToggle: (topicId: string) => void;
  onOpen: () => void;
}

export default function ModuleCard({ item, index, progress, checked, quizCorrect, onToggle, onOpen }: ModuleCardProps) {
  const Icon = MODULE_ICONS[item.iconName];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
      className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-md transition hover:border-slate-600"
    >
      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.accentColor}`}>
          {Icon && <Icon className="h-6 w-6 text-slate-950" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500">MODUL {item.id}</span>
            <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-300">
              {item.level}
            </span>
            {quizCorrect && (
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                Kuis Lulus
              </span>
            )}
          </div>
          <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.subtitle}</p>

      <ul className="mt-4 space-y-1.5">
        {item.subTopics.map((topic) => {
          const done = Boolean(checked[topic.id]);
          return (
            <li key={topic.id}>
              <button
                type="button"
                onClick={() => onToggle(topic.id)}
                className="flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-sm transition hover:bg-slate-800/70"
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                    done ? `border-transparent bg-gradient-to-br ${item.accentColor}` : 'border-slate-600'
                  }`}
                >
                  {done && <Check className="h-3.5 w-3.5 text-slate-950" strokeWidth={3} />}
                </span>
                <span className={done ? 'text-slate-500 line-through' : 'text-slate-300'}>{topic.title}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-5">
        <div className="mb-1.5 flex justify-between text-xs text-slate-400">
          <span>Progress modul</span>
          <span className="font-semibold text-slate-200">{progress}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${item.accentColor} transition-all duration-500`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onOpen}
        className={`mt-5 w-full rounded-xl bg-gradient-to-r ${item.accentColor} px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:opacity-90 active:scale-[0.98]`}
      >
        Buka Ruang Belajar
      </button>
    </motion.article>
  );
}
