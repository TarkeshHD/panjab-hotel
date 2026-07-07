import { useState } from 'react';
import { translations, Language } from '../data/i18n';
import { menuItems, MenuItem } from '../data/menu';

interface MenuSectionProps {
  lang: Language;
}

type Category = 'all' | MenuItem['category'];

export default function MenuSection({ lang }: MenuSectionProps) {
  const t = translations[lang].menu;
  const [active, setActive] = useState<Category>('all');

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: t.all },
    { key: 'parathas', label: t.parathas },
    { key: 'meals', label: t.meals },
    { key: 'tandoori', label: t.tandoori },
    { key: 'drinks', label: t.drinks },
    { key: 'snacks', label: t.snacks },
  ];

  const filtered = active === 'all' ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-punjab-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-punjab-brown mb-3">
            {t.title}
          </h2>
          <p className="text-punjab-brown-light text-lg max-w-xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-20 h-1 bg-punjab-mustard mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat.key
                  ? 'bg-punjab-red text-white shadow-md scale-105'
                  : 'bg-white text-punjab-brown hover:bg-punjab-mustard/10 border border-punjab-cream-dark'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-punjab-cream-dark/30 group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={lang === 'en' ? item.name : item.nameKn}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 right-3 bg-punjab-mustard text-punjab-brown px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  {item.price}
                </span>
                <span className="absolute bottom-3 left-3 bg-punjab-red/90 text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                  {lang === 'en'
                    ? translations.en.menu[item.category as keyof typeof translations.en.menu]
                    : translations.kn.menu[item.category as keyof typeof translations.kn.menu]}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-xl text-punjab-brown mb-1">
                  {lang === 'en' ? item.name : item.nameKn}
                </h3>
                <p className="text-punjab-brown-light text-sm leading-relaxed">
                  {lang === 'en' ? item.description : item.descriptionKn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
