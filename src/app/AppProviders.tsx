import { LazyMotion, MotionConfig, domMax } from 'motion/react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '../hooks/useTheme';
import { router } from './router';

export function AppProviders() {
  return (
    <ThemeProvider>
      <LazyMotion features={domMax} strict>
        <MotionConfig reducedMotion="user">
          <RouterProvider router={router} />
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}
