import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { translations, Language } from '../data/i18n';
import { galleryImages, GalleryImage } from '../data/menu';

interface GalleryProps {
  lang: Language;
}

export default function Gallery({ lang }: GalleryProps) {
  const t = translations[lang].gallery;
  const [filter, setFilter] = useState<'all' | 'food' | 'ambience'>('all');
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = filter === 'all' ? galleryImages : galleryImages.filter((i) => i.category === filter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-punjab-cream">
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

        <div className="flex justify-center gap-2 sm:gap-3 mb-8">
          {(['all', 'food', 'ambience'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-punjab-red text-white shadow-md'
                  : 'bg-white text-punjab-brown hover:bg-punjab-mustard/10 border border-punjab-cream-dark'
              }`}
            >
              {cat === 'all' ? t.all : cat === 'food' ? t.food : t.ambience}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((img) => (
            <div
              key={img.id}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md aspect-square"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-punjab-brown/0 group-hover:bg-punjab-brown/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {lightbox && (
          <div
            className="lightbox-overlay fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
