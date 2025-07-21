import { Product } from '../types/Product';
import { useCart } from '../context/CartContext';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
      <span className="text-blue-600 font-bold mb-4">${product.price}</span>
      <button onClick={() => addToCart(product)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
