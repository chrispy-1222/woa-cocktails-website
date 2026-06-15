// @ts-check
import { defineConfig } from 'astro/config';

// WOA Cocktails — static marketing site.
// Every page is pre-rendered to plain HTML (great SEO); interactivity
// (nav drawer, services dropdown, gallery filter, FAQ accordions) ships as
// tiny vanilla <script> islands, so the JS payload stays near zero.
export default defineConfig({
  site: 'https://woacocktails.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
