const fs = require('fs');
const path = require("path");
const db = require('../database/models');


const indexControllers =  
{
    index: (req, res) => {
        let todosLosProductos;
        db.Producto.findAll()
        .then(productos =>{
            todosLosProductos = productos;  
            //console.log(todosLosProductos[0])

            let arrayImg = todosLosProductos[1].img.split(";")
            

            let imagen = []
        for(i in todosLosProductos) {
            imagen += todosLosProductos[i].img.split(";")[0] +";"
        }
            let imagenesLogo = imagen.split(";")
            
            

            res.render('index', {todosLosProductos , imagenesLogo , arrayImg})
        })
        .catch((error) => {
            console.log('ERRRO')
            console.log(error)
        })
        
    },   
    
}   
module.exports = indexControllers;                                   