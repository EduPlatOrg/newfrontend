import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function obtenerNombreIdioma(codigoIdioma) {
  const idiomas = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
    it: 'Italiano',
    pt: 'Português',
    otros: 'Otros',
  };

  const codigo = codigoIdioma.toLowerCase();
  return idiomas[codigo] || 'Idioma desconocido';
}

export function tiempoDesde(fecha) {
  const ahora = new Date();
  const fechaPasada = new Date(fecha);
  const diferenciaEnMilisegundos = ahora - fechaPasada;
  const diferenciaEnMeses =
    diferenciaEnMilisegundos / (1000 * 60 * 60 * 24 * 30);
  const diferenciaEnAños = diferenciaEnMeses / 12;

  if (diferenciaEnAños >= 1) {
    return `${Math.floor(diferenciaEnAños)} años`;
  } else {
    return `${Math.floor(diferenciaEnMeses)} meses`;
  }
}
