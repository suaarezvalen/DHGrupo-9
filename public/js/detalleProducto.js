window.addEventListener('load', () => {
    //alert("holis")

    let button = document.querySelector('#agregar-carrito');
    let nombre = document.querySelector('#titulo-juego').innerText;
    let precio = document.querySelector('#precio').innerText;
    let descuento = document.querySelector('#descuento').innerText;
    let imagen = document.querySelector('#logo-producto').src;

    let producto = {
        nombre: nombre,
        precio: precio,
        descuento: descuento,
        img: imagen
    }

    button.addEventListener('click', agregarProducto)

    function agregarProducto (evento) {
        evento.preventDefault();
    
        let productoCarrito;
    
        if(localStorage.getItem('productoEnCarrito')) {
            productoCarrito = JSON.parse(localStorage.getItem('productoEnCarrito'));
            console.log(productoCarrito)
        } else {
            productoCarrito = [];
        }
    
        productoCarrito.push(producto);
    
        localStorage.setItem('productoEnCarrito', JSON.stringify(productoCarrito));
    
    
    }
})