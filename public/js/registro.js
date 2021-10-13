window.addEventListener("load", function(){
    let form = document.querySelector("#formulario");

    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let errores = []
        let error = "Debe completar bien el formulario"

        let nombres = document.querySelector("#nombres");
        let email = document.querySelector("#email");
        let usuario = document.querySelector("#usuario");
        let clave = document.querySelector("#clave");
        let button = document.querySelector("#button");

        if (nombres.value == ""){
            errores.push("Debe completar el nombre")
        }

        if (nombre.value.isAlfa){
            errores.push("El nombre solo puede contener letras")
        }

        if (nombre.value.length >= 5 && nombre.value.length <=30){
            errores.push("El nombre debe tener un mínimo de 5 y un máximo de 30 carácteres")
        }


        if (email.value == ""){
            errores.push("Debe completar el email")
        }

        if (email.value.includes("@")){
            errores.push("Debe completar el email con formato de email")
        }


        if (usuario.value == ""){
            errores.push("Debe completar el usuario")
        }

        if (usuario.value.length >= 3 && usuario.value.length <=15){
            errores.push("El usuario debe tener un mínimo de 3 y un máximo de 15 carácteres")
        }


        if (clave.value == ""){
            errores.push("Debe completar la contraseña")
        }

        if (clave.value.length >= 5 && usuario.value.length <=25){
            errores.push("La contraseña debe tener un mínimo de 5 y un máximo de 25 carácteres")
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


    /*form.addEventListener('submit',function(event){ 
        event.preventDefault();
        validacionLogin();  
    })

    function validacionLogin (){
        if ((email.value == "") || (email.value.includes("@")) ||(password.value=="")){
            alert("Debe completar los campos")
        }else{
            form.submit()
        }
    }*/
    
})