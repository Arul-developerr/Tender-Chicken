export const categories = ['All Items', 'Chicken Starters', 'Chicken Specials', 'Biryani', 'Parotta & Kothu', 'South Indian Curries', 'Combos'] as const;
export type Category = (typeof categories)[number];
export type Dish = { id: string; name: string; category: Exclude<Category, 'All Items'>; description: string; price: number; image: string; spice: 'Mild' | 'Medium' | 'Hot'; featured?: boolean };

// Demonstration dishes and sample prices. Replace with a verified restaurant menu before launch.
export const menu: Dish[] = [
  { id: 'chukka', name: 'Chicken Chukka', category: 'Chicken Specials', description: 'Dark roasted masala, curry leaves and a deep chilli finish.', price: 249, image: '/food/chukka.webp', spice: 'Hot', featured: true },
  { id: 'pepper', name: 'Pepper Chicken', category: 'Chicken Specials', description: 'Cracked black pepper brings the warmth to every bite.', price: 259, image: '/food/pepper.webp', spice: 'Hot', featured: true },
  { id: 'chicken-65', name: 'Chicken 65', category: 'Chicken Starters', description: 'Golden, crisp chicken with curry leaf and chilli notes.', price: 219, image: '/food/chicken-65.webp', spice: 'Medium', featured: true },
  { id: 'biryani', name: 'Chicken Biryani', category: 'Biryani', description: 'Fragrant rice layered with spice and generous chicken pieces.', price: 289, image: '/food/biryani.webp', spice: 'Medium', featured: true },
  { id: 'kothu', name: 'Chicken Kothu Parotta', category: 'Parotta & Kothu', description: 'Chopped parotta tossed with chicken and lively masala.', price: 239, image: '/food/kothu.webp', spice: 'Medium', featured: true },
  { id: 'curry', name: 'South Indian Chicken Curry', category: 'South Indian Curries', description: 'A rich, aromatic curry made for scooping and sharing.', price: 269, image: '/food/curry.webp', spice: 'Medium', featured: true },
  { id: 'combo', name: 'Parotta & Chicken Curry', category: 'Combos', description: 'Flaky parotta alongside a bowl of comforting chicken curry.', price: 329, image: '/food/combo.webp', spice: 'Medium' },
  { id: 'pepper-biryani', name: 'Pepper Chicken Biryani', category: 'Biryani', description: 'Fragrant rice meets a bold black pepper finish.', price: 319, image: '/food/biryani.webp', spice: 'Hot' },
  { id: 'chukka-parotta', name: 'Chukka Parotta Plate', category: 'Combos', description: 'Chicken chukka with soft, flaky parotta.', price: 339, image: '/food/combo.webp', spice: 'Hot' },
  { id: 'chilli-starter', name: 'Chilli Chicken Bites', category: 'Chicken Starters', description: 'Crisp, bite-sized chicken with a fiery chilli edge.', price: 229, image: '/food/chicken-65.webp', spice: 'Hot' },
  { id: 'leaf-pepper', name: 'Curry Leaf Pepper Chicken', category: 'Chicken Specials', description: 'Pepper-led chicken lifted by aromatic curry leaves.', price: 279, image: '/food/pepper.webp', spice: 'Hot' },
  { id: 'curry-bowl', name: 'Chicken Curry Bowl', category: 'South Indian Curries', description: 'A generous bowl of warmly spiced chicken curry.', price: 249, image: '/food/curry.webp', spice: 'Mild' },
  { id: 'mini-biryani', name: 'Biryani & Chicken 65', category: 'Combos', description: 'Two South Indian favourites on one satisfying plate.', price: 369, image: '/food/biryani.webp', spice: 'Medium' },
  { id: 'kothu-pepper', name: 'Pepper Chicken Kothu', category: 'Parotta & Kothu', description: 'Chopped parotta with a bold pepper chicken twist.', price: 259, image: '/food/kothu.webp', spice: 'Hot' },
  { id: 'masala-chicken', name: 'Chicken Masala', category: 'South Indian Curries', description: 'A thick masala curry with gentle warmth and depth.', price: 259, image: '/food/curry.webp', spice: 'Medium' },
  { id: 'starter-platter', name: 'Southern Starter Plate', category: 'Chicken Starters', description: 'A shareable sample of our chilli and pepper favourites.', price: 349, image: '/food/chicken-65.webp', spice: 'Medium' },
];

export const rupees = (value: number) => `₹${value.toLocaleString('en-IN')}`;
export const business = { address: 'Your outlet address goes here', phone: 'Add your contact number', hours: 'Add your opening hours', instagram: '', facebook: '' };
