interface KineticTextProps {
  text: string;
  /** Seconds before the first character starts. */
  baseDelay?: number;
  /** Seconds between characters. */
  step?: number;
  className?: string;
}

/**
 * Splits text into characters that rise and sharpen into place (CSS-only).
 * Render inside an element with the `kinetic` class and an `aria-label`.
 */
export function KineticText({
  text,
  baseDelay = 0.08,
  step = 0.04,
  className = '',
}: KineticTextProps) {
  return (
    <span aria-hidden="true" className={className}>
      {Array.from(text).map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="char"
          style={{ animationDelay: `${baseDelay + step * index}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
