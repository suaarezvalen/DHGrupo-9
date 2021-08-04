const productControllers = require('./../controllers/productControllers')

const express = require('express');
const router = express.Router();

const multer = require("multer");

/* MULTER */

const configImagen = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../../public/img"));
    },
    filename: function(req, file, cb) {
        let nombreImagen = Date.now() + file.originalname;
        cb(null, nombreImagen)
    }
});

const uploadFile = multer({storage: configImagen});

/* MULTER */

/* RUTAS */

router.get('/tienda', productControllers.tienda);

router.get('/crear', productControllers.crearProducto);
router.post('/crear', productControllers.crearProductoAccion);

router.get('/detalle/:id', productControllers.detalle);

router.get('/editar/:id', productControllers.editarProducto);
//router.put('/editar/:id', productControllers.editarProductoAccion);

//router.delete('/:id', productControllers.eliminarProducto)

/* RUTAS */

module.exports = router;