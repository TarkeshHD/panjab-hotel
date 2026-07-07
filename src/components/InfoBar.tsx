import { Star, IndianRupee, Clock, UtensilsCrossed } from 'lucide-react';
import { translations, Language } from '../data/i18n';

interface InfoBarProps {
  lang: Language;
}

export default function InfoBar({ lang }: InfoBarProps) {
  const t = translations[lang].info;

  const items = [
    { icon: Star, label: t.rating, color: 'text-punjab-mustard' },
    { icon: IndianRupee, label: t.price, color: 'text-punjab-green' },
    { icon: Clock, label: t.timing, color: 'text-punjab-red' },
    { icon: UtensilsCrossed, label: t.services, color: 'text-punjab-brown' },
  ];

  return (
    <section className="relative z-20 -mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-punjab-cream-dark/50 p-4 sm:p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-punjab-cream/50 hover:bg-punjab-cream transition-colors"
              >
                <div className={`p-2 rounded-lg bg-white shadow-sm ${item.color}`}>
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-sm sm:text-base font-medium text-punjab-brown leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
