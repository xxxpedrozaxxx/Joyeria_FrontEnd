import api from '../api/axios';
import endpoints from '../api/endpoints';

export const enviarContacto = (data: { nombre: string; correo: string; mensaje: string }) =>
  api.post(endpoints.contacto.base, data);
