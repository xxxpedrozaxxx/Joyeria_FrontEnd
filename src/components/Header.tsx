import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useCart();
  const location = useLocation();

  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-10 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-gray-400"> <svg width='32' height='32' fill='none'><rect width='100%' height='100%' rx='8' fill='#e5e7eb'/><text x='50%' y='55%' textAnchor='middle' fill='#9ca3af' fontSize='16'>Logo</text></svg> </span>
        </div>
        <input type="text" placeholder="Buscar" className="border rounded px-4 py-2 w-56 focus:outline-none" />
      </div>
      <nav className="flex items-center gap-6">
        <Link to="/" className="hover:text-blue-600">Inicio</Link>
        <Link to="/login" className="hover:text-blue-600">Iniciar Sesión</Link>
        <Link to="/contact" className="hover:text-blue-600">Contacto</Link>
        <Link to="/cart" className="bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0l1.7 6.385a2.25 2.25 0 002.183 1.693h7.299a2.25 2.25 0 002.183-1.693l1.7-6.385m-13.445 0h13.445" />
          </svg>
          <span>Tu Carrito</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
