# Dev commands and deploy

## Commands (from package.json)

- `npm ci`: install.
- `npm run dev`: Vite dev server.
- `npm run build`: production build into `dist/`.
- `npm run preview`: serve `dist/` locally under the `/landscaping-dfw/` base path.
- `npm run lint`: ESLint with `--fix`, so it edits files.
- `npm run format`: Prettier over `src/`.

There is no test suite. No environment variables are used.

## Base path

`vite.config.js` sets `base: '/landscaping-dfw/'` because the site is served from a repository sub-path. Change it if the repository is renamed or a custom domain is used, or assets will 404.

## Deploy

`.github/workflows/deploy.yml` runs on every push to `main` (and manual dispatch): `npm ci`, `npm run build`, then publishes `dist/` through the GitHub Pages actions. The repository's Pages source must be set to "GitHub Actions". There is no separate CI job for lint or pull requests.

## Re-skinning for a client

Edit `src/data/*.js`, the palette in `tailwind.config.js`, images in `src/assets/img/` and the favicon in `public/`. See the README section of the same name.
