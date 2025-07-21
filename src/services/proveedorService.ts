import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getProveedores = () => api.get(endpoints.proveedores.base);
export const createProveedor = (data: any) => api.post(endpoints.proveedores.base, data);
export const getProveedorById = (id: string) => api.get(endpoints.proveedores.byId(id));
export const updateProveedor = (id: string, data: any) => api.patch(endpoints.proveedores.byId(id), data);
export const deleteProveedor = (id: string) => api.delete(endpoints.proveedores.byId(id));
