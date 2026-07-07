import { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { translations, Language } from '../data/i18n';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: t.home, href: '#hero' },
    { label: t.menu, href: '#menu' },
    { label: t.about, href: '#about' },
    { label: t.reviews, href: '#reviews' },
    { label: t.gallery, href: '#gallery' },
    { label: t.location, href: '#location' },
  ];

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-punjab-brown/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleClick('#hero'); }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-punjab-mustard flex items-center justify-center">
              <span className="text-punjab-brown font-heading font-extrabold text-lg sm:text-xl">PX</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-lg transition-colors ${scrolled ? 'text-punjab-cream' : 'text-white'}`}>
                Punjab Xpress
              </span>
              <span className={`block text-xs transition-colors ${scrolled ? 'text-punjab-mustard-light' : 'text-punjab-mustard-light'}`}>
                ಪಂಜಾಬ್ ಎಕ್ಸ್‌ಪ್ರೆಸ್
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 ${
                  scrolled ? 'text-punjab-cream hover:text-white' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:bg-white/10 ${
                scrolled ? 'text-punjab-cream' : 'text-white'
              }`}
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>

            <a
              href="tel:+919988029873"
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                scrolled
                  ? 'bg-punjab-red text-white hover:bg-punjab-red-light'
                  : 'bg-punjab-mustard text-punjab-brown hover:bg-punjab-mustard-light'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all hover:bg-white/10 ${
                scrolled ? 'text-punjab-cream' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-punjab-brown/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                className="block px-4 py-3 rounded-lg text-punjab-cream hover:bg-white/10 hover:text-white font-medium transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919988029873"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-punjab-red text-white font-medium mt-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
