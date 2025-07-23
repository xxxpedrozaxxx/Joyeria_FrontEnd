import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  const { cartItems } = useCart();
  const location = useLocation();
  const { user, logout } = useUser();

  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-16 h-14 flex items-center justify-center">
          <img src="https://file.garden/aBr7cUHDNAeZ_VnW/joyeria_juandiego.png" alt="Logo Joyería" className=""  />
        </div>
        <input type="text" placeholder="Buscar" className="border rounded px-4 py-2 w-56 focus:outline-none" />
      </div>
      <nav className="flex items-center gap-6">
        <Link to="/" className="hover:text-blue-600">Inicio</Link>
        {location.pathname !== '/login' && (
          user ? (
            <>
              <button onClick={logout} className="hover:text-blue-600">Cerrar Sesión</button>
              <Link to="/carrito" className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Tu Carrito</span>
              </Link>
            </>
          ) : (
            <Link to="/login" className="hover:text-blue-600">Iniciar Sesión</Link>
          )
        )}
        <Link to="/contact" className="hover:text-blue-600">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
