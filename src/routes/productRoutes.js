const productControllers = require('./../controllers/productControllers')

const express = require('express');
const router = express.Router();

router.get('/detalle', productControllers.detalle);
router.get('/tienda', productControllers.tienda);
router.get('/crearProducto', productControllers.crearProducto);
router.get('/editarProducto', productControllers.editarProducto);

module.exports = router;