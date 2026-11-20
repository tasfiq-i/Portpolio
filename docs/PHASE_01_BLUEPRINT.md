# Professional Full Stack Developer Portfolio
## Phase 01: Complete Blueprint

**Document status:** Proposed Blueprint  
**Implementation status:** Not started  
**Rule:** Do not write application code until the owner explicitly approves the blueprint.

## 1. Project Overview

- **Purpose:** Professional portfolio for software-company jobs, remote opportunities and freelancing.
- **Positioning:** Junior Full Stack Software Engineer.
- **Design direction:** Modern, clean, professional, responsive.
- **Frontend:** React + TypeScript + Vite + Tailwind CSS.
- **Content:** Static TypeScript data for Version 1.
- **Backend/database:** Not required for Version 1.
- **Deployment target:** Vercel (proposed).

Do not invent personal information, project completion status, metrics, testimonials, client names, screenshots, GitHub links or live demos. Use clearly marked placeholders until the owner supplies verified information.

## 2. Sitemap

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Introduction, skills overview and featured projects |
| `/about` | About | Biography, education and development journey |
| `/projects` | Projects | Project listing and client-side filters |
| `/projects/:slug` | Project Details | Individual project case study |
| `/skills` | Skills | Technical skills grouped by category |
| `/resume` | Resume | Resume summary and verified PDF download |
| `/contact` | Contact | Verified contact methods and optional contact form |
| `*` | Not Found | 404 page |

Primary navigation: Home, About, Projects, Skills, Resume, Contact. Project Details is a dynamic route.

## 3. Global UI and Design System

- Dark-first theme with optional Light Mode (subject to owner approval).
- Deep navy/charcoal surfaces with restrained blue or violet accent.
- Inter or Plus Jakarta Sans typography.
- Maximum content width approximately 1200px.
- Responsive grid, clear spacing and readable hierarchy.
- Rounded cards, subtle borders and restrained transitions.
- Lucide React icons.
- Mobile navigation must be keyboard accessible.
- Avoid excessive gradients, animation, decorative clutter and skill-percentage meters.

## 4. Page Layouts

### 4.1 Home `/`
1. Navbar
2. Hero: name, professional title, concise introduction, project CTA, resume CTA and verified social links
3. Technology stack preview
4. About preview
5. Featured projects
6. Technical expertise
7. Development approach / engineering practices
8. Career and freelance contact CTA
9. Footer

Hero copy is a draft only. Confirm wording and claims with the owner before publishing.

### 4.2 About `/about`
1. Professional introduction
2. Development journey
3. Education
4. Training and learning
5. Career goals
6. Personal development approach

Present the owner's academic background accurately. Do not imply that an academic degree is a software engineering degree or invent professional employment experience.

### 4.3 Projects `/projects`
- Project introduction
- Client-side category filters: All, Full Stack, Backend/API, Frontend, Architecture/Case Study
- Responsive project card grid
- Each card: real title, concise summary, actual status, technologies and details link
- Only show verified GitHub/live-demo links

### 4.4 Project Details `/projects/:slug`
Use a reusable case-study template:
1. Project hero and status
2. Overview
3. Problem statement
4. Objectives
5. Key features
6. Technology stack
7. Architecture
8. Database design
9. Real screenshots/gallery
10. Challenges and solutions
11. Current development status
12. Verified GitHub/live demo links
13. Related projects

If information is unavailable, omit the section or mark it as pending. Never fabricate.

### 4.5 Skills `/skills`
Group skills into Frontend, Backend, Database, Tools and Engineering Practices. Use evidence-based labels such as Working Knowledge, Project Experience and Currently Learning. Do not use unsupported proficiency percentages.

### 4.6 Resume `/resume`
- Professional summary
- Technical skills
- Projects
- Education
- Training
- Verified PDF download
- Contact links

Do not render a download action until a real resume PDF is provided.

### 4.7 Contact `/contact`
- Verified email
- GitHub and LinkedIn
- Optional contact form
- Job and freelance inquiry context

Version 1 has no backend. A form must not pretend to submit unless a real, approved email/form service is configured and tested. Otherwise use direct contact links.

### 4.8 Not Found
- Clear 404 message
- Home and Projects navigation actions

## 5. Component Hierarchy

