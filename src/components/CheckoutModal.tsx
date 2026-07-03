import { useState } from 'react';
import { X, Check, CreditCard, Banknote, Clock, MapPin, ShoppingBag, Truck } from 'lucide-react';
import { useCart } from '../lib/cart';
import { formatPrice, generateOrderNumber } from '../lib/utils';

type CheckoutModalProps = {
  open: boolean;
  onClose: () => void;
};

type Step = 'details' | 'payment' | 'success';

export default function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  const { items, subtotal, clearCart, closeCart } = useCart();
  const [step, setStep] = useState<Step>('details');
  const [fulfillment, setFulfillment] = useState<'delivery' | 'pickup'>('delivery');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [orderNumber, setOrderNumber] = useState('');

  const deliveryFee = fulfillment === 'delivery' ? (subtotal > 50 ? 0 : 5.99) : 0;
  const tax = subtotal * 0.0875;
  const total = subtotal + deliveryFee + tax;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    notes: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    cardName: '',
  });

  const update = (field: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderNumber(generateOrderNumber());
    setStep('success');
    // Auto-clear after showing success
    setTimeout(() => clearCart(), 100);
  };

  const handleClose = () => {
    onClose();
    // Reset state after close animation
    setTimeout(() => {
      setStep('details');
      setFulfillment('delivery');
      setPaymentMethod('card');
    }, 300);
  };

  const handleDone = () => {
    closeCart();
    handleClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
        onClick={step === 'success' ? handleDone : handleClose}
      />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-cream shadow-2xl rounded-lg animate-slide-in-up">
        {/* Header */}
        <div className="sticky top-0 bg-olive text-cream px-6 sm:px-8 py-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            {step === 'success' ? (
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <Check className="w-5 h-5 text-olive-dark" strokeWidth={3} />
              </div>
            ) : (
              <ShoppingBag className="w-5 h-5" />
            )}
            <div>
              <h2 className="font-display text-2xl leading-none">
                {step === 'details' && 'Your Details'}
                {step === 'payment' && 'Payment'}
                {step === 'success' && 'Order Confirmed'}
              </h2>
              <p className="text-xs text-cream/70 tracking-wider uppercase mt-1">
                {step === 'success' ? 'See you soon!' : 'Step ' + (step === 'details' ? '1' : '2') + ' of 2'}
              </p>
            </div>
          </div>
          <button
            onClick={step === 'success' ? handleDone : handleClose}
            className="p-2 hover:bg-olive-dark rounded-full transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {step !== 'success' && (
          <div className="h-1 bg-cream-dark">
            <div
              className="h-full bg-terracotta transition-all duration-500"
              style={{ width: step === 'details' ? '50%' : '100%' }}
            />
          </div>
        )}

        {/* Step: Details */}
        {step === 'details' && (
          <form onSubmit={handleSubmitDetails} className="p-6 sm:p-8 space-y-6">
            {/* Fulfillment */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-3">
                How would you like to receive your order?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFulfillment('delivery')}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    fulfillment === 'delivery'
                      ? 'border-terracotta bg-terracotta/5'
                      : 'border-cream-dark hover:border-olive/30'
                  }`}
                >
                  <Truck className="w-5 h-5 mb-2 text-terracotta" />
                  <div className="font-display text-lg text-olive">Delivery</div>
                  <div className="text-xs text-charcoal/60 mt-1">30-45 min · within 5 mi</div>
                </button>
                <button
                  type="button"
                  onClick={() => setFulfillment('pickup')}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    fulfillment === 'pickup'
                      ? 'border-terracotta bg-terracotta/5'
                      : 'border-cream-dark hover:border-olive/30'
                  }`}
                >
                  <MapPin className="w-5 h-5 mb-2 text-terracotta" />
                  <div className="font-display text-lg text-olive">Pickup</div>
                  <div className="text-xs text-charcoal/60 mt-1">Ready in 20 min</div>
                </button>
              </div>
            </div>

            {/* Contact */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-charcoal mb-1.5">Full name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-cream-dark rounded-md focus:border-olive outline-none transition-colors"
                  placeholder="Marco Rossi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-cream-dark rounded-md focus:border-olive outline-none transition-colors"
                  placeholder="marco@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">Phone</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-cream-dark rounded-md focus:border-olive outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Delivery address */}
            {fulfillment === 'delivery' && (
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Street address</label>
                  <input
                    required
                    type="text"
                    value={form.address}
                    onChange={(e) => update('address', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-cream-dark rounded-md focus:border-olive outline-none transition-colors"
                    placeholder="123 Mott Street, Apt 4B"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-charcoal mb-1.5">City</label>
                  <input
                    required
                    type="text"
                    value={form.city}
                    onChange={(e) => update('city', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-cream-dark rounded-md focus:border-olive outline-none transition-colors"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">ZIP</label>
                  <input
                    required
                    type="text"
                    value={form.zip}
                    onChange={(e) => update('zip', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-cream-dark rounded-md focus:border-olive outline-none transition-colors"
                    placeholder="10012"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-charcoal mb-1.5">
                Notes for the kitchen <span className="text-charcoal/40 font-normal">(optional)</span>
              </label>
              <textarea
                rows={2}
                value={form.notes}
                onChange={(e) => update('notes', e.target.value)}
                className="w-full px-4 py-3 bg-white border border-cream-dark rounded-md focus:border-olive outline-none transition-colors resize-none"
                placeholder="No garlic, extra basil, etc."
              />
            </div>

            {/* Summary */}
            <div className="bg-cream-dark/40 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Subtotal · {items.reduce((s, i) => s + i.quantity, 0)} items</span><span>{formatPrice(subtotal)}</span></div>
              {fulfillment === 'delivery' && (
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>{deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}</span>
                </div>
              )}
              <div className="flex justify-between"><span>Tax</span><span>{formatPrice(tax)}</span></div>
              <div className="flex justify-between pt-2 border-t border-charcoal/10 font-display text-lg">
                <span className="text-olive">Total</span>
                <span className="text-terracotta font-semibold">{formatPrice(total)}</span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-3 rounded-full border border-charcoal/20 hover:bg-cream-dark font-medium transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-terracotta hover:bg-terracotta-dark text-cream py-3 rounded-full font-medium tracking-wide transition-all hover:shadow-lg"
              >
                Continue to Payment →
              </button>
            </div>
          </form>
        )}

        {/* Step: Payment */}
        {step === 'payment' && (
          <form onSubmit={handleSubmitPayment} className="p-6 sm:p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-3">
                Payment method
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    paymentMethod === 'card'
                      ? 'border-terracotta bg-terracotta/5'
                      : 'border-cream-dark hover:border-olive/30'
                  }`}
                >
                  <CreditCard className="w-5 h-5 mb-2 text-terracotta" />
                  <div className="font-display text-lg text-olive">Card</div>
                  <div className="text-xs text-charcoal/60 mt-1">Visa, Mastercard, Amex</div>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cash')}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    paymentMethod === 'cash'
                      ? 'border-terracotta bg-terracotta/5'
                      : 'border-cream-dark hover:border-olive/30'
                  }`}
                >
                  <Banknote className="w-5 h-5 mb-2 text-terracotta" />
                  <div className="font-display text-lg text-olive">
                    {fulfillment === 'delivery' ? 'Pay on Delivery' : 'Pay on Pickup'}
                  </div>
                  <div className="text-xs text-charcoal/60 mt-1">Cash or card</div>
                </button>
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Card number</label>
                  <input
                    required
                    type="text"
                    value={form.cardNumber}
                    onChange={(e) => update('cardNumber', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-cream-dark rounded-md focus:border-olive outline-none transition-colors font-mono"
                    placeholder="4242 4242 4242 4242"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">Expiry</label>
                    <input
                      required
                      type="text"
                      value={form.cardExpiry}
                      onChange={(e) => update('cardExpiry', e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-cream-dark rounded-md focus:border-olive outline-none transition-colors font-mono"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">CVC</label>
                    <input
                      required
                      type="text"
                      value={form.cardCvc}
                      onChange={(e) => update('cardCvc', e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-cream-dark rounded-md focus:border-olive outline-none transition-colors font-mono"
                      placeholder="123"
                      maxLength={4}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">Name on card</label>
                  <input
                    required
                    type="text"
                    value={form.cardName}
                    onChange={(e) => update('cardName', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-cream-dark rounded-md focus:border-olive outline-none transition-colors"
                    placeholder="MARCO ROSSI"
                  />
                </div>
              </div>
            )}

            <div className="bg-cream-dark/40 rounded-lg p-4">
              <div className="flex justify-between items-baseline">
                <span className="font-display text-lg text-olive">Total to pay</span>
                <span className="font-display text-2xl text-terracotta font-semibold">
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="px-6 py-3 rounded-full border border-charcoal/20 hover:bg-cream-dark font-medium transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-terracotta hover:bg-terracotta-dark text-cream py-3 rounded-full font-medium tracking-wide transition-all hover:shadow-lg"
              >
                Place Order · {formatPrice(total)}
              </button>
            </div>
            <p className="text-xs text-center text-charcoal/50">
              🔒 Secured by industry-standard encryption. This is a demo — no real payment will be processed.
            </p>
          </form>
        )}

        {/* Success */}
        {step === 'success' && (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-olive mx-auto flex items-center justify-center mb-6 animate-fade-up">
              <Check className="w-10 h-10 text-cream" strokeWidth={3} />
            </div>
            <h2 className="font-display text-4xl text-olive mb-3 animate-fade-up" style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}>
              Grazie mille!
            </h2>
            <p className="font-serif-accent italic text-2xl text-charcoal/80 mb-6 animate-fade-up" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
              Your order has been received.
            </p>

            <div className="bg-cream-dark/40 rounded-lg p-6 mb-6 animate-fade-up" style={{ animationDelay: '300ms', animationFillMode: 'backwards' }}>
              <p className="text-xs tracking-[0.2em] uppercase text-charcoal/60 mb-2">Order number</p>
              <p className="font-display text-3xl text-terracotta font-semibold mb-4">{orderNumber}</p>
              <div className="flex items-center justify-center gap-2 text-charcoal/70 text-sm">
                <Clock className="w-4 h-4" />
                <span>
                  {fulfillment === 'delivery'
                    ? 'Estimated delivery: 30–45 minutes'
                    : 'Ready for pickup in about 20 minutes'}
                </span>
              </div>
            </div>

            <p className="text-charcoal/70 text-sm mb-8 max-w-md mx-auto animate-fade-up" style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}>
              We sent a confirmation to <strong>{form.email || 'your email'}</strong>.
              You'll receive a text at <strong>{form.phone || 'your phone'}</strong> when we're firing your pizza.
            </p>

            <button
              onClick={handleDone}
              className="bg-terracotta hover:bg-terracotta-dark text-cream px-10 py-3.5 rounded-full font-medium tracking-wide transition-all hover:shadow-lg animate-fade-up"
              style={{ animationDelay: '500ms', animationFillMode: 'backwards' }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}