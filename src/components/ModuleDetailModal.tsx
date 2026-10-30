'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useIsPresent } from 'framer-motion';
import {
  BookOpen,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  HelpCircle,
  Lightbulb,
  ListChecks,
  RotateCcw,
  X,
  XCircle
} from 'lucide-react';
import type { ModuleItem } from '@/data/curriculum';
import type { QuizResult } from '@/hooks/useProgress';
import { lockBodyScroll } from '@/lib/scrollLock';

type TabId = 'analogi' | 'materi' | 'kode' | 'kuis';

interface ModuleDetailModalProps {
  item: ModuleItem;
  checked: Record<string, boolean>;
  quizResult: QuizResult | undefined;
  onToggle: (topicId: string) => void;
  onAnswer: (selected: number) => void;
  onRetry: () => void;
  onClose: () => void;
}

const TABS: { id: TabId; label: string; icon: typeof BookOpen }[] = [
  { id: 'analogi', label: 'Analogi', icon: Lightbulb },
  { id: 'materi', label: 'Sub-Materi', icon: ListChecks },
  { id: 'kode', label: 'Kode', icon: Code2 },
  { id: 'kuis', label: 'Kuis', icon: HelpCircle }
];

export default function ModuleDetailModal({
  item,
  checked,
  quizResult,
  onToggle,
  onAnswer,
  onRetry,
  onClose
}: ModuleDetailModalProps) {
  const [tab, setTab] = useState<TabId>('analogi');
  const [copied, setCopied] = useState(false);

  const isPresent = useIsPresent();
  const onCloseRef = useRef(onClose);
  const pressedOnBackdrop = useRef(false);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const unlock = lockBodyScroll();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      unlock();
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.codeSnippet.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/80 backdrop-blur-sm sm:items-center sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.18 } }}
      style={{ pointerEvents: isPresent ? 'auto' : 'none' }}
      onPointerDown={(event) => {
        pressedOnBackdrop.current = event.target === event.currentTarget;
      }}
      onClick={(event) => {
        const shouldClose = pressedOnBackdrop.current && event.target === event.currentTarget;
        pressedOnBackdrop.current = false;
        if (shouldClose) onClose();
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0, transition: { duration: 0.18 } }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-slate-800 bg-slate-900 sm:rounded-3xl"
      >
        <div className={`h-1.5 w-full bg-gradient-to-r ${item.accentColor}`} />
        <div className="flex items-start justify-between gap-3 px-5 pb-3 pt-4">
          <div>
            <p className="text-xs font-bold text-slate-500">
              MODUL {item.id} - {item.stageLabel}
            </p>
            <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">{item.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="rounded-full border border-slate-700 p-2 text-slate-400 transition hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-1 overflow-x-auto border-b border-slate-800 px-3">
          {TABS.map((entry) => {
            const Icon = entry.icon;
            const active = tab === entry.id;
            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => setTab(entry.id)}
                className={`relative flex shrink-0 items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition ${
                  active ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                {entry.label}
                {active && (
                  <motion.span
                    layoutId="modal-tab-underline"
                    className={`absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-gradient-to-r ${item.accentColor}`}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              {tab === 'analogi' && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                    <h3 className="flex items-center gap-2 text-base font-bold text-white">
                      <Lightbulb className="h-5 w-5 text-yellow-300" />
                      {item.analogyTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.analogyContent}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                    <h3 className="text-base font-bold text-white">Kenapa Ini Penting?</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.whyItMatters}</p>
                  </div>
                </div>
              )}

              {tab === 'materi' && (
                <ul className="space-y-3">
                  {item.subTopics.map((topic) => {
                    const done = Boolean(checked[topic.id]);
                    return (
                      <li key={topic.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-sm font-bold text-white">{topic.title}</h3>
                          <button
                            type="button"
                            onClick={() => onToggle(topic.id)}
                            className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition ${
                              done
                                ? 'bg-emerald-500/20 text-emerald-300'
                                : 'border border-slate-700 text-slate-300 hover:border-slate-500'
                            }`}
                          >
                            <Check className="h-3.5 w-3.5" />
                            {done ? 'Selesai' : 'Tandai Selesai'}
                          </button>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{topic.casualExplanation}</p>
                      </li>
                    );
                  })}
                </ul>
              )}

              {tab === 'kode' && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-white">{item.codeSnippet.title}</h3>
                  <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                    <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {item.codeSnippet.language}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-slate-300 transition hover:bg-slate-800"
                      >
                        {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                        {copied ? 'Tersalin' : 'Copy Code'}
                      </button>
                    </div>
                    <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-slate-200 sm:text-sm">
                      <code>{item.codeSnippet.code}</code>
                    </pre>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <h4 className="text-sm font-bold text-white">Penjelasan</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.codeSnippet.takeaway}</p>
                  </div>
                </div>
              )}

              {tab === 'kuis' && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold leading-snug text-white">{item.quiz.question}</h3>
                  <div className="space-y-2.5">
                    {item.quiz.options.map((option, optionIndex) => {
                      const answered = Boolean(quizResult);
                      const isCorrect = optionIndex === item.quiz.correctIndex;
                      const isSelected = quizResult?.selected === optionIndex;
                      let style = 'border-slate-700 bg-slate-950/60 text-slate-200 hover:border-slate-500';
                      if (answered && isCorrect) style = 'border-emerald-500/60 bg-emerald-500/10 text-emerald-200';
                      else if (answered && isSelected) style = 'border-rose-500/60 bg-rose-500/10 text-rose-200';
                      else if (answered) style = 'border-slate-800 bg-slate-950/40 text-slate-500';
                      return (
                        <button
                          key={option}
                          type="button"
                          disabled={answered}
                          onClick={() => onAnswer(optionIndex)}
                          className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-sm transition ${style}`}
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[10px] font-bold">
                            {String.fromCharCode(65 + optionIndex)}
                          </span>
                          <span className="flex-1">{option}</span>
                          {answered && isCorrect && <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />}
                          {answered && isSelected && !isCorrect && <XCircle className="h-5 w-5 shrink-0 text-rose-400" />}
                        </button>
                      );
                    })}
                  </div>
                  {quizResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`rounded-2xl border p-4 ${
                        quizResult.correct ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-rose-500/40 bg-rose-500/10'
                      }`}
                    >
                      <p className="text-sm font-bold text-white">{quizResult.correct ? 'Benar! Skor 1/1' : 'Belum tepat. Skor 0/1'}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.quiz.explanation}</p>
                      <button
                        type="button"
                        onClick={onRetry}
                        className="mt-3 flex items-center gap-1.5 rounded-full border border-slate-600 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-slate-400"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        Coba Lagi
                      </button>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
