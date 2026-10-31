'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useIsPresent } from 'framer-motion';
import {
  AlertOctagon,
  AlertTriangle,
  BookOpen,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  HelpCircle,
  Info,
  Lightbulb,
  ListChecks,
  Cog,
  RotateCcw,
  ShieldAlert,
  Terminal,
  X,
  XCircle
} from 'lucide-react';
import { getExamples, getQuizzes, type ModuleItem } from '@/data/curriculum';
import { quizKey, type QuizResult } from '@/hooks/useProgress';

type TabId = 'analogi' | 'materi' | 'cara' | 'kode' | 'waspada' | 'kuis';

interface ModuleDetailModalProps {
  item: ModuleItem;
  checked: Record<string, boolean>;
  quizResults: Record<string, QuizResult>;
  onToggle: (topicId: string) => void;
  onAnswer: (questionIndex: number, selected: number) => void;
  onRetry: (questionIndex: number) => void;
  onClose: () => void;
}

const ALL_TABS: { id: TabId; label: string; icon: typeof BookOpen }[] = [
  { id: 'analogi', label: 'Analogi', icon: Lightbulb },
  { id: 'materi', label: 'Sub-Materi', icon: ListChecks },
  { id: 'cara', label: 'Cara Kerja', icon: Cog },
  { id: 'kode', label: 'Contoh Kode', icon: Code2 },
  { id: 'waspada', label: 'Waspada', icon: ShieldAlert },
  { id: 'kuis', label: 'Kuis', icon: HelpCircle }
];

const SEVERITY_STYLE = {
  danger: { box: 'border-danger-500/40 bg-danger-500/10', icon: AlertOctagon, color: 'text-danger-400', label: 'Bahaya' },
  warning: { box: 'border-warn-500/40 bg-warn-500/10', icon: AlertTriangle, color: 'text-warn-300', label: 'Waspada' },
  info: { box: 'border-info-500/40 bg-info-500/10', icon: Info, color: 'text-info-300', label: 'Catatan' }
} as const;

