# Deployment Guide (Vercel)

## Build Settings
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js Version:** 20+ (tested on Node v26.5.0)
- **SPA Routing:** Configured via `vercel.json` rewrite (`/(.*) -> /index.html`) so direct visits and refreshes on `/about`, `/projects/:slug`, etc. resolve properly.

## Pre-Deployment Checklist
1. Review [docs/CONTENT_CHECKLIST.md](./CONTENT_CHECKLIST.md) and fill in verified email, GitHub/LinkedIn URLs, education/training dates, and `public/files/resume.pdf` when ready.
2. Run local verification:
   ```bash
   npm run typecheck
   npm run lint
   npm run build
   ```
3. Confirm no secrets, private tokens, or unverified claims exist in `src/` or `public/`.

## Deploying to Vercel
1. Push this repository to GitHub (only after reviewing `git status` and commit contents).
2. Import the repository in the Vercel dashboard.
3. Confirm build command `npm run build` and output directory `dist`.
4. Deploy and wait for the HTTPS URL.

## Post-Deployment Smoke Test
- Verify HTTPS loads without mixed-content or console errors.
- Test direct navigation and browser refresh on `/`, `/about`, `/projects`, `/projects/shebaconnect`, `/skills`, `/resume`, `/contact`, and an unknown route (e.g. `/unknown-page` -> 404).
- Verify Dark/Light theme toggle and mobile menu on a narrow viewport.
- Verify any added external links (`GitHub`, `LinkedIn`, `mailto:`) and `/files/resume.pdf` if supplied.

## Rollback / Redeployment
- In Vercel Dashboard -> **Deployments**, select a previous healthy deployment and choose **Promote to Production**, or push a fix commit to trigger a fresh build.
