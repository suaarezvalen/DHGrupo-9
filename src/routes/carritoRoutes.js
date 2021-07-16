const carritoControllers = require('./../controllers/carritoControllers')

const express = require('express');
const router = express.Router();

router.get('/', carritoControllers.carrito);

module.exports = router;