// Content for the Mobile Bar Cart paid landing page (EN + ES).
//
// Kept out of the .astro files so the English and Spanish pages render the
// SAME markup — only the strings differ. Copy is message-matched to the Google
// ad (first hour free / 3-hour minimum / South Florida) to protect Quality
// Score. The offer is a self-contained block: flip `offerActive` to false to
// drop the promo everywhere (hero pill, offer band, footer reprise) and fall
// back to the neutral CTA label.
//
// Some fields carry inline HTML (marked `… (HTML)`) and are rendered with
// `set:html` — preserve the <b>/<em> tags and &amp; entities exactly.

export type Lang = 'en' | 'es';

export interface LpTerm {
  n: string;
  t: string;
  sub: string;
}
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
export interface LpFaq {
  q: string;
  a: string;
}

export interface LpContent {
  meta: { title: string; description: string };

  offerActive: boolean;
  cta: string;

  hero: {
    bgAlt: string;
    eyebrow: string;
    h1Line1: string;
    h1Line2Lead: string;
    h1Emph: string;
    /** HTML. */
    sub: string;
    pillTag: string;
    pillLead: string;
    pillEmph: string;
    pillTail: string;
    call: string;
    /** Each chip is HTML (contains <b>). Rendered with ◆ separators between. */
    area: string[];
  };

  offer: {
    eyebrow: string;
    free1: string;
    freeEmph: string;
    /** HTML. */
    lead: string;
    terms: LpTerm[];
    fine: string;
  };

  get: {
    ix: string;
    h2Lead: string;
    h2It: string;
    intro: string;
    photoAlt: string;
    photoCap: string;
    features: LpItem[];
    priceFrom: string;
    priceAmount: string;
    /** HTML. */
    priceNote: string;
    occasions: string[];
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
    reprise: string;
    contact: string;
    instagram: string;
    tiktok: string;
    /** Suffix after "© {year} ". */
    legalSuffix: string;
  };
}

