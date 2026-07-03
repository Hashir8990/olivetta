import { Wheat, Flame, Wine, Leaf } from 'lucide-react';

const features = [
  {
    icon: Wheat,
    title: 'Handmade Daily',
    text: 'Pasta rolled and cut by hand every morning, the way it has been done for centuries.',
  },
  {
    icon: Flame,
    title: 'Wood-Fired Oven',
    text: 'A 900°F oak-fired hearth imported from Naples gives our pizza its perfect leopard-spotted crust.',
  },
  {
    icon: Wine,
    title: 'Italian Cellar',
    text: 'Over 200 bottles, from Tuscan Chiantis to Sicilian whites — and the prosecco is always cold.',
  },
  {
    icon: Leaf,
    title: 'Farm to Table',
    text: 'Locally-sourced produce, line-caught fish, heritage pork from small family farms.',
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-cream relative overflow-hidden">
      {/* Decorative olive branch watermark */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 text-olive/[0.04] pointer-events-none">
        <svg width="500" height="500" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 Q 70 30 50 50 Q 30 70 50 90" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="35" cy="20" rx="6" ry="10" />
          <ellipse cx="65" cy="20" rx="6" ry="10" />
          <ellipse cx="30" cy="40" rx="6" ry="10" />
          <ellipse cx="70" cy="40" rx="6" ry="10" />
          <ellipse cx="30" cy="60" rx="6" ry="10" />
          <ellipse cx="70" cy="60" rx="6" ry="10" />
          <ellipse cx="35" cy="80" rx="6" ry="10" />
          <ellipse cx="65" cy="80" rx="6" ry="10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image collage */}
          <div className="relative h-[600px] hidden md:block">
            <div
              className="absolute top-0 left-0 w-3/5 h-3/5 bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: "url('/images/chef.jpg')" }}
            />
            <div
              className="absolute bottom-0 right-0 w-3/5 h-2/3 bg-cover bg-center shadow-2xl border-8 border-cream"
              style={{ backgroundImage: "url('/images/interior.jpg')" }}
            />
            <div className="absolute top-1/3 right-0 bg-terracotta text-cream p-6 max-w-[200px] shadow-xl">
              <p className="font-display text-5xl leading-none mb-2">10</p>
              <p className="text-xs tracking-[0.2em] uppercase">Years on Mulberry</p>
            </div>
            {/* Frame */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-olive/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div>
            <div className="olive-divider text-terracotta mb-6 text-xs tracking-[0.3em] uppercase font-semibold">
              <span>La Nostra Storia</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl text-olive leading-[1.05] mb-6">
              A table set for the neighborhood.
            </h2>

            <p className="font-serif-accent text-2xl italic text-charcoal/80 mb-6 leading-snug">
              Olivetta began in 2014 with a single pasta machine, a borrowed pizza oven,
              and a stubborn belief that the best Italian food is the kind that feels like home.
            </p>

            <p className="text-charcoal/70 leading-relaxed mb-4">
              Chef Marco Bellini grew up in a small town outside Bologna, where his grandmother
              insisted that lunch was sacred and dinner was a celebration. He brought those rituals
              to a quiet corner of Mulberry Street — a trattoria where the bread is warm,
              the wine is poured generously, and no one is in a hurry.
            </p>

            <p className="text-charcoal/70 leading-relaxed mb-10">
              A decade later, the pasta is still rolled by hand, the sauce is still simmered for hours,
              and the door is still open to anyone hungry.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'backwards' }}
                >
                  <f.icon className="w-7 h-7 text-terracotta mb-3" strokeWidth={1.5} />
                  <h3 className="font-display text-lg text-olive mb-1">{f.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}