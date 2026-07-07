import { Heart } from 'lucide-react';
import { translations, Language } from '../data/i18n';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  return (
    <footer className="bg-punjab-brown-dark py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-punjab-mustard flex items-center justify-center">
                <span className="text-punjab-brown font-heading font-extrabold text-lg">PX</span>
              </div>
              <div>
                <span className="font-heading font-bold text-punjab-cream text-lg">Punjab Xpress</span>
                <span className="block text-punjab-mustard-light text-xs">ಪಂಜಾಬ್ ಎಕ್ಸ್‌ಪ್ರೆಸ್</span>
              </div>
            </div>
            <p className="text-punjab-cream/60 text-sm leading-relaxed">
              {lang === 'en'
                ? 'Authentic Punjabi flavours in the heart of Bengaluru. Budget-friendly, student-friendly, and served with love.'
                : 'ಬೆಂಗಳೂರಿನ ಹೃದಯದಲ್ಲಿ ನಿಜವಾದ ಪಂಜಾಬಿ ರುಚಿಗಳು. ಬಜೆಟ್-ಸ್ನೇಹಿ, ವಿದ್ಯಾರ್ಥಿ-ಸ್ನೇಹಿ ಮತ್ತು ಪ್ರೀತಿಯಿಂದ ಸೇವಿಸಲಾಗುತ್ತದೆ.'}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-punjab-cream mb-4">{nav.home}</h4>
            <div className="space-y-2">
              {[
                { label: nav.menu, href: '#menu' },
                { label: nav.about, href: '#about' },
                { label: nav.reviews, href: '#reviews' },
                { label: nav.gallery, href: '#gallery' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="block text-punjab-cream/60 hover:text-punjab-mustard text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-punjab-cream mb-4">
              {lang === 'en' ? 'Contact' : 'ಸಂಪರ್ಕ'}
            </h4>
            <div className="space-y-2 text-sm text-punjab-cream/60">
              <p>099880 29873</p>
              <p>SG Palya, Bengaluru</p>
              <p>{lang === 'en' ? 'Open until 10:45 PM' : 'ರಾತ್ರಿ 10:45 ರವರೆಗೆ ತೆರೆದಿದೆ'}</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-punjab-cream mb-4">
              {lang === 'en' ? 'Services' : 'ಸೇವೆಗಳು'}
            </h4>
            <div className="space-y-2 text-sm text-punjab-cream/60">
              <p>{lang === 'en' ? 'Dine-in' : 'ಡೈನ್-ಇನ್'}</p>
              <p>{lang === 'en' ? 'Drive-through' : 'ಡ್ರೈವ್-ಥ್ರೂ'}</p>
              <p>{lang === 'en' ? 'No-contact delivery' : 'ನೋ-ಕಾಂಟಾಕ್ಟ್ ಡೆಲಿವರಿ'}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-punjab-cream/40 text-sm">
            &copy; {new Date().getFullYear()} Punjab Xpress. {t.rights}
          </p>
          <p className="text-punjab-cream/40 text-sm flex items-center gap-1">
            {t.madeWith} <Heart className="w-3 h-3 text-punjab-red fill-punjab-red" />
          </p>
        </div>
      </div>
    </footer>
  );
}
