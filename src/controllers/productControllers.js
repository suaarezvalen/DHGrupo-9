const fs = require('fs');
const path = require("path");

const productFilePath = path.join(__dirname, "../database/product.JSON");
//let product = JSON.parse(fs.readFileSync(productFilePath, "utf-8"));

const db = require('../database/models');

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productControllers =  
{
    tienda: (req, res) => {
        let todosLosProductos;
        db.Producto.findAll()
        .then(productos =>{
            todosLosProductos = productos;  
            res.render('product/tienda', {todosLosProductos})
        })
        .catch((error) => {
            console.log('ERRRO')
            console.log(error)
        })
        
    },

    detalle: (req, res) => {
        let idEncontrado = req.params.id;

        let productoEncontrado;

        db.Producto.findOne({
            where: {id: idEncontrado}
        }).then(resultado =>{
            productoEncontrado = resultado;


        res.render('product/detalle', {detalleProducto : productoEncontrado});
        }
        )},



    crearProducto: (req, res) => {
        res.render('product/crearProducto')
    },



    crearProductoAccion: async (req, res) => {
         
        let nombreImagen = req.file.filename
        let categorias = await db.categorias.findOne({
            where: {nombre: req.body.categoria}
        })

        db.Producto.create({
		    titulo: req.body.titulo,
		    precio: req.body.precio,
		    decuento: req.body.decuento,
            img: nombreImagen,
            categoria_fk: categorias["id"],
            descripcion: req.body.descripcion

        })
        .then((resultado)=>{
            console.log("Se creo bien")
        })
        .catch((error)=>{
            console.log("error ",error)
        })
        res.redirect("/product/tienda")
    },

    editarProducto:  (req, res) => {
        let id = req.params.id

        let productoEncontrado;

        db.Producto.findOne({
            where: {
                id: id
            }
        }).then(producto => {
            productoEncontrado = producto;
            res.render('product/editarProducto', {productoEncontrado});
        });
    },



    editarProductoAccion : async (req, res) => {
        let idEncontrado = req.params.id;
        let categorias = await db.categorias.findOne({
            where: {nombre: req.body.categoria}
        })

        db.Producto.update({
            titulo: req.body.titulo,
		    precio: req.body.precio,
		    decuento: req.body.decuento,
            img: req.file.filename,
            categoria_fk: categorias["id"],
            descripcion: req.body.descripcion
        },
        {
            where: {id: idEncontrado}
        });
        res.redirect("/product/tienda")
    },



    eliminarProducto: (req, res) => {
        let idEncontrado = req.params.id;
		
        db.Producto.destroy({
            where: {id: idEncontrado}
        });

		res.redirect('/product/tienda');

        
    }

}   
module.exports = productControllers;                                   