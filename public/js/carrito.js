
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
                <h3 class="carrito-nombre">${"x1 " + producto.nombre}</h3>
                <i class="fas fa-trash borrar-producto"></i>
            </div>`
        }


        let sumador = 0;

        for(let i = 0; i < productoArray.length; i++){

            let precioNumero = productoArray[i].precio.substring(1, productoArray[i].precio.length)

            var aux3 = Number(precioNumero)
            
            sumador += aux3

        }
        console.log(sumador)

        subtotal.innerHTML +=
            `<div>
                <h3 class="total-subtotal-descuento-js">${sumador}</h3>
            </div>`


        /*let sumador = 0;

        for(let i = 0; i < productoArray.length; i++){

            let precioNumero = productoArray[i].precio.substring(1, productoArray[i].precio.length)

            var aux3 = Number(precioNumero)
            
            sumador += aux3 * productoArray[i].descuento
            console.log(productoArray)
        }
        console.log(sumador)

        descuento.innerHTML +=
            `<div>
                <h3 class="total-subtotal-descuento-js">${sumador}</h3>
            </div>`


        function totalFuncion (){
            let sumador = 0;

            for(let i = 0; i < productoArray.length; i++){

                let precioNumero = productoArray[i].precio.substring(1, productoArray[i].precio.length)

                var aux3 = Number(precioNumero)
                
                sumador += aux3

            }
            console.log(sumador)

            total.innerHTML +=
                `<div>
                    <h3 class="total-subtotal-descuento-js">${sumador}</h3>
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