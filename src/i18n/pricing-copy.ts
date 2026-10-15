// Copy for the public pricing page (EN + ES).
//
// Strings only. Every dollar figure comes from src/i18n/pricing.ts, so a price
// can never drift between this page, the service pages and the landing page.
//
// NOTE: add-ons and optional services are deliberately absent. They live on the
// separate sheet the client keeps and must not appear on the site.
//
// House style: no em dashes in client-facing copy.
import type { Lang } from './ui';
import type { ServiceKey } from './pricing';

export interface PkgCopy {
  key: ServiceKey;
  n: string;
  sub: string;
  tag: string;
  includes: string[];
  note: string;
  cta: string;
}

export interface PricingCopy {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    stamp: string;
    title: string;
    lede: string;
    ledeEm: string;
    ledeTail: string;
  };
  startingLabel: string;
  includedLabel: string;
  noteLabel: string;
  packages: PkgCopy[];
  area: {
    ix: string;
    title: string;
    titleIt: string;
    intro: string;
    markets: { name: string; areas: string }[];
  };
  faq: { ix: string; eyebrow: string; title: string; titleIt: string; items: { q: string; a: string }[] };
  cta: { eyebrow: string; title: string; titleIt: string; body: string; primary: string; secondary: string };
}

const en: PricingCopy = {
  meta: {
    title: 'Pricing: Bartending, Mobile Bar, Classes & Bar Rentals | WOA Cocktails',
    description:
      'Starting prices for all four WOA services: bartending, the full mobile bar experience, mixology classes and bar rentals. Serving Miami, Miami Beach, Brickell and New York.',
  },
  hero: {
    eyebrow: 'Packages & Pricing',
    stamp: 'Rate Card · 2026',
    title: 'Pricing',
    lede: 'Four core services, each with a clear starting price. Every event is quoted to its own ',
    ledeEm: 'date, hours and guest count',
    ledeTail: ', so the figures below are where the conversation begins.',
  },
  startingLabel: 'Starting at',
  includedLabel: 'Included',
  noteLabel: 'Note',
  packages: [
    {
      key: 'bartending',
      n: '01',
      sub: 'Our team behind the bar. Yours, your venue’s, or ours.',
      tag: 'Most flexible',
      includes: [
        'WOA-trained bartenders, hosts, barbacks and event leads',
        'Uniformed and presentation ready',
        'Pre-event briefing and venue walkthrough',
        'An event lead assigned on larger events',
        'Service behind your bar, your venue’s bar or ours',
      ],
      note: 'Your quote scales with team size, hours and event format. Travel within Miami and New York is included.',
      cta: 'Inquire for bartending',
    },
    {
      key: 'mobilebar',
      n: '02',
      sub: 'The flagship. A complete bar, hosted end to end.',
      tag: 'Most booked',
      includes: [
        'The signature WOA bar, delivered, styled and set up',
        'A professional WOA bartender included',
        'A custom cocktail menu built for your event',
        'Premium mixers, garnishes, fresh ice and glassware',
        'Setup and breakdown handled by our team',
      ],
      note: 'Three-hour minimum service window. Your quote scales with hours, guest count and menu complexity.',
      cta: 'Inquire for the mobile bar',
    },
    {
      key: 'classes',
      n: '03',
      sub: 'A hands-on cocktail class, led by a WOA mixologist.',
      tag: 'Per person',
      includes: [
        'A hands-on class led by a professional WOA mixologist',
        'Cocktails built and tasted by every participant',
        'Tools, shakers, glassware, mixers and garnishes',
        'Recipe cards sent after the class',
        'Hosted at your office, your home or your venue',
      ],
      note: 'Brand-themed and zero-proof menus are available for corporate groups.',
      cta: 'Inquire for a class',
    },
    {
      key: 'rentals',
      n: '04',
      sub: 'Just the bar. Delivered, styled, and yours for the night.',
      tag: 'Bar only',
      includes: [
        'Your pick of the WOA bar builds, from the compact cart to the full front bar',
        'Delivery, setup and pickup',
        'Styled and service ready on arrival',
        'You stock it, staff it and run the night your way',
        'WOA bartenders or a custom menu can be added at any point',
      ],
      note: 'Where a bar lands in the range depends on the build, the date and the venue.',
      cta: 'Inquire for a bar rental',
    },
  ],
  area: {
    ix: '[ WHERE WE SERVE ]',
    title: 'Local in ',
    titleIt: 'Miami.',
    intro: 'Same prices across every market we serve. Travel beyond them is quoted separately.',
    markets: [
      { name: 'Miami', areas: 'Miami · Miami Beach · Brickell · Downtown · Wynwood · Coral Gables' },
      { name: 'Greater South Florida', areas: 'Miami-Dade · Broward · Palm Beach' },
      { name: 'New York', areas: 'NYC · Tri-state · The Hamptons' },
    ],
  },
  faq: {
    ix: '[ FAQ ]',
    eyebrow: 'About pricing',
    title: 'The ',
    titleIt: 'fine print.',
    items: [
      {
        q: 'Are these the final prices?',
        a: 'They are starting prices. Every event is quoted to its own date, hours, guest count and location, so a proposal can land above the starting figure. It will always arrive itemized, with the reasoning in writing.',
      },
      {
        q: 'What is not included?',
        a: 'Alcohol. WOA curates the complete beverage experience, including the menu, mixers, garnishes, quantities and a shopping guide, and we tell you exactly what to provide so service runs seamlessly.',
      },
      {
        q: 'Do you serve my area?',
        a: 'Miami, Miami Beach, Brickell and Greater South Florida are all covered, and we serve New York and the tri-state area as well. Events beyond those markets are welcome, with travel quoted separately.',
      },
      {
        q: 'Can I combine services?',
        a: 'Yes, and most events do. A bar rental with WOA bartenders, or a mobile bar with a mixology class earlier in the day, comes back as a single proposal with one all-in number.',
      },
      {
        q: 'How do I get an exact quote?',
        a: 'Send your date, location, guest count and the service you need. We reply with a tailored proposal within two business days, or sooner if your date is close.',
      },
    ],
  },
  cta: {
    eyebrow: 'Next step',
    title: 'Ready for a ',
    titleIt: 'real',
    body: 'Tell us the date, the market and what you are hosting. We will send a tailored proposal within two business days.',
    primary: 'Request a quote',
    secondary: 'All ways to reach us',
  },
};

