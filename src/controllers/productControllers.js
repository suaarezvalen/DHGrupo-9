const fs = require('fs');
const path = require("path");

const productFilePath = path.join(__dirname, "../database/product.JSON");
const product = JSON.parse(fs.readFileSync(productFilePath, "utf-8"));

const productControllers =  
{
    tienda: (req, res) => {
        res.render('product/tienda', {dataProductos : product})
    },



    detalle: (req, res) => {
        let idParaURL = req.params.id;

        let aux;

        for (let i of product){
            if (i.id==idParaURL){
                aux=i;
                break;
            }
        }

        const novedades = product.slice(-4)

        res.render('product/detalle', {detalleProducto : aux, novedadesProducto : novedades})
    },



    crearProducto: (req, res) => {
        res.render('product/crearProducto')
    },



    editarProducto: (req, res) => {
        res.render('product/editarProducto')
    }
}   
module.exports = productControllers;                                   