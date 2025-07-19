// 01. Validar Formulario de Página Registro

// LLamar a elementos DOM
const formRegistro = document.querySelector(".formRegistro");
const nombreRegistro = document.getElementById("nombreRegistro");
const apellidoRegistro = document.getElementById("apellidoRegistro");
const direccionRegistro = document.getElementById("direccionRegistro");
const telefonoRegistro = document.getElementById("telefonoRegistro");
const emailRegistro = document.getElementById("emailRegistro");

//Agregar evento y validación
if (formRegistro) {
    formRegistro.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = nombreRegistro.value.trim();
        if(nombre === "" || /\d/.test(nombre)) {
            alert("Debes ingresar un nombre");
            return;
        }

        const apellido = apellidoRegistro.value.trim();
        if(apellido === "" || /\d/.test(apellido)) {
            alert("Ingresa un apellido");
            return;
        }

        if(direccionRegistro.value.trim() === "" || !validarDireccion(direccionRegistro.value.trim())) {
            alert("Ingresa una dirección válida");
            return;
        }

        if(!validarTelefono(telefonoRegistro.value.trim())) {
            alert("Ingrese un teléfono válido");
            return;
        };        
    
    formRegistro.submit();
    });
};

// Funciones externas propias para validar ciertos campos de eventos
 function validarDireccion(direccion) {
     const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s\#\.,\-]{5,100}$/;
     return regex.test(direccion.trim());
 }

 function validarTelefono(telefono) {
   return /^\+?\d{7,15}$/.test(telefono.trim());
 }



// 02. Validar Formulario de Página de Crear Credenciales

// Llamar a DOM
const formCredenciales = document.querySelector(".formCredenciales");
const usuarioCredenciales = document.getElementById("usuarioCredenciales");
const passwordCredenciales = document.getElementById("passwordCredenciales");
const passwordConfirm = document.getElementById("password-confirm");

// Crear Evento de validación
if (formCredenciales) {
formCredenciales.addEventListener("submit", function(e){
e.preventDefault();

if (usuarioCredenciales.value.trim() === "" || usuarioCredenciales.value.length < 5) {
    alert("El usuario debe tener al menos 5 carácteres");
    return;
}

if (!validarPassword(passwordCredenciales.value)) {
    return;
}

if (passwordConfirm.value !== passwordCredenciales.value) {
    alert("Ambas contraseñas deben coincidir");
    return;
}

formCredenciales.submit();

})
};

// Funciones Externas para Validar Contraseña
function validarPassword(password) {
    if (password.trim() === "" || password.length <6 || password.length > 12) {
    alert("Ingresa una contraseña con los requisitos"); 
    return false;
}

const tieneMayuscula = /[A-Z]/.test(password);
const tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

if (!tieneMayuscula && !tieneEspecial) {
    alert("La contraseña debe tener una mayúscula o especial")
    return false;
}
    return true;
}


// 03. Validar página de Recuperación y Guardar Email en LocalStorage
document.addEventListener('DOMContentLoaded', () => {
const formRecuperacion = document.querySelector(".formRecuperacion");
const emailRecuperacion = document.querySelector("#emailRecuperacion");

formRecuperacion?.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (emailRecuperacion && emailRecuperacion.value) {
    localStorage.setItem("emailUsuario", emailRecuperacion.value);
    window.location.href = "confirmacion.html";
  }
});
});

// Mostrar Email Guardado e Ingresado en la Confirmación
const confirmacionEmail = document.querySelector(".confirmacionEmail");
const emailGuardado = localStorage.getItem("emailUsuario");

if(confirmacionEmail && emailGuardado) {
confirmacionEmail.textContent = emailGuardado;
};


// === 04. Aumentar Items de Carrito y Sumar a Precio Total
const contenedorCatalogo = document.querySelector(".catalogo");
const contenedorProductos = document.querySelector(".cart-items");

// === 1. Cargar carrito desde localStorage al iniciar
document.addEventListener('DOMContentLoaded', () => {
  const productosGuardados = localStorage.getItem("productosCarrito");
  if (!productosGuardados) return;

  const productos = JSON.parse(productosGuardados);
  mostrarProductos(productos);
  actualizarResumenTotal();
});

