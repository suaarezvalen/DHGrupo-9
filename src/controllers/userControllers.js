const fs = require('fs');
const path = require("path");
let bcryptjs = require("bcryptjs")

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

        for(let i=0;i<user.length; i++) {
            if(idNuevo<user[i].id){
                idNuevo=user[i].id
            }
        }
        
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
    }



}   
module.exports = userControllers;                                   