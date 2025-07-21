import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getDetallesPedido = () => api.get(endpoints.detallesPedido.base);
export const createDetallePedido = (data: any) => api.post(endpoints.detallesPedido.base, data);
export const getDetallePedidoById = (id: string) => api.get(endpoints.detallesPedido.byId(id));
export const updateDetallePedido = (id: string, data: any) => api.patch(endpoints.detallesPedido.byId(id), data);
export const deleteDetallePedido = (id: string) => api.delete(endpoints.detallesPedido.byId(id));
