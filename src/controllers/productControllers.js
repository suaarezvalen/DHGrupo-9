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

        for(let i=0;i<product.length;i++){
            if(product[i].id==idParaURL);
            aux=i
            break;
        }

        res.render('product/detalle', {detalleProducto : aux})
    },



    crearProducto: (req, res) => {
        res.render('product/crearProducto')
    },



    editarProducto: (req, res) => {
        res.render('product/editarProducto')
    }
}   
module.exports = productControllers;                                   