const en: LpContent = {
  meta: {
    title: 'Mobile Bar Cart Rental — South Florida · First Hour Free | WOA Cocktails',
    description:
      "WOA's luxury mobile bar cart, a pro bartender and a custom cocktail menu — for weddings, corporate and private events across Miami-Dade, Broward & Palm Beach. First hour free with a 3-hour booking.",
  },

  offerActive: true,
  cta: 'Claim your free hour',

  hero: {
    bgAlt: 'WOA mobile bar cart set up outdoors with two bartenders, fresh garnishes and a custom cocktail menu',
    eyebrow: 'Mobile Bar Cart · Greater South Florida',
    h1Line1: 'A luxury bar that',
    h1Line2Lead: 'rolls up to ',
    h1Emph: 'your event.',
    sub: 'WOA brings the full mobile bar cart, a pro bartender and a custom cocktail menu to weddings, corporate parties and private events across <b>Miami-Dade, Broward &amp; Palm Beach</b>.',
    pillTag: 'Limited offer',
    pillLead: 'Your ',
    pillEmph: 'first hour free',
    pillTail: ' with a 3-hr booking',
    call: 'Call & book',
    area: [
      '<b>3-hour</b> minimum',
      'Bartender <b>included</b>',
      '<b>South Florida</b> · Miami-Dade · Broward · Palm Beach',
      'Full-service <b>from $850</b>',
    ],
  },

  offer: {
    eyebrow: '— The offer',
    free1: 'First hour',
    freeEmph: 'free.',
    lead: 'On any 3-hour mobile bar cart booking across South Florida.',
    terms: [
      { n: '01', t: '3-hour minimum booking', sub: 'So we arrive fully staffed and stocked — and you get the full experience.' },
      { n: '02', t: 'Book by July 31, 2026', sub: 'Reserve your date before the window closes. Event can take place later.' },
      { n: '03', t: 'Greater South Florida', sub: 'Miami-Dade · Broward · Palm Beach.' },
    ],
    fine: "Offer applies to the rental of WOA's mobile bar cart with a confirmed 3+ hour booking. Terms to be confirmed — ask us for full details when you inquire.",
  },

  get: {
    ix: '[ 01 / The experience ]',
    h2Lead: 'More than a rental. ',
    h2It: 'A bar, hosted.',
    intro: 'The cart is the showpiece — but what arrives is a complete mobile bar service, run end-to-end by WOA.',
    photoAlt: "WOA's white fluted mobile bar cart, fully set with cocktails and a bartender ready to serve",
    photoCap: '[ WOA mobile bar cart · in service ]',
    features: [
      { n: '01', h: 'The cart, fully built', p: 'Our signature mobile bar cart arrives styled, stocked and ready — bar tools, mixers, fresh garnishes and glassware all included.' },
      { n: '02', h: 'A pro bartender, included', p: 'Every booking comes with a WOA bartender — trained in elevated, guest-focused service. Not a rental you staff yourself.' },
      { n: '03', h: 'A menu built for your event', p: 'We design a signature cocktail menu around your taste, your theme and your crowd — spirited, low-ABV or fully zero-proof.' },
      { n: '04', h: 'Set up &amp; broken down for you', p: 'We handle delivery, setup and breakdown. You host; we pour. The cart is the centerpiece your guests gather around.' },
    ],
    priceFrom: 'Full-service, from',
    priceAmount: '$850',
    priceNote: 'The complete mobile bar cart <b>with a professional bartender included</b> — not a bare rental. Final quote scales with hours, guest count and menu.',
    occasions: ['Weddings', 'Corporate', 'Private parties', 'Brand activations'],
  },

  cred: {
    ix: '[ 02 / Why WOA ]',
    h2Lead: 'A luxury hospitality house — ',
    h2It: 'not a party rental.',
    intro: 'WOA is a full-service beverage & hospitality house. The same team behind hundreds of curated events now brings the cart to South Florida.',
    stats: [
      { b: '500+', label: 'Events curated' },
      { b: '25yr', label: 'Combined experience' },
      { b: '5★', label: 'Average rating' },
    ],
    testi: [
      { body: 'WOA completely elevated our wedding. The mobile bar setup looked stunning and our guests are still talking about the espresso martinis.', who: 'Wedding', role: 'Private Celebration' },
      { body: 'We hired WOA for a corporate event in Miami and they exceeded expectations. The cocktail menu felt custom and elevated, and the staff brought such great energy.', who: 'Corporate', role: 'Miami' },
    ],
    pressLabel: 'As seen at',
    press: ['Soho House', 'Dumbo House', 'Brand pop-ups & takeovers'],
  },

  how: {
    ix: '[ 03 / How it works ]',
    h2Lead: 'Three steps to ',
    h2It: 'your cart.',
    steps: [
      { n: '01', h: 'Tell us about your event', p: "Date, location, guest count and the vibe you're after. Takes two minutes — by form, call or scheduled chat." },
      { n: '02', h: 'Get a tailored quote', p: 'We come back fast with a cart package and signature menu built for your event — your free first hour already applied.' },
      { n: '03', h: 'We roll up &amp; pour', p: 'We deliver, set up and run the bar. You enjoy your event; your guests gather around the cart.' },
    ],
  },

  book: {
    ix: '[ 04 / Book the cart ]',
    h2Lead: 'Lock in your date — ',
    h2It: 'free hour included.',
    intro: "Send the details and we'll come back with a tailored quote, or grab a time to talk it through. Whichever's easier.",
    quoteHead: 'Request a quote',
    quoteMeta: '~2 min',
    quoteFoot: 'Goes straight to <b>Fabio &amp; Hector</b> — no inbox, no middleman.',
    quoteReply: 'Reply <b>≤ 2 days</b>',
    callHead: 'Prefer to talk? Book a call',
    callMeta: '30 min',
    callFoot: 'Video call · no commitment',
    poweredBy: 'Powered by',
    callRowEyebrow: '— Rather just call?',
    callNumber: '215-939-0476',
    callNumberSub: 'Fabio · Miami',
    callTap: 'Tap to call →',
    tallyTitle: 'Request a quote — WOA mobile bar cart',
  },

  area: {
    ix: '[ 05 / Service area ]',
    h2Lead: 'Across ',
    h2It: 'South Florida.',
    intro: 'We bring the cart to all three South Florida counties.',
    counties: [
      { name: 'Miami-Dade', areas: 'Miami · Miami Beach · Brickell · Coral Gables · Wynwood · Bal Harbour' },
      { name: 'Broward', areas: 'Fort Lauderdale · Hollywood · Las Olas · Weston' },
      { name: 'Palm Beach', areas: 'West Palm Beach · Boca Raton · Delray · Jupiter' },
    ],
    faqEyebrow: '— Good to know',
    faq: [
      { q: "What's the minimum booking?", a: "Three hours of full mobile bar cart service. That's the minimum that lets us arrive fully staffed and stocked and give your guests the complete experience." },
      { q: 'Where do you serve?', a: 'Greater South Florida — Miami-Dade, Broward and Palm Beach counties. Outside that radius? Ask us; we take select events further out with travel quoted separately.' },
      { q: 'Is a bartender included?', a: "Yes. Every cart booking comes with a professional WOA bartender. This isn't a self-serve rental — we run the bar for you." },
      { q: 'Do you provide the alcohol?', a: "We curate the complete beverage experience — menu, mixers, garnishes, quantities and shopping guidance. We'll walk you through exactly what to provide so service is seamless." },
      { q: 'How far ahead should I book?', a: "The sooner the better for prime dates, but we're flexible — full-service events can often be booked with just a few days' notice, depending on availability." },
    ],
  },

  footer: {
    tagline: 'A luxury hospitality & beverage house. Mobile bar cart experiences across Greater South Florida.',
    reprise: '◆ First hour free · 3-hour minimum · book by July 31',
    contact: 'Fabio · Miami · 215-939-0476',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    legalSuffix: 'WOA Cocktails · Greater South Florida',
  },
};

