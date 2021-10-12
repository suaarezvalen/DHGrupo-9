window.addEventListener("load", function(){
    let form = document.querySelector("#formulario");

    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let errores = []
        let error = "Debe completar bien el formulario"

        let nombres = document.querySelector("input#nombres");
        let email = document.querySelector("input#email");
        let usuario = document.querySelector("input#usuario");
        let clave = document.querySelector("input#clave");
        let button = document.querySelector("input#button");

        if (nombres.value == ""){
            errores.push("Debe completar el email")
        }

        if (nombre.value.isAlfa){
            errores.push("Debe completar el email")
        }

        if (nombre.value.length >= 5 && nombre.value.length <=30){
            errores.push("Debe completar el email")
        }


        if (email.value == ""){
            errores.push("Debe completar el email")
        }

        if (email.value.includes("@")){
            errores.push("Debe completar el email con formato de email")
        }


        if (usuario.value == ""){
            errores.push("Debe completar la contraseña")
        }

        if (usuario.value.length >= 3 && usuario.value.length <=15){
            errores.push("Debe completar el email")
        }


        if (clave.value == ""){
            errores.push("Debe completar la contraseña")
        }

        if (clave.value.length >= 5 && usuario.value.length <=25){
            errores.push("Debe completar el email")
        }


        if(errores.length > 0){
            //alert(error)
                let ulErrores = document.querySelector("div.errores ul");
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