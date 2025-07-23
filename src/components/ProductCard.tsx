import { Product } from '../types/Product';
// import { useCart } from '../context/CartContext';
import { getCarritoByUsuario, addItemToCarrito } from '../services/carritoService';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      // 1. Obtener el carrito del usuario (o crearlo si tu backend lo hace automáticamente)
      const carritoRes = await getCarritoByUsuario(user.id);
      const data = carritoRes.data as { id: string };
      const carritoId = data.id;
      // 2. Agregar el producto al carrito
      await addItemToCarrito(carritoId, { productoId: product.id, cantidad: 1 });
      // 3. Redirigir al carrito
      navigate('/carrito');
    } catch (err) {
      // Manejo de error opcional
      alert('No se pudo agregar el producto al carrito.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={product.imageUrl} alt={product.nombre} className="w-32 h-32 object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.nombre}</h3>
      <span className="text-blue-600 font-bold mb-4">${product.precio}</span>
      <button onClick={handleAddToCart} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
