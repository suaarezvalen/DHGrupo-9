const userControllers = require('./../controllers/userControllers')

const express = require('express');
const router = express.Router();
const path = require("path");
const multer = require("multer");
const { check } = require('express-validator');

/* MULTER */

const configImagen = multer.diskStorage({
    destination: function(req, file, cb) {
     cb(null, path.join(__dirname,'../../public/img'));
    },
    filename: function(req, file, cb) {
     let imageName =  Date.now() + file.originalname ;
     cb(null, imageName);
    }
});

const uploadFile = multer({storage: configImagen});

/* MULTER */
/* VALIDATOR */
const validateRegister = [
    check("nombre")
        .notEmpty().withMessage("Debe completar el nombre").bail()
        .isAlpha().withMessage("Solo puede contener letras").bail()
        .isLength({min: 5, max: 30}).withMessage("El nombre debe tener un minimo de 5 caracteres y un maximo de 30"),
    
    check("mail")
        .notEmpty().withMessage("Debe completar el email").bail()
        .isEmail().withMessage("Debes completar un email valido"),

    check("usuario")
        .notEmpty().withMessage("Debe completar el usuario").bail()
        .isLength({min: 3, max: 15}).withMessage("El usuario debe tener un minimo de 3 caracteres y un maximo de 15"),

    check("clave")
        .notEmpty().withMessage("Debe completar la contraseña").bail()
        .isLength({min: 5, max: 25}).withMessage("La contraseña debe tener un minimo de 5 caracteres y un maximo de 25"),    
    
    /*check("Imagen")
        .custom((value, {req}) =>{
            let file = req.file;
            if(!file){
                throw new Error("Debe cargar una imagen");
            }
            return true;
        })*/
    ]
 
    const validateLogin = [
        check("email")
            .notEmpty().withMessage("Debe completar el email").bail()
            .isEmail().withMessage("Debes completar un email valido"),
    
        check("clave")
            .notEmpty().withMessage("Debe completar la contraseña"),        
        ]
/* VALIDATOR */


/* RUTAS */

router.get('/registro', userControllers.registro);
router.post('/registro', uploadFile.single("Imagen"), validateRegister, userControllers.registroAccion);

router.get('/login', userControllers.login);
router.post('/login', validateLogin, userControllers.loginAccion)

router.get('/usuario', userControllers.usuarioData);

router.get('/logout', userControllers.cerrarSession);

/* RUTAS */

module.exports = router;