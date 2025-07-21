import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getResenas = () => api.get(endpoints.resenas.base);
export const createResena = (data: any) => api.post(endpoints.resenas.base, data);
export const getResenaById = (id: string) => api.get(endpoints.resenas.byId(id));
export const updateResena = (id: string, data: any) => api.patch(endpoints.resenas.byId(id), data);
export const deleteResena = (id: string) => api.delete(endpoints.resenas.byId(id));
