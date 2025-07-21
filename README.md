# Joyería - Ecommerce moderno

Este proyecto es una tienda online de joyería hecha con React, Vite, TypeScript y Tailwind CSS. Cuenta con:

- Landing page moderna y responsiva
- Página de productos con tarjetas visuales
- Sistema de login
- Carrito de compras funcional

## Scripts
```
npm install     # Instala dependencias
npm run dev     # Ejecuta el servidor local
```

---

Estructura

components/: Header, Footer, ProductCard, etc.
pages/: Landing, ProductList, Login, Cart
context/: Contextos para auth y carrito

---

#### 🎨 Requisitos de diseño:
- Estilo *minimalista y moderno*
- Tipografía elegante (usar una fuente sans serif o una como Inter desde Google Fonts)
- Cards de productos con *imagen, **nombre* y *precio*
- Layout responsivo para mobile y desktop

#### ✅ Funcionalidades clave:

1. **Landing page (/)**
   - Sección principal con slogan e imagen llamativa
   - Botón que lleva a los productos

2. **Página de productos (/productos)**
   - Lista de tarjetas con:
     - Imagen
     - Nombre del producto
     - Precio
     - Botón "Agregar al carrito"

3. **Login (/login)**
   - Formulario básico (email y contraseña)
   - Puede ser login mock con validación local o con Firebase Auth

4. **Carrito de compras (/carrito)**
   - Listado de productos agregados
   - Total acumulado
   - Botón para proceder a pago (mock)

5. *Navbar y Footer global*
   - Menú de navegación entre páginas
   - Ícono de carrito visible con número de ítems

#### 🧠 Extras:
- Usa useContext y useReducer para manejar el carrito global
- Usa localStorage para mantener el carrito persistente entre recargas
- Evita librerías pesadas: mantener el código liviano
- Componentes y estilos bien separados
