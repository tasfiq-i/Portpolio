# Developer Portfolio — Tasfiq

Static React + TypeScript + Vite + Tailwind CSS portfolio for a Junior Full Stack Software Engineer.

## Tech Stack
- **UI:** React 19, TypeScript, Tailwind CSS v4
- **Routing:** React Router (`react-router-dom`)
- **Icons:** Lucide React (`lucide-react`)
- **Build:** Vite

## Local Development
```bash
npm install
npm run dev
```

## Verification Commands
```bash
npm run typecheck
npm run lint
npm run build
```

## Updating Content
All portfolio content is stored in typed modules under `src/data/`:
- `src/data/profile.ts` — Name, title, bio, location, optional `email` / `resumeUrl` / `profileImage`
- `src/data/socialLinks.ts` — Verified GitHub and LinkedIn URLs
- `src/data/projects.ts` — Project case studies, statuses, and verified links/screenshots
- `src/data/skills.ts` — Technical skills and AI development tools
- `src/data/education.ts` — Academic education and technical training
- `src/data/services.ts` — Service offerings

See [docs/CONTENT_CHECKLIST.md](./docs/CONTENT_CHECKLIST.md) for remaining items pending verification.

## Deployment
Configured for static hosting on Vercel via [vercel.json](./vercel.json). See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) for build settings, smoke tests, and rollback steps.

## Documentation
- [docs/PORTFOLIO_SRS.docx](./docs/PORTFOLIO_SRS.docx)
- [docs/PHASE_01_BLUEPRINT.md](./docs/PHASE_01_BLUEPRINT.md)
- [docs/DECISIONS.md](./docs/DECISIONS.md)
