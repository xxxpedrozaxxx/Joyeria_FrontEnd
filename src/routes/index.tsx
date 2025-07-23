import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ProductListPage from '../pages/ProductListPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import CheckoutPage from '../pages/CheckoutPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/productos" element={<ProductListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/carrito" element={<CartPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}
