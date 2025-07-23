import { useCart, CartItem } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, total, removeFromCart } = useCart();

  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <div className="text-gray-500">Tu carrito está vacío.</div>
      ) : (
        <div className="bg-white rounded-lg shadow p-8">
          {/* Producto principal grande */}
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-72 h-72 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden mb-4">
                {cartItems[0].image ? (
                  <img src={cartItems[0].image} alt={cartItems[0].name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-400">Imagen</span>
                )}
              </div>
              <div className="flex gap-2 mt-2">
                {/* Miniaturas (si hay más de un producto) */}
                {cartItems.slice(0, 3).map((item: CartItem, idx: number) => (
                  <div key={item.id} className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center overflow-hidden border">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-400 text-xs">Img</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2">{cartItems[0].name}</h3>
              <div className="flex items-center gap-2 mb-2">
                {/* Estrellas (simulado) */}
                <span className="text-yellow-400">★ ★ ★ ★ ☆</span>
                <span className="text-gray-500 text-sm">4 Estrellas</span>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">${cartItems[0].price}</div>
              <select className="border rounded px-2 py-1 mb-4">
                <option>Selecciona tu Modelo</option>
              </select>
              <div className="text-gray-600 mb-4">{cartItems[0].description || 'Este producto es de la mejor calidad, y de mejor material. Compra con envío hasta la puerta de tu casa, y con garantía de devolución.'}</div>
              <div className="flex gap-4">
                <button onClick={() => removeFromCart(cartItems[0].id)} className="bg-gray-800 text-white px-4 py-2 rounded font-semibold hover:bg-gray-900 transition">Eliminar</button>
                <button className="border px-4 py-2 rounded font-semibold hover:bg-gray-100 transition">❤</button>
              </div>
            </div>
          </div>
          {/* Productos similares (resto del carrito) */}
          {cartItems.length > 1 && (
            <div>
              <h4 className="text-xl font-bold mb-4">Productos Similares</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {cartItems.slice(1).map((item: CartItem) => (
                  <div key={item.id} className="bg-white rounded-lg shadow p-2 flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-200 rounded mb-2 flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-gray-400 text-xs">Img</span>
                      )}
                    </div>
                    <div className="font-semibold text-xs text-center mb-1">{item.name}</div>
                    <div className="text-gray-600 text-xs mb-1">${item.price}</div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline text-xs">Eliminar</button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Total y botón de pago */}
          <div className="flex justify-between items-center mt-8 mb-4">
            <span className="font-bold text-lg">Total:</span>
            <span className="text-xl text-blue-600 font-bold">${total}</span>
          </div>
          <button className="w-full bg-gray-800 text-white py-2 rounded font-semibold hover:bg-gray-900 transition">Proceder a pago</button>
        </div>
      )}
    </section>
  );
};

export default CartPage;
