import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useCart();
  const location = useLocation();

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold tracking-tight text-gray-800">
        Joyería
      </Link>
      <nav className="flex gap-6 items-center">
        <Link to="/productos" className={location.pathname === '/productos' ? 'font-semibold text-blue-600' : 'text-gray-700'}>Productos</Link>
        <Link to="/carrito" className="relative">
          <span className="material-icons align-middle">shopping_cart</span>
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-xs px-2">{cartItems.length}</span>
          )}
        </Link>
        <Link to="/login" className={location.pathname === '/login' ? 'font-semibold text-blue-600' : 'text-gray-700'}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;
