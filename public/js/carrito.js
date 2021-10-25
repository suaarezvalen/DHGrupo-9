
window.addEventListener('load', () => {
    //alert("holis")

    let articuloEnCarrito =document.querySelector("#item-en-seccion");
    let subtotal =document.querySelector("#subtotal");
    let descuento =document.querySelector("#descuento");
    let total =document.querySelector("#total");


    let productoCarrito = localStorage.getItem("productoEnCarrito");
    let productoArray = productoCarrito ? JSON.parse(productoCarrito) : [];

    if (productoArray.length >= 1){


        //for normal y poner el indice
        for(let producto of productoArray){
            articuloEnCarrito.innerHTML +=
            `<div class="items-carrito" indice="${producto.indice}">
                <img src="${producto.img}" alt="" class="carrito-img">
                <h3 class="carrito-nombre">${producto.nombre}</h3>
                <i class="fas fa-trash borrar-producto"></i>
            </div>`
        }
    
        for(let producto of productoArray){
            subtotal.innerHTML +=
            `<div class="subtotal">
                <h3 class="carrito-precio">${producto.precio}</h3>
            </div>`
        }

        for(let producto of productoArray){
            descuento.innerHTML +=
            `<div class="subtotal">
                <h3 class="carrito-precio">${producto.descuento}</h3>
            </div>`
        }

        for(let producto of productoArray){
            total.innerHTML +=
            `<div class="subtotal">
                <h3 class="carrito-precio">${producto.precio}</h3>
            </div>`
        }

        /*let aux = [];
        let sumador = 0;

        for(let i = 0; i <= productoArray.length; i++){

            aux.push(productoArray[i].precio);
            let aux2 = sumador += aux[i]

            subtotal.innerHTML +=
            `<div class="subtotal">
                <h3 class="carrito-precio">${aux2}</h3>
            </div>`
        }*/
    
        

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