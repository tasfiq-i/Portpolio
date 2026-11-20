# CLI Instructions: Portfolio Blueprint-First Workflow

## Important
The owner wants a documentation-first workflow. Do not start coding immediately.

## Read these documents first
1. `docs/PORTFOLIO_SRS.docx` — full requirements and AI implementation brief.
2. `docs/PHASE_01_BLUEPRINT.md` — Phase 01 sitemap, layouts, component hierarchy, folder structure, data models and tasks.

Read the complete documents, not just their titles or summaries.

## First task: Repository Discovery
Before creating, deleting, moving or editing any source file:
- Inspect the current working directory and all existing project files.
- Identify whether this is an empty folder, an existing Vite app, or an existing project.
- Identify package manager, installed dependencies, current routes, source structure and existing design.
- Do not overwrite or remove existing work.
- Report any mismatch between the existing workspace and the SRS/Blueprint.

## Required output before coding
Create a written report in the CLI response (and optionally `docs/REPOSITORY_DISCOVERY_REPORT.md`) containing:

1. Repository Discovery Report
   - Current folder and project status
   - Existing files and structure
   - Existing dependencies and versions
   - Existing implementation, if any
   - Conflicts, risks and missing information

2. Implementation Blueprint Review
   - Sitemap and route plan
   - Page-by-page layout plan
   - Component hierarchy
   - Proposed folder structure
   - TypeScript data models
   - Design tokens and responsive breakpoints
   - Accessibility, SEO and performance plan
   - Testing and deployment plan

3. Owner Questions
   - List only questions that block a correct implementation.
   - Do not invent personal details, contact links, photos, project status, screenshots or resume files.
   - Use clearly marked placeholders where suitable.

4. Phase-by-Phase Implementation Plan
   - Exact tasks, files expected to be created/modified, dependencies and verification steps.
   - Explain any proposed deviation from the documents.

## Technical constraints
- Use React + TypeScript + Vite + Tailwind CSS unless a documented compatibility reason requires a change.
- Version 1 is a static portfolio. No backend, database, authentication, CMS or admin panel.
- Do not add Redux, Axios or React Query without a specific approved need.
- Use React Router for the routes in the blueprint.
- Use real project evidence only.
- Real Estate ERP must be presented as an architecture/requirements case study unless actual implementation evidence is supplied.
- ShebaConnect and all other projects must show only verified implementation status.
- Do not claim that a contact form sends messages unless an approved service is configured and tested.
- Do not show a resume download if no real PDF exists.
- Keep the design professional, readable, responsive and accessible.
- Avoid unnecessary animations and decorative effects.

## Approval gate
STOP after producing the discovery report, blueprint review, questions and implementation plan.

Do not run project scaffolding commands.
Do not install packages.
Do not create or edit application source code.
Do not begin Phase 02.

Wait for the owner to explicitly say: `APPROVE PHASE 02`.

Only after that approval may you begin Phase 02. Work in small phases, explain each change, run checks, and stop to fix errors before proceeding.
