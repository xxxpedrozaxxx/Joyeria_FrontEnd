import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import { Product } from '../types/Product';

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Aquí deberías llamar a tu backend para obtener productos
    // Ejemplo mock:
    setProducts([
      { id: '1', name: 'Anillo de oro', price: 120, image: '/assets/anillo.jpg' },
      { id: '2', name: 'Collar de plata', price: 80, image: '/assets/collar.jpg' },
      { id: '3', name: 'Pulsera elegante', price: 60, image: '/assets/pulsera.jpg' },
    ]);
  }, []);

  return (
    <section className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Nuestros productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductListPage;
