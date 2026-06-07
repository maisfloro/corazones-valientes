
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { Heart, Stars, ShieldCheck } from 'lucide-react';

export function About() {
  const { t, language } = useLanguage();

  return (
    <section id="nosotros" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pink text-brand-red mb-6">
              <Heart size={18} fill="currentColor" />
              <span className="text-sm font-bold uppercase tracking-wider">Desde 2021</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {t.aboutTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light italic border-l-4 border-brand-red pl-6">
              "{t.aboutHistory}"
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
               <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow">
                  <h4 className="text-brand-red font-bold text-xl mb-2">Elizabeth Pimentel</h4>
                  <p className="text-gray-500">{language === 'es' ? 'Fundadora' : 'Founder'}</p>
               </div>
               <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow">
                  <h4 className="text-brand-red font-bold text-xl mb-2">Judith Rodriguez</h4>
                  <p className="text-gray-500">{language === 'es' ? 'Fundadora' : 'Founder'}</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl skew-y-1">
               <img 
                 src="/src/assets/photos/9.jpg" 
                 alt="Actividades de la fundación" 
                 className="w-full h-auto"
               />
               <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply" />
            </div>
            {/* Background elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-pink rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gray-100 rounded-2xl -z-10 rotate-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Activities() {
  const { t } = useLanguage();

  const activityList = [
    { title: t.activityEnglish, description: t.activityEnglishDesc, icon: '🔤', color: 'bg-blue-50 text-blue-600' },
    { title: t.activityMusic, description: t.activityMusicDesc, icon: '🎵', color: 'bg-purple-50 text-purple-600' },
    { title: t.activityDance, description: t.activityDanceDesc, icon: '💃', color: 'bg-orange-50 text-orange-600' },
    { title: t.activityArts, description: t.activityArtsDesc, icon: '🎨', color: 'bg-pink-50 text-pink-600' },
    { title: t.activityValues, description: t.activityValuesDesc, icon: '🤝', color: 'bg-green-50 text-green-600' },
  ];

  return (
    <section id="actividades" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.activitiesTitle}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">{t.activitiesSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activityList.map((act, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
          >
             <div className={`w-20 h-20 ${act.color} rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {act.icon}
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-red transition-colors">{act.title}</h3>
             <p className="text-gray-600 leading-relaxed">
                {act.description}
             </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Terms() {
  const { t } = useLanguage();

  return (
    <section id="terminos" className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-20 h-20 bg-brand-pink text-brand-red rounded-full flex items-center justify-center mx-auto mb-8">
           <ShieldCheck size={40} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t.termsTitle}</h2>
        <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
          <p className="bg-brand-pink/30 p-6 rounded-2xl border border-brand-pink text-brand-red-dark">
             {t.termsBody1}
          </p>
          <p>
             {t.termsBody2}
          </p>
        </div>
      </div>
    </section>
  );
}