const es: LpContent = {
  meta: {
    title: 'Alquiler de barra móvil — Sur de Florida · Primera hora gratis | WOA Cocktails',
    description:
      'La barra móvil de lujo de WOA, un bartender profesional y un menú de cócteles personalizado — para bodas, eventos corporativos y privados en Miami-Dade, Broward y Palm Beach. Primera hora gratis con una reserva de 3 horas.',
  },

  offerActive: true,
  cta: 'Reserve su hora gratis',

  hero: {
    bgAlt: 'Barra móvil de WOA montada al aire libre con dos bartenders, garnishes frescos y un menú de cócteles personalizado',
    eyebrow: 'Barra móvil · Gran Sur de Florida',
    h1Line1: 'Una barra de lujo',
    h1Line2Lead: 'que llega a ',
    h1Emph: 'su evento.',
    sub: 'WOA lleva la barra móvil completa, un bartender profesional y un menú de cócteles personalizado a bodas, eventos corporativos y privados en <b>Miami-Dade, Broward y Palm Beach</b>.',
    pillTag: 'Oferta limitada',
    pillLead: 'Su ',
    pillEmph: 'primera hora gratis',
    pillTail: ' con una reserva de 3 h',
    call: 'Llame y reserve',
    area: [
      'Mínimo <b>3 horas</b>',
      'Bartender <b>incluido</b>',
      '<b>Sur de Florida</b> · Miami-Dade · Broward · Palm Beach',
      'Servicio completo <b>desde $850</b>',
    ],
  },

  offer: {
    eyebrow: '— La oferta',
    free1: 'Primera hora',
    freeEmph: 'gratis.',
    lead: 'En cualquier reserva de barra móvil de 3 horas en el Sur de Florida.',
    terms: [
      { n: '01', t: 'Reserva mínima de 3 horas', sub: 'Así llegamos con el equipo completo y todo abastecido — y usted disfruta la experiencia entera.' },
      { n: '02', t: 'Reserve antes del 31 de julio de 2026', sub: 'Aparte su fecha antes de que cierre la ventana. El evento puede realizarse después.' },
      { n: '03', t: 'Gran Sur de Florida', sub: 'Miami-Dade · Broward · Palm Beach.' },
    ],
    fine: 'La oferta aplica al alquiler de la barra móvil de WOA con una reserva confirmada de 3 o más horas. Términos por confirmar — pídanos los detalles completos al consultar.',
  },

  get: {
    ix: '[ 01 / La experiencia ]',
    h2Lead: 'Más que un alquiler. ',
    h2It: 'Una barra, atendida.',
    intro: 'La barra es la pieza central — pero lo que llega es un servicio de barra móvil completo, ejecutado de principio a fin por WOA.',
    photoAlt: 'La barra móvil blanca acanalada de WOA, montada con cócteles y un bartender listo para servir',
    photoCap: '[ Barra móvil WOA · en servicio ]',
    features: [
      { n: '01', h: 'La barra, completamente armada', p: 'Nuestra barra móvil de autor llega estilizada, abastecida y lista — herramientas de bar, mixers, garnishes frescos y cristalería, todo incluido.' },
      { n: '02', h: 'Un bartender profesional, incluido', p: 'Cada reserva viene con un bartender de WOA — formado en un servicio elevado y centrado en el invitado. No es un alquiler que usted tenga que dotar de personal.' },
      { n: '03', h: 'Un menú creado para su evento', p: 'Diseñamos un menú de cócteles de autor en torno a su gusto, su temática y sus invitados — con alcohol, bajo en alcohol o totalmente sin alcohol.' },
      { n: '04', h: 'Montaje y desmontaje incluidos', p: 'Nos encargamos de la entrega, el montaje y el desmontaje. Usted es el anfitrión; nosotros servimos. La barra es el centro alrededor del cual se reúnen sus invitados.' },
    ],
    priceFrom: 'Servicio completo, desde',
    priceAmount: '$850',
    priceNote: 'La barra móvil completa <b>con un bartender profesional incluido</b> — no un alquiler pelado. La cotización final varía según las horas, el número de invitados y el menú.',
    occasions: ['Bodas', 'Corporativo', 'Fiestas privadas', 'Activaciones de marca'],
  },

  cred: {
    ix: '[ 02 / Por qué WOA ]',
    h2Lead: 'Una casa de hospitalidad de lujo — ',
    h2It: 'no un alquiler de fiestas.',
    intro: 'WOA es una casa de bebidas y hospitalidad de servicio completo. El mismo equipo detrás de cientos de eventos a la medida ahora lleva la barra al Sur de Florida.',
    stats: [
      { b: '500+', label: 'Eventos creados' },
      { b: '25 años', label: 'Experiencia combinada' },
      { b: '5★', label: 'Calificación promedio' },
    ],
    testi: [
      { body: 'WOA elevó por completo nuestra boda. El montaje de la barra móvil se veía espectacular y nuestros invitados todavía hablan de los espresso martinis.', who: 'Boda', role: 'Celebración privada' },
      { body: 'Contratamos a WOA para un evento corporativo en Miami y superaron las expectativas. El menú de cócteles se sintió personalizado y elevado, y el equipo aportó una energía buenísima.', who: 'Corporativo', role: 'Miami' },
    ],
    pressLabel: 'Vistos en',
    press: ['Soho House', 'Dumbo House', 'Pop-ups y takeovers de marca'],
  },

  how: {
    ix: '[ 03 / Cómo funciona ]',
    h2Lead: 'Tres pasos hasta ',
    h2It: 'su barra.',
    steps: [
      { n: '01', h: 'Cuéntenos sobre su evento', p: 'Fecha, ubicación, número de invitados y el ambiente que busca. Toma dos minutos — por formulario, llamada o cita agendada.' },
      { n: '02', h: 'Reciba una cotización a la medida', p: 'Le respondemos rápido con un paquete de barra y un menú de autor creado para su evento — con su primera hora gratis ya aplicada.' },
      { n: '03', h: 'Llegamos y servimos', p: 'Entregamos, montamos y operamos la barra. Usted disfruta su evento; sus invitados se reúnen alrededor de la barra.' },
    ],
  },

  book: {
    ix: '[ 04 / Reserve la barra ]',
    h2Lead: 'Aparte su fecha — ',
    h2It: 'hora gratis incluida.',
    intro: 'Envíenos los detalles y le respondemos con una cotización a la medida, o aparte un horario para conversarlo. Lo que le resulte más fácil.',
    quoteHead: 'Solicite una cotización',
    quoteMeta: '~2 min',
    quoteFoot: 'Llega directo a <b>Fabio y Hector</b> — sin bandeja de entrada, sin intermediarios.',
    quoteReply: 'Respuesta <b>≤ 2 días</b>',
    callHead: '¿Prefiere hablar? Reserve una llamada',
    callMeta: '30 min',
    callFoot: 'Videollamada · sin compromiso',
    poweredBy: 'Con tecnología de',
    callRowEyebrow: '— ¿Prefiere solo llamar?',
    callNumber: '215-939-0476',
    callNumberSub: 'Fabio · Miami',
    callTap: 'Toque para llamar →',
    tallyTitle: 'Solicite una cotización — barra móvil WOA',
  },

  area: {
    ix: '[ 05 / Área de servicio ]',
    h2Lead: 'En todo el ',
    h2It: 'Sur de Florida.',
    intro: 'Llevamos la barra a los tres condados del Sur de Florida.',
    counties: [
      { name: 'Miami-Dade', areas: 'Miami · Miami Beach · Brickell · Coral Gables · Wynwood · Bal Harbour' },
      { name: 'Broward', areas: 'Fort Lauderdale · Hollywood · Las Olas · Weston' },
      { name: 'Palm Beach', areas: 'West Palm Beach · Boca Raton · Delray · Jupiter' },
    ],
    faqEyebrow: '— Bueno saber',
    faq: [
      { q: '¿Cuál es la reserva mínima?', a: 'Tres horas de servicio completo de barra móvil. Es el mínimo que nos permite llegar con el equipo completo y todo abastecido, y darles a sus invitados la experiencia entera.' },
      { q: '¿Dónde ofrecen servicio?', a: 'En el Gran Sur de Florida — los condados de Miami-Dade, Broward y Palm Beach. ¿Fuera de ese radio? Pregúntenos; aceptamos eventos selectos más lejos, con el viaje cotizado por separado.' },
      { q: '¿Incluye bartender?', a: 'Sí. Cada reserva de la barra incluye un bartender profesional de WOA. No es un alquiler de autoservicio — operamos la barra por usted.' },
      { q: '¿Ustedes proveen el alcohol?', a: 'Curamos la experiencia de bebidas completa — menú, mixers, garnishes, cantidades y guía de compras. Le explicaremos exactamente qué proveer para que el servicio sea impecable.' },
      { q: '¿Con cuánta anticipación debo reservar?', a: 'Cuanto antes mejor para fechas codiciadas, pero somos flexibles — los eventos con servicio completo a menudo pueden reservarse con apenas unos días de anticipación, según disponibilidad.' },
    ],
  },

  footer: {
    tagline: 'Una casa de hospitalidad y bebidas de lujo. Experiencias de barra móvil en todo el Gran Sur de Florida.',
    reprise: '◆ Primera hora gratis · mínimo 3 horas · reserve antes del 31 de julio',
    contact: 'Fabio · Miami · 215-939-0476',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    legalSuffix: 'WOA Cocktails · Gran Sur de Florida',
  },
};

export const lpCartContent: Record<Lang, LpContent> = { en, es };
