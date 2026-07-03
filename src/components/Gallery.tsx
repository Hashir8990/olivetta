import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { src: '/images/interior.jpg', caption: 'The dining room' },
  { src: '/images/pizza.jpg', caption: 'Margherita D.O.P.' },
  { src: '/images/wine.jpg', caption: 'A glass of Chianti' },
  { src: '/images/terrace.jpg', caption: 'The terrace, summer evenings' },
  { src: '/images/chef.jpg', caption: 'Chef Marco plating' },
  { src: '/images/risotto.jpg', caption: 'Saffron risotto' },
  { src: '/images/bruschetta.jpg', caption: 'Bruschetta mista' },
  { src: '/images/antipasto.jpg', caption: 'Antipasto della casa' },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="olive-divider text-terracotta mb-5 text-xs tracking-[0.3em] uppercase font-semibold mx-auto">
            <span>La Galleria</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-olive mb-4 leading-tight">
            A taste of Olivetta
          </h2>
          <p className="font-serif-accent italic text-xl text-charcoal/70 max-w-2xl mx-auto">
            From the wood-fired oven to the candlelit tables.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setSelected(i)}
              className={`relative overflow-hidden group cursor-zoom-in ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              } ${i === 5 ? 'col-span-2' : ''}`}
            >
              <div className={`bg-cream-dark ${i === 0 ? 'aspect-square' : 'aspect-square'}`}>
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-cream font-display text-lg">{img.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[90] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/80 hover:text-cream p-2"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-cream/80 hover:text-cream text-3xl px-3 py-2 hover:bg-cream/10 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected - 1 + galleryImages.length) % galleryImages.length);
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-cream/80 hover:text-cream text-3xl px-3 py-2 hover:bg-cream/10 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelected((selected + 1) % galleryImages.length);
            }}
            aria-label="Next"
          >
            ›
          </button>
          <figure className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selected].src}
              alt={galleryImages[selected].caption}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <figcaption className="text-cream text-center mt-4 font-display text-2xl">
              {galleryImages[selected].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}