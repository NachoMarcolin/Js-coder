// Mostrar lista de productos al cliente

const productos = [
    " 1-Peluche", 
    " 2-Taza", 
    " 3-Sahumerio", 
    " 4-Cuadro", 
    " 5-Desayuno",
    " 6-Cuaderno",
    " 7-Otro"
];

console.log("Lista de productos:");
for (let i = 0; i < productos.length; i++) {
    console.log((i + 1) + ". " + productos[i]);
}

// Guardar la opcion del usuario y analizar si la respuesta es valida
const eleccion = parseInt(prompt("Ingrese el número del producto que desea elegir: " + productos ));

if (eleccion >= 1 && eleccion <= productos.length) {
    const productoElegido = productos[eleccion - 1];
    console.log("Ha elegido el " + productoElegido + ".");
} else {
    console.log("La elección no es válida.");
}




// Capturar entradas mediante prompt()
const nombreProducto = prompt("Ingrese el nombre del producto:");
const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
const cantidadProducto = parseInt(prompt("Ingrese la cantidad de productos:"));
const porcentajeDescuento = parseInt(prompt("Ingrese el porcentaje de descuento:"));

// Declarar variables y objetos necesarios
let subtotal = precioProducto * cantidadProducto;
let descuento = (subtotal * porcentajeDescuento) / 100;
let total = subtotal - descuento;

// Crear función para mostrar los resultados
function mostrarResultados() {
    console.log("Nombre del producto: " + nombreProducto);
    console.log("Precio por unidad: $" + precioProducto);
    console.log("Cantidad: " + cantidadProducto);
    console.log("Subtotal: $" + subtotal);
    console.log("Descuento: $" + descuento);
    console.log("Total a pagar: $" + total);
}

// Llamar a la función para mostrar los resultados
mostrarResultados();