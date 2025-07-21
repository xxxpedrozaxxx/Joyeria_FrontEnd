import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, total, removeFromCart } = useCart();

  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <div className="text-gray-500">Tu carrito está vacío.</div>
      ) : (
        <div>
          <ul className="mb-6">
            {/* {cartItems.map(item => (
              <li key={item.id} className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                  <span className="font-semibold text-gray-700">{item.name}</span>
                </div>
                <span className="text-gray-600">${item.price}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">Eliminar</button>
              </li>
            ))} */}
          </ul>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-lg">Total:</span>
            <span className="text-xl text-blue-600 font-bold">${total}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Proceder a pago</button>
        </div>
      )}
    </section>
  );
};

export default CartPage;
