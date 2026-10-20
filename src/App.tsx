import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header, Footer } from './components/Layout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import { StoryPage, SpecialsPage, ContactPage, CartPage, CheckoutPage, NotFoundPage } from './pages/OtherPages';

function ScrollToTop() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo(0, 0); }, [pathname]); return null; }
export default function App() { return <><ScrollToTop /><Header /><main><Routes><Route path="/" element={<HomePage />} /><Route path="/menu" element={<MenuPage />} /><Route path="/story" element={<StoryPage />} /><Route path="/specials" element={<SpecialsPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/cart" element={<CartPage />} /><Route path="/checkout" element={<CheckoutPage />} /><Route path="*" element={<NotFoundPage />} /></Routes></main><Footer /></>; }
