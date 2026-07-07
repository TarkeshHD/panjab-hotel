import { MapPin, Phone, Clock, Navigation, Share2 } from 'lucide-react';
import { translations, Language } from '../data/i18n';

interface LocationProps {
  lang: Language;
}

export default function Location({ lang }: LocationProps) {
  const t = translations[lang].location;

  return (
    <section id="location" className="py-16 sm:py-24 bg-white">
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

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          <div className="space-y-6">
            <div className="bg-punjab-cream/50 rounded-2xl p-6 border border-punjab-cream-dark/30">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-punjab-red/10 text-punjab-red flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-punjab-brown mb-1">
                      {lang === 'en' ? 'Address' : 'ವಿಳಾಸ'}
                    </h3>
                    <p className="text-punjab-brown-light text-sm leading-relaxed">{t.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-punjab-green/10 text-punjab-green flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-punjab-brown mb-1">
                      {lang === 'en' ? 'Phone' : 'ಫೋನ್'}
                    </h3>
                    <a href="tel:+919988029873" className="text-punjab-red hover:underline text-sm">
                      {t.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-punjab-mustard/10 text-punjab-mustard-dark flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-punjab-brown mb-1">
                      {lang === 'en' ? 'Hours' : 'ಸಮಯ'}
                    </h3>
                    <p className="text-punjab-brown-light text-sm">{t.timing}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/search/Punjab+Xpress+SG+Palya+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                <Navigation className="w-4 h-4" />
                {t.openMaps}
              </a>
              <a
                href="tel:+919988029873"
                className="btn-secondary flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                {t.callRestaurant}
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Punjab Xpress',
                      text: 'Punjab Xpress - Authentic Punjabi Restaurant in SG Palya, Bengaluru',
                      url: window.location.href,
                    }).catch(() => {});
                  }
                }}
                className="bg-punjab-green text-white px-5 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all hover:bg-punjab-green-light hover:shadow-lg active:scale-95"
              >
                <Share2 className="w-4 h-4" />
                {t.sendToPhone}
              </button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-punjab-cream-dark/30 h-80 sm:h-96 lg:h-full min-h-[320px]">
            <iframe
              title="Punjab Xpress Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7!2d77.62!3d12.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSG+Palya+Bengaluru!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
