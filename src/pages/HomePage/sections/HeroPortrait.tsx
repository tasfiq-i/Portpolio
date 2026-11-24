import {
  m,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';
import { useRef, type PointerEvent } from 'react';
import { PROFILE } from '../../../data/profile';
import { EASE_OUT } from '../../../lib/motion';

const SPRING_CONFIG = { stiffness: 150, damping: 24, mass: 0.7 };
const HERO_PORTRAIT_SRC = '/images/profile-hero-original.png';

export function HeroPortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Normalized pointer coordinates in [-0.5, 0.5]
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const lightIntensity = useMotionValue(0);

  // Smooth spring physics for 2.5D tilt & depth parallax
  const smoothX = useSpring(pointerX, SPRING_CONFIG);
  const smoothY = useSpring(pointerY, SPRING_CONFIG);
  const smoothLight = useSpring(lightIntensity, { stiffness: 120, damping: 22 });

  // Subtle realistic 3D tilt (rotateX: -4..4deg, rotateY: -5..5deg)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  // Multi-plane depth separation
  const bgLayerX = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const bgLayerY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);

  const portraitX = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const portraitY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);

  const fgLayerX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const fgLayerY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  // Pointer-tracked cyan radial lighting coordinates (%)
  const spotX = useTransform(smoothX, [-0.5, 0.5], [22, 78]);
  const spotY = useTransform(smoothY, [-0.5, 0.5], [18, 76]);

  const cyanSpotlight = useMotionTemplate`radial-gradient(340px circle at ${spotX}% ${spotY}%, rgb(34 211 238 / 0.24), rgb(59 130 246 / 0.08) 48%, transparent 72%)`;
  const rimHighlight = useMotionTemplate`radial-gradient(280px circle at ${spotX}% ${spotY}%, rgb(103 232 249 / 0.2), transparent 62%)`;

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType === 'touch') return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(Math.max(-0.5, Math.min(0.5, nx)));
    pointerY.set(Math.max(-0.5, Math.min(0.5, ny)));
    lightIntensity.set(1);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
    lightIntensity.set(0);
  };

  return (
    <m.div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={reduce ? false : { opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay: 0.18, ease: EASE_OUT }}
      className="relative mx-auto w-full max-w-[330px] select-none sm:max-w-[400px] lg:max-w-[450px] [perspective:1200px]"
    >
      {/* Interactive 2.5D Stage */}
      <m.div
        style={
          reduce
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }
        }
        className="relative aspect-[4/4.6] w-full will-change-transform"
      >
        {/* Depth Layer 1: Atmospheric Cyan + Deep Blue Glow & Subtle Grid */}
        <m.div
          aria-hidden="true"
          style={
            reduce
              ? undefined
              : {
                  x: bgLayerX,
                  y: bgLayerY,
                  z: -42,
                }
          }
          className="pointer-events-none absolute inset-0"
        >
          {/* Ambient soft cyan + blue aura (dark & light theme tuned) */}
          <div
            className="absolute inset-x-4 top-6 bottom-8 rounded-full opacity-70 blur-3xl dark:opacity-95"
            style={{
              background:
                'radial-gradient(circle at 52% 42%, rgb(34 211 238 / 0.22), rgb(36 87 230 / 0.16) 46%, transparent 74%)',
            }}
          />

          {/* Quiet radial-masked architectural grid behind portrait */}
          <div className="grid-bg absolute inset-2 opacity-40 [mask-image:radial-gradient(ellipse_62%_58%_at_50%_46%,#000_20%,transparent_76%)] dark:opacity-55" />

          {/* Subtle geometric halo ring for depth reference */}
          <div className="absolute top-[11%] left-1/2 aspect-square w-[78%] -translate-x-1/2 rounded-full border border-cyan-500/15 bg-gradient-to-b from-cyan-400/[0.05] via-transparent to-transparent dark:border-cyan-400/15 dark:from-cyan-400/[0.07]" />
          <div className="absolute top-[17%] left-1/2 aspect-square w-[64%] -translate-x-1/2 rounded-full border border-dashed border-[var(--line-strong)]/45" />

          {/* Pointer-reactive cyan atmospheric spotlight */}
          {!reduce && (
            <m.div
              style={{ background: cyanSpotlight, opacity: smoothLight }}
              className="absolute -inset-4 rounded-full blur-2xl"
            />
          )}
        </m.div>

        {/* Depth Layer 2: Floating Transparent Personal Portrait */}
        <m.div
          style={
            reduce
              ? undefined
              : {
                  x: portraitX,
                  y: portraitY,
                  z: 18,
                }
          }
          className="relative z-10 flex h-full w-full items-end justify-center will-change-transform"
        >
          <div className="hero-portrait-float relative flex h-full w-full items-end justify-center">
            <img
              src={HERO_PORTRAIT_SRC}
              alt={`${PROFILE.name} — ${PROFILE.title}`}
              width={960}
              height={1280}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              draggable={false}
              className="hero-portrait-mask h-full w-full object-contain object-bottom drop-shadow-[0_16px_32px_rgba(12,19,34,0.16)] dark:drop-shadow-[0_0_22px_rgba(34,211,238,0.15)] dark:drop-shadow-[0_22px_44px_rgba(0,0,0,0.68)]"
            />
          </div>
        </m.div>

        {/* Depth Layer 3: Subtle Foreground Interactive Cyan Rim Highlight */}
        {!reduce && (
          <m.div
            aria-hidden="true"
            style={{
              x: fgLayerX,
              y: fgLayerY,
              z: 32,
              background: rimHighlight,
              opacity: smoothLight,
            }}
            className="pointer-events-none absolute inset-0 z-20 rounded-full mix-blend-screen"
          />
        )}

        {/* Depth Layer 4: Minimal Floating Identity Indicator (keeps portrait dominant) */}
        <m.div
          style={
            reduce
              ? undefined
              : {
                  x: fgLayerX,
                  y: fgLayerY,
                  z: 40,
                }
          }
          className="pointer-events-none absolute right-2 bottom-4 left-2 z-30 flex justify-center sm:bottom-5"
        >
          <div className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 shadow-[var(--shadow-sm)]">
            <span className="pulse-dot" aria-hidden="true" />
            <span className="font-mono text-[11px] tracking-[0.06em] text-[var(--ink)]">
              {PROFILE.name}
            </span>
            <span className="text-[var(--line-strong)]" aria-hidden="true">
              /
            </span>
            <span className="font-mono text-[10.5px] text-cyan-700 dark:text-cyan-300">
              React &bull; C# / .NET
            </span>
          </div>
        </m.div>
      </m.div>
    </m.div>
  );
}
