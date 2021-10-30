window.addEventListener('load', () => {

    let contadorCarrito = document.querySelector("#contador-carrito");

    let productoCarrito = localStorage.getItem("productoEnCarrito");
    let productoArray = productoCarrito ? JSON.parse(productoCarrito) : [];

    if (productoArray.length >= 1){

        let sumador;

        for(let i = 1; i <= productoArray.length; i++){
            sumador = i
        }
        contadorCarrito.innerHTML +=
            `<div>
                <h3 class="total-subtotal-descuento-js">${sumador}</h3>
            </div>`
    }
})