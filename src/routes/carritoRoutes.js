const carritoControllers = require('./../controllers/carritoControllers')

const express = require('express');
const router = express.Router();
const path = require("path")

/* RUTAS */

router.get('/:id', carritoControllers.carrito);

/* RUTAS */

module.exports = router;