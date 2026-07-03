import { useState } from 'react';
import { CartProvider, useCart } from './lib/cart';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Story from './components/Story';
import Specialties from './components/Specialties';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';

function AppShell() {
  const { openCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <div className="bg-cream min-h-screen">
      <Nav onOpenCart={openCart} />
      <main>
        <Hero />
        <Story />
        <Specialties />
        <Menu />
        <Gallery />
        <Reservations />
        <Testimonials />
      </main>
      <Footer />

      <CartDrawer onCheckout={() => setCheckoutOpen(true)} />
      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppShell />
    </CartProvider>
  );
}