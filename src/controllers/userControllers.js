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
        const resultValidate = validationResult(req);

        if(resultValidate.isEmpty()){
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
        } else {
            return res.render("user/registro", {errores: resultValidate.mapped(), oldData: req.body});
            
        }
        

        
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
                //usuarioALoguearse = resultado.mail
                req.session.usuarioLogueado = resultado;
                res.redirect("../user/usuario")

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
    usuarioData: (req, res) => {
        /*let idEncontrado = req.params.id;

        let usuarioEncontrado;

        db.Usuario.findOne({
            where: {id: idEncontrado}
        }).then(resultado =>{
            usuarioEncontrado = resultado;
        res.render('user/usuario', {detalleUsuario : usuarioEncontrado}); 
    } */
    
        res.render('user/usuario', {
            user: req.session.usuarioLogueado
        }
    )},
   cerrarSession: (req, res) => {
        req.session.destroy();
        console.log(req.session)
        return res.redirect('/');
    }
        
}   
module.exports = userControllers;                                   