// === 2. Añadir al carrito ===
contenedorCatalogo?.addEventListener("click", (e) => {
  if (!e.target.matches(".btn")) return;

  const producto = e.target.closest(".product-details");
  if (!producto) return console.warn("No se encontró .product-details");

  const nombreElem = producto.querySelector(".nombre");
  const referenciaElem = producto.querySelector(".referencia");
  const precioElem = producto.querySelector(".product-price");

  if (!nombreElem || !referenciaElem || !precioElem) {
    console.error("Faltan datos del producto.");
    return;
  }

  const nombre = nombreElem.textContent.trim();
  const referencia = referenciaElem.textContent.trim();
  const precioTexto = precioElem.textContent.trim();
  const priceNumber = Number(precioTexto.replace(/[^\d]/g, ""));

  if (!nombre || !referencia || isNaN(priceNumber)) {
    console.error("Datos del producto inválidos");
    return;
  }

  const productoObjeto = {
    nombre,
    referencia,
    precio: priceNumber,
    cantidad: 1,
  };

  let productos = JSON.parse(localStorage.getItem("productosCarrito")) || [];

  const indice = productos.findIndex(p => p.referencia === referencia);
  if (indice !== -1) {
    productos[indice].cantidad += 1;
  } else {
    productos.push(productoObjeto);
  }

  localStorage.setItem("productosCarrito", JSON.stringify(productos));
  mostrarProductos(productos);
  actualizarResumenTotal();
});

// === 3. Mostrar productos en el carrito
function mostrarProductos(productos) {
  contenedorProductos.innerHTML = "";

  productos.forEach(({ nombre, referencia, precio, cantidad }) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <p class="item-name">${nombre}</p>
      <p class="item-ref">${referencia}</p>
      <div class="acciones-carrito">
        <button class="btn-bajar">-</button>
        <input type="text" class="cantidad" value="${cantidad}" readonly>
        <button class="quantity-btn btn-aumentar">+</button>
      </div>
      <p class="precio" data-precio="${precio}">$${(precio * cantidad).toLocaleString("es-CO")}</p>
    `;

    contenedorProductos.appendChild(div);
  });
}

// === 4. Aumentar / Disminuir cantidad en carrito
contenedorProductos.addEventListener("click", (e) => {
  if (!e.target.matches(".btn-bajar") && !e.target.matches(".btn-aumentar")) return;

  const cartItem = e.target.closest(".cart-item");
  const referencia = cartItem.querySelector(".item-ref").textContent;
  const cantidadInput = cartItem.querySelector(".cantidad");
  const precioElemento = cartItem.querySelector(".precio");
  const precioUnitario = Number(precioElemento.dataset.precio);

  let cantidad = Number(cantidadInput.value);
  if (e.target.matches(".btn-bajar") && cantidad > 1) {
    cantidad--;
  } else if (e.target.matches(".btn-aumentar")) {
    cantidad++;
  }

  cantidadInput.value = cantidad;
  precioElemento.textContent = "$" + (precioUnitario * cantidad).toLocaleString("es-CO");

  // Actualizar localStorage
  let productos = JSON.parse(localStorage.getItem("productosCarrito")) || [];
  const index = productos.findIndex(p => p.referencia === referencia);
  if (index !== -1) {
    productos[index].cantidad = cantidad;
    localStorage.setItem("productosCarrito", JSON.stringify(productos));
  }

  actualizarResumenTotal();
});

// === 5. Actualizar resumen total
function actualizarResumenTotal() {
  const productosDOM = document.querySelectorAll(".cart-item");
  let total = 0;

  productosDOM.forEach(producto => {
    const cantidad = Number(producto.querySelector(".cantidad").value);
    const precioUnitario = Number(producto.querySelector(".precio").dataset.precio);
    total += precioUnitario * cantidad;
  });

  const contenedorTotal = document.querySelector(".cart-summary");
  if (!contenedorTotal) return;

  const totalElemento = contenedorTotal.querySelector(".totalElemento");
  const envioElemento = contenedorTotal.querySelector(".envio");
  const pedidoTotal = contenedorTotal.querySelector(".pedidoTotal");

  if (!totalElemento || !envioElemento || !pedidoTotal) return;

  const envioTexto = envioElemento.textContent.replace(/[^\d]/g, "");
  const envio = Number(envioTexto);

  totalElemento.textContent = "$" + total.toLocaleString("es-CO");
  pedidoTotal.textContent = "$" + (total + envio).toLocaleString("es-CO");
}
// =====
