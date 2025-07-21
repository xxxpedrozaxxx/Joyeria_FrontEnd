import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getMateriales = () => api.get(endpoints.materiales.base);
export const createMaterial = (data: any) => api.post(endpoints.materiales.base, data);
export const getMaterialById = (id: string) => api.get(endpoints.materiales.byId(id));
export const updateMaterial = (id: string, data: any) => api.patch(endpoints.materiales.byId(id), data);
export const deleteMaterial = (id: string) => api.delete(endpoints.materiales.byId(id));