const es: PricingCopy = {
  meta: {
    title: 'Precios: bartenders, barra móvil, clases y renta de barras | WOA Cocktails',
    description:
      'Precios iniciales de los cuatro servicios de WOA: servicios de bartender, la experiencia completa de barra móvil, clases de coctelería y renta de barras. Servimos Miami, Miami Beach, Brickell y Nueva York.',
  },
  hero: {
    eyebrow: 'Paquetes y precios',
    stamp: 'Tarifas · 2026',
    title: 'Precios',
    lede: 'Cuatro servicios principales, cada uno con un precio inicial claro. Cada evento se cotiza según su propia ',
    ledeEm: 'fecha, duración y número de invitados',
    ledeTail: ', así que las cifras siguientes son el punto de partida de la conversación.',
  },
  startingLabel: 'Desde',
  includedLabel: 'Incluye',
  noteLabel: 'Nota',
  packages: [
    {
      key: 'bartending',
      n: '01',
      sub: 'Nuestro equipo detrás de la barra. La suya, la de su venue o la nuestra.',
      tag: 'Más flexible',
      includes: [
        'Bartenders, anfitriones, barbacks y líderes de evento formados por WOA',
        'Uniformados y listos para presentarse',
        'Reunión previa al evento y recorrido por el venue',
        'Un líder de evento asignado en eventos grandes',
        'Servicio detrás de su barra, la de su venue o la nuestra',
      ],
      note: 'Su cotización varía según el tamaño del equipo, las horas y el formato del evento. El viaje dentro de Miami y Nueva York está incluido.',
      cta: 'Solicite bartenders',
    },
    {
      key: 'mobilebar',
      n: '02',
      sub: 'El servicio insignia. Una barra completa, atendida de principio a fin.',
      tag: 'El más reservado',
      includes: [
        'La barra de autor de WOA, entregada, estilizada y montada',
        'Un bartender profesional de WOA incluido',
        'Un menú de cócteles personalizado para su evento',
        'Mixers premium, garnishes, hielo fresco y cristalería',
        'Montaje y desmontaje a cargo de nuestro equipo',
      ],
      note: 'Mínimo de tres horas de servicio. Su cotización varía según las horas, el número de invitados y la complejidad del menú.',
      cta: 'Solicite la barra móvil',
    },
    {
      key: 'classes',
      n: '03',
      sub: 'Una clase práctica de coctelería, dirigida por un mixólogo de WOA.',
      tag: 'Por persona',
      includes: [
        'Una clase práctica dirigida por un mixólogo profesional de WOA',
        'Cócteles preparados y probados por cada participante',
        'Herramientas, cocteleras, cristalería, mixers y garnishes',
        'Recetario enviado después de la clase',
        'En su oficina, su casa o su venue',
      ],
      note: 'Hay menús temáticos de marca y sin alcohol disponibles para grupos corporativos.',
      cta: 'Solicite una clase',
    },
    {
      key: 'rentals',
      n: '04',
      sub: 'Solo la barra. Entregada, estilizada y suya por la noche.',
      tag: 'Solo barra',
      includes: [
        'La barra de WOA que prefiera, desde el carrito compacto hasta la barra frontal completa',
        'Entrega, montaje y recogida',
        'Estilizada y lista para servir al llegar',
        'Usted la abastece, la atiende y maneja la noche a su manera',
        'Puede agregar bartenders de WOA o un menú personalizado en cualquier momento',
      ],
      note: 'El lugar dentro del rango depende del modelo de barra, la fecha y el venue.',
      cta: 'Solicite una renta de barra',
    },
  ],
  area: {
    ix: '[ DÓNDE SERVIMOS ]',
    title: 'Locales en ',
    titleIt: 'Miami.',
    intro: 'Los mismos precios en todos los mercados que atendemos. El viaje fuera de ellos se cotiza por separado.',
    markets: [
      { name: 'Miami', areas: 'Miami · Miami Beach · Brickell · Downtown · Wynwood · Coral Gables' },
      { name: 'Gran Sur de Florida', areas: 'Miami-Dade · Broward · Palm Beach' },
      { name: 'Nueva York', areas: 'NYC · Área triestatal · Los Hamptons' },
    ],
  },
  faq: {
    ix: '[ PREGUNTAS ]',
    eyebrow: 'Sobre los precios',
    title: 'La ',
    titleIt: 'letra pequeña.',
    items: [
      {
        q: '¿Estos son los precios finales?',
        a: 'Son precios iniciales. Cada evento se cotiza según su fecha, sus horas, su número de invitados y su ubicación, así que una propuesta puede quedar por encima de la cifra inicial. Siempre llega detallada, con el razonamiento por escrito.',
      },
      {
        q: '¿Qué no está incluido?',
        a: 'El alcohol. WOA cura la experiencia de bebidas completa, incluyendo el menú, los mixers, los garnishes, las cantidades y una guía de compras, y le decimos exactamente qué proveer para que el servicio sea impecable.',
      },
      {
        q: '¿Atienden mi zona?',
        a: 'Miami, Miami Beach, Brickell y todo el Gran Sur de Florida están cubiertos, y también atendemos Nueva York y el área triestatal. Los eventos fuera de esos mercados son bienvenidos, con el viaje cotizado por separado.',
      },
      {
        q: '¿Puedo combinar servicios?',
        a: 'Sí, y la mayoría de los eventos lo hacen. Una renta de barra con bartenders de WOA, o una barra móvil con una clase de coctelería más temprano, regresa como una sola propuesta con una cifra única.',
      },
      {
        q: '¿Cómo obtengo una cotización exacta?',
        a: 'Envíenos su fecha, ubicación, número de invitados y el servicio que necesita. Le respondemos con una propuesta a la medida en un plazo de dos días hábiles, o antes si su fecha está cerca.',
      },
    ],
  },
  cta: {
    eyebrow: 'Siguiente paso',
    title: '¿Listo para una ',
    titleIt: 'cotización real',
    body: 'Cuéntenos la fecha, el mercado y lo que va a celebrar. Le enviamos una propuesta a la medida en un plazo de dos días hábiles.',
    primary: 'Solicite una cotización',
    secondary: 'Todas las formas de contactarnos',
  },
};

export const pricingCopy: Record<Lang, PricingCopy> = { en, es };
