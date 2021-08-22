const userControllers = require('./../controllers/userControllers')

const express = require('express');
const router = express.Router();
const path = require("path")

const multer = require("multer");

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

/* RUTAS */

router.get('/registro', userControllers.registro);
router.post('/registro', uploadFile.single("Imagen"), userControllers.registroAccion);

router.get('/login', userControllers.login);

/* RUTAS */

module.exports = router;