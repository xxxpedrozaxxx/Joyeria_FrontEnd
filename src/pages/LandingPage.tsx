import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductos } from '../services/productoService';
import { suscribirNewslatter } from '../services/newslatterService';
import Swal from 'sweetalert2';

const LandingPage = () => {
  const [topProducts, setTopProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductos();
        const productos = res.data as any[];
        setTopProducts(productos.filter(p => p.topSale));
      } catch (err) {
        setError('No se pudieron cargar los productos más vendidos.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const [correoNewsletter, setCorreoNewsletter] = useState('');
  const [loadingNewsletter, setLoadingNewsletter] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingNewsletter(true);
    try {
      const res = await suscribirNewslatter({ correo: correoNewsletter });
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: '¡Suscripción exitosa!',
          text: 'Te has suscrito a la newsletter. Próximamente recibirás la newsletter semanal en tu correo.',
        });
        setCorreoNewsletter('');
      } else {
        Swal.fire({ icon: 'error', title: 'Error', text: 'No se pudo suscribir al newsletter.' });
      }
    } catch (err: any) {
      Swal.fire({ icon: 'error', title: 'Error', text: err?.response?.data?.message || 'Error al suscribirse.' });
    } finally {
      setLoadingNewsletter(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-6xl mx-auto py-8 px-4">
        <section className="bg-white rounded-lg shadow-md p-8 mb-10 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Joyería Los Alcazares</h1>
          <Link to="/productos" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition text-center">¡Compra Ahora!</Link>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Productos más vendidos</h2>
          {loading ? (
            <div className="text-gray-500">Cargando...</div>
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : topProducts.length === 0 ? (
            <div className="text-gray-500">No hay productos destacados.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topProducts.map(producto => (
                <div key={producto.id} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                  <div className="w-40 h-32 bg-gray-200 rounded mb-4 flex items-center justify-center overflow-hidden">
                    {producto.imageUrl ? (
                      <img src={producto.imageUrl} alt={producto.nombre} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-400">Imagen</span>
                    )}
                  </div>
                  <div className="font-semibold">{producto.nombre}</div>
                  <div className="text-gray-600">${parseFloat(producto.precio)}</div>
                </div>
              ))}
            </div>
          )}
        </section>
        <section className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="font-bold mb-1">Newsletter</div>
            <div className="text-gray-500 text-sm">Suscríbete a todas nuestras notificaciones y promociones.<br />Puedes cancelar en cualquier momento tu suscripción.</div>
          </div>
          <form className="flex mt-4 md:mt-0" onSubmit={handleNewsletter}>
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="border rounded-l px-4 py-2 focus:outline-none"
              required
              value={correoNewsletter}
              onChange={e => setCorreoNewsletter(e.target.value)}
              disabled={loadingNewsletter}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-r font-semibold hover:bg-blue-700 transition"
              disabled={loadingNewsletter}
              type="submit"
            >
              {loadingNewsletter ? 'Enviando...' : 'Suscribirme'}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
