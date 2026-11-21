export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Job {
  photo: SiteImage;
  caption: string;
}

interface ContentItem {
  title: string;
  text: string;
}

interface SiteContent {
  name: string;
  title: string;
  description: string;
  skipLink: string;
  headerButton: string;
  photoButton: string;
  whatsapp: { number: string; message: string };
  hero: { eyebrow: string; heading: string; text: string };
  heroImage?: SiteImage;
  services: { heading: string; items: ContentItem[] };
  process: { heading: string; steps: ContentItem[] };
  jobsHeading: string;
  jobs: Job[];
  about: { heading: string; text: string };
  contact: { heading: string; text: string; phone: string };
  footer: { location: string; credit: string };
  notFound: { title: string; heading: string };
}

export const site: SiteContent = {
  name: 'Cero Yuyo',
  title: 'Cero Yuyo | Corte de pasto y jardinería en Tacuarembó',
  description:
    'Corte de pasto, bordeado, limpieza y plantación de arbustos chicos en la ciudad de Tacuarembó, Uruguay. Mandame una foto del terreno y te paso el presupuesto gratis.',
  skipLink: 'Saltar al contenido',
  headerButton: 'Escribime',
  photoButton: 'Mandame una foto del terreno',
  whatsapp: {
    number: '59898871858',
    message:
      'Hola, vi la web de Cero Yuyo. Quiero un presupuesto para mi terreno en Tacuarembó. Te mando una foto.',
  },
  hero: {
    eyebrow: 'Cero Yuyo · Tacuarembó',
    heading: 'Corte de pasto y jardinería en Tacuarembó',
    text: 'Mandame una foto del terreno y te paso el presupuesto gratis.',
  },
  services: {
    heading: 'Qué hago',
    items: [
      { title: 'Corte de pasto', text: 'Patios, jardines y terrenos de la ciudad.' },
      { title: 'Bordeado', text: 'Bordes prolijos junto a veredas, paredes y canteros.' },
      { title: 'Limpieza', text: 'Saco los yuyos y dejo el terreno limpio.' },
      {
        title: 'Plantación de arbustos chicos',
        text: 'Para darle forma y color a tu jardín.',
      },
    ],
  },
  process: {
    heading: 'Cómo trabajo',
    steps: [
      {
        title: 'Mandame una foto',
        text: 'Escribime por WhatsApp con una foto del terreno.',
      },
      {
        title: 'Te paso el presupuesto',
        text: 'Lo veo y te respondo con el precio. Es gratis y sin compromiso.',
      },
      {
        title: 'Coordinamos el día',
        text: 'Elegimos un día que te quede cómodo y voy.',
      },
    ],
  },
  jobsHeading: 'Trabajos',
  jobs: [],
  about: {
    heading: 'Quién soy',
    text: 'Soy Gustavo, de Tacuarembó. Cero Yuyo es mi propio servicio de corte de pasto y jardinería. Esta web la hice yo mismo con Tacuara Lab, mi estudio de páginas web.',
  },
  contact: {
    heading: 'Atiendo en la ciudad de Tacuarembó',
    text: 'Trabajo solo dentro de la ciudad de Tacuarembó.',
    phone: 'WhatsApp 098 871 858',
  },
  footer: {
    location: 'Cero Yuyo · Tacuarembó, Uruguay',
    credit: 'Sitio por Tacuara Lab',
  },
  notFound: {
    title: 'Página no encontrada | Cero Yuyo',
    heading: 'Página no encontrada',
  },
};
