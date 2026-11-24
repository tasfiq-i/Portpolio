# Visual Review & Manual Testing Report

> [!NOTE]
> **No additional source code changes, commits, or merges have been made.** All screenshots below were captured directly from the live running build on `feat/visual-redesign`.

---

## 1. Full-Page & Page Screenshots

### 1.1 Home Page â€” Desktop (`1440px` wide, full-page) & Mobile (`390px` wide, full-page)
````carousel
![Home Page â€” Desktop 1440px Full Page](./review_01_home_desktop_full.png)
<!-- slide -->
![Home Page â€” Mobile 390px Full Page](./review_02_home_mobile_full.png)
````

### 1.2 Projects Page, Project Details Page & About Page â€” Desktop (`1440px`)
````carousel
![Projects Page â€” Desktop 1440px](./review_03_projects_desktop.png)
<!-- slide -->
![Project Details Page â€” Desktop 1440px](./review_04_project_details_desktop.png)
<!-- slide -->
![About Page â€” Desktop 1440px](./review_05_about_desktop.png)
````

### 1.3 Dark vs. Light Theme Comparison (`1440Ã—950`)
````carousel
![Dark Theme â€” Home Hero](./review_06a_theme_dark.png)
<!-- slide -->
![Light Theme â€” Home Hero](./review_06b_theme_light.png)
````

### 1.4 Component Close-Ups (Navbar, HeroScene, Project Card Hover Spotlight & Footer CTA)
````carousel
![Navbar Close-Up](./review_07a_closeup_navbar.png)
<!-- slide -->
![HeroScene Close-Up](./review_07b_closeup_heroscene.png)
<!-- slide -->
![Project Card Hover Spotlight Close-Up](./review_07c_closeup_project_card_hover.png)
<!-- slide -->
![Footer CTA Close-Up](./review_07d_closeup_footer_cta.png)
````

---

## 2. Manual Interaction Verification Results

