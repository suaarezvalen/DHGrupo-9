const fs = require('fs');
const path = require("path");
let bcryptjs = require("bcryptjs");
const { validationResult } = require('express-validator');

const userFilePath = path.join(__dirname, "../database/user.JSON");
let user = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const userControllers =  
{
    login: (req, res) => {
        res.render('user/login')
    },

    registro: (req, res) => {
        res.render('user/registro')
    },

    registroAccion: (req, res) => {
        let idNuevo = 0;
        
        let errors = validationResult(req);
    
        
        
        /*for (let i of user){
            if (idNuevo<i.id){
                idNuevo=i.id;
            }
        }*/                              //FOR DE JERO

        idNuevo++;

        let nombreImagen = req.file.filename

        let userNuevo = {
            id: idNuevo,
            nombre: req.body.nombre,
            mail: req.body.mail,
            usuario: req.body.usuario,
            contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
            img: nombreImagen
        }

        user.push(userNuevo);

        fs.writeFileSync(userFilePath, JSON.stringify(user, null, " "))

        res.redirect("/product/tienda")
    },



    loginAccion: (req, res) => {
    let errors = validationResult(req);
    
    if(errors.isEmpty()) {
        let userFilePath = path.join(__dirname, "../database/user.JSON");
        let user;
        if (userFilePath == "") {
            user = []
        }else{
            user = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
            }
        

        let usuarioALoguearse
        for (let i = 0; i < user.length; i++){
            if(user[i].mail == req.body.email) {
                if (bcryptjs.compareSync(req.body.contraseña, user[i].contraseña)) {
                    usuarioALoguearse = user[i]
                    req.session.usuarioLogueado = usuarioALoguearse
                    break;
                }
            }
        }
console.log(req.session)

        if (usuarioALoguearse == undefined) {
            return res.render('user/login', {errors: [
                {msg: "Contraseña o email son invalidos"}
            ]})
        }
        


        //res.redirect("../product/tienda")
        res.redirect("../user/check")
    }else{
          return res.render('user/login', {errors: errors.errors})  
        }
    },

    
    

}   
module.exports = userControllers;                                   