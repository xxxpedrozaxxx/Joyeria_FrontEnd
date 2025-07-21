import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getCategorias = () => api.get(endpoints.categorias.base);
export const createCategoria = (data: any) => api.post(endpoints.categorias.base, data);
export const getCategoriaById = (id: string) => api.get(endpoints.categorias.byId(id));
export const updateCategoria = (id: string, data: any) => api.patch(endpoints.categorias.byId(id), data);
export const deleteCategoria = (id: string) => api.delete(endpoints.categorias.byId(id));