```text
App
├── AppProviders
│   ├── ThemeProvider
│   └── RouterProvider
├── MainLayout
│   ├── Navbar
│   │   ├── Logo
│   │   ├── DesktopNavigation
│   │   ├── ThemeToggle
│   │   └── MobileMenu
│   ├── MainContent
│   ├── Footer
│   └── BackToTop
├── Pages
│   ├── HomePage
│   ├── AboutPage
│   ├── ProjectsPage
│   ├── ProjectDetailsPage
│   ├── SkillsPage
│   ├── ResumePage
│   ├── ContactPage
│   └── NotFoundPage
└── Shared Components
    ├── Container
    ├── Button
    ├── Badge
    ├── SectionHeading
    ├── SocialLinks
    ├── ProjectCard
    ├── ProjectFilter
    ├── SkillCategory
    ├── TechBadge
    ├── Timeline
    └── SEO
```

### Home Page Components
```text
HomePage
├── HeroSection
├── TechStackSection
├── AboutPreviewSection
├── FeaturedProjectsSection
│   ├── SectionHeading
│   ├── ProjectGrid
│   └── ProjectCard
├── ExpertiseSection
├── DevelopmentApproachSection
└── ContactCTASection
```

### Project Details Components
```text
ProjectDetailsPage
├── ProjectHero
├── ProjectGallery
├── ProjectOverview
├── ProblemStatement
├── ProjectObjectives
├── ProjectFeatures
├── TechnologyStack
├── ArchitectureSection
├── DatabaseDesignSection
├── ChallengesAndSolutions
├── DevelopmentStatus
├── ProjectLinks
└── RelatedProjects
```

## 6. Proposed Folder Structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── profile/
│   │   └── projects/
│   ├── files/
│   │   └── resume.pdf
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── AppProviders.tsx
│   │   └── router.tsx
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── projects/
│   │   ├── skills/
│   │   └── shared/
│   ├── pages/
│   │   ├── HomePage/
│   │   │   └── sections/
│   │   ├── AboutPage/
│   │   ├── ProjectsPage/
│   │   ├── ProjectDetailsPage/
│   │   ├── SkillsPage/
│   │   ├── ResumePage/
│   │   ├── ContactPage/
│   │   └── NotFoundPage/
│   ├── data/
│   │   ├── profile.ts
│   │   ├── navigation.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   └── socialLinks.ts
│   ├── hooks/
│   ├── types/
│   ├── utils/
│   ├── styles/
│   └── main.tsx
├── docs/
│   ├── PORTFOLIO_SRS.docx
│   ├── PHASE_01_BLUEPRINT.md
│   └── CLI_IMPLEMENTATION_INSTRUCTIONS.md
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

This is a proposed structure, not an instruction to create every file immediately. The CLI must inspect any existing workspace before modifying it.

## 7. TypeScript Data Models

### Profile
```ts
export interface Profile {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  location: string;
  email: string;
  profileImage: string;
  resumeUrl: string;
  availability: {
    openToJobs: boolean;
    openToFreelance: boolean;
  };
}
```

### Project
```ts
export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "learning"
  | "case-study";

export type ProjectCategory =
  | "full-stack"
  | "backend"
  | "frontend"
  | "architecture";

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  status: ProjectStatus;
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  problemStatement: string;
  objectives: string[];
  architecture?: string;
  databaseDescription?: string;
  challenges: { problem: string; solution: string }[];
  screenshots: { src: string; alt: string; caption?: string }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  displayOrder: number;
}
```

### Skill
```ts
export type SkillLevel =
  | "working-knowledge"
  | "project-experience"
  | "currently-learning";

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: SkillLevel;
  relatedProjectIds?: string[];
  icon?: string;
}
```

### Education
```ts
export interface Education {
  id: string;
  institution: string;
  degree: string;
  subject: string;
  result?: string;
  passingYear?: string;
  status: "completed" | "in-progress";
}
```

### Navigation and Social Links
```ts
export interface NavigationItem {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}
```

## 8. Project Content Plan

| Project | Proposed presentation | Status rule |
|---|---|---|
| Pharmacy Management System | ASP.NET MVC 5, EF6, SQL Server, inventory, purchase, sales, invoice and roles | Verify actual workflow and completion before labeling |
| ShebaConnect | React + ASP.NET Core on-demand home services platform | In development; show only implemented features |
| JWT CRUD API | ASP.NET Core Web API, JWT authentication and CRUD | Verify implemented features and test status |
| Real Estate ERP | Requirements engineering, domain analysis and system architecture | Architecture case study, not a completed product |

For all projects, collect genuine screenshots, repository URLs, demo URLs (if functional), architecture diagrams and accurate feature status.

## 9. Technical Decisions

