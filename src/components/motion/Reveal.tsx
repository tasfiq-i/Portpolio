import { m, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { DURATION, EASE_OUT, VIEWPORT } from '../../lib/motion';

type RevealTag = 'div' | 'section' | 'header' | 'ul' | 'ol' | 'li' | 'p';

const MOTION_TAGS = {
  div: m.div,
  section: m.section,
  header: m.header,
  ul: m.ul,
  ol: m.ol,
  li: m.li,
  p: m.p,
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: RevealTag;
}

/** Fades and lifts its children into place once they scroll into view. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 22,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const Component = MOTION_TAGS[as] as typeof m.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.base, ease: EASE_OUT, delay }}
    >
      {children}
    </Component>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: RevealTag;
}

/** Container that reveals its `StaggerItem` children one after another. */
export function Stagger({
  children,
  className = '',
  stagger = 0.08,
  delay = 0,
  as = 'div',
}: StaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const Component = MOTION_TAGS[as] as typeof m.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </Component>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: RevealTag;
}

export function StaggerItem({
  children,
  className = '',
  as = 'div',
}: StaggerItemProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const Component = MOTION_TAGS[as] as typeof m.div;
  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE_OUT },
        },
      }}
    >
      {children}
    </Component>
  );
}
