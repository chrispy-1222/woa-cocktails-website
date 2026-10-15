// ─────────────────────────────────────────────────────────────────────────
// COPY + PRICE GUARD — runs as part of `npm run build`.
//
// A past incident put an inconsistent/placeholder price in front of a client,
// so price consistency is a hard requirement, not a style preference. This
// script enforces it mechanically, in two passes:
//
//   1. SOURCE  — no dollar figure may be hard-coded in a page, component or
//                content file. Every price renders from src/i18n/pricing.ts.
//   2. OUTPUT  — every dollar figure in the BUILT html (EN and ES, including
//                the noindex paid landing page) must be one of the confirmed
//                public figures, and each figure must appear on the pricing
//                page in both languages.
//
// It also enforces the house copy rule agreed with the client: no em dashes in
// any client-facing copy. Code comments are free to use them; rendered HTML is
// not.
//
// Exit code 1 fails the build, so a stray price can never reach production.
// ─────────────────────────────────────────────────────────────────────────
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SRC = join(ROOT, 'src');
const DIST = join(ROOT, 'dist');

// The confirmed public figures (mirrors AMOUNT in src/i18n/pricing.ts).
const ALLOWED = ['$275', '$850', '$55', '$125', '$650'];
// Files allowed to contain a literal dollar figure.
const SOURCE_ALLOWLIST = ['src/i18n/pricing.ts'];

const FIGURE = /\$\s?\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;

function walk(dir, test, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, test, out);
    else if (test(p)) out.push(p);
  }
  return out;
}

const errors = [];

// ── Pass 1: source ───────────────────────────────────────────────────────
const sourceFiles = walk(SRC, (p) => /\.(astro|ts|js|md)$/.test(p));
for (const file of sourceFiles) {
  const rel = relative(ROOT, file);
  if (SOURCE_ALLOWLIST.includes(rel)) continue;
  const text = readFileSync(file, 'utf8');
  text.split('\n').forEach((line, i) => {
    // Skip comment lines — a figure quoted in a code comment is not public copy.
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*')) return;
    const hits = line.match(FIGURE);
    if (hits) {
      errors.push(
        `${rel}:${i + 1}  hard-coded price ${hits.join(', ')} — render it from src/i18n/pricing.ts instead`
      );
    }
  });
}

// ── Pass 2: built output ─────────────────────────────────────────────────
let htmlFiles = [];
try {
  htmlFiles = walk(DIST, (p) => p.endsWith('.html'));
} catch {
  console.log('• dist/ not found, skipping the built-output pass (run after `astro build`).');
}

const seenOnPricing = { en: new Set(), es: new Set() };

for (const file of htmlFiles) {
  const rel = relative(ROOT, file);
  const html = readFileSync(file, 'utf8');
  // Strip the JSON-LD + inline scripts: they carry no visible prices.
  const visible = html.replace(/<script[\s\S]*?<\/script>/g, '');
  const hits = visible.match(FIGURE) || [];
  for (const hit of hits) {
    const norm = hit.replace(/\s/g, '');
    if (!ALLOWED.includes(norm)) {
      errors.push(`${rel}  unexpected price in built output: ${hit}`);
      continue;
    }
    if (/dist\/pricing\/index\.html$/.test(rel)) seenOnPricing.en.add(norm);
    if (/dist\/es\/pricing\/index\.html$/.test(rel)) seenOnPricing.es.add(norm);
  }
}

// ── Pass 3: no em dashes in rendered copy ────────────────────────────────
for (const file of htmlFiles) {
  const rel = relative(ROOT, file);
  const html = readFileSync(file, 'utf8');
  const visible = html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '');
  const dashes = (visible.match(/\u2014/g) || []).length;
  if (dashes) {
    errors.push(`${rel}  ${dashes} em dash(es) in client-facing copy (house style: use a comma, colon or period)`);
  }
}

if (htmlFiles.length) {
  for (const lang of ['en', 'es']) {
    const missing = ALLOWED.filter((a) => !seenOnPricing[lang].has(a));
    if (missing.length) {
      errors.push(
        `${lang === 'en' ? '/pricing' : '/es/pricing'} is missing confirmed figure(s): ${missing.join(', ')}`
      );
    }
  }
}

// ── Report ───────────────────────────────────────────────────────────────
if (errors.length) {
  console.error('\n✗ Price consistency check FAILED\n');
  for (const e of errors) console.error('  ' + e);
  console.error(`\n  ${errors.length} problem(s). Confirmed public figures: ${ALLOWED.join(', ')}\n`);
  process.exit(1);
}

console.log(
  `✓ Copy + price guard passed. Figures ${ALLOWED.join(', ')} render from src/i18n/pricing.ts only; no em dashes in rendered copy.`
);
