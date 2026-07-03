export function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function classNames(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function generateOrderNumber(): string {
  const ts = Date.now().toString().slice(-6);
  const rand = Math.floor(Math.random() * 90 + 10);
  return `OLV-${ts}${rand}`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

export function todayPlus(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d;
}