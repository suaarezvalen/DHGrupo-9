const fs = require('fs');
const path = require("path");
const db = require('../database/models');



const dashboardControllers =  
{
    allProducts:  (req, res) => {
        db.Producto.findAll()
        
        .then(async productos =>{
            
            let countShooter = await db.Producto.count({
                where: {
                  categoria_fk: 1
                }
            })
            let countSimulador = await db.Producto.count({
                where: {
                  categoria_fk: 2
                }
            })
            let countRol = await db.Producto.count({
                where: {
                  categoria_fk: 3
                }
            })
            let countEstrategia = await db.Producto.count({
                where: {
                  categoria_fk: 4
                }
            })
                //.then(categorias =>{
                let countCategory = {
                Shooter: countShooter, 
                Simulador: countSimulador,
                Rol: countRol, 
                Estrategia: countEstrategia
                }

                return res.status(200).json({
                count: productos.length,
                countByCategory: countCategory,
                products: productos,
                status: 200 , 
                })
               //}) 
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

    allUsers: (req, res) => {
        db.Usuario.findAll({
            attributes: ["id","nombre","mail","usuario","img"]
        })
        
         
        .then(usuarios =>{
            
        
             return res.status(200).json({
                 total: usuarios.length,
                 data: usuarios,
                 status: 200
             })
         })
         
 
    },

    idUser: (req, res) => {
        db.Usuario.findByPk(req.params.id)
         
        .then(usuario =>{
             return res.status(200).json({
                data: usuario,
                status: 200
             })
         })
    },

    allCategories: (req, res) => {
        db.Categoria.findAll({
            attributes : ["nombre"]
        })

        .then(categorias =>{
            return res.status(200).json({
                count: categorias.length,
                data: categorias,
                status: 200
            })
        })
    }
}   
module.exports = dashboardControllers;        