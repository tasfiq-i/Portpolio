export interface Profile {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  location: string;
  email?: string;
  profileImage?: string;
  resumeUrl?: string;
  availability: {
    openToJobs: boolean;
    openToFreelance: boolean;
  };
  isPlaceholder?: boolean;
}

export type ProjectStatus =
  | 'completed'
  | 'in-progress'
  | 'prototype'
  | 'case-study';

export type ProjectCategory =
  | 'full-stack'
  | 'backend'
  | 'frontend'
  | 'architecture';

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  status: ProjectStatus;
  category: ProjectCategory;
  roleOrContribution: string;
  visibility: 'public' | 'private';
  technologies: string[];
  features: string[];
  plannedFeatures?: string[];
  problemStatement: string;
  objectives: string[];
  architecture?: string;
  architectureImage?: string;
  databaseDescription?: string;
  erdImage?: string;
  challenges: { problem: string; solution: string }[];
  outcomes?: string[];
  screenshots: { src: string; alt: string; caption?: string }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  documentationUrl?: string;
  featured: boolean;
  displayOrder: number;
}

export type SkillLevel =
  | 'working-knowledge'
  | 'project-experience'
  | 'currently-learning';

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: SkillLevel;
  relatedProjectIds?: string[];
  icon?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  subject: string;
  type: 'academic' | 'training';
  result?: string;
  passingYear?: string;
  status: 'completed' | 'in-progress';
}

export interface NavigationItem {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}
