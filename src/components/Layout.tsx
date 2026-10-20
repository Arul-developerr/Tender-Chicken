import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { business } from '../data/menu';

const links = [['/', 'Home'], ['/menu', 'Menu'], ['/story', 'Our Story'], ['/specials', 'Specials'], ['/contact', 'Contact']];
export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { count } = useCart();
  return <>
    <div className="announcement">THE SOUTH HAS A SPICY SIDE. <span>நம்ம ஊரு சுவை</span></div>
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="Tender Chicken home"><span className="brand-mark">TC<span>✦</span></span><span>TENDER<br />CHICKEN</span></Link>
      <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map(([href, label]) => <NavLink key={href} to={href} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}
        <Link className="mobile-menu-cta" to="/menu" onClick={() => setOpen(false)}>Explore Menu ↗</Link>
      </nav>
      <div className="header-actions"><Link className="cart-link" to="/cart" aria-label={`Cart with ${count} items`}>BAG <span>{count}</span></Link><Link className="button button-small desktop-cta" to="/menu">EXPLORE MENU <span>↗</span></Link><button className="mobile-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button></div>
    </header>
    {open && <button className="nav-scrim" aria-label="Close menu" onClick={() => setOpen(false)} />}
    {pathname !== '/' && <div className="route-rule" />}
  </>;
}
export function Footer() {
  return <footer className="footer"><div className="footer-top"><div><Link className="footer-brand" to="/">TENDER<br />CHICKEN<span>✦</span></Link><p>Southern Fire. Unforgettable Flavour.</p><p className="tamil">நம்ம ஊரு சுவை</p></div><div><h3>EXPLORE</h3>{links.map(([href, label]) => <Link to={href} key={href}>{label}</Link>)}<Link to="/cart">Your Cart</Link></div><div><h3>VISIT & CONNECT</h3><p>{business.address}</p><p>{business.phone}</p><p>{business.hours}</p><Link to="/contact">Get in touch ↗</Link><div className="social-links">{business.instagram && <a href={business.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>}{business.facebook && <a href={business.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>}{!business.instagram && !business.facebook && <span>Social links to be added</span>}</div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Tender Chicken · Frontend demonstration</span><span>Menu and prices are sample content.</span></div></footer>;
}
