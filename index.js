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

formRecuperacion.addEventListener("submit", function(evt) {
evt.preventDefault();

if(emailRecuperacion && emailRecuperacion.value) {
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
document.addEventListener('DOMContentLoaded', () => { 

  const contenedorProductos = document.querySelector(".cart-items");

  contenedorProductos.addEventListener("click", (e) => {

    const producto = e.target.closest('.cart-item');
    if (!producto) return; // por seguridad

    if (e.target.matches(".btn-bajar") || e.target.matches(".btn-aumentar")) {
      const cantidadInput = producto.querySelector(".cantidad");
      const precioElemento = producto.querySelector(".precio");
      
      let cantidadUnitaria = Number(cantidadInput.value);
      const precioUnitario = Number(precioElemento.dataset.precio);

      if (e.target.matches(".btn-bajar") && cantidadUnitaria > 1) {
        cantidadUnitaria--;
      } else if (e.target.matches(".btn-aumentar")) {
        cantidadUnitaria++;
      }

      cantidadInput.value = cantidadUnitaria;
      precioElemento.textContent = "$" + (precioUnitario * cantidadUnitaria).toLocaleString("es-CO");

      actualizarResumenTotal();

    } else if (e.target.matches(".item-remove")) {
      producto.remove();
      actualizarResumenTotal();
    }
  });

  function actualizarResumenTotal() {
    const productos = document.querySelectorAll(".cart-item");
    let total = 0;

    productos.forEach(producto => {
      const cantidad = Number(producto.querySelector(".cantidad").value);
      const precioUnitario = Number(producto.querySelector(".precio").dataset.precio);
      total += precioUnitario * cantidad;
    });

    console.log('Total calculado:', total);

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

})

// =====
