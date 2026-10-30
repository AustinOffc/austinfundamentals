'use client';

import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, SearchX } from 'lucide-react';
import { CURRICULUM_DATA, type LevelType } from '@/data/curriculum';
import { useProgress } from '@/hooks/useProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StageRoadmap from '@/components/StageRoadmap';
import ModuleCard from '@/components/ModuleCard';
import ModuleDetailModal from '@/components/ModuleDetailModal';
import OutcomeSection from '@/components/OutcomeSection';
import Footer from '@/components/Footer';

type FilterValue = LevelType | 'all';

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'Semua Level', value: 'all' },
  { label: '1. Pemula (Nol Putul)', value: 'Pemula' },
  { label: '2. Junior', value: 'Junior' },
  { label: '3. Mid-Level', value: 'Mid-Level' },
  { label: '4. Senior', value: 'Senior' }
];

export default function Home() {
  const progress = useProgress();
  const [filter, setFilter] = useState<FilterValue>('all');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return CURRICULUM_DATA.filter((item) => {
      if (filter !== 'all' && item.level !== filter) return false;
      if (!keyword) return true;
      const haystack = [
        item.title,
        item.subtitle,
        ...item.subTopics.map((topic) => topic.title),
        ...item.subTopics.map((topic) => topic.casualExplanation)
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(keyword);
    });
  }, [filter, query]);

  const closeModal = useCallback(() => setOpenId(null), []);

  const openItem = CURRICULUM_DATA.find((item) => item.id === openId) ?? null;

  return (
    <>
      <Navbar percent={progress.globalPercent} onReset={progress.resetProgress} />
      <main>
        <Hero />
        <section id="kurikulum" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Kurikulum Lengkap</h2>
            <p className="mt-2 text-slate-400">Centang materi yang sudah kamu pelajari dan uji pemahamanmu.</p>
          </div>

          <div className="mb-8 flex flex-col gap-4">
            <div className="relative mx-auto w-full max-w-xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari materi, misal: Python, RAG, Transformer, Kalkulus"
                className="w-full rounded-full border border-slate-800 bg-slate-900/70 py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-cyan-500/60 focus:outline-none"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 md:justify-center">
              {FILTERS.map((entry) => (
                <button
                  key={entry.value}
                  type="button"
                  onClick={() => setFilter(entry.value)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                    filter === entry.value
                      ? 'border-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950'
                      : 'border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  {entry.label}
                </button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, index) => (
                <ModuleCard
                  key={item.id}
                  item={item}
                  index={index}
                  progress={progress.moduleProgress(item)}
                  checked={progress.checked}
                  quizCorrect={Boolean(progress.quiz[item.id]?.correct)}
                  onToggle={progress.toggleTopic}
                  onOpen={() => setOpenId(item.id)}
                />
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-slate-800 py-16 text-slate-500">
              <SearchX className="h-8 w-8" />
              <p className="text-sm">Tidak ada materi yang cocok dengan pencarianmu.</p>
            </div>
          )}
        </section>
        <StageRoadmap />
        <OutcomeSection />
      </main>
      <Footer />

      <AnimatePresence>
        {openItem && (
          <ModuleDetailModal
            key={openItem.id}
            item={openItem}
            checked={progress.checked}
            quizResult={progress.quiz[openItem.id]}
            onToggle={progress.toggleTopic}
            onAnswer={(selected) => progress.answerQuiz(openItem.id, selected, openItem.quiz.correctIndex)}
            onRetry={() => progress.retryQuiz(openItem.id)}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}
