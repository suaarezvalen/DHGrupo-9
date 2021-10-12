window.addEventListener("load", function(){
    let form = document.querySelector("#formulario");

    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let errores = []
        let error = "Debe completar bien el formulario"

        let email = document.querySelector("input#email");
        let password = document.querySelector("input#password");
        let button = document.querySelector("input#button");

        if (!email.value){
            errores.push("Debe completar el email")
        }

        if (!email.value.includes("@")){
            errores.push("Debe completar el email con formato de email")
        }

        if (!password.value){
            errores.push("Debe completar la contraseña")
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