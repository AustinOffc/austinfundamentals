'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { CURRICULUM_DATA, getQuizzes, type ModuleItem, type TrackId } from '@/data/curriculum';

export interface QuizResult {
  selected: number;
  correct: boolean;
}

interface StoredState {
  checked: Record<string, boolean>;
  /** Kunci: "<idModul>:<indeksSoal>" */
  quiz: Record<string, QuizResult>;
}

const STORAGE_KEY = 'ai-engineer-fundamentals-v1';
const EMPTY_STATE: StoredState = { checked: {}, quiz: {} };

export const quizKey = (moduleId: number, index: number) => `${moduleId}:${index}`;

const countTopics = (items: ModuleItem[]) => items.reduce((sum, item) => sum + item.subTopics.length, 0);
const countQuestions = (items: ModuleItem[]) => items.reduce((sum, item) => sum + getQuizzes(item).length, 0);

/** Data lama memakai kunci angka (satu soal per modul). Pindahkan ke format "<id>:0". */
function migrateQuiz(raw: unknown): Record<string, QuizResult> {
  const result: Record<string, QuizResult> = {};
  if (!raw || typeof raw !== 'object') return result;
  for (const [key, value] of Object.entries(raw as Record<string, QuizResult>)) {
    if (!value || typeof value.selected !== 'number') continue;
    result[key.includes(':') ? key : `${key}:0`] = { selected: value.selected, correct: Boolean(value.correct) };
  }
  return result;
}

export function useProgress() {
  const [state, setState] = useState<StoredState>(EMPTY_STATE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<StoredState>;
        setState({ checked: parsed.checked ?? {}, quiz: migrateQuiz(parsed.quiz) });
      }
    } catch {
      setState(EMPTY_STATE);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      return;
    }
  }, [state, hydrated]);

  const toggleTopic = useCallback((topicId: string) => {
    setState((prev) => ({
      ...prev,
      checked: { ...prev.checked, [topicId]: !prev.checked[topicId] }
    }));
  }, []);

  const answerQuiz = useCallback((moduleId: number, index: number, selected: number, correctIndex: number) => {
    setState((prev) => ({
      ...prev,
      quiz: { ...prev.quiz, [quizKey(moduleId, index)]: { selected, correct: selected === correctIndex } }
    }));
  }, []);

  const retryQuiz = useCallback((moduleId: number, index: number) => {
    setState((prev) => {
      const nextQuiz = { ...prev.quiz };
      delete nextQuiz[quizKey(moduleId, index)];
      return { ...prev, quiz: nextQuiz };
    });
  }, []);

  const resetProgress = useCallback(() => {
    setState(EMPTY_STATE);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      return;
    }
  }, []);

  const moduleProgress = useCallback(
    (item: ModuleItem) => {
      const done = item.subTopics.filter((topic) => state.checked[topic.id]).length;
      return Math.round((done / item.subTopics.length) * 100);
    },
    [state.checked]
  );

  /** Semua soal pada modul dijawab benar. */
  const moduleQuizPassed = useCallback(
    (item: ModuleItem) => getQuizzes(item).every((_, index) => state.quiz[quizKey(item.id, index)]?.correct),
    [state.quiz]
  );

  const percentFor = useCallback(
    (items: ModuleItem[]) => {
      const total = countTopics(items) + countQuestions(items);
      if (total === 0) return 0;
      const topicsDone = items.reduce(
        (sum, item) => sum + item.subTopics.filter((topic) => state.checked[topic.id]).length,
        0
      );
      const quizzesDone = items.reduce(
        (sum, item) => sum + getQuizzes(item).filter((_, index) => state.quiz[quizKey(item.id, index)]?.correct).length,
        0
      );
      return Math.round(((topicsDone + quizzesDone) / total) * 100);
    },
    [state]
  );

  const globalPercent = useMemo(() => percentFor(CURRICULUM_DATA), [percentFor]);

  const trackPercent = useCallback(
    (trackId: TrackId) => percentFor(CURRICULUM_DATA.filter((item) => item.track === trackId)),
    [percentFor]
  );

  return {
    checked: state.checked,
    quiz: state.quiz,
    globalPercent,
    trackPercent,
    toggleTopic,
    answerQuiz,
    retryQuiz,
    resetProgress,
    moduleProgress,
    moduleQuizPassed
  };
}
