# Architecture & Implementation Decisions

## 2026-11-21 — Phase 02 Foundation & Owner Decisions

1. **Routing Architecture:** Adopted multi-page React Router (`/`, `/about`, `/projects`, `/projects/:slug`, `/skills`, `/resume`, `/contact`, `*`) per `docs/PHASE_01_BLUEPRINT.md` instead of a single-page-only anchor layout, while ensuring all SRS sections (including Engineering Practices, AI-Assisted Development, and Services) are represented.
2. **Theme & Styling:** Dark-first navy/charcoal surfaces (`#0B1120`, `#111827`) with a Light/Dark toggle persisted in `localStorage`, restrained blue accent (`#3B82F6`), and Tailwind CSS v4 (`@tailwindcss/vite`).
3. **Public Identity & Contact:** Use clearly marked placeholders for email, GitHub, and LinkedIn until owner-verified contact information is supplied.
4. **Profile Photo & Resume:** Omit profile photo and resume download action until actual owner-approved files are provided.
5. **Education & Training:** Present only verified education info from project docs; keep missing details as placeholders.
6. **Project Evidence & Status Rules:**
   - **Pharmacy Management System:** Existing project; verify implementation before claiming completion.
   - **ShebaConnect:** In Development.
   - **JWT CRUD API:** Verify implementation and testing before assigning final status.
   - **Real Estate ERP:** Architecture / Requirements Case Study only.
   - Never invent screenshots, GitHub links, or live demos.
7. **Skills & Services:** Use evidence-based skill categories without unsupported proficiency claims; include Services only with honest placeholders until confirmed.
8. **Dependency Discipline:** Installed only `react`, `react-dom`, `react-router-dom`, and `lucide-react` as runtime dependencies; excluded Redux, Axios, React Query, and heavy animation libraries.
9. **Git Initialization:** Initialized local Git repository (`git init`) only after confirming no `.git` directory existed.
10. **Hero Portrait & 3D Workspace Scene:** Added a zero-dependency CSS 3D-perspective interactive workspace card (`HeroScene.tsx`, respects `prefers-reduced-motion`) and wired conditional `PROFILE.profileImage` rendering in `HeroSection.tsx` for when the owner supplies their portrait file.
