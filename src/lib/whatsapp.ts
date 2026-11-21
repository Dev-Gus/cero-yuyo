import { site } from '../data/site';

export function whatsappUrl(): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;
}
