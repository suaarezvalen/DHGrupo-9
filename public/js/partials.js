window.addEventListener('load', () => {

    let contadorCarrito = document.querySelector("#contador-carrito");

    let productoCarrito = localStorage.getItem("productoEnCarrito");
    let productoArray = productoCarrito ? JSON.parse(productoCarrito) : [];

    if (productoArray.length >= 1){

        let sumador;

        for(let i = 1; i <= productoArray.length; i++){
            if(productoArray.length < 0){
                sumador = i
            }else{
                sumador = 0
            }
        }
        contadorCarrito.innerHTML +=
            `
                <h3>${sumador}</h3>
            `
    }
})