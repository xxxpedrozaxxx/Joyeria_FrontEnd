import { useEffect, useState } from 'react';
import { Product } from '../types/Product';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Aquí puedes conectar con tu backend
    fetch('/api/productos')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudieron cargar los productos');
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
}
