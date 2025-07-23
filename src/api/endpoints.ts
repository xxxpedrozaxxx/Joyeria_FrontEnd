const endpoints = {
  newslatter: {
    base: '/api/newslatter',
  },
  contacto: {
    base: '/api/contacto',
  },
  usuarios: {
    base: '/api/usuarios',
    login: '/api/usuarios/login',
    byId: (id: string) => `/api/usuarios/${id}`,
  },
  productos: {
    base: '/api/productos',
    byId: (id: string) => `/api/productos/${id}`,
  },
  resenas: {
    base: '/api/resenas',
    byId: (id: string) => `/api/resenas/${id}`,
  },
  proveedores: {
    base: '/api/proveedores',
    byId: (id: string) => `/api/proveedores/${id}`,
  },
  materiales: {
    base: '/api/materiales',
    byId: (id: string) => `/api/materiales/${id}`,
  },
  categorias: {
    base: '/api/categorias',
    byId: (id: string) => `/api/categorias/${id}`,
  },
  departamentos: {
    base: '/api/departamentos',
    byId: (id: string) => `/api/departamentos/${id}`,
  },
  municipios: {
    base: '/api/municipios',
    byId: (id: string) => `/api/municipios/${id}`,
  },
  direcciones: {
    base: '/api/direcciones',
    byId: (id: string) => `/api/direcciones/${id}`,
  },
  carritos: {
    base: '/api/carritos',
    byId: (id: string) => `/api/carritos/${id}`,
    byUsuario: (usuarioId: string) => `/api/carritos/usuario/${usuarioId}`,
    addItem: (carritoId: string) => `/api/carritos/${carritoId}/items`,
    removeItem: (carritoId: string, itemId: string) => `/api/carritos/${carritoId}/items/${itemId}`,
  },
  itemsCarrito: {
    base: '/api/items-carrito',
    byId: (id: string) => `/api/items-carrito/${id}`,
  },
  detallesPedido: {
    base: '/api/detalles-pedido',
    byId: (id: string) => `/api/detalles-pedido/${id}`,
  },
  pedidos: {
    base: '/api/pedidos',
    byId: (id: string) => `/api/pedidos/${id}`,
  },
  productoMateriales: {
    base: '/api/producto-materiales',
    byId: (id: string) => `/api/producto-materiales/${id}`,
  },
};

export default endpoints;
