import { ArrowUpRight, X } from 'lucide-react';
import { AnimatePresence, m } from 'motion/react';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { PROFILE } from '../../data/profile';
import { EASE_OUT } from '../../lib/motion';
import { formatIndex } from '../../lib/projectMeta';
import { SocialLinks } from '../shared/SocialLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 md:hidden"
        >
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <m.nav
            ref={panelRef}
            aria-label="Mobile"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="fixed top-0 right-0 bottom-0 flex w-full max-w-sm flex-col justify-between border-l border-[var(--line-strong)] bg-[var(--surface)] p-6 shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-5">
                <span className="eyebrow">Navigation</span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--surface-2)] text-[var(--ink-muted)] hover:border-[var(--accent)] hover:text-[var(--ink)]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <ul className="mt-8 space-y-1">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <m.li
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.06 + index * 0.04,
                      ease: EASE_OUT,
                    }}
                  >
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `group flex items-baseline justify-between rounded-[var(--r-sm)] px-3 py-3 transition-colors ${
                          isActive
                            ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                            : 'text-[var(--ink)] hover:bg-[var(--surface-2)]'
                        }`
                      }
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-[var(--ink-faint)]">
                          {formatIndex(index + 1)}
                        </span>
                        <span className="font-display text-2xl font-bold tracking-tight">
                          {item.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 text-[var(--ink-faint)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
                        aria-hidden="true"
                      />
                    </NavLink>
                  </m.li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 border-t border-[var(--line)] pt-5">
              {PROFILE.availability.openToJobs && (
                <p className="inline-flex items-center gap-2 font-mono text-xs text-[var(--ink-muted)]">
                  <span className="pulse-dot" aria-hidden="true" />
                  <span>Open to Junior Engineering Roles</span>
                </p>
              )}
              <SocialLinks />
            </div>
          </m.nav>
        </div>
      )}
    </AnimatePresence>
  );
}
