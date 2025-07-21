import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getItemsCarrito = () => api.get(endpoints.itemsCarrito.base);
export const createItemCarrito = (data: any) => api.post(endpoints.itemsCarrito.base, data);
export const getItemCarritoById = (id: string) => api.get(endpoints.itemsCarrito.byId(id));
export const updateItemCarrito = (id: string, data: any) => api.patch(endpoints.itemsCarrito.byId(id), data);
export const deleteItemCarrito = (id: string) => api.delete(endpoints.itemsCarrito.byId(id));
