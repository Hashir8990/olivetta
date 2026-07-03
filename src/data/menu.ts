export type MenuItem = {
  id: string;
  name: string;
  italianName?: string;
  description: string;
  price: number;
  category: 'antipasti' | 'pasta' | 'pizza' | 'secondi' | 'dolci' | 'bevande';
  image: string;
  tags?: string[];
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
};

export const menu: MenuItem[] = [
  // ANTIPASTI
  {
    id: 'a1',
    name: 'Bruschetta Trio',
    italianName: 'Bruschetta Mista',
    description: 'Heirloom tomato & basil, whipped ricotta & truffle honey, nduja & stracciatella on wood-fired bread.',
    price: 16,
    category: 'antipasti',
    image: '/images/bruschetta.jpg',
    tags: ['vegetarian option', 'shareable'],
    popular: true,
  },
  {
    id: 'a2',
    name: 'Antipasto della Casa',
    italianName: 'Tagliere Misto',
    description: 'Cured meats, aged pecorino, parmigiano, marinated olives, fig mostarda, and grissini.',
    price: 24,
    category: 'antipasti',
    image: '/images/antipasto.jpg',
    tags: ['for two'],
  },
  {
    id: 'a3',
    name: 'Burrata di Puglia',
    italianName: 'Burrata',
    description: 'Creamy burrata, sungold tomatoes, basil oil, aged balsamic, and toasted pine nuts.',
    price: 19,
    category: 'antipasti',
    image: '/images/caprese.jpg',
    tags: ['vegetarian'],
    popular: true,
  },

  // PASTA
  {
    id: 'p1',
    name: 'Tagliatelle al Tartufo',
    italianName: 'Tagliatelle al Tartufo Nero',
    description: 'House-made egg pasta, black truffle butter, parmigiano-reggiano, fresh black truffle.',
    price: 32,
    category: 'pasta',
    image: '/images/risotto.jpg',
    tags: ['house favorite', 'indulgent'],
    popular: true,
  },
  {
    id: 'p2',
    name: 'Spaghetti alle Vongole',
    italianName: 'Spaghetti alle Vongole',
    description: 'Manila clams, garlic, white wine, chili flake, parsley, lemon zest, extra virgin olive oil.',
    price: 28,
    category: 'pasta',
    image: '/images/hero-pasta.jpg',
    tags: ['spicy'],
    spicy: true,
  },
  {
    id: 'p3',
    name: 'Cacio e Pepe',
    italianName: 'Cacio e Pepe',
    description: 'Tonnarelli, pecorino romano, freshly cracked Tellicherry pepper — Roman simplicity, perfected.',
    price: 22,
    category: 'pasta',
    image: '/images/risotto.jpg',
    tags: ['classic'],
  },
  {
    id: 'p4',
    name: 'Pappardelle al Cinghiale',
    italianName: 'Pappardelle al Ragù di Cinghiale',
    description: 'Slow-braised wild boar ragù, pappardelle, juniper, rosemary, parmigiano.',
    price: 26,
    category: 'pasta',
    image: '/images/risotto.jpg',
    tags: ['hearty'],
  },

  // PIZZA
  {
    id: 'z1',
    name: 'Margherita D.O.P.',
    italianName: 'Pizza Margherita',
    description: 'San Marzano tomato, fior di latte, fresh basil, extra virgin olive oil, sea salt.',
    price: 19,
    category: 'pizza',
    image: '/images/pizza.jpg',
    tags: ['classic', 'vegetarian'],
    vegetarian: true,
    popular: true,
  },
  {
    id: 'z2',
    name: 'Diavola',
    italianName: 'Pizza alla Diavola',
    description: 'Spicy soppressata, fior di latte, chili oil, oregano, hot honey drizzle.',
    price: 22,
    category: 'pizza',
    image: '/images/pizza.jpg',
    tags: ['spicy'],
    spicy: true,
  },
  {
    id: 'z3',
    name: 'Tartufo e Funghi',
    italianName: 'Pizza al Tartufo',
    description: 'Wild mushrooms, mozzarella, fontina, truffle oil, fresh thyme, white truffle shavings.',
    price: 26,
    category: 'pizza',
    image: '/images/pizza.jpg',
    tags: ['indulgent', 'vegetarian'],
    vegetarian: true,
  },

  // SECONDI
  {
    id: 's1',
    name: 'Osso Buco alla Milanese',
    italianName: 'Osso Buco',
    description: 'Braised veal shank, saffron risotto, gremolata, bone marrow — a Milanese classic.',
    price: 42,
    category: 'secondi',
    image: '/images/ossobuco.jpg',
    tags: ["chef's pick"],
    popular: true,
  },
  {
    id: 's2',
    name: 'Branzino al Sale',
    italianName: 'Branzino',
    description: 'Whole Mediterranean sea bass baked in sea salt crust, lemon, capers, herbs, olive oil.',
    price: 38,
    category: 'secondi',
    image: '/images/ossobuco.jpg',
    tags: ['for two', 'light'],
  },

  // DOLCI
  {
    id: 'd1',
    name: 'Tiramisù della Casa',
    italianName: 'Tiramisù',
    description: 'Mascarpone, espresso-soaked savoiardi, cocoa, a whisper of Marsala wine.',
    price: 12,
    category: 'dolci',
    image: '/images/tiramisu.jpg',
    tags: ['classic'],
    popular: true,
  },
  {
    id: 'd2',
    name: 'Panna Cotta al Limone',
    italianName: 'Panna Cotta',
    description: 'Vanilla bean panna cotta, lemon-thyme compote, candied citrus, pistachio crumble.',
    price: 11,
    category: 'dolci',
    image: '/images/tiramisu.jpg',
    tags: ['light'],
  },

  // BEVANDE
  {
    id: 'b1',
    name: 'Negroni Rosso',
    italianName: 'Negroni',
    description: 'Tanqueray gin, Campari, sweet vermouth, orange peel — stirred, not shaken.',
    price: 14,
    category: 'bevande',
    image: '/images/wine.jpg',
    tags: ['bitter'],
  },
  {
    id: 'b2',
    name: 'Aperol Spritz',
    italianName: 'Spritz',
    description: 'Aperol, prosecco, soda, orange slice — the Venetian aperitivo.',
    price: 12,
    category: 'bevande',
    image: '/images/wine.jpg',
    tags: ['refreshing'],
    popular: true,
  },
  {
    id: 'b3',
    name: 'Chianti Classico',
    italianName: 'Chianti',
    description: 'Glass of Tuscan red — Sangiovese, cherry, leather, dried herbs. Bottle 38.',
    price: 14,
    category: 'bevande',
    image: '/images/wine.jpg',
    tags: ['wine'],
  },
];

export const categories = [
  { id: 'all', label: 'The Full Menu' },
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'pizza', label: 'Pizza al Forno' },
  { id: 'secondi', label: 'Secondi' },
  { id: 'dolci', label: 'Dolci' },
  { id: 'bevande', label: 'Bevande' },
] as const;