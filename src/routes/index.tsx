import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ProductListPage from '../pages/ProductListPage';
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/productos" element={<ProductListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/carrito" element={<CartPage />} />
    </Routes>
  );
}
