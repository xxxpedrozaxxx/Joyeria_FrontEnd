import Header from '../components/Header';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     
      <main className="max-w-6xl mx-auto py-8 px-4">
        <section className="bg-white rounded-lg shadow-md p-8 mb-10 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Joyería Los Alcazares</h1>
          <Link to="/productos" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition text-center">¡Compra Ahora!</Link>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Productos más vendidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="w-40 h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Imagen</span>
              </div>
              <div className="font-semibold">ANILLO DE DIAMANTES</div>
              <div className="text-gray-600">$200.000</div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="w-40 h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400">Imagen</span>
              </div>
              <div className="font-semibold">ANILLO DE PLATA</div>
              <div className="text-gray-600">$289.900</div>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="font-bold mb-1">Newsletter</div>
            <div className="text-gray-500 text-sm">Suscríbete a todas nuestras notificaciones y promociones.<br />Puedes cancelar en cualquier momento tu suscripción.</div>
          </div>
          <form className="flex mt-4 md:mt-0">
            <input type="email" placeholder="Correo Electrónico" className="border rounded-l px-4 py-2 focus:outline-none" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r font-semibold hover:bg-blue-700 transition">Suscribirme</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
