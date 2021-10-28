window.addEventListener('load', () => {

    let nombreUsuario=document.querySelector('#nombreUsuario').innerText;
    let loginNav =document.querySelector("#loginNav");

    sessionStorage.setItem ("usuarioSession", nombreUsuario)

   
    loginNav.innerHTML +=
    `<div>
        <h3>${sessionStorage.getItem("usuarioSession")}</h3>
    </div>`
})