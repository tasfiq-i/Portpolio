import { ArrowUpRight, Menu } from 'lucide-react';
import { m } from 'motion/react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { PROFILE } from '../../data/profile';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Container } from '../common/Container';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const hidden = useScrollDirection();
  const brandName = PROFILE.isPlaceholder ? 'Portfolio' : PROFILE.name;

  return (
    <>
      <header
        className={`sticky top-0 z-40 pt-3 transition-transform duration-300 ease-[var(--ease-out-expo)] sm:pt-4 ${
          hidden && !mobileOpen ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <Container>
          <div className="glass flex h-14 items-center justify-between rounded-full px-3 shadow-[var(--shadow-sm)] sm:px-5">
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-[var(--ink)]"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--ink)] font-display text-xs font-extrabold text-[var(--bg)] transition-colors duration-200 group-hover:bg-[var(--accent)] group-hover:text-white"
              >
                {brandName[0]}
              </span>
              <span>
                {brandName}
                <span className="serif-accent text-[var(--accent)]">.</span>
              </span>
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex">
              {NAVIGATION_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-[var(--ink)]'
                        : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <m.span
                          layoutId="nav-pill"
                          aria-hidden="true"
                          className="absolute inset-0 -z-10 rounded-full border border-[var(--line-strong)] bg-[var(--surface-2)]"
                          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                        />
                      )}
                      {item.label}
                      {isActive && (
                        <m.span
                          layoutId="nav-dot"
                          aria-hidden="true"
                          className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)]"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />

              <Link
                to="/contact"
                className="nudge hidden h-9 shrink-0 items-center gap-1.5 rounded-full bg-[var(--ink)] px-4 font-display text-xs font-semibold whitespace-nowrap text-[var(--bg)] transition-[transform,background-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-white hover:shadow-[0_8px_28px_var(--accent-glow)] lg:inline-flex"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--surface-2)] text-[var(--ink-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)] md:hidden"
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
