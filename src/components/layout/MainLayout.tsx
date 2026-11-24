import { m, useReducedMotion } from 'motion/react';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { DURATION, EASE_OUT } from '../../lib/motion';
import { BackToTop } from './BackToTop';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { ScrollProgress } from './ScrollProgress';

export function MainLayout() {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-clip bg-[var(--bg)] text-[var(--ink)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-[var(--accent)] focus:px-5 focus:py-2.5 focus:font-display focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="relative z-10 flex-1">
        <m.div
          key={pathname}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.page, ease: EASE_OUT }}
        >
          <Outlet />
        </m.div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
