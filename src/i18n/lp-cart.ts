// Content for the Mobile Bar Cart paid landing page (EN + ES).
//
// Kept out of the .astro files so the English and Spanish pages render the
// SAME markup, only the strings differ. Copy is message-matched to the Google
// ad (local Miami / Miami Beach / Brickell searches, 3-hour minimum, bartender
// included, starting price) to protect Quality Score.
//
// PRICES: never written here. Every figure is pulled from src/i18n/pricing.ts
// so the landing page cannot drift from the pricing page or the service pages.
//
// TRACKING: this page is the paid destination. The Tally embed, the GTM
// container and the woa_lead_submit / woa_calendly_scheduled / woa_call_click
// events live in LandingLayout.astro and must not be touched by copy work.
//
// Some fields carry inline HTML (marked `… (HTML)`) and are rendered with
// `set:html` — preserve the <b>/<em> tags and &amp; entities exactly.
import { priceFrom } from './pricing';

export type Lang = 'en' | 'es';

export interface LpItem {
  n: string;
  /** May contain inline HTML (rendered with set:html). */
  h: string;
  /** May contain inline HTML (rendered with set:html). */
  p: string;
}
export interface LpTesti {
  body: string;
  who: string;
  role: string;
}
export interface LpCounty {
  name: string;
  areas: string;
}
export interface LpShot {
  alt: string;
  cap: string;
}
export interface LpFaq {
  q: string;
  a: string;
}

export interface LpContent {
  meta: { title: string; description: string };

  cta: string;

  hero: {
    bgAlt: string;
    eyebrow: string;
    h1Line1: string;
    h1Line2Lead: string;
    h1Emph: string;
    /** HTML. */
    sub: string;
    call: string;
    /** Each chip is HTML (contains <b>). Rendered with ◆ separators between. */
    area: string[];
  };

  get: {
    ix: string;
    h2Lead: string;
    h2It: string;
    intro: string;
    photoAlt: string;
    photoCap: string;
    features: LpItem[];
    /** What the booking actually includes. */
    inclLabel: string;
    incl: string[];
    inclFoot: string;
    priceFrom: string;
    priceAmount: string;
    /** HTML. */
    priceNote: string;
    occasions: string[];
  };

  /** Starting prices for all four service lines (figures from pricing.ts). */
  prices: {
    ix: string;
    h2Lead: string;
    h2It: string;
    intro: string;
    note: string;
    cta: string;
  };

  /** Real event photography. */
  gallery: {
    ix: string;
    h2Lead: string;
    h2It: string;
    intro: string;
    shots: LpShot[];
  };

  cred: {
    ix: string;
    h2Lead: string;
    h2It: string;
    intro: string;
    stats: { b: string; label: string }[];
    testi: LpTesti[];
    pressLabel: string;
    press: string[];
  };

  how: {
    ix: string;
    h2Lead: string;
    h2It: string;
    steps: LpItem[];
  };

  book: {
    ix: string;
    h2Lead: string;
    h2It: string;
    intro: string;
    quoteHead: string;
    quoteMeta: string;
    /** HTML. */
    quoteFoot: string;
    /** HTML. */
    quoteReply: string;
    callHead: string;
    callMeta: string;
    callFoot: string;
    poweredBy: string; // "Powered by" (Calendly bolded in template)
    callRowEyebrow: string;
    callNumber: string;
    callNumberSub: string;
    callTap: string;
    tallyTitle: string;
  };

  area: {
    ix: string;
    h2Lead: string;
    h2It: string;
    intro: string;
    counties: LpCounty[];
    faqEyebrow: string;
    faq: LpFaq[];
  };

  footer: {
    tagline: string;
    contact: string;
    instagram: string;
    tiktok: string;
    /** Suffix after "© {year} ". */
    legalSuffix: string;
  };
}

