const { json } = require("body-parser");

window.addEventListener('load', () => {
    alert("holis")

    let articuloEnCarrito =document.querySelector("#item-en-seccion");
    let productoCarrito = localStorage.getItem("productoEnCarrito");
    let productoArray = productoCarrito ? JSON.parse(productoCarrito) : [];

    if (productoArray.length >= 1){

        for(let producto of productoArray){
            articuloEnCarrito.innerHTML +=
            `<div class="items-carrito">
                <img src="${producto.img}" alt="" class="carrito-img">
                <h5 class="carrito-nombre">${producto.nombre}</h5>
                <h5 class="carrito-precio">${producto.precio}</h5>
                <h5 class="carrito-precio-total">${producto.precio}</h5>
                <i class="fas fa-trash borrar-item"></i>
            </div>`
        }
    }

    
})