const LOCK_ATTR = 'data-scroll-locked';
let lockCount = 0;

export function lockBodyScroll(): () => void {
  if (typeof document === 'undefined') return () => undefined;

  const html = document.documentElement;
  if (lockCount === 0) {
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    html.style.setProperty('--scrollbar-gap', `${Math.max(0, scrollbarWidth)}px`);
    html.setAttribute(LOCK_ATTR, '');
  }
  lockCount += 1;

  let released = false;
  return () => {
    if (released) return;
    released = true;
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) unlockBodyScroll();
  };
}

export function unlockBodyScroll() {
  if (typeof document === 'undefined') return;
  const html = document.documentElement;
  html.removeAttribute(LOCK_ATTR);
  html.style.removeProperty('--scrollbar-gap');
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('padding-right');
}
