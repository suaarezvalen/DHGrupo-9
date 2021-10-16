const fs = require('fs');
const path = require("path");


const carritoControllers =  {
    
    carrito: (req, res) => {
        let idEncontrado = req.params.id;

        let productoEnCarrito;

        db.Producto.findOne({
            where: {id: idEncontrado}
        }).then(resultado =>{
            productoEnCarrito = resultado;

        console.log("producto   " + resultado)
        res.render('carrito', {productoCarrito : productoEnCarrito});
    })
}

}   
module.exports = carritoControllers;                                   