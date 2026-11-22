import { useState, type MouseEvent } from 'react';
import { Braces, Code2, Database, Server, Terminal } from 'lucide-react';

export function HeroScene() {
  const [tilt, setTilt] = useState({ x: 4, y: -6 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const normX = (event.clientX - rect.left) / rect.width - 0.5;
    const normY = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: Number((4 - normY * 10).toFixed(2)),
      y: Number((-6 + normX * 14).toFixed(2)),
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 4, y: -6 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-lg py-6 sm:px-4 [perspective:1200px]"
      aria-hidden="true"
    >
      {/* Subtle Ambient Backdrop Glow */}
      <div className="pointer-events-none absolute inset-6 rounded-3xl bg-[var(--accent-primary)]/10 blur-2xl" />

      {/* 3D Scene Container */}
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        className="relative transition-transform duration-300 ease-out [transform-style:preserve-3d]"
      >
        {/* Floating Panel 1: React + TypeScript (Top Left) */}
        <div className="hero-float relative z-20 mb-3 inline-flex items-center gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 px-3.5 py-2 shadow-lg backdrop-blur-sm sm:absolute sm:-top-5 sm:-left-3 sm:mb-0 [transform:translateZ(36px)]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]">
            <Code2 className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-[var(--text-primary)]">
              React &bull; TypeScript
            </p>
            <p className="font-mono text-[10px] text-[var(--text-secondary)]">
              &lt;AppRouter /&gt;
            </p>
          </div>
        </div>

        {/* Floating Panel 2: C# + ASP.NET Core API (Top Right) */}
        <div className="hero-float-delayed relative z-20 mb-3 ml-auto flex w-fit items-center gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 px-3.5 py-2 shadow-lg backdrop-blur-sm sm:absolute sm:-top-4 sm:-right-2 sm:mb-0 [transform:translateZ(44px)]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-500 dark:text-emerald-400">
            <Server className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-[var(--text-primary)]">
              C# &bull; ASP.NET Core
            </p>
            <p className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
              GET /api/projects 200
            </p>
          </div>
        </div>

        {/* Main 3D Laptop Mockup */}
        <div className="relative z-10 [transform:translateZ(12px)]">
          {/* Laptop Lid / Screen */}
          <div className="rounded-t-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3 shadow-2xl sm:p-4">
            {/* Editor Window Chrome */}
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/75" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/75" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/75" />
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--text-secondary)]">
                <span className="rounded bg-[var(--bg-elevated)] px-2 py-0.5 text-[var(--text-primary)]">
                  App.tsx
                </span>
                <span>ApiController.cs</span>
              </div>
            </div>

            {/* Coding Interface */}
            <div className="mt-3 grid grid-cols-12 gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-3.5 font-mono text-[11px] leading-relaxed">
              <div className="col-span-1 hidden select-none flex-col text-right text-[var(--text-secondary)]/50 sm:flex">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
              </div>
              <div className="col-span-12 space-y-1 sm:col-span-11">
                <p className="text-[var(--text-secondary)]">
                  <span className="text-[var(--accent-primary)]">export</span>{' '}
                  <span className="text-[var(--accent-primary)]">const</span>{' '}
                  <span className="text-[var(--text-primary)]">engineer</span> ={' '}
                  {'{'}
                </p>
                <p className="pl-3 text-[var(--text-primary)]">
                  ui:{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    &apos;React + TypeScript&apos;
                  </span>
                  ,
                </p>
                <p className="pl-3 text-[var(--text-primary)]">
                  api:{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    &apos;C# / ASP.NET Core&apos;
                  </span>
                  ,
                </p>
                <p className="pl-3 text-[var(--text-primary)]">
                  db:{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    &apos;SQL Server + EF Core&apos;
                  </span>
                  ,
                </p>
                <p className="pl-3 text-[var(--text-primary)]">
                  status:{' '}
                  <span className="text-amber-600 dark:text-amber-400">
                    &apos;Building&apos;
                  </span>
                </p>
                <p className="text-[var(--text-secondary)]">{'};'}</p>
              </div>
            </div>

            {/* Integrated Terminal Strip */}
            <div className="mt-2.5 flex items-center justify-between rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/70 px-3 py-1.5 font-mono text-[10px] text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5">
                <Terminal className="h-3 w-3 text-[var(--accent-primary)]" />
                <span>vite build &bull; dotnet test</span>
              </span>
              <span className="text-emerald-600 dark:text-emerald-400">
                ready
              </span>
            </div>
          </div>

          {/* Laptop Base / Hinge */}
          <div className="mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-xl border-x border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] shadow-md">
            <div className="mx-auto h-1 w-16 rounded-b-full bg-[var(--border-subtle)]" />
          </div>
        </div>

        {/* Floating Panel 3: SQL Server Database Element (Bottom Left) */}
        <div className="hero-float-slow relative z-20 mt-3 flex w-fit items-center gap-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 px-3.5 py-2 shadow-lg backdrop-blur-sm sm:absolute sm:-bottom-5 sm:-left-2 sm:mt-0 [transform:translateZ(34px)]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]">
            <Database className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-[var(--text-primary)]">
              SQL Server &bull; EF Core
            </p>
            <p className="font-mono text-[10px] text-[var(--text-secondary)]">
              Relational Schema
            </p>
          </div>
        </div>

        {/* Floating Panel 4: Tech Symbols Pill (Bottom Right) */}
        <div className="hero-float relative z-20 mt-2 ml-auto flex w-fit items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 px-3 py-1.5 shadow-lg backdrop-blur-sm sm:absolute sm:-bottom-4 sm:right-2 sm:mt-0 [transform:translateZ(28px)]">
          <Braces className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
          <span className="font-mono text-[10px] font-semibold text-[var(--text-primary)]">
            TS
          </span>
          <span className="text-[var(--border-subtle)]">|</span>
          <span className="font-mono text-[10px] font-semibold text-[var(--text-primary)]">
            C#
          </span>
          <span className="text-[var(--border-subtle)]">|</span>
          <span className="font-mono text-[10px] font-semibold text-[var(--text-primary)]">
            .NET
          </span>
        </div>
      </div>
    </div>
  );
}
