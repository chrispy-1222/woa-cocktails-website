// Shared UI strings for the site chrome (nav, footer, cookie banner, language switcher).
// Page body copy is translated inline in each src/pages/**/*.astro file.
// Latin-American Spanish. CTAs use "usted" formality; neutral elsewhere.

export const languages = { en: 'English', es: 'Español' } as const;
export const defaultLang = 'en';
export type Lang = 'en' | 'es';

// Service items shared by the Nav dropdown + drawer. `path` is the canonical EN path.
export const services = [
  { num: '01', path: '/mobile-bar', en: 'Mobile bar for Events', es: 'Barra móvil para eventos' },
  { num: '02', path: '/brand-experiences', en: 'Brand & Hospitality Experiences', es: 'Experiencias de marca y hospitalidad' },
  { num: '03', path: '/staffing', en: 'Bartending & Hospitality Staffing', es: 'Personal de bar y hospitalidad' },
  { num: '04', path: '/classes', en: 'Mixology Private Classes', es: 'Clases privadas de coctelería' },
] as const;

export const ui = {
  en: {
    // Nav
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.home': 'Home',
    'nav.founders': 'Founders',
    'nav.book': 'Book Now',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.servicesGroup': 'Services',
    'lang.switchTo': 'Ver en español',
    'lang.label': 'ES',

    // Footer
    'footer.blurb':
      'A luxury hospitality & beverage house. Mobile bar experiences, consulting and curated activations across New York and Miami.',
    'footer.services': 'Services',
    'footer.svc.mobilebar': 'Mobile Bar Experience',
    'footer.svc.takeovers': 'Bar Takeovers',
    'footer.svc.consulting': 'Beverage Consulting',
    'footer.svc.bartenders': 'Bartender Services',
    'footer.svc.classes': 'Mixology Classes',
    'footer.house': 'House',
    'footer.house.about': 'About / Founders',
    'footer.house.pricing': 'Packages & Pricing',
    'footer.house.testimonials': 'Testimonials',
    'footer.house.faq': 'FAQ',
    'footer.house.contact': 'Contact / Book Now',
    'footer.markets': 'Markets',
    'footer.ny': 'New York',
    'footer.ny.sub': 'NYC · Tri-state · The Hamptons',
    'footer.mia': 'Miami',
    'footer.mia.sub': 'Miami · Beach · Brickell · Coral Gables',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.press': 'Press',

    // Cookie banner
    'cookie.title': 'We value your privacy',
    'cookie.body':
      'We use cookies to enhance your browsing experience, serve personalized ads, and analyze our traffic. By continuing to browse, you consent to the use of cookies. Choose “Opt out” to disable them.',
    'cookie.privacy': 'Privacy Policy',
    'cookie.optout': 'Opt out',
    'cookie.accept': 'Got it',
    'cookie.close': 'Close',
  },
  es: {
    // Nav
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.home': 'Inicio',
    'nav.founders': 'Fundadores',
    'nav.book': 'Reserve ahora',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',
    'nav.servicesGroup': 'Servicios',
    'lang.switchTo': 'View in English',
    'lang.label': 'EN',

    // Footer
    'footer.blurb':
      'Una casa de hospitalidad y bebidas de lujo. Experiencias de barra móvil, consultoría y activaciones a medida en Nueva York y Miami.',
    'footer.services': 'Servicios',
    'footer.svc.mobilebar': 'Experiencia de barra móvil',
    'footer.svc.takeovers': 'Tomas de bar',
    'footer.svc.consulting': 'Consultoría de bebidas',
    'footer.svc.bartenders': 'Servicios de bartenders',
    'footer.svc.classes': 'Clases de coctelería',
    'footer.house': 'La Casa',
    'footer.house.about': 'Nosotros / Fundadores',
    'footer.house.pricing': 'Paquetes y precios',
    'footer.house.testimonials': 'Testimonios',
    'footer.house.faq': 'Preguntas frecuentes',
    'footer.house.contact': 'Contacto / Reservar',
    'footer.markets': 'Mercados',
    'footer.ny': 'Nueva York',
    'footer.ny.sub': 'NYC · Área triestatal · Los Hamptons',
    'footer.mia': 'Miami',
    'footer.mia.sub': 'Miami · Beach · Brickell · Coral Gables',
    'footer.rights': 'Todos los derechos reservados',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.press': 'Prensa',

    // Cookie banner
    'cookie.title': 'Valoramos su privacidad',
    'cookie.body':
      'Usamos cookies para mejorar su experiencia de navegación, mostrar anuncios personalizados y analizar nuestro tráfico. Al continuar navegando, usted acepta el uso de cookies. Elija «Rechazar» para desactivarlas.',
    'cookie.privacy': 'Política de privacidad',
    'cookie.optout': 'Rechazar',
    'cookie.accept': 'Entendido',
    'cookie.close': 'Cerrar',
  },
} as const;
