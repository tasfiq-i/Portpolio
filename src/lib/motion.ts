/** Shared motion tokens so every animation feels like one system. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATION = {
  fast: 0.3,
  base: 0.7,
  page: 0.45,
} as const;

/** Trigger slightly before an element is fully in view. */
export const VIEWPORT = { once: true, margin: '-10% 0px -10% 0px' } as const;
