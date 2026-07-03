import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sofia M.',
    location: 'Brooklyn, NY',
    rating: 5,
    text: "The truffle tagliatelle was so good I almost cried. Service was warm and unhurried — the kind of place where you lose track of time and don't mind one bit.",
    date: 'October 2024',
    avatar: 'https://i.pravatar.cc/100?img=47',
  },
  {
    name: 'David K.',
    location: 'Tribeca',
    rating: 5,
    text: "Best wood-fired pizza in NYC, no exaggeration. The crust is perfect — leopard-spotted, chewy, blistered. The burrata app is non-negotiable.",
    date: 'September 2024',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Emma R.',
    location: 'Park Slope',
    rating: 5,
    text: "We come every anniversary. Chef Marco always sends out something special. It feels like dining with family — if your family happened to be Italian and brilliant cooks.",
    date: 'August 2024',
    avatar: 'https://i.pravatar.cc/100?img=45',
  },
  {
    name: 'James L.',
    location: 'West Village',
    rating: 5,
    text: "Ordered delivery during a snowstorm and the pasta still arrived perfectly al dente. The diavola pizza was restaurant-quality in my living room.",
    date: 'January 2024',
    avatar: 'https://i.pravatar.cc/100?img=33',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-cream-dark/40 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-olive/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="olive-divider text-terracotta mb-5 text-xs tracking-[0.3em] uppercase font-semibold mx-auto">
            <span>What people say</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-olive mb-4 leading-tight">
            Love letters, basically
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
            <span className="ml-2 font-display text-2xl text-olive">4.9</span>
          </div>
          <p className="text-charcoal/60">From 2,400+ verified reviews</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <article
              key={review.name}
              className="bg-cream p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'backwards' }}
            >
              <Quote className="w-8 h-8 text-terracotta/30 mb-3" />
              <div className="flex mb-3">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-charcoal/80 leading-relaxed mb-5 text-sm min-h-[120px]">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-cream-dark">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-charcoal text-sm">{review.name}</p>
                  <p className="text-xs text-charcoal/50">{review.location} · {review.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}