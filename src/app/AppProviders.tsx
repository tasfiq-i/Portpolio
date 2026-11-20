import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '../hooks/useTheme';
import { router } from './router';

export function AppProviders() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
