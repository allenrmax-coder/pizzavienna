# Pizza Vienna — Website

Modern website for [Pizza Vienna](https://pizzavienna.com), a halal pizza and wings restaurant in Vienna, VA.

## Stack

- **Vite 6** — fast dev server and build
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`
- **TypeScript** — type-safe vanilla JS
- **Fraunces + Inter** — Google Fonts for display / body

No framework, no heavy animation library — just Intersection Observer, CSS transitions, and a tiny TS entry file. The whole site is one `index.html` so it's easy to edit later.

## Run locally

```bash
npm install
npm run dev
```

Then open <http://127.0.0.1:5173>.

## Build

```bash
npm run build
```

Outputs static files to `dist/`. Deploy anywhere static is supported (Cloudflare Pages, GitHub Pages, Netlify, Vercel).

## Structure

```
.
├── index.html         # All page sections (loader, hero, specials, menu, about, visit, footer)
├── public/
│   └── logo.jpg       # Brand logo (favicon + nav)
├── src/
│   ├── main.ts        # Loader dismissal, sticky nav, mobile menu, scroll reveal
│   └── style.css      # Tailwind v4 import + design tokens + custom components
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Editing content

All copy lives in `index.html`. Key things you'll want to update:

- **Phone**: search for `703 319-0002` and `+17033190002`
- **Address**: search for `235 Maple Ave E`
- **Hours**: search for `Hours` section in the Visit block
- **Specials**: search for the `SPECIALS` comment — three `<article class="special-card">` blocks
- **Menu categories**: search for `MENU PREVIEW` — four `<a class="menu-card">` blocks
- **Online ordering**: links to <https://www.toasttab.com/local/order/pizzavienna>
- **Social media**: footer + change Instagram, Facebook, TikTok, Yelp, TripAdvisor URLs

## Design tokens

Defined in `src/style.css` under `@theme`:

| Token            | Value     | Use                                |
| ---------------- | --------- | ---------------------------------- |
| `--color-tomato` | `#C8102E` | Primary red — buttons, CTAs        |
| `--color-cream`  | `#FFF8EC` | Page background — warm & inviting  |
| `--color-gold`   | `#F4B400` | Accent — badges, highlights        |
| `--color-azure`  | `#2F6FED` | Soft accent — info, trust          |
| `--color-charcoal` | `#1A1410` | Body text, dark section bg       |
