const productos = [
    { id: 1, name: "Taza stitch", price: 1500 },
    { id: 2, name: "Taza pato donald", price: 1500 },
    { id: 3, name: "Peluche stitch", price: 2000 }
];


function displayProductos() {
    const productosContainer = document.getElementById("productos");
    productosContainer.innerHTML = "";

    productos.forEach((producto) => {
        const productoElement = document.createElement("div");
        productoElement.innerHTML = `
        <p>${producto.name} - $${producto.price}</p>
        <button onclick="addToCart(${producto.id})">Agregar al carrito</button>
        `;
        productosContainer.appendChild(productoElement);
    });
}

displayProductos();


function addToCart(productoId) {
    // Verificar si el producto ya está en el carrito
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const producto = productos.find((p) => p.id === productoId);
    const existingProducto = carrito.find((p) => p.id === productoId);

    if (existingProducto) {
        existingProducto.quantity++;
    } else {
        producto.quantity = 1;
        carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    updateCarrito();
}

// Función para actualizar el carrito en la página
function updateCarrito() {
    const carritoContainer = document.getElementById("carrito");
    carritoContainer.innerHTML = "";

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.forEach((producto) => {
        const carritoItem = document.createElement("li");
        carritoItem.innerHTML = `${producto.name} - Cantidad: ${producto.quantity}`;
        carritoContainer.appendChild(carritoItem);
    });
}

// Función para vaciar el carrito
function clearCarrito() {
    localStorage.removeItem("carrito");
    updateCarrito();
}

window.addEventListener("load", () => {
    updateCarrito();
});