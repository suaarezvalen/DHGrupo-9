const productControllers = require('./../controllers/productControllers')

const express = require('express');
const router = express.Router();

router.get('/detalle/:id?', productControllers.detalle);
router.get('/tienda', productControllers.tienda);
router.get('/crearProducto', productControllers.crearProducto);
router.post('/crearProducto', /*¿?*/);
router.get('/:id/editarProducto', productControllers.editarProducto);
router.put('/editarProducto', /*¿?*/);
router.delete('/tienda/:id')

module.exports = router;