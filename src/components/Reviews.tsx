import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { translations, Language } from '../data/i18n';
import { reviews } from '../data/menu';

interface ReviewsProps {
  lang: Language;
}

export default function Reviews({ lang }: ReviewsProps) {
  const t = translations[lang].reviews;
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    const amount = 340;
    track.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-punjab-brown relative overflow-hidden">
      <div className="absolute inset-0 punjabi-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-punjab-cream mb-3">
            {t.title}
          </h2>
          <p className="text-punjab-cream/70 text-lg max-w-xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-20 h-1 bg-punjab-mustard mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-punjab-mustard text-punjab-brown items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-punjab-mustard text-punjab-brown items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={trackRef}
            className="carousel-track flex gap-6 overflow-x-auto pb-4 px-2"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-72 sm:w-80 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all group"
              >
                <Quote className="w-8 h-8 text-punjab-mustard/40 mb-3" />
                <p className="text-punjab-cream/90 leading-relaxed mb-4 text-sm sm:text-base italic">
                  "{lang === 'en' ? review.text : review.textKn}"
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? 'text-punjab-mustard fill-punjab-mustard' : 'text-white/20'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-punjab-mustard/30 flex items-center justify-center text-punjab-mustard font-bold text-sm">
                    {review.author.charAt(0)}
                  </div>
                  <span className="text-punjab-cream/80 font-medium text-sm">{review.author}</span>
                </div>
              </div>
            ))}

            <div className="flex-shrink-0 w-72 sm:w-80 bg-punjab-mustard/10 backdrop-blur-sm rounded-2xl p-6 border border-punjab-mustard/20 flex flex-col items-center justify-center text-center">
              <Star className="w-10 h-10 text-punjab-mustard mb-3" />
              <p className="text-punjab-cream font-heading font-bold text-2xl">4.1</p>
              <p className="text-punjab-cream/60 text-sm mt-1">
                {lang === 'en' ? 'from 442 reviews' : '442 ವಿಮರ್ಶೆಗಳಿಂದ'}
              </p>
              <div className="flex gap-0.5 mt-2">
                {[1,2,3,4].map((s) => (
                  <Star key={s} className="w-4 h-4 text-punjab-mustard fill-punjab-mustard" />
                ))}
                <Star className="w-4 h-4 text-punjab-mustard/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
