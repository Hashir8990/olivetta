import { useState } from 'react';
import { Plus, Flame, Leaf, Star } from 'lucide-react';
import { menu, categories } from '../data/menu';
import { useCart } from '../lib/cart';
import { formatPrice } from '../lib/utils';
import type { MenuItem } from '../data/menu';

function MenuItemCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const [adding, setAdding] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setAdding(true);
    setTimeout(() => setAdding(false), 600);
  };

  return (
    <article className="group flex flex-col sm:flex-row gap-5 py-7 border-b border-cream-dark hover:border-olive/30 transition-colors">
      <div className="relative w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden bg-cream-dark">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {item.popular && (
          <div className="absolute top-2 left-2 bg-terracotta text-cream text-[10px] tracking-wider uppercase font-semibold px-2 py-1 flex items-center gap-1">
            <Star className="w-3 h-3 fill-cream" />
            Popular
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <h3 className="font-display text-xl sm:text-2xl text-olive leading-tight">
            {item.name}
            {item.italianName && (
              <span className="font-serif-accent italic text-charcoal/60 text-base sm:text-lg ml-2 font-normal">
                {item.italianName}
              </span>
            )}
          </h3>
          <div className="flex items-baseline gap-3 flex-shrink-0">
            <span className="hidden sm:block flex-1 border-b border-dotted border-charcoal/30 mb-1 min-w-[30px]" />
            <span className="font-display text-xl text-terracotta font-semibold">
              {formatPrice(item.price)}
            </span>
          </div>
        </div>

        <p className="text-charcoal/70 leading-relaxed text-sm mb-3">{item.description}</p>

        <div className="mt-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            {item.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-wider uppercase font-medium text-charcoal/50 px-2 py-0.5 border border-charcoal/15"
              >
                {tag}
              </span>
            ))}
            {item.spicy && (
              <span className="text-terracotta" title="Spicy">
                <Flame className="w-4 h-4 fill-terracotta" />
              </span>
            )}
            {item.vegetarian && (
              <span className="text-olive" title="Vegetarian">
                <Leaf className="w-4 h-4" />
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              adding
                ? 'bg-olive-light text-cream scale-105'
                : 'bg-olive text-cream hover:bg-olive-dark hover:shadow-md'
            }`}
          >
            <Plus className="w-4 h-4" />
            {adding ? 'Added!' : 'Add'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]['id']>('all');

  const filtered = activeCategory === 'all'
    ? menu
    : menu.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-cream-dark/40 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="olive-divider text-terracotta mb-5 text-xs tracking-[0.3em] uppercase font-semibold mx-auto">
            <span>Il Menu</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-olive mb-4 leading-tight">
            What we are cooking
          </h2>
          <p className="font-serif-accent italic text-xl text-charcoal/70 max-w-2xl mx-auto">
            Order for delivery or pickup. Available Tuesday through Sunday.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mb-10 -mx-6 sm:mx-0">
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex sm:flex-wrap sm:justify-center gap-2 px-6 sm:px-0 min-w-max sm:min-w-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-olive text-cream shadow-md'
                      : 'bg-cream text-charcoal/70 hover:bg-cream-dark hover:text-olive border border-cream-dark'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="bg-cream p-6 sm:p-10 shadow-sm">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="animate-fade-up"
              style={{ animationDelay: `${Math.min(i * 40, 400)}ms`, animationFillMode: 'backwards' }}
            >
              <MenuItemCard item={item} />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-charcoal/60 mt-8 italic font-serif-accent">
          Dietary needs? Just ask — most dishes can be made gluten-free or vegetarian.
        </p>
      </div>
    </section>
  );
}