import { ui, defaultLang, type Lang } from './ui';

/** Translate a chrome string key for a locale (falls back to EN, then the key). */
export function t(lang: Lang, key: keyof (typeof ui)['en']): string {
  return (ui[lang]?.[key] as string) ?? (ui.en[key] as string) ?? (key as string);
}

/** Strip a leading `/es` to get the canonical (EN) path. */
export function stripLocale(pathname: string): string {
  const p = pathname.replace(/\/+$/, '') || '/';
  if (p === '/es') return '/';
  if (p.startsWith('/es/')) return p.slice(3); // '/es/foo' -> '/foo'
  return p;
}

/** Prefix a canonical EN path (may include a #hash) for a locale. */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  if (path === '/') return '/es';
  return '/es' + path; // '/contact' -> '/es/contact'; '/#about' -> '/es/#about'
}

/** Detect the locale from a pathname. */
export function getLang(pathname: string): Lang {
  const p = pathname.replace(/\/+$/, '') || '/';
  return p === '/es' || p.startsWith('/es/') ? 'es' : 'en';
}

/**
 * hreflang + canonical alternates for the current page.
 * Returns absolute URLs built from `site`.
 */
export function alternates(pathname: string, site: URL | undefined) {
  const base = stripLocale(pathname);
  const origin = site ? site.origin : '';
  // Build dir-format URLs WITH a trailing slash so each hreflang/x-default href
  // byte-matches the page's canonical (…/about/) and the sitemap loc. Google
  // ignores hreflang alternates that don't exactly match the canonical URL, so a
  // missing slash here silently breaks the EN↔ES pairing.
  const abs = (p: string) => origin + (p.endsWith('/') ? p : p + '/');
  return {
    en: abs(localizePath(base, 'en')),
    es: abs(localizePath(base, 'es')),
    xDefault: abs(localizePath(base, 'en')),
  };
}