| Interaction | How Verified | Result |
|---|---|---|
| **Desktop navigation & active link animation** | Navigated across `/`, `/about`, `/projects`, `/skills`, `/resume`, `/contact`; inspected active `NavLink[aria-current="page"]` | **Passed** â€” Active link renders both the shared `layoutId="nav-pill"` glass pill and `layoutId="nav-dot"` accent dot (`hasPillAndDot: true`), animating smoothly with spring physics (`400/32`). Navbar hides on downward scroll past `120px` and reappears on upward scroll. |
| **Mobile menu open, close & `Escape` key** | At `390Ã—844`, clicked `button[aria-label="Open navigation menu"]`, checked focus & `body.style.overflow`, dispatched `Escape` `keydown` | **Passed** â€” Dialog `#mobile-navigation` opens (`dialogOpen: true`), locks page scroll (`bodyOverflow: "hidden"`), moves initial focus to `Close navigation menu`, renders all 6 indexed links (`01`â€“`06`), traps `Tab` focus inside the drawer, and closes cleanly on `Escape` (`dialogOpen: false`, `bodyOverflow: ""`). |
| **Dark / Light theme switching & persistence** | Clicked the header `ThemeToggle` button and inspected `localStorage`, `documentElement.classList`, and `<meta name="theme-color">` | **Passed** â€” Toggles from dark (`#070b14`) to light (`#f6f7fb`) with the circular View-Transition reveal (`::view-transition-new(root)`), persists `portfolio-theme` in `localStorage`, and restores before first paint via the inline `<head>` script in `index.html`. |
| **Project category filtering** | Clicked each segmented button (`All`, `Full Stack`, `Backend / API`, `Frontend`, `Architecture / Case Study`) on `/projects` | **Passed** â€” Active pill slides via `layoutId="project-filter-pill"` (`aria-pressed="true"`), and cards filter accurately: `All` (4), `Full Stack` (2: Pharmacy Management System, ShebaConnect), `Backend / API` (1: JWT CRUD API), `Frontend` (0 â†’ displays empty-state message), `Architecture / Case Study` (1: Real Estate ERP). *(Note: during fast automated clicking, `AnimatePresence mode="popLayout"` briefly retains exiting nodes for `0.5s` while animating out.)* |
| **Project card hover effects** | Forced `:hover` pseudo-state and dispatched mouse pointer coordinates (`--mx: 240px`, `--my: 130px`) on `<article>` | **Passed** â€” Card lifts `-6px` (`-translate-y-1.5`), border brightens to `--card-accent`, ghost number (`01`) increases opacity from `10%` to `18%`, `.spotlight-layer` radial glow illuminates under the pointer, and the `View Case Study â†—` arrow nudges up-right. |
| **Scroll reveal & page transitions** | Walked full scroll height on desktop and mobile; navigated between routes | **Passed** â€” `<WordReveal>` headlines rise word-by-word from behind their mask, `<Reveal>` and `<Stagger>` sections fade and lift in once (`viewport.once = true`), top 2px `<ScrollProgress>` bar tracks scroll progress, and route changes fade/rise (`12px`, `0.45s`) while scrolling to top. |
| **Back-to-top button** | Scrolled to `window.scrollY = 650` and clicked `button[aria-label="Back to top"]` | **Passed** â€” Button fades in once `scrollY > 400` (`bttShown: true`) and returns viewport to `scrollY === 0` (`bttScrolledTop: true`) on click. |
| **Keyboard navigation & focus indicators** | Tabbed through skip link, navbar links, theme toggle, CTAs, and project cards | **Passed** â€” Skip-to-main-content pill appears at top-left on first `Tab`, and every interactive element displays a 2px `--accent` outline with `3px` offset on `:focus-visible`. |
| **`prefers-reduced-motion` behavior** | Enabled `prefers-reduced-motion: reduce` via Chrome DevTools Emulation and reloaded `/` | **Passed** â€” `window.matchMedia('(prefers-reduced-motion: reduce)').matches === true`; `<ScrollProgress>` unmounts (`scrollProgressHidden: true`); `<Reveal>`, `<Stagger>`, and `<WordReveal>` render static HTML without initial opacity/offset; marquee animation disables (`marqueeAnimationName: "none"`). |

---

## 3. Content & Data Integrity Audit

1. **Availability ("Open to work" / "Freelance available"):**
   - Directly bound to `PROFILE.availability.openToJobs` (`true`) and `PROFILE.availability.openToFreelance` (`true`) in [src/data/profile.ts](file:///E:/71%20Round/Portfolio/src/data/profile.ts#L14-L17).
   - Matches your stated career goal in `shortBio` (*"Junior Full Stack Software Engineer targeting Full Stack Developer roles across software companies, remote teams, and freelance engagements"*).
2. **Hero Metrics Verification (100% computed from actual data, zero hardcoded/invented numbers):**
   - **`04 Documented projects`** â†’ `formatIndex(PROJECTS.length)` (Pharmacy Management System, ShebaConnect, JWT CRUD API, Real Estate ERP in [src/data/projects.ts](file:///E:/71%20Round/Portfolio/src/data/projects.ts)).
   - **`02 Active builds`** â†’ `formatIndex(PROJECTS.filter((p) => p.status === 'in-progress').length)` (Pharmacy Management System + ShebaConnect).
   - **`16 Cataloged skills`** â†’ `formatIndex(SKILLS.length)` (exact count of items in [src/data/skills.ts](file:///E:/71%20Round/Portfolio/src/data/skills.ts)).
3. **Honest Statuses & Conditional Links:**
   - Every project card and detail header displays its exact truthful status (`In Development`, `Prototype`, `Case Study`) â€” no project is marked `Completed`.
   - `PROFILE.email` is `undefined`, `PROFILE.resumeUrl` is `undefined`, and `SOCIAL_LINKS` is `[]`; therefore no `mailto:` buttons, CV download buttons, or social profile links render anywhere on the site, and the Contact/Resume pages display their honest verification notices.

