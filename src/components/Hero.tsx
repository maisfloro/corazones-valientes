
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: t.navHome, href: '#inicio' },
    { name: t.navAbout, href: '#nosotros' },
    { name: t.navActivities, href: '#actividades' },
    { name: t.navTerms, href: '#terminos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <img 
            src={logo} 
            alt="Corazones Valientes Logo" 
            className="w-20 h-20 object-contain"
          />
          <span className={`font-display font-bold text-lg hidden sm:block ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            CORAZONES VALIENTES
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className={`font-medium transition-colors hover:text-brand-red ${scrolled ? 'text-gray-600' : 'text-white/90'}`}
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all ${scrolled ? 'border-gray-200 text-gray-700 hover:border-brand-red' : 'border-white/30 text-white hover:bg-white/10'}`}
          >
            <Globe size={16} />
            <span className="text-sm font-semibold uppercase">{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleLanguage} className={`${scrolled ? 'text-gray-700' : 'text-white'}`}>
             <Globe size={20} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-gray-900' : 'text-white'}`}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-semibold text-gray-800 hover:text-brand-red border-b border-gray-100 pb-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import logo from '../assets/images/modern_foundation_logo_1780799544483.png';

const photos = import.meta.glob('../assets/photos/*.jpg', { eager: true, import: 'default' });
const slideIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50, 60];
const slides = slideIds.map(id => ({
  id,
  image: photos[`../assets/photos/${id}.jpg`] as string
}));

export function Hero() {
  const { t, language } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="h-screen relative overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 hero-gradient z-10" />
          <img 
            src={slides[current].image} 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-white/80 uppercase tracking-widest font-bold mb-4 block text-sm sm:text-base">
            {language === 'es' ? 'Fundación' : 'Foundation'}
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
            {t.heroSubtitle}
          </p>
          <a 
            href="#nosotros"
            className="bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 inline-block shadow-2xl"
          >
            {language === 'es' ? 'Conócenos' : 'Get to Know Us'}
          </a>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-10 bg-brand-red' : 'w-2 bg-white/40 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
