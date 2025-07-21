const endpoints = {
  usuarios: {
    base: '/usuarios',
    login: '/usuarios/login',
    byId: (id: string) => `/usuarios/${id}`,
  },
  productos: {
    base: '/productos',
    byId: (id: string) => `/productos/${id}`,
  },
  resenas: {
    base: '/resenas',
    byId: (id: string) => `/resenas/${id}`,
  },
  proveedores: {
    base: '/proveedores',
    byId: (id: string) => `/proveedores/${id}`,
  },
  materiales: {
    base: '/materiales',
    byId: (id: string) => `/materiales/${id}`,
  },
  categorias: {
    base: '/categorias',
    byId: (id: string) => `/categorias/${id}`,
  },
  departamentos: {
    base: '/departamentos',
    byId: (id: string) => `/departamentos/${id}`,
  },
  municipios: {
    base: '/municipios',
    byCodigo: (codigo: string) => `/municipios/${codigo}`,
  },
  direcciones: {
    base: '/direcciones',
    byId: (id: string) => `/direcciones/${id}`,
  },
  carritos: {
    base: '/carritos',
    byId: (id: string) => `/carritos/${id}`,
  },
  itemsCarrito: {
    base: '/items-carrito',
    byId: (id: string) => `/items-carrito/${id}`,
  },
  detallesPedido: {
    base: '/detalles-pedido',
    byId: (id: string) => `/detalles-pedido/${id}`,
  },
  pedidos: {
    base: '/pedidos',
    byId: (id: string) => `/pedidos/${id}`,
  },
  productoMateriales: {
    base: '/producto-materiales',
    byIds: (productoId: string, materialId: string) => `/producto-materiales/${productoId}/${materialId}`,
  },
};

export default endpoints;
