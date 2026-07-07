import { Wallet, GraduationCap, Zap, FlameKindling } from 'lucide-react';
import { translations, Language } from '../data/i18n';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang].about;

  const highlights = [
    { icon: Wallet, label: t.highlight1, color: 'bg-punjab-mustard/10 text-punjab-mustard-dark' },
    { icon: GraduationCap, label: t.highlight2, color: 'bg-punjab-green/10 text-punjab-green' },
    { icon: Zap, label: t.highlight3, color: 'bg-punjab-red/10 text-punjab-red' },
    { icon: FlameKindling, label: t.highlight4, color: 'bg-orange-100 text-orange-700' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Punjab Xpress restaurant interior"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-punjab-brown/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1">
                      {[1,2,3,4,5].map((s) => (
                        <span key={s} className="w-5 h-5 text-punjab-mustard">★</span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-punjab-brown">4.1 from 442 reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-punjab-mustard/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-punjab-red/10 rounded-full blur-xl" />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-punjab-brown mb-3">
              {t.title}
            </h2>
            <p className="text-punjab-mustard font-medium text-lg mb-6">
              {t.subtitle}
            </p>
            <div className="w-16 h-1 bg-punjab-mustard rounded-full mb-6" />

            <div className="space-y-4 text-punjab-brown-light leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-8">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-punjab-cream/50 hover:bg-punjab-cream transition-colors"
                >
                  <div className={`p-2 rounded-lg ${h.color}`}>
                    <h.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-punjab-brown text-sm sm:text-base">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
