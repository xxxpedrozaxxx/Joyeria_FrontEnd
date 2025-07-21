import api from '../api/axios';
import endpoints from '../api/endpoints';

export const getMunicipios = () => api.get(endpoints.municipios.base);
export const createMunicipio = (data: any) => api.post(endpoints.municipios.base, data);
export const getMunicipioByCodigo = (codigo: string) => api.get(endpoints.municipios.byCodigo(codigo));
export const updateMunicipio = (codigo: string, data: any) => api.patch(endpoints.municipios.byCodigo(codigo), data);
export const deleteMunicipio = (codigo: string) => api.delete(endpoints.municipios.byCodigo(codigo));