export default function ModuleDetailModal({
  item,
  checked,
  quizResults,
  onToggle,
  onAnswer,
  onRetry,
  onClose
}: ModuleDetailModalProps) {
  const [tab, setTab] = useState<TabId>('analogi');
  const [exampleIndex, setExampleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const isPresent = useIsPresent();
  const onCloseRef = useRef(onClose);
  const pressedOnBackdrop = useRef(false);

  const examples = useMemo(() => getExamples(item), [item]);
  const quizzes = useMemo(() => getQuizzes(item), [item]);
  const example = examples[Math.min(exampleIndex, examples.length - 1)];

  const tabs = ALL_TABS.filter((entry) => {
    if (entry.id === 'cara') return Boolean(item.howItWorks?.length);
    if (entry.id === 'waspada') return Boolean(item.vibeWarnings?.length);
    return true;
  });

  const quizScore = quizzes.filter((_, index) => quizResults[quizKey(item.id, index)]?.correct).length;
  const quizAnswered = quizzes.filter((_, index) => quizResults[quizKey(item.id, index)]).length;

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(example.code);
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
          {tabs.map((entry) => {
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
                {active && <span className={`absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-gradient-to-r ${item.accentColor}`} />}
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}>
            {tab === 'analogi' && (
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <h3 className="flex items-center gap-2 text-base font-bold text-white">
                    <Lightbulb className="h-5 w-5 text-warn-300" />
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
                              ? 'bg-success-500/20 text-success-300'
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

            {tab === 'cara' && item.howItWorks && (
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white">{item.howItWorksTitle ?? 'Cara Kerjanya'}</h3>
                <ol className="space-y-3">
                  {item.howItWorks.map((step, index) => (
                    <li key={step.title} className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.accentColor} text-xs font-extrabold text-slate-950`}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{step.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-slate-400">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {tab === 'kode' && (
              <div className="space-y-4">
                {examples.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {examples.map((entry, index) => (
                      <button
                        key={entry.title}
                        type="button"
                        onClick={() => setExampleIndex(index)}
                        className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                          index === exampleIndex
                            ? `border-transparent bg-gradient-to-r ${item.accentColor} text-slate-950`
                            : 'border-slate-700 text-slate-300 hover:border-slate-500'
                        }`}
                      >
                        Contoh {index + 1}
                      </button>
                    ))}
                  </div>
                )}
                <h3 className="text-base font-bold text-white">{example.title}</h3>
                <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                  <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{example.language}</span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-slate-300 transition hover:bg-slate-800"
                    >
                      {copied ? <Check className="h-3.5 w-3.5 text-success-400" /> : <Copy className="h-3.5 w-3.5" />}
                      {copied ? 'Tersalin' : 'Copy Code'}
                    </button>
                  </div>
                  <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-slate-200 sm:text-sm">
                    <code>{example.code}</code>
                  </pre>
                </div>
                {example.output && (
                  <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                    <div className="flex items-center gap-1.5 border-b border-slate-800 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <Terminal className="h-3.5 w-3.5" />
                      Contoh Output
                    </div>
                    <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-success-300 sm:text-sm">
                      <code>{example.output}</code>
                    </pre>
                  </div>
                )}
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                  <h4 className="text-sm font-bold text-white">Penjelasan</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{example.takeaway}</p>
                </div>
              </div>
            )}

            {tab === 'waspada' && item.vibeWarnings && (
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-slate-400">
                  Jebakan yang sering terjadi saat kode ditulis AI lalu langsung dipakai tanpa dipahami.
                </p>
                {item.vibeWarnings.map((warning) => {
                  const style = SEVERITY_STYLE[warning.severity];
                  const Icon = style.icon;
                  return (
                    <div key={warning.title} className={`rounded-2xl border p-4 ${style.box}`}>
                      <div className="flex items-start gap-2.5">
                        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${style.color}`} />
                        <div>
                          <span className={`text-[10px] font-bold uppercase tracking-wide ${style.color}`}>{style.label}</span>
                          <h4 className="text-sm font-bold text-white">{warning.title}</h4>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        <span className="font-semibold text-white">Masalah: </span>
                        {warning.problem}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        <span className="font-semibold text-success-300">Solusi: </span>
                        {warning.fix}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {tab === 'kuis' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm">
                  <span className="text-slate-400">
                    Terjawab {quizAnswered}/{quizzes.length}
                  </span>
                  <span className="font-bold text-white">
                    Skor {quizScore}/{quizzes.length}
                  </span>
                </div>
                {quizzes.map((quiz, questionIndex) => {
                  const result = quizResults[quizKey(item.id, questionIndex)];
                  const answered = Boolean(result);
                  return (
                    <div key={quiz.question} className="space-y-3">
                      <h3 className="text-base font-bold leading-snug text-white">
                        <span className="mr-2 text-slate-500">{questionIndex + 1}.</span>
                        {quiz.question}
                      </h3>
                      <div className="space-y-2.5">
                        {quiz.options.map((option, optionIndex) => {
                          const isCorrect = optionIndex === quiz.correctIndex;
                          const isSelected = result?.selected === optionIndex;
                          let style = 'border-slate-700 bg-slate-950/60 text-slate-200 hover:border-slate-500';
                          if (answered && isCorrect) style = 'border-success-500/60 bg-success-500/10 text-success-200';
                          else if (answered && isSelected) style = 'border-danger-500/60 bg-danger-500/10 text-danger-200';
                          else if (answered) style = 'border-slate-800 bg-slate-950/40 text-slate-500';
                          return (
                            <button
                              key={option}
                              type="button"
                              disabled={answered}
                              onClick={() => onAnswer(questionIndex, optionIndex)}
                              className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-sm transition ${style}`}
                            >
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[10px] font-bold">
                                {String.fromCharCode(65 + optionIndex)}
                              </span>
                              <span className="flex-1">{option}</span>
                              {answered && isCorrect && <CheckCircle2 className="h-5 w-5 shrink-0 text-success-400" />}
                              {answered && isSelected && !isCorrect && <XCircle className="h-5 w-5 shrink-0 text-danger-400" />}
                            </button>
                          );
                        })}
                      </div>
                      {result && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`rounded-2xl border p-4 ${
                            result.correct ? 'border-success-500/40 bg-success-500/10' : 'border-danger-500/40 bg-danger-500/10'
                          }`}
                        >
                          <p className="text-sm font-bold text-white">{result.correct ? 'Benar!' : 'Belum tepat.'}</p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-300">{quiz.explanation}</p>
                          <button
                            type="button"
                            onClick={() => onRetry(questionIndex)}
                            className="mt-3 flex items-center gap-1.5 rounded-full border border-slate-600 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-slate-400"
                          >
                            <RotateCcw className="h-3.5 w-3.5" />
                            Coba Lagi
                          </button>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
