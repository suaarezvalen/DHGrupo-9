const dashboardControllers = require('./../controllers/dashboardControllers')

const express = require('express');
const router = express.Router();

/* RUTAS */

router.get("/productos", dashboardControllers.allProducts);

router.get("/productos/:id", dashboardControllers.idProduct);

router.get("/usuarios", dashboardControllers.allUsers);

router.get("/usuarios/:id", dashboardControllers.idUser);

router.get("/categorias", dashboardControllers.allCategories);

module.exports = router;