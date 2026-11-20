import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'pharmacy-management-system',
    slug: 'pharmacy-management-system',
    title: 'Pharmacy Management System',
    shortDescription:
      'Existing ASP.NET MVC and SQL Server project for pharmacy inventory, purchases, sales, and role-based workflows. Mostly complete; final workflow verification is pending.',
    overview:
      'Existing ASP.NET MVC web application backed by SQL Server and Entity Framework, built to manage medicine inventory, supplier purchases, customer sales, and role-based access.',
    status: 'in-progress',
    category: 'full-stack',
    roleOrContribution: 'Existing Project (Final Verification Pending)',
    visibility: 'private',
    technologies: [
      'C#',
      'ASP.NET MVC',
      'Entity Framework',
      'SQL Server',
      'JavaScript',
      'Bootstrap 5',
    ],
    features: [
      'Medicine and category management (mostly complete, verification pending)',
      'Supplier purchase and customer sales workflows (verification pending)',
      'Role-based access concepts (Admin / Pharmacist)',
    ],
    plannedFeatures: ['Final end-to-end workflow verification and sanitized screenshots'],
    problemStatement:
      'Small pharmacies need structured tracking of medicine stock, supplier purchases, and sales records instead of manual ledgers.',
    objectives: [
      'Model relational inventory, purchase, and sales tables in SQL Server',
      'Implement server-rendered ASP.NET MVC workflows with Entity Framework',
    ],
    challenges: [],
    screenshots: [],
    featured: true,
    displayOrder: 1,
  },
  {
    id: 'shebaconnect',
    slug: 'shebaconnect',
    title: 'ShebaConnect',
    shortDescription:
      'On-Demand Home Services Platform connecting customers with service providers (plumbing, electrical, AC/appliance servicing). Active development project.',
    overview:
      'On-Demand Home Services Platform under active development, designed to connect customers with verified home service providers through structured booking workflows.',
    status: 'in-progress',
    category: 'full-stack',
    roleOrContribution: 'In Development',
    visibility: 'private',
    technologies: [
      'React',
      'TypeScript',
      'C#',
      'ASP.NET Core',
      'Web API',
      'Entity Framework Core',
      'SQL Server',
    ],
    features: [
      'Service category and provider domain modeling (in progress)',
      'Booking request workflow design',
    ],
    plannedFeatures: [
      'Customer authentication and booking status tracking',
      'Admin management for categories, providers, and bookings',
      'API integration and automated test coverage',
    ],
    problemStatement:
      'Households need a reliable way to discover local technicians and track service booking statuses.',
    objectives: [
      'Build a RESTful Web API with ASP.NET Core and Entity Framework Core',
      'Deliver a responsive React + TypeScript frontend for customers and admins',
    ],
    challenges: [],
    screenshots: [],
    featured: true,
    displayOrder: 2,
  },
  {
    id: 'jwt-crud-api',
    slug: 'jwt-crud-api',
    title: 'JWT CRUD API',
    shortDescription:
      'ASP.NET Core Web API learning project focused on JWT token authentication, protected endpoints, and CRUD operations.',
    overview:
      'Backend-focused ASP.NET Core Web API learning project exploring stateless JWT authentication, endpoint authorization, Swagger documentation, and Postman testing.',
    status: 'prototype',
    category: 'backend',
    roleOrContribution: 'Learning Project',
    visibility: 'private',
    technologies: ['C#', 'ASP.NET Core', 'Web API', 'JWT', 'Swagger', 'Postman'],
    features: [
      'User registration and JWT token issuance (learning scope)',
      'Protected CRUD endpoints tested with Swagger and Postman',
    ],
    plannedFeatures: ['Final test verification and sanitized Swagger captures'],
    problemStatement:
      'Practice implementing stateless API authentication and role/claim-based endpoint protection.',
    objectives: [
      'Understand JWT issuance, validation, and client token handling',
      'Document and test endpoints using Swagger and Postman',
    ],
    challenges: [],
    screenshots: [],
    featured: true,
    displayOrder: 3,
  },
  {
    id: 'real-estate-erp',
    slug: 'real-estate-erp',
    title: 'Real Estate ERP',
    shortDescription:
      'Requirements engineering and software architecture case study for a modular real-estate ERP system. Design and analysis only — not completed software.',
    overview:
      'Requirements engineering and software architecture case study covering domain workflows, data modeling, and modular boundaries for real-estate operations.',
    status: 'case-study',
    category: 'architecture',
    roleOrContribution: 'Requirements & Architecture Case Study',
    visibility: 'private',
    technologies: [
      'Requirements Engineering',
      'Software Architecture',
      'SQL Server Modeling',
      'ASP.NET Core (Planned)',
      'React + TypeScript (Planned)',
    ],
    features: [
      'Domain analysis and modular boundary definition',
      'Ownership, investment, and workflow modeling',
    ],
    plannedFeatures: ['Future implementation subject to scope and requirements sign-off'],
    problemStatement:
      'Real-estate operations span project tracking, investor shares, and sales installments that require clear domain boundaries before coding.',
    objectives: [
      'Document functional requirements and entity relationships',
      'Design a modular architecture with policy-based authorization',
    ],
    challenges: [],
    screenshots: [],
    featured: false,
    displayOrder: 4,
  },
];
