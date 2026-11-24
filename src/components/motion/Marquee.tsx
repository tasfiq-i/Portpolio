import type { CSSProperties } from 'react';

interface MarqueeProps {
  items: string[];
  /** Seconds for one full loop. */
  speed?: number;
  reverse?: boolean;
  className?: string;
}

/** Decorative infinite ticker. Hidden from assistive tech; pauses on hover. */
export function Marquee({
  items,
  speed = 38,
  reverse = false,
  className = '',
}: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className={`marquee-track relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] ${className}`}
    >
      <div
        className="animate-marquee flex w-max items-center"
        style={
          {
            '--marquee-duration': `${speed}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          } as CSSProperties
        }
      >
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
          >
            <span className="font-display text-[clamp(1.5rem,4vw,2.75rem)] font-bold tracking-[-0.03em] whitespace-nowrap text-[var(--ink)]/85 transition-colors hover:text-[var(--accent)]">
              {item}
            </span>
            <span className="text-[clamp(0.9rem,1.8vw,1.3rem)] text-[var(--accent)]">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
