// Copy for the Bar Rentals service page (EN + ES).
//
// Bar rentals became a core service line at the Oct 15 2026 alignment, with a
// public range. Every figure is interpolated from src/i18n/pricing.ts, so the
// cross-references in the FAQ (bartending, the full mobile bar) can never fall
// out of step with the pricing page.
//
// House style: no em dashes in client-facing copy.
import type { Lang } from './ui';
import { priceFrom } from './pricing';

export interface BrItem { n: string; h: string; p: string }
export interface BrStep { n: string; t: string; d: string }
export interface BrShot { alt: string; cap: string }

export interface BarRentalsCopy {
  meta: { title: string; description: string };
  hero: {
    bgAlt: string;
    eyebrow: string;
    title1: string;
    titleEm: string;
    lede: string;
    aside: string;
    priceLabel: string;
    metaLeft: string;
    metaRight: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  get: { ix: string; title: string; titleIt: string; items: BrItem[] };
  ideal: { ix: string; title: string; titleIt: string; chips: string[]; note: string };
  how: { ix: string; title: string; titleIt: string; steps: BrStep[] };
  gallery: { ix: string; title: string; titleIt: string; shots: BrShot[] };
  faq: { ix: string; eyebrow: string; title: string; titleIt: string; items: { q: string; a: string }[] };
  cta: { eyebrow: string; title: string; titleIt: string; body: string; primary: string; secondary: string };
}

export function barRentalsCopy(lang: Lang): BarRentalsCopy {
  const rental = priceFrom('rentals', lang);
  const bartending = priceFrom('bartending', lang);
  const mobileBar = priceFrom('mobilebar', lang);

  if (lang === 'es') {
    return {
      meta: {
        title: 'Renta de barras en Miami | WOA Cocktails',
        description: `Rente una barra de WOA para su evento en Miami, Miami Beach o Brickell. Entrega, montaje y recogida incluidos. Rango público: ${rental}.`,
      },
      hero: {
        bgAlt: 'Barra blanca de WOA con el medallón dorado, montada y lista para servir en una inauguración',
        eyebrow: 'Servicio 05 · Solo la barra',
        title1: 'Rente la barra.',
        titleEm: 'Usted manda.',
        lede: 'Entregamos y montamos una barra de WOA en su espacio. De ahí en adelante, la noche es suya: usted la abastece, usted la atiende, usted decide.',
        aside: 'La barra llega estilizada y lista para servir, no desarmada en una caja. Nosotros la entregamos, la colocamos y la recogemos al final.',
        priceLabel: 'Rango público',
        metaLeft: 'Miami · Miami Beach · Brickell',
        metaRight: 'Entrega · Montaje · Recogida',
        ctaPrimary: 'Solicite una renta de barra',
        ctaSecondary: 'Ver todos los precios',
      },
      get: {
        ix: '[ 01 / Qué incluye ]',
        title: 'La barra, lista. ',
        titleIt: 'El resto, suyo.',
        items: [
          { n: '01', h: 'La barra, entregada', p: 'La barra de WOA que prefiera, desde el carrito compacto hasta la barra frontal completa, llevada a su venue y colocada en su lugar.' },
          { n: '02', h: 'Estilizada y lista para servir', p: 'Llega terminada y presentable, con su frente y su superficie listos para recibir invitados.' },
          { n: '03', h: 'Montaje y recogida', p: 'Nos encargamos de la entrega, la colocación y la recogida al terminar la noche.' },
          { n: '04', h: 'Suya para manejarla', p: 'Usted abastece los licores, pone a su gente detrás de la barra y sirve a su manera.' },
          { n: '05', h: 'Servicio que puede agregar', p: `Puede sumar bartenders de WOA (${bartending}) o pasar a la experiencia completa de barra móvil (${mobileBar}) en cualquier momento.` },
          { n: '06', h: 'Un rango claro', p: `El rango público va de ${rental}, según el modelo de barra, la fecha y el venue.` },
        ],
      },
      ideal: {
        ix: '[ 02 / Ideal para ]',
        title: 'Para cuando ya tiene ',
        titleIt: 'todo lo demás.',
        chips: ['Bodas', 'Eventos corporativos', 'Activaciones de marca', 'Fiestas privadas', 'Pop-ups', 'Sesiones de foto y contenido'],
        note: 'Si su venue ya tiene personal, o si usted solo necesita que la barra se vea impecable, la renta es el camino más directo.',
      },
      how: {
        ix: '[ 03 / Cómo funciona ]',
        title: 'Cuatro pasos, ',
        titleIt: 'sin vueltas.',
        steps: [
          { n: '01', t: 'Cuéntenos la fecha', d: 'Fecha, venue y horario. Confirmamos disponibilidad y acceso el mismo día.' },
          { n: '02', t: 'Elija la barra', d: 'Le mostramos los modelos disponibles para su espacio y le confirmamos el precio dentro del rango.' },
          { n: '03', t: 'Entregamos y montamos', d: 'Llegamos antes del evento, colocamos la barra y la dejamos lista para servir.' },
          { n: '04', t: 'Recogemos', d: 'Volvemos al final según lo acordado. Usted no mueve nada.' },
        ],
      },
      gallery: {
        ix: '[ 04 / Las barras ]',
        title: 'Las barras ',
        titleIt: 'en servicio.',
        shots: [
          { alt: 'Dos bartenders de WOA preparando cócteles detrás de una barra blanca con frente de caña en un evento al aire libre', cap: '[ barra con frente de caña · evento al aire libre ]' },
          { alt: 'Equipo de WOA detrás de una barra blanca acanalada en un patio con palmeras', cap: '[ barra acanalada · patio ]' },
          { alt: 'Invitada con un cóctel junto a una barra blanca de WOA en una activación al aire libre', cap: '[ activación · Brickell ]' },
        ],
      },
      faq: {
        ix: '[ PREGUNTAS ]',
        eyebrow: 'Sobre la renta',
        title: 'Antes de ',
        titleIt: 'reservar.',
        items: [
          { q: '¿Qué cubre el rango de precio?', a: `El rango de ${rental} cubre la barra: la entrega, el montaje y la recogida. El punto exacto dentro del rango depende del modelo que elija, la fecha y las condiciones del venue.` },
          { q: '¿Puedo agregar bartenders a una renta?', a: `Sí, en cualquier momento. Los servicios de bartender comienzan ${bartending} y se cotizan junto con la renta en una sola propuesta.` },
          { q: '¿Entregan en Miami Beach y Brickell?', a: 'Sí. Entregamos en todo Miami, incluidos Miami Beach, Brickell, Downtown, Wynwood y Coral Gables, y en el resto del Gran Sur de Florida. El viaje fuera de esos mercados se cotiza por separado.' },
          { q: '¿Ustedes abastecen la barra?', a: 'En una renta sola, no: usted compra y abastece. Aun así le damos guía de cantidades y una lista de compras para que no se quede corto.' },
          { q: '¿Y si prefiero que WOA maneje todo?', a: `Esa es la experiencia completa de barra móvil, ${mobileBar}, con bartender, menú personalizado, mixers, garnishes y hielo incluidos.` },
        ],
      },
      cta: {
        eyebrow: 'Siguiente paso',
        title: 'Reserve ',
        titleIt: 'su barra.',
        body: 'Díganos la fecha y el venue. Le confirmamos disponibilidad y el precio exacto dentro del rango.',
        primary: 'Solicite una renta de barra',
        secondary: 'Ver todos los precios',
      },
    };
  }

  return {
    meta: {
      title: 'Bar Rentals in Miami | WOA Cocktails',
      description: `Rent a WOA bar for your event in Miami, Miami Beach or Brickell. Delivery, setup and pickup included. Public range: ${rental}.`,
    },
    hero: {
      bgAlt: 'A white WOA bar with the gold medallion front, set up and ready to serve at a grand opening',
      eyebrow: 'Service 05 · Bar only',
      title1: 'Rent the bar.',
      titleEm: 'Run the night.',
      lede: 'We deliver and set up a WOA bar at your venue. From there the night is yours to run: your stock, your people, your call.',
      aside: 'The bar arrives styled and service ready, not flat packed in a crate. We deliver it, place it and collect it at the end.',
      priceLabel: 'Public range',
      metaLeft: 'Miami · Miami Beach · Brickell',
      metaRight: 'Delivery · Setup · Pickup',
      ctaPrimary: 'Inquire for a bar rental',
      ctaSecondary: 'See all pricing',
    },
    get: {
      ix: '[ 01 / What you get ]',
      title: 'The bar, handled. ',
      titleIt: 'The night, yours.',
      items: [
        { n: '01', h: 'The bar, delivered', p: 'Your pick of the WOA bar builds, from the compact cart to the full front bar, brought to your venue and set in place.' },
        { n: '02', h: 'Styled and service ready', p: 'It arrives finished and presentable, front and surface ready for guests.' },
        { n: '03', h: 'Setup and pickup', p: 'We handle delivery, placement and collection at the end of the night.' },
        { n: '04', h: 'Yours to run', p: 'Stock your own spirits, put your own people behind it and pour on your own terms.' },
        { n: '05', h: 'Service you can add', p: `Add WOA bartenders (${bartending}) or step up to the full mobile bar experience (${mobileBar}) at any point.` },
        { n: '06', h: 'A clear range', p: `The public range runs ${rental}, set by the build you choose, the date and the venue.` },
      ],
    },
    ideal: {
      ix: '[ 02 / Ideal for ]',
      title: 'For when you already have ',
      titleIt: 'everything else.',
      chips: ['Weddings', 'Corporate events', 'Brand activations', 'Private parties', 'Pop-ups', 'Photo and content shoots'],
      note: 'If your venue already has staff, or you simply need the bar itself to look right, a rental is the shortest path there.',
    },
    how: {
      ix: '[ 03 / How it works ]',
      title: 'Four steps, ',
      titleIt: 'no fuss.',
      steps: [
        { n: '01', t: 'Tell us the date', d: 'Date, venue and window. We confirm availability and access the same day.' },
        { n: '02', t: 'Pick the build', d: 'We show you the builds that suit your space and confirm where it lands in the range.' },
        { n: '03', t: 'We deliver and set up', d: 'We arrive ahead of the event, place the bar and leave it service ready.' },
        { n: '04', t: 'We collect', d: 'We come back at the agreed time. You move nothing.' },
      ],
    },
    gallery: {
      ix: '[ 04 / The builds ]',
      title: 'The bars ',
      titleIt: 'in service.',
      shots: [
        { alt: 'Two WOA bartenders shaking cocktails behind a white cane-front bar at an outdoor event', cap: '[ cane-front bar · outdoor event ]' },
        { alt: 'The WOA team behind a white fluted bar in a palm-lined courtyard', cap: '[ fluted bar · courtyard ]' },
        { alt: 'A guest with a cocktail beside a white WOA bar at an outdoor activation', cap: '[ activation · Brickell ]' },
      ],
    },
    faq: {
      ix: '[ FAQ ]',
      eyebrow: 'About renting',
      title: 'Before you ',
      titleIt: 'book.',
      items: [
        { q: 'What does the range cover?', a: `The ${rental} range covers the bar itself: delivery, setup and pickup. Where your rental lands in it depends on the build you choose, the date and the venue conditions.` },
        { q: 'Can I add bartenders to a rental?', a: `Yes, at any point. Bartending services start ${bartending} and are quoted alongside the rental as a single proposal.` },
        { q: 'Do you deliver to Miami Beach and Brickell?', a: 'Yes. We deliver across Miami, including Miami Beach, Brickell, Downtown, Wynwood and Coral Gables, and throughout Greater South Florida. Travel beyond those markets is quoted separately.' },
        { q: 'Do you stock the bar?', a: 'On a rental-only booking, no: you buy and stock it. We still send quantity guidance and a shopping list so you do not come up short.' },
        { q: 'What if I would rather WOA ran it all?', a: `That is the full mobile bar experience, ${mobileBar}, with a bartender, a custom menu, mixers, garnishes and ice included.` },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Reserve ',
      titleIt: 'your bar.',
      body: 'Tell us the date and the venue. We will confirm availability and exactly where your rental lands in the range.',
      primary: 'Inquire for a bar rental',
      secondary: 'See all pricing',
    },
  };
}
