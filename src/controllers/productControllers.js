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



    crearProductoAccion: (req, res) => {
        let idNuevo = 0;
        
        for (let i of product){
            if (idNuevo<i.id){
                idNuevo=i.id;
            }
        }

        idNuevo++;

        let nombreImagen = req.file.filename

        let productoNuevo = {
            id: idNuevo,
            titulo: req.body.titulo,
            precio: req.body.precio,
            descuento: req.body.descuento,
            descripcion: req.body.descripcion,
            img: nombreImagen
        }

        product.push(productoNuevo);

        fs.writeFileSync(productFilePath, JSON.stringify(product, null, " "))

        res.redirect("/product/tienda")
    },



    editarProducto: (req, res) => {
        res.render('product/editarProducto')
    }
}   
module.exports = productControllers;                                   