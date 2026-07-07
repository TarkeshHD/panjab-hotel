import { ChevronRight, Phone, MapPin, ShoppingBag } from 'lucide-react';
import { translations, Language } from '../data/i18n';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/55810/indian-paratha-golden-crispy-bread-55810.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Punjabi food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-punjab-brown/80 via-punjab-brown/60 to-punjab-brown/90" />
        <div className="absolute inset-0 hero-pattern" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20 pb-16">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-punjab-mustard/20 backdrop-blur-sm border border-punjab-mustard/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-punjab-mustard animate-pulse" />
            <span className="text-punjab-mustard-light text-sm font-medium">
              {lang === 'en' ? 'Open Now' : 'ಈಗ ತೆರೆದಿದೆ'}
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white text-shadow leading-tight mb-4 animate-fade-up">
          {t.heading}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-punjab-cream/90 max-w-2xl mx-auto mb-8 animate-fade-up text-shadow-sm leading-relaxed">
          {t.subheading}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-fade-up">
          <a
            href="#menu"
            onClick={(e) => { e.preventDefault(); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary flex items-center gap-2 text-base"
          >
            <ShoppingBag className="w-5 h-5" />
            {t.viewMenu}
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+919988029873"
            className="btn-secondary flex items-center gap-2 text-base"
          >
            <Phone className="w-5 h-5" />
            {t.callNow}
          </a>
          <a
            href="https://www.google.com/maps/search/Punjab+Xpress+SG+Palya+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 text-base"
          >
            <MapPin className="w-5 h-5" />
            {t.getDirections}
          </a>
          <a
            href="#"
            className="btn-outline flex items-center gap-2 text-base border-punjab-mustard text-punjab-mustard hover:bg-punjab-mustard hover:text-punjab-brown"
          >
            <ShoppingBag className="w-5 h-5" />
            {t.orderOnline}
          </a>
        </div>

        <div className="mt-12 animate-float">
          <div className="inline-flex items-center gap-1 text-punjab-mustard-light/60">
            <ChevronRight className="w-5 h-5 animate-bounce" />
            <span className="text-sm">{lang === 'en' ? 'Scroll to explore' : 'ಎಕ್ಸ್‌ಪ್ಲೋರ್ ಮಾಡಲು ಸ್ಕ್ರೋಲ್ ಮಾಡಿ'}</span>
            <ChevronRight className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-punjab-cream to-transparent z-10" />
    </section>
  );
}
