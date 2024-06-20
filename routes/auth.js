const express = require('express');
const router = express.Router();
const authControlador = require('../controller/authControlador');

router.post('/registrar', authControlador.registrar);
router.post('/login', authControlador.login);

module.exports = router;