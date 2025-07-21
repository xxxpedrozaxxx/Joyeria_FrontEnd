import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getCarritos = () => api.get(endpoints.carritos.base);
export const createCarrito = (data: any) => api.post(endpoints.carritos.base, data);
export const getCarritoById = (id: string) => api.get(endpoints.carritos.byId(id));
export const updateCarrito = (id: string, data: any) => api.patch(endpoints.carritos.byId(id), data);
export const deleteCarrito = (id: string) => api.delete(endpoints.carritos.byId(id));
