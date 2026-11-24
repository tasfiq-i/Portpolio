import {
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';
import { useRef, type PointerEvent } from 'react';
import { KineticText } from '../../../components/motion/KineticText';

interface HeroName3DProps {
  firstName: string;
  lastName: string;
  roleTitle: string;
}

const SPRING_CONFIG = { stiffness: 140, damping: 24, mass: 0.65 };

export function HeroName3D({
  firstName,
  lastName,
  roleTitle,
}: HeroName3DProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, SPRING_CONFIG);
  const smoothY = useSpring(pointerY, SPRING_CONFIG);

  // Subtle architectural 3D perspective tilt
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3.5, -3.5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4.5, 4.5]);
  const surnameX = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType === 'touch') return;
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(Math.max(-0.5, Math.min(0.5, nx)));
    pointerY.set(Math.max(-0.5, Math.min(0.5, ny)));
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const lastStartDelay = 0.08 + firstName.length * 0.038 + 0.06;
  const periodDelay = lastStartDelay + lastName.length * 0.045;

  return (
    <div
      ref={wrapRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="mt-3 [perspective:950px]"
    >
      <m.h1
        aria-label={`${firstName} ${lastName} — ${roleTitle}`}
        style={
          reduce
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }
        }
        className="kinetic inline-block will-change-transform"
      >
        {/* First Name: Heavy Geometric Sans-Serif (Outfit 900) */}
        <span
          className="hero-name-first hero-name-3d block font-hero-sans text-[clamp(3.15rem,8.6vw,6.35rem)] leading-[0.92] font-black tracking-[-0.045em] text-[var(--ink)]"
          style={reduce ? undefined : { transform: 'translateZ(8px)' }}
        >
          <KineticText text={firstName} baseDelay={0.06} step={0.038} />
        </span>

        {/* Last Name: Editorial Italic Serif (Instrument Serif) + Subtle Cyan Accent */}
        <m.span
          style={reduce ? undefined : { x: surnameX, z: 18 }}
          className="mt-0.5 block pl-[0.04em] text-[clamp(3.35rem,9vw,6.75rem)] leading-[0.92]"
        >
          <span className="serif-accent hero-name-surname hero-name-3d-serif inline-block pr-[0.04em]">
            <KineticText
              text={lastName}
              baseDelay={lastStartDelay}
              step={0.045}
            />
          </span>
          <span
            aria-hidden="true"
            className="char serif-accent text-cyan-600 dark:text-cyan-400"
            style={{ animationDelay: `${periodDelay}s` }}
          >
            .
          </span>
        </m.span>
      </m.h1>
    </div>
  );
}
