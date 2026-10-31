'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, SearchX } from 'lucide-react';
import { CURRICULUM_DATA, getTrack, getQuizzes, type LevelType, type TrackId } from '@/data/curriculum';
import { useProgress } from '@/hooks/useProgress';
import { lockBodyScroll, unlockBodyScroll } from '@/lib/scrollLock';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StageRoadmap from '@/components/StageRoadmap';
import ModuleCard from '@/components/ModuleCard';
import ModuleDetailModal from '@/components/ModuleDetailModal';
import OutcomeSection from '@/components/OutcomeSection';
import TrackSelector from '@/components/TrackSelector';
import VibeCodingBanner from '@/components/VibeCodingBanner';
import Footer from '@/components/Footer';

type FilterValue = LevelType | 'all';

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: 'Semua Level', value: 'all' },
  { label: '1. Pemula (Dari Nol)', value: 'Pemula' },
  { label: '2. Junior', value: 'Junior' },
  { label: '3. Mid-Level', value: 'Mid-Level' },
  { label: '4. Senior', value: 'Senior' }
];

export default function Home() {
  const progress = useProgress();
  const [track, setTrack] = useState<TrackId>('dasar');
  const [filter, setFilter] = useState<FilterValue>('all');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return CURRICULUM_DATA.filter((item) => {
      // Saat mencari, cari di semua jalur. Jika tidak, tampilkan jalur yang dipilih.
      if (!keyword && item.track !== track) return false;
      if (filter !== 'all' && item.level !== filter) return false;
      if (!keyword) return true;
      const haystack = [
        item.title,
        item.subtitle,
        ...item.subTopics.map((topic) => topic.title),
        ...item.subTopics.map((topic) => topic.casualExplanation),
        ...(item.howItWorks ?? []).map((step) => step.title),
        ...(item.moreExamples ?? []).map((example) => example.title)
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(keyword);
    });
  }, [filter, query, track]);

  const closeModal = useCallback(() => setOpenId(null), []);

  const moduleCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CURRICULUM_DATA.forEach((item) => {
      counts[item.track] = (counts[item.track] ?? 0) + 1;
    });
    return counts;
  }, []);

  const activeTrack = getTrack(track);
  const searching = query.trim().length > 0;

  const goToTrack = useCallback((id: TrackId) => {
    setTrack(id);
    setQuery('');
    setFilter('all');
    window.requestAnimationFrame(() => {
      document.getElementById('kurikulum')?.scrollIntoView({ behavior: 'smooth' });
    });
  }, []);

  useEffect(() => {
    unlockBodyScroll();
    return () => unlockBodyScroll();
  }, []);

  useEffect(() => {
    if (openId === null) return;
    return lockBodyScroll();
  }, [openId]);

  const openItem = CURRICULUM_DATA.find((item) => item.id === openId) ?? null;

  return (
    <>
      <Navbar percent={progress.globalPercent} onReset={progress.resetProgress} />
      <main>
        <Hero />
        <VibeCodingBanner onGoSecure={() => goToTrack('keamanan')} />
        <section id="kurikulum" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Kurikulum Lengkap</h2>
            <p className="mt-2 text-slate-400">
              Pilih jalur belajar, centang materi yang sudah kamu pelajari, dan uji pemahamanmu. Urutan yang disarankan: Jalur 1 sampai 5.
            </p>
          </div>

          <div className="mb-8">
            <TrackSelector
              active={track}
              moduleCounts={moduleCounts}
              percentFor={progress.trackPercent}
              onSelect={(id) => {
                setTrack(id);
                setFilter('all');
                setQuery('');
              }}
            />
            <p className="mt-4 text-center text-sm text-slate-400">{activeTrack.description}</p>
          </div>

          <div className="mb-8 flex flex-col gap-4">
            <div className="relative mx-auto w-full max-w-xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari di semua jalur, misal: SQL injection, Big-O, Rust, RAG"
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

          {searching && (
            <p className="mb-4 text-center text-xs text-slate-500">
              Hasil pencarian dari semua jalur ({filtered.length} modul). Kosongkan kolom pencarian untuk kembali ke jalur {activeTrack.label}.
            </p>
          )}

          {filtered.length > 0 ? (
            <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, index) => (
                <ModuleCard
                  key={item.id}
                  item={item}
                  index={index}
                  progress={progress.moduleProgress(item)}
                  checked={progress.checked}
                  quizCorrect={progress.moduleQuizPassed(item)}
                  showTrack={searching}
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
        <StageRoadmap track={activeTrack} />
        <OutcomeSection track={activeTrack} />
      </main>
      <Footer />

      <AnimatePresence>
        {openItem && (
          <ModuleDetailModal
            key={openItem.id}
            item={openItem}
            checked={progress.checked}
            quizResults={progress.quiz}
            onToggle={progress.toggleTopic}
            onAnswer={(questionIndex, selected) =>
              progress.answerQuiz(openItem.id, questionIndex, selected, getQuizzes(openItem)[questionIndex].correctIndex)
            }
            onRetry={(questionIndex) => progress.retryQuiz(openItem.id, questionIndex)}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}
