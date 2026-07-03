import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="visit" className="bg-olive-dark text-cream relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />

      {/* Newsletter */}
      <div className="relative border-b border-olive/50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-14 text-center">
          <div className="olive-divider text-gold mb-5 text-xs tracking-[0.3em] uppercase font-semibold mx-auto">
            <span>Stay in touch</span>
          </div>
          <h3 className="font-display text-4xl sm:text-5xl mb-3">
            Letters from the kitchen
          </h3>
          <p className="text-cream/70 max-w-xl mx-auto mb-7">
            Seasonal menus, wine dinners, and the occasional tiramisu recipe. No spam — we promise.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = (e.target as HTMLFormElement).querySelector('input') as HTMLInputElement;
              if (input) {
                input.value = '';
                alert('Thank you! (Demo — no subscription was created.)');
              }
            }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 bg-cream text-charcoal rounded-full outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="bg-terracotta hover:bg-terracotta-dark text-cream px-6 py-3 rounded-full font-medium tracking-wide transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-olive-dark font-display text-2xl">
                O
              </div>
              <div>
                <p className="font-display text-2xl leading-none">Olivetta</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-cream/60 mt-1">
                  Trattoria · NYC
                </p>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-5">
              A neighborhood Italian trattoria serving handmade pasta, wood-fired pizza,
              and a thoughtful Italian wine list since 2014.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-olive hover:bg-terracotta flex items-center justify-center transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Visit */}
          <div>
            <h4 className="font-display text-xl mb-5 text-gold">Visit</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-cream/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <div>
                  <p>218 Mulberry Street</p>
                  <p>New York, NY 10012</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-cream/80">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <div>
                  <p>(555) 123-4567</p>
                  <p className="text-xs text-cream/50">reservations & orders</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-cream/80">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <p>ciao@olivetta.nyc</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xl mb-5 text-gold">Hours</h4>
            <div className="space-y-2 text-sm text-cream/80">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <div className="w-full">
                  <div className="flex justify-between gap-4">
                    <span>Tuesday – Thursday</span>
                    <span className="text-cream">5 – 10pm</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Friday – Saturday</span>
                    <span className="text-cream">5 – 11pm</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sunday Brunch</span>
                    <span className="text-cream">11 – 3pm</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sunday Dinner</span>
                    <span className="text-cream">5 – 9pm</span>
                  </div>
                  <div className="pt-2 mt-2 border-t border-olive/50 flex justify-between gap-4">
                    <span>Monday</span>
                    <span className="text-cream/50 italic">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-xl mb-5 text-gold">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Our Menu', href: '#menu' },
                { label: 'Our Story', href: '#story' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Reservations', href: '#reserve' },
                { label: 'Order Online', href: '#menu' },
                { label: 'Private Events', href: '#' },
                { label: 'Gift Cards', href: '#' },
                { label: 'Careers', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:w-3 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-7 border-t border-olive/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Olivetta Trattoria · All rights reserved</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-cream transition-colors">Privacy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms</a>
            <a href="#" className="hover:text-cream transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}