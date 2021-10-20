const fs = require('fs');
const path = require("path");
const { validationResult } = require('express-validator');
const mysql = require("mysql");
const productFilePath = path.join(__dirname, "../database/product.JSON");
//let product = JSON.parse(fs.readFileSync(productFilePath, "utf-8"));

const db = require('../database/models');
const { Console } = require('console');

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productControllers =  
{
    tienda: (req, res) => {
        let todosLosProductos;
        db.Producto.findAll()
        .then(productos =>{
            todosLosProductos = productos;  
            
            let arrayImg = Object.keys(todosLosProductos)

            let imagen = " " //devuelve un string de todas las img de cada producto falta obtener solo la de logo para ponerlo en tienda

            
        for(i in arrayImg) {
            imagen += todosLosProductos[i].img 
        }
             let arreglo = imagen.split(";")

             let imglogo = arreglo[0] //consegui el logo de del primer producto me faltan las otras
             
            

            console.log("que devuelveee    " + imglogo)
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
        console.log("final   " + nombresImagenes)
        console.log("imagen 0     " + nombresImagenes[2])

        
        let categorias = await db.categorias.findOne({
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

        if(resultValidate.errors.length == 0){
            
            let idEncontrado = req.params.id;
            let categorias = await db.categorias.findOne({
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
            img: req.file.filename,
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


    /* APIS */

    allProducts: (req, res) => {
       db.Producto.findAll()
        
       .then(productos =>{

            
            for (let i = 0; i < productos.length; i++) {
                
                let prueba = productos[i].categoria_fk
                
                for (let i = 0; i < prueba.length; i++) {
                    
                    if(i = 1 ){
                        return console.log("es 1")
                    }else if(i = 2 ){
                        return console.log("es 2")
                    }
                    
                }
                  
                
                //console.log("que devuelve    " + prueba)
            }

            let categoriasCount = "SELECT COUNT(*) from Producto where categoria_fk= 1"
              
            
                console.log(categoriasCount)

            return res.status(200).json({
                
                count: productos.length,
                //countByCategory: categoriasCount,
                products: productos,
                status: 200 , 
            })

        })
        
        .catch((error)=>{
            console.log("error   ",error)
        })
        

    },

    idProduct: (req, res) => {
        db.Producto.findByPk(req.params.id)
        .then(producto =>{
            return res.status(200).json({
                product: producto,
                status: 200
             }) 
         })
         
 
     },

    allCategories: (req, res) => {
        db.Categoria.findAll()
         
        .then(categorias =>{
             return res.status(200).json({
                 count: categorias.length,
                 data: categorias,
                 status: 200
             })
         })
         
 
     }
    /* APIS */

}   
module.exports = productControllers;        