| Area | Decision |
|---|---|
| UI | React |
| Language | TypeScript |
| Build | Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| Icons | Lucide React |
| Animation | Optional, restrained |
| Content | Static TypeScript data |
| State | React state/hooks |
| Backend | None in v1 |
| Database | None in v1 |
| Deployment | Vercel (proposed) |

Do not add Redux, Axios, React Query, a database, authentication or a CMS without a demonstrated requirement and owner approval.

## 10. Functional Requirements

- FR-01 Responsive navigation
- FR-02 Hero and professional introduction
- FR-03 About information
- FR-04 Featured project cards
- FR-05 Project listing
- FR-06 Client-side project filtering
- FR-07 Dynamic project detail routes
- FR-08 Skills listing
- FR-09 Verified resume download
- FR-10 Contact information
- FR-11 Optional theme toggle
- FR-12 Mobile navigation
- FR-13 SEO metadata
- FR-14 404 page
- FR-15 Verified social links
- FR-16 Back-to-top action

## 11. Non-Functional Requirements

- Responsive on mobile, tablet and desktop
- Semantic HTML and keyboard accessibility
- Page titles, descriptions and Open Graph metadata
- No secrets or private credentials in client code
- Reusable, maintainable components
- TypeScript strictness where practical
- ESLint and consistent formatting
- Modern browser support
- HTTPS deployment
- No broken routes, links or missing assets

Lighthouse score goals: 90+ for Performance, Accessibility, Best Practices and SEO. These are targets to test, not guaranteed results.

## 12. Development Tasks

### Phase 02: Setup and Design Foundation
- Inspect workspace and existing files
- Confirm project root and avoid overwriting existing work
- Create or configure React + TypeScript + Vite
- Configure Tailwind CSS
- Configure ESLint and formatting
- Add React Router and Lucide React
- Establish proposed folder structure
- Define design tokens and global styles
- Configure routes and MainLayout

### Phase 03: Shared Components
- Container, Button, Badge, SectionHeading
- Navbar, MobileMenu, Footer
- SocialLinks, ThemeToggle, BackToTop
- ProjectCard, ProjectGrid, ProjectFilter
- SkillCategory, SkillBadge, SEO

### Phase 04: Home Page
- Hero
- Tech stack preview
- About preview
- Featured projects
- Expertise
- Development approach
- Contact CTA

### Phase 05: Inner Pages
- About
- Projects and filtering
- Dynamic project details
- Skills
- Resume
- Contact
- Not Found

### Phase 06: Content Integration
- Verified profile data
- Project content and status
- Skills and education
- Verified social links
- Resume PDF
- Genuine screenshots
- Architecture diagrams

### Phase 07: Quality Assurance
- Responsive testing
- Navigation and route testing
- Project filter testing
- Unknown slug handling
- Broken-link and missing-image checks
- Accessibility
- SEO
- Performance
- Cross-browser checks

### Phase 08: Deployment
- Git repository review
- Production build
- Vercel configuration
- Deployment
- Domain configuration if supplied
- HTTPS verification
- Production smoke test

## 13. Acceptance Criteria

- All routes work, including direct navigation and refresh.
- Responsive layouts work on mobile, tablet and desktop.
- Project filters and dynamic details work.
- No invented claims or fake project evidence.
- Resume download works only when the real PDF exists.
- Contact actions are verified and functional.
- SEO metadata exists on important routes.
- No broken links or missing assets.
- Production build succeeds.
- Deployment is verified over HTTPS.

## 14. Risks and Mitigation

| Risk | Mitigation |
|---|---|
| Overstating project completion | Verify status and label honestly |
| Fake screenshots or demo links | Use only genuine evidence |
| Unnecessary technical complexity | Keep v1 static and minimal |
| Unverified personal details | Use placeholders and ask owner |
| Non-functional contact form | Use verified service or direct links |
| Mobile layout defects | Test early and repeatedly |

## 15. Owner Decisions Still Required

Do not guess these values:
- Final theme preference
- Profile photo decision and actual image
- Verified professional email
- GitHub URL
- LinkedIn URL
- Custom domain decision
- Resume PDF
- Final project statuses
- Real screenshots and repository/demo links
- Confirmed education details and current study status
- Final hero copy and professional summary

## 16. Phase 01 Completion Rule

This document is the proposed blueprint. The next step is a repository discovery and implementation plan. Do not start coding until:
1. The owner has reviewed this blueprint.
2. Existing workspace/repository has been inspected.
3. Questions and conflicts have been reported.
4. The owner explicitly approves implementation.
