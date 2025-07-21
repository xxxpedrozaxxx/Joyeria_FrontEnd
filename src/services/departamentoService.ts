import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getDepartamentos = () => api.get(endpoints.departamentos.base);
export const createDepartamento = (data: any) => api.post(endpoints.departamentos.base, data);
export const getDepartamentoById = (id: string) => api.get(endpoints.departamentos.byId(id));
export const updateDepartamento = (id: string, data: any) => api.patch(endpoints.departamentos.byId(id), data);
export const deleteDepartamento = (id: string) => api.delete(endpoints.departamentos.byId(id));
