import { ArrowUp } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';
import { useEffect, useState } from 'react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          type="button"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0 })}
          aria-label="Back to top"
          title="Back to top"
          className="glass fixed right-6 bottom-6 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--ink)] shadow-[var(--shadow-sm)] transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </m.button>
      )}
    </AnimatePresence>
  );
}
