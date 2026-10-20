import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { menu } from '../data/menu';

type CartLine = { id: string; quantity: number };
type CartValue = { lines: CartLine[]; add: (id: string, quantity?: number) => void; update: (id: string, quantity: number) => void; remove: (id: string) => void; clear: () => void; count: number; subtotal: number };
const CartContext = createContext<CartValue | null>(null);
const key = 'tender-chicken-demo-cart-v1';
function load(): CartLine[] {
  try {
    const raw = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(raw) ? raw.filter((item): item is CartLine => item && typeof item.id === 'string' && Number.isInteger(item.quantity) && item.quantity > 0 && menu.some(dish => dish.id === item.id)) : [];
  } catch { return []; }
}
export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(load);
  useEffect(() => { localStorage.setItem(key, JSON.stringify(lines)); }, [lines]);
  const value = useMemo<CartValue>(() => ({
    lines,
    add: (id, quantity = 1) => setLines(current => current.some(line => line.id === id) ? current.map(line => line.id === id ? { ...line, quantity: line.quantity + quantity } : line) : [...current, { id, quantity }]),
    update: (id, quantity) => setLines(current => quantity < 1 ? current.filter(line => line.id !== id) : current.map(line => line.id === id ? { ...line, quantity } : line)),
    remove: id => setLines(current => current.filter(line => line.id !== id)),
    clear: () => setLines([]),
    count: lines.reduce((sum, line) => sum + line.quantity, 0),
    subtotal: lines.reduce((sum, line) => sum + (menu.find(dish => dish.id === line.id)?.price || 0) * line.quantity, 0),
  }), [lines]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() { const cart = useContext(CartContext); if (!cart) throw new Error('CartProvider missing'); return cart; }
