# Porting guide — WOA Cocktails React/Babel prototype → Astro

You are converting ONE page of a luxury-hospitality marketing site from the
original React-via-Babel prototype into a static Astro page. The goal is a
**pixel-perfect** recreation. The CSS is already in place and unchanged — your
job is only to reproduce the markup + behavior.

## Source of truth
- Prototype project dir: `/Users/christianbusiness/WOA-Cocktails-Website-Revision-2026/woa-cocktails/project/`
- Each page has a section file (`woa-*.jsx`) defining the section components and
  an app shell (`woa-*-app.jsx`) showing the **order** the sections render in and
  the wrapping `<main class="...">`.
- Shared sections (Nav, Footer) live in `woa-sections.jsx` — you do NOT port
  these; the Astro `Layout` already renders `<Nav/>` and `<Footer/>`.
- Reference example of a finished port: `site/src/pages/index.astro`. Match its style.

## Output
Write a single file `site/src/pages/<route>.astro`:

```astro
---
import Layout from '../layouts/Layout.astro';
// any data arrays the sections used (copy them from the JSX)
---
<Layout title="<exact title>" description="<exact description>" styles={[/* page css files */]}>
  <main class="<wrapper class from app shell>">
    {/* sections in order */}
  </main>
</Layout>
```

- The Layout already emits `<html><head>` (with fonts + global `woa-styles.css`)
  `<body><Nav/><slot/><Footer/>`. Do NOT add html/head/body, Nav, Footer, the
  font links, or `woa-styles.css`. Pass ONLY page-specific stylesheets via
  `styles` (filenames under `/styles`, in source order).
- If the app shell renders sections directly without a `<main>` wrapper (e.g. the
  About page renders `<About_Body/>` bare), then render the content bare too.

## DROP these prototype/design-tool artifacts entirely
- `TweaksPanel`, `TweakSection`, `TweakColor`, `TweakSelect`, `TweakRadio`,
  `TweakToggle` and anything from `tweaks-panel.jsx`.
- `useTweaks(...)`, the `--crimson`/`--display` `useEffect`, FONT_MAP, market/accent
  state used only to feed Tweaks. (CSS already defaults `--crimson:#C5302D` and
  Cormorant, so the default look is correct.)
- `Object.assign(window, {...})`, `ReactDOM.createRoot(...).render(...)`.
- `window.__resources` lookups: `(window.__resources && window.__resources.mbWindow) || "img/x.webp"` → just use `/img/x.webp`.

If a section's content depends on a tweak/market value, hardcode the **default**
branch (`market === 'nyc'`, `heroVariant === 'a'`) exactly as the prototype would
render it by default.

## JSX → Astro transforms
- `className` → `class`; `htmlFor` → `for`.
- Inline `style={{ camelCase: value }}` → `style="kebab-case:value;..."`.
  - Numeric values get `px` (`marginTop: 16` → `margin-top:16px`).
  - EXCEPT unitless properties keep the bare number: `lineHeight`, `fontWeight`,
    `flex`, `flexGrow`, `flexShrink`, `opacity`, `zIndex`, `order`, `gridColumn`/
    `gridRow` line values. (`lineHeight: 1.7` → `line-height:1.7`.)
  - String values pass through (`maxWidth: "44ch"` → `max-width:44ch`).
- SVG attributes use HTML names: `strokeWidth`→`stroke-width`,
  `strokeLinecap`→`stroke-linecap`, `strokeLinejoin`→`stroke-linejoin`,
  `fillRule`→`fill-rule`, `clipRule`→`clip-rule`, `viewBox` stays `viewBox`.
- `{cond && <X/>}`, `arr.map(...)`, fragments `<>...</>`, and `{`tmpl ${x}`}` all
  work unchanged in Astro templates. `key={...}` props can be dropped (Astro
  doesn't need them, but leaving them is harmless).
- Preserve EXACTLY: all visible text, `&amp;`/`&nbsp;`/`&hellip;` entities, alt
  text, `aria-*`, `id`, `role`, and every CSS class name.

## Internal links — rewrite `*.html` → routes
`Home Page.html`→`/` · `Mobile Bar.html`→`/mobile-bar` ·
`Brand Experiences.html`→`/brand-experiences` · `Staffing.html`→`/staffing` ·
`Classes.html`→`/classes` · `About.html`→`/about` · `Contact.html`→`/contact` ·
`Pricing.html`→`/pricing`. Keep same-page `#anchor` links as-is. Leave `href="#"`
placeholders and external/`mailto:`/`tel:` links unchanged.

## Interactivity (no React)
Any React state/hooks (FAQ accordions, tabs, filters, toggles, sliders,
scroll-reveal) must be reproduced with a small vanilla `<script>` at the bottom of
the `.astro` file, using `data-*` attributes + `classList` toggles so behavior and
the resulting class names match the prototype. Astro bundles `<script>` tags
automatically. Do NOT install or import React. If a section is purely
presentational, no script is needed.

## Do NOT
- Do NOT run `npm run build` / `astro build` / `astro check` (parallel runs clash);
  just write the file. The orchestrator builds at the end.
- Do NOT edit any CSS, the Layout, Nav, Footer, or other pages.
- Do NOT add new dependencies.
