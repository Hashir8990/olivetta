import { ArrowDown, Star, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-pasta.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/80" />
      </div>

      {/* Decorative frame */}
      <div className="absolute inset-6 sm:inset-10 border border-cream/20 pointer-events-none hidden md:block" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-cream px-6">
        <div className="animate-fade-up">
          <div className="olive-divider mb-6 text-gold-light">
            <Star className="w-4 h-4 fill-gold-light" />
            <span className="text-xs tracking-[0.4em] uppercase font-medium">
              Michelin Recommended · 2024
            </span>
            <Star className="w-4 h-4 fill-gold-light" />
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium leading-[0.95] mb-6">
            Olivetta
          </h1>

          <p className="font-serif-accent italic text-2xl sm:text-3xl md:text-4xl text-cream/95 mb-2">
            Cucina Italiana
          </p>

          <p className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Handmade pasta, wood-fired pizza, and a cellar of small Italian wines —
            served the way nonna would have wanted.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="bg-terracotta hover:bg-terracotta-dark text-cream px-8 py-4 rounded-full font-medium tracking-wide transition-all hover:shadow-2xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              Order Online
            </a>
            <a
              href="#reserve"
              className="border border-cream/40 hover:bg-cream hover:text-charcoal px-8 py-4 rounded-full font-medium tracking-wide transition-all"
            >
              Reserve a Table
            </a>
          </div>
        </div>

        {/* Info pills */}
        <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-cream/80 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold-light" />
            <span>Open until 11pm</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-cream/30" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-light" />
            <span>218 Mulberry St · NYC</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-cream/30" />
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold-light text-gold-light" />
            ))}
            <span className="ml-1.5">4.9 · 2,400+ reviews</span>
          </div>
        </div>

        <a
          href="#story"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 hover:text-cream transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}