import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getUsuarios = () => api.get(endpoints.usuarios.base);
export const createUsuario = (data: any) => api.post(endpoints.usuarios.base, data);
export const getUsuarioById = (id: string) => api.get(endpoints.usuarios.byId(id));
export const updateUsuario = (id: string, data: any) => api.patch(endpoints.usuarios.byId(id), data);
export const deleteUsuario = (id: string) => api.delete(endpoints.usuarios.byId(id));
export const loginUsuario = async (data: any) => {
  const response = await api.post(endpoints.usuarios.login, data);
  // Retornar la respuesta completa (token y usuario)
  return response;
};
