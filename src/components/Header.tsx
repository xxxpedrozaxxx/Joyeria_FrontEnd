import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { ShoppingCart, LogOut, UserRound } from 'lucide-react';

const Header = () => {
  const { cartItems } = useCart();
  const location = useLocation();
  const { user, logout } = useUser();

  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-16 h-14 flex items-center justify-center">
            <img src="https://file.garden/aBr7cUHDNAeZ_VnW/joyeria_juandiego.png" alt="Logo Joyería" className="transition-transform group-hover:scale-105" />
          </div>
          <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">Joyeria los alcazares</span>
        </Link>
      </div>
      <nav className="flex items-center gap-6">
        <Link to="/contact" className="hover:text-blue-600">Contacto</Link>
        {location.pathname !== '/login' && (
          user ? (
            <>
              <button onClick={logout} className="hover:text-blue-600" title="Cerrar Sesión">
                <LogOut className="w-6 h-6" />
              </button>
              <Link to="/carrito" className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Tu Carrito</span>
              </Link>
            </>
          ) : (
            <Link to="/login" className="hover:text-blue-600" title="Iniciar Sesión">
              <UserRound className="w-6 h-6" />
            </Link>
          )
        )}
        
      </nav>
    </header>
  );
};

export default Header;
