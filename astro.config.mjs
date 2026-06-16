// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// WOA Cocktails — static, bilingual (EN default + ES under /es) marketing site.
// Every page is pre-rendered to plain HTML (great SEO); interactivity ships as
// tiny vanilla <script> islands, so the JS payload stays near zero.
//
// NOTE: `site` is the current live domain. When the custom domain (woacocktails.com)
// is connected in Vercel, change this to https://woacocktails.com so canonical
// URLs, hreflang alternates, and the sitemap point at the real domain.
export default defineConfig({
  site: 'https://woa-cocktails.vercel.app',
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
