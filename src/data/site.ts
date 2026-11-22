import type { ImageMetadata } from 'astro';
import hero from '../assets/photos/hero.webp';
import job1Before from '../assets/photos/job1-before.webp';
import job1After from '../assets/photos/job1-after.webp';
import job2Before from '../assets/photos/job2-before.webp';
import job2After from '../assets/photos/job2-after.webp';
import job3Before from '../assets/photos/job3-before.webp';
import job3After from '../assets/photos/job3-after.webp';
import job4Before from '../assets/photos/job4-before.webp';
import job4After from '../assets/photos/job4-after.webp';

// Keep false until the accountant confirms whether registration is required to advertise.
export const INDEXABLE = false;
export const SITE_URL = 'https://cero-yuyo.tacuaralab.workers.dev';

export const socialImage = {
  path: '/og-cero-yuyo.jpg',
  width: 1200,
  height: 630,
  alt: 'Pasto alto a la izquierda y pasto cortado a la derecha, junto a un árbol y un muro.',
};

export interface SiteImage {
  src: ImageMetadata;
  alt: string;
}

export interface Job {
  before: SiteImage;
  after: SiteImage;
  description?: string;
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
  jobsIntro: string;
  jobs: Job[];
  about: { heading: string; text: string };
  contact: { heading: string; phone: string };
  footer: { location: string; copyright: string; credit: string };
  notFound: { title: string; heading: string };
}

export const site: SiteContent = {
  name: 'Cero Yuyo',
  title: 'Cero Yuyo | Corte de pasto y jardinería en Tacuarembó',
  description:
    'Corte de pasto, poda, bordeado, limpieza y jardinería en la ciudad de Tacuarembó, Uruguay. Mandame una foto del terreno y te paso el presupuesto gratis.',
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
  heroImage: {
    src: hero,
    alt: 'Gustavo al aire libre, con sombrero y una bordeadora apoyada en el hombro.',
  },
  services: {
    heading: 'Qué hago',
    items: [
      { title: 'Corte de pasto', text: 'Patios, jardines y terrenos de la ciudad.' },
      { title: 'Bordeado', text: 'Bordes prolijos junto a veredas, paredes y canteros.' },
      { title: 'Limpieza de terrenos', text: 'Saco los yuyos y dejo el terreno limpio.' },
      {
        title: 'Poda de arbustos y árboles chicos',
        text: 'Para mantener el jardín prolijo y cuidado.',
      },
      { title: 'Canteros y plantaciones', text: 'Limpio canteros y hago plantaciones chicas.' },
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
  jobsHeading: 'Trabajos recientes',
  jobsIntro: 'Antes y después de trabajos reales en Tacuarembó.',
  jobs: [
    {
      before: {
        src: job1Before,
        alt: 'Antes: pasto alto junto a un árbol y un muro en una franja de terreno junto a la calle.',
      },
      after: {
        src: job1After,
        alt: 'Después: pasto cortado alrededor del árbol y junto al muro en la misma franja de terreno.',
      },
      description: '',
    },
    {
      before: {
        src: job2Before,
        alt: 'Antes: jardín con pasto alto alrededor de un arbusto de flores violetas y una reja roja.',
      },
      after: {
        src: job2After,
        alt: 'Después: pasto cortado alrededor de canteros con flores en el jardín.',
      },
      description: '',
    },
    {
      before: {
        src: job3Before,
        alt: 'Antes: pasto alto junto a un alambrado y un árbol, al borde de una calle.',
      },
      after: {
        src: job3After,
        alt: 'Después: franja de pasto cortado junto al alambrado y la calle.',
      },
      description: '',
    },
    {
      before: {
        src: job4Before,
        alt: 'Antes: pasto alto y montones de vegetación cortada junto a un alambrado.',
      },
      after: {
        src: job4After,
        alt: 'Después: terreno con pasto corto y restos de vegetación junto al alambrado, con un campo al fondo.',
      },
      description: '',
    },
  ],
  about: {
    heading: 'Quién soy',
    text: 'Soy Gustavo, de Tacuarembó. Voy yo mismo a cada trabajo, sin intermediarios. Mandame una foto del terreno y coordinamos.',
  },
  contact: {
    heading: 'Atiendo en la ciudad de Tacuarembó',
    phone: 'WhatsApp 098 871 858',
  },
  footer: {
    location: 'Corte de pasto y jardinería en la ciudad de Tacuarembó, Uruguay.',
    copyright: '© 2026 Cero Yuyo',
    credit: 'Sitio por Tacuara Lab',
  },
  notFound: {
    title: 'Página no encontrada | Cero Yuyo',
    heading: 'Página no encontrada',
  },
};