const en: LpContent = {
  meta: {
    title: 'Mobile Bar Services in Miami | Bartending in Miami Beach & Brickell | WOA Cocktails',
    description: `Mobile bar services in Miami, bartending in Miami Beach and Brickell. A luxury bar, a pro bartender and a custom cocktail menu, ${priceFrom('mobilebar', 'en')}. Request a quote in two minutes.`,
  },

  cta: 'Get your quote',

  hero: {
    bgAlt: 'Two WOA bartenders shaking cocktails behind a styled white bar at an outdoor Miami event',
    eyebrow: 'Mobile Bar Services in Miami · Bartending in Miami Beach',
    h1Line1: 'A luxury bar that',
    h1Line2Lead: 'rolls up to ',
    h1Emph: 'your event.',
    sub: '<b>Mobile bar services in Miami. Bartending in Miami Beach and Brickell.</b> WOA brings the bar, a professional bartender and a custom cocktail menu to weddings, corporate parties and private events across Miami-Dade, Broward and Palm Beach.',
    call: 'Call & book',
    area: [
      '<b>Miami</b> · Miami Beach · Brickell',
      'Bartender <b>included</b>',
      '<b>3-hour</b> minimum',
      `Full service <b>${priceFrom('mobilebar', 'en')}</b>`,
    ],
  },

  get: {
    ix: '[ 01 / The experience ]',
    h2Lead: 'More than a rental. ',
    h2It: 'A bar, hosted.',
    intro: 'The cart is the showpiece, but what arrives is a complete mobile bar service, run end-to-end by WOA.',
    photoAlt: "WOA's white fluted mobile bar cart, fully set with cocktails and a bartender ready to serve",
    photoCap: '[ WOA mobile bar cart · in service ]',
    features: [
      { n: '01', h: 'The cart, fully built', p: 'Our signature mobile bar cart arrives styled, stocked and ready: bar tools, mixers, fresh garnishes and glassware all included.' },
      { n: '02', h: 'A pro bartender, included', p: 'Every booking comes with a WOA bartender, trained in elevated, guest-focused service. Not a rental you staff yourself.' },
      { n: '03', h: 'A menu built for your event', p: 'We design a signature cocktail menu around your taste, your theme and your crowd: spirited, low-ABV or fully zero-proof.' },
      { n: '04', h: 'Set up &amp; broken down for you', p: 'We handle delivery, setup and breakdown. You host; we pour. The cart is the centerpiece your guests gather around.' },
    ],
    inclLabel: 'Every booking includes',
    incl: [
      'The WOA bar, delivered, styled and set up',
      'A professional WOA bartender for your service window',
      'A custom cocktail menu designed for your event',
      'Premium mixers, fresh garnishes and ice',
      'Bar tools and glassware',
      'Setup and breakdown by our team',
    ],
    inclFoot: 'You provide the spirits. We send quantities and a shopping list so nothing runs dry.',
    priceFrom: 'Full service, from',
    priceAmount: priceFrom('mobilebar', 'en'),
    priceNote: 'The complete mobile bar <b>with a professional bartender included</b>, not a bare rental. Your final quote scales with hours, guest count and menu.',
    occasions: ['Weddings', 'Corporate', 'Private parties', 'Brand activations'],
  },

  prices: {
    ix: '[ 02 / Starting prices ]',
    h2Lead: 'Clear prices, ',
    h2It: 'before you ask.',
    intro: 'The same starting prices we publish everywhere else on our site. Every event is quoted to its own date, hours and guest count.',
    note: 'Prices are starting points. Travel within Miami and Greater South Florida is included.',
    cta: 'Get your quote',
  },

  gallery: {
    ix: '[ 03 / Real events ]',
    h2Lead: 'Real bars. Real nights. ',
    h2It: 'Real guests.',
    intro: 'Recent WOA events across Miami, Miami Beach and Brickell. No stock photography.',
    shots: [
      { alt: 'A WOA bartender serving guests at a styled outdoor bar with the custom cocktail menu on display', cap: '[ wedding · bar service ]' },
      { alt: 'A framed WOA cocktail menu card on a styled bar top beside shakers and glassware', cap: '[ custom cocktail menu ]' },
      { alt: 'A WOA bartender behind an indoor bar set with fresh flowers, garnishes and glassware at a corporate happy hour', cap: '[ corporate happy hour ]' },
      { alt: 'The WOA team in black behind a white fluted bar at a grand opening in a palm-lined courtyard', cap: '[ grand opening · Miami ]' },
      { alt: 'A guest holding a cocktail beside the white WOA bar at an outdoor residential activation', cap: '[ residential activation · Brickell ]' },
      { alt: 'A WOA host presenting wine at a styled wine and champagne service table', cap: '[ wine &amp; champagne service ]' },
    ],
  },

  cred: {
    ix: '[ 04 / Why WOA ]',
    h2Lead: 'A luxury hospitality house: ',
    h2It: 'not a party rental.',
    intro: 'WOA is a full-service beverage & hospitality house. The same team behind hundreds of curated events now brings the cart to South Florida.',
    stats: [
      { b: '500+', label: 'Events curated' },
      { b: '25yr', label: 'Combined experience' },
      { b: '5★', label: 'Average rating' },
    ],
    testi: [
      { body: 'WOA Cocktails completely elevated our wedding. The drinks were incredible, the bartenders were professional and friendly, and the mobile bar setup looked stunning. Our guests are still talking about the espresso martinis.', who: 'Wedding', role: 'Private Celebration' },
      { body: 'Thank you so much for catering our event. The bar service was excellent, and we got really positive feedback, in no small part due to your contributions. We will definitely reach out for future events.', who: 'Nina Sevilla', role: 'Corporate Event' },
      { body: 'We hired WOA for a corporate event in Miami and they exceeded expectations. The cocktail menu felt custom and elevated, and the staff brought such a great energy to the room.', who: 'Corporate', role: 'Miami' },
    ],
    pressLabel: 'As seen at',
    press: ['Soho House', 'Dumbo House', 'Brand pop-ups & takeovers'],
  },

  how: {
    ix: '[ 05 / How it works ]',
    h2Lead: 'Three steps to ',
    h2It: 'your cart.',
    steps: [
      { n: '01', h: 'Tell us about your event', p: "Date, location, guest count and the vibe you're after. Takes two minutes: by form, call or scheduled chat." },
      { n: '02', h: 'Get a tailored quote', p: 'We come back fast with a cart package and signature menu built for your event, priced for your date, hours and guest count.' },
      { n: '03', h: 'We roll up &amp; pour', p: 'We deliver, set up and run the bar. You enjoy your event; your guests gather around the cart.' },
    ],
  },

  book: {
    ix: '[ 06 / Book your date ]',
    h2Lead: 'Lock in ',
    h2It: 'your date.',
    intro: "Send the details and we'll come back with a tailored quote, or grab a time to talk it through. Whichever's easier.",
    quoteHead: 'Request a quote',
    quoteMeta: '~2 min',
    quoteFoot: 'Goes straight to <b>Fabio &amp; Hector</b>: no inbox, no middleman.',
    quoteReply: 'Reply <b>≤ 2 days</b>',
    callHead: 'Prefer to talk? Book a call',
    callMeta: '30 min',
    callFoot: 'Video call · no commitment',
    poweredBy: 'Powered by',
    callRowEyebrow: 'Rather just call?',
    callNumber: '215-939-0476',
    callNumberSub: 'Fabio · Miami',
    callTap: 'Tap to call →',
    tallyTitle: 'Request a quote: WOA mobile bar cart',
  },

  area: {
    ix: '[ 07 / Service area ]',
    h2Lead: 'Across ',
    h2It: 'South Florida.',
    intro: 'We bring the cart to all three South Florida counties.',
    counties: [
      { name: 'Miami-Dade', areas: 'Miami · Miami Beach · Brickell · Coral Gables · Wynwood · Bal Harbour' },
      { name: 'Broward', areas: 'Fort Lauderdale · Hollywood · Las Olas · Weston' },
      { name: 'Palm Beach', areas: 'West Palm Beach · Boca Raton · Delray · Jupiter' },
    ],
    faqEyebrow: 'Good to know',
    faq: [
      { q: "What's the minimum booking?", a: "Three hours of full mobile bar cart service. That's the minimum that lets us arrive fully staffed and stocked and give your guests the complete experience." },
      { q: 'Where do you serve?', a: 'Greater South Florida: Miami-Dade, Broward and Palm Beach counties. Outside that radius? Ask us; we take select events further out with travel quoted separately.' },
      { q: 'Is a bartender included?', a: "Yes. Every cart booking comes with a professional WOA bartender. This isn't a self-serve rental: we run the bar for you." },
      { q: 'Do you provide the alcohol?', a: "We curate the complete beverage experience: menu, mixers, garnishes, quantities and shopping guidance. We'll walk you through exactly what to provide so service is seamless." },
      { q: 'How far ahead should I book?', a: "The sooner the better for prime dates, but we're flexible: full-service events can often be booked with just a few days' notice, depending on availability." },
    ],
  },

  footer: {
    tagline: 'A luxury hospitality & beverage house. Mobile bar cart experiences across Greater South Florida.',
    contact: 'Fabio · Miami · 215-939-0476',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    legalSuffix: 'WOA Cocktails · Greater South Florida',
  },
};

