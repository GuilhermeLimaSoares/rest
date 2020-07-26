const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();

const UsuariosController = require('../controllers/usuarios-controller');

router.post('/cadastro', UsuariosController.postCadastro);

router.post('/login', UsuariosController.postLogin);

module.exports = router;