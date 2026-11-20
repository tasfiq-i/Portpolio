import type { ServiceItem } from '../types';

// Placeholder service offerings aligned with SRS Sec 6 (FR-10) & Owner Decision #6.
export const SERVICES: ServiceItem[] = [
  {
    id: 'web-apps',
    title: 'Business Web Applications',
    description:
      'Structured React + TypeScript interfaces connected to maintainable backend APIs (scope and availability confirmed per inquiry).',
  },
  {
    id: 'rest-apis',
    title: 'REST API & Database Integration',
    description:
      'ASP.NET Core Web API endpoints, Entity Framework data access, and relational SQL Server schema work.',
  },
  {
    id: 'maintenance',
    title: 'Bug Fixing & UI Improvements',
    description:
      'Incremental debugging, responsive layout fixes, and code cleanup for existing web applications.',
  },
];
