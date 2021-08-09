const fs = require('fs');
const path = require("path");

const productFilePath = path.join(__dirname, "../database/product.JSON");
let product = JSON.parse(fs.readFileSync(productFilePath, "utf-8"));

const carritoControllers =  
{
    carrito: (req, res) => {
        let idParaURL = req.params.id;

        let aux;

        for (let i of product){
            if (i.id==idParaURL){
                aux=i;
                break;
            }
        }                          //FOR DE JERO
        
        res.render('carrito', {carritoProducto : aux})
    }
}   
module.exports = carritoControllers;                                   