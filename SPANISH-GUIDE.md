# Spanish (/es) translation guide — WOA Cocktails

You are creating the **Spanish version** of ONE page by translating its English
Astro page. Goal: a natural, professional **Latin-American Spanish** page that is
pixel-identical in layout to the English one — only the text changes.

## Output
- Read the English page at `site/src/pages/<PAGE>.astro`.
- Write the Spanish page to `site/src/pages/es/<PAGE>.astro` (create the `es/` folder).
- Keep the EXACT same structure, CSS classes, element ids, inline styles, images,
  `<script>` blocks, and `styles={[...]}` / `headScripts={[...]}` props. Only translate
  human-visible text (and `alt`/`aria-label`/`title` text).

## The Layout (critical)
Change the `<Layout ...>` open tag to include `lang="es"`:
```astro
<Layout lang="es" title="<translated title>" description="<translated meta description>" styles={[...]}>
```
The Layout, Nav, Footer, and cookie banner translate themselves from `lang="es"` —
do NOT touch those; just set `lang="es"` and translate the page body + title + meta.

## Internal links → add the `/es` prefix
Every internal link in the body must point to the Spanish route:
`/` → `/es`, `/contact` → `/es/contact`, `/mobile-bar` → `/es/mobile-bar`,
`/pricing` → `/es/pricing`, `/privacy` → `/es/privacy`, `/terms` → `/es/terms`, etc.
Same-page hash links stay (`#services`, `#founders`, `#inquiry-form` …) — keep the
section `id`s unchanged so anchors + scripts keep working.
Leave `mailto:`, `tel:`, external URLs, and the Calendly/Tally embeds UNCHANGED.

## Register: usted for CTAs, tú/neutral for body
- **CTAs / action prompts** (buttons, links that ask the reader to act) → **usted**
  imperative: "Reserve", "Reserve ahora", "Solicite una cotización", "Conozca más",
  "Explore los servicios", "Hable con Fabio", "Comience una consulta".
- **Body copy, headlines, descriptions** → tú or neutral third-person is fine; keep it
  warm and editorial. Don't force tú where the sentence is descriptive.
- **Legal pages (privacy, terms)** → formal **usted** throughout ("su información",
  "usted acepta"). Match the existing formal legal register.

## Glossary (use consistently)
- WOA, Work of Art → keep as-is. Proper nouns keep: Hector, Fabio, Soho House,
  Dumbo House, Puma, Style Bender, Brooklyn, Brickell, Coral Gables, Instagram, TikTok,
  Calendly, Tally. **New York → Nueva York**; Miami → Miami.
- mobile bar → barra móvil · bartender(s) → bartender(es) · cocktail(s) → cócteles ·
  mixology → coctelería · hospitality → hospitalidad · beverage house → casa de bebidas ·
  event(s) → evento(s) · wedding(s) → boda(s) · corporate → corporativo ·
  staffing → personal / dotación de personal · bar takeover → toma de bar ·
  (beverage) consulting → consultoría (de bebidas) · rooftop → rooftop · brand activation → activación de marca ·
  signature cocktail → cóctel de autor · host(s) → anfitrión/anfitriones · captain → capitán · barback → barback.
- "Book Now" → "Reserve ahora" · "Inquire / Inquire for your event" → "Solicite su evento" ·
  "Request a Quote / Get a quote" → "Solicite una cotización" · "Learn more" → "Conozca más" ·
  "Explore services" → "Explore los servicios" · "now booking" → "reservas abiertas" ·
  "Est. 2020 / Founded 2020" → "Desde 2020 / Fundada en 2020".
- Stats: "combined experience" → "de experiencia combinada"; "events curated" →
  "eventos producidos"; "active markets" → "mercados activos". Keep the numbers (25yr →
  "25 años" where it's the long form; keep "25yr"/"500+"/"12X" numeric tokens as shown if they're stylized stat figures — translate the label beneath, not the figure).
- Dates: "June 16, 2026" → "16 de junio de 2026". "Last updated" → "Última actualización".
- Titles/meta: translate naturally and keep them keyword-rich for SEO, e.g.
  "Mobile Bar Experience — WOA Cocktails" → "Experiencia de barra móvil — WOA Cocktails".
  Home title → "WOA Cocktails — Casa de hospitalidad y bebidas de lujo · NYC y Miami".

## Examples
- Hero: `A work of <em>art</em><br />in every pour.` → `Una obra de <em>arte</em><br />en cada trago.`
- Eyebrow: "A Hospitality & Beverage House · Est. 2020" → "Una casa de hospitalidad y bebidas · Desde 2020"
- Button: `Inquire for your event <span class="arr">→</span>` → `Solicite su evento <span class="arr">→</span>`

## Do NOT
- Do NOT run the build (`astro build`/`check`) — the orchestrator builds at the end.
- Do NOT edit CSS, the Layout, Nav, Footer, CookieConsent, i18n files, or English pages.
- Do NOT change the Calendly/Tally embed URLs or any `<script>` logic — only visible strings.
