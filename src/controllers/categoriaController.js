const fs = require('fs');
const path = require("path");
const db = require('../database/models');



const categoriaControllers =  
{
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
module.exports = categoriaControllers;        