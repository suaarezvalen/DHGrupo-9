const fs = require('fs');
const path = require("path");
let bcryptjs = require("bcryptjs");
const { validationResult } = require('express-validator');

const userFilePath = path.join(__dirname, "../database/user.JSON");
let user = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const db = require('../database/models')

const userControllers =  
{
    login: (req, res) => {
        res.render('user/login')
    },

    registro: (req, res) => {
        res.render('user/registro')
    },
    
    registroAccion: (req, res) => {
        let errors = validationResult(req);

        db.Usuario.create({
		    nombre: req.body.nombre,
		    mail: req.body.mail,
		    usuario: req.body.usuario,
            clave: bcryptjs.hashSync(req.body.clave, 10),
            img:  req.file.filename

        })
        .then((resultado)=>{
            console.log("Se creo bien")
        })
        .catch((error)=>{
            console.log(error)
        })
        res.redirect("/product/tienda")
    },

    loginAccion: (req, res) => {
    let errors = validationResult(req);
    console.log("body", req.body)
    db.Usuario.findOne({
        where: {
            mail: req.body.email
        }
    })
    .then((resultado) => {


        if (resultado == []){
            return res.render('user/login', {errors: [
            {msg: "clave o email son invalidos"}
        ]})
        } else {
            if (bcryptjs.compareSync(req.body.clave, resultado['clave'])) {  
                usuarioALoguearse = resultado.usuario
                req.session.usuarioLogueado = usuarioALoguearse
                res.redirect("../user/check")
        
            }
            return res.render('user/login', {errors: [
                {msg: "clave o email son invalidos"}
            ]})
        }

    })
    .catch((error) => {
        console.log('ERRRO')
        console.log(error)
    })
    }, 
}   
module.exports = userControllers;                                   