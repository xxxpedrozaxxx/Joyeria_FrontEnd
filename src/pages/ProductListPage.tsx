import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { getProductos } from '../services/productoService';

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductos();
        setProducts(response.data as Product[]);
      } catch (error) {
        setProducts([]);
      }
    };
    fetchProducts();
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
