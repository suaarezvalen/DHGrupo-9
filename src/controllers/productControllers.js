const fs = require('fs');
const path = require("path");
const { validationResult } = require('express-validator');
const mysql = require("mysql");

const productFilePath = path.join(__dirname, "../database/product.JSON");
const db = require('../database/models');
const { Console, count } = require('console');
const { post } = require('../routes/productRoutes');




const productControllers =  
{
    tienda: (req, res) => {
        let todosLosProductos;
        db.Producto.findAll()
        .then(productos =>{
            todosLosProductos = productos;  
            

            //console.log(todosLosProductos)

            let imagen = []
        for(i in todosLosProductos) {
            imagen += todosLosProductos[i].img.split(";")[0] +";"
        }
            let imagenesLogo = imagen.split(";")
             console.log("prueba 1" , imagenesLogo[1])
            

            res.render('product/tienda', {todosLosProductos , imagenesLogo})
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
        //console.log("imagen de base de datos     " + productoEncontrado.img.split(";"))
        let arrayImg = productoEncontrado.img.split(";")
        
        let imgLogo = arrayImg[0]

        
        res.render('product/detalle', {detalleProducto : productoEncontrado , detalleProductoImg : imgLogo , detalleProductoImgGameplay : arrayImg});
        }
        
        )
        .catch((error)=>{
            console.log("error ",error)
        })
    },


    crearProducto: (req, res) => {
        res.render('product/crearProducto')
    },



    crearProductoAccion: async (req, res) => {
        const resultValidate = validationResult(req);

        
        const imagenes = Object.keys(req.files)

        let nombresImagenes = "" 

        for(i in imagenes) {
            nombresImagenes += req.files[i].filename + ";"
            
        }
        //console.log("final   " + nombresImagenes)
        //console.log("imagen 0     " + nombresImagenes[2])

        
        let categorias = await db.Categoria.findOne({
            where: {nombre: req.body.categoria}
            
        })
        



        if(resultValidate.isEmpty()){
            db.Producto.create({
		    titulo: req.body.titulo,
		    precio: req.body.precio,
		    descuento: req.body.descuento,
            img: nombresImagenes,
            categoria_fk: categorias["id"],
            descripcion: req.body.descripcion
            
        })
        .then((resultado)=>{
            console.log("Se creo bien el producto")
        })
        .catch((error)=>{
            console.log("error ",error)
        })
        res.redirect("/product/tienda")
        
        }else{
            
            return res.render("product/crearProducto", {errores: resultValidate.mapped(), oldData: req.body});
        }
        
        //console.log(req.file)
        
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
        
        const resultValidate = validationResult(req);
        
        const imagenes = Object.keys(req.files)
        let nombresImagenes = "" 

        for(i in imagenes) {
            nombresImagenes += req.files[i].filename + ";"
            
        }

        if(resultValidate.errors.length == 0){
            
            let idEncontrado = req.params.id;
            let categorias = await db.Categoria.findOne({
                where: {nombre: req.body.categoria}
            })
            
            db.Producto.findOne({
                where: {
                    id: idEncontrado
                }
            })

            db.Producto.update({
            titulo: req.body.titulo,
		    precio: req.body.precio,
		    decuento: req.body.decuento,
            img: nombresImagenes,
            categoria_fk: categorias["id"],
            descripcion: req.body.descripcion
        },
        {
            where: {id: idEncontrado}
        })
        .then(() =>{
            res.redirect("/product/tienda")
        })
        }else{
            let idEncontrado = req.params.id;
            db.Producto.findOne({
                where: {
                    id: idEncontrado
                }
            }).then(producto => {
                productoEncontrado = producto;
                return res.render('product/editarProducto', {productoEncontrado, errores: resultValidate.mapped(), oldData: req.body})
            });
            
        } 

        
    },

    eliminarProducto: (req, res) => {
        let idEncontrado = req.params.id;
		
        db.Producto.destroy({
            where: {id: idEncontrado}
        });

		res.redirect('/product/tienda');

        
    },
    
}   
module.exports = productControllers;        




