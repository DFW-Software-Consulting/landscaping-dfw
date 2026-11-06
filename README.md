# DFW Landscaping Co. (demo site)

A demo website for a **fictional** Dallas-Fort Worth landscaping company, built by
[DFW Software Consulting](https://dfwsc.com) (DFWSC) to show prospective landscaping clients what
a polished, modern small-business site can look like. All names, phone numbers (555-01xx),
addresses, reviews and projects are made up. The page is marked `noindex`, and the forms never send
anything.

Built with Vue 3, Vite 5 and Tailwind CSS 3. It is a single page with no router.

## Credit and license

The design is based on the free **"Gardener"** template by
[HTML Codex](https://htmlcodex.com), distributed by [ThemeWagon](https://themewagon.com). Its license
requires the author credit link to stay in the footer, so do not remove the "Designed by HTML Codex"
link (configured in `src/data/metaData.js`).

## Development

```bash
npm ci          # install
npm run dev     # local dev server
npm run lint    # ESLint (auto-fixes)
npm run build   # production build into dist/
npm run preview # serve dist/ locally at http://localhost:4173/landscaping-dfw/
```

## Re-skinning for a client

All copy lives in `src/data/`; no component edits needed for text changes:

- `metaData.js`: company name, phone, email, address, social links, nav and footer links, credits
- `contentData.js`: hero, about, section headings, banner, quote form and newsletter text
- `servicesData.js`, `projectData.js`, `teamData.js`, `testimonialData.js`: cards and gallery
- `tailwind.config.js`: color palette (`forest`, `sand`, `clay`) and fonts
- Images live in `src/assets/img/`; favicon in `public/`

## Deploy

GitHub Pages deploys through `.github/workflows/deploy.yml`: on every push to `main` (or a manual
run) it runs `npm ci` and `npm run build`, then publishes `dist/`. The repo's Pages source must be set
to "GitHub Actions". Vite's `base` is `/landscaping-dfw/` (see `vite.config.js`); change it if the
repository is renamed or a custom domain is used.
