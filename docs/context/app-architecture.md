# App architecture

Demo site for a fictional landscaping company, built with Vue 3, Vite 5 and Tailwind CSS 3. One page, no router, no backend. [README.md](../../README.md) covers the pitch, licence credit and commands.

## Entry points

- `index.html`: Vite entry, mounts `#app`.
- `src/main.js`: imports Font Awesome CSS and `src/assets/tailwind.css`, then mounts `src/App.vue`.
- `src/App.vue`: skip link, then Topbar, Navbar, a `<main>` with the sections in page order (Hero, Feature, About, Service, FeatureHighlights, Projects, Team, Testimonial, FreeQuote), then Footer and Copyrights.

## Layout

- `src/sections/`: one component per page section. Navbar links scroll to section ids.
- `src/components/`: reusable pieces: `Carousel.vue` (own implementation, props include `slides` and `autoplay`; autoplay timer is cleared and restarted on change), `CardCarousel.vue`, `SectionHeading.vue`, `Copyrights.vue`.
- `src/data/`: all copy and content as plain JS exports (`metaData.js`, `contentData.js`, `servicesData.js`, `projectData.js`, `teamData.js`, `testimonialData.js`). Components read from these, so text changes need no component edits.
- `src/utils/validation.js`: `isEmail` and `isPhone` helpers for the quote form.
- `src/assets/img/`: images. `@` aliases `src/` (see `vite.config.js`).

## Styling

Tailwind config is `tailwind.config.js` with palettes `forest` (primary), `sand` (neutrals) and a terracotta accent, plus fonts. Prettier config is `.prettierrc.json`, ESLint is `.eslintrc.cjs`.

## Gotchas

- The footer credit link to the template author must stay (licence requirement); it is configured in `src/data/metaData.js` under `credits`.
- The quote and newsletter forms only validate; nothing is sent.
- The site is `noindex` and all contact details are fictional placeholders.
- The services carousel only appears on phone-sized screens (commit e396980).
