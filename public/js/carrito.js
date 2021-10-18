
window.addEventListener('load', () => {
    //alert("holis")

    let articuloEnCarrito =document.querySelector("#item-en-seccion");
    let productoCarrito = localStorage.getItem("productoEnCarrito");
    let productoArray = productoCarrito ? JSON.parse(productoCarrito) : [];

    if (productoArray.length >= 1){

        for(let producto of productoArray){
            articuloEnCarrito.innerHTML +=
            `<div class="items-carrito">
                <img src="${producto.img}" alt="" class="carrito-img">
                <h3 class="carrito-nombre">${producto.nombre}</h3>
                <h3 class="carrito-precio">${producto.precio}</h3>
                <i class="fas fa-trash borrar-producto"></i>
            </div>`
        }
    }
    
    let buttonDelete = document.getElementsByClassName('borrar-producto');
    
    for (let i = 0; i < buttonDelete.length; i++){

        buttonDelete[i].addEventListener('click', productoEliminado);{
        
        
        function productoEliminado(productoEnCarrito){
            localStorage.removeItem("productoEnCarrito")  

            window.location.reload();
        }
    }
    }

    
})