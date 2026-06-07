
export interface Translation {
  navHome: string;
  navAbout: string;
  navActivities: string;
  navTerms: string;
  navContact: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutHistory: string;
  foundersTitle: string;
  activitiesTitle: string;
  activitiesSubtitle: string;
  activityEnglish: string;
  activityMusic: string;
  activityDance: string;
  activityArts: string;
  activityValues: string;
  termsTitle: string;
  termsBody1: string;
  termsBody2: string;
  footerRights: string;
  address: string;
  phone: string;
}

export type Language = 'es' | 'en';

export const translations: Record<Language, Translation> = {
  es: {
    navHome: 'Inicio',
    navAbout: 'Nosotros',
    navActivities: 'Actividades',
    navTerms: 'Términos',
    navContact: 'Contacto',
    heroTitle: 'Fundación Corazones Valientes de Dios',
    heroSubtitle: 'Transformando vidas a través del amor y el servicio desde 2021.',
    aboutTitle: 'Nuestra Historia',
    aboutHistory: 'Venimos realizando una labor dedicada al servicio de la comunidad desde noviembre del año 2021, brindando apoyo y herramientas para el crecimiento integral.',
    foundersTitle: 'Nuestras Fundadoras',
    activitiesTitle: 'Lo que Hacemos',
    activitiesSubtitle: 'Ofrecemos diversos programas diseñados para el desarrollo de niños y niñas.',
    activityEnglish: 'Clases de Inglés',
    activityMusic: 'Música (Instrumentos)',
    activityDance: 'Danza Folclórica',
    activityArts: 'Artes',
    activityValues: 'Reforzamiento en Valores',
    termsTitle: 'Términos y Condiciones',
    termsBody1: 'Fundación gratuita para la comunidad. No hay cobros por servicio ni ánimo de lucro.',
    termsBody2: 'Nos reservamos el derecho de admisión para proteger a la comunidad.',
    footerRights: 'Todos los derechos reservados.',
    address: 'Carrera 20B #40 B 74 Barrio La Maria',
    phone: 'Teléfono: +57 302 387 9067',
  },
  en: {
    navHome: 'Home',
    navAbout: 'About Us',
    navActivities: 'Activities',
    navTerms: 'Terms',
    navContact: 'Contact',
    heroTitle: 'God\'s Brave Hearts Foundation',
    heroSubtitle: 'Transforming lives through love and service since 2021.',
    aboutTitle: 'Our History',
    aboutHistory: 'We have been carrying out dedicated community service since November 2021, providing support and tools for integral growth.',
    foundersTitle: 'Our Founders',
    activitiesTitle: 'What We Do',
    activitiesSubtitle: 'We offer various programs designed for child development.',
    activityEnglish: 'English Classes',
    activityMusic: 'Music (Instruments)',
    activityDance: 'Folk Dance',
    activityArts: 'Arts',
    activityValues: 'Values Reinforcement',
    termsTitle: 'Terms and Conditions',
    termsBody1: 'Free foundation for the community. No service fees or profit motive.',
    termsBody2: 'We reserve the right of admission to protect the community.',
    footerRights: 'All rights reserved.',
    address: 'Carrera 20B #40 B 74 Barrio La Maria',
    phone: 'Phone: +57 302 387 9067',
  }
};
