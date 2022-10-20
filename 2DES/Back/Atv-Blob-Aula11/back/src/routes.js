const express = require('express');
const router = express.Router();

const Cliente = require('./controllers/controllercli')

router.get('/clientes', Cliente.listarCli)
router.post('/clientes', Cliente.cadastraCli)

module.exports = router