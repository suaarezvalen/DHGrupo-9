const userControllers = require('./../controllers/userControllers')

const express = require('express');
const router = express.Router();

router.get('/registro', userControllers.registro);
router.get('/login', userControllers.login);

module.exports = router;