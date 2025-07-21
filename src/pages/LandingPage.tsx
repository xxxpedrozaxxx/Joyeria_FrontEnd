import { Link } from 'react-router-dom';

const LandingPage = () => (
  <section className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-50 to-white">
    <img src="/assets/joyeria-hero.jpg" alt="Joyería" className="w-40 h-40 object-cover rounded-full shadow-lg mb-6" />
    <h1 className="text-4xl font-bold mb-4 text-gray-800">Descubre la elegancia en cada detalle</h1>
    <p className="text-lg text-gray-600 mb-8">Joyas únicas para momentos inolvidables</p>
    <Link to="/productos" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Ver productos</Link>
  </section>
);

export default LandingPage;
