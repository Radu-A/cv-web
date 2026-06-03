# AGENTS.md

## Build & Run
- No build step, no package manager. Just open `index.html` in a browser or serve the root directory as static files.
- Deployed to Vercel as a static site (no `vercel.json` — default config is used).

## Architecture
- Single-page CV site: all sections (#about, #formation, #skills, #projects, #contact) live in `index.html`.
- Sections are hidden by default; JS toggles `section.active` class to show one at a time.
- Navigation links use `href="#section-id"` which updates the URL hash and triggers `showSection()`. `e.preventDefault()` is intentionally commented out so hash changes work.

## Key Files
- `index.html` — all markup
- `styles/styles.css` — all styles (CSS custom properties, Grid/Flexbox, media queries at 768px and 992px)
- `script/script.js` — sidebar toggle, section switching, auto year in footer
- `assets/` — images, icons, favicons, downloadable documents

## External Dependencies
- Google Fonts (Quicksand, Poppins) loaded via CSS `@import`
- Google Maps iframe embed in contact section
- Contact form submits to Formspree (`https://formspree.io/f/mwprrqao`)

## Language & Content
- Site content is in Spanish. Page lang attribute is `es`.
