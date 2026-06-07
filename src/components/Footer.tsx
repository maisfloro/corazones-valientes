
import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Instagram, Facebook, Heart } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="space-y-6">
           <div className="flex items-center gap-2">
             <img 
               src="/src/assets/images/modern_foundation_logo_1780799544483.png" 
               alt="Corazones Valientes Logo" 
               className="w-20 h-20 object-contain"
             />
             <span className="font-display font-bold text-xl uppercase tracking-tighter">
               Corazones Valientes
             </span>
           </div>
           <p className="text-white/60 font-light leading-relaxed">
             {t.heroSubtitle}
           </p>
           <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-red transition-colors">
                <Facebook size={20} />
              </a>
           </div>
        </div>

        <div className="space-y-6">
           <h4 className="text-lg font-bold uppercase tracking-widest text-brand-red-light">
             {language === 'es' ? 'Contacto' : 'Contact'}
           </h4>
           <ul className="space-y-4">
              <li className="flex items-start gap-4 text-white/70">
                <MapPin className="text-brand-red-light shrink-0" size={20} />
                <span>{t.address}</span>
              </li>
              <li className="flex items-center gap-4 text-white/70">
                <Phone className="text-brand-red-light shrink-0" size={20} />
                <span>{t.phone}</span>
              </li>
           </ul>
        </div>

        <div className="space-y-6 font-display">
           <h4 className="text-lg font-bold uppercase tracking-widest text-brand-red-light">
             {language === 'es' ? 'Nuestra Esencia' : 'Our Essence'}
           </h4>
           <div className="bg-white/5 p-8 rounded-3xl relative overflow-hidden group">
              <Heart className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-brand-red/10 transition-colors" size={120} fill="currentColor" />
              <p className="relative z-10 text-xl font-medium leading-normal italic">
                {language === 'es' 
                  ? '"El servicio a los demás es el alquiler que pagas por tu habitación aquí en la Tierra."' 
                  : '"Service to others is the rent you pay for your room here on Earth."'}
              </p>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} Fundación Corazones Valientes. {t.footerRights}</p>
        <div className="flex gap-8">
           <a href="#terminos" className="hover:text-white transition-colors">{t.navTerms}</a>
        </div>
      </div>
    </footer>
  );
}
