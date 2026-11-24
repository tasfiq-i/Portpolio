import type { PointerEvent } from 'react';

/** Writes pointer coordinates to CSS vars used by `.spotlight-layer`. Mouse only. */
export function handleSpotlightMove(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== 'mouse') return;
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  target.style.setProperty('--my', `${event.clientY - rect.top}px`);
}
