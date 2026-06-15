# WOA Cocktails — Website

Marketing site for **WOA Cocktails**, a luxury hospitality & beverage house serving New York & Miami.

Built with [Astro](https://astro.build) as a fully static, pre-rendered site (great SEO, near‑zero JavaScript). Interactivity — the mobile nav drawer, services dropdown, team rolodex, scroll reveals — ships as tiny inline vanilla scripts; no framework runtime is shipped to the browser.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/mobile-bar` | Mobile Bar Experience (Service 01) |
| `/brand-experiences` | Brand & Hospitality Experiences (Service 02) |
| `/staffing` | Bartending & Hospitality Staffing (Service 03) |
| `/classes` | Mixology Private Classes (Service 04) |
| `/about` | About / Founders |
| `/contact` | Contact & Book (live Calendly + Tally embeds) |
| `/pricing` | Packages & Pricing |

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:4321)
npm run build    # build the static site to ./dist
npm run preview  # preview the production build locally
```

Requires Node 18+ (developed on Node 22).

## Project structure

```
src/
  layouts/Layout.astro      # <head>, fonts, global CSS, renders Nav + page + Footer
  components/Nav.astro       # shared top nav (scroll state, mobile drawer, services dropdown)
  components/Footer.astro    # shared footer
  pages/*.astro              # one file per route
public/
  styles/*.css               # design-system stylesheets (global + per page)
  img/*                       # photography
  favicon.svg
```

## Design system

- **Palette:** crimson `#C5302D`, deep wine `#8B2421`, warm amber `#D2A05C`, petrol `#0F1A1D`, warm charcoal `#0B0907`, ivory `#EBE3D2`.
- **Type:** Cormorant Garamond (display), Outfit (UI/body), JetBrains Mono (eyebrow labels).
- Mobile‑first: every layout holds at iPhone widths (375–414px).

## Deployment

Hosted on [Vercel](https://vercel.com) as a static build (`astro build` → `dist/`). Connected to this Git repository — pushes to the default branch deploy to production automatically; pull requests get preview deployments.

## Editing content

Page copy and data live inline in each `src/pages/*.astro` file (e.g. service lists, testimonials, pricing tables are plain arrays at the top of the file). Photography lives in `public/img`; replace a file in place (keeping the same name) to swap an image.
