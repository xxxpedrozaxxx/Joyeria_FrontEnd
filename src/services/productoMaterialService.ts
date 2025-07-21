import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getProductoMateriales = () => api.get(endpoints.productoMateriales.base);
export const createProductoMaterial = (data: any) => api.post(endpoints.productoMateriales.base, data);
export const getProductoMaterialByIds = (productoId: string, materialId: string) => api.get(endpoints.productoMateriales.byIds(productoId, materialId));
export const updateProductoMaterial = (productoId: string, materialId: string, data: any) => api.patch(endpoints.productoMateriales.byIds(productoId, materialId), data);
export const deleteProductoMaterial = (productoId: string, materialId: string) => api.delete(endpoints.productoMateriales.byIds(productoId, materialId));
