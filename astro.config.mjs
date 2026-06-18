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
    }),
  ],
});
