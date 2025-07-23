import api from '../api/axios';
import endpoints from '../api/endpoints';

export const suscribirNewslatter = (data: { correo: string }) =>
  api.post(endpoints.newslatter.base, data);