const es: LpContent = {
  meta: {
    title: 'Barra móvil en Miami | Bartenders en Miami Beach y Brickell | WOA Cocktails',
    description: `Servicio de barra móvil en Miami y bartenders en Miami Beach y Brickell. Una barra de lujo, un bartender profesional y un menú personalizado, ${priceFrom('mobilebar', 'es')}. Pida su cotización en dos minutos.`,
  },

  cta: 'Reciba su cotización',

  hero: {
    bgAlt: 'Dos bartenders de WOA preparando cócteles detrás de una barra blanca estilizada en un evento al aire libre en Miami',
    eyebrow: 'Barra móvil en Miami · Bartenders en Miami Beach',
    h1Line1: 'Una barra de lujo',
    h1Line2Lead: 'que llega a ',
    h1Emph: 'su evento.',
    sub: '<b>Servicio de barra móvil en Miami. Bartenders en Miami Beach y Brickell.</b> WOA lleva la barra, un bartender profesional y un menú de cócteles personalizado a bodas, eventos corporativos y privados en Miami-Dade, Broward y Palm Beach.',
    call: 'Llame y reserve',
    area: [
      '<b>Miami</b> · Miami Beach · Brickell',
      'Bartender <b>incluido</b>',
      'Mínimo <b>3 horas</b>',
      `Servicio completo <b>${priceFrom('mobilebar', 'es')}</b>`,
    ],
  },

  get: {
    ix: '[ 01 / La experiencia ]',
    h2Lead: 'Más que un alquiler. ',
    h2It: 'Una barra, atendida.',
    intro: 'La barra es la pieza central, pero lo que llega es un servicio de barra móvil completo, ejecutado de principio a fin por WOA.',
    photoAlt: 'La barra móvil blanca acanalada de WOA, montada con cócteles y un bartender listo para servir',
    photoCap: '[ Barra móvil WOA · en servicio ]',
    features: [
      { n: '01', h: 'La barra, completamente armada', p: 'Nuestra barra móvil de autor llega estilizada, abastecida y lista: herramientas de bar, mixers, garnishes frescos y cristalería, todo incluido.' },
      { n: '02', h: 'Un bartender profesional, incluido', p: 'Cada reserva viene con un bartender de WOA, formado en un servicio elevado y centrado en el invitado. No es un alquiler que usted tenga que dotar de personal.' },
      { n: '03', h: 'Un menú creado para su evento', p: 'Diseñamos un menú de cócteles de autor en torno a su gusto, su temática y sus invitados: con alcohol, bajo en alcohol o totalmente sin alcohol.' },
      { n: '04', h: 'Montaje y desmontaje incluidos', p: 'Nos encargamos de la entrega, el montaje y el desmontaje. Usted es el anfitrión; nosotros servimos. La barra es el centro alrededor del cual se reúnen sus invitados.' },
    ],
    inclLabel: 'Cada reserva incluye',
    incl: [
      'La barra de WOA, entregada, estilizada y montada',
      'Un bartender profesional de WOA durante su servicio',
      'Un menú de cócteles diseñado para su evento',
      'Mixers premium, garnishes frescos y hielo',
      'Herramientas de bar y cristalería',
      'Montaje y desmontaje a cargo de nuestro equipo',
    ],
    inclFoot: 'Usted pone los licores. Nosotros le enviamos las cantidades y una lista de compras para que nada falte.',
    priceFrom: 'Servicio completo, desde',
    priceAmount: priceFrom('mobilebar', 'es'),
    priceNote: 'La barra móvil completa <b>con un bartender profesional incluido</b>, no un alquiler pelado. Su cotización final varía según las horas, el número de invitados y el menú.',
    occasions: ['Bodas', 'Corporativo', 'Fiestas privadas', 'Activaciones de marca'],
  },

  prices: {
    ix: '[ 02 / Precios iniciales ]',
    h2Lead: 'Precios claros, ',
    h2It: 'desde el principio.',
    intro: 'Los mismos precios iniciales que publicamos en el resto de nuestro sitio. Cada evento se cotiza según su fecha, sus horas y su número de invitados.',
    note: 'Son precios de partida. El viaje dentro de Miami y el Gran Sur de Florida está incluido.',
    cta: 'Reciba su cotización',
  },

  gallery: {
    ix: '[ 03 / Eventos reales ]',
    h2Lead: 'Barras reales. Noches reales. ',
    h2It: 'Invitados reales.',
    intro: 'Eventos recientes de WOA en Miami, Miami Beach y Brickell. Nada de fotos de banco de imágenes.',
    shots: [
      { alt: 'Un bartender de WOA atendiendo a los invitados en una barra estilizada al aire libre con el menú de cócteles a la vista', cap: '[ boda · servicio de barra ]' },
      { alt: 'Un menú de cócteles de WOA enmarcado sobre la barra, junto a cocteleras y cristalería', cap: '[ menú de cócteles personalizado ]' },
      { alt: 'Un bartender de WOA detrás de una barra interior con flores frescas, garnishes y cristalería en un happy hour corporativo', cap: '[ happy hour corporativo ]' },
      { alt: 'El equipo de WOA de negro detrás de una barra blanca acanalada en una inauguración, en un patio con palmeras', cap: '[ inauguración · Miami ]' },
      { alt: 'Una invitada con un cóctel junto a la barra blanca de WOA en una activación residencial al aire libre', cap: '[ activación residencial · Brickell ]' },
      { alt: 'Un anfitrión de WOA presentando vino en una mesa de servicio de vinos y champaña', cap: '[ servicio de vinos y champaña ]' },
    ],
  },

  cred: {
    ix: '[ 04 / Por qué WOA ]',
    h2Lead: 'Una casa de hospitalidad de lujo: ',
    h2It: 'no un alquiler de fiestas.',
    intro: 'WOA es una casa de bebidas y hospitalidad de servicio completo. El mismo equipo detrás de cientos de eventos a la medida ahora lleva la barra al Sur de Florida.',
    stats: [
      { b: '500+', label: 'Eventos creados' },
      { b: '25 años', label: 'Experiencia combinada' },
      { b: '5★', label: 'Calificación promedio' },
    ],
    testi: [
      { body: 'WOA Cocktails elevó por completo nuestra boda. Los tragos estaban increíbles, los bartenders fueron profesionales y amables, y el montaje de la barra móvil se veía espectacular. Nuestros invitados todavía hablan de los espresso martinis.', who: 'Boda', role: 'Celebración privada' },
      { body: 'Muchísimas gracias por atender nuestro evento. El servicio de barra fue excelente y recibimos comentarios muy positivos, en buena parte gracias a ustedes. Sin duda los buscaremos para futuros eventos.', who: 'Nina Sevilla', role: 'Evento corporativo' },
      { body: 'Contratamos a WOA para un evento corporativo en Miami y superaron las expectativas. El menú de cócteles se sintió personalizado y elevado, y el equipo aportó una energía buenísima a la sala.', who: 'Corporativo', role: 'Miami' },
    ],
    pressLabel: 'Vistos en',
    press: ['Soho House', 'Dumbo House', 'Pop-ups y takeovers de marca'],
  },

  how: {
    ix: '[ 05 / Cómo funciona ]',
    h2Lead: 'Tres pasos hasta ',
    h2It: 'su barra.',
    steps: [
      { n: '01', h: 'Cuéntenos sobre su evento', p: 'Fecha, ubicación, número de invitados y el ambiente que busca. Toma dos minutos: por formulario, llamada o cita agendada.' },
      { n: '02', h: 'Reciba una cotización a la medida', p: 'Le respondemos rápido con un paquete de barra y un menú de autor creado para su evento, con el precio según su fecha, las horas y el número de invitados.' },
      { n: '03', h: 'Llegamos y servimos', p: 'Entregamos, montamos y operamos la barra. Usted disfruta su evento; sus invitados se reúnen alrededor de la barra.' },
    ],
  },

  book: {
    ix: '[ 06 / Reserve su fecha ]',
    h2Lead: 'Aparte ',
    h2It: 'su fecha.',
    intro: 'Envíenos los detalles y le respondemos con una cotización a la medida, o aparte un horario para conversarlo. Lo que le resulte más fácil.',
    quoteHead: 'Solicite una cotización',
    quoteMeta: '~2 min',
    quoteFoot: 'Llega directo a <b>Fabio y Hector</b>: sin bandeja de entrada, sin intermediarios.',
    quoteReply: 'Respuesta <b>≤ 2 días</b>',
    callHead: '¿Prefiere hablar? Reserve una llamada',
    callMeta: '30 min',
    callFoot: 'Videollamada · sin compromiso',
    poweredBy: 'Con tecnología de',
    callRowEyebrow: '¿Prefiere solo llamar?',
    callNumber: '215-939-0476',
    callNumberSub: 'Fabio · Miami',
    callTap: 'Toque para llamar →',
    tallyTitle: 'Solicite una cotización: barra móvil WOA',
  },

  area: {
    ix: '[ 07 / Área de servicio ]',
    h2Lead: 'En todo el ',
    h2It: 'Sur de Florida.',
    intro: 'Llevamos la barra a los tres condados del Sur de Florida.',
    counties: [
      { name: 'Miami-Dade', areas: 'Miami · Miami Beach · Brickell · Coral Gables · Wynwood · Bal Harbour' },
      { name: 'Broward', areas: 'Fort Lauderdale · Hollywood · Las Olas · Weston' },
      { name: 'Palm Beach', areas: 'West Palm Beach · Boca Raton · Delray · Jupiter' },
    ],
    faqEyebrow: 'Bueno saber',
    faq: [
      { q: '¿Cuál es la reserva mínima?', a: 'Tres horas de servicio completo de barra móvil. Es el mínimo que nos permite llegar con el equipo completo y todo abastecido, y darles a sus invitados la experiencia entera.' },
      { q: '¿Dónde ofrecen servicio?', a: 'En el Gran Sur de Florida: los condados de Miami-Dade, Broward y Palm Beach. ¿Fuera de ese radio? Pregúntenos; aceptamos eventos selectos más lejos, con el viaje cotizado por separado.' },
      { q: '¿Incluye bartender?', a: 'Sí. Cada reserva de la barra incluye un bartender profesional de WOA. No es un alquiler de autoservicio: operamos la barra por usted.' },
      { q: '¿Ustedes proveen el alcohol?', a: 'Curamos la experiencia de bebidas completa: menú, mixers, garnishes, cantidades y guía de compras. Le explicaremos exactamente qué proveer para que el servicio sea impecable.' },
      { q: '¿Con cuánta anticipación debo reservar?', a: 'Cuanto antes mejor para fechas codiciadas, pero somos flexibles, los eventos con servicio completo a menudo pueden reservarse con apenas unos días de anticipación, según disponibilidad.' },
    ],
  },

  footer: {
    tagline: 'Una casa de hospitalidad y bebidas de lujo. Experiencias de barra móvil en todo el Gran Sur de Florida.',
    contact: 'Fabio · Miami · 215-939-0476',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    legalSuffix: 'WOA Cocktails · Gran Sur de Florida',
  },
};

export const lpCartContent: Record<Lang, LpContent> = { en, es };
