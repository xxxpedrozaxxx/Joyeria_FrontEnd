import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { getCarritoByUsuario } from '../services/carritoService';
import api from '../api/axios';
import endpoints from '../api/endpoints';
import Swal from 'sweetalert2';

const CheckoutPage = () => {
  const { user } = useUser();
  const [direccion, setDireccion] = useState('');
  const [carritoId, setCarritoId] = useState('');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarrito = async () => {
      if (!user) {
        setError('Usuario no autenticado.');
        setLoading(false);
        return;
      }
      try {
        const res = await getCarritoByUsuario(user.id);
        const data = res.data as { id: string; items: any[] };
        setCarritoId(data.id);
        const totalCalc = (data.items || []).reduce((acc, item) => acc + (parseFloat(item.producto.precio) * item.cantidad), 0);
        setTotal(totalCalc);
      } catch (err) {
        setError('No se pudo obtener el carrito.');
      } finally {
        setLoading(false);
      }
    };
    fetchCarrito();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!direccion) return;
    try {
      const res = await api.post(endpoints.pedidos.base, {
        usuarioId: user.id,
        direccionEnvio: direccion,
        carritoId,
        total
      });
      if (res.status === 201) {
        await Swal.fire({
          icon: 'success',
          title: '¡Pedido realizado!',
          text: 'Tu pedido ha sido realizado exitosamente.',
        });
        navigate('/');
      } else {
        Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo realizar el pedido.' });
      }
    } catch (err: any) {
      Swal.fire({ icon: 'error', title: 'Error', text: err?.response?.data?.message || 'Error al realizar el pedido.' });
    }
  };

  if (loading) return <div className="text-gray-500 text-center py-10">Cargando...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  return (
    <section className="max-w-md mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Checkout</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-semibold">Dirección de Envío</label>
          <input
            type="text"
            className="border rounded px-4 py-2 w-full"
            placeholder="Ingresa tu dirección de envío"
            value={direccion}
            onChange={e => setDireccion(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">Total:</span>
          <span className="text-blue-600 font-bold text-lg">${total}</span>
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Pagar</button>
      </form>
    </section>
  );
};

export default CheckoutPage;
