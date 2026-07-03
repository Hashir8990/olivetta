import { useState } from 'react';
import { Calendar, Users, Clock, Check } from 'lucide-react';
import { todayPlus, formatDate } from '../lib/utils';

const timeSlots = [
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
  '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM',
];

export default function Reservations() {
  const [date, setDate] = useState(todayPlus(1).toISOString().slice(0, 10));
  const [time, setTime] = useState('7:00 PM');
  const [party, setParty] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <section id="reserve" className="py-24 sm:py-32 bg-olive text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
        <div className="relative max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-gold mx-auto flex items-center justify-center mb-8 animate-fade-up">
            <Check className="w-10 h-10 text-olive-dark" strokeWidth={3} />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl mb-4 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}>
            See you soon
          </h2>
          <p className="font-serif-accent italic text-2xl text-cream/90 mb-8 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
            {name}, your table awaits.
          </p>
          <div className="bg-olive-dark/50 backdrop-blur rounded-lg p-8 mb-8 animate-fade-up" style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}>
            <div className="grid grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">Date</p>
                <p className="font-display text-xl">{formatDate(new Date(date))}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">Time</p>
                <p className="font-display text-xl">{time}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">Party</p>
                <p className="font-display text-xl">{party} {party === 1 ? 'guest' : 'guests'}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">Confirmation</p>
                <p className="font-display text-xl">{email || phone || 'on its way'}</p>
              </div>
            </div>
          </div>
          <p className="text-cream/70 mb-6 text-sm animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
            We've sent a confirmation to your {email ? 'email' : 'phone'}. Cancellations are easy — just reply.
          </p>
          <button
            onClick={() => {
              setConfirmed(false);
              setName('');
              setEmail('');
              setPhone('');
            }}
            className="text-cream/80 hover:text-cream underline underline-offset-4 text-sm animate-fade-up"
            style={{ animationDelay: '500ms', animationFillMode: 'backwards' }}
          >
            Make another reservation
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="reserve" className="py-24 sm:py-32 bg-olive text-cream relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/terrace.jpg')" }}
      />
      <div className="absolute inset-0 bg-olive/85" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text side */}
        <div>
          <div className="olive-divider text-gold mb-6 text-xs tracking-[0.3em] uppercase font-semibold">
            <span>Prenotazioni</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl leading-[1.05] mb-6">
            Reserve your table
          </h2>
          <p className="font-serif-accent italic text-2xl text-cream/90 mb-6">
            For a candlelit dinner, a birthday celebration, or just because it's Tuesday.
          </p>
          <p className="text-cream/70 leading-relaxed mb-8 max-w-md">
            We hold a few tables for walk-ins, but reservations are recommended — especially on weekends.
            For parties of 7 or more, please call us directly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-cream/80">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold">Open Tuesday – Sunday</p>
                <p className="text-sm text-cream/70">Closed Mondays. Brunch Sat & Sun 11am–3pm.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-cream/80">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold">Up to 6 guests online</p>
                <p className="text-sm text-cream/70">Larger parties? Call (555) 123-4567.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form side */}
        <form
          onSubmit={handleSubmit}
          className="bg-cream text-charcoal p-6 sm:p-8 shadow-2xl rounded-lg space-y-5"
        >
          <h3 className="font-display text-3xl text-olive mb-2">Book a table</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-charcoal/70 tracking-wider uppercase mb-2">
                Date
              </label>
              <input
                required
                type="date"
                value={date}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 bg-cream-dark/40 border border-cream-dark rounded-md focus:border-olive outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-charcoal/70 tracking-wider uppercase mb-2">
                Guests
              </label>
              <div className="flex items-center bg-cream-dark/40 border border-cream-dark rounded-md">
                <button
                  type="button"
                  onClick={() => setParty(Math.max(1, party - 1))}
                  className="w-10 h-full text-2xl text-charcoal/60 hover:text-terracotta"
                >−</button>
                <span className="flex-1 text-center font-semibold">{party}</span>
                <button
                  type="button"
                  onClick={() => setParty(Math.min(6, party + 1))}
                  className="w-10 h-full text-2xl text-charcoal/60 hover:text-terracotta"
                >+</button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-charcoal/70 tracking-wider uppercase mb-2">
              Time
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setTime(slot)}
                  className={`py-2 px-2 text-xs sm:text-sm rounded-md border transition-all ${
                    time === slot
                      ? 'bg-olive text-cream border-olive'
                      : 'bg-cream-dark/40 border-cream-dark hover:border-olive/40'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-charcoal/70 tracking-wider uppercase mb-2">
              Your name
            </label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-cream-dark/40 border border-cream-dark rounded-md focus:border-olive outline-none transition-colors"
              placeholder="Marco Rossi"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-charcoal/70 tracking-wider uppercase mb-2">
                Email
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-cream-dark/40 border border-cream-dark rounded-md focus:border-olive outline-none transition-colors"
                placeholder="marco@email.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-charcoal/70 tracking-wider uppercase mb-2">
                Phone
              </label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-cream-dark/40 border border-cream-dark rounded-md focus:border-olive outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-charcoal/70 tracking-wider uppercase mb-2">
              Special occasion <span className="text-charcoal/40 normal-case tracking-normal">(optional)</span>
            </label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full px-4 py-3 bg-cream-dark/40 border border-cream-dark rounded-md focus:border-olive outline-none transition-colors"
            >
              <option value="">Just dinner</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Date night</option>
              <option>Business dinner</option>
              <option>Other celebration</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-terracotta hover:bg-terracotta-dark text-cream py-4 rounded-full font-medium tracking-wide transition-all hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Clock className="w-4 h-4" />
            Reserve Table
          </button>
          <p className="text-xs text-center text-charcoal/50">
            Demo reservation — no real booking is made.
          </p>
        </form>
      </div>
    </section>
  );
}