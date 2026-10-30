'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { CURRICULUM_DATA, type ModuleItem } from '@/data/curriculum';

export interface QuizResult {
  selected: number;
  correct: boolean;
}

interface StoredState {
  checked: Record<string, boolean>;
  quiz: Record<number, QuizResult>;
}

const STORAGE_KEY = 'ai-engineer-fundamentals-v1';
const EMPTY_STATE: StoredState = { checked: {}, quiz: {} };
const TOTAL_TOPICS = CURRICULUM_DATA.reduce((sum, item) => sum + item.subTopics.length, 0);
const TOTAL_UNITS = TOTAL_TOPICS + CURRICULUM_DATA.length;

export function useProgress() {
  const [state, setState] = useState<StoredState>(EMPTY_STATE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<StoredState>;
        setState({ checked: parsed.checked ?? {}, quiz: parsed.quiz ?? {} });
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

  const answerQuiz = useCallback((moduleId: number, selected: number, correctIndex: number) => {
    setState((prev) => ({
      ...prev,
      quiz: { ...prev.quiz, [moduleId]: { selected, correct: selected === correctIndex } }
    }));
  }, []);

  const retryQuiz = useCallback((moduleId: number) => {
    setState((prev) => {
      const nextQuiz = { ...prev.quiz };
      delete nextQuiz[moduleId];
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

  const globalPercent = useMemo(() => {
    const topicsDone = CURRICULUM_DATA.reduce(
      (sum, item) => sum + item.subTopics.filter((topic) => state.checked[topic.id]).length,
      0
    );
    const quizzesDone = CURRICULUM_DATA.filter((item) => state.quiz[item.id]?.correct).length;
    return Math.round(((topicsDone + quizzesDone) / TOTAL_UNITS) * 100);
  }, [state]);

  return {
    checked: state.checked,
    quiz: state.quiz,
    globalPercent,
    toggleTopic,
    answerQuiz,
    retryQuiz,
    resetProgress,
    moduleProgress
  };
}
