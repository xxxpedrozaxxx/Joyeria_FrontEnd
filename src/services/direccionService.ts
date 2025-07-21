import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getDirecciones = () => api.get(endpoints.direcciones.base);
export const createDireccion = (data: any) => api.post(endpoints.direcciones.base, data);
export const getDireccionById = (id: string) => api.get(endpoints.direcciones.byId(id));
export const updateDireccion = (id: string, data: any) => api.patch(endpoints.direcciones.byId(id), data);
export const deleteDireccion = (id: string) => api.delete(endpoints.direcciones.byId(id));
