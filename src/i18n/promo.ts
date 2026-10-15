// ─────────────────────────────────────────────────────────────────────────
// LIMITED-TIME PROMO MODULE — paid landing page only (/mobile-bar-cart).
//
// SWAPPABLE AND TIME-BOXED, by design:
//
//   • To pull the promo early:  set `active: false` below. The offer band,
//     the hero pill and the promo line in the booking section all disappear
//     in one edit, and nothing else on the page changes.
//   • After the deadline:       the module switches itself off. `isPromoLive()`
//     compares BOOK_BY against the build date, so the first deploy after
//     Dec 22 2026 ships the page without the offer even if nobody edits a
//     file. (The site is statically built, so the window closes on the next
//     build or deploy, not mid-session on a cached page.)
//   • To run the next promo:    replace BOOK_BY and the copy below. The
//     markup in MobileBarCartLanding.astro stays as is.
//
// COPY IS CLIENT-APPROVED. The English strings are published exactly as the
// client signed them off on Oct 15 2026. Do not reword them. The Spanish is a
// faithful translation of the same offer for the /es landing page.
// ─────────────────────────────────────────────────────────────────────────
import type { Lang } from './ui';

/** Master switch. Set to false to pull the promo everywhere it renders. */
const ACTIVE = true;

/** Last day to book, as the client worded it. End of day, US Eastern. */
const BOOK_BY = '2026-12-22T23:59:59-05:00';

/** True when the promo should render in this build. */
export function isPromoLive(now: Date = new Date()): boolean {
  return ACTIVE && now.getTime() <= Date.parse(BOOK_BY);
}

export interface PromoTerm {
  n: string;
  t: string;
}

export interface PromoCopy {
  /** Short tag on the hero pill. */
  pillTag: string;
  /** Hero pill text, lifted verbatim from the approved sentence. */
  pillText: string;
  /** Section eyebrow. */
  eyebrow: string;
  /** Approved sentence 1, split across two display lines (wording unchanged). */
  headLine1: string;
  headLine2: string;
  /** Approved sentence 2, verbatim. */
  lead: string;
  /** Terms shown near the offer, verbatim. */
  termsLabel: string;
  terms: PromoTerm[];
  /** Accessible label for the section. */
  aria: string;
}

export const promoCopy: Record<Lang, PromoCopy> = {
  en: {
    pillTag: 'Limited time',
    pillText: 'one extra hour of full mobile bar service',
    eyebrow: 'The offer',
    headLine1: 'Celebrate Art Basel',
    headLine2: 'and the holidays with WOA.',
    lead: 'Enjoy one extra hour of full mobile bar service on us when you book by December 22, 2026.',
    termsLabel: 'Terms',
    terms: [
      { n: '01', t: 'Complimentary hour is added to a qualifying paid full mobile bar experience booking.' },
      { n: '02', t: 'Standard minimum booking requirements apply.' },
      { n: '03', t: 'Book by December 22, 2026.' },
    ],
    aria: 'Limited-time offer',
  },
  es: {
    pillTag: 'Por tiempo limitado',
    pillText: 'una hora extra de servicio completo de barra móvil',
    eyebrow: 'La oferta',
    headLine1: 'Celebre Art Basel',
    headLine2: 'y las fiestas con WOA.',
    lead: 'Disfrute una hora extra de servicio completo de barra móvil cortesía de la casa al reservar antes del 22 de diciembre de 2026.',
    termsLabel: 'Términos',
    terms: [
      { n: '01', t: 'La hora de cortesía se agrega a una reserva pagada que califique de la experiencia completa de barra móvil.' },
      { n: '02', t: 'Aplican los requisitos mínimos de reserva habituales.' },
      { n: '03', t: 'Reserve antes del 22 de diciembre de 2026.' },
    ],
    aria: 'Oferta por tiempo limitado',
  },
};
