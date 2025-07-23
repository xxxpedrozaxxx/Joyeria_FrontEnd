import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';
import { getCarritoByUsuario } from '../services/carritoService';

const CartPage = () => {
  const { user } = useUser();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCart = async () => {
      if (!user) {
        setLoading(false);
        setItems([]);
        return;
      }
      try {
        const res = await getCarritoByUsuario(user.id);
        const data = res.data as { items: any[] };
        setItems(data.items || []);
      } catch (err) {
        setError('No se pudo cargar el carrito.');
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [user]);

  const total = items.reduce((acc, item) => acc + (parseFloat(item.producto.precio) * item.cantidad), 0);

  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Carrito de compras</h2>
      {loading ? (
        <div className="text-gray-500">Cargando...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : items.length === 0 ? (
        <div className="text-gray-500">Tu carrito está vacío.</div>
      ) : (
        <div className="bg-white rounded-lg shadow p-8">
          {/* Listado de todos los productos en el carrito */}
          <div className="flex flex-col gap-6 mb-10">
            {items.map((item) => (
              <div key={item.id} className="flex flex-row gap-4 bg-gray-50 rounded-lg p-4 shadow">
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden mb-2">
                    {item.producto.imageUrl ? (
                      <img src={item.producto.imageUrl} alt={item.producto.nombre} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-400">Imagen</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <h3 className="text-xl font-bold mb-1">{item.producto.nombre}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-yellow-400">★ ★ ★ ★ ☆</span>
                    <span className="text-gray-500 text-sm">4 Estrellas</span>
                  </div>
                  <div className="text-lg font-bold text-gray-800 mb-1">${parseFloat(item.producto.precio)}</div>
                  <div className="text-gray-600 mb-2">{item.producto.descripcion || 'Este producto es de la mejor calidad, y de mejor material. Compra con envío hasta la puerta de tu casa, y con garantía de devolución.'}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">Cantidad: {item.cantidad}</span>
                  </div>
                  {/* Aquí podrías agregar funcionalidad para eliminar o actualizar cantidad */}
                </div>
              </div>
            ))}
          </div>
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
