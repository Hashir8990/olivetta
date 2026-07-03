import { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Phone } from 'lucide-react';
import { useCart } from '../lib/cart';
import { classNames } from '../lib/utils';

type NavProps = {
  onOpenCart: () => void;
};

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#story', label: 'Our Story' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#reserve', label: 'Reservations' },
  { href: '#visit', label: 'Visit' },
];

export default function Nav({ onOpenCart }: NavProps) {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={classNames(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-olive flex items-center justify-center text-cream font-display text-xl transition-transform group-hover:rotate-12">
            O
          </div>
          <div className="flex flex-col leading-none">
            <span className={classNames(
              "font-display text-2xl tracking-wide transition-colors",
              scrolled ? "text-olive" : "text-cream"
            )}>
              Olivetta
            </span>
            <span className={classNames(
              "text-[10px] tracking-[0.3em] uppercase font-medium transition-colors",
              scrolled ? "text-charcoal/60" : "text-cream/70"
            )}>
              Trattoria · Est. 2014
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={classNames(
                "text-sm tracking-wider uppercase font-medium transition-colors hover:text-terracotta relative group",
                scrolled ? "text-charcoal" : "text-cream"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-terracotta scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+923182402564"
            className={classNames(
              "hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors",
              scrolled
                ? "text-charcoal hover:text-terracotta"
                : "text-cream hover:text-gold"
            )}
          >
            <Phone className="w-4 h-4" />
            +92 318 240 2564
          </a>
          <button
            onClick={onOpenCart}
            className="relative bg-olive hover:bg-olive-dark text-cream px-4 py-2.5 rounded-full flex items-center gap-2 transition-all hover:shadow-lg group"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline text-sm font-medium tracking-wide">Order</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-terracotta text-cream text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-fade-in">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={classNames(
              "lg:hidden p-2 rounded-md transition-colors",
              scrolled ? "text-charcoal" : "text-cream"
            )}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-cream-dark mt-3 animate-fade-up">
          <nav className="flex flex-col p-5 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-charcoal font-medium tracking-wide uppercase text-sm border-b border-cream-dark last:border-0 hover:text-terracotta transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+15551234567"
              className="py-3 text-charcoal font-medium tracking-wide uppercase text-sm hover:text-terracotta transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> (555) 123-4567
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}