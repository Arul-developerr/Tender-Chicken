import { useState } from 'react';
import type { Dish } from '../data/menu';
import { rupees } from '../data/menu';
import { useCart } from '../context/CartContext';
import GlareHover from './GlareHover';

export function DishCard({ dish, onOpen }: { dish: Dish; onOpen: (dish: Dish) => void }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  function addOne() { add(dish.id); setAdded(true); window.setTimeout(() => setAdded(false), 1500); }
  return <article className="dish-card"><GlareHover className="dish-glare" width="100%" borderRadius="0" glareOpacity={0.12} mode="hover"><button className="dish-image-button" type="button" onClick={() => onOpen(dish)} aria-label={`View ${dish.name} details`}><img src={dish.image} alt={dish.name} loading="lazy" width="600" height="600" /><span className="image-corner">VIEW DISH ↗</span></button></GlareHover><div className="dish-copy"><div className="dish-meta"><span>{dish.category}</span><span>{dish.spice} spice</span></div><button className="dish-title-button" type="button" onClick={() => onOpen(dish)}><h3>{dish.name}</h3></button><p>{dish.description}</p><div className="dish-bottom"><strong>{rupees(dish.price)}</strong><button className="add-button" type="button" onClick={addOne} aria-label={`Add ${dish.name} to cart`}>{added ? 'ADDED ✓' : 'ADD +'} </button></div></div></article>;
}
