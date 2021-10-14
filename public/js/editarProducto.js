window.addEventListener("load", function(){
    let form = document.querySelector("#formulario");

    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let errores = []
        let error = "Debe completar bien el formulario"

        let titulo = document.querySelector("input#titulo");
        let precio = document.querySelector("input#precio");
        let descuento = document.querySelector("input#descuento");
        let descripcion = document.querySelector("input#descripcion");
        //let button = document.querySelector("#button");

        if(!titulo.value){
            errores.push("Debe completar el título")
        }

        if(titulo.value.length <= 2 || titulo.value.length >= 30){
            errores.push("El nombre debe tener un mínimo de 2 y un máximo de 30 carácteres")
        }


        if(!precio.value){
            errores.push("Debe completar el precio")
        }

        if(precio.value.length <= 0 || precio.value.length >= 5){
            errores.push("El nombre debe tener un mínimo de 0  y un máximo de 5 carácteres")
        }

        if(isNaN(precio.value)){
            errores.push("El precio debe ser un número")
        }

        
        if(!descuento.value){
            errores.push("Debe completar el descuento")
        }

        if(isNaN(descuento.value)){
            errores.push("El descuento debe ser un número")
        }

        if(descuento.value.length <= 0 || descuento.value.length >= 4){
            errores.push("El descuento debe tener un mínimo de 1%  y un máximo de 100% de descuento")
        }


        if(!descripcion.value){
            errores.push("Debe completar el descuento")
        }

        if(descuento.value.length <= 20 || descuento.value.length >= 1000){
            errores.push("La descripción debe tener un mínimo de 20 y un máximo de 1000 carácteres")
        }



        if(errores.length > 0){
            //alert(error)
            let ulErrores = document.querySelector("div.errores ul");
            ulErrores.innerHTML = ""
            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }else{
            form.submit()
        }

    })

})