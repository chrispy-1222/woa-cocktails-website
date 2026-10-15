// ─────────────────────────────────────────────────────────────────────────
// PUBLIC PRICING — SINGLE SOURCE OF TRUTH
//
// Every public price that appears anywhere on the site renders from this
// file: the pricing page, the four service pages, the home services rail
// and the paid /mobile-bar-cart landing page, in BOTH languages.
//
// RULE: no dollar figure is hard-coded anywhere else. If a price changes,
// it changes HERE, once, and every surface follows. `npm run check:prices`
// (scripts/check-prices.mjs) fails the build if a stray figure shows up in
// a page or content file.
//
// Figures below are the public rates confirmed by the client (Fabio),
// Oct 15 2026 alignment. Add-ons and optional services are deliberately
// NOT on the site — they live on the separate sheet the client keeps.
// ─────────────────────────────────────────────────────────────────────────
import type { Lang } from './ui';

/** The confirmed figures. This object is the only place they are written. */
const AMOUNT = {
  bartending: '$275',
  mobileBar: '$850',
  classes: '$55',
  rentalsFrom: '$125',
  rentalsTo: '$650',
} as const;

/** Mixology classes book from this many participants. */
export const CLASS_MIN = 12;

export type ServiceKey = 'bartending' | 'mobilebar' | 'classes' | 'rentals';

export interface ServicePrice {
  key: ServiceKey;
  /** Canonical (EN) path for the service page this price belongs to. */
  path: string;
  /** The headline figure, rendered large. */
  amount: string;
  /**
   * Qualifier that follows the figure, where one adds information:
   * "per person", "to $650". Services that are simply "starting at X" have
   * no qualifier, so the label alone reads correctly.
   */
  unit?: Record<Lang, string>;
  /** Compact inline label for cards and chips, e.g. "from $275". */
  from: Record<Lang, string>;
  /** Service name, as the client words it. */
  name: Record<Lang, string>;
  /** Booking condition shown under the price, where one applies. */
  condition?: Record<Lang, string>;
}

export const PRICING: Record<ServiceKey, ServicePrice> = {
  bartending: {
    key: 'bartending',
    path: '/staffing',
    amount: AMOUNT.bartending,
    from: { en: `from ${AMOUNT.bartending}`, es: `desde ${AMOUNT.bartending}` },
    name: { en: 'Bartending services', es: 'Servicios de bartender' },
  },
  mobilebar: {
    key: 'mobilebar',
    path: '/mobile-bar',
    amount: AMOUNT.mobileBar,
    from: { en: `from ${AMOUNT.mobileBar}`, es: `desde ${AMOUNT.mobileBar}` },
    name: { en: 'Full mobile bar experience', es: 'Experiencia completa de barra móvil' },
  },
  classes: {
    key: 'classes',
    path: '/classes',
    amount: AMOUNT.classes,
    unit: { en: 'per person', es: 'por persona' },
    from: { en: `${AMOUNT.classes} per person`, es: `${AMOUNT.classes} por persona` },
    name: { en: 'Mixology classes', es: 'Clases de coctelería' },
    condition: {
      en: `${CLASS_MIN} participant minimum`,
      es: `mínimo ${CLASS_MIN} participantes`,
    },
  },
  rentals: {
    key: 'rentals',
    path: '/bar-rentals',
    amount: AMOUNT.rentalsFrom,
    unit: { en: `to ${AMOUNT.rentalsTo}`, es: `a ${AMOUNT.rentalsTo}` },
    from: {
      en: `${AMOUNT.rentalsFrom} to ${AMOUNT.rentalsTo}`,
      es: `de ${AMOUNT.rentalsFrom} a ${AMOUNT.rentalsTo}`,
    },
    name: { en: 'Bar rentals', es: 'Renta de barras' },
  },
};

/**
 * The four core service lines, in the order the client presents them.
 * Used by the pricing page, the home rail and the landing page strip so the
 * running order never drifts between surfaces either.
 */
export const PRICE_ORDER: ServiceKey[] = ['bartending', 'mobilebar', 'classes', 'rentals'];

/** The four price lines, in order, for a locale. */
export function priceLines(lang: Lang) {
  return PRICE_ORDER.map((k) => ({
    ...PRICING[k],
    label: PRICING[k].name[lang],
    fromLabel: PRICING[k].from[lang],
    unitLabel: PRICING[k].unit?.[lang],
    conditionLabel: PRICING[k].condition?.[lang],
  }));
}

/** Shorthand: the compact "from $X" label for one service. */
export function priceFrom(key: ServiceKey, lang: Lang): string {
  return PRICING[key].from[lang];
}
