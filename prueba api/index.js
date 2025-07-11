const productos = [
  { id: 101, nombre: "Laptop", precio: 1200 },
  { id: 102, nombre: "Mouse", precio: 25 },
  { id: 103, nombre: "Teclado", precio: 45 }
];

const teclado = productos.find((prod) => prod.nombre === "Teclado");

console.log("Se ha encontrado el siguiente producto: " + JSON.stringify(teclado));
 