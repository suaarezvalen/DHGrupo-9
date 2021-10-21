const categoriaControllers = require('./../controllers/categoriaController')

const express = require('express');
const router = express.Router();
const path = require("path")


router.get("/", categoriaControllers.allCategories)

module.exports = router;