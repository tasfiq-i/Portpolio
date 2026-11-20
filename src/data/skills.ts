import type { Skill } from '../types';

export const SKILLS: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    level: 'project-experience',
    relatedProjectIds: ['shebaconnect'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    level: 'working-knowledge',
    relatedProjectIds: ['shebaconnect'],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    level: 'project-experience',
    relatedProjectIds: ['pharmacy-management-system'],
  },

  // Backend
  {
    id: 'csharp',
    name: 'C#',
    category: 'Backend',
    level: 'project-experience',
    relatedProjectIds: ['pharmacy-management-system', 'shebaconnect', 'jwt-crud-api'],
  },
  {
    id: 'aspnet-core',
    name: 'ASP.NET Core',
    category: 'Backend',
    level: 'working-knowledge',
    relatedProjectIds: ['shebaconnect', 'jwt-crud-api'],
  },
  {
    id: 'aspnet-mvc',
    name: 'ASP.NET MVC',
    category: 'Backend',
    level: 'project-experience',
    relatedProjectIds: ['pharmacy-management-system'],
  },
  {
    id: 'web-api',
    name: 'Web API',
    category: 'Backend',
    level: 'working-knowledge',
    relatedProjectIds: ['shebaconnect', 'jwt-crud-api'],
  },

  // Database & ORM
  {
    id: 'sql-server',
    name: 'SQL Server',
    category: 'Database & ORM',
    level: 'project-experience',
    relatedProjectIds: ['pharmacy-management-system', 'shebaconnect'],
  },
  {
    id: 'ef-core',
    name: 'Entity Framework Core',
    category: 'Database & ORM',
    level: 'working-knowledge',
    relatedProjectIds: ['shebaconnect'],
  },

  // Tools & API Testing
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'Tools & API Testing',
    level: 'working-knowledge',
  },
  {
    id: 'swagger',
    name: 'Swagger',
    category: 'Tools & API Testing',
    level: 'working-knowledge',
    relatedProjectIds: ['jwt-crud-api'],
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'Tools & API Testing',
    level: 'working-knowledge',
    relatedProjectIds: ['jwt-crud-api'],
  },

  // AI Development Tools
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI Development Tools',
    level: 'working-knowledge',
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'AI Development Tools',
    level: 'working-knowledge',
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'AI Development Tools',
    level: 'working-knowledge',
  },
  {
    id: 'google-antigravity',
    name: 'Google Antigravity',
    category: 'AI Development Tools',
    level: 'working-knowledge',
  },
];

export const SKILL_CATEGORIES = [
  'Frontend',
  'Backend',
  'Database & ORM',
  'Tools & API Testing',
  'AI Development Tools',
] as const;
