const express = require('express');
const router = express.Router();

const Cliente = require('./controllers/controllercli')
 
router.get('/clientes_blob/clientes', Cliente.listarCli)
router.post('/clientes_blob/clientes', Cliente.cadastraCli)
router.delete('/clientes_blob/clientes', Cliente.delCli)

module.exports = router