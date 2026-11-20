import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { ContactPage } from '../pages/ContactPage/ContactPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { ProjectDetailsPage } from '../pages/ProjectDetailsPage/ProjectDetailsPage';
import { ProjectsPage } from '../pages/ProjectsPage/ProjectsPage';
import { ResumePage } from '../pages/ResumePage/ResumePage';
import { SkillsPage } from '../pages/SkillsPage/SkillsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:slug', element: <ProjectDetailsPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'resume', element: <ResumePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
