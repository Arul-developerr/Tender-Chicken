import { useEffect, useRef, useState } from 'react';
import type { Dish } from '../data/menu';
import { rupees } from '../data/menu';
import { useCart } from '../context/CartContext';

export function DishModal({ dish, onClose }: { dish: Dish | null; onClose: () => void }) {
  const [selection, setSelection] = useState({ id: '', quantity: 1 });
  const quantity = selection.id === dish?.id ? selection.quantity : 1;
  const closeRef = useRef<HTMLButtonElement>(null);
  const { add } = useCart();
  useEffect(() => {
    if (!dish) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const dialog = document.querySelector<HTMLElement>('.dish-modal');
        const focusable = Array.from(dialog?.querySelectorAll<HTMLElement>('button') || []);
        if (!focusable.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; previous?.focus(); };
  }, [dish, onClose]);
  if (!dish) return null;
  return <div className="modal-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}><div className="dish-modal" role="dialog" aria-modal="true" aria-labelledby="dish-dialog-title"><button className="modal-close" ref={closeRef} type="button" onClick={onClose} aria-label="Close details">✕</button><img src={dish.image} alt={dish.name} width="700" height="700" /><div className="modal-copy"><span className="eyebrow">{dish.category} · {dish.spice} spice</span><h2 id="dish-dialog-title">{dish.name}</h2><p>{dish.description}</p><p className="demo-note">Sample menu item and price for this frontend demonstration.</p><div className="modal-order"><strong>{rupees(dish.price * quantity)}</strong><div className="quantity"><button type="button" onClick={() => setSelection({ id: dish.id, quantity: Math.max(1, quantity - 1) })} aria-label="Decrease quantity">−</button><span>{quantity}</span><button type="button" onClick={() => setSelection({ id: dish.id, quantity: quantity + 1 })} aria-label="Increase quantity">+</button></div></div><button className="button" type="button" onClick={() => { add(dish.id, quantity); onClose(); }}>ADD TO BAG ↗</button></div></div></div>;
}
