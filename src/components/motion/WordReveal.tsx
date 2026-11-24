import { m, useReducedMotion } from 'motion/react';
import { DURATION, EASE_OUT, VIEWPORT } from '../../lib/motion';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'p';

const MOTION_TAGS = { h1: m.h1, h2: m.h2, h3: m.h3, p: m.p };

interface WordRevealProps {
  text: string;
  /** Optional closing word(s) rendered in the serif-italic accent style. */
  accent?: string;
  as?: HeadingTag;
  className?: string;
  id?: string;
  delay?: number;
}

const WORD_MASK = {
  paddingBottom: '0.14em',
  marginBottom: '-0.14em',
};

/** Headline that rises word-by-word from behind a mask when scrolled into view. */
export function WordReveal({
  text,
  accent,
  as = 'h2',
  className = '',
  id,
  delay = 0,
}: WordRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return (
      <Tag id={id} className={className}>
        {text}
        {accent && (
          <>
            {' '}
            <span className="serif-accent text-[var(--accent)]">{accent}</span>
          </>
        )}
      </Tag>
    );
  }

  const words = text.split(/\s+/).filter(Boolean);
  const accentWords = accent ? accent.split(/\s+/).filter(Boolean) : [];
  const Component = MOTION_TAGS[as] as typeof m.h2;

  const renderWord = (word: string, key: string, isAccent: boolean) => (
    <span
      key={key}
      className="inline-flex overflow-hidden align-bottom"
      style={WORD_MASK}
    >
      <m.span
        className={`inline-block ${isAccent ? 'serif-accent pr-[0.06em] text-[var(--accent)]' : ''}`}
        variants={{
          hidden: { y: '115%' },
          show: { y: 0, transition: { duration: DURATION.base, ease: EASE_OUT } },
        }}
      >
        {word}
      </m.span>
    </span>
  );

  const all = [
    ...words.map((word, i) => ({ word, accent: false, key: `w-${i}` })),
    ...accentWords.map((word, i) => ({ word, accent: true, key: `a-${i}` })),
  ];

  return (
    <Component
      id={id}
      className={className}
      aria-label={accent ? `${text} ${accent}` : text}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.045, delayChildren: delay } },
      }}
    >
      <span aria-hidden="true">
        {all.map((item, index) => (
          <span key={item.key}>
            {renderWord(item.word, item.key, item.accent)}
            {index < all.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
    </Component>
  );
}
