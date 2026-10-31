'use client';

import { motion } from 'framer-motion';
import { TRACKS, type TrackId } from '@/data/curriculum';
import { MODULE_ICONS } from '@/lib/icons';

interface TrackSelectorProps {
  active: TrackId;
  moduleCounts: Record<string, number>;
  percentFor: (id: TrackId) => number;
  onSelect: (id: TrackId) => void;
}

export default function TrackSelector({ active, moduleCounts, percentFor, onSelect }: TrackSelectorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {TRACKS.map((track) => {
        const Icon = MODULE_ICONS[track.iconName];
        const selected = active === track.id;
        const percent = percentFor(track.id);
        return (
          <motion.button
            key={track.id}
            type="button"
            onClick={() => onSelect(track.id)}
            whileTap={{ scale: 0.98 }}
            aria-pressed={selected}
            className={`relative flex flex-col rounded-2xl border p-4 text-left transition ${
              selected
                ? 'border-transparent bg-slate-900 ring-2 ring-cyan-400/70'
                : 'border-slate-800 bg-slate-900/60 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${track.accentColor}`}
              >
                {Icon && <Icon className="h-5 w-5 text-slate-950" />}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500">Jalur {track.order}</span>
            </div>
            <h3 className="mt-3 text-sm font-bold leading-snug text-white">{track.label}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">{track.tagline}</p>
            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
              <span>{moduleCounts[track.id] ?? 0} modul</span>
              <span className="font-semibold text-slate-200">{percent}%</span>
            </div>
            <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${track.accentColor} transition-all duration-500`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
