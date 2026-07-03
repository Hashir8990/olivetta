import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../lib/cart';
import { formatPrice } from '../lib/utils';

type CartDrawerProps = {
  onCheckout: () => void;
};

export default function CartDrawer({ onCheckout }: CartDrawerProps) {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, totalItems } = useCart();

  const deliveryFee = subtotal > 0 ? (subtotal > 50 ? 0 : 5.99) : 0;
  const tax = subtotal * 0.0875;
  const total = subtotal + deliveryFee + tax;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[440px] bg-cream z-[70] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-dark bg-olive text-cream">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <div>
              <h2 className="font-display text-2xl leading-none">Your Order</h2>
              <p className="text-xs text-cream/70 tracking-wider uppercase mt-1">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-olive-dark rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-20 h-20 rounded-full bg-cream-dark flex items-center justify-center mb-6">
                <ShoppingBag className="w-9 h-9 text-charcoal/30" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-olive mb-2">Your cart is empty</h3>
              <p className="text-charcoal/60 mb-6 max-w-xs">
                Browse our menu and add a few things — pasta, pizza, perhaps a glass of wine?
              </p>
              <button
                onClick={closeCart}
                className="text-terracotta font-medium hover:text-terracotta-dark underline underline-offset-4"
              >
                Back to the menu
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(({ item, quantity }) => (
                <li
                  key={item.id}
                  className="flex gap-4 p-3 bg-cream-dark/40 rounded-lg animate-fade-up"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-display text-lg text-olive leading-tight">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-charcoal/40 hover:text-terracotta transition-colors p-1 -mt-1 -mr-1"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-charcoal/60 mb-2 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-cream rounded-full border border-cream-dark">
                        <button
                          onClick={() => updateQuantity(item.id, quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-cream-dark rounded-full transition-colors text-charcoal/70"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-semibold text-sm w-5 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-cream-dark rounded-full transition-colors text-charcoal/70"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="font-display text-lg text-terracotta font-semibold">
                        {formatPrice(item.price * quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / totals */}
        {items.length > 0 && (
          <div className="border-t border-cream-dark bg-cream-dark/30 px-6 py-5 space-y-2">
            <div className="flex justify-between text-sm text-charcoal/70">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-charcoal/70">
              <span>Delivery {subtotal > 50 && <span className="text-olive text-xs ml-1">(free over $50)</span>}</span>
              <span>{deliveryFee === 0 ? 'Free' : formatPrice(deliveryFee)}</span>
            </div>
            <div className="flex justify-between text-sm text-charcoal/70">
              <span>Tax (8.75%)</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <div className="flex justify-between items-baseline pt-3 border-t border-charcoal/10">
              <span className="font-display text-xl text-olive">Total</span>
              <span className="font-display text-2xl text-terracotta font-semibold">
                {formatPrice(total)}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-terracotta hover:bg-terracotta-dark text-cream py-4 rounded-full font-medium tracking-wide mt-3 transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              Proceed to Checkout →
            </button>
            <p className="text-xs text-center text-charcoal/50 mt-2">
              Pickup & delivery within 5 miles
            </p>
          </div>
        )}
      </aside>
    </>
  );
}