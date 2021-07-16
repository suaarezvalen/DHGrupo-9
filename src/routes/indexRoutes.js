const indexControllers = require('./../controllers/indexControllers')

const express = require('express');
const router = express.Router();

router.get('/', indexControllers.index);

module.exports = router;