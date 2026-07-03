import { ChefHat, Award, Sparkles } from 'lucide-react';

const specialties = [
  {
    icon: ChefHat,
    title: "Tonight's Special",
    subtitle: 'Cacio e Pepe al Tartufo',
    description: 'Our classic cacio e pepe finished with shaved black truffle and a slow-cooked egg yolk.',
    price: 28,
  },
  {
    icon: Award,
    title: 'Cellar Pick',
    subtitle: 'Barolo, Piedmont 2018',
    description: "Marchesi di Barolo — a full-bodied red with notes of cherry, rose, and tar. Pairs beautifully with our osso buco.",
    price: 18,
  },
  {
    icon: Sparkles,
    title: 'This Weekend',
    subtitle: 'Wild Mushroom Risotto',
    description: 'Carnaroli rice, porcini, oyster & shiitake mushrooms, finished with parmigiano and white truffle oil.',
    price: 26,
  },
];

export default function Specialties() {
  return (
    <section className="py-24 sm:py-32 bg-charcoal text-cream relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <div className="olive-divider text-gold mb-5 text-xs tracking-[0.3em] uppercase font-semibold">
              <span>Today's picks</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl leading-[1.05] mb-6">
              What's on tonight
            </h2>
            <p className="font-serif-accent italic text-xl text-cream/80 mb-6 leading-snug">
              Fresh from the kitchen, the cellar, and a quiet obsession with seasonality.
            </p>
            <p className="text-cream/60 text-sm leading-relaxed">
              Our specials change weekly — sometimes daily — based on what's at the market
              and what the chef is dreaming up. Ask your server for the full list.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-5">
            {specialties.map((item, i) => (
              <div
                key={item.title}
                className="bg-olive-dark/60 backdrop-blur border border-olive/40 p-6 hover:border-gold/40 transition-all hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'backwards' }}
              >
                <item.icon className="w-7 h-7 text-gold mb-4" strokeWidth={1.5} />
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-2">
                  {item.title}
                </p>
                <h3 className="font-display text-2xl mb-3 leading-tight">{item.subtitle}</h3>
                <p className="text-sm text-cream/70 leading-relaxed mb-5 min-h-[80px]">
                  {item.description}
                </p>
                <p className="font-display text-2xl text-terracotta">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}