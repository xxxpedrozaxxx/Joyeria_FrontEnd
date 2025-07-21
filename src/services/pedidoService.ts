import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getPedidos = () => api.get(endpoints.pedidos.base);
export const createPedido = (data: any) => api.post(endpoints.pedidos.base, data);
export const getPedidoById = (id: string) => api.get(endpoints.pedidos.byId(id));
export const updatePedido = (id: string, data: any) => api.patch(endpoints.pedidos.byId(id), data);
export const deletePedido = (id: string) => api.delete(endpoints.pedidos.byId(id));
