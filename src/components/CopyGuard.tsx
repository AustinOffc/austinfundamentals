'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const LONG_PRESS_MS = 450;
const MOVE_TOLERANCE = 10;

const isEditable = (target: EventTarget | null) => {
  const el = target as HTMLElement | null;
  if (!el || !el.closest) return false;
  return Boolean(el.closest('input, textarea, [contenteditable="true"]'));
};

export default function CopyGuard() {
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<number | null>(null);

  useEffect(() => {
    const notify = () => {
      setVisible(true);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setVisible(false), 1800);
    };

    const block = (event: Event) => {
      if (isEditable(event.target)) return;
      event.preventDefault();
      notify();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (isEditable(event.target)) return;
      if (!(event.ctrlKey || event.metaKey)) return;
      const key = event.key.toLowerCase();
      if (key === 'c' || key === 'x' || key === 'a' || key === 'u' || key === 's') {
        event.preventDefault();
        notify();
      }
    };

    // Tekan lama di layar sentuh
    let pressTimer: number | null = null;
    let startX = 0;
    let startY = 0;
    const clearPress = () => {
      if (pressTimer) window.clearTimeout(pressTimer);
      pressTimer = null;
    };
    const onTouchStart = (event: TouchEvent) => {
      if (isEditable(event.target) || event.touches.length !== 1) return;
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
      clearPress();
      pressTimer = window.setTimeout(notify, LONG_PRESS_MS);
    };
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      if (Math.abs(touch.clientX - startX) > MOVE_TOLERANCE || Math.abs(touch.clientY - startY) > MOVE_TOLERANCE) {
        clearPress();
      }
    };

    document.addEventListener('contextmenu', block);
    document.addEventListener('copy', block);
    document.addEventListener('cut', block);
    document.addEventListener('dragstart', block);
    document.addEventListener('selectstart', block);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('touchend', clearPress);
    document.addEventListener('touchcancel', clearPress);

    return () => {
      document.removeEventListener('contextmenu', block);
      document.removeEventListener('copy', block);
      document.removeEventListener('cut', block);
      document.removeEventListener('dragstart', block);
      document.removeEventListener('selectstart', block);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', clearPress);
      document.removeEventListener('touchcancel', clearPress);
      clearPress();
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex justify-center px-4">
      <AnimatePresence>
        {visible && (
          <motion.div
            role="alert"
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.18 } }}
            transition={{ type: 'spring', damping: 24, stiffness: 320 }}
            className="flex items-center gap-3 rounded-2xl bg-[#e11d48] px-6 py-4 text-lg font-semibold text-white shadow-xl shadow-black/50"
          >
            <AlertCircle className="h-6 w-6 shrink-0" />
            <span>© Austin Official</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
