import { Phone, MessageCircle } from 'lucide-react';
import { translations, Language } from '../data/i18n';

interface FloatingButtonsProps {
  lang: Language;
}

export default function FloatingButtons({ lang }: FloatingButtonsProps) {
  const t = translations[lang].floating;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919988029873"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
      <a
        href="tel:+919988029873"
        className="w-14 h-14 bg-punjab-red rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
        aria-label={t.call}
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
