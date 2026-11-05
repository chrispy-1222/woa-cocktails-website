# WOA Cocktails — Performance / SEO / A11y fix plan (handoff)

Handoff doc for a follow-up chat/agent. The site is **live and healthy**; this is
optimization, not bug-fixing. Goal: raise mobile Performance + Accessibility + fix
one CLS issue, **without changing the visual design**. SEO is already 100.

## Project facts
- Astro static site in `site/`. EN at `/`, ES at `/es/*` (bilingual — changes to
  shared `src/components` / `src/layouts` apply to both; page-body changes must be
  mirrored in `src/pages/*` **and** `src/pages/es/*`).
- Live: **https://www.woacocktails.com** (Vercel, git push to `main` auto-deploys).
- Photography: plain `<img src="/img/…">` from `site/public/img/` (NOT processed by
  Astro). Interactivity is tiny inline vanilla JS (TBT is already 0 ms).
- Don't break: the dark luxury design, the Calendly/Tally embeds, the cookie banner.

## Lighthouse scorecard (live, 2026-06-16 — local Lighthouse, PSI quota was exhausted)
Representative pages; ES mirrors EN, sibling service pages ≈ Mobile Bar, Terms ≈ Privacy.

| Page | Device | Perf | A11y | BestPr | SEO | LCP | CLS |
|---|---|---|---|---|---|---|---|
| Home | Mobile | **78** | 94 | 100 | 100 | 5.5s | 0.01 |
| Home | Desktop | 82 | 94 | 100 | 100 | 1.2s | **0.27** |
| Mobile Bar (service) | Mobile | **71** | 94 | 100 | 100 | 5.1s | 0 |
| Mobile Bar | Desktop | 99 | 94 | 100 | 100 | 0.9s | 0 |
| Contact | Mobile | **56** | 95 | **77** | 100 | **25.4s** | 0 |
| Contact | Desktop | 98 | 95 | **77** | 100 | 0.8s | 0.08 |
| About | Mobile | **69** | 96 | 100 | 100 | 6.4s | 0 |
| Privacy | Mobile | 86 | 90 | 100 | 100 | 3.1s | 0 |
| Pricing | Mobile | 81 | 94 | 100 | 100 | 3.6s | 0 |

**Read:** SEO 100 everywhere ✅. Best-Practices 100 except Contact (third-party
embeds). TBT 0 ms everywhere ✅. Weak spots = **mobile Performance (images)**,
**Contact mobile (embeds, LCP 25s)**, **Home-desktop CLS 0.27**, **A11y 90–96**.

---

## P0 — Mobile performance: images (biggest lever)
Root cause: full-size images shipped to mobile. Lighthouse "Improve image delivery
≈ 868 KiB savings" + "unsized-images". Biggest offenders (home): `founder-fabio-portrait.jpg`
(~258 KiB savings), `hero-pour.jpg`, `cocktail-hector-mocktail.webp`, `class-hero.webp`,
`framed-founders.png`.

**Proper fix — adopt `astro:assets`:**
1. Move `public/img/*` → `src/assets/img/*`.
2. In each `.astro`, `import hero from '../assets/img/hero-bridge.jpg'` and use
   `<Image src={hero} alt="…" widths={[400,800,1200]} sizes="(max-width:720px) 100vw, 50vw" />`
   (auto AVIF/WebP, responsive `srcset`, intrinsic width/height → also kills CLS + unsized-images).
3. **LCP image per page** (hero / first feature img): add `loading="eager"` +
   `fetchpriority="high"` (Astro `<Image priority />`). Everything else stays `loading="lazy"`.
4. Mirror across EN + ES pages (same image imports; shared sections only need doing once).

**Lighter interim (if not migrating to astro:assets yet):** add explicit `width`/`height`
to every `<img>`, add `fetchpriority="high"` to each page's hero img, and pre-compress the
large source files (the .jpg/.png ones) to ~1600px WebP.

_Expected: mobile Perf 70s → 90+, LCP 5–6s → <2.5s._

## P0 — Drop unused web fonts (quick win, ~minutes)
The font `<link>` in `src/layouts/Layout.astro` loads **6 families**, but the CSS only
uses **Cormorant Garamond, Outfit, JetBrains Mono** (EB Garamond is just a fallback name).
**Bodoni Moda, Italiana, Playfair Display are unused** (leftover from the dropped Tweaks
font picker). Remove them from the Google Fonts URL → fewer requests + less render-blocking
(~380 ms). Optional next step: self-host the 3 used families (woff2 + `font-display:swap` +
`<link rel="preload">`) to remove the third-party render-blocking stylesheet entirely.

## P1 — Contact mobile (Perf 56, LCP 25.4s, BestPractices 77)
Cause: Calendly + Tally `<iframe>`s load eagerly and dominate mobile load; third-party
cookies drop Best-Practices.
**Fix:** lazy-load both embeds — render a lightweight placeholder ("Load scheduler") and
inject the iframe on click, OR via `IntersectionObserver` when scrolled near. Keep the
`#schedule` / `#inquiry-form` anchors working (load immediately if the URL has that hash).
Files: `src/pages/contact.astro` + `src/pages/es/contact.astro`.
_Expected: Contact mobile Perf 56 → 85+, LCP 25s → <3s._

## P1 — Home desktop CLS (0.27)
Most of this is unsized images reflowing + display-font swap shifting the big headline.
P0 image dimensions fix most of it. Also preload the display font (Cormorant) and/or add a
fallback `size-adjust`/`@font-face` metric override to cut the swap shift. Verify with
`npx lighthouse <url> --preset=desktop` → CLS should drop <0.1.

## P1 — Accessibility (90–96 → 100)
Concrete failures found:
- **color-contrast**: dim text tokens fail AA — `--fg-dim`(0.62)/`--fg-mute`(0.40) on dark,
  and the **`.btn-solid`** crimson button with ivory text (~3.5:1). Fixes: bump `--fg-mute`/
  `--fg-dim` alpha (e.g. mute 0.40→0.55), and for `.btn-solid` darken bg to `--crimson-deep`
  or enlarge/bolden text. Tune in `public/styles/woa-styles.css`.
- **label-content-name-mismatch**: the logo `<a aria-label="WOA — Work Of Art · Home">` —
  accessible name doesn't contain the visible "Work · Of · Art". Fix the `aria-label` in
  `src/components/Nav.astro` to start with the visible text (or drop the custom label).
- **heading-order**: footer uses `<h4>` with no preceding h2/h3 on some pages. Normalize
  heading levels (footer headings → `<h2>`/styled, or appropriate level) in `Footer.astro`.
- **unsized-images**: fixed by P0.

## P2 — Best-Practices on Contact (77)
Driven by third-party-cookie / console warnings from Calendly+Tally. P1 lazy-load reduces
exposure. Otherwise largely inherent to the embeds; acceptable.

## How to verify
```
cd site && npm run build         # ensure no errors
npx lighthouse https://www.woacocktails.com/ --only-categories=performance,accessibility,best-practices,seo --quiet --chrome-flags="--headless=new"
npx lighthouse https://www.woacocktails.com/ --preset=desktop ...   # for desktop/CLS
```
Re-run on home, a service page, contact, about. Targets: mobile Perf ≥90, CLS <0.1, A11y 100, SEO 100.

## Constraints
- Keep the design pixel-identical; near-zero JS; bilingual parity (EN+ES).
- Vercel Hobby; static output. Push to `main` to deploy.
- See also `site/PORTING.md`, `site/SPANISH-GUIDE.md`, and the project memory.
