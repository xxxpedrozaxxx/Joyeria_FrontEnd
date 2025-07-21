import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getProductos = () => api.get(endpoints.productos.base);
export const createProducto = (data: any) => api.post(endpoints.productos.base, data);
export const getProductoById = (id: string) => api.get(endpoints.productos.byId(id));
export const updateProducto = (id: string, data: any) => api.patch(endpoints.productos.byId(id), data);
export const deleteProducto = (id: string) => api.delete(endpoints.productos.byId(id));
