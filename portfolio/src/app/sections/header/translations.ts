export interface Translation {
  home: string;
  experience: string;
  projects: string;
  testimonials: string;
  skills: string;
  contact: string;
}

const spanish: Translation = {
  home: 'Inicio',
  experience: 'Experiencia',
  projects: 'Proyectos',
  testimonials: 'Testimonios',
  skills: 'Habilidades',
  contact: 'Contacto',
};

const english: Translation = {
  home: 'Home',
  experience: 'Experience',
  projects: 'Projects',
  testimonials: 'Testimonials',
  skills: 'Skills',
  contact: 'Contact',
};

export function getTranslation(language: string): Translation {
  return language === 'es' ? spanish : english;
}
