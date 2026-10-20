import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories, menu, type Category, type Dish } from '../data/menu';
import { DishCard } from '../components/DishCard';
import { DishModal } from '../components/DishModal';

export default function MenuPage() {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('recommended');
  const [spice, setSpice] = useState('all');
  const [dish, setDish] = useState<Dish | null>(null);
  const category = categories.includes(params.get('category') as Category) ? params.get('category') as Category : 'All Items';
  const visible = useMemo(() => {
    const q = search.trim().toLocaleLowerCase();
    const result = menu.filter(item => (category === 'All Items' || item.category === category) && (spice === 'all' || item.spice === spice) && (!q || `${item.name} ${item.description} ${item.category}`.toLocaleLowerCase().includes(q)));
    if (sort === 'low') result.sort((a, b) => a.price - b.price);
    if (sort === 'high') result.sort((a, b) => b.price - a.price);
    if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [category, search, sort, spice]);
  const clear = () => { setSearch(''); setSort('recommended'); setSpice('all'); setParams({}); };
  return <><section className="page-hero menu-hero"><div className="shell"><span className="eyebrow gold">THE TENDER CHICKEN MENU</span><h1>FIND YOUR<br /><em>FIRE.</em></h1><p>Big South Indian flavours, ready to explore. All dishes and prices shown are demonstration content.</p></div></section><section className="menu-section cream"><div className="shell"><div className="menu-toolbar"><label className="search-field"><span className="sr-only">Search dishes</span><span aria-hidden="true">⌕</span><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search dishes or flavours" /></label><div className="select-wrap"><label htmlFor="sort">SORT BY</label><select id="sort" value={sort} onChange={event => setSort(event.target.value)}><option value="recommended">Recommended</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="name">Name</option></select></div><div className="select-wrap"><label htmlFor="spice">SPICE</label><select id="spice" value={spice} onChange={event => setSpice(event.target.value)}><option value="all">All levels</option><option value="Mild">Mild</option><option value="Medium">Medium</option><option value="Hot">Hot</option></select></div></div><div className="category-tabs" role="group" aria-label="Menu categories">{categories.map(item => <button type="button" key={item} className={category === item ? 'selected' : ''} aria-pressed={category === item} onClick={() => setParams(item === 'All Items' ? {} : { category: item })}>{item}</button>)}</div><div className="menu-results"><span>{visible.length} DISH{visible.length === 1 ? '' : 'ES'} TO DISCOVER</span><button type="button" onClick={clear}>CLEAR FILTERS ↗</button></div>{visible.length ? <div className="menu-grid">{visible.map(item => <DishCard key={item.id} dish={item} onOpen={setDish} />)}</div> : <div className="empty-results"><h2>NO DISHES FOUND.</h2><p>Try another flavour or clear your filters.</p><button type="button" className="button" onClick={clear}>CLEAR FILTERS ↗</button></div>}</div></section><DishModal dish={dish} onClose={() => setDish(null)} /></>;
}
