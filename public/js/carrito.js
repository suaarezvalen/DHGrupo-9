
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
                <h3 class="carrito-nombre">${"x1 " + producto.nombre + " "}<i class="fas fa-trash borrar-producto"></i></h3>
            </div>`
        }

        /*SUBTOTAL*/

        let sumadorSubtotal = 0;

        for(let i = 0; i < productoArray.length; i++){

            let precioNumeroSubtotal = productoArray[i].precio.substring(1, productoArray[i].precio.length)

            var auxSubtotal = Number(precioNumeroSubtotal)
            
            sumadorSubtotal += auxSubtotal

        }
        console.log(sumadorSubtotal)

        subtotal.innerHTML +=
            `<div>
                <h3 class="total-subtotal-descuento-js">${sumadorSubtotal}</h3>
            </div>`

        /*DESCUENTO*/
        
        let sumadorDescuento = 0;

        for(let i = 0; i < productoArray.length; i++){

            let precioNumeroDescuento = productoArray[i].precio.substring(1, productoArray[i].precio.length)
            let descuentoNumeroDescuento = productoArray[i].descuento.substring(0, productoArray[i].descuento.length-1)

            var auxDescuento = Number(precioNumeroDescuento)
            var auxDescuento2 = Number(descuentoNumeroDescuento)
            console.log(auxDescuento2)

            if(auxDescuento2 != 0 && auxDescuento2 != 100){
                sumadorDescuento += (100 - auxDescuento2) * auxDescuento / 100
            }else{
                sumadorDescuento += auxDescuento
            }

        }
        console.log(sumadorDescuento)

        descuento.innerHTML +=
            `<div>
                <h3 class="total-subtotal-descuento-js">${sumadorDescuento}</h3>
            </div>`

        /*TOTAL*/

        total.innerHTML +=
            `<div>
                <h3 class="total-subtotal-descuento-js">${sumadorDescuento}</h3>
            </div>`
        
 
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