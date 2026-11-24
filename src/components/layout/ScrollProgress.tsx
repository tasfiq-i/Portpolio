import { m, useReducedMotion, useScroll, useSpring } from 'motion/react';

/** Thin accent bar at the top of the viewport that tracks page scroll. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <m.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-[var(--accent)]"
      style={{ scaleX }}
    />
  );
}
