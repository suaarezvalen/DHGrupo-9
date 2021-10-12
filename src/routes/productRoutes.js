const productControllers = require('./../controllers/productControllers')

const express = require('express');
const router = express.Router();
const path = require("path")
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
const validateCrear = [
    check("titulo")
        .notEmpty().withMessage("Debe completar el titulo").bail()
        .isLength({min: 2, max: 30}).withMessage("El titulo debe tener un minimo de 2 caracteres y un maximo de 30"),
    
    check("precio")
        .notEmpty().withMessage("Debe completar el email").bail()
        .isNumeric().withMessage("El precio debe ser numerico").bail()
        .isLength({ max: 5}).withMessage("El precio debe tener un maximo de 5 sifras"),

    check("descuento")
        .isNumeric().withMessage("El descuento debe ser numerico").bail()
        .isLength({min: 1, max: 100}).withMessage("error descuento"),

    check("descripcion")
        .notEmpty().withMessage("Debe completar la descripcion").bail()
        .isLength({min: 20, max: 1000}).withMessage("La descripcion debe tener un minimo de 20 caracteres"),    
    
    ]
/* VALIDATOR */

/* RUTAS */

router.get('/tienda', productControllers.tienda);

router.get('/crear', productControllers.crearProducto);
router.post('/crear',uploadFile.single("Imagen"), validateCrear, productControllers.crearProductoAccion);

router.get('/detalle/:id', productControllers.detalle);

router.get('/editar/:id', productControllers.editarProducto);
router.put('/editar/:id',uploadFile.single("Imagen"), productControllers.editarProductoAccion);

router.delete('/detalle/:id', productControllers.eliminarProducto);

/* RUTAS */

module.exports = router;