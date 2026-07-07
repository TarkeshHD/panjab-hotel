import { Phone, MapPin, ShoppingBag } from 'lucide-react';
import { translations, Language } from '../data/i18n';

interface CTAProps {
  lang: Language;
}

export default function CTA({ lang }: CTAProps) {
  const t = translations[lang].cta;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-punjab-red-dark via-punjab-red to-punjab-red-light relative overflow-hidden">
      <div className="absolute inset-0 punjabi-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-punjab-mustard/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-punjab-mustard/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white text-shadow mb-4 leading-tight">
          {t.heading}
        </h2>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10">
          {t.subheading}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="tel:+919988029873"
            className="bg-punjab-mustard text-punjab-brown px-7 py-3.5 rounded-lg font-bold text-base sm:text-lg flex items-center gap-2 transition-all hover:bg-punjab-mustard-light hover:shadow-xl active:scale-95"
          >
            <Phone className="w-5 h-5" />
            {t.callNow}
          </a>
          <a
            href="https://www.google.com/maps/search/Punjab+Xpress+SG+Palya+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/15 text-white border border-white/30 px-7 py-3.5 rounded-lg font-bold text-base sm:text-lg flex items-center gap-2 transition-all hover:bg-white/25 active:scale-95"
          >
            <MapPin className="w-5 h-5" />
            {t.getDirections}
          </a>
          <a
            href="#"
            className="bg-white/15 text-white border border-white/30 px-7 py-3.5 rounded-lg font-bold text-base sm:text-lg flex items-center gap-2 transition-all hover:bg-white/25 active:scale-95"
          >
            <ShoppingBag className="w-5 h-5" />
            {t.orderOnline}
          </a>
        </div>
      </div>
    </section>
  );
}
