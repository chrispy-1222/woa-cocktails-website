// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// WOA Cocktails — static, bilingual (EN default + ES under /es) marketing site.
// Every page is pre-rendered to plain HTML (great SEO); interactivity ships as
// tiny vanilla <script> islands, so the JS payload stays near zero.
//
// `site` is the production domain — used for canonical URLs, hreflang alternates,
// and the sitemap. Apex (woacocktails.com) 308-redirects to www in Vercel, so the
// canonical host is the www version.
export default defineConfig({
  site: 'https://www.woacocktails.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false, // English at /, Spanish at /es
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
      serialize(item) {
        // Stamp lastmod at build time so Google re-crawls and replaces stale
        // pre-redesign titles still cached from the old Squarespace site
        // (e.g. /classes was indexed as "RSVP").
        item.lastmod = new Date().toISOString();
        // Mirror the on-page hreflang: add an x-default alternate pointing at
        // the English URL so the sitemap and HTML head agree.
        if (item.links && item.links.length) {
          const en = item.links.find((l) => l.lang === 'en');
          if (en && !item.links.some((l) => l.lang === 'x-default')) {
            item.links.push({ lang: 'x-default', url: en.url });
          }
        }
        return item;
      },
    }),
  ],
});
